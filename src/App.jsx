import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Team from './sections/Team'
import Services from './sections/Services'
import Statements from './sections/Statements'
import Projects from './sections/Projects'
import Review from './sections/Review'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Services />
      <Statements />
      <Projects/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default App