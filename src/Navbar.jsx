import React, { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-mark">C</span>

          <span className="logo-name">
            CHIDERA
            <small>BENJAMIN</small>
          </span>
        </Link>


        {/* DESKTOP NAVIGATION */}
        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
        </nav>


        {/* RIGHT SIDE */}
        <div className="navbar-right">
          <Link
            to="/contact"
            className="navbar-cta"
          >
            <span>Let's talk</span>

            <span className="navbar-cta-icon">
              <FiArrowUpRight />
            </span>
          </Link>
        </div>


        {/* MOBILE MENU BUTTON */}
        <button
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>


      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <nav className="mobile-menu-links">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/work" onClick={closeMenu}>
            Work
          </Link>
        </nav>

        <Link
          to="/contact"
          className="mobile-menu-cta"
          onClick={closeMenu}
        >
          <span>Let's talk</span>

          <span className="navbar-cta-icon">
            <FiArrowUpRight />
          </span>
        </Link>
      </div>

    </header>
  );
};

export default Navbar;