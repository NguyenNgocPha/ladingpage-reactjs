import "../css/pha.css";

import { FaTimes } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { useRef } from "react";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <a href="/#"> Home</a>
        <a href="/#"> Home1</a>
        <a href="/#"> Home1</a>
        <a href="/#"> Home1</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <BiMenuAltRight />
      </button>
    </header>
  );
}
export default Navbar;
