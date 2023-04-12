
const express=require("express")
const app=express()
const cors = require('cors');


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const PORT=process.env.PORT || 5000



//connecting Db
require('./db/conn')

//Router touch
app.use(require('./Router/route'))



//Port listning..
app.listen(PORT,()=>{
    console.log("Listening")
})