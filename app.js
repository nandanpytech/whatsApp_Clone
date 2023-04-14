
const express=require("express")
const app=express()
const cors = require('cors');
const path=require("path")


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const PORT=process.env.PORT || 5000



//connecting Db
require('./db/conn')

//Router touch
app.use(require('./Router/route'))

// deployment 
const _dirname1=path.resolve()
// console.log(_dirname1);
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.resolve(_dirname1,"client","build")))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(_dirname1,"client","build","index.html"))
    })
}else{
    app.get('/',(req,res)=>{
        res.send("App running successfully")
    })
}

// deployment 

app.listen(PORT,()=>{
        console.log("Listening")
    })

//Port listning..
// const server=app.listen(PORT,()=>{
//     console.log("Listening")
// })


// const io=require("socket.io")(server,{
//     cors:{
//         origin:"http://localhost:3000"
//     }
// })

// let users=[]

// const addUser=(userData,socketId)=>{
//     !users.some(user=>user.sub == userData.sub) &&  users.push({...userData,socketId})
// }
// const getUser=(userId)=>{

//     return users.find(user=>user.sub===userId)
// }

// io.on('connection',(socket)=>{

//     socket.on("addUsers",userData=>{
//         addUser(userData,socket.id)
//         io.emit("getUsers",users)
//     })

//     socket.on("sentMessage",data=>{
//         const user=getUser(data.reciverId )
//         io.to(user.socketId).emit("getMessage",data)
//     })
// })