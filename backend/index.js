const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
app.use(cors())
app.use(express.json())
app.use("/api",router)

const Port = 8080 || process.env.Port
connectDB().then(()=>{

    app.listen(Port,()=>{
        console.log("connected to db")
        console.log("server is running")
    })
    
})




