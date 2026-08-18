import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-container">

        <span className="cta-eyebrow">
          HAVE A PROJECT IN MIND?
        </span>

        <h2 className="cta-title">
          Let’s make
          <br />
          something <span>meaningful.</span>
        </h2>

        <p className="cta-description">
          Whether you have an idea, a problem to solve,
          or just want to say hello — I’d love to hear from you.
        </p>

        <a href="/contact" className="cta-button">
          <span>Let's work together</span>

          <span className="cta-button-icon">
            <FiArrowUpRight />
          </span>
        </a>

        <div className="cta-bottom">
          <span>AVAILABLE FOR SELECT PROJECTS</span>
          <span>2026</span>
        </div>

      </div>
    </section>
  );
};

export default CTA;