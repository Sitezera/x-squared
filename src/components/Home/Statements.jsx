import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeInOnScroll, SlideInFromLeft, ScaleInOnScroll } from '../animations/ScrollAnimations'
import styles from './Statements.module.css'
import img from '/assets/statements.png'
import arrowIcon from '/assets/arrowStatments.svg'

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
        <SlideInFromLeft delay={0.2} className={styles.statementsHeader}>
          <FadeInOnScroll delay={0.3} yOffset={20}>
            <h2 className={styles.sectionTitle}>STATEMENTS</h2>
          </FadeInOnScroll>
          <motion.div
            className={styles.dividerLine}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ transformOrigin: 'left' }}
          />
          <FadeInOnScroll delay={0.6} yOffset={15} className={styles.statementsNav}>
            {Object.keys(statements).map((key, index) => (
              <motion.button
                key={key}
                className={`${styles.navItem} ${activeTab === key ? styles.active : ''}`}
                onClick={() => setActiveTab(key)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {key}
              </motion.button>
            ))}
          </FadeInOnScroll>
        </SlideInFromLeft>

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

          <ScaleInOnScroll delay={0.3} duration={1} initialScale={0.95}>
            <motion.div
              className={styles.landscapeContainer}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={styles.landscapeImage}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <picture>
                  <source media="(max-width: 768px)" srcSet="/assets/statmentMobile.svg" />
                  <img
                    src={img}
                    alt="Mountain landscape with mist"
                    className={styles.landscapeImg}
                  />
                </picture>
              </motion.div>

              <div className={styles.statementOverlay}>
                <motion.h3
                  className={styles.statementTitle}
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {statements[activeTab].title}
                </motion.h3>

                <motion.p
                  className={styles.statementText}
                  key={`${activeTab}-text`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {statements[activeTab].content}
                </motion.p>

                <motion.div
                  className={styles.arrowButton}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ x: 10, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextStatement}
                >
                  <img src={arrowIcon} alt="Next" />
                </motion.div>
              </div>
            </motion.div>
          </ScaleInOnScroll>

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
              whileTap={{ scale: 0.75 }}
              onClick={nextStatement}
            >
              <img src={arrowIcon} alt="Next" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statements