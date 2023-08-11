const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require('cookie-parser');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

const port = process.env.PORT || 5000;


const startServer = async () => {
  try {
    // Connect to the database
    await connectDB();

    const app = express();
    app.use(express.urlencoded({ extended: true }));
    app.use(
      cors({
        origin: "http://localhost:3000", // Allow requests from frontend
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
      })
    );
    app.use(express.json());
    app.use(cookieParser());


    // Routes
  
    // app.use('/api', allRoutes);
    app.use('/api', userRoutes);
    app.use('/api/auth', authRoutes);

    // Error handling middleware
    app.use(notFound);
    app.use(errorHandler);

    // Default route
    app.get("/", (req, res) => {
      res.send("Successo server API running !");
    });

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

// Call the function to start the server
startServer();