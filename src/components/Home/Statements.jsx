import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Statements.module.css'
import img from '/assets/statements.png'

const Statements = () => {
  const [activeTab, setActiveTab] = useState('PURPOSE')

  const statements = {
    PURPOSE: {
      title: 'Purpose',
      content: 'Our purpose is create a real estate brand that is driven by a value system that houses - transparency, accountability sustainability & creativity.'
    },
    VISION: {
      title: 'Vision',
      content: 'To become the most trusted and innovative real estate partner, transforming how people experience property investment and development through cutting-edge solutions and unwavering integrity.'
    },
    MISSION: {
      title: 'Mission',
      content: 'We are committed to delivering exceptional real estate services that exceed expectations, fostering long-term partnerships, and creating sustainable value for our clients, communities, and stakeholders.'
    }
  }

  const nextStatement = () => {
    const keys = Object.keys(statements)
    const currentIndex = keys.indexOf(activeTab)
    const nextIndex = (currentIndex + 1) % keys.length
    setActiveTab(keys[nextIndex])
  }

  return (
    <section className={styles.statements} id="statements">
      <div className={styles.container}>
        <div className={styles.statementsHeader}>
          <h2 className={styles.sectionTitle}>STATEMENTS</h2>
          <div className={styles.dividerLine}></div>
          <div className={styles.statementsNav}>
            {Object.keys(statements).map((key) => (
              <button
                key={key}
                className={`${styles.navItem} ${activeTab === key ? styles.active : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.statementsContent}>
          {/* Mobile Title - Shows above image on mobile */}
          <motion.h3
            className={styles.statementTitleMobile}
            key={`${activeTab}-mobile`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {statements[activeTab].title}
          </motion.h3>

          <motion.div
            className={styles.landscapeContainer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className={styles.landscapeImage}>
              <picture>
                <source media="(max-width: 768px)" srcSet="/assets/statmentMobile.svg" />
                <img
                  src={img}
                  alt="Mountain landscape with mist"
                  className={styles.landscapeImg}
                />
              </picture>
            </div>

            <div className={styles.statementOverlay}>
              <motion.h3
                className={styles.statementTitle}
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {statements[activeTab].title}
              </motion.h3>

              <motion.p
                className={styles.statementText}
                key={`${activeTab}-text`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {statements[activeTab].content}
              </motion.p>

              <motion.div
                className={styles.arrowButton}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextStatement}
              >
                <svg width="50" height="40" viewBox="0 0 50 2" fill="none">
                  <line x1="0" y1="1" x2="45" y2="1" stroke="#4E2520" strokeWidth="1"/>
                  <path d="M45 1L50 1M50 1L45 -2M50 1L45 4" stroke="#4E2520" strokeWidth="1"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile Content - Shows below image on mobile */}
          <div className={styles.statementContentMobile}>
            <motion.p
              className={styles.statementTextMobile}
              key={`${activeTab}-text-mobile`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {statements[activeTab].content}
            </motion.p>

            <motion.div
              className={styles.arrowButtonMobile}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextStatement}
            >
              <svg width="50" height="40" viewBox="0 0 50 2" fill="none">
                <line x1="0" y1="1" x2="45" y2="1" stroke="#4E2520" strokeWidth="1"/>
                <path d="M45 1L50 1M50 1L45 -2M50 1L45 4" stroke="#4E2520" strokeWidth="1"/>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statements