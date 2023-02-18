
const express=require("express")
const app=express()
const cors = require('cors');


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))



//connecting Db
require('./db/conn')

//Router touch
app.use(require('./Router/route'))




app.listen(5000,()=>{
    console.log("Listening")
})