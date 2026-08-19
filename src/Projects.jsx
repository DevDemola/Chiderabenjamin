import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./Projects.css";

const behanceUrl = "https://www.behance.net/";

const projects = [
  {
    id: "01",
    title: "AZZA FINTECH APP",
    category: "Product Design",
    description:
      "A digital product designed around simplicity, clarity and better user experiences.",
    image: "/Azza Fintech App.jpg.jpeg",
  },
  {
    id: "02",
    title: "LUMORA WELLNESS APP",
    category: "UX Research",
    description:
      "Research-led design work focused on understanding users and solving meaningful problems.",
    image: "/Lumora Wellness App.jpg.jpeg",
  },
  {
    id: "03",
    title: "LUMINO WRISTWATCH BRAND",
    category: "Visual Design",
    description:
      "A visual exploration combining strong typography, composition and a distinctive visual language.",
    image: "/Lumino- Wrist watch brand.jpg.jpeg",
  },
  // {
  //   id: "04",
  //   title: "PROJECT FOUR",
  //   category: "Graphic Design",
  //   description:
  //     "A visual identity created to communicate personality, clarity and creative direction.",
  //   image: "/project-4.jpg",
  // },
];

const Projects = () => {
  return (
    <section className="projects-section" id="work">
      <div className="projects-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="projects-header">

          <div className="projects-header-top">
            <span className="projects-index">
              04
            </span>

            <span className="projects-eyebrow">
              Selected work
            </span>
          </div>


          <div className="projects-heading-row">

            <h2 className="projects-heading">
              Work that
              <br />
              <span>speaks for itself.</span>
            </h2>

            <p className="projects-intro">
              A selection of projects exploring product design,
              user experience, research and visual communication.
            </p>

          </div>

        </div>


        {/* =================================================
            PROJECTS
        ================================================= */}

        <div className="projects-list">

          {projects.map((project, index) => (
            <a
              href={behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project"
              key={project.id}
            >

              {/* IMAGE */}

              <div className="project-image-wrapper">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-image-overlay"></div>

                <div className="project-view">
                  <FiArrowUpRight />
                </div>

              </div>


              {/* INFO */}

              <div className="project-info">

                <div className="project-info-left">

                  <span className="project-number">
                    {project.id}
                  </span>

                  <div className="project-title-wrapper">

                    <h3>
                      {project.title}
                    </h3>

                    <span className="project-category">
                      {project.category}
                    </span>

                  </div>

                </div>


                <div className="project-info-right">

                  <p>
                    {project.description}
                  </p>

                  <FiArrowUpRight className="project-arrow" />

                </div>

              </div>

            </a>
          ))}

        </div>


        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="projects-footer">

          <span className="projects-footer-text">
            More work & explorations
          </span>

          <a
            href={behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="projects-view-all"
          >
            View Behance
            <FiArrowUpRight />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Projects;