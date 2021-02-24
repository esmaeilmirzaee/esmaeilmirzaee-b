const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const register = () => {};

const login = asyncHandler(async (req, res) => {
  let { email, password } = req.body;
  let user = await User.findOne({ email });
  // res.send(`Message: ${user}.`);
  // (await user.checkPassword(password))
  if (user && password == user.password) {
    res.send({ message: 'Welcome back' });
  } else {
    res.status(401).send('Please check the credentials.');
  }
});

module.exports = { register, login };
