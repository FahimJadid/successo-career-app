import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Cookies from "js-cookie";
import axios from "axios";

const Navbar = () => {
  const navRef = useRef();
  const location = useLocation();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function call() {
      try {
        let resp = await axios.get(
          "http://localhost:5000/api/dashboard",
          {
            headers: {
              Authorization: "Bearer " + Cookies.get("jwt"),
            },
            withCredentials: true,
          }
        );
        setProfile(resp.data);
        // console.log(resp.data);
      } catch (err) {
        console.log(err);
      }
    }
    call();
  }, []);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <div className="nav-logo">
          <img src={logo} alt="Successo" className="logo" />
        </div>
        <button className="nav-btn" title="Expand" onClick={showNavbar}>
          <FaBars className="fa-bars" />
        </button>
        <nav ref={navRef}>
          <li className="nav-links">
            <NavLink
              to="/"
              className={
                location.pathname === "/" ? "active-select" : "nav-main-links"
              }
            >
              <p>HOME</p>
            </NavLink>
          </li>
          <li className="nav-links">
            <NavLink
              to="/scholarship"
              className={
                location.pathname === "/scholarship"
                  ? "active-select"
                  : "nav-main-links"
              }
            >
              <p>SCHOLARSHIP</p>
            </NavLink>
          </li>
          <li className="nav-links">
            <NavLink
              to="/developers"
              className={
                location.pathname === "/developers"
                  ? "active-select"
                  : "nav-main-links"
              }
            >
              <p>DEVELOPERS</p>
            </NavLink>
          </li>
          <li className="nav-links">
            <NavLink
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "active-select"
                  : "nav-main-links"
              }
            >
              <p>CONTACT US</p>
            </NavLink>
          </li>
          {Cookies.get("jwt") ? (
            <NavLink to="/main/dashboard">
              <span className="navbar-username">
                <div className="navbar-avatar"></div>
                <div className="navbar-profile-desc">
                  <div className="navbar-profile-name">{profile.username}</div>
                  <div className="navbar-profile-profession">
                    {profile.profession}
                  </div>
                </div>
              </span>
            </NavLink>
          ) : (
            <>
              <li className="nav-links">
                <NavLink to="/login" className="nav-main-links">
                  <p>LOGIN</p>
                </NavLink>
              </li>
              <li className="nav-links">
                <NavLink to="/register" className="nav-main-links">
                  <p>REGISTER</p>
                </NavLink>
              </li>
            </>
          )}
          <>
            <div className="back-menu"></div>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
