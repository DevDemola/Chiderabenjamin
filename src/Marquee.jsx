import { Fragment } from "react";
import { FiStar } from "react-icons/fi";

import { ticker } from "./data/site";
import "./Marquee.css";

const Marquee = () => {
  // Rendered twice so the loop is seamless; the copy is hidden from screen readers.
  const row = (hidden) => (
    <div className="ticker__row" aria-hidden={hidden || undefined}>
      {ticker.map((item) => (
        <Fragment key={item}>
          <span className="ticker__item">{item}</span>
          <FiStar className="ticker__sep" aria-hidden="true" />
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className="ticker" role="region" aria-label="What I do">
      <div className="ticker__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
};

export default Marquee;
