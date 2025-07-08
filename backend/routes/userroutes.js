const express = require("express");
const {register , logIn} = require("../controllers/usercontroller");

const router = express.Router();


router.post("/register" , register);
router.post('/login', logIn);

module.exports=router;