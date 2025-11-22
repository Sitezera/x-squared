  /* ...existing styles... */
import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Home/Hero'
import AboutSection from '../components/Home/About'

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <Hero 
        isLoading={false} 
        isFirstLoad={false} 
        leftText="Built on Vision." 
        rightText="Delivered with Trust"
        heroImage="/assets/Asset 20@2x.png"
        heroImageMobile="/assets/Asset 20@2x.png"
      />

      {/* About Section and Two Column Combined */}
      <div className="about-two-column-wrapper">
        <AboutSection />

        {/* Two Column Architectural Layout */}
        <section className="two-column-section">
          <div className="two-column-container">
            {/* Left Column - Image */}
            <motion.div 
              className="column-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/assets/Asset 7@2x.png" 
                alt="Architectural blueprints and drafting tools"
                className="column-image"
              />
            </motion.div>

            {/* Right Column - Content */}
            <motion.div 
              className="column-right"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="column-content">
                <p className="content-paragraph">
                  At XSquared, we believe that great real estate starts with vision and precision. Every project begins with careful planning, strategic site selection, and a commitment to excellence that shows in every detail.
                </p>
                <p className="content-paragraph">
                  Our integrated approach brings together legal expertise, architectural innovation, construction excellence, and strategic marketing—all under one roof to ensure seamless execution from concept to completion.
                </p>
                <p className="content-quote">
                  "We turn vision into reality—delivering thoughtfully planned, expertly executed spaces that inspire trust and elevate lifestyles."
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Two Column Architectural Layout - Image Right */}
      <section className="two-column-section">
        <div className="two-column-container-reverse">
          {/* Left Column - Content */}
          <motion.div 
            className="column-right"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="column-content">
              <p className="content-paragraph">
                Our commitment to excellence extends beyond just building structures—we create lasting value through strategic land identification, meticulous planning, and innovative design solutions that stand the test of time.
              </p>
              <p className="content-paragraph">
                With a focus on transparency and trust, we ensure every stakeholder—from investors to homeowners—experiences the highest standards of professionalism and quality throughout their journey with us.
              </p>
              <p className="content-quote">
                "Our passion is building communities where quality, transparency, and innovation come together—creating spaces that enrich lives and stand the test of time."
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="column-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/assets/Asset 6@2x.png" 
              alt="Modern architectural design"
              className="column-image"
            />
          </motion.div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="purpose-section">
        <div className="purpose-container">
          {/* Left Column - Image */}
          <motion.div 
            className="purpose-image-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/assets/IMG_3110 2.JPG" 
              alt="Our Purpose"
              className="purpose-image"
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="purpose-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="purpose-text">
              Our purpose is to create a real estate brand driven by a value system that houses transparency, accountability, sustainability, and creativity.
            </p>
          </motion.div>
        </div>
  <div className="purpose-bottom-line"></div>
  <div className="purpose-bottom-line-white"></div>
  <div className="purpose-bottom-line-brown"></div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .purpose-image-column {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .purpose-image {
            width: 90vw !important;
            margin: 2rem 0 !important;
            margin-left: 0 !important;
          }
        }
        @media (max-width: 768px) {
          .purpose-image-column {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .purpose-image {
            width: 90vw !important;
            margin: 2rem 0 !important;
            margin-left: 0 !important;
          }
        }
        .about-page {
          background: #FFFFF3;
        @media (max-width: 768px) {
          .about-page {
            background: #FFFFF3 !important;
          }
        }
          min-height: 100vh;
          padding-top: 80px;
        }

        .about-page :global(.about) {
          background: #E86C2A !important;
          margin: 0 !important;
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
          border-bottom-left-radius: 0 !important;
          border-bottom-right-radius: 0 !important;
        }

        .about-two-column-wrapper > :global(.about) {
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
        }

        .about-page :global(.about .about-content) {
          padding-bottom: 0 !important;
          margin-bottom: 0 !important;
        }

        .about-page :global(.about .container) {
          margin-bottom: 0 !important;
        }

        .about-two-column-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin: 0;
          padding: 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Two Column Architectural Section */
        .two-column-section {
          background: #FFFFF3;
          padding: 0;
          margin: 0;
          width: 100%;
        }

        .about-two-column-wrapper .two-column-section:first-of-type {
          margin-top: -8rem;
        }
        @media (max-width: 768px) {
          .about-two-column-wrapper .two-column-section:first-of-type {
            margin-top: 0 !important;
          }
        }

        .two-column-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          margin: 0;
          min-height: 600px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .two-column-container-reverse {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          margin: 0;
          min-height: 600px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .column-left {
          position: relative;
          overflow: hidden;
        }

        .column-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          object-position: center top;
        }

        .column-right {
          background: #FFF9F1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 5rem;
        }

        .column-content {
          max-width: 500px;
        }

        .content-paragraph {
          font-family: 'MontserratRegular', sans-serif;
          font-size: 1rem;
          line-height: 1.8;
          color: #3A2F2F;
          margin: 0 0 1.5rem 0;
          text-align: left;
          font-weight: bold;
        }

        .content-quote {
At XSquared, we identify untapped land and transform it into thriving communities, luxury developments, and iconic spaces that create long term value. We bring every stage of real estate under one roof—from legal clarity and design to construction, brand strategy, and sales. Our team combines deep industry expertise with a clear vision, ensuring projects are executed with transparency and precision. We believe real estate is about unlocking possibilities and creating places people are proud to be part of. Our mission is to turn vision into pride, transform land into lasting value, and leave a mark for generations.


          font-family: 'TheSeasonsRegular', serif;
          font-size: 2rem;
          line-height: 1.7;
          color: #E87438;
          margin: 2rem 0 1.5rem 0;
          text-align: left;
        }

        .read-more-link {
          font-family: 'MontserratRegular', 'Montserrat', sans-serif;
          font-size: 0.9rem;
          color: #E86C2A;
          text-decoration: underline;
          display: inline-block;
          transition: opacity 0.3s ease;
        }

        .read-more-link:hover {
          opacity: 0.7;
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
          font-family: 'TheSeasonsLight', serif;
          color: #FFFFF3;
          font-size: 2rem;
          font-weight: 300;
          font-style: italic;
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
          padding: 0;
          background: #4E2520;
          border-radius: 0;
          margin: 0 0 4rem 0;
          overflow: hidden;
        }
        .purpose-bottom-line {
          width: 100%;
          height: 3px;
          background: #FFFFF3;
          margin: 0 auto;
          border: none;
        }
        .purpose-bottom-line-white {
          width: 100%;
          height: 2px;
          background: #FFFFF3;
          margin: 12px auto 0 auto;
          border: none;
        }
        .purpose-bottom-line-orange {
          width: 100%;
          height: 3px;
          background: #FFFFF3;
          margin: 12px auto 0 auto;
          border: none;
        }
        .purpose-bottom-line-brown {
          width: 100%;
          height: 3px;
          background: #4E2520;
          margin: 4px auto 0 auto;
          border: none;
        }

        .purpose-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 700px;
        }

        .purpose-image-column {
          position: relative;
          overflow: visible;
          padding: 0;
          background: #4E2520;
        }

        .purpose-image {
          width: 80%;
          height: auto;
          object-fit: cover;
          display: block;
          aspect-ratio: 1/1;
          margin-left: 12rem;
          margin-top: 6rem;
          margin-bottom: 6rem;
        }

        .purpose-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 12rem;
        }

        .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 3rem;
          gap: 2rem;
        }

        .section-title {
          font-family: 'TheSeasonsLight', serif;
          color: #FFFFF3;
          font-size: 2.5rem;
          font-weight: 300;
          font-style: italic;
          letter-spacing: 1px;
          margin: 0;
          white-space: nowrap;
        }

        .purpose-text {
          color: #FFFFF3;
          font-family: 'Montserrat', sans-serif;
          font-size: 1.4rem;
          font-style: normal;
          font-weight: 300;
          line-height: 1.8;
          margin: 0;
          text-align: left;
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
          font-family: 'TheSeasonsLight', serif;
          color: #4E2520;
          font-size: 1.5rem;
          font-weight: 300;
          font-style: italic;
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

          .two-column-container,
          .two-column-container-reverse {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .column-left {
            min-height: 300px;
          }

          .column-right {
            padding: 2rem 1.5rem;
          }

          .content-paragraph {
            font-size: 0.95rem;
          }

          .content-quote {
            font-size: 1rem;
            margin: 1.5rem 0 1rem 0;
            color: #E87438;
          }

          .about-hero {
            padding: 2rem 0 1.5rem;
          }

          .vision-mission,
          .approach-section {
            padding: 2.5rem 0;
          }

          .purpose-section,
          .culture-section {
            border-radius: 16px;
          }

          .purpose-container {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .purpose-image-column {
            min-height: 250px;
          }

          .purpose-content {
            padding: 2rem 1.5rem;
          }

          .culture-section {
            padding: 4rem 0;
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
            padding: 1.5rem 0 1rem;
          }

          .hero-title {
            font-size: clamp(2.5rem, 4.5vw, 4rem);
          }

          .hero-description {
            font-size: clamp(1.1rem, 1.8vw, 1.5rem);
          }

          .content-block,
          .approach-block {
            padding: 1.25rem;
          }

          .column-right {
            padding: 1.5rem 1rem;
          }

          .vision-mission,
          .approach-section {
            padding: 2rem 0;
          }

          .purpose-section,
          .culture-section {
          padding-top: 2rem;
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