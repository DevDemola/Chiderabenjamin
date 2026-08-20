import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./Projects.css";

// import projectOne from "../../assets/project-one.jpg";
// import projectTwo from "../../assets/project-two.jpg";
// import projectThree from "../../assets/project-three.jpg";

const projects = [
  {
    number: "01",
    title: "Finora",
    category: "FINTECH / PRODUCT DESIGN",
    description:
      "A simple financial experience designed to make managing money feel clearer and more intuitive.",
    image: "/Azza Fintech App.jpg.jpeg",
  },
  {
    number: "02",
    title: "Nexa",
    category: "SAAS / UX & UI",
    description:
      "A modern platform that helps teams organize their workflow and collaborate more effectively.",
    image: "/Lumora Wellness App.jpg.jpeg",
  },
  {
    number: "03",
    title: "Mori",
    category: "HEALTH / DIGITAL PRODUCT",
    description:
      "A thoughtful digital experience focused on making everyday health management easier.",
    image: "/Lumino- Wrist watch brand.jpg.jpeg",
  },
];

const Projects = () => {
  return (
    <section className="work-section" id="work">
      <div className="work-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="work-header">

          <div className="work-label">
            <span className="work-number">04</span>
            <span>SELECTED WORK</span>
          </div>

          <div className="work-line"></div>

          <span className="work-small-text">
            A FEW THINGS I'VE DESIGNED
          </span>

        </div>


        {/* =================================================
            INTRO
        ================================================= */}

        <div className="work-intro">

          <h2>
            Selected
            <span> work.</span>
          </h2>

          <p>
            A collection of products, experiences and
            interfaces I've had the opportunity to
            research, design and bring to life.
          </p>

        </div>


        {/* =================================================
            PROJECTS
        ================================================= */}

        <div className="work-list">

          {projects.map((project, index) => (

            <article
              className="project"
              key={project.number}
            >

              {/* IMAGE */}

              <div className="project-image-wrapper">

                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="project-overlay"></div>

                  <div className="project-image-top">
                    <span>{project.number}</span>

                    <span>
                      {project.category}
                    </span>
                  </div>

                  <div className="project-image-button">
                    <FiArrowUpRight />
                  </div>

                </div>

              </div>


              {/* INFO */}

              <div className="project-info">

                <div className="project-info-top">

                  <span className="project-index">
                    {project.number} /
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                </div>


                <div className="project-info-bottom">

                  <p>
                    {project.description}
                  </p>

                  <div className="project-tags">

                    <span>
                      {project.category.split(" / ")[0]}
                    </span>

                    <span>
                      Product Design
                    </span>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <div className="work-footer">

          <span>
            MORE PROJECTS COMING SOON
          </span>

          <a
            href="#contact"
            className="work-cta"
          >
            <span>Start a project</span>

            <span className="work-cta-icon">
              <FiArrowUpRight />
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Projects;