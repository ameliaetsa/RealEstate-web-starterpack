import React from "react";
import "./Fasilitas.css";

const FasilitasData = (props) => {
  return (
    <div className="f-card">
      <div className="f-image">
      <img src={props.image} alt={props.title} className="f-image" />
    </div>
    <h4>{props.heading}</h4>
    <p>{props.text}</p>
    </div>
  );
};

export default FasilitasData;
// This component is used to display individual facility data in the Fasilitas component.
