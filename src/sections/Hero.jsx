import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left text - "Where Ideas" */}
        <motion.div
          className="hero-text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="hero-title">Where Ideas</h1>
        </motion.div>

        {/* Center image */}
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
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
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
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
          padding: 6%;
        }

        .hero-container {
          position: relative;
          width: 100%;
          max-width: 1400px;
          height: 80vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-image-container {
          position: relative;
          width: 55%;
          max-width: 750px;
          height: auto;
          z-index: 1;
          border-radius: 8px;
          overflow: hidden;
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
          z-index: 2;
        }

        .hero-text-right {
          position: absolute;
          right: 12%;
          bottom: 25%;
          z-index: 2;
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
        }

        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .hero-image-container {
            width: 60%;
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
            height: 70vh;
            min-height: 500px;
          }

          .hero-image-container {
            width: 75%;
            max-width: 500px;
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
            height: 60vh;
            min-height: 450px;
          }

          .hero-image-container {
            width: 85%;
            max-width: 350px;
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
        }

        /* Optional: Add subtle animation to image on hover */
        @media (hover: hover) {
          .hero-image-container {
            transition: transform 0.3s ease;
          }

          .hero-image-container:hover {
            transform: scale(1.02);
          }
        }
      `}</style>
    </section>
  )
}

export default Hero