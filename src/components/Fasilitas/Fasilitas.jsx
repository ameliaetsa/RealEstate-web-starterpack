import React from "react";
import "./Fasilitas.css";
import FasilitasData from "./FasilitasData";
import Fasilitas1 from "../../assets/dapur.png";
import Fasilitas2 from "../../assets/kasur.png";
import Fasilitas3 from "../../assets/AC.png";
import Fasilitas4 from "../../assets/wastafel.jpg"; // Assuming you have another image for the fourth facility
import Fasilitas5 from "../../assets/parkir.png"; // Assuming you have another image for the fifth facility
import Fasilitas6 from "../../assets/kolam.png"; // Assuming you have another image for the sixth facility
import Fasilitas7 from "../../assets/workspace.jpg"; // Assuming you have another image for the seventh facility
import Fasilitas8 from "../../assets/sink.jpg"; // Assuming you have another image for the eighth facility
import Fasilitas9 from "../../assets/toilet.jpg";

const Fasilitas = () => {
  return (
    <div className="fasilitas">
      <h1>Your Peaceful Island Home</h1>
      <p>A clean, minimalist retreat nestled in Bali’s charm. Designed for stillness, built for escape.</p>
      <div className="fasilitascard">
        <FasilitasData image={Fasilitas1} heading="Kitchen" text="A minimalist kitchen with essential cooking tools — perfect for preparing light meals, snacks, or your morning coffee in a relaxed setting." />
        <FasilitasData image={Fasilitas2} heading="Room" text="A cozy and clean bedroom with a neatly made bed — perfect for restful nights after a day exploring Bali." />
        <FasilitasData image={Fasilitas3} heading="Air Conditioning" text="A comfortable air-conditioned room to keep you cool and relaxed during your stay, ensuring a restful night’s sleep." />
        <FasilitasData image={Fasilitas4} heading="Wastafel" text="A comfortable air-conditioned room to keep you cool and relaxed during your stay, ensuring a restful night’s sleep." />
        <FasilitasData image={Fasilitas5} heading="Parkir" text="A comfortable air-conditioned room to keep you cool and relaxed during your stay, ensuring a restful night’s sleep." />
        <FasilitasData image={Fasilitas6} heading="Kolam" text="A comfortable air-conditioned room to keep you cool and relaxed during your stay, ensuring a restful night’s sleep." />
        <FasilitasData image={Fasilitas7} heading="Workspace" text="A comfortable air-conditioned room to keep you cool and relaxed during your stay, ensuring a restful night’s sleep." />
        <FasilitasData image={Fasilitas8} heading="Sink" text="A comfortable air-conditioned room to keep you cool and relaxed during your stay, ensuring a restful night’s sleep." />
        <FasilitasData image={Fasilitas9} heading="Sink" text="A comfortable air-conditioned room to keep you cool and relaxed during your stay, ensuring a restful night’s sleep." />

      </div>
    </div>
  );
};

export default Fasilitas;
