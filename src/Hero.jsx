import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import { site, stats } from "./data/site";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero on-brand" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <div className="hero__portrait">
            <img
              src={site.cutout}
              alt={`${site.name}, smiling with arms folded`}
              width="682"
              height="1201"
              fetchPriority="high"
            />
          </div>

          <div className="hero__copy">
            {site.available && (
              <span className="hero__badge">
                <span className="hero__badge-dot" aria-hidden="true" />
                Open to new projects
              </span>
            )}

            <h1 id="hero-title">
              Designing Products People Actually Enjoy Using
            </h1>

            <p>
              Hi, I'm {site.firstName} — a product designer in{" "}
              {site.location.split(",")[0]}. I help founders and teams turn
              complex ideas into simple, intuitive digital products that users
              understand, trust and keep coming back to.
            </p>

            <div className="hero__actions">
              <Link to="/#contact" className="btn btn--dark">
                Let's Build Your Product
                <FiArrowRight aria-hidden="true" />
              </Link>
              <Link to="/#work" className="hero__link">
                See my work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="stats on-cream" aria-label="At a glance">
        <ul className="container stats__list">
          {stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Hero;
