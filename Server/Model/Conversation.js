const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    members:{
        type:Array,
    },
    message:{
        type:String
    }
   
},
{
    timestamps:true
}
)


const Register=new mongoose.model("Conversation_Details",userschema)
module.exports=Register