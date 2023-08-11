import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HiringChallange.css";
import HiringCard from "../../components/cards/hiringcard/HiringCard";
import HiringBanner from "../../assets/svg/type3.svg";
import HiringBanner2 from "../../assets/svg/hiringBanner.svg";
import SEO from "../../components/SEO";
const HiringChallange = () => {
  const [hirings, setHirings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function call() {
      try {
        let resp = await axios.get(
          `http://localhost:5000/api/hiring`
        );
        setHirings(resp.data);
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

  const filteredHirings = hirings.filter((hiring) => {
    return hiring.position.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div className="hiring">
        <SEO dynamicTitle="SheRise | Hiring" />
        <div className="hiring-banner-section">
          <div className="left">
            <div className="left-image">
              <img
                src={HiringBanner2}
                alt={HiringBanner2}
                className="hiring-banner-image"
              />
            </div>
            <div className="hiring-heading">
              {" "}
              <p> Hirings</p>
            </div>
          </div>
          <div className="right">
            <div className="left-image">
              <img
                src={HiringBanner}
                alt={HiringBanner}
                className="hiring-banner-image"
              />
            </div>
          </div>
        </div>
        <div className="searchbar-card-opportunity">
          <div className="searchbar-card">
            <div className="hiring-searchbar">
              <input
                type="text"
                placeholder="Search Hirings"
                onChange={handleSearch}
              />
              <div className="search-btn">
                <p>Search</p>
              </div>
            </div>
            <section className="hirings-con">
              {filteredHirings.map((hiring) => {
                return <HiringCard hiring={hiring} />;
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

export default HiringChallange;
