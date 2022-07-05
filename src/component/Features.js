import React from "react";
import "../css/index.css";
import opentype from "../asset/opentype.svg";
import desgin from "../asset/desgin.svg";
import fastest from "../asset/fastest.svg";
import video from "../asset/video.svg";
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

      <div className="featuresBox">
        <div className="featuresContainer margin100v2">
          <div
            className="featuresBold"
            style={{ marginRight: "50px", marginLeft: "50px" }}
          >
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

          <div
            className="featuresBold"
            style={{ marginRight: "50px", marginLeft: "50px" }}
          >
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

          <div
            className="featuresBold"
            style={{ marginRight: "50px", marginLeft: "50px" }}
          >
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

        <div className="featuresContainer margin100">
          <img className="video" src={video} />
        </div>
      </div>

      <div className="featuresContainer paddingTopfeatures">
        <div className="featuresContainerFastest">
          <div className="featuresTiltleFastest">Fastest way to organize</div>
          <div className="featuresContentFastest">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </div>
          <div className="FastestButton">
            <button>Try For Free</button>
          </div>
        </div>

        <div className="containerComputer">
          {" "}
          <img src={computor} className="computer" />
        </div>
      </div>

      <div className="featuresContainer Display">
        <div className="featuresTiltleMinLetter">At your fingertips</div>
        <div className="featuresTiltle">Newsletter </div>
      </div>
      <div className="featuresContainer Display">
        <div className="featuresContent">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </div>
      </div>
      <div className="featuresContainerLetter">
        <div style={{}}>
          {" "}
          <img src={user} className="userSvg" />
        </div>
        <div className="containerLetter">
          <div className="featuresTiltleMinLetter DisplayNone">
            At your fingertips
          </div>
          <div className="featuresTiltleLetter DisplayNone">
            Lightning fast prototyping{" "}
          </div>
          <div
            className="featuresTiltleMinLetter "
            style={{ marginTop: 70, height: 28 }}
          >
            Subscribe to our Newsletter
          </div>
          <div className="featuresContentMinLetter" style={{ height: 28 }}>
            Available exclusivery on Figmaland
          </div>
          <div className="buttonLetter">
            <input className="EmailButton" placeholder="Your Email" />
            <button className="SubscribeButton">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
