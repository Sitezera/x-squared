import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Review.module.css'
import slidingBtn from '/assets/slidingBtn.svg'

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      quote: "Home is where love resides, memories are created, and dreams are nurtured. I have found my sanctuary in this beautiful property. Finding the perfect that resonates with your own",
      name: "Pranav Mital",
      position: "Property Expert",
      image: "https://images.pexels.com/photos/19570521/pexels-photo-19570521.jpeg",
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
            UP COMING PROJECT
          </motion.h2>
          <motion.p 
            className={styles.sectionSubtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Redefining Real Estate for the Next Generation
          </motion.p>
        </div>

        <div className={styles.reviewContent}>
          <button className={`${styles.navArrow} ${styles.prevArrow}`} aria-label="Previous Review" disabled style={{ pointerEvents: 'none', opacity: 0.5, marginTop: '-2rem' }}>
            <img src={slidingBtn} alt="Previous" draggable="false" style={{ pointerEvents: 'none' }} />
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
            </motion.div>
          </div>

          <button className={`${styles.navArrow} ${styles.nextArrow}`} aria-label="Next Review" disabled style={{ pointerEvents: 'none', opacity: 0.5, marginTop: '-2rem' }}>
            <img className={styles.rightBtn} src={slidingBtn} alt="Next" draggable="false" style={{ pointerEvents: 'none' }} />
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