import React from "react";
import "../css/index.css";
import logo from "../asset/logo.svg";
import tweeter from "../asset/tweeter.svg";
import fb from "../asset/fb.svg";
import think from "../asset/think.svg";

function Header() {
  return (
    <div className="header">
      <div className="nav">
        <div className="menu">
          <a href="https://freetuts.net" title="freetuts">
            Home
          </a>
          <a href="https://freetuts.net/hoc-c" title="freetuts">
            Product
          </a>
          <a href="https://freetuts.net/hoc-php" title="freetuts">
            Pricing
          </a>
          <a href="https://freetuts.net/hoc-html-css" title="freetuts">
            About
          </a>
          <a href="https://freetuts.net/hoc-javascript" title="freetuts">
            Contact
          </a>
        </div>
        <div className="logo">
          <img src={logo} alt="Italian Trulli" />
        </div>
        <div className="icon">
          <a href="./">
            <img src={tweeter} alt="Italian Trulli" />
          </a>
          <a href="./">
            <img src={fb} alt="Italian Trulli" />
          </a>
          <a href="./">
            <img src={think} alt="Italian Trulli" />
          </a>
        </div>
      </div>
      <div className="headerText">
        <div className="TextTiltle">The best products start with Figma</div>
      </div>
      <div className="headerTextContent">
        <div className="TextContent">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </div>
      </div>
      <div className="headerButton">
        <button>Try For Free</button>
      </div>
    </div>
  );
}

export default Header;
