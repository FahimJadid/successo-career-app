import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "../../components/sidebar/Sidebar.css";
import "./ContactUs.css";
import Contact from "../../assets/images/contact-us.png";
import SEO from "../../components/SEO";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <SEO dynamicTitle="Successo | Contact" />
      <div className="slanting-contact-div"></div>
      <div className="contact">
        <div className="inner-contact">
          <div className="contact-left">
            <div className="heading">
              <p>Send Email</p>
            </div>
            <div className="support-overlay">
              <p>Contact Us</p>
            </div>

            {/* <section className='main-contact-div'> */}

            <div className="contactFormContainer">
              <form action="https://formspree.io/f/xgebelva" method="POST">
                <label for="text">
                  {" "}
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    placeholder="First Name*"
                    required
                  />
                </label>
                <label for="email">
                  {" "}
                  <input
                    type="email"
                    name="_replyto"
                    id="email"
                    placeholder="Your Email*"
                    required
                  />
                </label>
                <label for="text">
                  <input
                    type="text"
                    name="Subject"
                    id="subject"
                    placeholder="Subject*"
                    required
                  />
                </label>
                <label>
                  {" "}
                  <textarea
                    name="message"
                    placeholder="Your Message*"
                  ></textarea>
                </label>
                <button type="submit" value="Send">
                  Send
                </button>
              </form>
            </div>
            {/* </section> */}
          </div>
          <div className="contact-right">
            <img src={Contact} alt={Contact} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
