import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import { site, toolkit } from "./data/site";
import "./WhyMe.css";

const WhyMe = () => {
  return (
    <section className="section why on-brand" aria-labelledby="why-title">
      <div className="container why__inner">
        <figure className="why__photo" data-reveal>
          <img
            src={site.portrait}
            alt={`Portrait of ${site.name}`}
            width="1050"
            height="1400"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className="why__copy" data-reveal>
          <h2 id="why-title">There Are Many Designers. Here's Why Teams Work With Me.</h2>

          <p>
            I don't design screens in isolation. Every layout, flow and button
            starts with the people who'll use it and the problem they're trying to
            solve — then I make it simple, calm and genuinely pleasant to use.
          </p>
          <p>
            I've designed across fintech, mental wellness, health and events, from
            cross-border payments to group savings and mood tracking. I'm
            comfortable owning the whole journey: research, structure, interface
            and prototype.
          </p>

          <div className="why__tools">
            <span>My everyday toolkit</span>
            <ul>
              {toolkit.map((t) => (
                <li key={t.name}>
                  <img src={t.image} alt="" width="22" height="22" />
                  {t.name}
                </li>
              ))}
            </ul>
          </div>

          <Link to="/#contact" className="btn btn--dark">
            Let's Work Together
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
