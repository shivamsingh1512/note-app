
const jwt = require("jsonwebtoken");
const User=require("../models/user")

const userAuth = async (req, res,next) => {
  try {
    const token=req.cookies.token;
    //console.log(token);

    if(!token){
        return res.status(401).json({ message: "User not authenticated" });
    }

    const decoded=  jwt.verify(token,process.env.jwt_key);
     if (!decoded || !decoded._id) {
      return res.status(401).json({ message: "Invalid token payload" });
    }
    console.log("Decoded JWT:", decoded);


    const user=await User.findById(decoded._id);
    if(!user){
      console.log("User not found for ID:", decoded._id);
      return res.status(401).send(" user not found");
    }
    req.user= user;
    next();

  } catch (err) {
    console.error('Auth Middleware Error:', err);
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
module.exports=userAuth;
