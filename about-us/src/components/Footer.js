import React from "react";
import "./Footer.css";
class Footer extends React.Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <ul className="col">
            <li>
              <a href="index.js">HOME</a>
            </li>
            <li>
              <a href="index.js">Projects</a>
            </li>
            <li>
              <a href="index.js">Contacts</a>
            </li>
          </ul>

          <ul className="col">
            <li>
              <a href="index.js">Services</a>
            </li>
            <li>
              <a href="ondex.js">FAQ</a>
            </li>
            <li>
              <a href="index.js">Testimonials</a>
            </li>
          </ul>

          <ul className="col">
            <li>
              <a href="index.js">Email</a>
            </li>
            <li>
              <a href="index.js">LinkedIn</a>
            </li>
          </ul>

          <ul className="col">
            <li>
              <a href="index.js">Subscribe to our Newsletter</a>
            </li>
          </ul>
        </div>
        <div className="line"></div>
        <div>
          <p className="copyright-text">© 2023 To-Let Globe -- Lucknow</p>
        </div>
      </div>
    );
  }
}

export default Footer;
