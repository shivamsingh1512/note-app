const User = require( '../models/user.js');
const bcrypt = require( 'bcrypt');
const validator = require('validator');
const jwt = require("jsonwebtoken");

 const register = async (req,res)=>{
    try{
        const {email , password , firstname ,lastname} = req.body;
        if (!email || !password || !firstname ||  !lastname) {
             return res.status(400).json({ message: 'All fields are required' });
        }
        const existingUser = await User.findOne({ email }); 
        if (existingUser){
            return res.status(409).json({message:"User already exists"});
        }
        if(!validator.isEmail(email)){
            res.send("email not correct");
         }
        if (!validator.isStrongPassword(password)){
            res.send("Password not strong")
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            firstname,
            lastname,
            email,
            password:hashedPassword
        }) 
        await newUser.save();
        console.log(User);
         res.status(201).json({ message: 'User registered' });
        
    } catch(err){
        console.error('Register Error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
 

const logIn = async (req,res) =>{
    try{
        const {email , password } = req.body;
        if(!email || !password ){
            return res.status(400).json({ message: 'Email and password are required' });
        }
        const user = await User.findOne({email});
        if (!user){
            return res.status(404).json({ message: 'User not found' });

        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id }, process.env.jwt_key);
        res.json({ token });
    } catch(err){
        console.error('Login Error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {register , logIn};