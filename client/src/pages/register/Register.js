import React, { useState } from "react";
import "./Register.css";
import { NavLink, useNavigate } from "react-router-dom";
import Login from "../login/Login";
import axios from "axios";
import toast from "react-hot-toast";
import SEO from "../../components/SEO";
import Cookies from "js-cookie";

const Register = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
    university: "",
    year: "",
    github: "",
    linkedin: "",
    bio: "",
    country: "",
    profession: ""
  })

  const { email, password, username, university, year, github, linkedin, bio, country, profession } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInputValue)=> ({
      ...prevInputValue,
      [name]: value,
    }))
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
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
          "http://localhost:5000/api/auth/register",
          {
          username,
          email,
          password,
          university,
          year,
          github,
          linkedin,
          bio,
          country,
          profession, 
        },
        {withCredentials: true}
        );
  
        const {success, message, token } = response.data;
        
        if (success) {
          // Store the token in a cookie
          Cookies.set('jwt', token);

          handleSuccess(message);
          setTimeout(() => {
            navigate("/main/dashboard");
          }, 1000);
        } else {
          handleError(message);
        }
      } catch (error) {
        toast.error("Registration attempt failed. Invalid email or password!");
        console.log(error);
      }
  
      setInputValue({
        ...inputValue,
        email: "",
        password: "",
        username: "",
        university: "",
        year: "",
        github: "",
        linkedin: "",
        bio: "",
        country: "",
        profession: "",
      });
    };


    // Function to validate email address
    const validateEmail = (email) => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    };
    

  return (
    <>
      <div className="register">
        <SEO dynamicTitle="Successo | Register" />
        <h1>Register</h1>

        <div className="form_container">
          <form className="main_form" onSubmit={handleSubmit}>
            <div className="register-name">
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Name*"
                required
                onChange={handleOnChange}
              />
            </div>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email*"
              required
              onChange={handleOnChange}
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password*"
              required
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="university"
              value={university}
              placeholder="Your University*"
              required
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="year"
              value={year}
              placeholder="Passing Year*"
              required
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="country"
              value={country}
              placeholder="Country*"
              required
              onChange={handleOnChange}
            />
            <div className="register-social">
              <div className="register-social-upper">
                <input
                  type="text"
                  name="github"
                  value={github}
                  placeholder="Github ID* "
                  required
                  onChange={handleOnChange}
                />
                <input
                  type="text"
                  name="linkedin"
                  value={linkedin}
                  placeholder="Linkedin ID* "
                  required
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <textarea
              placeholder="Describe yourself (in 10-15 words)"
              name="bio"
              id=""
              cols="30"
              rows="3"
              value={bio}
              
              onChange={handleOnChange}
              
            ></textarea>
            <select
              title="profession"
              value={profession}
              name="profession"
              id="membership"
              required
              onChange={handleOnChange}
            >
              <option value="student" selected>
                Student
              </option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Full-Stack Developer</option>
              <option value="designer">UI/UX Designer</option>
              <option value="influencer">Influencer</option>
              <option value="content">Content Writer</option>
            </select>
          </form>
          <button type="submit" className="btnHover" onClick={handleSubmit}>Register</button>
          <div className="desc">
            <p>Already have an account? </p>
            <NavLink to="/login" key={<Login />} className="link">
              <p>Login*</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

