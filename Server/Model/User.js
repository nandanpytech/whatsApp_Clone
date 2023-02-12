const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    iss:{
        type:String,
    },
    nbf:{
        type:Number,
    },
    aud:{
        type:String,
    },
    sub:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    email_verified:{
        type:Boolean
    },
    azp:{
        type:String
    },
    name:{
        type:String,
        required:true

    },
    picture:{
        type:String,
        required:true

    },
    givern_name:{
        type:String
    },
    family_name:{
        type:String
    },
    iat:{
        type:Number
    },
    exp:{
        type:Number
    },
    jti:{
        type:String
    }

   
})

// userschema.pre("save",async function(next){
//     if (!this.isModified('password')) return next();
//     this.password=await bcrypt.hash(this.password,10)
//     next()
// })
// userschema.methods.generateAuthtoken=async function(){
//     try {
//         const token=jwt.sign({id:this._id.toString()},"MynameisNandan")
//         this.tokens=this.tokens.concat({token:token})
//         await this.save()
//         return token
//     } catch (error) {
//         console.log(error)
//     }
// }
const Register=new mongoose.model("UserDetails",userschema)
module.exports=Register