const User = require( '../models/user.js');
const bcrypt = require( 'bcrypt');
const validator = require('validator');

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
         res.status(201).json({ message: 'User registered' });
        
    } catch(err){
        console.error('Register Error:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {register};