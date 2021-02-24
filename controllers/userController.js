const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const register = () => {};

const login = asyncHandler(async (req, res) => {
  let { email, password } = req.body;
  let userExists = await User.find({});
  res.send(`Message: ${userExists}.`);
  if (userExists) {
    res.json({ message: userExists.password });
  }
});

module.exports = { register, login };
