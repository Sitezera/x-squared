import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HomePageLoader from '../components/animations/HomePageLoader'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Team from '../components/Home/Team'
import Services from '../components/Home/Services'
import Statements from '../components/Home/Statements'
import Projects from '../components/Home/Projects'
// import Review from '../components/Home/Review'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // Check if this is a fresh page load (not navigation)
  useEffect(() => {
    // Detect if this is a page refresh/reload
    const isPageRefresh = window.performance.navigation.type === 1 || 
                         window.performance.getEntriesByType('navigation')[0]?.type === 'reload';
    
    // Only show loader on page refresh/initial load
    if (!isPageRefresh && sessionStorage.getItem('visitedHomePage') === 'true') {
      setIsLoading(false);
      setIsFirstLoad(false);
    } else {
      // Mark that we've visited the home page in this session
      sessionStorage.setItem('visitedHomePage', 'true');
    }
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setIsFirstLoad(false);
    }, 300);
  };

  return (
    <div className="home-page">
      {/* Always render content, but control animations based on loading state */}
      <Hero isLoading={isLoading} isFirstLoad={isFirstLoad} />
      
      {/* Other sections with staggered entrance after loader */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2,
              delay: 0.5,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            <About />
            <Team />
            <Services />
            <Statements />
            <Projects />
            {/* <Review /> */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loader overlay */}
      {isLoading && <HomePageLoader onComplete={handleLoaderComplete} />}
    </div>
  )
}

export default Home