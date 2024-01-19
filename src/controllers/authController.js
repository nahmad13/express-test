// controllers/authController.js
const authService = require("../services/authService");

async function signUp(req, res, next) {
  try {
    await authService.signUp(req.body);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    next(error);
  }
}

async function signIn(req, res, next) {
  try {
    const { email, password } = req.body;
    const result = await authService.signIn(email, password);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

async function getUser(req, res, next) {
  try {
    const { id } = req.user;
    res.json(await authService.getUser(id));
  } catch (error) {
    next(error);
  }
}

module.exports = { signUp, signIn, getUser };
