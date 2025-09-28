import React from 'react'
import { motion } from 'framer-motion'
import styles from './Team.module.css'
import slidingBtn from '/assets/slidingBtn.svg'

const Team = () => {
  const teamMembers = [
    { name: "Naveen Reddy", title: "Co-Founder and New Acquisitions", image: "/assets/naveen reddy.png" },
    { name: "Varun Mukherjee", title: "Founder and Strategic Investments", image: "/assets/varun mukherjee.png" }
  ]

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
          <button className={`${styles['nav-button']} ${styles['nav-left']}`} aria-label="Previous team member">
            <img src={slidingBtn} alt="sliding button" />
          </button>

        
          <div className={styles['team-content']}>
            <div className={styles['team-layout']}>
              <div>
                <div className={styles['member-image-container']}>
                  <img src={teamMembers[0].image} alt={teamMembers[0].name} className={styles['member-image']} />
                </div>
              </div>
              <div className={styles['member-name-title-left']}>
                <div className={styles['member-info']}>
                  <h3 className={styles['member-name']}>{teamMembers[0].name}</h3>
                  <p className={styles['member-title']}>{teamMembers[0].title}</p>
                </div>
              </div>
              <div className={styles['member-name-title-right']}>
                <div className={styles['member-info-right']}>
                  <h3 className={styles['member-name']}>{teamMembers[1].name}</h3>
                  <p className={styles['member-title']}>{teamMembers[1].title}</p>
                </div>
              </div>
              <div>
                <div className={styles['member-image-container']}>
                  <img src={teamMembers[1].image} alt={teamMembers[1].name} className={styles['member-image']} />
                </div>
              </div>
            </div>
          </div>

          <button className={`${styles['nav-button']} ${styles['nav-right']}`} aria-label="Next team member">
            <img className={styles['rightBtn']} src={slidingBtn} alt="sliding button" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Team
