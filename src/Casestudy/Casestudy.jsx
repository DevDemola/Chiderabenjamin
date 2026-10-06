import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { getNextProject, getProject, pad, projects } from "../data/projects";
import { site } from "../data/site";
import { useDocumentTitle } from "../hooks";
import "./Casestudy.css";

const NotFound = () => (
  <section className="cs-hero on-brand">
    <div className="container cs-missing">
      <h1>This project doesn't exist.</h1>
      <p>The case study you're looking for may have moved.</p>
      <Link to="/#work" className="btn btn--dark">
        <FiArrowLeft aria-hidden="true" />
        Back to all work
      </Link>
    </div>
  </section>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const project = getProject(slug);

  useDocumentTitle(
    project ? `${project.title} — ${site.name}` : `Project not found — ${site.name}`
  );

  if (!project) return <NotFound />;

  const index = projects.indexOf(project) + 1;
  const next = getNextProject(slug);
  const sections = project.sections ?? [];
  const gallery = project.gallery ?? [];

  const meta = [
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
    { label: "Platform", value: project.platform },
  ].filter((m) => m.value);

  return (
    <article>
      {/* ---------- HERO ---------- */}
      <header className="cs-hero on-brand">
        <div className="container">
          <div className="cs-hero__bar">
            <Link to="/#work" className="cs-back">
              <FiArrowLeft aria-hidden="true" />
              All projects
            </Link>
            <span>
              Case study {pad(index)} / {pad(projects.length)}
            </span>
          </div>

          <ul className="cs-tags" aria-label="Tags">
            {project.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <h1>{project.title}</h1>
          <p className="cs-overview">{project.overview}</p>

          <dl className="cs-meta">
            {meta.map((m) => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>

          {project.deliverables?.length > 0 && (
            <div className="cs-deliverables">
              <span>Deliverables</span>
              <ul>
                {project.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* ---------- HERO IMAGE ---------- */}
      {project.hero && (
        <div className="cs-feature on-dark">
          <div className="container">
            <figure className={`cs-feature__frame${project.heroFit === "contain" ? " is-contain" : ""}`}>
              <img
                src={project.hero}
                alt={`${project.title} — project overview`}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      )}

      {/* ---------- STORY ---------- */}
      {(sections.length > 0 || gallery.length === 0) && (
        <section className="section on-cream" aria-label="Project story">
          <div className="container cs-story">
            {sections.map((s, i) => (
              <section className="cs-section" key={s.title} data-reveal>
                <h2>
                  <span className="cs-section__num">{i + 1}</span>
                  {s.title}
                </h2>
                <div>
                  <p>{s.body}</p>
                  {s.steps && (
                    <ol className="cs-steps">
                      {s.steps.map((step, n) => (
                        <li key={step}>
                          <span>{pad(n + 1)}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              </section>
            ))}

            {sections.length === 0 && gallery.length === 0 && (
              <div className="cs-pending" data-reveal>
                <h2>Full case study coming soon</h2>
                <p>
                  The write-up for {project.title} is in progress. Want a
                  walkthrough in the meantime?
                </p>
                <Link to="/#contact" className="btn btn--dark">
                  Get in touch
                  <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ---------- GALLERY ---------- */}
      {gallery.length > 0 && (
        <section className="section cs-gallery on-dark" aria-labelledby="gallery-title">
          <div className="container">
            <header className="section-title" data-reveal>
              <h2 id="gallery-title">
                Inside the <span className="hl">Design</span>
              </h2>
            </header>

            <div className="cs-gallery__list">
              {gallery.map((g, i) => (
                <figure key={`${g.src}-${i}`} data-reveal>
                  <div className="cs-gallery__frame">
                    <img
                      src={g.src}
                      alt={`${project.title} — ${g.caption ?? `screen ${i + 1}`}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {g.caption && (
                    <figcaption>
                      <span>{pad(i + 1)}</span>
                      {g.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- NEXT ---------- */}
      <nav className="section cs-next on-brand" aria-label="Next project">
        <div className="container">
          <Link to={`/work/${next.slug}`} className="cs-next__card" data-reveal>
            <div className="cs-next__text">
              <span>Next project</span>
              <strong>{next.title}</strong>
              <p>{next.summary}</p>
              <span className="btn btn--dark btn--sm">
                View case study
                <FiArrowRight aria-hidden="true" />
              </span>
            </div>
            <div className="cs-next__image">
              <img
                src={next.cover}
                alt=""
                loading="lazy"
                decoding="async"
                style={{ objectPosition: next.coverPosition }}
              />
            </div>
          </Link>
        </div>
      </nav>
    </article>
  );
};

export default CaseStudy;
