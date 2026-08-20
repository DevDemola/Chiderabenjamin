import React from "react";
import {
  FiArrowUpRight,
  FiArrowDown,
  FiPlus,
  FiMousePointer,
} from "react-icons/fi";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* MAIN HERO */}
        <div className="hero-main">

          {/* LEFT / TYPOGRAPHY */}
          <div className="hero-copy">

            <div className="hero-eyebrow">
              <span>01</span>
              <span>Product Designer</span>
            </div>

            <h1>
              Designing
              <br />
              <span>products</span>
              <br />
              people love.
            </h1>

            <div className="hero-copy-bottom">

              <p>
                I create thoughtful digital experiences
                that turn complex problems into simple,
                useful products.
              </p>

              <a href="#work" className="hero-cta">
                <span>Explore my work</span>

                <span className="hero-cta-icon">
                  <FiArrowUpRight />
                </span>
              </a>

            </div>

          </div>


          {/* IMAGE AREA */}
          <div className="hero-visual">

            {/* IMAGE */}
            <div className="hero-image-wrapper">

              <img
                src="/me1.png"
                alt="Product Designer"
                className="hero-image"
              />

              <div className="image-overlay"></div>

            </div>


            {/* FLOATING TAG — UX */}
            <div className="floating-tag tag-one">
              <span className="tag-number">01</span>
              <span>UX / UI</span>
            </div>


            {/* FLOATING TAG — RESEARCH */}
            <div className="floating-tag tag-two">
              <span className="tag-icon">
                <FiMousePointer />
              </span>

              <span>Research</span>
            </div>


            {/* FLOATING TAG — PRODUCT */}
            <div className="floating-tag tag-three">
              <span>Product</span>

              <span className="tag-arrow">
                <FiArrowUpRight />
              </span>
            </div>


            {/* DECORATIVE PLUS */}
            <div className="hero-plus">
              <FiPlus />
            </div>


            {/* CIRCLE */}
            <div className="hero-circle">

              <svg
                viewBox="0 0 120 120"
                className="circle-text"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 60,60 m -43,0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0"
                  />
                </defs>

                <text>
                  <textPath href="#circlePath">
                    PRODUCT DESIGN • UX • PRODUCT DESIGN • UX •
                  </textPath>
                </text>
              </svg>

              <div className="circle-arrow">
                <FiArrowDown />
              </div>

            </div>

          </div>

        </div>


        {/* BOTTOM */}
        <div className="hero-footer">

         

         

        </div>

      </div>
    </section>
  );
};

export default Hero;