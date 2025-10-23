import React, { useState } from "react";
import "./Navbar.css";
import { FaUniversity, FaGraduationCap, FaBuilding, FaGlobe, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/assests/image.png";
import userImage from "../../assets/assests/Studentimg.png";
import img from "../../assets/assests/inst.png";
import ed1 from "../../assets/assests/ed1.png";
import bul from "../../assets/assests/building.png";
import ear from "../../assets/assests/world.png";

/**
 * Navbar Component
 * 
 * A responsive navigation bar component for the IRIS student portal.
 * Features include:
 * - Responsive design with mobile hamburger menu
 * - Search functionality
 * - User profile display
 * - Accessibility support with ARIA labels
 * - Smooth animations and hover effects
 * 
 * @component
 * @returns {JSX.Element} The rendered Navbar component
 */
const Navbar = () => {
  // State for managing mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  /**
   * Toggles the mobile menu visibility
   * Updates the state to show/hide the mobile navigation menu
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * Handles search input changes with validation
   * @param {Event} event - The input change event
   */
  const handleSearchChange = (event) => {
    const value = event.target.value;
    // Basic validation: limit search query length
    if (value.length <= 100) {
      setSearchQuery(value);
    }
  };

  /**
   * Handles search form submission
   * @param {Event} event - The form submit event
   */
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, this would trigger a search API call
      console.log("Searching for:", searchQuery);
      // Clear search after submission
      setSearchQuery("");
    }
  };

  /**
   * Handles keyboard navigation for menu items
   * @param {Event} event - The keyboard event
   */
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      // In a real app, this would navigate to the selected menu item
      console.log("Menu item selected:", event.target.textContent);
    }
  };

  return (
    <nav className="navbar">
      {/* Logo Section - Left side of navbar */}
      <div className="navbar-left">
        <img src={logo} alt="IRIS Logo" className="logo" />
      </div>

      {/* Mobile Menu Toggle Button - Only visible on mobile devices */}
      <button 
        className="mobile-menu-btn" 
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Main Navigation Menu - Center section with menu items and search */}
      <div 
        className={`navbar-center ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}
        id="mobile-menu"
        role="navigation"
        aria-label="Main navigation"
      >
        <ul className="navbar-menu" role="menubar">
          <li role="menuitem" tabIndex={0} onKeyDown={handleKeyDown}>
            <img src={img} alt="Institute icon" className="avatar-img" />
            Institute ▾
          </li>
          <li role="menuitem" tabIndex={0} onKeyDown={handleKeyDown}>
            <img src={ed1} alt="Academics icon" className="avatar-img" />
            Academics ▾
          </li>
          <li role="menuitem" tabIndex={0} onKeyDown={handleKeyDown}>
            <img src={bul} alt="Campus icon" className="avatar-img" />
            Campus ▾
          </li>
          <li role="menuitem" tabIndex={0} onKeyDown={handleKeyDown}>
            <img src={ear} alt="Alumni icon" className="avatar-img" />
            Alumni ▾
          </li>
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search..." 
              aria-label="Search"
              role="searchbox"
              value={searchQuery}
              onChange={handleSearchChange}
              maxLength={100}
              className="search-input"
            />
            <button className="search-icon-btn" aria-label="Search" onClick={handleSearchSubmit}>
              <FaSearch className="search-icon" aria-hidden="true" />
            </button>
          </div>
        </ul>
      </div>

      {/* Right User Info */}
      <div className="user-section" role="region" aria-label="User information">
        <div className="user-info">
          <p className="user-name" aria-label="User name">Shailesh</p>
          <p className="user-id" aria-label="User ID">241CV218</p>
        </div>
        <div className="user-avatar" role="img" aria-label="User avatar">
          <img src={userImage} alt="Shailesh's profile picture" className="avatar-img" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
