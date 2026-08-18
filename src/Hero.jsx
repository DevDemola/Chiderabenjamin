import React from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        {/* =========================================
            LEFT SIDE
        ========================================= */}

        <div className="hero-left">

          <span className="hero-eyebrow">
            PRODUCT DESIGNER · UI/UX RESEARCHER
          </span>

          <h1 className="hero-title">
            I DESIGN
            <br />
            <span>WITH PURPOSE.</span>
          </h1>

          <p className="hero-description">
            Hi, I'm Chidera — a product designer, UI/UX
            researcher, and graphics designer creating
            thoughtful digital experiences that connect
            people, ideas, and technology.
          </p>

          {/* =========================================
              BUTTONS
          ========================================= */}

          <div className="hero-buttons">

            <a
              href="/contact"
              className="hero-btn hero-btn-primary"
            >
              <span>
                Let's Work Together
              </span>

              <span className="hero-btn-icon dark">
                <FiArrowRight />
              </span>
            </a>


            <a
              href="/work"
              className="hero-btn hero-btn-secondary"
            >
              <span>
                Explore My Work
              </span>

              <span className="hero-btn-icon light">
                <FiArrowUpRight />
              </span>
            </a>

          </div>


          {/* =========================================
              EXPERTISE
          ========================================= */}

          <div className="hero-brands">

            <p>
              WHAT I DO
            </p>

            <div className="brand-list">

              <span className="brand">
                Product Design
              </span>

              <span className="brand">
                UI / UX
              </span>

              <span className="brand">
                Research
              </span>

              <span className="brand">
                Graphics
              </span>

            </div>

          </div>

        </div>


        {/* =========================================
            RIGHT SIDE
        ========================================= */}

        <div className="hero-right">

          {/* PURPLE ORGANIC SHAPE */}

          <div className="hero-blob"></div>


          {/* PORTRAIT */}

          <div className="hero-image-wrapper">

            <img
              src="/me.png"
              alt="Chidera Benjamin"
              className="hero-image"
            />

          </div>


          {/* FLOATING LABEL */}

          <div className="hero-floating-card">

            <span className="status-dot"></span>

            <span>
              AVAILABLE FOR PROJECTS
            </span>

          </div>


          {/* SIDE LABEL */}

          <span className="hero-side-label">
            DESIGN · RESEARCH · CREATE
          </span>


          {/* DECORATIVE CIRCLE */}

          <div className="hero-decoration"></div>

        </div>

      </div>

    </section>
  );
};

export default Hero;