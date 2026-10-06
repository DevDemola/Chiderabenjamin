import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";

import { site } from "./data/site";
import "./Navbar.css";

const links = [
  { label: "About", to: "/#about" },
  { label: "Services", to: "/#services" },
  { label: "Work", to: "/#work" },
  { label: "Process", to: "/#process" },
  { label: "FAQ", to: "/#faq" },
];

export const Logo = ({ onClick, className = "" }) => (
  <Link to="/" className={`logo ${className}`} onClick={onClick} aria-label={`${site.name} — home`}>
    <span className="logo__mark">{site.firstName.toLowerCase()}</span>
    <span className="logo__dot" aria-hidden="true" />
  </Link>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 10);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 960 && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
        <div className="container nav__inner">
          <Logo onClick={close} />

          <nav className="nav__links" aria-label="Primary">
            {links.map((l) => (
              <Link key={l.label} to={l.to}>
                {l.label}
              </Link>
            ))}
          </nav>

          <Link to="/#contact" className="btn btn--dark btn--sm nav__cta">
            Let's Talk
            <FiArrowRight aria-hidden="true" />
          </Link>

          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div id="mobile-menu" className={`sheet${open ? " is-open" : ""}`} inert={!open}>
        <nav className="container sheet__inner" aria-label="Mobile">
          <ul>
            {links.map((l, i) => (
              <li key={l.label} style={{ "--i": i }}>
                <Link to={l.to} onClick={close}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/#contact" className="btn btn--brand" onClick={close}>
            Let's Talk
            <FiArrowRight aria-hidden="true" />
          </Link>
        </nav>
      </div>

      {/* FLOATING SIDE TAB */}
      <Link to="/#contact" className="side-tab">
        Let's chat
      </Link>
    </>
  );
};

export default Navbar;
