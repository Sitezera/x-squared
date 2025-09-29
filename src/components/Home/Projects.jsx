import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Projects.module.css'
import slidingBtn from '/assets/slidingWhiteBtn.svg'

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      title: 'Yaravanakatte',
      description: 'We are a real estate firm with over 30 years of expertise, and our main goal is to provide amazing locations to our partners and clients.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      details: 'Each project reflects our commitment to excellence, transforming visions into thriving realities. Explore what sets us apart—because every project tells a story of success.'
    },
    {
      title: 'Kavaranahalli',
      description: 'A premium residential project spread across 4.5 and 27 acres in the scenic Nandi Hills region. Offers plotted developments and future-ready villas, crafted in phases for sustainable growth.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      details: 'A testament to architectural excellence and sustainable development, creating communities that thrive.'
    },
    {
      title: 'Vemgal',
      description: 'A compact plotted development near Vemgal Industrial Area. Provides well-sized plots with essential infrastructure, ideal for building homes or making smart investments.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      details: 'Where modern architecture meets serene landscapes, offering an unparalleled living experience.'
    },
    {
      title: 'Manchanballe',
      description: 'A plotted residential community designed for professionals and families. Strategically located near NH44 in Chikkaballapur, it combines accessibility with lifestyle convenience.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      details: 'Where modern architecture meets serene landscapes, offering an unparalleled living experience.'
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

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.projectsContainer}>
        <div className={styles.projectsHeader}>
          <h2 className={styles.sectionLabel}>LATEST PROJECT
            <span className={styles.headerLine}></span>
          </h2>
        </div>

        <div className={styles.projectsContent}>
          <div className={styles.projectInfo}>
            <div className={styles.projectIntroContainer}>
              <p className={styles.projectIntro}>
                {projects[currentProject].details}
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                className={styles.projectShowcase}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1
                  className={styles.projectTitle}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {projects[currentProject].title}
                </motion.h1>

                <motion.p
                  className={styles.projectDescription}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {projects[currentProject].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              className={styles.projectImageContainer}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              <img
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                className={styles.projectImage}
              />
            </motion.div>
          </AnimatePresence>

          <button
            className={`${styles.navArrow} ${styles.navPrev}`}
            onClick={prevProject}
            aria-label="Previous project"
          >
            <img className={styles.slidingButton} src={slidingBtn} alt="sliding button" />
          </button>

          <button
            className={`${styles.navArrow} ${styles.navNext}`}
            onClick={nextProject}
            aria-label="Next project"
          >
            <img className={`${styles.slidingButton} ${styles.slidingBtnRight}`} src={slidingBtn} alt="sliding button" />
          </button>

          <div className={styles.projectDots}>
            {projects.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentProject ? styles.dotActive : ''}`}
                onClick={() => goToProject(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects