const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");

const app = express();

//Middleware
app.use(express.json()); // req.body
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Routes Middleware
app.use("/api/auth", require('./routes/auth'));
app.use("/api/private", require('./routes/private'));

// ErrorHandle Middleware (should be last peice of middleware)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);




process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
});
