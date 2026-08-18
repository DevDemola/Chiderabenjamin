import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./Projects.css";

const behanceUrl = "https://www.behance.net/";

const projects = [
  {
    id: "01",
    title: "Project One",
    category: "Product Design",
  },
  {
    id: "02",
    title: "Project Two",
    category: "UI/UX Research",
  },
  {
    id: "03",
    title: "Project Three",
    category: "Visual Design",
  },
  {
    id: "04",
    title: "Project Four",
    category: "Graphics Design",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="work">
      <div className="projects-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="projects-header">

          <div className="projects-heading">

            <span className="projects-eyebrow">
              SELECTED WORK
            </span>

            <h2>
              A few things
              <br />
              I’ve <span>designed.</span>
            </h2>

          </div>

          <p className="projects-intro">
            A selection of work across product design,
            user experience, research and visual design.
          </p>

        </div>


        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <div className="projects-list">

          {projects.map((project, index) => (

            <a
              href={behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card ${
                index % 2 !== 0
                  ? "project-card-reverse"
                  : ""
              }`}
              key={project.id}
            >

              {/* MEDIA */}

              <div className="project-media">

                <div className="project-placeholder">

                  <span>
                    {project.id}
                  </span>

                </div>

                <div className="project-overlay"></div>

                <div className="project-open">
                  <FiArrowUpRight />
                </div>

              </div>


              {/* INFO */}

              <div className="project-info">

                <div className="project-number">
                  {project.id}
                </div>

                <div className="project-details">

                  <h3>
                    {project.title}
                  </h3>

                  <span>
                    {project.category}
                  </span>

                </div>

                <FiArrowUpRight className="project-mobile-arrow" />

              </div>

            </a>

          ))}

        </div>


        {/* =====================================================
            VIEW ALL
        ===================================================== */}

        <div className="projects-footer">

          <a
            href={behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="projects-view-all"
          >
            <span>
              View all projects on Behance
            </span>

            <span className="projects-view-icon">
              <FiArrowUpRight />
            </span>

          </a>

        </div>

      </div>
    </section>
  );
};

export default Projects;