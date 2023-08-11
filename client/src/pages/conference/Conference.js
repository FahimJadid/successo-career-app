import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Conference.css";
import ConferenceCard from "../../components/cards/conferencecard/ConferenceCard";
import ConferenceBanner from "../../assets/svg/type3.svg";
import ConferenceBanner2 from "../../assets/svg/conferenceBanner.png";
import SEO from "../../components/SEO";

const Conference = () => {
  const [conferences, setConferences] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function call() {
      try {
        let resp = await axios.get(
          `http://localhost:5000/api/conferences`
        );
        setConferences(resp.data);
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

  const filteredConferences = conferences.filter((conference) => {
    return conference.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div className="conference">
      <SEO dynamicTitle="Successo | Conferences" />
        <div className="conference-banner-section">
          <div className="left">
            <div className="left-image">
              <img
                src={ConferenceBanner2}
                alt={ConferenceBanner2}
                className="conference-banner-image"
              />
            </div>
            <div className="conference-heading">
              {" "}
              <p> Conferences</p>
            </div>
          </div>
          <div className="right">
            <div className="left-image">
              <img
                src={ConferenceBanner}
                alt={ConferenceBanner}
                className="conference-banner-image"
              />
            </div>
          </div>
        </div>
        <div className="searchbar-card-opportunity">
          <div className="searchbar-card">
            <div className="conference-searchbar">
              <input
                type="text"
                placeholder="Search Conferences"
                onChange={handleSearch}
              />
              <div className="search-btn">
                <p>Search</p>
              </div>
            </div>
            <section className="conferences-con">
              {filteredConferences.map((conference) => {
                return <ConferenceCard conference={conference} />;
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

export default Conference;
