import React from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import {
  FiArrowLeft,
  FiArrowUpRight,
} from "react-icons/fi";

import "./Casestudy.css";


/* =========================================================
   CASE STUDY DATA
========================================================= */

const caseStudies = {

  /* =======================================================
     AZZA
  ======================================================= */

  azza: {
    title: "AZZA",

    category: "FINTECH / PRODUCT DESIGN",

    year: "2026",

    role: "Product Designer",

    duration: "8 Weeks",

    overview:
      "AZZA is a financial product designed to make managing money feel simpler, clearer and more intuitive.",

    images: [
      "/Fintech AZZA.jpg.jpeg",
      "/Azza Fintech App.jpg.jpeg"
    ],
  },


  /* =======================================================
     LUMORA
  ======================================================= */

  lumora: {
    title: "LUMORA",

    category: "WELLNESS / UX & UI",

    year: "2026",

    role: "Product Designer",

    duration: "6 Weeks",

    overview:
      "Lumora is a wellness experience designed to make everyday self-care feel simple and engaging.",

    images: [
      "/Wellness App.jpg.jpeg",
      "/Lumora Wellness App.jpg.jpeg",
    ],
  },


  /* =======================================================
     SPLITA
  ======================================================= */

  splita: {
    title: "SPLITA",

    category: "FINTECH / UX & UI",

    year: "2026",

    role: "Product Designer",

    duration: "7 Weeks",

    overview:
      "Splita is a financial product designed to make shared expenses easier to manage.",

    images: [
      "/Spilta Fintech.jpg.jpeg",
    ],
  },


  /* =======================================================
     LUMINO
  ======================================================= */

  lumino: {
    title: "LUMINO",

    category: "HEALTH / DIGITAL PRODUCT",

    year: "2026",

    role: "Product Designer",

    duration: "5 Weeks",

    overview:
      "Lumino explores a thoughtful digital experience for everyday health management.",

    images: [
      "/Lumino- Wrist watch brand.jpg.jpeg",
    ],
  },


  /* =======================================================
     TCA TECH FAIR
  ======================================================= */

  "tca-tech-fair": {
    title: "PROMOTIONAL & SOCIAL MEDIA DESIGN",

    category: "PROMOTIONAL & SOCIAL MEDIA DESIGN",

    year: "2026",

    role: "Visual Designer",

    duration: "3 Weeks",

    overview:
      "Event promotional campaign designed to build awareness, drive registrations, and communicate the key benefits and highlights of the event through engaging social media graphics and carousel content.",

    images: [
      "/Flyer Design.jpg.jpeg",
      "/FILL YOUR DETAILS.jpg.jpeg",
      "/COVER.jpg.jpeg",
      "/YOU’RE READY.jpg.jpeg",
      "/PARTNERS FLYER.jpg.jpeg",
      "/PARTNERS FLYER.jpg.jpeg",
      "/N.M.A Travels 3.jpg.jpeg",
    ],
  },

};


/* =========================================================
   COMPONENT
========================================================= */

const CaseStudy = () => {

  const { slug } = useParams();

  const project = caseStudies[slug];


  /* =======================================================
     NOT FOUND
  ======================================================= */

  if (!project) {
    return (
      <main className="case-not-found">

        <h1>
          Project not found.
        </h1>

        <Link to="/">
          Back to work
        </Link>

      </main>
    );
  }


  return (
    <main className="case-study">


      {/* ===================================================
          HEADER
      =================================================== */}

      <header className="case-header">

        <Link
          to="/#work"
          className="case-back"
        >

          <FiArrowLeft />

          <span>
            Back to projects
          </span>

        </Link>


        <span className="case-header-label">
          CASE STUDY
        </span>

      </header>


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="case-hero">

        <div className="case-hero-meta">

          <span>
            {project.category}
          </span>

          <span>
            {project.year}
          </span>

        </div>


        <h1>
          {project.title}
        </h1>


        <p className="case-hero-description">
          {project.overview}
        </p>


        {/* PROJECT DETAILS */}

        <div className="case-hero-details">

          <div className="hero-detail">

            <span>
              ROLE
            </span>

            <strong>
              {project.role}
            </strong>

          </div>


          <div className="hero-detail">

            <span>
              DURATION
            </span>

            <strong>
              {project.duration}
            </strong>

          </div>


          <div className="hero-detail">

            <span>
              CATEGORY
            </span>

            <strong>
              {project.category}
            </strong>

          </div>

        </div>

      </section>


      {/* ===================================================
          FEATURE IMAGE
      =================================================== */}

      <section className="case-feature-image">

        <img
          src={project.images[0]}
          alt={project.title}
        />

      </section>


      {/* ===================================================
          PROJECT VISUALS
      =================================================== */}

      {project.images.length > 1 && (

        <section className="case-visuals">

          <div className="case-visuals-header">

            <span className="case-section-title">
              PROJECT VISUALS
            </span>

            <span className="case-visuals-count">
              {String(project.images.length).padStart(2, "0")} VISUALS
            </span>

          </div>


          {/* =================================================
              CAROUSEL
          ================================================= */}

          <div className="case-carousel">

            <div className="case-carousel-track">

              {project.images.map(
                (image, index) => (

                  <div
                    className="case-carousel-card"
                    key={`${image}-${index}`}
                  >

                    <img
                      src={image}
                      alt={`${project.title} visual ${index + 1}`}
                    />

                  </div>

                )
              )}

            </div>

          </div>

        </section>

      )}


      {/* ===================================================
          BOTTOM CTA
      =================================================== */}

      <section className="case-bottom">

        <span>
          HAVE A PROJECT IN MIND?
        </span>


        <Link
          to="/#contact"
          className="case-bottom-button"
        >

          <span>
            Start a project
          </span>


          <span className="case-bottom-icon">
            <FiArrowUpRight />
          </span>

        </Link>

      </section>


    </main>
  );
};


export default CaseStudy;