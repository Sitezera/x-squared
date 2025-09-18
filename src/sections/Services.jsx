import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-content">
          {/* Hero Image and Title */}
          <div className="services-hero">
            <div className="hero-content">
              <motion.h2
                className="services-title"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Our Services
              </motion.h2>
              <motion.p
                className="services-description"
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
            <div className="hero-image">
              <img src="/assets/sevices.png" alt="Our Services" className="service-hero-img" />
            </div>
          </div>

          {/* Service Cards */}
          <motion.div 
            className="services-grid"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="service-card">
              <div className="service-icon">
                <img src="/assets/service icon1.png" alt="Project Management" className="service-icon-img" />
              </div>
              <h3 className="service-name">PROJECT MANAGEMENT & CONSULTATION</h3>
              <p className="service-text">
                Squared offers dynamic project management and
                consultation services to streamline every stage of your
                real estate journey. From planning to delivery,
                we tackle complexities with strategic foresight and
                meticulous execution.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="/assets/service icon2.png" alt="Project Enabler" className="service-icon-img" />
              </div>
              <h3 className="service-name">PROJECT ENABLER</h3>
              <p className="service-text">
                We take your vision and turn it into a reality.
                From conceptualization to execution, Squared
                acts as the backbone of your project, providing
                seamless support across legal, financial, and
                operational requirements.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="/assets/service icone 3.png" alt="Portfolio Management" className="service-icon-img" />
              </div>
              <h3 className="service-name">END-TO-END PORTFOLIO MANAGEMENT</h3>
              <p className="service-text">
                Squared provides comprehensive portfolio management
                solutions, taking the burden off your shoulders. From
                acquisition to asset enhancement and final divestment,
                we handle it all. We ensure your portfolio grows with
                precision, purpose, and maximum returns.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      

      <style jsx>{`
        .services {
          background: #4E2520;
          padding: 0;
          margin: 0 0px;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }

        .services-content {
          padding: 4rem 0 6rem;
        }

        .services-hero {
          position: relative;
          margin-bottom: 4rem;
          padding: 2rem 0;
          height: 400px;
        }

        .hero-content {
          position: absolute;
          top: 0;
          left: 0;
          max-width: 450px;
          z-index: 10;
        }

        .services-title {
          font-family: 'Times New Roman', Times, serif;
          font-size: 3.5rem;
          font-weight: 400;
          font-style: italic;
          color: #F3793C;
          margin: 0 0 2rem 0;
          line-height: 1.2;
        }

        .services-description {
          color: #FFFFF3;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        .hero-image {
          position: absolute;
          top: -20px;
          right: -50px;
          width: 580px;
          height: 350px;
          border-radius: 12px;
          overflow: hidden;
        }

        .service-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-top: 3rem;
        }

        .service-card {
          text-align: left;
        }

        .service-icon {
          margin-bottom: 1.5rem;
        }

        .service-icon-img {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }

        .service-name {
          color: #FFFFF3;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin: 0 0 1rem 0;
          line-height: 1.3;
        }

        .service-text {
          color: #FFFFF3;
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
          opacity: 0.9;
        }


        @media (max-width: 1024px) {
          .services-hero {
            height: 450px;
          }

          .hero-content {
            max-width: 400px;
          }

          .services-title {
            font-size: 3rem;
          }

          .hero-image {
            width: 480px;
            height: 300px;
            right: -30px;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .services {
            margin: 0 10px;
          }

          .services-content {
            padding: 3rem 0 4rem;
          }

          .services-hero {
            height: 500px;
          }

          .hero-content {
            position: static;
            max-width: none;
            margin-bottom: 2rem;
          }

          .services-title {
            font-size: 2.5rem;
          }

          .hero-image {
            position: static;
            width: 100%;
            height: 280px;
            right: auto;
            top: auto;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .services-title {
            font-size: 2rem;
          }

          .services-hero {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Services