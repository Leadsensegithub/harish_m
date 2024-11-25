import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/LandingPage.css"; // Assuming your CSS file is in this path
import { FaBars, FaTimes } from "react-icons/fa"; // Importing the hamburger and close icons
import Assets from "../assets/Assets";

function DefaultHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll when the menu is open
    } else {
      document.body.style.overflow = "auto"; // Re-enable scroll when the menu is closed
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo">
          <img
            src={Assets.LSmediaLOGO} // Replace with your logo path
            alt="Logo"
            className="navbar-logo"
          />
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />} {/* Adjusting icon size */}
        </div>

        {/* Navbar Links */}
        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
            </li>
            <li>
              <button className="btn btn btn-danger " onClick={() => navigate("/register")}>
                Register
              </button>
            </li>
            <li>
              <button className="btn btn btn-danger" onClick={() => navigate("/companyRegister")}>
                Company Register
              </button>

            </li>
            <li>
              <button className="btn btn btn-danger" onClick={() => navigate()}>
               LogOut 
              </button>
              
            </li>
            <li>
  <img 
    src={Assets.EmptyProfile} 
    className="emptyprofile" 
    onClick={() => navigate()} 
    alt="Company Register" 
  />
</li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default DefaultHeader;
