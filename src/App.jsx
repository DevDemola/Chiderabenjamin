import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <Route
          path="/work/:slug"
          element={<CaseStudy />}
        />

      </Routes>
    
  );
};

export default App;