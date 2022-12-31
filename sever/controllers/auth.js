const User = require('../models/user');

exports.register = async (req,res,next) => { //Register Route
    const {username,email,password} = req.body; //resigter me post req me ye fields ain gi 
    res.send("Register Route");

    try{
        const user = await User.create({
            username,
            email,
            password,
        }); // register user 

        res.status(201).json({
            success: true,
            user,
        });
    } catch(error){
        res.status(500).json({
            success: false,
            error : error.message,
        });
    }
    
    

};

exports.login = (req,res,next) => {
    res.send("Login Route");
};

exports.forgotpassword = (req,res,next) => {
    res.send("Forget Password Route");
};

exports.resetpassword = (req,res,next) => {
    res.send("Reset Password Route");
};