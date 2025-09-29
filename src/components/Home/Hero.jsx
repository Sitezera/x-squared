import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
 

  return (
    <section className="hero" id="home">
      <div className="hero-container" >
        {/* Left text - "Where Ideas" */}
        <motion.div
          className="hero-text-left"
          
        >
          <h1 className="hero-title">Where Ideas</h1>
        </motion.div>

        {/* Center image */}
        <motion.div
          className="hero-image-container"
          
        >
          <img
            src="/assets/hero image.png"
            alt="Minimalist interior with natural light"
            className="hero-img"
          />

        </motion.div>

        {/* Right text - "Takes Shape" */}
        <motion.div
          className="hero-text-right"
          
        >
          <h1 className="hero-title">Takes Shape</h1>
        </motion.div>

       
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #fffef4;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 2%;
        }

        .hero-container {
          position: relative;
          width: 100%;
          max-width: 1400px;
          height: 100vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-image-container {
          position: relative;
          width: 50%;
          max-width: 50%;
          height: auto;
          z-index: 1;
          border-radius: 0;
          overflow: hidden;
          transform-origin: center;
          transition: transform 0.1s ease-out;
        }

        .hero-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        
        .hero-text-left {
          position: absolute;
          left: 8%;
          top: 28%;
          z-index: 30;
          transition: transform 0.1s ease-out, opacity 0.1s ease-out;
        }

        .hero-text-right {
          position: absolute;
          right: 11%;
          bottom: 25%;
          z-index: 30;
          transition: transform 0.1s ease-out, opacity 0.1s ease-out;
        }

        .hero-title {
          font-family: 'Times New Roman', Georgia, serif;
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 300;
          font-style: italic;
          color: #4e2520;
          line-height: 1;
          margin: 0;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          color: #4e2520;
          font-size: 1rem;
          font-style: italic;
          text-align: center;
        }

        .scroll-indicator p {
          margin: 0;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .hero-image-container {
            width: 45%;
          }

          .hero-text-left {
            left: 5%;
            top: 30%;
          }

          .hero-text-right {
            right: 8%;
            bottom: 28%;
          }

          .hero-title {
            font-size: clamp(2.5rem, 5vw, 4.5rem);
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            height: 100vh;
            min-height: 500px;
          }

          .hero-image-container {
            width: 60%;
            max-width: 400px;
          }

          .hero-text-left {
            left: 2%;
            top: 25%;
          }

          .hero-text-right {
            right: 3%;
            bottom: 22%;
          }

          .hero-title {
            font-size: clamp(2rem, 4.5vw, 3rem);
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding: 1rem;
          }

          .hero-container {
            height: 100vh;
            min-height: 450px;
          }

          .hero-image-container {
            width: 70%;
            max-width: 300px;
          }

          .hero-text-left {
            left: 0;
            top: 20%;
          }

          .hero-text-right {
            right: 0;
            bottom: 20%;
          }

          .hero-title {
            font-size: clamp(1.75rem, 4vw, 2.25rem);
          }

          .scroll-indicator {
            font-size: 0.9rem;
            bottom: 8%;
          }
        }

        /* Prevent text selection during scroll interaction */
        .hero-container {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }
      `}</style>
    </section>
  )
}

export default Hero