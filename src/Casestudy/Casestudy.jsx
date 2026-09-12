
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowUpRight,
} from "react-icons/fi";

import "./Casestudy.css";

/* =========================================================
   CASE STUDY DATA
========================================================= */

const caseStudies = {
  azza: {
    title: "AZZA",
    category: "FINTECH / MOBILE",
    year: "2026",

    role: "Product Designer",

    deliverables:
      "UX/UI Design · Authentication · Payments · Currency Management · Analytics · Card Management · Security",

    overview:
      "Azza is a cross-border payment app that lets users send, receive, and manage money seamlessly across countries.",

    introduction: {
      title: "Introduction",

      text:
        "The idea for AZZA came from a simple frustration: managing money across different currencies shouldn't feel complicated. Existing financial experiences often made it difficult to understand exchange rates, balances, and transactions at a glance. I took on this project as a solo designer to explore what a simpler, more transparent financial experience could look like — one that helps people feel more confident about their money.",
    },

    challenge: {
      title: "Challenge",

      text:
        "Managing money across currencies can quickly become overwhelming, especially when information is scattered or difficult to understand. The challenge was to design a cross-border financial experience that reduces friction, simplifies currency management, and gives users a clearer sense of control over their finances.",
    },

    heroImage: "/Fintech AZZA.jpg.jpeg",

    images: [
      "/Home Screen.jpg (2).jpeg",
      "/Azza Fintech App.jpg.jpeg",
      "/Send money.jpg.jpeg",
      "/Virtual Cards.jpg.jpeg",
      "/Transaction.jpg.jpeg",
      "/user persona.jpg (2).jpeg",
      "/Style Guide.jpg (2).jpeg",
    ],
  },

  /* =======================================================
     LUMORA
  ======================================================= */

  lumora: {
    title: "LUMORA",
    category: "MENTAL WELLNESS / MOBILE",
    year: "2026",

    role: "Product Designer",

    deliverables:
      "UX/UI Design · Mood Check-in · Guided Reflection · AI Companion · Wellness Activities · Design System · Settings",

    overview:
      "Lumora is a mental wellness app that helps young adults check in with their emotions, reflect, and find simple ways to care for their wellbeing.",

    introduction: {
      title: "Introduction",

      text:
        "Lumora is a mental wellness app that helps young adults pause, check in with themselves, and navigate everyday emotions. It brings reflection, mindful activities, and AI-guided support into one calm, approachable experience.",
    },

    problem: {
      title: "Problem",

      text:
        "Emotional wellbeing is often treated as something we address only when things feel overwhelming. Lumora explores a lighter, more approachable way to make emotional awareness part of everyday life.",
    },

    designProcess: {
      title: "Design Process",

      text:
        "I started by exploring everyday emotional needs and existing wellness behaviours, then translated the insights into a simple product structure. I moved from early concepts and wireframes into the final interface, refining the experience around clarity, calm, and ease of use.",
    },

    heroImage: "/Lumora Wellness App.jpg.jpeg",

    images: [
      "/LUMORA Home Screen.jpg.jpeg",
      "/Lumora Ai.jpg.jpeg",
      "/Lumora mood check in.jpg.jpeg",
      "/Lumora Moment to reflect.jpg.jpeg",
      "/Lumora Setting.jpg.jpeg",
      "/Wellness App.jpg.jpeg",
      "/Moodboard.jpg.jpeg",
    ],
  },

  /* =======================================================
     SPLITA
  ======================================================= */

  splita: {
    title: "SPLITA",
    category: "FINTECH / WEB APP",
    year: "2025",

    role: "Product Designer",

    deliverables:
      "UX/UI Design · Group Savings · Payments · Admin Dashboard",

    overview:
      "Digitalizing the traditional Ajo savings experience through a simple and transparent group savings platform.",

    designProcess: {
      title: "Design Process",

      text:
        "I approached the project by moving from understanding the problem to defining the experience, designing the interface, and refining the key flows.",

      steps:
        "Research & Discovery → Define → Information Architecture → User Flows → Wireframes → UI Design → Prototyping → Iteration",
    },

    heroImage: "/Spilta Fintech.jpg.jpeg",

    images: [
      "/Home Screen.jpg.jpeg",
      "/Spilta groups.jpg.jpeg",
      "/Spilta creating groups.jpg.jpeg",
      "/Spilta join group.jpg.jpeg",
      "/Spilta Admin Flow.jpg.jpeg",
      "/user persona.jpg.jpeg",
      "/Style Guide.jpg.jpeg",
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

    overview:
      "Lumino explores a thoughtful digital experience for everyday health management.",

    heroImage: "/Lumino- Wrist watch brand.jpg.jpeg",

    images: [],
  },

  /* =======================================================
     TCA TECH FAIR
  ======================================================= */

  "tca-tech-fair": {
    title: "PROMOTIONAL & SOCIAL MEDIA DESIGN",
    category: "EVENT / VISUAL DESIGN",
    year: "2026",

    role: "Visual Designer",

    overview:
      "A visual identity and promotional design created to communicate the energy of a technology-focused event.",

    heroImage: "/COVER.jpg.jpeg",

    images: [
      "/Flyer Design.jpg.jpeg",
      "/FILL YOUR DETAILS.jpg.jpeg",
      "/YOU'RE READY.jpg.jpeg",
      "/PARTNERS FLYER.jpg.jpeg",
      "/OPEN THE PAGE.jpg.jpeg",
      "/FIND THE LINK.jpg.jpeg",
      "/N.M.A Travels 3.jpg.jpeg",
    ],
  },
}


/* =========================================================
   CASE STUDY COMPONENT
========================================================= */

const CaseStudy = () => {
  const { slug } = useParams();

  const project = caseStudies[slug];

  /* =======================================================
     ALWAYS START CASE STUDY FROM TOP
  ======================================================= */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [slug]);


  /* =======================================================
     PROJECT NOT FOUND
  ======================================================= */

  if (!project) {
    return (
      <main className="case-study case-not-found">

        <div className="case-not-found-inner">

          <span className="case-eyebrow">
            PROJECT NOT FOUND
          </span>

          <h1>
            This project doesn't exist.
          </h1>

          <p>
            The case study you're looking for could not be
            found.
          </p>

          <Link
            to="/#work"
            className="case-back-button"
          >
            <FiArrowLeft />
            <span>
              Back to projects
            </span>
          </Link>

        </div>

      </main>
    );
  }


  return (
    <main
      className={`case-study case-${slug}`}
    >

      {/* ===================================================
          TOP NAVIGATION
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


        <span className="case-header-title">
          CASE STUDY
        </span>


        <span className="case-header-number">
          {String(
            Object.keys(caseStudies).indexOf(slug) + 1
          ).padStart(2, "0")}
        </span>

      </header>


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="case-hero">

        <div className="case-hero-inner">

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


          <p className="case-hero-overview">
            {project.overview}
          </p>


          <div className="case-hero-details">

            <div className="case-detail">

              <span className="case-detail-label">
                ROLE
              </span>

              <span className="case-detail-value">
                {project.role}
              </span>

            </div>


            {project.deliverables && (
              <div className="case-detail">

                <span className="case-detail-label">
                  DELIVERABLES
                </span>

                <span className="case-detail-value">
                  {project.deliverables}
                </span>

              </div>
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          INTRODUCTION
      =================================================== */}

      {project.introduction && (
        <section className="case-content-section">

          <div className="case-content-grid">

            <div className="case-section-label">
              <span>01</span>

              <span>
                {project.introduction.title}
              </span>
            </div>


            <div className="case-content">

              <p>
                {project.introduction.text}
              </p>

            </div>

          </div>

        </section>
      )}


      {/* ===================================================
          HERO IMAGE
      =================================================== */}

      {project.heroImage && (
        <section className="case-feature-image">

          <div className="case-feature-inner">

            <img
              src={project.heroImage}
              alt={`${project.title} project`}
              className="project-image"
            />

          </div>

        </section>
      )}


      {/* ===================================================
          CHALLENGE
      =================================================== */}

      {project.challenge && (
        <section className="case-content-section case-soft-section">

          <div className="case-content-grid">

            <div className="case-section-label">
              <span>02</span>

              <span>
                {project.challenge.title}
              </span>
            </div>


            <div className="case-content">

              <p>
                {project.challenge.text}
              </p>

            </div>

          </div>

        </section>
      )}


      {/* ===================================================
          PROBLEM
      =================================================== */}

      {project.problem && (
        <section className="case-content-section case-soft-section">

          <div className="case-content-grid">

            <div className="case-section-label">
              <span>02</span>

              <span>
                {project.problem.title}
              </span>
            </div>


            <div className="case-content">

              <p>
                {project.problem.text}
              </p>

            </div>

          </div>

        </section>
      )}


      {/* ===================================================
          DESIGN PROCESS
      =================================================== */}

      {project.designProcess && (
        <section className="case-content-section">

          <div className="case-content-grid">

            <div className="case-section-label">
              <span>
                {project.problem ? "03" : "02"}
              </span>

              <span>
                {project.designProcess.title}
              </span>
            </div>


            <div className="case-content">

              <p>
                {project.designProcess.text}
              </p>


              {project.designProcess.steps && (
                <div className="process-flow">

                  {project.designProcess.steps
                    .split(" → ")
                    .map((step, index) => (
                      <React.Fragment key={step}>

                        <span className="process-step">
                          {step}
                        </span>

                        {index <
                          project.designProcess.steps.split(
                            " → "
                          ).length -
                            1 && (
                          <span className="process-arrow">
                            →
                          </span>
                        )}

                      </React.Fragment>
                    ))}

                </div>
              )}

            </div>

          </div>

        </section>
      )}


      {/* ===================================================
          PROJECT GALLERY (STARTING WITH HOME SCREEN)
      =================================================== */}

      {project.images?.length > 0 && (
        <section className="case-gallery">

          <div className="case-gallery-inner">

            {project.images
              .map((image, index) => (

                <div
                  className="gallery-item"
                  key={`${image}-${index}`}
                >

                  <div className="gallery-image-frame">

                    <img
                      src={image}
                      alt={`${project.title} screen ${
                        index + 1
                      }`}
                    />

                  </div>

                </div>

              ))}

          </div>

        </section>
      )}


      {/* ===================================================
          BOTTOM CTA
      =================================================== */}

      <section className="case-next">

        <div className="case-next-inner">

          <span className="case-next-label">
            NEXT PROJECT
          </span>


          <Link
            to="/#work"
            className="case-next-link"
          >

            <span>
              View all projects
            </span>

            <span className="case-next-icon">
              <FiArrowUpRight />
            </span>

          </Link>

        </div>

      </section>

    </main>
  );
};


export default CaseStudy;
