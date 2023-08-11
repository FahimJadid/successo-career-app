import React, { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { UserContext } from "./utils/userContext";
import Cookies from "js-cookie";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Assistant from "./pages/assistant/Assistant";
import SupportAdmin from "./pages/livechat/SupportAdmin";
import Livechat from "./pages/livechat/Livechat";
import Loader from "./components/Loader/Loader";
// import { hotjar } from "react-hotjar";
import SEO from "./components/SEO";

const LandingPage = lazy(() => import("./pages/landingPage/LandingPage"));
const Developers = lazy(() => import("./pages/developers/Developers"));
const Dashboard = lazy(() => import("./pages/dashBoard/Dashboard"));
const Scholarship = lazy(() => import("./pages/scholarship/Scholarship"));
const ContactUs = lazy(() => import("./pages/contactUs/ContactUs"));
const Conference = lazy(() => import("./pages/conference/Conference"));
const HiringChallange = lazy(() =>
  import("./pages/hiringChallenge/HiringChallange")
);
const Internship = lazy(() => import("./pages/internship/Internship"));
const Workshop = lazy(() => import("./pages/workshop/Workshop"));
const Hackathon = lazy(() => import("./pages/hackathon/Hackathon"));

const App = () => {
  const [user, setUser] = useState(null);

 useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.log("Error fetching user data:", error);
      // Remove invalid token from cookies and log user out
      Cookies.remove("token");
      setUser(null);
    }
  };

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Toaster />
      <Router>
        <SEO dynamicTitle="Successo | Home" />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin/secretkey/livechat"
              element={<SupportAdmin />}
            />
            <Route path="/main" element={<Sidebar />}>
              <Route path="/main/dashboard" element={<Dashboard />} />
              <Route path="/main/conference" element={<Conference />} />
              <Route
                path="/main/hiringChallange"
                element={<HiringChallange />}
              />
              <Route path="/main/internship" element={<Internship />} />
              <Route path="/main/workshop" element={<Workshop />} />
              <Route path="/main/hackathon" element={<Hackathon />} />
              <Route path="/main/assistant" element={<Assistant />} />
              <Route path="/main/livechat" element={<Livechat />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
