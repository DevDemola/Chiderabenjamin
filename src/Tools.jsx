import React from "react";
import "./Tools.css";
import { BiRightArrow } from "react-icons/bi";

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

          <span className="tools-eyebrow">
            TOOLS I USE
          </span>

          <h2>
            Tools I use to
            <br />
            bring ideas to <span>life.</span>
          </h2>

        </div>


        {/* =================================================
            TOOLS LIST
        ================================================= */}

        <div className="tools-list">

          {tools.map((tool, index) => (
            <div
              className="tool-item"
              key={tool.name}
            >

              {/* NUMBER */}

              <span className="tool-index">
                {String(index + 1).padStart(2, "0")}
              </span>


              {/* ICON */}

              <div className="tool-icon">

                <img
                  src={tool.image}
                  alt={`${tool.name} logo`}
                />

              </div>


              {/* DETAILS */}

              <div className="tool-details">

                <h3>
                  {tool.name}
                </h3>

                <p>
                  {tool.role}
                </p>

              </div>


              {/* ARROW */}

              <span className="tool-arrow">
                <BiRightArrow/>
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Tools;