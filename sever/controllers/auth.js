const User = require('../models/User');
const { signupValidator, loginValidator } = require('../utils/validation');
const ErrorResponse = require('../utils/errorResponse');
const sentEmail = require('../utils/sentEmail');
const crypto = require('crypto');


/* Register User */
exports.register = async (req, res, next) => { //Register Route
    try {

        //validation
        const { error } = await signupValidator(req.body)
        if (error) return next(new ErrorResponse(error.details[0].message), 400);
        //if (error) return res.status(400).json({ status: false, message: error.details[0].message })

        const user = await User.create(req.body); // register new user create

        //Generate Token
        //const token = generateToken(user.cnic);//yaha user id deni jo database me auto generate ho


        // Save the token into an HTTP only cookie
        /*res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400), // 1 day
            sameSite: "none",
            secure: true
        });*/


        /* res.status(201).json({
             success: true,
             user,
             token,//ye shayd databse me save krna
         });*/

        sendToken(user, 201, res);

    } catch (error) {
        next(error);
        // res.status(500).json({
        //     success: false,
        //     error: error.message,
        // });
    }
};

/* Login User */
exports.login = async (req, res, next) => {
    try {
        // Validate Request
        const { error } = await loginValidator(req.body)
        //if (error) return res.status(400).json({ status: false, message: error.details[0].message })
        if (error) return next(new ErrorResponse(error.details[0].message), 400);

        // check if user exist
        const user = await User.check(req.body);
        console.log("user exist");

        //Generate Token
        //const token = generateToken(user.cnic);

        // Save the token into an HTTP only cookie
        /*res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400), // 1 day
            sameSite: "none",
            secure: true
        });

        res.status(200).json({
            success: true,
            user,
            token
        });*/
        sendToken(user, 200, res);


    } catch (error) {
        next(error);


        // res.status(error.code).json({
        //     success: false,
        //     error: error.message,
        // });
    }

};

exports.forgotpassword = async (req, res, next) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return next(new ErrorResponse("Email could not be sent", 404));//No user found with this email
        const resetToken = User.getPasswordResetToken(user);
        console.log("reset token ki lenth = "+resetToken.length);
        await User.savePasswordResetToken(user.cnic, resetToken); //save in database

        // Send the password reset email to the user here
        const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`; //frontend i ga yaha ye env varaible sy lena chahaye

        //is rtha nhi likhna aik template bhejo yaha html na likho
        const message = `
            <h1>Hi, ${user.name}</h1>
            <p>We received a request to reset the password on your DHS Account.<br>Please go to this link to reset your password<hr></p>
            <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
        `
        try {
            await sentEmail({
                to: user.email,
                subject: "Password Reset on DHS enterprices",
                text: message
            })

            res.status(200).json({ success: true, date: "Email Sent" });

        } catch (error) {
            User.removePasswordResetToken(user.cnic);
            return next(new ErrorResponse("Email couldn't be send", 500));
        }

    } catch (error) {
        next(error);
    }

};

exports.resetpassword = async (req, res, next) => {
    const passwordResetToken = crypto.createHash('sha256').update(req.params.resetToken).digest("hex");
    try{
        const user = await User.findPasswordResetToken({
            passwordResetToken,
            passwordResetExpire:Date.now()
        });
        if (!user) return next(new ErrorResponse("Invalid Reset Token", 400));
       
       //continue krna yaha sy isme user.password nhi h
        user.password = req.body.password;
        await User.removePasswordResetToken(user.user_id);
        user = await User.updatePassword(user);
        res.status(201).json({ // token jana chaheye i think
            sucess:true,
            message:"Password Reset Success"
        })

    } catch(error){

    }
};

const sendToken = (user, statusCode, res) => {
    const token = User.getSignedToken(user);
    res.status(statusCode).json({ success: true, token })

}