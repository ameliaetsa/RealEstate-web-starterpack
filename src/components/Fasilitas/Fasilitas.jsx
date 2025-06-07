import React from "react";
import "./Fasilitas.css";
import FasilitasData from "./FasilitasData";
import Fasilitas1 from "../../assets/dapur.png";
import Fasilitas2 from "../../assets/kasur.png";
import Fasilitas3 from "../../assets/AC.png";

const Fasilitas = () => {
  return (
    <div className="fasilitas">
      <h1>Your Peaceful Island Home</h1>
      <p>A clean, minimalist retreat nestled in Bali’s charm. Designed for stillness, built for escape.</p>
      <div className="fasilitascard">
        <FasilitasData image={Fasilitas1} heading="Kitchen" text="A minimalist kitchen with essential cooking tools — perfect for preparing light meals, snacks, or your morning coffee in a relaxed setting." />
        <FasilitasData image={Fasilitas2} heading="Room" text="A cozy and clean bedroom with a neatly made bed — perfect for restful nights after a day exploring Bali." />
        <FasilitasData image={Fasilitas3} heading="Air Conditioning" text="A comfortable air-conditioned room to keep you cool and relaxed during your stay, ensuring a restful night’s sleep." />
      </div>
    </div>
  );
};

export default Fasilitas;
