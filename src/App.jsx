import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Marquee from './Marquee'
import Projects from './Projects'
import About from './About'
import Stats from './Stats'
import CTA from './CTA'
import Footer from './Footer'
import Tools from './Tools'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <About/>
      <Tools/>
      <Stats/>
      <Projects/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default App
