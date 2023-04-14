const mongoose= require('mongoose')
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://bilaginandan333:Nandan333@cluster0.lvm380m.mongodb.net/WhatsApp_Clone?retryWrites=true&w=majority",

).then(()=> console.log("connected"))
.catch((err)=>console.log(err));

