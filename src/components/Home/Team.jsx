import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeInOnScroll, SlideInFromLeft, StaggerContainer } from '../animations/ScrollAnimations'
import styles from './Team.module.css'
import slidingBtn from '/assets/slidingBtn.svg'

const Team = () => {
  const [currentPair, setCurrentPair] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const teamMembers = [
    { 
      name: "Naveen Reddy", 
      title: "Co-Founder and New Acquisitions", 
      image: "/assets/naveen reddy.png",
      mobileImage: "/assets/naveen reddy mobile.png"
    },
    { 
      name: "Nikhil Arora", 
      title: "Founder, Strategic Investments", 
      image: "/assets/Nikhil Arora.png",
      mobileImage: "/assets/Nikhil Arora.png"
    },
    { 
      name: "Sanket Shah", 
      title: "Head of Design and Strategy", 
      image: "/assets/SS.jpeg",
      mobileImage: "/assets/SS.jpeg"
    },
    { 
      name: "Varun Mukherjee", 
      title: "Founder and Strategic Investments", 
      image: "/assets/varun mukherjee.png",
      mobileImage: "/assets/varun mukherjee mobile.png"
    },
  ]

  const handlePrevious = () => {
    setCurrentPair((prev) => (prev === 0 ? 1 : 0))
  }

  const handleNext = () => {
    setCurrentPair((prev) => (prev === 0 ? 1 : 0))
  }

  const leftIndex = currentPair * 2
  const rightIndex = currentPair * 2 + 1

  return (
    <section className={styles.team} id="team">
      <div className="container">
        <SlideInFromLeft delay={0.2} className={styles['team-header']}>
          <div className={styles['teams-header']}>
            <h2 className={styles['teams-label']}>
              OUR TEAM
              <motion.span
                className={styles['teams-line']}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ transformOrigin: 'left' }}
              />
            </h2>
          </div>
          <FadeInOnScroll delay={0.6} yOffset={20}>
            <p className={styles['team-description']}>
              
            </p>
          </FadeInOnScroll>
        </SlideInFromLeft>

        <FadeInOnScroll delay={0.3} duration={1} yOffset={50} className={styles['team-container']}>
          <motion.button
            className={`${styles['nav-button']} ${styles['nav-left']}`}
            onClick={handlePrevious}
            aria-label="Previous team member"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <img src={slidingBtn} alt="sliding button" draggable="false" style={{ pointerEvents: 'none' }} />
          </motion.button>


          <div className={styles['team-content']}>
            <AnimatePresence mode="wait">
              <motion.div
                className={styles['team-layout']}
                key={currentPair}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div>
                  <div className={styles['member-image-container']}>
                    <img 
                      src={isMobile ? teamMembers[leftIndex].mobileImage : teamMembers[leftIndex].image} 
                      alt={teamMembers[leftIndex].name} 
                      className={styles['member-image']} 
                    />
                  </div>
                </div>
                <div className={styles['member-name-title-left']}>
                  <div className={styles['member-info']}>
                    <h3 className={styles['member-name']}>{teamMembers[leftIndex].name}</h3>
                    <p className={styles['member-title']}>{teamMembers[leftIndex].title}</p>
                  </div>
                </div>
                <div className={styles['member-name-title-right']}>
                  <div className={styles['member-info-right']}>
                    <h3 className={styles['member-name']}>{teamMembers[rightIndex].name}</h3>
                    <p className={styles['member-title']}>{teamMembers[rightIndex].title}</p>
                  </div>
                </div>
                <div>
                  <div className={styles['member-image-container']}>
                    <img 
                      src={isMobile ? teamMembers[rightIndex].mobileImage : teamMembers[rightIndex].image} 
                      alt={teamMembers[rightIndex].name} 
                      className={styles['member-image']} 
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            className={`${styles['nav-button']} ${styles['nav-right']}`}
            onClick={handleNext}
            aria-label="Next team member"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <img className={styles['rightBtn']} src={slidingBtn} alt="sliding button" draggable="false" style={{ pointerEvents: 'none' }} />
          </motion.button>
        </FadeInOnScroll>
      </div>
    </section>
  )
}

export default Team
