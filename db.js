const mongoose=require("mongoose");
var mongoURL='mongodb+srv://dbUser:dbUser@cluster0.kj1jq2f.mongodb.net/mern-events'


mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

var connection=mongoose.connection

connection.on('error',()=>{
console.log('mongodb connection failed')
})

connection.on('connected',()=>{
    console.log('mongodb connection successful')
})


module.exports=mongoose

