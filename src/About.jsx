import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* =========================================
            TOP LABEL
        ========================================= */}

        <div className="about-top">

          <span className="about-eyebrow">
            01 — ABOUT
          </span>

          <span className="about-top-line" />

          <span className="about-top-note">
            PRODUCT DESIGNER / RESEARCHER
          </span>

        </div>


        {/* =========================================
            MAIN STATEMENT
        ========================================= */}

        <div className="about-intro">

          <h2 className="about-heading">
            I design digital
            <br />
            experiences that
            <span> make sense.</span>
          </h2>

          <div className="about-intro-side">
            <p>
              Chidera Benjamin is a product designer,
              UI/UX researcher and graphics designer
              focused on creating thoughtful digital
              experiences that are clear, useful and
              visually engaging.
            </p>

            <a
              href="/work"
              className="about-link"
            >
              <span>Explore my work</span>

              <span className="about-link-icon">
                <FiArrowUpRight />
              </span>
            </a>
          </div>

        </div>


        {/* =========================================
            IMAGE + DETAILS
        ========================================= */}

        <div className="about-main">

          {/* IMAGE */}

          <div className="about-image-side">

            <div className="about-image-frame">

              <img
                src="/me.png"
                alt="Chidera Benjamin"
                className="about-image"
              />

              <span className="about-image-number">
                01
              </span>

              <span className="about-image-tag">
                CHIDERA / 2026
              </span>

            </div>

          </div>


          {/* DETAILS */}

          <div className="about-details">

            <div className="about-detail-intro">
              <span>MY APPROACH</span>

              <p>
                I enjoy digging into problems,
                understanding people and turning
                research into simple experiences
                that feel intuitive from the first
                interaction.
              </p>
            </div>


            {/* SPECIALTIES */}

            <div className="about-specialties">

              <div className="about-specialty">

                <span>01</span>

                <div>
                  <h3>Product Design</h3>

                  <p>
                    From ideas to polished digital
                    products.
                  </p>
                </div>

              </div>


              <div className="about-specialty">

                <span>02</span>

                <div>
                  <h3>UI/UX Research</h3>

                  <p>
                    Understanding users before
                    designing solutions.
                  </p>
                </div>

              </div>


              <div className="about-specialty">

                <span>03</span>

                <div>
                  <h3>Graphics Design</h3>

                  <p>
                    Visual systems that communicate
                    with clarity.
                  </p>
                </div>

              </div>

            </div>


            {/* SIGNATURE */}

            <div className="about-bottom">

              <span className="about-status">
                <span className="about-status-dot" />
                AVAILABLE FOR SELECT PROJECTS
              </span>

              <span className="about-signature">
                CB
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;