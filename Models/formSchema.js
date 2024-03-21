//importing mongoose
const mongoose = require("mongoose")

//import validator
const validate = require("validator")

const formSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validate(value){
           if(!validate.isEmail(value)){
            throw new Error('Invalid Email')
           }
        }
    },
    password: {
        type:String,
        require:true,
        unique:true
    },
    phone: {
        type:Number,
        require:true,
        unique:true
    },
    date: {
        type:String,
        require:true
    },
    gender: {
        type:String,
        require:true
    },
    designation: {
        type:String,
        require:true
    },
    about: {
        type:String,
        require:true
    },
    resume: {
        type:String,
        require:true
    },
})

//create model
const fromData = mongoose.model("fromData",formSchema)

//export the model
module.exports = fromData