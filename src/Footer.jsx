import { Link } from "react-router-dom";
import { FiArrowUp } from "react-icons/fi";

import { Logo } from "./Navbar";
import { site } from "./data/site";
import { projects } from "./data/projects";
import "./Footer.css";

const Footer = () => {
  const socials = site.socials.filter((s) => s.href);

  return (
    <footer className="footer on-brand">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo />
            <p>
              {site.role} · {site.location}
            </p>
            <a href={`mailto:${site.email}`} className="footer__email">
              {site.email}
            </a>
          </div>

          <nav className="footer__col" aria-label="Explore">
            <h2>Explore</h2>
            <Link to="/#about">About</Link>
            <Link to="/#services">Services</Link>
            <Link to="/#process">Process</Link>
            <Link to="/#faq">FAQ</Link>
            <Link to="/#contact">Contact</Link>
          </nav>

          <nav className="footer__col" aria-label="Case studies">
            <h2>Work</h2>
            {projects.map((p) => (
              <Link key={p.slug} to={`/work/${p.slug}`}>
                {p.title}
              </Link>
            ))}
          </nav>

          {socials.length > 0 && (
            <nav className="footer__col" aria-label="Social">
              <h2>Connect</h2>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </nav>
          )}
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>

          <a href={site.credit.href} target="_blank" rel="noreferrer">
            Designed & built by <strong>{site.credit.name}</strong>
          </a>

          <button
            type="button"
            className="footer__top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top
            <FiArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
