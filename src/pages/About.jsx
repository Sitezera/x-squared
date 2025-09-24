import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">About Us</h1>
            <p className="hero-description">
              At XSquared, we identify untapped land and transform it into thriving communities, luxury developments, and iconic spaces that create long-term value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission">
        <div className="container">
          <div className="content-grid">
            <motion.div
              className="content-block vision-block"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="block-header">
                <h2 className="block-title">Our Vision</h2>
                <div className="header-line"></div>
              </div>
              <p className="block-text">
                Our vision is to procure India's finest lands and mould them into iconic structures to create exponential value per square foot.
              </p>
            </motion.div>

            <motion.div
              className="content-block mission-block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="block-header">
                <h2 className="block-title">Our Mission</h2>
                <div className="header-line"></div>
              </div>
              <p className="block-text">
                Our mission is to lead the generational transformation of India's USD 1 trillion real estate future. At XSquared, we combine decades of insight with next-gen ambition to build a high-yield, high-trust real estate portfolio for investors and homeowners alike.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="purpose-section">
        <div className="container">
          <motion.div
            className="purpose-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-header">
              <h2 className="section-title">Our Purpose</h2>
              <div className="header-line"></div>
            </div>
            <p className="purpose-text">
              Our purpose is to create a real estate brand driven by a value system that houses transparency, accountability, sustainability, and creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do & How We Do It */}
      <section className="approach-section">
        <div className="container">
          <div className="approach-grid">
            <motion.div
              className="approach-block what-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="block-header">
                <h3 className="approach-title">What We Do</h3>
                <div className="header-line small"></div>
              </div>
              <p className="approach-text">
                We identify untapped land and unlock its potential by developing thriving communities, luxury residences, and iconic projects. Our expertise spans land banking, residential and commercial developments, and large-scale mixed-use projects designed for long-term growth.
              </p>
            </motion.div>

            <motion.div
              className="approach-block how-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="block-header">
                <h3 className="approach-title">How We Do It</h3>
                <div className="header-line small"></div>
              </div>
              <p className="approach-text">
                Every stage of real estate lives under one roof at XSquared—legal clarity, design, construction, brand strategy, and sales. With this integrated approach, we ensure precision, transparency, and value from the ground up, turning raw land into destinations with purpose.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* People & Culture */}
      <section className="culture-section">
        <div className="container">
          <motion.div
            className="culture-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-header">
              <h2 className="section-title">Our People & Culture</h2>
              <div className="header-line"></div>
            </div>
            <p className="culture-text">
              Behind every project is a team that combines vision with execution. From land strategists and architects to marketing leaders and financial experts, our people share one belief: real estate should deliver more than returns—it should deliver impact. We foster a culture of accountability, creativity, and trust, ensuring our clients and partners know they're in capable hands.
            </p>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
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
        .about-hero {
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
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-style: italic;
          color: #4E2520;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
          font-weight: 300;
        }

        /* Vision & Mission */
        .vision-mission {
          padding: 6rem 0;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .content-block {
          padding: 3rem;
          border-radius: 20px;
        }

        .vision-block {
          background: #F3793C;
        }

        .mission-block {
          background: #4E2520;
        }

        .block-header {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          gap: 1.5rem;
        }

        .block-title {
          color: #FFFFF3;
          font-size: 2rem;
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

        .header-line.small {
          flex: 0 0 60px;
        }

        .block-text {
          color: #FFFFF3;
          font-size: 1.1rem;
          line-height: 1.8;
          margin: 0;
          text-align: justify;
        }

        /* Purpose Section */
        .purpose-section {
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

        .purpose-text {
          color: #FFFFF3;
          font-family: 'Times New Roman', Georgia, serif;
          font-size: 1.8rem;
          font-style: italic;
          font-weight: 300;
          line-height: 1.8;
          margin: 0;
          text-align: center;
        }

        /* Approach Section */
        .approach-section {
          padding: 6rem 0;
        }

        .approach-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .approach-block {
          padding: 2.5rem;
          background: #FFFFF3;
          border: 2px solid #F3793C;
          border-radius: 20px;
        }

        .approach-title {
          color: #4E2520;
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin: 0;
        }

        .approach-text {
          color: #4E2520;
          font-size: 1rem;
          line-height: 1.7;
          margin: 0;
          text-align: justify;
        }

        /* Culture Section */
        .culture-section {
          padding: 6rem 0;
          background: #F3793C;
          border-radius: 20px;
          margin: 4rem 0;
        }

        .culture-text {
          color: #FFFFF3;
          font-size: 1.2rem;
          line-height: 1.8;
          margin: 0;
          text-align: justify;
          max-width: 900px;
          margin: 0 auto;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .content-grid,
          .approach-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-title {
            font-size: clamp(3rem, 5vw, 5rem);
          }

          .hero-description {
            font-size: clamp(1.3rem, 2vw, 1.8rem);
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 1.5rem;
          }

          .about-hero {
            padding: 4rem 0 3rem;
          }

          .vision-mission,
          .approach-section {
            padding: 4rem 0;
          }

          .purpose-section,
          .culture-section {
            padding: 4rem 0;
            margin: 3rem 0;
            border-radius: 16px;
          }

          .content-block {
            padding: 2rem;
          }

          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .block-header {
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

          .block-title {
            font-size: 1.5rem;
          }

          .purpose-text {
            font-size: 1.5rem;
            text-align: left;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .about-hero {
            padding: 3rem 0 2rem;
          }

          .hero-title {
            font-size: clamp(2.5rem, 4.5vw, 4rem);
          }

          .hero-description {
            font-size: clamp(1.1rem, 1.8vw, 1.5rem);
          }

          .content-block,
          .approach-block {
            padding: 1.5rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .block-title {
            font-size: 1.3rem;
          }

          .approach-title {
            font-size: 1.3rem;
          }

          .purpose-text {
            font-size: 1.3rem;
          }

          .culture-text {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default About