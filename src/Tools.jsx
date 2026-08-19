import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./Tools.css";

const tools = [
  {
    name: "Figma",
    role: "Design & Prototyping",
    image: "/figma.png",
  },
  {
    name: "Photoshop",
    role: "Visual Design",
    image: "/photoshop.png",
  },
  {
    name: "Framer",
    role: "Web & Prototyping",
    image: "/framer.png",
  },
  {
    name: "Claude",
    role: "AI & Ideation",
    image: "/claude.jpg",
  },
];

const Tools = () => {
  return (
    <section className="tools-section" id="tools">

      <div className="tools-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="tools-header">

          <div className="tools-meta">
            <span>03</span>

            <span>
              Tools & Workflow
            </span>
          </div>


          <div className="tools-intro">

            <h2>
              The tools I use to
              <br />
              <em>bring ideas to life.</em>
            </h2>

            <p>
              A mix of design, prototyping and creative tools
              that help me turn ideas into meaningful experiences.
            </p>

          </div>

        </div>


        {/* =================================================
            TOOLS SHOWCASE
        ================================================= */}

        <div className="tools-showcase">

          {tools.map((tool, index) => (

            <article
              className={`tool-item tool-item-${index + 1}`}
              key={tool.name}
            >

              {/* TOOL IMAGE */}

              <div className="tool-visual">

                <img
                  src={tool.image}
                  alt={`${tool.name} logo`}
                />

              </div>


              {/* TOOL INFORMATION */}

              <div className="tool-info">

                <span className="tool-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>

                  <h3>
                    {tool.name}
                  </h3>

                  <p>
                    {tool.role}
                  </p>

                </div>

              </div>


              {/* ARROW */}

              <FiArrowUpRight className="tool-item-arrow" />

            </article>

          ))}

        </div>


        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="tools-footer">

          <span>
            A few of my everyday tools
          </span>

          <div className="tools-footer-line" />

          <span>
            Always exploring
          </span>

        </div>

      </div>

    </section>
  );
};

export default Tools;