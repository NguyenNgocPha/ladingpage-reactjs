import React from "react";
import "../css/index.css";

function Pricing() {
  return (
    <div className="pricing">
      <div className="pricingContainer">
        <div className="pricingTiltle">Pricing </div>
      </div>
      <div className="pricingContainer">
        <div className="pricingContent">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </div>
      </div>
      <div
        style={{ marginTop: "90px", alignItems: "center" }}
        className="featuresContainer"
      >
        <div className="pricingBoldWhite">
          <div className="pricingBoldWhiteTitle">FREE</div>
          <div
            className="pricingBoldWhiteContent"
            style={{ marginTop: "20px" }}
          >
            Organize across all apps by hand
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div className="pricingBoldWhiteTitleBig">0</div>
            <div style={{ marginTop: "0px", marginLeft: "10px" }}>
              <div className="pricingBoldWhiteTitleMin">$</div>
              <p style={{ marginTop: "0px" }}>Per Month</p>
            </div>
          </div>
          <p>Pricing Feature</p>
          <p>Pricing Feature</p>
          <p>Pricing Feature</p>
          <p>Pricing Feature</p>
          <div className="pricingButton" style={{ marginTop: "60px" }}>
            <button>Order Now</button>
          </div>
        </div>

        <div className="pricingBoldBlue">
          <div className="pricingBoldBlueTitle">STANDARD</div>
          <div className="pricingBoldBlueContent">
            Organize across all apps by hand
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div className="pricingBoldBlueTitleBig" style={{ width: "100px" }}>
              10
            </div>
            <div style={{ marginTop: "0px", marginLeft: "10px" }}>
              <div className="pricingBoldBlueTitleMin">$</div>
              <p style={{ marginTop: "0px" }}>Per Month</p>
            </div>
          </div>
          <p>Pricing Feature</p>
          <p>Pricing Feature</p>
          <p>Pricing Feature</p>
          <p>Pricing Feature</p>
          <div className="pricingButton" style={{ marginTop: "58px" }}>
            <button style={{ backgroundColor: "#FFFFFF", color: "#2091F9" }}>
              Order Now
            </button>
          </div>
        </div>
        <div className="pricingBoldWhite" style={{ marginRight: 0 }}>
          <div className="pricingBoldWhiteTitle">BUSINESS</div>
          <div
            className="pricingBoldWhiteContent"
            style={{ marginTop: "20px" }}
          >
            Organize across all apps by hand
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div
              className="pricingBoldWhiteTitleBig"
              style={{ width: "100px" }}
            >
              99
            </div>
            <div style={{ marginTop: "0px", marginLeft: "10px" }}>
              <div className="pricingBoldWhiteTitleMin">$</div>
              <p style={{ marginTop: "0px" }}>Per Month</p>
            </div>
          </div>
          <p>Pricing Feature</p>
          <p>Pricing Feature</p>
          <p>Pricing Feature</p>
          <p>Pricing Feature</p>
          <div className="pricingButton" style={{ marginTop: "60px" }}>
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
