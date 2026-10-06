import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Problems from "./Problems";
import Services from "./Services";
import Projects from "./Projects";
import Process from "./Process";
import WhyMe from "./WhyMe";
import Marquee from "./Marquee";
import FAQ from "./FAQ";
import CTA from "./CTA";
import Footer from "./Footer";
import CaseStudy from "./Casestudy/Casestudy";

import { site } from "./data/site";
import { useDocumentTitle, useReveal, useScrollManager } from "./hooks";

const Home = () => {
  useDocumentTitle(`${site.name} — ${site.role}`);

  return (
    <>
      <Hero />
      <About />
      <Problems />
      <Services />
      <Projects />
      <Process />
      <WhyMe />
      <Marquee />
      <FAQ />
    </>
  );
};

const App = () => {
  const { pathname } = useLocation();

  useScrollManager();
  useReveal(pathname);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/projects" element={<Navigate to="/#work" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <CTA />
      <Footer />
    </>
  );
};

export default App;
