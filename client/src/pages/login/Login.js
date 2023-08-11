import React, {useState } from "react";
import "./Login.css";

import { NavLink, useNavigate } from "react-router-dom";
import Register from "../register/Register";
import axios from "axios";

import Cookies from "js-cookie";
import toast from "react-hot-toast";
import SEO from "../../components/SEO";
import LandingPage from './../landingPage/LandingPage';



const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };
  

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!email) {
        toast.error("Please provide your email!");
        return;
      }

      if (!validateEmail(email)) {
        toast.error("Please enter a valid email address!");
        return;
      }

      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            email,
            password,
          },
          { withCredentials: true }
        );
        const { success, message, token } = response.data;
        if (success) {
          // Store the token in a cookie
          Cookies.set('jwt', token);

          handleSuccess(message);
          setTimeout(() => {
            navigate("/main/dashboard");
          }, 1000);
        } else {
          toast.error(message, {
            position: "bottom-left",
          });
          handleError(message);
        }
      } catch (error) {
        toast.error("Login attempt failed. Invalid email or password!");
        console.log(error);
      }
      setInputValue({
        ...inputValue,
        email: "",
        password: "",
      });
    };

      // Function to validate email address
    const validateEmail = (email) => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    };
  

  return (
    <>
      <div className="login">
        <SEO dynamicTitle="Successo | Login" />
        <h1>Login</h1>

        <div className="form_container">
          <form className="main_form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email*"
              required
              onChange={handleOnChange}
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              required
              onChange={handleOnChange}
            />
            <button className="btnHover" type="submit">
              Login
            </button>
          </form>
          <div className="desc">
            <p>Not registered yet? </p>
            <p>
              {' '}
              <NavLink to="/register" key={<Register />} className="link">
                <p>Create account*</p>
              </NavLink>{' '}
            </p>
            <p>
            {' '}
              <NavLink to="/" key={<LandingPage />} className="link">
                <p>Landing Page*</p>
              </NavLink>{' '}
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Login;
