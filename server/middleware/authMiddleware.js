const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel.js');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  // console.log("Token:", token);
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log("Decoded token:", decoded);

      req.user = await User.findById(decoded.userId).select('-password');
      // console.log("Authenticated user:", req.user);
      next();
      
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

module.exports = {protect};
