import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Internship.css";
import InternshipCard from "../../components/cards/internship/InternshipCard";
import InternshipBanner from "../../assets/svg/type3.svg";
import InternshipBanner2 from "../../assets/svg/internBanner.svg";
import SEO from "../../components/SEO";

const Internship = () => {
  const [internships, setInternships] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function call() {
      try {
        let resp = await axios.get(
          "http://localhost:5000/api/internships"
        );
        setInternships(resp.data);
        // console.log(resp.data);
      } catch (err) {
        console.log(err);
      }
    }
    call();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredInternships = internships.filter((internship) => {
    return internship.position.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div className="internship">
        <SEO dynamicTitle="SheRise | Internships" />
        <div className="internship-banner-section">
          <div className="left">
            <div className="left-image">
              <img
                src={InternshipBanner2}
                alt={InternshipBanner2}
                className="internship-banner-image"
              />
            </div>
            <div className="internship-heading">
              {" "}
              <p> Internships</p>
            </div>
          </div>
          <div className="right">
            <div className="left-image">
              <img
                src={InternshipBanner}
                alt={InternshipBanner}
                className="internship-banner-image"
              />
            </div>
          </div>
        </div>
        <div className="searchbar-card-opportunity">
          <div className="searchbar-card">
            <div className="internship-searchbar">
              <input
                type="text"
                placeholder="Search Internships"
                onChange={handleSearch}
              />
              <div className="search-btn">
                <p>Search</p>
              </div>
            </div>
            <section className="internships-con">
              {filteredInternships.map((internship) => {
                return <InternshipCard internship={internship} />;
              })}
            </section>
          </div>
          <div className="opportunity">
          <div className="opportunity-card">
            <div className="opportunity-heading">
              <p>Featured Opportunities</p>
            </div>
            <div className="opportunity-list">
              <div className="opportunity-list1">
                <div className="left opportunity-image1"></div>
                <div className="right">
                  <p>Shopify Brandstorm 2023 - Apply now</p>
                </div>
              </div>
              <div className="opportunity-list1">
                <div className="left opportunity-image2"></div>
                <div className="right">
                  <p>
                    Code to Win 2023 - Dhaka | BDT 4,50,000 in prizes!
                  </p>
                </div>
              </div>
              <div className="opportunity-list1">
                <div className="left opportunity-image3"></div>
                <div className="right">
                  <p>Amazon's Codefest-Dhaka 2022-23</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Internship;
