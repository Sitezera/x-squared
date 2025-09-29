import React from 'react'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Team from '../components/Home/Team'
import Services from '../components/Home/Services'
import Statements from '../components/Home/Statements'
import Projects from '../components/Home/Projects'
import Review from '../components/Home/Review'

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Team />
      <Services />
      <Statements />
      <Projects />
      <Review />
    </div>
  )
}

export default Home