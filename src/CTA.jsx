import React from "react";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-container">

        {/* IMAGE */}
        <div className="cta-image-wrapper">
          <img
            src="/me1.png"
            alt="Product Designer"
            className="cta-image"
          />
        </div>

        {/* CONTENT */}
        <div className="cta-content">

          <span className="cta-eyebrow">
            LET'S WORK TOGETHER
          </span>

          <h2>
            Let’s create
            <br />
            something
            <br />
            <em>people love.</em>
          </h2>

          <p>
            From research and strategy to user experience
            and visual design, I create thoughtful digital
            products that solve real problems.
          </p>

          <a href="/contact" className="cta-button">
            <FiCalendar />

            <span>Start a Project</span>

            <span className="cta-button-arrow">
              <FiArrowUpRight />
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default CTA;