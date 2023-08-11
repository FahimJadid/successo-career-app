const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware.js');

const {
  getUserProfile,
  addBookmark,
  getHackathons,
  getInternships,
  getHiring,
  getWorkshops,
  getConferences,
  getDashboard
} = require("../controllers/userController.js");

router
  .route('/profile')
  .get(protect, getUserProfile)
  
router.post("/bookmark", protect, addBookmark)

router.get("/hackathons", getHackathons);
router.get("/internships", getInternships);
router.get("/hiring", getHiring);
router.get("/workshops", getWorkshops);
router.get("/conferences", getConferences);
router.get("/dashboard", protect, getDashboard);

module.exports = router;
