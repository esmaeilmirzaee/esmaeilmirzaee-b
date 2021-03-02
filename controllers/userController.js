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

let fakeUser = asyncHandler((req, res) => {
  let user = {
    _id: '47328149234jhjdsaf6d734',
    name: 'John',
    family: 'Doe',
    email: 'johndoe@sample.com',
    password: 'secretPassword',
    token: 'safjdsahjk23h43bmdfafd0a9sfsdaioj431242',
    isAdmin: false,
  };

  res.json(user);
});

module.exports = { register, login, fakeUser };
