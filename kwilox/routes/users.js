const { application } = require("express")
const express = require("express")
const router = express.Router()
const User = require('../model/user')
const bcrypt = require("bcrypt")

router.get('/', async(req, res)=>{
    try{
            const users = await User.find()
            res.json(users)
    }catch(err){
        res.send('Error '+ err)
    }
})


router.post('/', async(req, res)=>{
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        Age:req.body.Age,
        phoneNumber:req.body.phoneNumber,
        password:hashedPassword,
       
    }) 
    try{ 
            const user1 = await user.save()
            res.json(user1)
    }catch(err){
        res.send('Error: '+ err)
    }
})

router.get('/login', async(req, res)=>{
    const user = User.findOne({email: req.body.email})
    if(user==null){
        return res.status(404).send(`user not found`)
    }
    try{
    if (await bcrypt.compare(req.body.password, user.password)){
        res.send(`login success`)
    } else{
        res.send(`not allowed`)
    }
    }catch{
        res.status(500).send()
    }
})

module.exports=router