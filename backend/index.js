const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); 
const userRouter = require('./routes/userroutes');
const noteRoutes = require('./routes/notesroutes')
const { logIn ,register  } = require('./controllers/usercontroller');
const {createNote , deleteNote } = require('./controllers/notescontroller')
const userauth =require('./middleware/authmiddleware')
const cookieParser = require("cookie-parser");

dotenv.config();
connectDB();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRouter);
app.use('/api/notes', noteRoutes);

app.get("/",(req,res)=>{
    res.send("hello");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});





// npm i express 
// npm i  mongoose 
// npm i dotenv
//npm i bcrypt 
//npm i validator 
//npm i jsonwebtoken