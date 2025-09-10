import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="architectural-room">
          <div className="room-overlay"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="hero-title-left">Where Ideas</h1>
          </motion.div>
          
          <motion.div
            className="hero-text-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h1 className="hero-title-right">Takes Shape</h1>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #f8f5f1;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .architectural-room {
          position: absolute;
          top: 0;
          right: 0;
          width: 60%;
          height: 100%;
          background: linear-gradient(135deg, #e6d7c8 0%, #d4c4b0 50%, #c8b89e 100%);
          background-image: 
            radial-gradient(circle at 70% 30%, rgba(255, 248, 235, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(240, 225, 200, 0.6) 0%, transparent 40%),
            linear-gradient(45deg, transparent 30%, rgba(200, 180, 150, 0.3) 50%, transparent 70%);
        }

        .room-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(to right, rgba(248, 245, 241, 0.8) 0%, rgba(248, 245, 241, 0.4) 40%, transparent 60%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem 0;
        }

        .hero-text-left {
          margin-bottom: 1rem;
        }

        .hero-text-right {
          align-self: flex-end;
          text-align: right;
        }

        .hero-title-left,
        .hero-title-right {
          font-family: 'Times New Roman', Times, serif;
          font-size: 4.5rem;
          font-weight: 300;
          line-height: 1.1;
          color: #8b7355;
          margin: 0;
          font-style: italic;
        }

        .hero-title-left {
          text-align: left;
          margin-left: 0;
        }

        .hero-title-right {
          text-align: right;
          margin-right: 0;
        }

        @media (max-width: 1024px) {
          .architectural-room {
            width: 50%;
          }

          .hero-title-left,
          .hero-title-right {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            padding: 6rem 0 2rem;
            text-align: center;
          }

          .hero-text-left,
          .hero-text-right {
            align-self: center;
            text-align: center;
            margin-bottom: 0.5rem;
          }

          .hero-title-left,
          .hero-title-right {
            font-size: 2.5rem;
            text-align: center;
          }

          .architectural-room {
            width: 100%;
            opacity: 0.3;
          }

          .room-overlay {
            background: rgba(248, 245, 241, 0.7);
          }
        }

        @media (max-width: 480px) {
          .hero-title-left,
          .hero-title-right {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero