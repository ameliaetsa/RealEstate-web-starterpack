import React from "react";

const Desc = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container ">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Alamora Villa</span>
          <span className="primaryText">THE QUIET SIDE OF BALI</span>
          <span className="secondaryText">
            Designed for seekers of meaning, lovers of simplicity, and souls yearning for peace.
            <br /> This is more than just a place to stay.
            <br /> It’s a place to pause, to listen, and to become whole again. Here, time moves slower.
            <br />
            The air feels lighter, the light warmer, and the outside world slowly fades away.
            <br />
            In tropical silence, every moment holds meaning—
            <br />
            every breath a reminder that you are exactly where you belong.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Desc;
