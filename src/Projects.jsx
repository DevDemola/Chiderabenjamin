import React from "react";
import {
  FiArrowUpRight,
} from "react-icons/fi";
import {
  Link,
} from "react-router-dom";

import "./Projects.css";


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [

  {
    number: "01",

    title: "AZZA",

    slug: "azza",

    category: [
      "FINTECH",
      "PRODUCT DESIGN",
    ],

    description:
      "A simple financial experience designed to make managing money feel clearer and more intuitive.",

    image: "/Fintech AZZA.jpg.jpeg",
  },


  {
    number: "02",

    title: "LUMORA",

    slug: "lumora",

    category: [
      "WELLNESS",
      "UX / UI",
    ],

    description:
      "A modern wellness experience designed to make everyday self-care feel simpler and more engaging.",

    image: "/Wellness App.jpg.jpeg",
  },


  {
    number: "03",

    title: "SPLITA",

    slug: "splita",

    category: [
      "FINTECH",
      "UX / UI",
    ],

    description:
      "A modern platform designed to make shared expenses and money management easier and more intuitive.",

    image: "/Spilta Fintech.jpg.jpeg",
  },


  {
    number: "04",

    title: "LUMINO",

    slug: "lumino",

    category: [
      "HEALTH",
      "DIGITAL PRODUCT",
    ],

    description:
      "A thoughtful digital experience focused on making everyday health management easier.",

    image: "/Lumino (1).jpg.jpeg",
  },


  {
    number: "05",

    title: "PROMOTIONAL & SOCIAL MEDIA DESIGN",

    slug: "tca-tech-fair",

    category: [
      "EVENT",
      "VISUAL DESIGN",
    ],

    description:
      "A visual identity and promotional design created to communicate the energy of a technology-focused event.",

    image: "/Flyer Design.jpg.jpeg",
  },

];


/* =========================================================
   PROJECTS
========================================================= */

const Projects = () => {

  return (

    <section
      className="work-section"
      id="work"
    >

      <div className="work-container">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="work-header">

          <div className="work-label">

            <span className="work-number">
              04
            </span>

            <span>
              SELECTED WORK
            </span>

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

            <span>
              {" "}work.
            </span>

          </h2>


          <p>
            A collection of products, experiences and
            interfaces I've had the opportunity to
            research, design and bring to life.
          </p>

        </div>


        {/* =================================================
            PROJECT LIST
        ================================================= */}

        <div className="work-list">

          {projects.map((project) => (

            <Link
              key={project.number}
              to={`/work/${project.slug}`}
              className="project"
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

                    <span>
                      {project.number}
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

                    {project.number}

                    {" "}/

                  </span>


                  <h3>
                    {project.title}
                  </h3>

                </div>


                <div className="project-info-bottom">


                  <p>
                    {project.description}
                  </p>


                  {/* CATEGORIES */}

                  <div className="project-tags">

                    {project.category.map(
                      (category) => (

                        <span
                          className="project-tag"
                          key={category}
                        >
                          {category}
                        </span>

                      )
                    )}

                  </div>


                </div>

              </div>

            </Link>

          ))}

        </div>


        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="work-footer">

          <span>
            MORE PROJECTS COMING SOON
          </span>


          <a
            href="#contact"
            className="work-cta"
          >

            <span>
              Start a project
            </span>


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