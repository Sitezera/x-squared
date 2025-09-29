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
            <motion.div
              className={styles.heroImage}
              initial={{ opacity: 0, scale: 1.1, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <img src="/assets/sevices.png" alt="Our Services" className={styles.serviceHeroImg} />
            </motion.div>
          </div>

          {/* Service Cards */}
          <div className={styles.servicesGrid}>
            <motion.div
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 60, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              
            >
              <motion.div
                className={styles.serviceIcon}
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <img src="/assets/service icon1.png" alt="Project Management" className={styles.serviceIconImg} />
              </motion.div>
              <motion.h3
                className={styles.serviceName}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                PROJECT MANAGEMENT & CONSULTATION
              </motion.h3>
              <motion.p
                className={styles.serviceText}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                Squared offers dynamic project management and
                consultation services to streamline every stage of your
                real estate journey. From planning to delivery,
                we tackle complexities with strategic foresight and
                meticulous execution.
              </motion.p>
            </motion.div>

            <motion.div
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 60, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={styles.serviceIcon}
                initial={{ scale: 0, rotate: 45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                <img src="/assets/service icon2.png" alt="Project Enabler" className={styles.serviceIconImg} />
              </motion.div>
              <motion.h3
                className={styles.serviceName}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                PROJECT ENABLER
              </motion.h3>
              <motion.p
                className={styles.serviceText}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
              >
                We take your vision and turn it into a reality.
                From conceptualization to execution, Squared
                acts as the backbone of your project, providing
                seamless support across legal, financial, and
                operational requirements.
              </motion.p>
            </motion.div>

            <motion.div
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 60, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={styles.serviceIcon}
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                <img src="/assets/service icone 3.png" alt="Portfolio Management" className={styles.serviceIconImg} />
              </motion.div>
              <motion.h3
                className={styles.serviceName}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
              >
                END-TO-END PORTFOLIO MANAGEMENT
              </motion.h3>
              <motion.p
                className={styles.serviceText}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                viewport={{ once: true }}
              >
                Squared provides comprehensive portfolio management
                solutions, taking the burden off your shoulders. From
                acquisition to asset enhancement and final divestment,
                we handle it all. We ensure your portfolio grows with
                precision, purpose, and maximum returns.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services