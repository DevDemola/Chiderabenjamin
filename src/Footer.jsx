import React from "react";
import {
  FiArrowUpRight,
  FiInstagram,
  FiLinkedin,
  FiDribbble,
} from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* TOP */}
        <div className="footer-top">

          <div className="footer-brand">
            <a href="/" className="footer-logo">
              Chidera Benjamin<span>.</span>
            </a>

            <p>
              Product designer creating
              thoughtful digital experiences.
            </p>
          </div>


          {/* NAVIGATION */}
          <div className="footer-nav">

            <span className="footer-nav-title">
              EXPLORE
            </span>

            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#tools">Tools</a>
            <a href="#contact">Contact</a>

          </div>


          {/* SOCIALS */}
          <div className="footer-social">

            <span className="footer-nav-title">
              CONNECT
            </span>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <span>Instagram</span>
              <FiArrowUpRight />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <FiArrowUpRight />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <span>Dribbble</span>
              <FiArrowUpRight />
            </a>

          </div>

        </div>


       


        {/* BOTTOM */}
        <div className="footer-bottom">

          <span>
            © 2026 Chidera Benjamin. All rights reserved.
          </span>

          <a
  href="https://wa.me/08158411808"
  target="_blank"
  rel="noreferrer"
  className="footer-credit"
>
  Designed & built by <strong>Demola</strong>
</a>

          <a href="#top" className="footer-back-top">
            BACK TO TOP
            <span>
              <FiArrowUpRight />
            </span>
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;