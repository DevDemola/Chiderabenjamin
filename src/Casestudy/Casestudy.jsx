import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import "./Casestudy.css";
import { useEffect } from "react";

const caseStudies = {
  azza: {
    title: "AZZA",
    category: "FINTECH / MOBILE",
    year: "2026",
    role: "Product Designer",
    duration: "8 Weeks",
    deliverables:
      "UX/UI Design · Authentication · Payments · Currency Management · Analytics · Card Management · Security",
    overview:
      "AZZA is a fintech experience designed to simplify cross-currency money management. The product brings payments, currency management, cards, transactions, and financial visibility into one seamless mobile experience.",
    problem:
      "Managing money across different currencies can quickly become confusing. Users often have to move between different financial tools just to send money, track transactions, manage cards, or understand their balances.",
    designProcess:
      "The design process focused on reducing friction across the core financial flows while creating a clear visual hierarchy. Research and user needs informed the information architecture, followed by wireframes, interface exploration, and high-fidelity product design.",
    images: [
      "/Fintech AZZA.jpg.jpeg",
      "/Azza Fintech App.jpg.jpeg",
      // "/Home Screen.jpg.jpeg",
      "/Send money.jpg.jpeg",
      // "/Style Guide.jpg.jpeg",
      "/Transaction.jpg.jpeg",
      // "/user persona.jpg.jpeg",
      "/Virtual Cards.jpg.jpeg",
    ],
  },

  lumora: {
    title: "LUMORA",
    category: "MENTAL WELLNESS / MOBILE",
    year: "2026",
    role: "Product Designer",
    duration: "6 Weeks",
    problem:
      "Young adults often struggle to understand and manage their emotional wellbeing consistently. Many wellness products can feel overwhelming, clinical, or disconnected from everyday life.",
    overview:
      "LUMORA explores a calm and approachable digital experience for emotional wellbeing. The product allows users to check in with themselves, understand their emotional patterns, reflect on their moments, and receive AI-guided support.",
    designProcess:
      "The product was structured around three key stages: understanding user needs, defining the product structure, and translating those insights into wireframes and a cohesive final interface.",
    images: [
      "/Wellness App.jpg.jpeg",
      "/Lumora Wellness App.jpg.jpeg",
      "/Lumora Ai.jpg.jpeg",
      "/LUMORA Home Screen.jpg.jpeg",
      "/Lumora Moment to reflect.jpg.jpeg",
      "/Lumora mood check in.jpg.jpeg",
      "/Lumora Setting.jpg.jpeg",
    ],
  },

  splita: {
    title: "SPLITA",
    category: "FINTECH / WEB APP",
    year: "2025",
    role: "Product Designer",
    duration: "7 Weeks",
    deliverables:
      "UX/UI Design · Group Savings · Payments · Admin Dashboard",
    overview:
      "SPLITA digitizes the traditional Ajo savings experience, making group savings easier to organize, contribute to, monitor, and manage digitally.",
    designProcess:
      "The experience was designed around the complete journey from identifying the problem to defining the experience, designing the interface, and creating the key flows required for group savings.",
    images: [
      "/Spilta Fintech.jpg.jpeg",
      "/Spilta Admin Flow.jpg.jpeg",
      "/Spilta creating groups.jpg.jpeg",
      "/Spilta groups.jpg.jpeg",
      "/Spilta join group.jpg.jpeg",
      "/Style Guide.jpg.jpeg",
    ],
  },

  lumino: {
    title: "LUMINO",
    category: "HEALTH / DIGITAL PRODUCT",
    year: "2026",
    role: "Product Designer",
    duration: "5 Weeks",
    overview:
      "Lumino explores a thoughtful digital experience for everyday health management, bringing health information into a more approachable and connected product experience.",
    images: ["/Lumino- Wrist watch brand.jpg.jpeg"],
  },

  "tca-tech-fair": {
    title: "PROMOTIONAL & SOCIAL MEDIA DESIGN",
    category: "PROMOTIONAL / SOCIAL MEDIA",
    year: "2026",
    role: "Visual Designer",
    duration: "3 Weeks",
    overview:
      "A promotional campaign designed to create visual consistency across event announcements, partner communication, registration materials, and social media content.",
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

function ProjectImage({ src, alt }) {
  return (
    <img
      className="project-image"
      src={src}
      alt={alt}
      loading="lazy"
    />
  );
}

function CaseStudy() {
  const { slug } = useParams();
  const project = caseStudies[slug];
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [slug]);

  if (!project) {
    return (
      <main className="case-not-found">
        <div>
          <span>404</span>

          <h1>Project not found.</h1>

          <Link to="/work" className="back-link">
            <FiArrowLeft />
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  const additionalImages = project.images.slice(1);

  return (
    <main className={`case-study case-${slug}`}>
      {/* =========================
          HERO
      ========================= */}

      <section className="case-hero">
        <div className="case-header">
          <Link to="/work" className="case-back">
            <span className="back-icon">
              <FiArrowLeft />
            </span>

            <span>Back to projects</span>
          </Link>

          <span className="case-header-label">
            CASE STUDY
          </span>
        </div>

        <div className="case-hero-content">
          <div className="case-meta">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>

          <h1>{project.title}</h1>

          <div className="case-hero-bottom">
            <p className="case-intro">
              {project.overview}
            </p>

            <div className="case-quick-info">
              <div>
                <span>ROLE</span>
                <strong>{project.role}</strong>
              </div>

              <div>
                <span>DURATION</span>
                <strong>{project.duration}</strong>
              </div>

              <div>
                <span>TYPE</span>
                <strong>
                  {project.category.split(" / ")[1]}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FEATURE IMAGE
      ========================= */}

      <section className="case-feature-section">
        <div className="case-feature-image">
          <ProjectImage
            src={project.images[0]}
            alt={`${project.title} main project visual`}
          />
        </div>
      </section>

      {/* =========================
          OVERVIEW
      ========================= */}

      <section className="case-overview">
        <div className="section-number">
          <span>01</span>
          <span>OVERVIEW</span>
        </div>

        <div className="overview-content">
          <h2>
            Designing an experience
            <br />
            that feels <em>intentional.</em>
          </h2>

          <div className="overview-text">
            <p>{project.overview}</p>

            {project.deliverables && (
              <div className="deliverables">
                <span>DELIVERABLES</span>

                <p>{project.deliverables}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================
          CHALLENGE
      ========================= */}

      {project.problem && (
        <section className="case-challenge">
          <div className="challenge-inner">
            <div className="section-number light">
              <span>02</span>
              <span>THE CHALLENGE</span>
            </div>

            <div className="challenge-content">
              <h2>
                The problem
                <br />
                worth <em>solving.</em>
              </h2>

              <p>{project.problem}</p>
            </div>
          </div>
        </section>
      )}

      {/* =========================
          DESIGN PROCESS
      ========================= */}

      {project.designProcess && (
        <section className="case-process">
          <div className="section-number">
            <span>
              {project.problem ? "03" : "02"}
            </span>

            <span>DESIGN PROCESS</span>
          </div>

          <div className="process-content">
            <h2>
              From idea
              <br />
              to <em>experience.</em>
            </h2>

            <p>{project.designProcess}</p>
          </div>
        </section>
      )}

      {/* =========================
          DELIVERABLES
      ========================= */}

      {project.deliverables && (
        <section className="case-deliverables">
          <div className="deliverables-inner">
            <div className="section-number light">
              <span>
                {project.problem
                  ? project.designProcess
                    ? "04"
                    : "03"
                  : "02"}
              </span>

              <span>WHAT I DESIGNED</span>
            </div>

            <div className="deliverables-large">
              {project.deliverables
                .split(" · ")
                .map((item, index) => (
                  <div
                    className="deliverable-item"
                    key={item}
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{item}</h3>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================
          IMAGE GALLERY
      ========================= */}

      {additionalImages.length > 0 && (
        <section className="case-gallery">
          <div className="gallery-intro">
            <div>
              <span className="gallery-label">
                VISUAL EXPLORATION
              </span>

              <h2>
                The product,
                <br />
                <em>in detail.</em>
              </h2>
            </div>

            <p>
              Selected screens and design explorations
              from the project.
            </p>
          </div>

          <div className="gallery-list">
            {additionalImages.map((image, index) => {
              const imageNumber = index + 2;

              return (
                <article
                  className="gallery-item"
                  key={`${image}-${index}`}
                >
                  <div className="gallery-image-frame">
                    <img
                      src={image}
                      alt={`${project.title} visual ${imageNumber}`}
                      loading="lazy"
                    />
                  </div>

                  <div className="gallery-meta">
                    <span>
                      {String(imageNumber).padStart(2, "0")}
                    </span>

                    <span>{project.title}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* =========================
          NEXT PROJECT
      ========================= */}

      <section className="case-next">
        <div className="next-inner">
          <span className="next-label">
            BACK TO WORK
          </span>

          <h2>
            Have a product
            <br />
            worth <em>building?</em>
          </h2>

          <Link to="/work" className="next-button">
            <span>View all projects</span>
            <FiArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default CaseStudy;