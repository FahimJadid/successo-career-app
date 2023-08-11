import React, { Suspense, lazy } from "react";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";

import { RiLockPasswordFill } from "react-icons/ri";
import { FaFemale, FaHandHoldingHeart, FaSearch } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Dashboard from "../dashBoard/Dashboard";
import Cookies from "js-cookie";

import landingPic1 from "../../assets/images/landingPic1.png";
import landingPic2 from "../../assets/images/landingPic2.png";
import landingPic3 from "../../assets/images/landingPic3.png";
import landingPic4 from "../../assets/images/landingPic4.png";
import landingPic5 from "../../assets/images/landingPic5.png";
import landingPic6 from "../../assets/images/landingPic6.png";

import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";
import service4 from "../../assets/images/service4.png";
import service5 from "../../assets/images/service5.png";
import service6 from "../../assets/images/service6.png";

import whysuccesso from "../../assets/images/whysuccesso.png";


import mentor1 from "../../assets/images/mentor3.png";
import mentor2 from "../../assets/images/mentor3.png";
import mentor3 from "../../assets/images/mentor3.png";
import SEO from "../../components/SEO";

const Testimonial = lazy(() =>
  import("../../components/testimonial/Testimonial")
);

const LandingPage = () => {

  return (
    <>
      <Navbar />
      <SEO dynamicTitle="Successo | Home" />
      <div className="landingPage">
        {/* ============================  Landing Page  ============================= */}
        <div className="landingPage-main">
          <div className="left">
            <div className="landing-desc">
              <p>Paving Pathways to Your Next Career Adventure</p>
              <p>
              Navigate Your Career Journey on <span>Successo </span>
              </p>
              <p>
              Successo is a Gateway to Thriving Careers, Unveiling Abundant Career Avenues, Scholarships, and Expert Career Guidance. Empowering Your Journey in the Professional World.{" "}
              </p>
            </div>
            <div>
              {Cookies.get("jwt") ? (
                <NavLink
                  to="/main/dashboard"
                  key={<Dashboard />}
                  className="nav-link"
                >
                  <div className="start-btn">
                    <p>Get Started</p>
                  </div>
                </NavLink>
              ) : (
                <>
                  <NavLink to="/login" key={<Dashboard />} className="nav-link">
                    <p>Get Started</p>
                  </NavLink>
                </>
              )}
            </div>
          </div>
          <div className="right">
            <div className="col1">
              <div className="col1"></div>
              <div className="col2">
                {" "}
                <img
                  src={landingPic1}
                  draggable="false"
                  alt=""
                  className="dddd"
                />

              </div>
              <div className="col3"></div>
            </div>
            <div className="col2">
              <div className="col1">

                <img
                  src={landingPic2}
                  draggable="false"
                  alt=""
                />
              </div>
              <div className="col2">
                <img
                  src={landingPic3}
                  draggable="false"
                  alt=""
                />
              </div>
              <div className="col3">
                <img
                  src={landingPic4}
                  draggable="false"
                  alt=""
                />
              </div>
            </div>
            <div className="col3">
              <div className="col1">
                <img
                  src={landingPic6}
                  draggable="false"
                  alt=""
                />
                <div className="col31-icon col-icon-common">
                  <MdVerifiedUser />
                </div>
              </div>
              <div className="col2">
                <img
                  src={landingPic5}
                  draggable="false"
                  alt=""
                />
                <div className="col32-icon col-icon-common">
                  <FaSearch />
                </div>
              </div>
              <div className="col3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================  Our Service  ================================ */}
      <div className="ourservice">
        <div className="our-service-main">
          <div className="service-heading">
            <p>Our Offering </p>
          </div>
          <div className="service-desc">
            <div className="service-desc-1 service-common">
              <div className="image">
                
                <img
                  src={service1}
                  draggable="false"
                  alt="AI Assistant"
                />
              </div>
              <div className="heading">
                <p>AI Assistant</p>
              </div>
              <div className="desc">
              Twinkie is an AI assistant developed utilizing the OpenAI API, offering dual functionalities. This highly potent AI bot is capable of swiftly delivering impeccable outcomes.
              </div>
            </div>
            <div className="service-desc-2 service-common">
              <div className="image">
                
                <img
                  src={service2}
                  draggable="false"
                  alt="One-2-One Mentorship"
                />
              </div>
              <div className="heading">
                <p>One-2-One Mentorship</p>
              </div>
              <div className="desc">
                Esteemed mentors hailing from prominent technology corporations (FAANG companies) are available to offer their guidance to address your specific requirements. Tailored one-on-one interactions will be facilitated for meaningful discussions.
              </div>
            </div>
            <div className="service-desc-3 service-common">
              <div className="image">
                
                <img
                  src={service3}
                  draggable="false"
                  alt="5 Category Job Listing"
                />
              </div>
              <div className="heading">
                <p>5 Category Job Listing</p>
              </div>
              <div className="desc">
              In order to alleviate congestion, we have categorized our job listings into five distinct sectors, namely: hackathons, internships, workshops, employment opportunities, and conferences.
              </div>
            </div>
            <div className="service-desc-4 service-common">
              <div className="image">
                
                <img
                  src={service4}
                  draggable="false"
                  alt="Bookmarking and Filtering Jobs"
                />
              </div>
              <div className="heading">
                <p>Bookmarking and Filtering Jobs</p>
              </div>
              <div className="desc">
              For convenient access to job postings at a later time, we have introduced a bookmark feature that allows you to save opportunities for future reference. Additionally, our platform now offers a filtering option, enabling you to streamline job searches by their respective titles.
              </div>
            </div>
            <div className="service-desc-5 service-common">
              <div className="image">
                
                <img
                  src={service5}
                  draggable="false"
                  alt="Scholarship"
                />
              </div>
              <div className="heading">
                <p>Scholarship</p>
              </div>
              <div className="desc">
              Our endeavor involves garnering support from diverse individuals across the globe, with the aim of providing comprehensive guidance to people in need, empowering them to excel within the dynamic realm of technology.
              </div>
            </div>
 
            <div className="service-desc-6 service-common">
              <div className="image">
                <img
                  src={service6}
                  draggable="false"
                  alt="Get Notified"
                />
              </div>
              <div className="heading">
                <p>Get Notified</p>
              </div>
              <div className="desc">
              Upon the emergence of new job opportunities on our website, rest assured you will receive email notifications, ensuring you remain informed and well-positioned to seize every potential opening.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================  Why Successo  ================================= */}
      <div className="whysuccesso">
        <div className="whysuccesso-main">
          <div className="left">
            <div className="heading">
              <p>Reasons for choosing us</p>
              <p>Why Successo ?</p>
            </div>
            <div className="all-reasons">
              <div className="reason1 reason-common">
                <div className="heading">
                  <p>
                    {" "}
                    <RiLockPasswordFill />
                    <span>Personalized One-on-One Mentorship and Guidance</span>{" "}
                  </p>
                </div>
                <div className="desc">
                  <p>
                  Experience tailored mentorship at Successo for unlocking your potential. Our mentors partner with you, understanding your unique journey and goals. Receive personalized guidance and strategies, fostering growth, empowerment, and success. Forge meaningful connections and amplify your skills. Invest in our service to turn aspirations into reality.{" "}
                  </p>
                </div>
              </div>
              <div className="reason2 reason-common">
                <div className="heading">
                  <p>
                    {" "}
                    <FaFemale />
                    <span>Exemplary Employment Opportunities</span>{" "}
                  </p>
                </div>
                <div className="desc">
                  <p>
                  We proudly introduce the pioneering all-inclusive job portal. Each job listing undergoes meticulous verification by our expert recruiters, ensuring the elimination of erroneous postings. Our platform offers curated job opportunities categorized into five primary sectors: Conferences, Hackathons, Hirings, Internships, and Workshops, setting the gold standard for precision and relevance.{" "}
                  </p>
                </div>
              </div>
              <div className="reason2 reason-common">
                <div className="heading">
                  <p>
                    {" "}
                    <FaHandHoldingHeart />
                    <span>Nurturing and Collaborative Community</span>{" "}
                  </p>
                </div>
                <div className="desc">
                  <p>
                  Experience growth through unity in our Nurturing and Collaborative Community at [Your Company Name]. Forge connections, learn continuously, and amplify opportunities for collective success. Engage in meaningful collaboration and empower each other to thrive.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <img
              src={whysuccesso}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* ===============================  What Mentor Says  ============================== */}
      <div className="ourmentor">
        <div className="ourmentor-main">
          <div className="heading">
            <p>What our Mentor says ?</p>
          </div>
          <div className="mentor-quote">
            <div className="quote1">
              <div className="image">
                <img src={mentor1} alt="" />
              </div>
              <div className="quote-desc">
                <p>
                  {" "}
                  Ensuring the currency of your LinkedIn profile and maintaining an accessible online portfolio showcasing your work are pivotal steps. These measures enhance the likelihood of recruiters discovering your profile and gaining insights into your skill set and professional journey.{" "}
                </p>
              </div>
              <div className="mentor-desc">
                <p>Salma Hayek</p>
                <p>Talent Acquisition Specialist</p>
              </div>
            </div>
            <div className="quote1">
              <div className="image">
                <img src={mentor3} alt="" />
              </div>
              <div className="quote-desc">
                <p>
                Demonstrate initiative and perseverance. Initiate contact with organizations that align with your career aspirations, affirming your availability and enthusiasm. Subsequently, maintain correspondence with recruiters post-application submission, seeking updates on your application's progress while reaffirming your ongoing enthusiasm for the role.
                </p>
              </div>
              <div className="mentor-desc">
                <p>Sinthia Hasan</p>
                <p>Hiring Manager</p>
              </div>
            </div>
            <div className="quote1">
              <div className="image">
                <img src={mentor2} alt="" />
              </div>
              <div className="quote-desc">
                <p>
                Establishing a robust professional network is essential. The extent of your industry connections directly correlates with your access to potential job openings and your ability to secure favorable entry into esteemed organizations.
                </p>
              </div>
              <div className="mentor-desc">
                <p>Shanjida Akter</p>
                <p>Hiring Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================  TESTIMONIAL  ============================= */}
      <div className="" style={{ height: "340px" }}>
        <Suspense fallback={<>Loading...</>}>
          <Testimonial />
        </Suspense>
      </div>

      {/* =================================  FOOTER  =================================== */}
      <Footer />
    </>
  );
};

export default LandingPage;
