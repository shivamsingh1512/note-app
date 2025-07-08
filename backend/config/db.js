const mongoose = require('mongoose')


const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.Mongo_URl);
        console.log(" MongoDB connected");
    } 
    catch(err){
         console.error( "MongoDB connection error:", err.message);
    }
}

module.exports = connectDB;