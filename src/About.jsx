import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import { pillars } from "./data/site";
import "./About.css";

const About = () => {
  return (
    <section className="section about on-dark" id="about" aria-labelledby="about-title">
      <div className="container">
        <header className="section-title" data-reveal>
          <h2 id="about-title">
            Great Products Should Feel <span className="hl">Effortless</span>
          </h2>
          <p>
            I combine research, strategy and visual design to create products
            that are useful, thoughtful and easy to understand — and I enjoy being
            involved from the very first idea to the final prototype.
          </p>
        </header>

        <div className="pillars">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className={`pillar${p.featured ? " is-featured" : ""}`}
              data-reveal
              style={{ "--delay": `${i * 90}ms` }}
            >
              <div className="pillar__image">
                <img src={p.image} alt="" loading="lazy" decoding="async" />
              </div>

              <div className="pillar__body">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <Link to={p.cta.to} className="btn btn--dark btn--sm">
                  {p.cta.label}
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
