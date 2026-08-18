import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo">
          <span className="logo-mark">C</span>

          <span className="logo-name">
            CHIDERA
            <small>BENJAMIN</small>
          </span>
        </Link>


        {/* NAVIGATION */}
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

      </div>
    </header>
  );
};

export default Navbar;