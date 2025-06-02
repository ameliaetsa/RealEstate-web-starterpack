import React from "react";
import "./Header.css"; // Assuming you have a CSS file for styling

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddigns innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="flexCenter h-menu">
          <a href="#home">Home</a>
          <a href="#ourvalue">Our Value</a>
          <button className="button">
            <a href="#contactus">Contact Us</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
