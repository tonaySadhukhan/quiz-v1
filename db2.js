require('dotenv').config();
const mongoose =require('mongoose');
const mongoURL=process.env.mongourl;
mongoose.connect(process.env.mongourl);
const db=mongoose.connection;

db.on('connected',()=>{
    console.log("Connected to MongoDB server");
});

db.on('error',(error)=>{
    console.log(error);
});

db.on('disconnected',()=>{
    console.log("Disconnected");
});
module.exports=db;
