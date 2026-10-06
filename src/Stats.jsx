import { FiArrowUpRight, FiPlus } from "react-icons/fi";
import "./Stats.css";

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">

        {/* TOP LABEL */}
        <div className="stats-header">
          <div className="stats-label">
            <span className="stats-number">03</span>
            <span>BY THE NUMBERS</span>
          </div>

          <div className="stats-line"></div>

          <span className="stats-side-text">
            A FEW NUMBERS
          </span>
        </div>


        {/* INTRO */}
        <div className="stats-intro">
          <h2>
            A little bit of
            <span> what I bring.</span>
          </h2>

          <p>
            Some numbers that give a glimpse into my
            experience, process and the work I love doing.
          </p>
        </div>


        {/* STATS */}
        <div className="stats-grid">

          {/* STAT 1 */}
          <div className="stat-card stat-large">

            <div className="stat-top">
              <span>01</span>

              <div className="stat-circle">
                <FiArrowUpRight />
              </div>
            </div>

            <div className="stat-content">
              <strong>20+</strong>

              <span>
                Projects designed
              </span>
            </div>

          </div>


          {/* STAT 2 */}
          <div className="stat-card stat-orange">

            <div className="stat-top">
              <span>02</span>

              <FiPlus className="stat-plus" />
            </div>

            <div className="stat-content">
              <strong>4+</strong>

              <span>
                Years exploring design
              </span>
            </div>

          </div>


          {/* STAT 3 */}
          <div className="stat-card stat-wide">

            <div className="stat-top">
              <span>03</span>

              <span className="stat-mini">
                PEOPLE FIRST
              </span>
            </div>

            <div className="stat-content">
              <strong>100%</strong>

              <span>
                User-focused approach
              </span>
            </div>

            <div className="stat-decoration">
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>


          {/* STAT 4 */}
          <div className="stat-card stat-dark">

            <div className="stat-top">
              <span>04</span>

              <div className="stat-dot"></div>
            </div>

            <div className="stat-content">
              <strong>∞</strong>

              <span>
                Curiosity for better ideas
              </span>
            </div>

          </div>

        </div>


        {/* BOTTOM */}
        <div className="stats-footer">
          <span className="stats-footer-dot"></span>

          <span>
            Always learning. Always designing.
          </span>
        </div>

      </div>
    </section>
  );
};

export default Stats;