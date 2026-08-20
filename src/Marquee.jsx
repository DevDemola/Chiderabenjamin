import React from "react";
import "./Marquee.css";

const items = [
  "PRODUCT DESIGNER",
  "UI/UX DESIGNER",
  "UX RESEARCHER",
  "DIGITAL PRODUCT DESIGN",
  "USER RESEARCH",
  "VISUAL DESIGN",
];

const Marquee = () => {
  return (
    <section className="marquee">
      <div className="marquee-track">
        {[...items, ...items].map((item, index) => (
          <React.Fragment key={`${item}-${index}`}>
            <span className="marquee-item">
              {item}
            </span>

            <span className="marquee-divider">
              /
            </span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Marquee;