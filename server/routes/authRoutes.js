const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware.js');

const {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  changePassword,
  sendUserPasswordResetEmail,
  resetPassword,
} = require('../controllers/authController.js');


/*
GET /profile - Get user profile
PUT /profile - Update user profile
POST /change-password - Change user password (requires authentication)

POST /register - Register a new user
POST /login - Login user
POST /logout - Logout user
POST /send-reset-password-email - Send password reset email
POST /reset-password/:id/:token - Reset user password (temporary link sent via email)

POST /reset-password/:id/:token - Reset user password (requires authentication)
*/


router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/logout', logoutUser);


// router
//   .route('/profile')
//   .get(protect, getUserProfile)
//   .put(protect, updateUserProfile);

router.post('/change-password', protect, changePassword);

router.get('/logged-user', protect, changePassword);

router.post('/send-reset-password-email', sendUserPasswordResetEmail);

router.post('/reset-password/:id/:token', resetPassword);

module.exports = router;

