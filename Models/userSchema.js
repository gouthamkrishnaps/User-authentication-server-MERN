//importing mongoose
const mongoose = require("mongoose")

//import validator
const validate = require("validator")

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        require:true,
        min:[3,'Must be atleast 3 character  ']
    },
    username:{
        type:String,
        require:true,
        unique:true,
        min:[3,'Must be atleast 3 character '],
        validate(value){
            if(!validate.isAlphanumeric(value)){
            throw new Error('Invalid username')
            }
        }
    },
    password:{
        type:String,
        require:true,
        min:[3,'Must be atleast 3 character ']
    },
    address:{
        type:String,
        require:true,
        min:[3,'Must be atleast 3 character  ']
    },
    gender:{
        type:String,
        require:true,
    }
})

//create model
const users = mongoose.model("users",userSchema)

//export the model
module.exports = users