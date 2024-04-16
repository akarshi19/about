import React from "react";
import "./Navbar.css"
import logo1 from './Images/image 12.png'

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <div className="navbar">
      <div className="image">
        <img className="image" src={logo1} alt="logo" />
        <div className="links">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Property Listing</li>
          </ul>
        </div>
      </div>
    </div>
    );
  }
}

export default Navbar;
