import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="about" id="about" aria-label="About XSquared">
      <div className="container">
        
        <div className="about-content">
          {/* Heading */}
          <motion.div
            className="about-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6 }}
          >
          <div className="abouts-header">
            <h2 className="abouts-label">ABOUT US</h2>
            <div className="header-line"></div>
          </div>
          </motion.div>

          {/* Body */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-italic">
              As industry pioneers with a sharp focus on land banking,
              <img src="/assets/about 1.png" alt="" className="inline-image" />we specialize in 
               <img src="/assets/about 2.png" alt="" className="inline-image" />
              identifying untapped opportunities &amp; transforming them into
              thriving, high-value assets. Our expertise spans across a wide
              spectrum of real estate
              <img src="/assets/about 3.png" alt="" className="inline-image" />
              services, from property valuation to development, making us the
              go-to partner for individuals and businesses looking to invest in
              a smarter tomorrow. At XSquared, we’re not just about
              transactions—we’re about creating value,
              <img src="/assets/about 4.png" alt="" className="inline-image" />
              <img src="/assets/about 5.png" alt="" className="inline-image" />
              building trust, and fostering enduring partnerships.
            </p>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        .about {
          background : #F3793C;
          padding: 6% 0 6% 0 ;
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          margin: 2rem 0rem;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .about-content {
          width: 100%;
          padding: 0 2rem;
        }

        .about-header {
          margin-bottom: 3rem;
        }
        .abouts-header {
          display: flex;
          align-items: center;
          margin-bottom: 3rem;
          gap: 1.5rem;
        }
        .abouts-label {
          color: #FFFFF3;
          font-size: 2rem;
          font-weight: 500;
          letter-spacing: 2px;
          margin: 0;
          white-space: nowrap;
        }
        .header-line {
          flex: 0 0 80px;
          height: 1px;
          background: #FFFFF3;
        }
        .section-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
          font-size: 0px;
          color: #FFFFF3;
          margin: 0;
          letter-spacing: 0.15em;
          text-align: left;
        }

        .about-text {
          color: white;
          max-width: 100%;
        }

        .text-block {
          display: block;
          margin-bottom: 0.3rem;
          line-height: 2.2;
          text-align: left;
        }

        .text-italic {
          font-style: italic;
          font-family: 'Times New Roman', Georgia, serif;
          font-size: 2.2rem;
          font-weight: 300;
          letter-spacing: 0.01em;
          vertical-align: middle;
          line-height: 6rem;
          text-align: justify;
          text-wrap: pretty;
          
        }

        .image-wrapper {
          display: inline-block;
          vertical-align: middle;
          margin: 0 0rem;
          position: relative;
        }

        .inline-image {
          height: 5%;
          margin : 0 20px;
          width: auto;
          min-width: 100px;
          max-width: 300px;
          border-radius: 5px;
          object-fit: cover;
          display: inline-block;
          vertical-align: middle;
          transform: skewX(-12deg);
          transition: all 0.3s ease;
        }

        .inline-image:hover {
          transform: skewX(-12deg) scale(1.05);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .about {
            padding: 3.5rem 2.5rem;
          }

          .about-content {
            padding: 0 1.5rem;
          }

          .text-italic {
            font-size: 2rem;
          }

          .inline-image {
            height: 2.5rem;
            min-width: 3.5rem;
            max-width: 4.5rem;
          }
        }

        @media (max-width: 768px) {
          .about {
            padding: 3rem 2rem;
            margin: 1.5rem 0.5rem;
            border-radius: 20px;
          }

          .about-content {
            padding: 0 1rem;
          }

          .about-header {
            margin-bottom: 2.5rem;
          }

          .section-title {
            font-size: 1rem;
            letter-spacing: 0.12em;
          }

          .text-italic {
            font-size: 1.5rem;
          }

          .text-block {
            line-height: 2;
            margin-bottom: 0.2rem;
          }

          .inline-image {
            height: 2rem;
            min-width: 3rem;
            max-width: 4rem;
            transform: skewX(-10deg);
            border-radius: 8px;
          }

          .image-wrapper {
            margin: 0 0.3rem;
          }
        }

        @media (max-width: 480px) {
          .about {
            padding: 2.5rem 1.5rem;
            margin: 1rem 0.25rem;
            border-radius: 16px;
          }

          .about-content {
            padding: 0 0.5rem;
          }

          .about-header {
            margin-bottom: 2rem;
          }

          .section-title {
            font-size: 0.9rem;
            letter-spacing: 0.1em;
          }

          .text-italic {
            font-size: 1.15rem;
          }

          .text-block {
            line-height: 1.8;
            margin-bottom: 0.15rem;
          }

          .inline-image {
            height: 1.6rem;
            min-width: 2.5rem;
            max-width: 3.5rem;
            transform: skewX(-8deg);
            border-radius: 6px;
          }

          .image-wrapper {
            margin: 0 0.2rem;
          }
        }

        /* Animation for images on scroll */
        @keyframes fadeInSkew {
          from {
            opacity: 0;
            transform: skewX(-12deg) translateY(10px);
          }
          to {
            opacity: 1;
            transform: skewX(-12deg) translateY(0);
          }
        }

        .inline-image {
          animation: fadeInSkew 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default About