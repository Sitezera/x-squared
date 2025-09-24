import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      title: "Project Management & Consultation",
      description: "We provide structured project management and consultation services to streamline every stage of development. From planning to delivery, our approach combines foresight with disciplined execution to handle complexities effectively."
    },
    {
      title: "Project Enabler",
      description: "We support projects from concept to completion, ensuring operational, financial, and legal requirements are met seamlessly. Acting as the backbone of execution, we help visions move forward with clarity and confidence."
    },
    {
      title: "End-to-End Portfolio Management",
      description: "Our portfolio management services cover the entire asset lifecycle—from acquisition and enhancement to divestment. With a focus on precision and long-term performance, we enable portfolios to achieve sustainable growth and maximum returns."
    },
    {
      title: "Legal Armoury",
      description: "We provide comprehensive legal support to ensure clarity and compliance at every stage. Services include title and record verification, regulatory assessments, dispute resolution, documentation, and final clearances."
    },
    {
      title: "Design Deeds",
      description: "Our design expertise spans architectural planning, sustainable solutions, master planning, and Building Information Modeling (BIM). Every project is driven by precision, efficiency, and a focus on long-term functionality."
    },
    {
      title: "Turnkey Design & Construction",
      description: "We manage complete construction requirements, including civil engineering, MEP services, structural oversight, interiors, and landscaping. Our turnkey model enables seamless execution from concept to completion."
    },
    {
      title: "Go-to-Market & Brand Strategy",
      description: "Projects are positioned strategically through branding, marketing, public relations, and awareness initiatives. This approach ensures developments gain visibility, relevance, and a competitive edge in the market."
    },
    {
      title: "Sales & Client Services",
      description: "We manage the entire sales process—client onboarding, performance monitoring, lead management, negotiations, and after-sales support—delivering efficiency for clients and measurable value for investors."
    },
    {
      title: "Land Advisory & Acquisition",
      description: "We identify, evaluate, and secure high-potential land parcels for development. Our process includes due diligence, negotiations, and regulatory clearances, ensuring every acquisition is strategically aligned with long-term growth objectives."
    }
  ]

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Our Services</h1>
            <p className="hero-description">
              We bring every stage of real estate under one roof—from legal clarity and design to construction, brand strategy, and sales. Our team combines deep industry expertise with a clear vision, ensuring projects are executed with transparency and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="service-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-header">
              <h2 className="section-title">Ready to Transform Your Vision?</h2>
              <div className="header-line"></div>
            </div>
            <p className="cta-text">
              Whether you're looking to develop land, manage a portfolio, or create an iconic project, our comprehensive services ensure every detail is handled with precision and care.
            </p>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .services-page {
          background: #FFFFF3;
          min-height: 100vh;
          padding-top: 80px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Hero Section */
        .services-hero {
          padding: 6rem 0 4rem;
          text-align: center;
        }

        .hero-title {
          font-family: 'Times New Roman', Georgia, serif;
          font-size: clamp(3.5rem, 6vw, 6rem);
          font-weight: 300;
          font-style: italic;
          color: #4E2520;
          margin: 0 0 2rem 0;
          line-height: 1.1;
        }

        .hero-description {
          font-family: 'Times New Roman', Georgia, serif;
          font-size: clamp(1.3rem, 2.2vw, 1.8rem);
          font-style: italic;
          color: #4E2520;
          max-width: 900px;
          margin: 0 auto;
          line-height: 1.6;
          font-weight: 300;
        }

        /* Services Grid */
        .services-grid-section {
          padding: 6rem 0;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
          margin-top: 2rem;
        }

        .service-card {
          background: #FFFFF3;
          border: 2px solid #F3793C;
          border-radius: 20px;
          padding: 2.5rem;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(243, 121, 60, 0.15);
        }

        .service-card:nth-child(3n+1) {
          border-color: #F3793C;
        }

        .service-card:nth-child(3n+2) {
          border-color: #4E2520;
        }

        .service-card:nth-child(3n+3) {
          border-color: #F3793C;
        }

        .service-number {
          position: absolute;
          top: -15px;
          right: 20px;
          background: #F3793C;
          color: #FFFFF3;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .service-card:nth-child(3n+2) .service-number {
          background: #4E2520;
        }

        .service-title {
          color: #4E2520;
          font-size: 1.3rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin: 0 0 1.5rem 0;
          line-height: 1.4;
          text-transform: uppercase;
          font-size: 1.1rem;
        }

        .service-description {
          color: #4E2520;
          font-size: 1rem;
          line-height: 1.7;
          margin: 0;
          text-align: justify;
          opacity: 0.85;
        }

        /* CTA Section */
        .services-cta {
          padding: 6rem 0;
          background: #4E2520;
          border-radius: 20px;
          margin: 4rem 0;
        }

        .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 3rem;
          gap: 2rem;
        }

        .section-title {
          color: #FFFFF3;
          font-size: 2.5rem;
          font-weight: 500;
          letter-spacing: 1px;
          margin: 0;
          white-space: nowrap;
        }

        .header-line {
          flex: 1;
          height: 1px;
          background: #FFFFF3;
        }

        .cta-text {
          color: #FFFFF3;
          font-family: 'Times New Roman', Georgia, serif;
          font-size: 1.5rem;
          font-style: italic;
          font-weight: 300;
          line-height: 1.8;
          margin: 0;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }

          .hero-title {
            font-size: clamp(3rem, 5vw, 5rem);
          }

          .hero-description {
            font-size: clamp(1.2rem, 1.8vw, 1.6rem);
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 1.5rem;
          }

          .services-hero {
            padding: 4rem 0 3rem;
          }

          .services-grid-section {
            padding: 4rem 0;
          }

          .services-cta {
            padding: 4rem 0;
            margin: 3rem 0;
            border-radius: 16px;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .service-card {
            padding: 2rem;
          }

          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .header-line {
            width: 100%;
          }

          .section-title {
            font-size: 2rem;
          }

          .cta-text {
            font-size: 1.3rem;
            text-align: left;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .services-hero {
            padding: 3rem 0 2rem;
          }

          .service-card {
            padding: 1.5rem;
          }

          .service-title {
            font-size: 1rem;
          }

          .service-description {
            font-size: 0.95rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .cta-text {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Services