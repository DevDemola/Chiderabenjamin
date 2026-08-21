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

    image: "/Fintech AZZA.jpg.jpeg",

    overview:
      "AZZA is a financial product designed to make managing money feel simpler, clearer and more intuitive.",

    introduction:
      "AZZA explores a simpler approach to personal finance, focusing on how users understand, manage and interact with their money.",

    challenge:
      "Managing personal finances can often feel complicated. Users need to understand where their money is going without being overwhelmed by unnecessary information.",

    solution:
      "I designed a cleaner financial experience focused on clarity, simple navigation and meaningful information hierarchy.",

    processText:
      "The process began with understanding the core problem and mapping the experience around the user's most important financial tasks. From early flows and wireframes, I refined the interface into a simple and focused product experience.",

    process: [
      "Research",
      "User Flows",
      "Wireframing",
      "UI Design",
      "Prototyping",
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

    image: "/Wellness App.jpg.jpeg",

    overview:
      "Lumora is a wellness experience designed to make everyday self-care feel simple and engaging.",

    introduction:
      "Lumora was designed around the idea that wellness should feel approachable rather than overwhelming. The experience focuses on creating simple interactions that encourage users to stay engaged with their routines.",

    challenge:
      "Users needed a more approachable way to build healthy routines without feeling overwhelmed.",

    solution:
      "The experience was designed around simplicity, clear feedback and an easy-to-understand interface.",

    processText:
      "I explored the experience from the user's perspective, focusing on how information could be presented clearly while keeping the interface calm and approachable.",

    process: [
      "Research",
      "User Flows",
      "Wireframing",
      "UI Design",
      "Prototype",
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

    image: "/Spilta Fintech.jpg.jpeg",

    overview:
      "Splita is a financial product designed to make shared expenses easier to manage.",

    introduction:
      "Splita explores how shared financial responsibilities can be made easier to understand through a clear and straightforward digital experience.",

    challenge:
      "Splitting expenses between friends and groups can quickly become confusing.",

    solution:
      "I focused on creating a straightforward experience where users can easily understand, track and manage shared payments.",

    processText:
      "I mapped the main interactions around creating groups, tracking contributions and understanding shared expenses. The final interface was designed around clear information hierarchy and simple navigation.",

    process: [
      "Research",
      "User Flows",
      "Wireframes",
      "UI Design",
      "Testing",
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

    image: "/Lumino- Wrist watch brand.jpg.jpeg",

    overview:
      "Lumino explores a thoughtful digital experience for everyday health management.",

    introduction:
      "Lumino explores how everyday health information can be presented in a way that feels clear, useful and approachable.",

    challenge:
      "Health information can often feel difficult to understand and act upon.",

    solution:
      "The product focuses on presenting useful information in a simple and approachable way.",

    processText:
      "The design process focused on information architecture, simplifying complex information and creating an experience that feels easy to understand at a glance.",

    process: [
      "Research",
      "Information Architecture",
      "Wireframes",
      "UI Design",
      "Prototype",
    ],
  },


  /* =======================================================
     TCA TECH FAIR
  ======================================================= */

  "tca-tech-fair": {
    title: "TCA TECH FAIR",

    category: "EVENT / VISUAL DESIGN",

    year: "2026",

    role: "Visual Designer",

    duration: "3 Weeks",

    image: "/Flyer Design.jpg.jpeg",

    images: [
      "/Flyer Design.jpg.jpeg",
      "/FILL YOUR DETAILS.jpg.jpeg",
      "/COVER.jpg.jpeg",
      "/YOU’RE READY.jpg.jpeg",
      "/PARTNERS FLYER.jpg.jpeg",
    ],

    overview:
      "A visual design project created to communicate the energy and identity of a technology-focused event.",

    introduction:
      "The TCA Tech Fair project focused on creating a consistent visual language for a technology-focused event while making each communication piece clear, bold and engaging.",

    challenge:
      "The visual identity needed to capture attention while communicating the event clearly.",

    solution:
      "I developed a bold visual direction focused on hierarchy, typography and strong visual communication.",

    processText:
      "The project moved from the initial visual concept into typography, layout exploration and final artwork. Each asset was designed to feel connected while still communicating its individual purpose.",

    process: [
      "Concept",
      "Art Direction",
      "Typography",
      "Visual Design",
      "Final Artwork",
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
          HERO IMAGE
      =================================================== */}

      <section className="case-feature-image">

        <img
          src={project.image}
          alt={project.title}
        />

      </section>


      {/* ===================================================
          INTRODUCTION
      =================================================== */}

      <section className="case-text-section">

        <div className="case-section-number">
          01
        </div>


        <div className="case-text-content">

          <span className="case-section-title">
            INTRODUCTION
          </span>

          <h2>
            Understanding the project.
          </h2>

          <p>
            {project.introduction}
          </p>

        </div>

      </section>


      {/* ===================================================
          CHALLENGE
      =================================================== */}

      <section className="case-text-section">

        <div className="case-section-number">
          02
        </div>


        <div className="case-text-content">

          <span className="case-section-title">
            THE CHALLENGE
          </span>

          <h2>
            Understanding the problem.
          </h2>

          <p>
            {project.challenge}
          </p>

        </div>

      </section>


      {/* ===================================================
          SOLUTION
      =================================================== */}

      <section className="case-text-section">

        <div className="case-section-number">
          03
        </div>


        <div className="case-text-content">

          <span className="case-section-title">
            THE SOLUTION
          </span>

          <h2>
            Designing a better experience.
          </h2>

          <p>
            {project.solution}
          </p>

        </div>

      </section>


      {/* ===================================================
          DESIGN PROCESS
      =================================================== */}

      <section className="case-process-section">

        <div className="case-section-number">
          04
        </div>


        <div className="case-process-content">

          <span className="case-section-title">
            MY DESIGN PROCESS
          </span>

          <h2>
            From idea to final experience.
          </h2>

          <p>
            {project.processText}
          </p>


          <div className="process-list">

            {project.process.map(
              (step, index) => (

                <div
                  className="process-row"
                  key={step}
                >

                  <span>
                    0{index + 1}
                  </span>

                  <strong>
                    {step}
                  </strong>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          PROJECT VISUALS
      =================================================== */}

      {project.images && project.images.length > 1 && (

        <section className="case-visuals">

          <div className="case-visuals-header">

            <span className="case-section-title">
              PROJECT VISUALS
            </span>

            <span className="case-visuals-count">
              05 / {String(project.images.length - 1).padStart(2, "0")}
            </span>

          </div>


          <div className="case-visuals-list">

            {project.images
              .slice(1)
              .map((image, index) => (

                <div
                  className={`case-visual visual-${index + 1}`}
                  key={image}
                >

                  <img
                    src={image}
                    alt={`${project.title} visual ${index + 2}`}
                  />

                </div>

              ))}

          </div>

        </section>

      )}


      {/* ===================================================
          BACK TO PROJECTS
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