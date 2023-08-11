const hackathons = require("../data/hackathons.json");
const internships = require("../data/internships.json");
const hiring = require("../data/hiring.json");
const workshops = require("../data/workshops.json");
const conferences = require("../data/conferences.json");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        university: user.university,
        year: user.year,
        github: user.github,
        linkedin: user.linkedin,
        bio: user.bio,
        country: user.country,
        profession: user.profession,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const addBookmark = asyncHandler(async (req, res) => {
  const bookmark = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    user.bookmarks.push(bookmark);
    await user.save();
    res.status(200).send("Bookmark added successfully.");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.");
  }
});



// router.post("/bookmark", authMiddleware, async (req, res) => {
//   const magicId = req.magicId;
//   const bookmark = req.body;
//   try {
//     const user = await User.findOne({
//       magicId,
//     });
//     if (!user) {
//       return res.status(404).send("User not found");
//     }
//     user.bookmarks.push(bookmark);
//     await user.save();
//     res.status(200).send("Bookmark added successfully.");
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Internal server error.");
//   }
// });


const getHackathons = async (req, res) => {
  try {
    res.status(200).send(hackathons.hackathons);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.");
  }
};

const getInternships = async (req, res) => {
  try {
    res.status(200).send(internships.internships);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.");
  }
};

const getHiring = async (req, res) => {
  try {
    res.status(200).send(hiring.hiring);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.");
  }
};

const getWorkshops = async (req, res) => {
  try {
    res.status(200).send(workshops.workshops);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.");
  }
};

const getConferences = async (req, res) => {
  try {
    res.status(200).send(conferences.conferences);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.");
  }
};

const getDashboard = async (req, res) => {

  const userId = req.user._id; 

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send("User not found");
    }
    // Modify the response data as needed to only include necessary fields
    const userData = {
      username: user.username,
      bookmarks: user.bookmarks,
    };
    res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error.");
  }
  };
  

module.exports = {
  getUserProfile,
  // updateUserProfile,
  addBookmark,
  getHackathons,
  getInternships,
  getHiring,
  getWorkshops,
  getConferences,
  getDashboard
};
