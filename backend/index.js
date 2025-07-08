const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); 

dotenv.config();
connectDB();
const app = express();

app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(3000,()=>{
    console.log("app is listening")
})





// npm i express 
// npm i  mongoose 
// npm i dotenv