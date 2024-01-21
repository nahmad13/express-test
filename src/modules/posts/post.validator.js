const { body } = require("express-validator");

const createPostValidation = [
  body("title")
    .exists()
    .withMessage("title is missing")
    .isString()
    .withMessage("should be a string")
    .notEmpty()
    .withMessage("title cannot be empty"),
  body("content")
    .exists()
    .withMessage("content is missing")
    .isString()
    .withMessage("should be a string")
    .notEmpty()
    .withMessage("content cannot be empty"),
];

const updatePostValidation = [
  body("title")
    .isString()
    .withMessage("should be a string")
    .notEmpty()
    .withMessage("title cannot be empty")
    .optional(true),
  body("content")
    .isString()
    .withMessage("should be a string")
    .notEmpty()
    .withMessage("content cannot be empty")
    .optional(true),
];

module.exports = { createPostValidation, updatePostValidation };
