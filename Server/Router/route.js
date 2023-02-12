const express=require('express')
const app=express()
const router=express.Router();
const User=require("../Model/User.js")


router.post("/add",async(req,res)=>{
   const data=req.body.data
    try {
        let exist=await User.findOne({sub:data.sub})
        if(exist){
            res.status(200).json({msg:"User already existed"});
            return;
        }
        const newuser=new User(data)
        await newuser.save()
        return res.status(200).json(newuser)

    } catch (error) {
        return res.status(500).json(error.message)
    }
})
router.get("/users",async(req,res)=>{
    try {
        const users=await User.find({})
        return res.status(200).json(users)
    } catch (error) {
        res.json(error)
    }
})





module.exports=router