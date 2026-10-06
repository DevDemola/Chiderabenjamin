import { FiPlus } from "react-icons/fi";

import { faqs } from "./data/site";
import "./FAQ.css";

const FAQ = () => {
  return (
    <section className="section on-cream" id="faq" aria-labelledby="faq-title">
      <div className="container faq">
        <header className="section-title" data-reveal>
          <h2 id="faq-title">Frequently Asked Questions</h2>
          <p>Everything you might want to know before we start working together.</p>
        </header>

        <div className="faq__list" data-reveal>
          {faqs.map((f, i) => (
            <details key={f.q} className="faq__item" name="faq" open={i === 0}>
              <summary>
                <span>{f.q}</span>
                <FiPlus className="faq__icon" aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
