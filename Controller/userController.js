//import model
const users = require('../Models/userSchema')

// logic for register
exports.register = async(req,res)=>{
    //logic
    console.log('inside user controller register logic');
    
        const {fullname,username,password,address,gender} = req.body
    try{
        const existingUser = await users.findOne({username})
        if(existingUser){
            res.status(406).json('Account already exist.....please login')
        }
        else{
            const newUser = new users({
                fullname, //only use one word if both key and value name is same
                username,
                password,
                address,
                gender
            })
            //inorder to add above object use save method in mongoose
            await newUser.save()

            //response
            res.status(200).json(newUser)
        }
    }
    catch(err){
        res.status(401).json('Resgiter request failed due to',err)
    }
    
}

//logic for login
exports.login = async(req,res)=>{
    console.log('inside user controller login logic');

    const {username,password} =req.body

    try{ 
        const existingUser = await users.findOne({username,password})
        if(existingUser){
            res.status(200).json({
                existingUser
            })
        }
        else{
            res.status(404).json('Invalid email id or password')
        }
    }
    catch(err){
        res.status(401).json('login failed due to ',err)
    }
}

//logic to get users
exports.getAUsersController = async(req,res)=>{
    console.log('inside get a user controller');
    const {username} = req.params
    console.log(username);
    try {
        const user = await users.findOne({username})
        console.log(user);
        res.status(200).json(user)

    } catch(err){
        res.status(401).json(`Request Failed due to ${err}`)
        console.log('Request Failed');
    }
}

//update user detials
exports.editUserController = async(req,res)=>{
    console.log('inside user edit controller');
    const {_id,fullname,username,password,address,gender} = req.body

    try {
        const updateUser = await users.findByIdAndUpdate({_id:_id},{fullname,username,password,address,gender},{new:true})

        await updateUser.save()
        res.status(200).json(updateUser)

    } catch (err) {
        res.status(401).json(err)
    }
}