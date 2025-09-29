import React from 'react'
import { motion } from 'framer-motion'
import { FadeInOnScroll, SlideInFromLeft, SlideInFromRight, TextReveal, StaggerContainer, ScaleInOnScroll } from '../animations/ScrollAnimations'
import styles from './Services.module.css'

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.servicesContent}>
          {/* Hero Image and Title with 49North-style animations */}
          <div className={styles.servicesHero}>
            <div className={styles.heroContent}>
              <SlideInFromLeft delay={0.2} className={styles.titleWrapper}>
                <TextReveal 
                  text="Our Services" 
                  className={styles.servicesTitle}
                  delay={0.4}
                  staggerDelay={0.08}
                />
              </SlideInFromLeft>
              
              <FadeInOnScroll
                delay={0.6}
                duration={0.8}
                yOffset={30}
                className={styles.descriptionWrapper}
              >
                <p className={styles.servicesDescription}>
                  We are a real estate firm with over 15 years of expertise,
                  and our main goal is to provide amazing locations to our
                  partners and clients. Within the luxury real estate market,
                  our agency offers customized solutions.
                </p>
              </FadeInOnScroll>
            </div>
            
            <SlideInFromRight delay={0.8} distance={80} className={styles.heroImage}>
              <ScaleInOnScroll 
                delay={0.3}
                initialScale={0.9}
                threshold={0.2}
              >
                <motion.img 
                  src="/assets/sevices.png" 
                  alt="Our Services" 
                  className={styles.serviceHeroImg}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                  }}
                />
              </ScaleInOnScroll>
            </SlideInFromRight>
          </div>

          {/* Service Cards with 49North-style staggered animation */}
          <StaggerContainer 
            className={styles.servicesGrid}
            staggerDelay={0.15}
            threshold={0.1}
          >
            <div className={styles.serviceCard}>
              <ScaleInOnScroll delay={0.2} initialScale={0.8}>
                <motion.div
                  className={styles.serviceIcon}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <img src="/assets/service icon1.png" alt="Project Management" className={styles.serviceIconImg} />
                </motion.div>
              </ScaleInOnScroll>
              
              <FadeInOnScroll delay={0.4} yOffset={20}>
                <h3 className={styles.serviceName}>
                  PROJECT MANAGEMENT & CONSULTATION
                </h3>
              </FadeInOnScroll>
              
              <FadeInOnScroll delay={0.6} yOffset={15}>
                <p className={styles.serviceText}>
                  Squared offers dynamic project management and
                  consultation services to streamline every stage of your
                  real estate journey. From planning to delivery,
                  we tackle complexities with strategic foresight and
                  meticulous execution.
                </p>
              </FadeInOnScroll>
            </div>

            <div className={styles.serviceCard}>
              <ScaleInOnScroll delay={0.2} initialScale={0.8}>
                <motion.div
                  className={styles.serviceIcon}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <img src="/assets/service icon2.png" alt="Project Enabler" className={styles.serviceIconImg} />
                </motion.div>
              </ScaleInOnScroll>
              
              <FadeInOnScroll delay={0.4} yOffset={20}>
                <h3 className={styles.serviceName}>
                  PROJECT ENABLER
                </h3>
              </FadeInOnScroll>
              
              <FadeInOnScroll delay={0.6} yOffset={15}>
                <p className={styles.serviceText}>
                  We take your vision and turn it into a reality.
                  From conceptualization to execution, Squared
                  acts as the backbone of your project, providing
                  seamless support across legal, financial, and
                  operational requirements.
                </p>
              </FadeInOnScroll>
            </div>

            <div className={styles.serviceCard}>
              <ScaleInOnScroll delay={0.2} initialScale={0.8}>
                <motion.div
                  className={styles.serviceIcon}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <img src="/assets/service icone 3.png" alt="Portfolio Management" className={styles.serviceIconImg} />
                </motion.div>
              </ScaleInOnScroll>
              
              <FadeInOnScroll delay={0.4} yOffset={20}>
                <h3 className={styles.serviceName}>
                  END-TO-END PORTFOLIO MANAGEMENT
                </h3>
              </FadeInOnScroll>
              
              <FadeInOnScroll delay={0.6} yOffset={15}>
                <p className={styles.serviceText}>
                  Squared provides comprehensive portfolio management
                  solutions, taking the burden off your shoulders. From
                  acquisition to asset enhancement and final divestment,
                  we handle it all. We ensure your portfolio grows with
                  precision, purpose, and maximum returns.
                </p>
              </FadeInOnScroll>
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

export default Services