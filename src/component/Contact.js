import React from "react";
import "../css/index.css";
import addressBlue from "../asset/addressBlue.svg";
import phoneBlue from "../asset/phoneBlue.svg";
import mail from "../asset/mail.svg";
import map from "../asset/map.svg";
import tweeterblue from "../asset/tweeterblue.svg";
import fbblue from "../asset/fbblue.svg";
import thinkBlue from "../asset/thinkBlue.svg";

function Contact() {
  return (
    <div className="features" style={{ marginTop: "200px" }}>
      <div className="featuresContainer">
        <div className="featuresTiltle">Contact Us</div>
      </div>
      <div className="featuresContainer">
        <div className="featuresContent">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </div>
      </div>

      <div
        style={{ marginTop: "100px" }}
        className="featuresContainer ContenContact"
      >
        <div className="formContact">
          <div className="pricingBoldWhiteTitle" style={{ marginTop: "45px" }}>
            Contact Us
          </div>
          <form>
            <input className="input" placeholder="You Name" />
            <input className="input" placeholder="You Email" />
            <textarea
              className="inputMessage"
              placeholder="You Email"
              defaultValue={""}
            />
            <div className="contactButton" style={{ marginTop: "45px" }}>
              <button>send</button>
            </div>
          </form>
        </div>

        <div className="containerContactRight">
          <div className="ContactRight " style={{ marginTop: "45px" }}>
            <div className="contactAdress featuresBold ">
              <img src={addressBlue} alt="Italian Trulli" />

              <div className="featuresBoldTextContent contactAdress2">
                6386 Spring St undefined Anchorage, Georgia 12473 United States
              </div>
            </div>

            <div className="featuresBold contactAdress2">
              <img src={phoneBlue} alt="Italian Trulli" />
              <div className="featuresBold contactAdress2">(843) 555-0130</div>
            </div>

            <div className="contactAdress featuresBold ">
              <img src={mail} alt="Italian Trulli" />
              <div className="featuresBoldTextContent contactAdress2">
                willie.jennings@example.com
              </div>
            </div>
          </div>

          <div className="featuresContainer map" style={{ marginTop: "10px" }}>
            <img src={map} />
          </div>

          <div className="contactAdress3">
            <img src={tweeterblue} style={{ marginRight: "30px" }} />
            <img src={fbblue} style={{ marginRight: "30px" }} />
            <img src={thinkBlue} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
