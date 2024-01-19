// services/authService.js
const User = require("../db/models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function signUp(body) {
  const newUser = new User(body);
  return newUser.save();
}

async function signIn(email, password) {
  const user = await User.findOne({ email });

  if (!user && email) {
    throw new Error("User does not exist");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken(user.id);
  return { user, token };
}

async function getUser(id) {
  return await User.findById(id);
}

function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1y" });
}

module.exports = { signUp, signIn, getUser };
