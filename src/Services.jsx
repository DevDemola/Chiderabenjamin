import Icon from "./Icon";
import { services } from "./data/site";
import "./Services.css";

const Services = () => {
  return (
    <section className="section on-dark" id="services" aria-labelledby="services-title">
      <div className="container">
        <header className="section-title" data-reveal>
          <h2 id="services-title">
            Here's How I Can <span className="hl">Help</span>
          </h2>
          <p>
            From the first round of research to the final prototype, I take the
            guesswork out of building a product people want to use.
          </p>
        </header>

        <ul className="services">
          {services.map((s, i) => (
            <li
              key={s.title}
              className="service"
              data-reveal
              style={{ "--delay": `${(i % 3) * 80}ms` }}
            >
              <span className="service__icon">
                <Icon name={s.icon} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
