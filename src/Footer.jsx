import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* =========================================
            TOP
        ========================================= */}

        <div className="footer-top">

          <div className="footer-brand">

            <Link
              to="/"
              className="footer-logo"
            >
              <span className="footer-logo-mark">
                C
              </span>

              <span className="footer-logo-name">
                CHIDERA
                <small>BENJAMIN</small>
              </span>
            </Link>

            <p>
              Product designer creating
              thoughtful digital experiences
              that make sense.
            </p>

          </div>


          {/* =========================================
              NAVIGATION
          ========================================= */}

          <div className="footer-column">

            <span className="footer-label">
              EXPLORE
            </span>

            <nav className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/work">Work</Link>
              <Link to="/contact">Contact</Link>
            </nav>

          </div>


          {/* =========================================
              SOCIALS
          ========================================= */}

          <div className="footer-column">

            <span className="footer-label">
              CONNECT
            </span>

            <div className="footer-links">

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <FiArrowUpRight />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
                <FiArrowUpRight />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Behance
                <FiArrowUpRight />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Dribbble
                <FiArrowUpRight />
              </a>

            </div>

          </div>

        </div>




        {/* =========================================
            BOTTOM
        ========================================= */}

        <div className="footer-bottom">

          <span>
            © 2026 CHIDERA BENJAMIN
          </span>

          <span>
            DESIGNED WITH INTENTION.
          </span>

          <a
            href="#"
            className="footer-back-top"
          >
            BACK TO TOP
            <FiArrowUpRight />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;