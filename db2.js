const mongoose =require('mongoose');
const mongoURL='mongodb://127.0.0.1:27017/demo';
mongoose.connect(mongoURL);
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