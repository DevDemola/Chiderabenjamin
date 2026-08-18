import React from "react";
import "./Stats.css";

const Stats = () => {
  const stats = [
    {
      number: "20+",
      label: "PROJECTS",
      description: "Designed across digital and visual experiences.",
    },
    {
      number: "03",
      label: "DISCIPLINES",
      description: "Product design, UX research and graphics design.",
    },
    {
      number: "04",
      label: "CORE SKILLS",
      description: "Research, strategy, UI design and visual systems.",
    },
    {
      number: "∞",
      label: "CURIOSITY",
      description: "Always learning, exploring and creating.",
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="stats-header">

          <span className="stats-eyebrow">
            02 — BY THE NUMBERS
          </span>

          <span className="stats-line" />

          <span className="stats-note">
            A LITTLE CONTEXT
          </span>

        </div>


        {/* =========================================
            STATS GRID
        ========================================= */}

        <div className="stats-grid">

          {stats.map((stat, index) => (
            <div
              className="stat"
              key={index}
            >

              <div className="stat-top">

                <span className="stat-index">
                  0{index + 1}
                </span>

                <span className="stat-label">
                  {stat.label}
                </span>

              </div>


              <div className="stat-number">
                {stat.number}
              </div>


              <p className="stat-description">
                {stat.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;