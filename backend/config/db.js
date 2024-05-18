const mongoose = require("mongoose")

async function connectDB(){
    try{
       await mongoose.connect(process.env.MONGODB_URI)
        // console.log("connected to DB")
    }catch(err){
        console.log("error connecting to database" , err)
    }
}

module.exports =connectDB