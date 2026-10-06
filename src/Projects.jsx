import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

import { projects } from "./data/projects";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="section on-brand" id="work" aria-labelledby="work-title">
      <div className="container">
        <header className="work__head" data-reveal>
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 id="work-title">Products I've Designed</h2>
          </div>
          <p>
            Fintech, wellness, health and visual design — each project opens
            into a full case study of how it came together.
          </p>
        </header>

        <ul className="work__grid">
          {projects.map((p, i) => (
            <li key={p.slug} data-reveal style={{ "--delay": `${i * 70}ms` }}>
              <Link to={`/work/${p.slug}`} className="work-card">
                <img
                  src={p.cover}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: p.coverPosition }}
                />

                <span className="work-card__arrow" aria-hidden="true">
                  <FiArrowUpRight />
                </span>

                <span className="work-card__info">
                  <span className="work-card__tags">{p.tags.join(" · ")}</span>
                  <span className="work-card__title">{p.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="work__foot" data-reveal>
          <Link to="/#contact" className="btn btn--dark">
            Start a Project With Me
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
