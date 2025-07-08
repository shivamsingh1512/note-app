const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); 
const router = require('./routes/userroutes');
const { logIn } = require('./controllers/usercontroller');
const userauth =require('./middleware/authmiddleware')
const cookieParser = require("cookie-parser");

dotenv.config();
connectDB();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
//npm i jsonwebtoken