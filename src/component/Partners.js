import React from "react";
import "../css/index.css";
import partners1 from "../asset/partners1.svg";
import partners2 from "../asset/partners2.svg";
import partners3 from "../asset/partners3.svg";
import partners4 from "../asset/partners4.svg";
import partners5 from "../asset/partners5.svg";
import partners6 from "../asset/partners6.svg";
import partners7 from "../asset/partners7.svg";
import partners8 from "../asset/partners8.svg";

function Partners() {
  return (
    <div className="features" style={{ marginTop: "130px" }}>
      <div className="featuresContainer">
        <div className="featuresTiltle">Partners</div>
      </div>
      <div className="featuresContainer">
        <div className="featuresContent">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </div>
      </div>
      <div style={{ marginTop: "90px", textAlign: "center" }}>
        <div className="featuresContainer">
          <img src={partners1} />
          <img src={partners2} />
          <img src={partners3} />
          <img src={partners4} />
        </div>
        <div className="featuresContainer">
          <img src={partners5} />
          <img src={partners6} />
          <img src={partners7} />
          <img src={partners8} />
        </div>
        <div className="headerButton" style={{ marginTop: "80px" }}>
          <button>Try For Free</button>
        </div>
      </div>
    </div>
  );
}

export default Partners;
