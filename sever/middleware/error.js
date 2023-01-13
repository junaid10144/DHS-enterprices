const ErrorResponse = require('../utils/errorResponse');


const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    console.log(err);

    if (err.code == 23505) {
        const message = `Duplicate Field Value Enter `;
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode /*error.statusCode  galt h undefined h*/ || 500).json({
        success: false,
        error:  error.message || "Server Error",
        code: err.code || error.statusCode ,
        detail:process.env.NODE_ENV === "development" ? err.detail: null,
        stack: process.env.NODE_ENV === "development" ? error.stack : null // production me stack message show nhi krna
    })
}

// https://aloneonahill.com/blog/http-status-codes#:~:text=A%20403%20status%20code%20indicates,allow%20what%20was%20being%20asked.
module.exports = errorHandler;