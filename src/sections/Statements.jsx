import React, { useState } from 'react'
import { motion } from 'framer-motion'

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
    <section className="statements" id="statements">
      <div className="container">
        <div className="statements-header">
          <h2 className="section-title">STATEMENTS</h2>
          <div className="divider-line"></div>
          <div className="statements-nav">
            {Object.keys(statements).map((key) => (
              <button
                key={key}
                className={`nav-item ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        <div className="statements-content">
          <motion.div
            className="landscape-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="landscape-image">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop" 
                alt="Mountain landscape with mist"
                className="landscape-img"
              />
            </div>
            
            <div className="statement-overlay">
              <motion.h3
                className="statement-title"
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {statements[activeTab].title}
              </motion.h3>
              
              <motion.p
                className="statement-text"
                key={`${activeTab}-text`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {statements[activeTab].content}
              </motion.p>
              
              <motion.div
                className="arrow-button"
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextStatement}
              >
                <svg width="50" height="2" viewBox="0 0 50 2" fill="none">
                  <line x1="0" y1="1" x2="45" y2="1" stroke="#4E2520" strokeWidth="1"/>
                  <path d="M45 1L50 1M50 1L45 -2M50 1L45 4" stroke="#4E2520" strokeWidth="1"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .statements {
          background: #FFFFF3;
          padding: 5rem 0;
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .statements-header {
          display: flex;
          align-items: center;
          margin-bottom: 4rem;
          gap: 2rem;
        }

        .section-title {
          color: #4E2520;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 3px;
          margin: 0;
          white-space: nowrap;
        }

        .divider-line {
          width: 150px;
          height: 1px;
          background-color: #4E2520 !important;
          opacity: 0.7;
          border: none;
          background-image: none;
        }

        .statements-nav {
          display: flex;
          gap: 2.5rem;
        }

        .nav-item {
          background: none;
          border: none;
          color: #4E2520;
          font-size: 0.75rem;
          font-weight: 400;
          letter-spacing: 1.5px;
          cursor: pointer;
          position: relative;
          opacity: 0.5;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
          text-transform: uppercase;
        }

        .nav-item:hover {
          opacity: 0.8;
        }

        .nav-item.active {
          opacity: 1;
          color: #4E2520;
          font-weight: 500;
        }

        .statements-content {
          position: relative;
          width: 100%;
        }

        .landscape-container {
          position: relative;
          width: 100%;
          height: 500px;
          display: flex;
          align-items: center;
        }

        .landscape-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 65%;
          height: 100%;
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
          overflow: hidden;
        }

        .landscape-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.95);
        }

        .landscape-image::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(243, 121, 60, 0.05) 0%, 
            transparent 40%,
            rgba(78, 37, 32, 0.1) 100%);
          pointer-events: none;
        }

        .statement-overlay {
          position: absolute;
          right: 8%;
          top: 50%;
          transform: translateY(-50%);
          max-width: 400px;
          z-index: 2;
        }

        .statement-title {
          font-family: 'Playfair Display', 'Times New Roman', serif;
          font-size: 4.5rem;
          font-weight: 300;
          font-style: italic;
          color: #4E2520;
          margin: 0 0 2rem 0;
          line-height: 0.9;
          letter-spacing: -2px;
        }

        .statement-text {
          color: #4E2520;
          font-size: 0.95rem;
          line-height: 1.7;
          margin: 0 0 2.5rem 0;
          font-weight: 300;
          letter-spacing: 0.3px;
          opacity: 0.8;
        }

        .arrow-button {
          cursor: pointer;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .arrow-button svg {
          overflow: visible;
        }

        @media (max-width: 1024px) {
          .landscape-container {
            height: 450px;
          }

          .landscape-image {
            width: 70%;
          }

          .statement-overlay {
            right: 5%;
            max-width: 350px;
          }

          .statement-title {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .statements {
            padding: 3rem 0;
          }

          .statements-header {
            flex-wrap: wrap;
            gap: 1.5rem;
          }

          .divider-line {
            width: 100%;
            order: 2;
          }

          .statements-nav {
            order: 3;
            width: 100%;
            justify-content: center;
            gap: 2rem;
          }

          .landscape-container {
            height: 600px;
            flex-direction: column;
          }

          .landscape-image {
            position: relative;
            width: 100%;
            height: 350px;
            clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
          }

          .statement-overlay {
            position: relative;
            right: auto;
            top: auto;
            transform: none;
            margin-top: -50px;
            padding: 0 2rem;
            max-width: none;
            text-align: center;
          }

          .statement-title {
            font-size: 3rem;
          }

          .arrow-button {
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .statements-nav {
            gap: 1.5rem;
          }

          .nav-item {
            font-size: 0.7rem;
          }

          .landscape-container {
            height: 500px;
          }

          .landscape-image {
            height: 280px;
          }

          .statement-overlay {
            padding: 0 1.5rem;
          }

          .statement-title {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
          }

          .statement-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Statements