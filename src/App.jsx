import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { PageTransition } from './components/animations/ScrollAnimations'

import { useSmoothScroll } from './hooks/useScrollAnimations'

// Import pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Team from './pages/Team'
import Services from './pages/Services'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import AmidstTheHill from './pages/amidst-the-hill'
import NavaManchanabelle from './pages/nava-manchanabelle'
import NavaHarihara from './pages/nava-harihara'

// Animated Routes Component
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <About />
          </PageTransition>
        } />
        <Route path="/projects" element={
          <PageTransition>
            <Projects />
          </PageTransition>
        } />
        <Route path="/team" element={
          <PageTransition>
            <Team />
          </PageTransition>
        } />
        <Route path="/services" element={
          <PageTransition>
            <Services />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <Contact />
          </PageTransition>
        } />
        <Route path="/faq" element={
          <PageTransition>
            <FAQ />
          </PageTransition>
        } />
        <Route path="/amidst-the-hill" element={
          <PageTransition>
            <AmidstTheHill />
          </PageTransition>
        } />
          <Route path="/nava-kandwara" element={
            <PageTransition>
              <NavaKandwara />
            </PageTransition>
          } />
          <Route path="/nava-manchanabelle" element={
            <PageTransition>
              <NavaManchanabelle />
            </PageTransition>
          } />
          <Route path="/nava-harihara" element={
            <PageTransition>
              <NavaHarihara />
            </PageTransition>
          } />
      </Routes>
    </AnimatePresence>
  );
};
import NavaKandwara from './pages/nava-kandwara'

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

// Separate component to access location
const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Enable global smooth scrolling with pathname for scroll-to-top
  useSmoothScroll(location.pathname);

  return (
    <div className="App">
     
      
      {/* Conditionally render Navbar with animation for home page */}
      <motion.div
        initial={isHomePage ? { y: -100, opacity: 0 } : false}
        animate={isHomePage ? { y: 0, opacity: 1 } : {}}
        transition={isHomePage ? { 
          duration: 0.8, 
          delay: 2.8, // After loader completes
          ease: [0.25, 0.1, 0.25, 1] 
        } : {}}
      >
        <Navbar />
      </motion.div>
      
      <main style={{ overflow: 'hidden' }}>
        <AnimatedRoutes />
      </main>
      
      {/* Conditionally render Footer with animation for home page */}
      <motion.div
        initial={isHomePage ? { y: 100, opacity: 0 } : false}
        animate={isHomePage ? { y: 0, opacity: 1 } : {}}
        transition={isHomePage ? { 
          duration: 0.8, 
          delay: 3.0, // After navbar appears
          ease: [0.25, 0.1, 0.25, 1] 
        } : {}}
      >
        <Footer />
      </motion.div>
      
      
    </div>
  );
};

export default App