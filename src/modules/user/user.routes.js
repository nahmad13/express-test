// routes/authRoutes.js
const express = require("express");
const userController = require("./user.controller");
const authMiddleware = require("../../middlewares/auth.middleware");
const router = express.Router();
const validateRequest = require("../../middlewares/validation.middleware");
const authValidation = require("./user.validator");

router.post(
  "/signup",
  authValidation.signUpValidation,
  validateRequest.request,
  userController.signUp
);
router.post(
  "/signin",
  authValidation.signInValidation,
  validateRequest.request,
  userController.signIn
);
router.get(
  "/user",
  validateRequest.request,
  authMiddleware.authenticateToken,
  userController.getUser
);

module.exports = router;
