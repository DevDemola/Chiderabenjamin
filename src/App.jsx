import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Marquee from './Marquee'
import Projects from './Projects'
import About from './About'
import Stats from './Stats'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <About/>
      <Stats/>
      <Projects/>
    </div>
  )
}

export default App
