import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <a href="#home" className="navbar-logo">
          <span className="logo-mark">C</span>

          <span className="logo-name">
            CHIDERA
            <small>BENJAMIN</small>
          </span>
        </a>


        {/* NAVIGATION */}
        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
        </nav>


        {/* RIGHT SIDE */}
        <div className="navbar-right">

          <a
            href="#contact"
            className="navbar-cta"
          >
            <span>Let's talk</span>

            <span className="navbar-cta-icon">
              <FiArrowUpRight />
            </span>
          </a>

        </div>


        {/* MOBILE MENU BUTTON */}
        <button
          className="navbar-menu-button"
          aria-label="Open menu"
        >
          ☰
        </button>

      </div>
    </header>
  );
};

export default Navbar;