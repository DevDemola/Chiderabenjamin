import Icon from "./Icon";
import { outcomes, processSteps } from "./data/site";
import "./Process.css";

const Process = () => {
  return (
    <section className="section on-dark" id="process" aria-labelledby="process-title">
      <div className="container">
        <header className="section-title" data-reveal>
          <h2 id="process-title">
            How I Bring Your <span className="hl">Product</span> to Life
          </h2>
          <p>
            Design doesn't have to be confusing. I keep the process simple and
            collaborative, so you always know what's happening and why.
          </p>
        </header>

        <ol className="steps">
          {processSteps.map((s, i) => (
            <li
              key={s.title}
              className="step"
              data-reveal
              style={{ "--delay": `${i * 90}ms` }}
            >
              <div className="step__head">
                <span className="step__num">{i + 1}</span>
                <Icon name={s.icon} className="step__icon" />
                <h3>{s.title}</h3>
              </div>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>

        {/* OUTCOMES */}
        <div className="outcomes" data-reveal>
          <h3>What This Means For You</h3>
          <ul>
            {outcomes.map(([before, em, after]) => (
              <li key={em}>
                {before}
                <em>{em}</em>
                {after}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Process;
