const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')


const app = express()
app.use(cors())

const Port = 8080 || process.env.Port
connectDB().then(()=>{

    app.listen(Port,()=>{
        console.log("connected to db")
        console.log("server is running")
    })
    
})




