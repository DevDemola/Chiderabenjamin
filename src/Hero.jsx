import React from "react";
import { FiArrowUpRight, FiMousePointer } from "react-icons/fi";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-label">
            <span className="hero-label-dot"></span>
            <span>Product Designer & UX Researcher</span>
          </div>

          <h1 className="hero-title">
            Designing
            <br />
            <span>ideas</span> into
            <br />
            experiences<span className="hero-dot">.</span>
          </h1>

          <p className="hero-description">
            Hi, I’m Chidera. I’m a product designer, graphic designer,
            and UX researcher focused on creating meaningful digital
            experiences and visual identities.
          </p>

          <div className="hero-actions">
            <a href="#work" className="hero-primary-btn">
              View my work
              <FiArrowUpRight />
            </a>

            <a href="#contact" className="hero-secondary-btn">
              Let's talk
            </a>
          </div>


        </div>


        {/* RIGHT IMAGE */}
        <div className="hero-visual">

          <div className="hero-image">
            <img
              src="/me1.png"
              alt="Chidera - Product Designer"
            />
          </div>

          <div className="hero-image-info">
            <span>CHIDERA</span>
            <span>DESIGN / 2026</span>
          </div>

          <div className="hero-number">
            01
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;