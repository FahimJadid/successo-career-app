import Navbar from "../../components/navbar/Navbar";
import "./Scholarship.css";
import ScholarshipBanner from "../../assets/images/Scholarship-Banner.png";
import { BsArrowRight } from "react-icons/bs";
import Footer from "../../components/footer/Footer";
import SEO from "../../components/SEO";

const Scholarship = () => {

  return (
    <>
      <Navbar />
      <SEO dynamicTitle="Successo | Scholarship" />
      <div className="scholarship">
        <div className="heading-scholarship">
          <div className="top-heading">
            <div className="overlay-donate">
              <p>Scholarship</p>
            </div>
            <div className="main-scholarship-heading">
              <p>Scholarship  </p>
              <p>for Students...</p>
            </div>
          </div>
          <div className="bottom-description">
            <p>
            At Successo, our mission is to provide an open door for those seeking scholarships, inviting exploration in diverse fields and fostering career excellence in technology. Click now to check your eligibility for a scholarship that can shape the trajectory of your future!
            </p>
          </div>
          <div className="checkout">
            <button
              className="checkout-button"
            >
              <div className="apply-btn">
                <p className="checkout-btn-text">
                  Click Apply
                </p>
              </div>
              <div className="purple-circle">
                <BsArrowRight className="arrow-icon" />
              </div>
            </button>
          </div>
        </div>
        <div className="scholarship-banner">
          <img src={ScholarshipBanner} alt="DonateBanner" draggable="false" />
        </div>
      </div>

      <div className="need-scholarship">
        <div className="need-scholarship-section">
          <div className="need-scholarship-section-main">
            <div className="desc">
              <div className="heading">
                <p></p>
              </div>
              <div className="scholarship-desc">
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className="scholarship-form">
          <div className="scholarship-form-desc">
            <p>Scholarship Form</p>
            <p>*Fill the below form to avail for the scholarship</p>
          </div>
          <div className="contactFormContainer">
            <form action="https://formspree.io/f/xgebelva" method="POST">
              <div className="name">
                <label for="text">
                  {" "}
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    placeholder="Full Name*"
                    required
                  />
                </label>
              </div>
              <label for="email">
                {" "}
                <input
                  type="email"
                  name="_replyto"
                  id="email"
                  placeholder="Your Email*"
                  required
                />{" "}
              </label>
              <label for="text">
                  {" "}
                  <input
                    type="text"
                    name="message"
                    id="name"
                    placeholder="Current Educational Institution*"
                    required
                  />
                </label>
              <label for="text">
                {" "}
                <input
                  type="text"
                  name="message"
                  id="interest"
                  placeholder="Field of Interest*"
                  required
                />{" "}
              </label>
              <label for="text">
                {" "}
                <input
                  type="text"
                  name="message"
                  id="board"
                  placeholder="Have you applied for scholarships before?*"
                  required
                />{" "}
              </label>
              <label>
                {" "}
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Why you need this Scholarship? Write in brief*"
                ></textarea>
              </label>
              <button type="submit" value="Send" >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Scholarship;
