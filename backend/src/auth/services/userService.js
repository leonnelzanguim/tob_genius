// services/userService.js

const User = require("../models/user");

// Fonction pour enregistrer un nouvel utilisateur
const registerUser = async (username, email, password) => {
  const user = new User({ username, email, password });
  return await user.save();
};

// Fonction pour trouver un utilisateur par email
const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

module.exports = {
  registerUser,
  findUserByEmail,
};
