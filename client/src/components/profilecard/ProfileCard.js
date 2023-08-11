import React, { useEffect, useState } from "react";
import './ProfileCard.css'
import { BsFillPatchCheckFill, BsTools }from "react-icons/bs";
import { IoLocationOutline }from "react-icons/io5";
import axios from 'axios';  // Import Axios
import Cookies from 'js-cookie';

const ProfileCard = () => {
  
  const REACT_APP_LINKEDIN_URL = ' https://www.linkedin.com/in';
  const REACT_APP_GITHUB_URL = ' https://github.com';

  // State to hold the user's profile data
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    // Fetch user's profile data using Axios
    const fetchProfileData = async () => {
      try {
        const token = Cookies.get('jwt');
        const response = await axios.get('http://localhost:5000/api/profile', {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);
  return (
    <>
        <div className="profilecard">
            <div className="upper-profile"></div>
            <div className="user-profile-div">
                <div className="user-main-avatar3">
                  <div className="user-main-avatar2">
                    <div className="user-main-avatar"></div>
                  </div>
                </div>
            </div>
            <div className="lower-profile">
              <div className="top">
                <div className="user-name"><BsFillPatchCheckFill className='hhh'/><p>{profileData.username}</p> </div>
                <div className="user-location-profession">
                  <div className="user-location"><IoLocationOutline className='user-location-icon'/> <p>{profileData.country}</p></div>
                  <div className="user-profession"><BsTools className='user-profession-icon'/><p>{profileData.profession}</p></div>
                </div>
              </div>
              <div className="user-bio"><p>{profileData.bio}</p></div>
              <div className="user-email"><p>{profileData.email}</p></div>
              <div className="user-profile-social">
                <div className="user-profile-github"><a href={`${REACT_APP_GITHUB_URL}/${profileData.github}`} target="_blank" rel="noopener noreferrer">Github</a></div>
                <div className="user-profile-linkedin"><a href={`${REACT_APP_LINKEDIN_URL}/${profileData.linkedin}`} target="_blank" rel="noopener noreferrer">Linkedin</a></div>
              </div>
            </div>
        </div>
    </>
  )
}


export default ProfileCard
