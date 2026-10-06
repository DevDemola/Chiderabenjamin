import { FiArrowUpRight } from "react-icons/fi";

import { toolkit } from "./data/site";
import "./Tools.css";

const ToolIcon = ({ icon }) => {
  switch (icon) {
    case "figma":
      return (
        <div className="figma-icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      );
    case "photoshop":
      return <span className="ps-icon">Ps</span>;
    case "framer":
      return <span className="framer-icon">F</span>;
    case "claude":
      return <span className="claude-icon">✦</span>;
    default:
      return null;
  }
};

const Tools = () => {
  return (
    <section className="tools-section" id="tools" aria-labelledby="tools-title">
      <div className="tools-container">
        {/* HEADER */}
        <div className="tools-header">
          <div className="tools-line"></div>
          <span className="tools-small-text">
            <span className="section-number">03</span>
            MY DIGITAL TOOLKIT
          </span>
        </div>

        {/* INTRO */}
        <div className="tools-intro" data-reveal>
          <h2 id="tools-title">
            Tools I use to
            <span> bring ideas to life.</span>
          </h2>

          <p>
            A small collection of the tools I use to research, design, prototype
            and bring digital products to life.
          </p>
        </div>

        {/* TOOL LIST */}
        <ul className="tools-list">
          {toolkit.map((tool, index) => (
            <li key={tool.name}>
              <a
                className={`tool-item ${tool.icon}`}
                href={tool.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${tool.name} — ${tool.description} (opens in a new tab)`}
              >
                <span className="tool-number">0{index + 1}</span>

                <div className="tool-icon" aria-hidden="true">
                  <ToolIcon icon={tool.icon} />
                </div>

                <div className="tool-name">{tool.name}</div>

                <div className="tool-description">{tool.description}</div>

                <div className="tool-arrow" aria-hidden="true">
                  <FiArrowUpRight />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tools;
