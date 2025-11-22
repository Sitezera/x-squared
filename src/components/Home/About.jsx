
import React from 'react'
import { motion } from 'framer-motion'
import { FadeInOnScroll, SlideInFromLeft, TextReveal, ScaleInOnScroll } from '../animations/ScrollAnimations'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.about} id="about" aria-label="About XSquared">
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <SlideInFromLeft delay={0.2} className={styles.aboutHeader}>
            <div className={styles.aboutsHeader}>
              <TextReveal 
                text="ABOUT US" 
                className={styles.aboutsLabel}
                delay={0.4}
                staggerDelay={0.05}
              />
              <motion.span 
                className={styles.headerLine}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
          </SlideInFromLeft>
          <FadeInOnScroll 
            delay={0.6}
            duration={0.8}
            yOffset={40}
            threshold={0.1}
            className={styles.aboutText}
          >
            <motion.p 
              className={`${styles.textItalic} ${styles.continuousParagraph}`}
              whileInView={{ opacity: [0.7, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className={styles.textSegment}>
                At XSquared, we identify untapped land and transform it into thriving communities, luxury developments, and iconic spaces that create long term value. We bring every stage of real estate under one roof—from legal clarity and design to construction, brand strategy, and sales. Our team combines deep industry expertise with a clear vision, ensuring projects are executed with transparency and precision. We believe real estate is about unlocking possibilities and creating places people are proud to be part of. Our mission is to turn vision into pride, transform land into lasting value, and leave a mark for generations.
              </span>
            </motion.p>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
  // CSS is now in About.module.css
  // ...existing code...

}
export default About