import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeInOnScroll, SlideInFromLeft } from '../animations/ScrollAnimations'
import styles from './Projects.module.css'
import slidingBtn from '/assets/slidingWhiteBtn.svg'

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const projects = [
    {
      title: 'Amidst the Hill',
      description: 'A compact plotted development near Vemgal Industrial Area. Provides well-sized plots with essential infrastructure, ideal for building homes or making smart investments.',
      image: '/assets/ATHimage.webp',
      details: 'Each project reflects our commitment to excellence, transforming visions into thriving realities. Explore what sets us apart—because every project tells a story of success.'
    },
    {
      title: 'Manchanvelle',
      description: 'We are a real estate firm with over 30 years of expertise, and our main goal is to provide amazing locations to our partners and clients.',
      image: '/assets/Manchanvelle.webp',
      details: 'Each project reflects our commitment to excellence, transforming visions into thriving realities. Explore what sets us apart—because every project tells a story of success.'
    },
    {
      title: 'Kavaranahalli',
      description: 'A premium residential project spread across 4.5 and 27 acres in the scenic Nandi Hills region. Offers plotted developments and future-ready villas, crafted in phases for sustainable growth.',
      image: '/assets/Karvanahalli.webp',
      details: 'Each project reflects our commitment to excellence, transforming visions into thriving realities. Explore what sets us apart—because every project tells a story of success.'
    },
    {
      title: 'Kandwara',
      description: 'A plotted residential community designed for professionals and families. Strategically located near NH44 in Chikkaballapur, it combines accessibility with lifestyle convenience.',
      image: '/assets/Kandwara.webp',
      details: 'Each project reflects our commitment to excellence, transforming visions into thriving realities. Explore what sets us apart—because every project tells a story of success.'
    }
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToProject = (index) => {
    setCurrentProject(index)
  }

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const swipeThreshold = 50 // Minimum distance for a swipe
    const diff = touchStartX.current - touchEndX.current

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left - go to next project
        nextProject()
      } else {
        // Swiped right - go to previous project
        prevProject()
      }
    }
  }

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.projectsContainer}>
        <SlideInFromLeft delay={0.2} className={styles.projectsHeader}>
          <h2 className={styles.sectionLabel}>LATEST PROJECT
            <motion.span
              className={styles.headerLine}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ transformOrigin: 'left' }}
            />
          </h2>
        </SlideInFromLeft>
        <div className={styles.projectIntroContainer}>
          <p className={styles.projectIntro}>
            Each project reflects our commitment to excellence, transforming visions into thriving realities. Explore what sets us apart—because every project tells a story of success.
          </p>
        </div>

        <FadeInOnScroll delay={0.3} duration={1} yOffset={50} className={styles.projectsContent}>
          <div className={styles.projectInfo}>

            {/* Desktop showcase - before image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                className={`${styles.projectShowcase} ${styles.projectShowcaseDesktop}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <h1 className={styles.projectTitle}>
                  {projects[currentProject].title}
                </h1>

                <p className={styles.projectDescription}>
                  {projects[currentProject].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              className={styles.projectImageContainer}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              whileHover={{ scale: 1.02 }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {projects[currentProject].image.toLowerCase().endsWith('.mp4') || projects[currentProject].image.toLowerCase().endsWith('.webm') ? (
                <video
                  className={styles.projectImage}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                >
                  {projects[currentProject].image.toLowerCase().endsWith('.webm') && (
                    <source src={projects[currentProject].image} type="video/webm" />
                  )}
                  {projects[currentProject].image.toLowerCase().endsWith('.mp4') && (
                    <source src={projects[currentProject].image} type="video/mp4" />
                  )}
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className={styles.projectImage}
                  style={{ width: '100%', height: 'auto' }}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Mobile showcase - after image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-${currentProject}`}
              className={`${styles.projectShowcase} ${styles.projectShowcaseMobile}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <h1 className={styles.projectTitle}>
                {projects[currentProject].title}
              </h1>

              <p className={styles.projectDescription}>
                {projects[currentProject].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.button
            className={`${styles.navArrow} ${styles.navPrev}`}
            onClick={prevProject}
            aria-label="Previous project"
            whileHover={{ scale: 1.15, x: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <img className={styles.slidingButton} src={slidingBtn} alt="sliding button" draggable="false" style={{ pointerEvents: 'none' }} />
          </motion.button>

          <motion.button
            className={`${styles.navArrow} ${styles.navNext}`}
            onClick={nextProject}
            aria-label="Next project"
            whileHover={{ scale: 1.15, x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <img className={`${styles.slidingButton} ${styles.slidingBtnRight}`} src={slidingBtn} alt="sliding button" draggable="false" style={{ pointerEvents: 'none' }} />
          </motion.button>

          <FadeInOnScroll delay={0.7} yOffset={20} className={styles.projectDots}>
            {projects.map((_, index) => (
              <motion.button
                key={index}
                className={`${styles.dot} ${index === currentProject ? styles.dotActive : ''}`}
                onClick={() => goToProject(index)}
                aria-label={`Go to project ${index + 1}`}
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            ))}
          </FadeInOnScroll>
        </FadeInOnScroll>
      </div>
    </section>
  )
}

export default Projects