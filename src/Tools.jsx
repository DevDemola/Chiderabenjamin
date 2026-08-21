import React from "react";
import {
  FiArrowUpRight,
  FiFigma,
  FiPlus,
} from "react-icons/fi";
import "./Tools.css";

const tools = [
  {
    name: "Figma",
    description: "UI Design & Prototyping",
    className: "figma",
  },
  {
    name: "Photoshop",
    description: "Visual & Graphic Design",
    className: "photoshop",
  },
  {
    name: "Framer",
    description: "Interactive Prototypes",
    className: "framer",
  },
  {
    name: "Claude",
    description: "AI & Design Exploration",
    className: "claude",
  },
];

const Tools = () => {
  return (
    <section className="tools-section" id="tools">
      <div className="tools-container">

        {/* HEADER */}
        <div className="tools-header">
          <div className="tools-line"></div>

          <span className="tools-small-text">
            MY DIGITAL TOOLKIT
          </span>

        </div>


        {/* INTRO */}
        <div className="tools-intro">

          <h2>
            Tools I use to
            <span> bring ideas to life.</span>
          </h2>

          <p>
            A small collection of the tools I use to
            research, design, prototype and bring
            digital products to life.
          </p>

        </div>


        {/* TOOL LIST */}
        <div className="tools-list">

          {tools.map((tool, index) => (
            <div
              className={`tool-item ${tool.className}`}
              key={tool.name}
            >

              {/* NUMBER */}
              <span className="tool-number">
                0{index + 1}
              </span>


              {/* ICON */}
              <div className="tool-icon">

                {tool.name === "Figma" && (
                  <div className="figma-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}

                {tool.name === "Photoshop" && (
                  <span className="ps-icon">
                    Ps
                  </span>
                )}

                {tool.name === "Framer" && (
                  <span className="framer-icon">
                    F
                  </span>
                )}

                {tool.name === "Claude" && (
                  <span className="claude-icon">
                    ✦
                  </span>
                )}

              </div>


              {/* NAME */}
              <div className="tool-name">
                {tool.name}
              </div>


              {/* DESCRIPTION */}
              <div className="tool-description">
                {tool.description}
              </div>


              {/* ARROW */}
              <div className="tool-arrow">
                <FiArrowUpRight />
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Tools;