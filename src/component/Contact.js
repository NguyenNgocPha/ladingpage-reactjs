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
    <div className="features margin200">
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
        style={{ marginTop: "60px" }}
        className="featuresContainer ContenContact"
      >
        <div className="formContact">
          <div className="pricingBoldWhiteTitle" style={{ marginTop: "45px" }}>
            Contact Us
          </div>
          <form>
            <input
              className="input"
              placeholder="You Name"
              defaultValue="You Name"
            />
            <input
              className="input"
              placeholder="You Email"
              defaultValue="You Email"
            />
            <textarea
              className="inputMessage"
              placeholder="Your Message"
              defaultValue="Your Message"
            />
            <div className="contactButton" style={{ marginTop: "45px" }}>
              <button>Send</button>
            </div>
          </form>
        </div>

        <div className="containerContactRight">
          <div className="ContactRight " style={{ marginTop: "20px" }}>
            <div className="contactAdress featuresBold ">
              <img src={addressBlue} alt="Italian Trulli" />
              <div className="contactAdress2">
                6386 Spring St undefined Anchorage, Georgia 12473 United States
              </div>
            </div>

            <div
              className="featuresBold contactAdress margin35"
              style={{ width: 117 }}
            >
              <img src={phoneBlue} alt="Italian Trulli" />
              <div className=" contactAdress4">(843)&nbsp;5550130</div>
            </div>
            <div className="featuresBold contactAdress" style={{ width: 225 }}>
              <img src={mail} alt="Italian Trulli" />
              <div className=" contactAdress4" style={{ width: 225 }}>
                willie.jennings@example.com
              </div>
            </div>
          </div>

          <div className="featuresContainer map" style={{ marginTop: "70px" }}>
            <img src={map} style={{ marginLeft: 95 }} />
          </div>

          <div className="contactAdress3">
            <img src={tweeterblue} style={{ marginRight: "32px" }} />
            <img src={fbblue} style={{ marginRight: "32px" }} />
            <img src={thinkBlue} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
