//check json web token in the header

const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

exports.protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization/*req.headers.authorization is exist if true then check next cond. */ && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];//space hata rhy Bearer k baad wala or 2nd part [1] arry ka ly rhy jo token h eg: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyNDIzMTQ5MjEyMjkiLCJpYXQiOjE2NzMxMTkwMjMsImV4cCI6MTY3MzExOTYyM30.nDR48UCTYmbWFabQnbxU9Pq4BaKLid40RtawI-F2YaE
    }

    if (!token) {
        return next(new ErrorResponse("not authorized to access this route ,you have no token", 401)); //remove ,you have no token later
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  //decrypt token
        console.log("cnic:" + decoded.id);// remove later

        const user = await User.findOne({ cnic: decoded.id }); // yaha decoded me id hamri cnic h
        if (!user) return next(new ErrorResponse("No user found with this id", 404));
        req.user = user; // use for next route
        next(); // getPrivateData call hoga

    } catch (error) {
        return next(new ErrorResponse("Not authorized to access this route", 401)); // due to (err.name == "TokenExpiredError" || err.name == "JsonWebTokenError")
    }
}