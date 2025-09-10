import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      quote: "Home is where love resides, memories are created, and dreams are nurtured. I have found my sanctuary in this beautiful property. Finding the perfect that resonates with your own!",
      name: "Pranav Mital",
      position: "Property Expert",
      image: "/api/placeholder/60/60"
    },
    {
      quote: "XSquared transformed our vision into reality with exceptional attention to detail and professional service. Their expertise in the luxury real estate market is unmatched.",
      name: "Sarah Johnson",
      position: "Real Estate Investor",
      image: "/api/placeholder/60/60"
    },
    {
      quote: "The team's dedication to finding the perfect property for our family was outstanding. They understood our needs and delivered beyond expectations.",
      name: "Michael Chen",
      position: "Home Buyer",
      image: "/api/placeholder/60/60"
    }
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="review" id="review">
      <div className="container">
        <div className="review-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            CUSTOMERS SAYS
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Client Words That Reflects Our Excellence
          </motion.p>
        </div>

        <div className="review-content">
          <button className="nav-arrow prev-arrow" onClick={prevReview}>
            <span>‹</span>
          </button>

          <div className="review-main">
            <motion.div 
              className="review-image"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="placeholder-image"></div>
            </motion.div>

            <motion.div 
              className="testimonial-card"
              key={currentReview}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="quote-text">
                "{reviews[currentReview].quote}"
              </div>
              
              <div className="customer-info">
                <div className="customer-avatar">
                  <div className="avatar-placeholder"></div>
                </div>
                <div className="customer-details">
                  <h4 className="customer-name">{reviews[currentReview].name}</h4>
                  <p className="customer-position">{reviews[currentReview].position}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <button className="nav-arrow next-arrow" onClick={nextReview}>
            <span>›</span>
          </button>
        </div>
      </div>

      {/* Bottom border lines */}
      <div className="bottom-lines">
        <div className="thick-line"></div>
        <div className="thin-line"></div>
      </div>

      <style jsx>{`
        .review {
          background: #4E2520;
          padding: 6rem 0 12rem 0;
          position: relative;
          overflow: hidden;
          margin-top: -20px;
        }

        .review-header {
          margin-bottom: 4rem;
        }

        .section-title {
          color: #F3793C;
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 2px;
          margin: 0 0 1rem 0;
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          width: 80px;
          height: 2px;
          background-color: #F3793C;
          margin-left: 20px;
        }

        .section-subtitle {
          color: #FFFFF3;
          font-size: 1rem;
          font-weight: 300;
          margin: 0;
          opacity: 0.9;
        }

        .review-content {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: #F3793C;
          font-size: 3rem;
          cursor: pointer;
          padding: 0;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border-radius: 50%;
          z-index: 20;
        }

        .prev-arrow {
          left: -80px;
        }

        .next-arrow {
          right: -80px;
        }

        .nav-arrow:hover {
          background: rgba(243, 121, 60, 0.1);
          transform: translateY(-50%) scale(1.1);
        }

        .review-main {
          position: relative;
          width: 100%;
          height: 400px;
        }

        .review-image {
          width: 100%;
          height: 400px;
          position: relative;
          border-radius: 16px;
          overflow: hidden;
        }

        .placeholder-image {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #6b5b73 0%, #a0a0a0 50%, #8d8d8d 100%);
          background-image: 
            radial-gradient(circle at 30% 20%, rgba(200, 200, 200, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(180, 180, 180, 0.2) 0%, transparent 40%);
        }

        .testimonial-card {
          position: absolute;
          top: 50px;
          right: 50px;
          background: #FFFFFF;
          padding: 2.5rem;
          border-radius: 16px;
          max-width: 400px;
          width: 400px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
          z-index: 10;
        }

        .quote-text {
          color: #4E2520;
          font-size: 1.1rem;
          line-height: 1.6;
          margin: 0 0 2rem 0;
          font-style: italic;
          font-weight: 300;
        }

        .customer-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .customer-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
        }

        .avatar-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #e5e5e5 0%, #d4d4d4 100%);
          background-image: 
            radial-gradient(circle at 30% 30%, rgba(200, 200, 200, 0.4) 0%, transparent 50%);
        }

        .customer-details {
          flex: 1;
        }

        .customer-name {
          color: #4E2520;
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 0.25rem 0;
        }

        .customer-position {
          color: #F3793C;
          font-size: 0.9rem;
          font-weight: 400;
          margin: 0;
        }

        .bottom-lines {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }

        .thick-line {
          width: 100%;
          height: 4px;
          background-color: #FFFFFF;
          margin-bottom: 8px;
        }

        .thin-line {
          width: 100%;
          height: 1px;
          background-color: #FFFFFF;
          margin-bottom: 8px;
        }

        @media (max-width: 1024px) {
          .testimonial-card {
            right: 30px;
            max-width: 350px;
            width: 350px;
            padding: 2rem;
          }

          .nav-arrow {
            font-size: 2.5rem;
            width: 50px;
            height: 50px;
          }

          .prev-arrow {
            left: -60px;
          }

          .next-arrow {
            right: -60px;
          }
        }

        @media (max-width: 768px) {
          .review {
            padding: 4rem 0;
          }

          .review-content {
            flex-direction: column;
            gap: 2rem;
          }

          .nav-arrow {
            display: none;
          }

          .review-main {
            flex-direction: column;
            width: 100%;
          }

          .review-image {
            width: 100%;
            height: 300px;
          }

          .testimonial-card {
            position: static;
            transform: none;
            width: 100%;
            max-width: none;
            margin-top: -30px;
            padding: 2rem;
          }

          .section-title::after {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .testimonial-card {
            padding: 1.5rem;
          }

          .quote-text {
            font-size: 1rem;
          }

          .customer-avatar {
            width: 50px;
            height: 50px;
          }

          .customer-name {
            font-size: 1rem;
          }

          .customer-position {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Review