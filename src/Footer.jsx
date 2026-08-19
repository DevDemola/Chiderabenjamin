import React from "react";
import {
  FiInstagram,
  FiLinkedin,
  FiDribbble,
  FiArrowUpRight,
} from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* TOP */}
        <div className="footer-top">

          <a href="#home" className="footer-logo">
            Chidera<span>.</span>
          </a>

          <span className="footer-status">
            Available for select projects
          </span>

        </div>


        {/* INFO */}
        <div className="footer-info-grid">

          <div className="footer-info-item">
            <span className="footer-label">
              BASED IN
            </span>

            <p>
              Lagos, Nigeria
            </p>
          </div>


          <div className="footer-info-item">
            <span className="footer-label">
              SPECIALIZED IN
            </span>

            <p>
              Product Design · Graphic Design · UX Research
            </p>
          </div>


          <div className="footer-info-item">
            <span className="footer-label">
              SAY HELLO
            </span>

            <a
              href="mailto:chidera@email.com"
              className="footer-email"
            >
              chidera@email.com
              <FiArrowUpRight />
            </a>
          </div>

        </div>


        {/* BOTTOM */}
        <div className="footer-bottom">

          <p className="footer-copy">
            © 2026 Chidera
          </p>


          <div className="footer-socials">

            <a href="#" aria-label="Instagram">
              <FiInstagram />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FiLinkedin />
            </a>

            <a href="#" aria-label="Dribbble">
              <FiDribbble />
            </a>

          </div>


          <a href="#home" className="footer-top-link">
            Back to top
            <FiArrowUpRight />
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;