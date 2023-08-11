import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "../../components/sidebar/Sidebar.css";
import "./Developers.css";
import SEO from "../../components/SEO";

const Developers = () => {
  
  return (
    <>
      <div className="developers">
        <Navbar />
        <SEO dynamicTitle="SheRise | Developers" />
        <div className="heading">
          <p>Meet Our Team</p>
          <p>Developers</p>
        </div>
        <section className="developer-profile">
          <div className="outer-card">
            <div className="image">
              <div className="avatar shathi-avatar"></div>
              <div className="avatar-overlay"></div>
              <div className="avatar-overlay2"></div>
            </div>
            <div className="description">
              <div className="name">
                <p> Sharjina Akter Shathi</p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="buttons">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <p>Twitter</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/"
                  target="_blank" rel="noopener noreferrer"
                >
                  <p>Linkedin</p>
                </a>
              </div>
            </div>
          </div>
          <div className="outer-card">
            <div className="image">
              <div className="avatar moni-avatar"></div>
              <div className="avatar-overlay"></div>
              <div className="avatar-overlay2"></div>
            </div>
            <div className="description">
              <div className="name">
                <p>Sumaiya Akther Moni</p>
                <p>UI/UX Designer</p>
              </div>
              <div className="buttons">
                <a href="https://twitter.com/" 
                    target="_blank" 
                    rel="noopener noreferrer">
                  <p>Twitter</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <p>Linkedin</p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Developers;
