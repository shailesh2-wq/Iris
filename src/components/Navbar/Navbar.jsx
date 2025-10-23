import React, { useState } from "react";
import "./Navbar.css";
import { FaUniversity, FaGraduationCap, FaBuilding, FaGlobe, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/assests/image.png";
import userImage from "../../assets/assests/Studentimg.png";
import img from "../../assets/assests/inst.png";
import ed1 from "../../assets/assests/ed1.png";
import bul from "../../assets/assests/building.png";
import ear from "../../assets/assests/world.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left Logo */}
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Center Menu + Search */}
      <div className={`navbar-center ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <ul className="navbar-menu">
          <li><img src={img} alt="User" className="avatar-img" />Institute ▾</li>
          <li><img src={ed1} alt="edpp" /> Academics ▾</li>
          <li><img src={bul} alt="bulding" />Campus ▾</li>
          <li>
            <img src={ear} alt="earth" /> Alumni ▾
          </li> 
          <div className="search-box">
            <input type="text" placeholder="" />
            <FaSearch className="search-icon" />
          </div>
        </ul>
      </div>

      {/* Right User Info */}
      <div className="user-section">
        <div className="user-info">
          <p className="user-name">Shailesh</p>
          <p className="user-id">241CV218</p>
        </div>
        <div className="user-avatar">
         <img src={userImage} alt="User" className="avatar-img" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
