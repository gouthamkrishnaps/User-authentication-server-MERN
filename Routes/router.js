//path to resolve the client request

// 1) import express
const express = require('express')

// 2) create an object for the class Router in express
const router = new express.Router()

const userController = require('../Controller/userController')

const formController = require('../Controller/formController')

// 3) path to resolve requests

    // 1) register
    router.post('/user/register',userController.register)

    // 2) login
    router.post('/user/login',userController.login)

    // 3) get a user
    router.get('/user/detials/:username',userController.getAUsersController)

    //4) update user password
    router.put('/user/update',userController.editUserController)

    // 5) addFormDATA
    router.post('/user/fromdata',formController.addFormData)

// 4) Export router
module.exports = router