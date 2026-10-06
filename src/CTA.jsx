import { useRef, useState } from "react";
import { FiArrowRight, FiCheck, FiCopy } from "react-icons/fi";

import { site } from "./data/site";
import "./CTA.css";

const CTA = () => {
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section className="section cta on-dark" id="contact" aria-labelledby="cta-title">
      <div className="container cta__inner" data-reveal>
        <h2 id="cta-title">
          Have an Idea? <span className="hl">Let's Design It.</span>
        </h2>

        <p>
          Whether you're building something new, improving an existing product or
          simply exploring an idea — tell me about it and let's create something
          meaningful together.
        </p>

        <div className="cta__actions">
          <a href={`mailto:${site.email}`} className="btn btn--brand">
            Start a Project
            <FiArrowRight aria-hidden="true" />
          </a>

          <button type="button" className="cta__copy" onClick={copyEmail}>
            {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
            <span aria-live="polite">{copied ? "Email copied!" : site.email}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
