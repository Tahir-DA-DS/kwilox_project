const mongoose = require("mongoose")
const Role={
    ADMIN:'admin',
    BASIC:'user'
}

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        require:true,
    },
    Age:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        required:true,
    },
},{timestamps:true});


module.exports=mongoose.model('User', UserSchema)
