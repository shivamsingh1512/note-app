const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); 
const router = require('./routes/userroutes');

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.use("/api", router);
app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(3000,()=>{
    console.log("app is listening")
})





// npm i express 
// npm i  mongoose 
// npm i dotenv
//npm i bcrypt 
//npm i validator 