const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    Conversation:{
        type:String,
    },
    senderId:{
        type:Number,
    },
    reciverId:{
        type:String,
    },
    text:{
        type:String,
    },
    type:{
        type:String
    },
   
},
    {
        timestamps:true
    }
)


const Register=new mongoose.model("MessageDetails",userschema)
module.exports=Register