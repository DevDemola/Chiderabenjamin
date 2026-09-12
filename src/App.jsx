import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Marquee from "./Marquee";
import About from "./About";
import Tools from "./Tools";
import Projects from "./Projects";
import CTA from "./CTA";
import Footer from "./Footer";

import CaseStudy from "./Casestudy/Casestudy";

import "./App.css";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Tools />
        <Projects />
        <CTA />
      </main>

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* CASE STUDIES */}
      <Route path="/work/:slug" element={<CaseStudy />} />

      {/* OLD PROJECTS URL */}
      <Route
        path="/projects"
        element={<Navigate to="/#work" replace />}
      />

      {/* UNKNOWN URL */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
};

export default App;