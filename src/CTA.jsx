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
            alt="Tosin"
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
  <em>worth seeing.</em>
</h2>

<p>
  From animation and compositing to video and design,
  I help turn creative ideas into polished visual stories.
</p>
          <a href="/contact" className="cta-button">
            <FiCalendar />

            <span>Book a Free Consultation</span>

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