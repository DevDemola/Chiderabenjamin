import React from "react";
import { FiArrowUpRight, FiPlus } from "react-icons/fi";
import "./Hero.css";

const tools = [
  {
    name: "Figma",
    image: "/figma.png",
    className: "hero-tool-1",
  },
  {
    name: "Photoshop",
    image: "/photoshop.png",
    className: "hero-tool-2",
  },
  {
    name: "Framer",
    image: "/framer.png",
    className: "hero-tool-3",
  },
  {
    name: "Claude",
    image: "/claude.jpg",
    className: "hero-tool-4",
  },
];

const Hero = () => {
  return (
    <section className="hero-section">

      {/* FLOATING TOOLS */}

      {tools.map((tool) => (
        <div
          className={`hero-tool ${tool.className}`}
          key={tool.name}
        >
          <img
            src={tool.image}
            alt={tool.name}
          />

          <span>{tool.name}</span>
        </div>
      ))}


      {/* DECORATIVE PLUS */}

      <div className="hero-plus hero-plus-1">
        <FiPlus />
      </div>

      <div className="hero-plus hero-plus-2">
        <FiPlus />
      </div>


      {/* HERO CONTENT */}

      <div className="hero-content">

        <div className="hero-eyebrow">
          <span className="hero-dot"></span>
          PRODUCT DESIGNER
        </div>

        <h1>
          I design digital
          <br />
          <span>products people love.</span>
        </h1>

        <p>
          I turn complex ideas into simple,
          thoughtful and intuitive digital
          experiences.
        </p>

        <a
          href="#contact"
          className="hero-button"
        >
          <span>Start a Project</span>

          <span className="hero-button-icon">
            <FiArrowUpRight />
          </span>
        </a>

      </div>



    </section>
  );
};

export default Hero;