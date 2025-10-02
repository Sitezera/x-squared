import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Team.module.css'
import slidingBtn from '/assets/slidingBtn.svg'

const Team = () => {
  const [currentPair, setCurrentPair] = useState(0)

  const teamMembers = [
    { name: "Naveen Reddy", title: "Co-Founder and New Acquisitions", image: "/assets/naveen reddy.png" },
    { name: "Varun Mukherjee", title: "Founder and Strategic Investments", image: "/assets/varun mukherjee.png" },
    { name: "Nikhil Arora", title: "Founder, Strategic Investments", image: "/assets/Nikhil Arora.png" },
    { name: "Sanket Shah", title: "Head of Design and Strategy", image: "/assets/SS.jpeg" },
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
        <motion.div
          className={styles['team-header']}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles['teams-header']}>
            <h2 className={styles['teams-label']}>
              OUR TEAM
              <span className={styles['teams-line']}></span>
            </h2>
          </div>
          <p className={styles['team-description']}>
            Our team consists of industry leaders, skilled architects, marketing experts, and legal specialists - offering combined expertise with passion to bring your projects to life.
          </p>
        </motion.div>

        <div className={styles['team-container']}>
          <button className={`${styles['nav-button']} ${styles['nav-left']}`} onClick={handlePrevious} aria-label="Previous team member">
            <img src={slidingBtn} alt="sliding button" />
          </button>


          <div className={styles['team-content']}>
            <motion.div
              className={styles['team-layout']}
              key={currentPair}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div>
                <div className={styles['member-image-container']}>
                  <img src={teamMembers[leftIndex].image} alt={teamMembers[leftIndex].name} className={styles['member-image']} />
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
                  <img src={teamMembers[rightIndex].image} alt={teamMembers[rightIndex].name} className={styles['member-image']} />
                </div>
              </div>
            </motion.div>
          </div>

          <button className={`${styles['nav-button']} ${styles['nav-right']}`} onClick={handleNext} aria-label="Next team member">
            <img className={styles['rightBtn']} src={slidingBtn} alt="sliding button" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Team
