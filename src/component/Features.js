import React from "react";
import "../css/index.css";
import opentype from "../asset/opentype.svg";
import desgin from "../asset/desgin.svg";
import fastest from "../asset/fastest.svg";
import video from "../asset/bunny.mp4";
import computor from "../asset/computor.svg";
import user from "../asset/user.svg";

function Features() {
  return (
    <div className="features">
      <div className="featuresContainer">
        <div className="featuresTiltle">Features</div>
      </div>
      <div className="featuresContainer">
        <div className="featuresContent">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </div>
      </div>
      <div className="featuresContainer" style={{ marginTop: "100px" }}>
        <div className="featuresBold" style={{ marginRight: "50px" }}>
          <img
            src={opentype}
            alt="Italian Trulli"
            style={{ marginBottom: "25px" }}
          />
          <div className="featuresBoldText">
            OpenType features Variable fonts
          </div>
          <div className="featuresBoldTextContent">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </div>
        </div>
        <div className="featuresBold" style={{ marginRight: "50px" }}>
          <img
            src={desgin}
            alt="Italian Trulli"
            style={{ marginBottom: "25px" }}
          />
          <div className="featuresBoldText">Design with real data</div>
          <div className="featuresBoldTextContent">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </div>
        </div>
        <div className="featuresBold" style={{ marginRight: "50px" }}>
          <img
            src={fastest}
            alt="Italian Trulli"
            style={{ marginBottom: "25px" }}
          />
          <div className="featuresBoldText">Fastest way to take action</div>
          <div className="featuresBoldTextContent">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </div>
        </div>
      </div>

      <div className="featuresContainer" style={{ marginTop: "100px" }}>
        <video
          src={video}
          height="658px"
          width="1177px"
          style={{ borderRadius: "45px" }}
          controls
        />
      </div>

      <div
        className="featuresContainer"
        style={{ paddingTop: "293px", height: "630px" }}
      >
        <div style={{ textAlign: "left" }}>
          <div
            className="featuresTiltle"
            style={{ width: "335px", textAlign: "left" }}
          >
            Fastest way to organize
          </div>
          <div
            className="featuresContent"
            style={{ marginTop: "100px", textAlign: "left" }}
          >
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </div>
          <div
            className="headerButton"
            style={{ float: "left", marginTop: "70px" }}
          >
            <button>Try For Free</button>
          </div>
        </div>
        <div style={{ justifyContent: "right" }}>
          {" "}
          <img src={computor} />
        </div>
      </div>
      <div
        className="featuresContainer"
        style={{ marginTop: "150px", height: "575px" }}
      >
        <div style={{ justifyContent: "right" }}>
          {" "}
          <img src={user} />
        </div>
        <div style={{ textAlign: "left", marginLeft: "70px", width: "450px" }}>
          <div
            className="featuresTiltleMin"
            style={{ width: "335px", textAlign: "left" }}
          >
            At your fingertips
          </div>
          <div
            className="featuresTiltle"
            style={{ width: "335px", textAlign: "left" }}
          >
            Lightning fast prototyping{" "}
          </div>
          <div
            className="featuresTiltleMin"
            style={{ width: "335px", textAlign: "left", marginTop: "100px" }}
          >
            Subscribe to our Newsletter
          </div>
          <div
            className="featuresContentMin"
            style={{ width: "335px", textAlign: "left" }}
          >
            Subscribe to our Newsletter
          </div>
          <div style={{ marginTop: "100px", display: "flex" }}>
            <input className="EmailButton" placeholder="Your Email" />
            <button className="SubscribeButton">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
