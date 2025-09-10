import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-content">
          {/* Hero Image and Title */}
          <div className="services-hero">
            <div className="hero-image">
              <div className="placeholder-image"></div>
            </div>
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
              offering top-tier leads to provide amazing outcomes to our 
              partners and clients. Within the luxury real estate market, 
              our agency drives customized solutions.
            </motion.p>
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
                <div className="icon-placeholder project-icon"></div>
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
                <div className="icon-placeholder enabler-icon"></div>
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
                <div className="icon-placeholder portfolio-icon"></div>
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
          height: 400px;
        }

        .hero-image {
          position: absolute;
          top: 50px;
          right: 0;
          width: 500px;
          height: 300px;
          border-radius: 12px;
          overflow: hidden;
        }

        .placeholder-image {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
          background-image: 
            radial-gradient(circle at 30% 20%, rgba(200, 200, 200, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(180, 180, 180, 0.2) 0%, transparent 40%);
        }

        .services-title {
          position: absolute;
          top: 20px;
          left: 0;
          font-family: 'Times New Roman', Times, serif;
          font-size: 3.5rem;
          font-weight: 400;
          font-style: italic;
          color: #F3793C;
          margin: 0;
          z-index: 10;
        }

        .services-description {
          position: absolute;
          top: 150px;
          left: 0;
          color: #FFFFF3;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
          max-width: 450px;
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

        .icon-placeholder {
          width: 50px;
          height: 50px;
          border-radius: 8px;
        }

        .project-icon {
          background: linear-gradient(135deg, #F3793C 0%, #e85d04 100%);
        }

        .enabler-icon {
          background: linear-gradient(135deg, #F3793C 0%, #e85d04 100%);
        }

        .portfolio-icon {
          background: linear-gradient(135deg, #F3793C 0%, #e85d04 100%);
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
            height: 500px;
          }

          .hero-image {
            width: 400px;
            height: 250px;
            top: 100px;
          }

          .services-title {
            font-size: 3rem;
          }

          .services-description {
            top: 180px;
            max-width: 350px;
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
            height: 600px;
          }

          .hero-image {
            position: static;
            width: 100%;
            height: 250px;
            margin-bottom: 2rem;
          }

          .services-title {
            position: static;
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .services-description {
            position: static;
            max-width: none;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .statements-header {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .statements-nav {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .services-title {
            font-size: 2rem;
          }

          .hero-image {
            height: 200px;
          }

          .statements-nav {
            gap: 1rem;
          }

          .nav-item {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Services