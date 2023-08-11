import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import RobotAI from '../../../assets/images/robotAI.png';

export default function OptionSelection({ arrayItems, selectOption }) {
  
  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function call() {
      try {
        let resp = await axios.get(
          'http://localhost:5000/api/dashboard',
          {
            headers: {
              Authorization: 'Bearer ' + Cookies.get('jwt'),
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

  return (
    <>
      <div className="option-select-div">
        <div className="option-select-inner">
          <div className="option-select-left">
            <div className="heading">
              <p>Hello {profile.username},</p>
              <p>It's your AI Assistant</p>
            </div>
            <div className="heading-desc">
              <p>
                I go by the name of <span>Twinkie</span>, a creation powered by the collaborative efforts of the{' '}
                <a href="https://beta.openai.com/docs/" target="_blank" rel='noreferrer' >OpenAI API</a>. Embracing the role of an AI bot,
                I offer a wealth of diverse knowledge, responding to your inquiries with insights that often transcend your imagination.
              </p>
              <p>Below is given 2 options, Select any and enjoy !</p>
            </div>
            <div className="grid-outer">
              <div className="grid-main">
                {arrayItems.map((item) => {
                  return (
                    <div
                      className="grid-child"
                      onClick={() => selectOption(item.option)}
                    >
                      <p>{item.name}</p>
                      <p>{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="option-select-right">
            <img src={RobotAI} alt={RobotAI} />
          </div>
        </div>
      </div>
    </>
  );
}
