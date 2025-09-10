import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <motion.div
            className="about-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">ABOUT US</h2>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="about-paragraph">
              As <em>industry pioneers with a sharp focus on land banking</em>, 
              <span className="inline-image-container">
                <span className="inline-image image-1"></span>
              </span>
              <em>we specialize in</em> 
              <span className="inline-image-container">
                <span className="inline-image image-2"></span>
              </span>
              <em>identifying untapped opportunities</em>
            </p>
            
            <p className="about-paragraph">
              <em>& transforming them into thriving, high-value assets. Our expertise spans across a wide spectrum of real estate</em> 
              <span className="inline-image-container">
                <span className="inline-image image-3"></span>
              </span>
              <em>services, from property</em>
            </p>
            
            <p className="about-paragraph">
              <em>valuation to development, making us the go-to partner for individuals and businesses looking to invest in a smarter tomorrow. At XSquared, we're not just about transactionswe're about creating value,</em> 
              <span className="inline-image-container">
                <span className="inline-image image-4"></span>
              </span>
              <em>building trust, and fostering enduring partnerships.</em>
              <span className="inline-image-container">
                <span className="inline-image image-5"></span>
              </span>
            </p>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .about {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          margin: 0 0px;
        }

        .about-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .about-header {
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: FFFFFF;
          margin: 0;
          letter-spacing: 2px;
          text-align: left;
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
          background-color: white;
          margin-left: 20px;
        }

        .about-text {
          color: white;
          font-size: 1.8rem;
          line-height: 1.8;
          font-weight: 300;
          text-align: left;
        }

        .about-paragraph {
          margin-bottom: 1.5rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.5rem;
        }

        .about-paragraph em {
          font-style: italic;
          font-family: 'Times New Roman', Times, serif;
        }

        .inline-image-container {
          display: inline-flex;
          align-items: center;
          margin: 0 0.5rem;
        }

        .inline-image {
          width: 80px;
          height: 60px;
          border-radius: 8px;
          background-size: cover;
          background-position: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          flex-shrink: 0;
        }

        .image-1 {
          background: linear-gradient(45deg, #d4b896 0%, #c8a882 100%);
          background-image: 
            radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
            linear-gradient(135deg, transparent 30%, rgba(160, 140, 110, 0.3) 50%, transparent 70%);
        }

        .image-2 {
          background: linear-gradient(45deg, #b8a082 0%, #a68f70 100%);
          background-image: 
            radial-gradient(circle at 70% 30%, rgba(255, 248, 235, 0.3) 0%, transparent 40%),
            linear-gradient(45deg, transparent 40%, rgba(140, 120, 90, 0.4) 60%, transparent 80%);
        }

        .image-3 {
          background: linear-gradient(45deg, #e8dcc6 0%, #d4c4b0 100%);
          background-image: 
            radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.4) 0%, transparent 30%),
            linear-gradient(90deg, transparent 20%, rgba(180, 160, 130, 0.3) 40%, transparent 80%);
        }

        .image-4 {
          background: linear-gradient(45deg, #c0a888 0%, #b09976 100%);
          background-image: 
            radial-gradient(circle at 80% 80%, rgba(255, 248, 235, 0.2) 0%, transparent 50%),
            linear-gradient(135deg, transparent 25%, rgba(150, 130, 100, 0.4) 45%, transparent 75%);
        }

        .image-5 {
          background: linear-gradient(45deg, #d8c8a8 0%, #c4b094 100%);
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 40%),
            linear-gradient(45deg, transparent 30%, rgba(170, 150, 120, 0.3) 50%, transparent 70%);
        }

        @media (max-width: 1024px) {
          .about-text {
            font-size: 1.6rem;
          }

          .inline-image {
            width: 70px;
            height: 50px;
          }
        }

        @media (max-width: 768px) {
          .about {
            padding: 4rem 0;
          }

          .about-text {
            font-size: 1.3rem;
            line-height: 1.7;
          }

          .inline-image {
            width: 60px;
            height: 45px;
          }

          .about-paragraph {
            margin-bottom: 2rem;
          }
        }

        @media (max-width: 480px) {
          .about-text {
            font-size: 1.1rem;
          }

          .inline-image {
            width: 50px;
            height: 35px;
          }
        }
      `}</style>
    </section>
  )
}

export default About