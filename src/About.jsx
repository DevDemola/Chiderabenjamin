import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* =================================================
            IMAGE
        ================================================= */}

        <div className="about-image-wrapper">
          <img
            src="/me.png"
            alt="Chidera"
            className="about-image"
          />
        </div>


        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="about-content">

          <h2 className="about-heading">
            About <span>Chidera.</span>
          </h2>


          <div className="about-copy">

            <p>
              Hi! I'm Chidera, a multidisciplinary designer who
              enjoys turning ideas into <strong>thoughtful,
              meaningful experiences.</strong>
            </p>


            <p>
              My work sits at the intersection of
              <strong> product design, visual design,</strong> and
              <strong> UX research.</strong> I love understanding
              people, uncovering the real problems behind a brief,
              and translating those insights into designs that are
              both useful and visually engaging.
            </p>


            <p>
              Whether I'm designing a digital product, creating a
              visual identity, or researching how people interact
              with an experience, my goal is always the same:
              <strong> make things clearer, simpler, and more
              intentional.</strong>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;