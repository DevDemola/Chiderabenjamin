import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Marquee from './Marquee'
import Projects from './Projects'
import About from './About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App
