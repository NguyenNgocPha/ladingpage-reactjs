import React from "react";
import "../css/index.css";
import ibm from "../asset/ibm.svg";

function Testimonials() {
  return (
    <div className="features" style={{ marginTop: "190px" }}>
      <div className="featuresContainer">
        <div className="featuresTiltle">Testimonials</div>
      </div>
      <div className="featuresContainer" style={{ marginTop: "90px" }}>
        <img src={ibm} />
      </div>
      <div className="featuresContainer" style={{ marginTop: "60px" }}>
        <div className="TestimonialsContent">
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </div>
      </div>
      <div className="DisplayFlex" style={{ marginTop: "62px" }}>
        <img
          src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
          alt="Girl in a jacket"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
        <div
          style={{
            marginLeft: "10px",
            color: "#374754",
            textAlign: "left",
            alignItems: "center",
          }}
        >
          <p style={{ marginTop: 5 }} className="fontP">
            Organize across
          </p>
          <p style={{ marginTop: "1.6px" }}>Ui designer</p>
        </div>
      </div>
      <div className="PartnersButton" style={{ marginTop: "82px" }}>
        <button style={{ width: 276 }}>More Testimonials</button>
      </div>
    </div>
  );
}

export default Testimonials;
