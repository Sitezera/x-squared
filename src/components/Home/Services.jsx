import React from 'react'
import { motion } from 'framer-motion'
import styles from './Services.module.css'

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.servicesContent}>
          {/* Hero Image and Title */}
          <div className={styles.servicesHero}>
            <div className={styles.heroContent}>
              <motion.h2
                className={styles.servicesTitle}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Our Services
              </motion.h2>
              <motion.p
                className={styles.servicesDescription}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                We are a real estate firm with over 15 years of expertise,
                and our main goal is to provide amazing locations to our
                partners and clients. Within the luxury real estate market,
                our agency offers customized solutions.
              </motion.p>
            </div>
            <div className={styles.heroImage}>
              <img src="/assets/sevices.png" alt="Our Services" className={styles.serviceHeroImg} />
            </div>
          </div>

          {/* Service Cards */}
          <motion.div 
            className={styles.servicesGrid}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img src="/assets/service icon1.png" alt="Project Management" className={styles.serviceIconImg} />
              </div>
              <h3 className={styles.serviceName}>PROJECT MANAGEMENT & CONSULTATION</h3>
              <p className={styles.serviceText}>
                Squared offers dynamic project management and
                consultation services to streamline every stage of your
                real estate journey. From planning to delivery,
                we tackle complexities with strategic foresight and
                meticulous execution.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img src="/assets/service icon2.png" alt="Project Enabler" className={styles.serviceIconImg} />
              </div>
              <h3 className={styles.serviceName}>PROJECT ENABLER</h3>
              <p className={styles.serviceText}>
                We take your vision and turn it into a reality.
                From conceptualization to execution, Squared
                acts as the backbone of your project, providing
                seamless support across legal, financial, and
                operational requirements.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img src="/assets/service icone 3.png" alt="Portfolio Management" className={styles.serviceIconImg} />
              </div>
              <h3 className={styles.serviceName}>END-TO-END PORTFOLIO MANAGEMENT</h3>
              <p className={styles.serviceText}>
                Squared provides comprehensive portfolio management
                solutions, taking the burden off your shoulders. From
                acquisition to asset enhancement and final divestment,
                we handle it all. We ensure your portfolio grows with
                precision, purpose, and maximum returns.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services