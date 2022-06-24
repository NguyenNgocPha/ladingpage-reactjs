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
      <div style={{ marginTop: "100px" }} className="featuresContainer">
        <div
          style={{
            width: "453px",
            textAlign: "center",
            border: "1px solid #DDDDDD",
            boxShadow: "0px 13px 19px rgba(0, 0, 0, 0.07)",
            borderRadius: "20px",
          }}
        >
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
        <div style={{ width: "765px", height: "669px" }}>
          <div className="featuresContainer" style={{ marginTop: "45px" }}>
            <div
              className=" featuresBold"
              style={{ width: "40%", marginRight: "35px" }}
            >
              <img src={addressBlue} alt="Italian Trulli" />
              <div
                className="featuresBoldTextContent"
                style={{ width: "293px" }}
              >
                6386 Spring St undefined Anchorage, Georgia 12473 United States
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
                width: "117px",
                marginRight: "35px",
              }}
            >
              <img src={phoneBlue} alt="Italian Trulli" />
              <div
                style={{
                  width: "117px",
                  height: "100px",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "25px",
                  textAlign: "center",
                  letterSpacing: "0.2px",
                  color: "#374754",
                }}
              >
                (843) 555-0130
              </div>
            </div>
            <div className="featuresBold">
              <img src={mail} alt="Italian Trulli" />
              <div className="featuresBoldTextContent">
                willie.jennings@example.com
              </div>
            </div>
          </div>
          <div className="featuresContainer" style={{ marginTop: "10px" }}>
            <img src={map} />
          </div>
          <div
            className="featuresContainer"
            style={{ marginTop: "70px", float: "left", marginLeft: "50px" }}
          >
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
