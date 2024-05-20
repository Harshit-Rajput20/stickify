const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs');

async function userSignUpController(req ,res){
    try{

        const {email ,password , name} = req.body

        const user = await userModel.findOne({email})
        if(user)
            {
                throw new Error("user already exists")
            }

        console.log(req.body)

        if(!email){
            throw new Error("please provide emial")
        }
        if(!password){
            throw new Error("please provide password")
        }
        if(!name){
            throw new Error("please provide name")
        }
        

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt)

       if(!hashPassword){
        throw new Error("something is wrong");
       }
       const payload = {
        ...req.body,
        password : hashPassword
       }


        const userData  = new userModel(payload)
        const saveUser  = await userData.save() 

        res.status(201).json({
            data:saveUser , 
            success : true,
            error : false , 
            message: "user created succesfully "
        })

    }catch(err){

        console.log(err.message)
           
        res.json({
            message: err.message || err , 
            error:true,
            success:false,
        })
    }
}
module.exports = userSignUpController