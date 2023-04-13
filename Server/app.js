
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
const _dirname1=path.resolve("../")
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

//Port listning..
app.listen(PORT,()=>{
    console.log("Listening")
})