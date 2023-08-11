import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import Cookies from "js-cookie";
import ProfileCard from "../../components/profilecard/ProfileCard";
import BookmarkSection from "../../components/bookmarksection/BookmarkSection";
import SEO from "../../components/SEO";

const Dashboard = () => {
  const [userProfile, setUserProfile] = useState({});
  

  const Greetings = () => {
    let myDate = new Date();
    let hours = myDate.getHours();
    let greet;

    if (hours >= 5 && hours < 12) greet = "Morning";
    else if (hours >= 12 && hours <= 17) greet = "Afternoon";
    else if ((hours > 17 && hours <= 24) || hours < 5) greet = "Evening";

    return <span>Good {greet}</span>;
  };

  useEffect(() => {
    // Fetch dashboard data using the user's information
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/dashboard", {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${Cookies.get("jwt")}`,
          },
        });
        
        console.log("Dashboard data:", response.data);
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <>
      <div className="dashboard">
        <SEO dynamicTitle="Successo | Dashboard" />
        <div className="maindashboard">
          <div className="dashboard-column">
            {/* ========= Greeting Section ========= */}
            <div className="dashboard-welcome-div">
              <div className="left-desc">
                <p>
                  {" "}
                  <Greetings />,{" "}
                  <span className="dashboard-username">
                    {" "}
                    {userProfile.username}
                  </span>
                  !
                </p>
                <p>
                  Welcome back to your <span>Dashboard</span>{" "}
                </p>
                <p>
                  Discover the "Explore All Opportunities" section to stay abreast of the dynamic job market landscape.
                </p>
                <div className="gggg"></div>
              </div>
              <div className="right-image">
              </div>
            </div>

            {/* ========= Bookmark Section ========= */}
            <div className="dashboard-bookmark-section">
              <BookmarkSection bookmarks={userProfile.bookmarks} />
            </div>
          </div>
          {/* ========= Profile Card ========= */}
          <div className="dashboard-profile-section">
            <ProfileCard userProfile={userProfile} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
