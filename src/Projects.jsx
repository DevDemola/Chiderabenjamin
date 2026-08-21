import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./Projects.css";



const projects = [
  {
    number: "01",
    title: "AZZA",
    // category: "FINTECH / PRODUCT DESIGN",
    description:
      "A simple financial experience designed to make managing money feel clearer and more intuitive.",
    image: "/Fintech AZZA.jpg.jpeg",
  },
  {
    number: "02",
    title: "LUMORA",
    // category: "SAAS / UX & UI",
    description:
      "A modern platform that helps teams organize their workflow and collaborate more effectively.",
    image: "/Wellness App.jpg.jpeg",
  },
  {
    number: "03",
    title: "SPLITA",
    // category: "SAAS / UX & UI",
    description:
      "A modern platform that helps teams organize their workflow and collaborate more effectively.",
    image: "/Spilta Fintech.jpg.jpeg",
  },
  {
    number: "04",
    title: "LUMINO",
    category: "HEALTH / DIGITAL PRODUCT",
    description:
      "A thoughtful digital experience focused on making everyday health management easier.",
    image: "/Lumino- Wrist watch brand.jpg.jpeg",
  },
  {
    number: "05",
    title: "TCA TECH FAIR",
    // category: "HEALTH / DIGITAL PRODUCT",
    description:
      "A thoughtful digital experience focused on making everyday health management easier.",
    image: "/Flyer Design.jpg.jpeg",
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