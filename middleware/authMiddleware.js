const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded.id, decoded._id);
    req.user = await User.findById(decoded._id).select('-password');
    next();
  } else {
    res.status(401).send('Not authorised');
  }
});

module.exports = protect;
