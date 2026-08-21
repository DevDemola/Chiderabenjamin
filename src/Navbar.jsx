import React, { useState } from "react";
import {
  FiArrowUpRight,
  FiMenu,
  FiX,
  // FiSparkles,
} from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <a href="#home" className="logo" onClick={closeMenu}>
          CHIDERA BENJAMIN<span>.</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <a href="#contact" className="project-button">

          <span>Start a Project</span>

          <span className="arrow-icon">
            <FiArrowUpRight />
          </span>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
            >
              <span>{link.name}</span>
              <FiArrowUpRight />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="mobile-project-button"
          onClick={closeMenu}
        >
          <span className="project-icon">
            {/* <FiSparkles /> */}
          </span>

          <span>Start a Project</span>

          <span className="arrow-icon">
            <FiArrowUpRight />
          </span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;