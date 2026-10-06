import Icon from "./Icon";
import { problems } from "./data/site";
import "./Problems.css";

const Problems = () => {
  return (
    <section className="section on-brand" aria-labelledby="problems-title">
      <div className="container">
        <header className="section-title" data-reveal>
          <h2 id="problems-title">Does This Sound Familiar?</h2>
          <p>
            Most founders and teams hit the same walls before their product
            really clicks with users. Good design fixes all of them.
          </p>
        </header>

        <ul className="problems">
          {problems.map((p, i) => (
            <li
              key={p.text}
              className="problem"
              data-reveal
              style={{ "--delay": `${(i % 2) * 90}ms` }}
            >
              <Icon name={p.icon} className="problem__icon" />
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Problems;
