
const express = require('express')

const mongoose = require('mongoose')
const usersRoute = require('./routes/users')

const app = express()

const uri = 'mongodb+srv://dev-career:test1234@dev-users.ig09foa.mongodb.net/?retryWrites=true&w=majority' 

async function connect(){
    try{
        await mongoose.connect(uri)
        console.log('connected to mongoDB')
    } catch(err){
        console.error(error);
    }
}
connect();

app.use(express.json())



app.use('/users', usersRoute)
//app.use('/users/login', usersRoute)

app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})