import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Review.module.css'
import slidingBtm from '/assets/slidingBtn.svg'

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      quote: "Home is where love resides, memories are created, and dreams are nurtured. I have found my sanctuary in this beautiful property. Finding the perfect that resonates with your own!",
      name: "Pranav Mital",
      position: "Property Expert",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      quote: "XSquared transformed our vision into reality with exceptional attention to detail and professional service. Their expertise in the luxury real estate market is unmatched.",
      name: "Sarah Johnson",
      position: "Real Estate Investor",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      quote: "The team's dedication to finding the perfect property for our family was outstanding. They understood our needs and delivered beyond expectations.",
      name: "Michael Chen",
      position: "Home Buyer",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
    }
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className={styles.review} id="review">
      <div className={styles.container}>
        <div className={styles.reviewHeader}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            CUSTOMERS SAYS
          </motion.h2>
          <motion.p 
            className={styles.sectionSubtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Client Words That Reflects Our Excellence
          </motion.p>
        </div>

        <div className={styles.reviewContent}>
          <button className={`${styles.navArrow} ${styles.prevArrow}`} onClick={prevReview}>
            <span><img src={slidingBtm} alt="sliding button" /></span>
          </button>

          <div className={styles.reviewMain}>
            <motion.div 
              className={styles.reviewImage}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src={reviews[currentReview].image} 
                alt={reviews[currentReview].name}
                className={styles.reviewImg}
              />
            </motion.div>

            <motion.div 
              className={styles.testimonialCard}
              key={currentReview}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.quoteText}>
                "{reviews[currentReview].quote}"
              </div>
              
              <div className={styles.customerInfo}>
                <div className={styles.customerAvatar}>
                  <img 
                    src={reviews[currentReview].avatar} 
                    alt={reviews[currentReview].name}
                    className={styles.avatarImg}
                  />
                </div>
                <div className={styles.customerDetails}>
                  <h4 className={styles.customerName}>{reviews[currentReview].name}</h4>
                  <p className={styles.customerPosition}>{reviews[currentReview].position}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <button className={`${styles.navArrow} ${styles.nextArrow}`} onClick={nextReview}>
            <span><img src={slidingBtm} alt="sliding button" /></span>
          </button>
        </div>
      </div>

      {/* Bottom border lines */}
      <div className={styles.bottomLines}>
        <div className={styles.thickLine}></div>
        <div className={styles.thinLine}></div>
      </div>
    </section>
  )
}

export default Review