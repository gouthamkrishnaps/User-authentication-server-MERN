//import model
const fromData = require('../Models/formSchema')

//add project

exports.addFormData = async(req,res)=>{
    console.log('inside addFormData request');

    const {name,email,password,phone,date,gender,designation,about,resume} = req.body
    console.log(`${name},${email},${password},${phone},${date},${gender},${designation},${about},${resume}`);

    try{
        const existingForm = await fromData.findOne({email})
        if(existingForm){
            res.status(406).json('Form already exist... Upload new Details')
        }
        else{
            const newformData = new fromData({
                name,
                email,
                password,
                phone,
                date,
                gender,
                designation,
                about,
                resume
            })
            await newformData.save()
            res.status(200).json(newformData)
        }
    }catch(err){
        res.status(401).json(`request failed due to ${err}`)
    }


    //res.status(200).json('add project request recieved')
}