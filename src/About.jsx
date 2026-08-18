import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* =========================================
            IMAGE
        ========================================= */}

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
          </div>

          <div className="about-image-caption">
            <span>CHIDERA BENJAMIN</span>
            <span>PRODUCT DESIGNER</span>
          </div>

        </div>


        {/* =========================================
            CONTENT
        ========================================= */}

        <div className="about-content">

          <span className="about-eyebrow">
            ABOUT ME
          </span>

          <h2>
            I’m a designer
            <br />
            who likes to
            <br />
            <span>make things make sense.</span>
          </h2>

          <div className="about-text">

            <p>
              I'm Chidera Benjamin, a product designer,
              UI/UX researcher and graphics designer
              passionate about creating digital experiences
              that are thoughtful, useful and visually clear.
            </p>

            <p>
              I enjoy digging into problems, understanding
              people and turning research into simple,
              engaging experiences that feel as good as
              they work.
            </p>

          </div>


          {/* =========================================
              SPECIALTIES
          ========================================= */}

          <div className="about-specialties">

            <div className="about-specialty">
              <span>01</span>
              <p>Product Design</p>
            </div>

            <div className="about-specialty">
              <span>02</span>
              <p>UI/UX Research</p>
            </div>

            <div className="about-specialty">
              <span>03</span>
              <p>Graphics Design</p>
            </div>

          </div>


          {/* =========================================
              LINK
          ========================================= */}

          <a
            href="/work"
            className="about-link"
          >
            <span>See my work</span>

            <span className="about-link-icon">
              <FiArrowUpRight />
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default About;