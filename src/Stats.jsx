import React, { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./Stats.css";

const stats = [
  {
    value: 22,
    suffix: "+",
    label: "Projects Done",
  },
  {
    value: 17,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Creating",
  },
  {
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

const Stats = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={statsRef}>
      <div className="stats-container">

        {/* Heading */}
        <div className="stats-heading">
          <span className="stats-eyebrow">
            BY THE NUMBERS
          </span>

          <h2>
            A little proof
            <br />
            <em>goes a long way.</em>
          </h2>

          <p>
            I care about creating websites that don't just look good,
            but actually help brands show up better online.
          </p>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              {...stat}
              hasStarted={hasStarted}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

const StatCard = ({
  value,
  suffix,
  label,
  hasStarted,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime;
    const duration = 1400;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth ease-out
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(
        Math.floor(easedProgress * value)
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, value]);

  return (
    <div className="stat-card">
      <span className="stat-number">
        {count}
        {suffix}
      </span>

      <div className="stat-bottom">
        <span className="stat-label">
          {label}
        </span>

        <span className="stat-icon">
          <FiArrowUpRight />
        </span>
      </div>
    </div>
  );
};

export default Stats;