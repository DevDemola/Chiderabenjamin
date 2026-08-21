import React from "react";
import { FiArrowUpRight, FiPlus } from "react-icons/fi";
import "./About.css";

// import designerImage from "../../assets/designer.jpg";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">


        {/* MAIN CONTENT */}
        <div className="about-wrapper">

          {/* =========================
              IMAGE
          ========================== */}

          <div className="about-image-side">

            <div className="about-image-card">

              <img
                src="/me1.png"
                alt="Product Designer"
              />

              <div className="about-image-overlay"></div>

              {/* TOP LABEL */}
              <div className="about-image-top">
                <span>PRODUCT DESIGNER</span>
                <span>2026</span>
              </div>

              {/* BOTTOM LABEL */}
              <div className="about-image-bottom">

                <span>
                  LAGOS, NIGERIA
                </span>

                <span className="about-image-arrow">
                  <FiArrowUpRight />
                </span>

              </div>

            </div>


            {/* FLOATING PLUS */}
            <div className="about-plus">
              <FiPlus />
            </div>


            {/* FLOATING TAG */}
            <div className="about-tag">
              <span></span>
              OPEN TO PROJECTS
            </div>

          </div>


          {/* =========================
              TEXT
          ========================== */}

          <div className="about-text-side">

            <div className="about-small-label">
              A LITTLE ABOUT ME
            </div>

            <h2>
              I design
              <span> digital products{" "}</span>
              that people enjoy using.
            </h2>

            <p className="about-intro">
              I'm a product designer passionate about
              turning ideas and complex problems into
              simple, intuitive digital experiences.
            </p>

            <p>
              I combine research, strategy and visual
              design to create products that are useful,
              thoughtful and easy to understand.
            </p>

            <p>
              From early ideas and user research to
              wireframes, interfaces and prototypes,
              I enjoy being involved throughout the
              product journey.
            </p>


            {/* CTA */}

            <a
              href="#contact"
              className="about-button"
            >
              <span>Let's work together</span>

              <span className="about-button-icon">
                <FiArrowUpRight />
              </span>
            </a>


            {/* DETAILS */}

            <div className="about-details">

              <div>
                <span>FOCUS</span>
                <strong>Product Design</strong>
              </div>

              <div>
                <span>EXPERTISE</span>
                <strong>UX · UI · Research</strong>
              </div>

              <div>
                <span>BASED IN</span>
                <strong>Lagos, Nigeria</strong>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;