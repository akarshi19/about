import React from 'react';
import './Team.css'; // Import CSS file for styling
import ceo from './Images/ceo 2.png'
import cofounder from './Images/image 39.png'
import developer from './Images/img2 7.png'
import division from './Images/division.png'
function Team() {
  return (
    <div className="team-container">
      <div id="team-head">Our team</div>
      <img
      src={division}
        alt=""
        className="lines"
        style={{ width: '1024px', height: '250px' }} // Inline style converted to JSX style object
      />
      <div className="images">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img
                className="imagew"
                src={ceo}
                alt="Founder"
                style={{ width: '250px', height: '250px' }} // Inline style converted to JSX style object
              />
            </div>
            <div className="flip-box-back">
              <a href="https://www.linkedin.com/in/mayur-kukreja-280b71b4/" target="_blank" rel="noopener noreferrer">
                <h2>Mayur Kukreja</h2>
                <p>CEO & Founder</p>
              </a>
            </div>
          </div>
        </div>

        {/* Repeat the same structure for other team members */}

        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img
                className="imagew"
                src={cofounder}
                alt="Co founder"
                style={{ width: '250px', height: '250px' }} // Inline style converted to JSX style object
              />
            </div>
            <div className="flip-box-back">
              <a href="https://www.linkedin.com/in/emanshu-wadhwani-258678176/" target="_blank" rel="noopener noreferrer">
                <h2>Emanshu wadhwani</h2>
                <p>Co-founder</p>
              </a>
            </div>
          </div>
        </div>

        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img
                src={developer}
                alt="Developer"
                style={{ width: '250px', height: '250px' }} // Inline style converted to JSX style object
              />
            </div>
            <div className="flip-box-back">
              <a href="https://www.linkedin.com/in/rohit-kanaujia-b775a5171/" target="_blank" rel="noopener noreferrer">
                <h2>Naruto</h2>
                <p>Developer</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
