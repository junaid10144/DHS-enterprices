const db = require("../db");
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');
const { object } = require("joi");



//auth controller ka Create method banana jisy new user create ho sky 
const create = async (user) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(user.password, salt);
    console.log(passwordHash.length);
    const results = await db.query("INSERT INTO account (cnic,name,email,password,phone,country,city,address) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *", [user.cnic, user.name, user.email, passwordHash, user.phoneNumber, user.country, user.city, user.address])
    console.log("succesfull create account");
    console.log(results.rows[0]);//console.log(results);
    return results.rows[0];
  } catch (error) {
    console.log(error);
    throw error; // not remove
    //   res.status(500).json({
    //     success: false,
    //     error: "some dtabase error",
    // }); ye isliye nhi likha qk controller (User.js) me await laga howa jesy error aya to wo usky catch me chala gya 

  }

}

const check = async (user) => {
  try {
    const results = await db.query("SELECT cnic,name,email,password,phone,country,city,address FROM account WHERE email = $1", [user.email])
    if (results.rowCount == 0) throw new ErrorResponse("User not found, please Signup", 404/*401 */);//Invalid Credentials
    console.log("succesfull Fond an account of " + user.email);

    //User exists, check if password is correct
    const isMatch = await bcrypt.compare(user.password, results.rows[0].password);
    if (!isMatch) throw new ErrorResponse("Invalid Credentials", 400 /*403 || 401 unauthorized*/);
    console.log("Match ho gya ? " + isMatch);
    console.log(results.rows[0]);
    return results.rows[0];

  } catch (error) {
    console.log(error);
    throw error;
  }
}

const findOne = async (id) => {
  try {
    const results = await db.query(`SELECT cnic,name,email,password,phone,country,city,address FROM account WHERE ${Object.keys(id)} = $1`, [Object.values(id).toString()]);
    return results.rows[0];
  } catch (error) {
    console.log(error);
    throw error;
  }

}

const updatePassword = async (user) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(user.password, salt);
    console.log(passwordHash.length);//remove later
    const results = await db.query("UPDATE account SET password=$1 where cnic=$2 RETURNING *", [passwordHash,user.cnic])
    console.log("succesfull update password");
    console.log(results.rows[0]);//console.log(results);
    return results.rows[0];
  } catch (error) {
    console.log(error);
    throw error; 
  }
}

const findPasswordResetToken = async (data) => {
  try {
    const query = `select token,user_id,name,email,password,phone,country,city,address from password_reset_tokens join account on user_id=cnic where token = $1 and expiration_time > $2`;
    const values = [data.passwordResetToken,data.passwordResetExpire];
    const results = await db.query(query,values);// query me sy extra column remove kr lena
    return results.rows[0];
  } catch (error) {
    console.log(error);
    throw error;
  }

}

const savePasswordResetToken = async (userId, token) => {
  try {
    const expirationTime = new Date(); //resetPasswordExpire
    expirationTime.setMinutes(expirationTime.getMinutes() + 10); //let resetPasswordExpire = Date.now() + 10 * (60 * 1000);//10 min token valid
    const query = 'INSERT INTO password_reset_tokens (user_id, token, expiration_time) VALUES ($1, $2, $3) RETURNING *';//Key (user_id)=(4220118729163) already exists.
    const values = [userId, token, expirationTime];
    const results = await db.query(query, values);
    console.log("token save in database");
  } catch (error) {
    console.log(error);
    throw error;
  }

}

const removePasswordResetToken = async (userId) => {
  try {
    const results = await db.query('DELETE FROM password_reset_tokens WHERE user_cnic = $1', [userId]);
    console.log("token remove in database");
  } catch (error) {
    console.log(error);
    throw error;
  }

}

const getPasswordResetToken = (user) => {
  const resetToken = crypto.randomBytes(32).toString("hex");
  let resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");//resetPasswordToken,resetPasswordExpire ki database me field banani hogi
  return resetPasswordToken;
}

const getSignedToken = (user) => {
  return jwt.sign({ id: user.cnic }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
}

module.exports = {
  create, check, getSignedToken, findOne, getPasswordResetToken, savePasswordResetToken, removePasswordResetToken,findPasswordResetToken,updatePassword
};