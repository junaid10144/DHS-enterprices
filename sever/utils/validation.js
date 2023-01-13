const Joi = require('joi');

const validateSchema = (body, schema) => {
  try {
    const { error } = schema.validate(body)
    return { error }
  } catch (err) {
    throw err
  }
}

exports.signupValidator = (body) => {
  const schema = Joi.object({
    cnic: Joi.string()
      .length(13)
      .pattern(/^[0-9]+$/)
      .required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    name: Joi.string().min(3).max(50).pattern(/^([a-z]+[,.]?[ ]?|[a-z]+['-]?)+$/), //28 digit mera naam h , https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
    password: Joi.string().required().min(6),
    phoneNumber: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
    address: Joi.string().max(255),
    country: Joi.string().max(50),
    city: Joi.string()
      .max(50)
      .pattern(/^[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\.\ ))[a-zA-Z\u0080-\u024F]+)*$/),   //https://stackoverflow.com/questions/11757013/regular-expressions-for-city-name
  })

  return validateSchema(body, schema)
}

exports.loginValidator = (body) => {
  const schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().required().min(6),
  })

  return validateSchema(body, schema)
}