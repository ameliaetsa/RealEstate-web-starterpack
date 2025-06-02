import React from "react";
import "./Hero.css"; // Assuming you have a CSS file for styling

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth hero-container flexCenter">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Private Villa <br />
              in <br />
              The Quiet Canggu
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Experience the tranquility of Canggu in our private villa, <br />
              where luxury meets serenity. <br />
            </span>
            <span className="secondaryText"> Book your stay today and immerse yourself in the beauty of Bali.</span>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
