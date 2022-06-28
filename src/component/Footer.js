import React from "react";
import address from "../asset/address.svg";
import phone from "../asset/phone.svg";
import tweeter from "../asset/tweeter.svg";
import fb from "../asset/fb.svg";
import think from "../asset/think.svg";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerBold">
          <p className="footerBoldtitle">Pages</p>
          <p>Home</p>
          <p>Product</p>
          <p>Pricing</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="footerBold">
          <p className="footerBoldtitle">Tomothy</p>
          <p>Eleanor Edwards</p>
          <p>Ted Robertson</p>
          <p>Annette Russell</p>
          <p>Jennie Mckinney</p>
          <p>Gloria Richards</p>
        </div>
        <div className="footerBold" style={{ marginRight: 0 }}>
          <p className="footerBoldtitle">Jane Black</p>
          <p>Philip Jones</p>
          <p>Product</p>
          <p>Colleen Russell</p>
          <p>Marvin Hawkins</p>
          <p>Bruce Simmmons</p>
        </div>
        <div className="footerBoldIcon">
          <div style={{ display: "flex", paddingBottom: "0px" }}>
            <div>
              <img src={address} />
            </div>
            <p style={{ marginTop: "10px" }}>
                7480 Mockingbird Hill undefined{" "}
            </p>
          </div>
          <div style={{ display: "flex", paddingBottom: "0px" }}>
            <div>
              <img src={phone} />
            </div>
            <p style={{ marginTop: "10px" }}>  (239) 555-0108 </p>
          </div>
          <div className="iconBottom">
            <a href="./" style={{ marginRight: "33px" }}>
              <img src={tweeter} alt="ItalianTrulli" />
            </a>
            <a href="./" style={{ marginRight: "33px" }}>
              <img src={fb} alt="Italian Trulli" />
            </a>
            <a href="./">
              <img src={think} alt="Italian Trulli" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
