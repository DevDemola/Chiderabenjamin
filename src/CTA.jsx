import React from "react";
import {
  FiArrowUpRight,
  FiPlus,
} from "react-icons/fi";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-card">

        {/* TOP LABEL */}
        <div className="cta-top">
          <span className="cta-label">
            LET'S WORK TOGETHER
          </span>

          <span className="cta-index">
            04
          </span>
        </div>


        {/* MAIN CONTENT */}
        <div className="cta-content">

          <div className="cta-heading-wrap">

            <span className="cta-eyebrow">
              HAVE AN IDEA?
            </span>

            <h2>
              Have an idea?
              <br />
              <span>Let's design it.</span>
            </h2>

            <div className="cta-orange-mark">
              <FiPlus />
            </div>

          </div>


          {/* DESCRIPTION */}

          <p className="cta-description">
            Whether you're building something new,
            improving an existing product, or simply
            exploring an idea — let's create something
            meaningful together.
          </p>


          {/* BUTTON */}

          <a
            href="mailto:hello@example.com"
            className="cta-button"
          >
            <span>
              Start a Project
            </span>

            <span className="cta-arrow">
              <FiArrowUpRight />
            </span>
          </a>

        </div>


        {/* FOOTER */}

        <div className="cta-footer">

          <span>
            PRODUCT DESIGN
          </span>

          <span>
            UX / UI
          </span>

          <span>
            USER RESEARCH
          </span>

          <span>
            DIGITAL EXPERIENCES
          </span>

        </div>

      </div>
    </section>
  );
};

export default CTA;