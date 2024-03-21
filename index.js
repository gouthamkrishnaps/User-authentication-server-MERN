// 1) import .env
// load .env file contents into process.env by default
require('dotenv').config()

// 2) import express to create server
const express = require('express')

// 3) import cors 
const cors = require('cors')

// import router
const router = require('./Routes/router')

//import connection,js file
require('./DB/connection')

// 4) create server - Creates an Express application. The express() function is a top-level function exported by the express module
const uaServer = express()

// 5) use of cors by server
uaServer.use(cors())

// 6) Returns middleware that only parses json and convert it into javascript object
uaServer.use(express.json())

//server
uaServer.use(router)

// 7) customize the port - bydefault - 3000
const PORT = 4000 || process.env.PORT

// 8) run server
uaServer.listen(PORT,()=>{
    console.log(`SERVER RUNNING SUCCESSFULLY AT PORT NUMBER ${PORT}`);
})

// 9) get http request to baseUrl -
uaServer.get('/',(req,res)=>{
    res.send('<h1 style="color:red">User Auth server running successfully and waiting for client request</h1>')
})

/* // 10) post request
pfServer.post('/',(req,res)=>{
    res.send('POST REQUEST')
})

// 11) PUT request
pfServer.put('/',(req,res)=>{
    res.send('PUT REQUEST')
}) */