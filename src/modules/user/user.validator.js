const { body } = require("express-validator");

const signUpValidation = [
  body("email")
    .exists()
    .withMessage("Email is missing")
    .isString()
    .withMessage("should be a string")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("provide a valid email"),
  body("password")
    .exists()
    .withMessage("password is missing")
    .notEmpty()
    .withMessage("password cannot be empty")
    .isLength(4)
    .withMessage("password should be greater than 4 characters"),
  body("fullName")
    .exists()
    .withMessage("name is missing")
    .isString()
    .withMessage("name should be a string")
    .notEmpty()
    .withMessage("name cannot be empty"),
];

const signInValidation = [
  body("email")
    .exists()
    .withMessage("Email is missing")
    .isString()
    .withMessage("should be a string")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("provide a valid email"),
  body("password")
    .exists()
    .withMessage("password is missing")
    .notEmpty()
    .withMessage("password cannot be empty"),
];

module.exports = { signUpValidation, signInValidation };
