const express=require('express')
const app=express()
const router=express.Router();
const User=require("../Model/User.js")
const Conversation=require("../Model/Conversation.js")
const Message=require("../Model/message.js")


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
router.post("/getConversation",async(req,res)=>{
    const {senderId,reciverId}=req.body.data;
    try {
           let conversation= await Conversation.findOne({members:{$all:[senderId,reciverId]}})
           return res.status(200).json(conversation)
            
        } catch (error) {
           res.json(error)
        }
}
)

router.post("/setConversation",async(req,res)=>{
   
    try {
        const {senderId,reciverId}=req.body.data;
        const exist=await Conversation.findOne({members:{$all:[reciverId,senderId]}});
        if(exist){
            return res.status(200).json("Conversation already exists")
        }
        const newConversation=new Conversation({
            members:[senderId,reciverId]
        })
        await newConversation.save()
        return res.status(200).json("Conversation saved successfully")

    } catch (error) {
        return res.json(error)
    }
    
})

router.post("/newmessage",async(req,res)=>{
    try {
        const newmessage=new Message(req.body.data)
        await newmessage.save();
        await Conversation.findByIdAndUpdate(req.body.data.Conversation,{message:req.body.data.text})
        return res.status(200).json("Message sent successfully")

    } catch (error) {
        return res.status(500).json(error)
    }
})

router.get("/getmessages/:id",async(req,res)=>{
    try {
      const messages=await Message.find({Conversation:req.params.id})
      return res.status(200).json(messages)

    } catch (error) {
      return res.status(500).json(error)
    }
})




module.exports=router