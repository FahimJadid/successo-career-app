const asyncHandler  = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');
const jwt = require('jsonwebtoken');
const sgMail = require('../utils/sendgridEmail.js');


const loginUser = asyncHandler(async(req, res)=>{
    const {email, password} = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
  }

    const user = await User.findOne({email})

    if (user && (await user.matchPassword(password))){
      generateToken(res, user._id);

      res.status(201).json({
            success: true,
            message: 
              'Logged In Successfully.',
            _id: user._id,
            username: user.username,
            email: user.email,  
        });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
})


const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, university, year, github, linkedin, bio, country, profession } = req.body;
  
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

    const user = await User.create({
      username, email, password, university, year, github, linkedin, bio, country, profession 
    });

    if (user) {
      generateToken(res, user._id);
  
      res.status(201).json({
        success: true,
        message: 'Registration Completed Successfully.',
        _id: user._id,
        username: user.username,
        email: user.email,
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  });

  
  const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
  
    if (user) {
       // Update user profile fields if provided in the request body
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;
  
      // Update password if a new password is provided
      if (req.body.password) {
        user.password = req.body.password;
      }
  
    // Update other profile fields
      user.university = req.body.university || user.university;
      user.year = req.body.year || user.year;
      user.github = req.body.github || user.github;
      user.linkedin = req.body.linkedin || user.linkedin;
      user.bio = req.body.bio || user.bio;
      user.country = req.body.country || user.country;
      user.profession = req.body.profession || user.profession;
  
      // Update other profile fields if needed (university, year, etc.)
      const updatedUser = await user.save();
  
      res.json({
          _id: updatedUser._id,
          username: updatedUser.username,
          email: updatedUser.email,
          university: updatedUser.university,
          year: updatedUser.year,
          github: updatedUser.github,
          linkedin: updatedUser.linkedin,
          bio: updatedUser.bio,
          country: updatedUser.country,
          profession: updatedUser.profession,
      });
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  });
  
  

const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
};


const changePassword = asyncHandler(async (req, res) => {
  const { password, confirm_password } = req.body
  if (password && confirm_password) {
    if (password !== confirm_password) {
      res.send({ "status": "failed", "message": "New Password and Confirm New Password doesn't match" })
    } else {
      const salt = await bcrypt.genSalt(10)
      const newHashPassword = await bcrypt.hash(password, salt)
      await User.findByIdAndUpdate(req.user._id, { $set: { password: newHashPassword } })
      res.send({ "status": "success", "message": "Password changed successfully" })
    }
  } else {
    res.send({ "status": "failed", "message": "All Fields are Required" })
  }
});

const loggedUser = asyncHandler( async (req, res) => {
  res.send({ "user": req.user })
})


const sendUserPasswordResetEmail = asyncHandler( async (req, res) => {
  const { email } = req.body

  if (!email) {
    return res.send({ status: 'failed', message: 'Email Field is Required' });
  }
  
  if (email) {
    const user = await User.findOne({email})
    
    if (user) {
      const secret = user._id + process.env.JWT_SECRET
      const token = jwt.sign({ userID: user._id }, secret, { expiresIn: '15m' })
      const resetLink = `http://127.0.0.1:3000/api/users/reset/${user._id}/${token}`
      console.log(resetLink)

      // Set the token as a cookie in the response
      res.cookie('jwt', token, { httpOnly: true, maxAge: 15 * 60 * 1000 }); // Set the cookie with the token


      // Send Email using SendGrid
      const msg = {
        to: user.email,
        from: process.env.EMAIL_FROM,
        subject: 'Password Reset - Successo',
        html: `
          <p>Hello,</p>
          <p>We received a request to reset your password for your account. Click the button below to reset your password:</p>
          <p><a href="${resetLink}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px;">Reset Password</a></p>
          <p>If you did not request a password reset, please ignore this email. Your password will remain unchanged.</p>
          <p>Thank you,</p>
          <p>The Successo Team</p>
        `,
      };

      try {
        await sgMail.send(msg);
        res.send({
          status: 'success',
          message: 'Password Reset Email Sent... Please Check Your Email',
        });
      } catch (error) {
        console.error('SendGrid error:', error);
        res.send({ status: 'failed', message: 'Failed to send email' });
      }
    } else {
      res.send({ "status": "failed", "message": "Email doesn't exists" })
    }
  } else {
    res.send({ "status": "failed", "message": "Email Field is Required" })
  }
})


const resetPassword = asyncHandler(async (req, res) => {
  const { password, confirm_password } = req.body;
  const { id, token } = req.params;
  const user = await User.findById(id);
  const new_secret = user._id + process.env.JWT_SECRET

  try {
    jwt.verify(token, new_secret)
    if (password && confirm_password) {
      if (password !== confirm_password) {
        res.send({ "status": "failed", "message": "New Password and Confirm New Password doesn't match" })
      } else {
        const salt = await bcrypt.genSalt(10)
        const newHashPassword = await bcrypt.hash(password, salt)
        await User.findByIdAndUpdate(user._id, { $set: { password: newHashPassword } })
        res.send({ "status": "success", "message": "Password Reset Successfully" })
      }
    } else {
      res.send({ "status": "failed", "message": "All Fields are Required" })
    }
  } catch (error) {
    console.log(error)
    res.send({ "status": "failed", "message": "Invalid Token" })
  }
});


  module.exports = {
    loginUser,
    registerUser,
    logoutUser,
    changePassword, 
    loggedUser,
    resetPassword,
    sendUserPasswordResetEmail,
  };