import React from "react";
import { FiArrowUpRight, FiMenu } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#home" className="navbar-logo">
          CHIDERA<span>.</span>
        </a>

        <nav className="navbar-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="navbar-cta">
          Let's talk
          <FiArrowUpRight />
        </a>

        <button className="menu-button" aria-label="Open menu">
          <FiMenu />
        </button>

      </div>
    </header>
  );
};

export default Navbar;