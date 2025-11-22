import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Home/Hero'
import Review from '../components/Home/Review'

const Projects = () => {
  return (
    <div className="projects-page">
      {/* Hero Section */}
      <Hero 
        isLoading={false} 
        isFirstLoad={false} 
        leftText="Built on Vision" 
        rightText="Delivered with Trust"
        heroImage="/assets/Asset 20@2x.png"
        heroImageMobile="/assets/Asset 20@2x.png"
      />

      {/* All Projects Showcase - Single Container */}
      <section className="projects-showcase-section">
        
        {/* Project 1: Amidst The Hill - Text RIGHT, Image LEFT */}
        <div className="project-item">
          <motion.div 
            className="project-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="/assets/1_1 - Photo.jpg" alt="Amidst The Hill" />
          </motion.div>
          <motion.div 
            className="project-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="project-label">PROJECT</p>
            <h1 className="project-title">
              <a href="/amidst-the-hill">Amidst The Hill</a>
            </h1>
            <div className="project-desc">
              <h4>Overview</h4>
              <p>Ultra-luxury villas 60 kilometers from Bengaluru, positioned at elevation with direct hill views. Amidst the Hills targets buyers seeking vacation homes or retirement properties in an area with limited high-end inventory. Gated community built for privacy, designed for appreciation. For those who want distance from the city without losing access to it.</p>
            </div>
          </motion.div>
        </div>

        {/* Project 2: Nava Kandwara - Image LEFT, Text RIGHT (reverse) */}
        <div className="project-item reverse">
          <motion.div 
            className="project-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/assets/View 1_Option 1.jpg" alt="Nava Kandwara" />
          </motion.div>
          <motion.div 
            className="project-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="project-label cream-text">PROJECT</p>
            <h1 className="project-title cream-text">
              <a href="/nava-kandwara">Nava Kandwara</a>
            </h1>
            <div className="project-desc">
              <h4>Overview</h4>
              <p>Villas and villaments on 38 acres in Bengaluru's northern growth corridor. Kandhwara sits where infrastructure investment is moving, offering larger plots than city alternatives at better entry points. Designed for primary residences or long-term holds. For buyers who track development patterns, not just property listings.</p>
            </div>
          </motion.div>
        </div>

        {/* Project 3: Nava Manchanabelle - Text RIGHT, Image LEFT */}
        <div className="project-item">
          <motion.div 
            className="project-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="/assets/Navamanchalle.png" alt="Nava Manchanabelle" />
          </motion.div>
          <motion.div 
            className="project-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="project-label">PROJECT</p>
            <h1 className="project-title">
              <a href="/nava-manchanabelle">Nava Manchanabelle</a>
            </h1>
            <div className="project-desc">
              <h4>Overview</h4>
              <p>A plotted residential community designed for professionals and families. Strategically located near NH44 in Chikkaballapur, it combines accessibility with lifestyle convenience.</p>
            </div>
          </motion.div>
        </div>

        {/* Project 4: Nava Harihara - Image LEFT, Text RIGHT (reverse) */}
        <div className="project-item reverse">
          <motion.div 
            className="project-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/assets/WhatsApp Image 2025-11-21 at 20.39.10.jpeg" alt="Nava Harihara" />
          </motion.div>
          <motion.div 
            className="project-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="project-label cream-text">PROJECT</p>
            <h1 className="project-title cream-text">
              <a href="/nava-harihara">Nava Harihara</a>
            </h1>
            <div className="project-desc">
              <h4>Overview</h4>
              <p>A premium residential project spread across 4.5 and 27 acres in the scenic Nandi Hills region. Offers plotted developments and future-ready villas, crafted in phases for sustainable growth.</p>
            </div>
          </motion.div>
        </div>

        {/* Project 5: Premium Villaments - Text RIGHT, Image LEFT */}
        <div className="project-item">
          <motion.div 
            className="project-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="/assets/ATHimage.png" alt="Premium Villaments" />
          </motion.div>
          <motion.div 
            className="project-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="project-label">PROJECT</p>
            <h1 className="project-title">
              <a href="#">Premium Villaments</a>
            </h1>
            <div className="project-desc">
              <h4>Overview</h4>
              <p>Each project reflects our commitment to excellence, transforming visions into thriving realities. Explore what sets us apart—because every project tells a story of success.</p>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Review Section */}
      <Review />

      <style jsx>{`
        .projects-page {
          background: #FFFFF3;
          min-height: 100vh;
          padding-top: 80px;
          overflow-x: hidden;
        }

        /* Projects Showcase Section - Single Orange Container */
        .projects-showcase-section {
          width: 100%;
          background: #E87438;
          padding: 0;
          margin: 0;
          overflow-x: hidden;
        }

        /* Individual Project Item */
        .project-item {
          display: flex;
          align-items: center;
          min-height: 80vh;
          background: #E87438;
          margin-bottom: 4rem
        }

        /* Reverse layout for alternating design - Image on left */
        .project-item.reverse {
          flex-direction: row-reverse;
        }

        /* Project Content - Matches .right-column */
        .project-content {
          flex: 0.3;
          padding: 6rem 12rem;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* Project Image - Matches .left-column */
        .project-image {
          flex: 0.7;
          overflow: visible;
          height: 100vh;
          padding-left: 12rem;
          padding-top: 10rem;
        }

        /* Reverse layout: image on left - needs different padding */
        .project-item.reverse .project-image {
            padding-right: 12rem;
            padding-top: 0;
            padding-left: 0;
        }

        /* Base image styling */
        .project-image img {
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          display: block;
          margin-left: 0;
        }

        /* Reverse layout image - push right with margin */
        .project-item.reverse .project-image img {
          width: 100%;
          margin-top: -2rem;
        }

        /* Reverse layout content - pull up with negative margin */
        .project-item.reverse .project-content {
          padding-top: 0;
          margin-top: -24rem;
        }

        /* Overlapping sections for magazine effect */
        .project-item:nth-child(2) {
          margin-bottom: -40vh;
        }

        .project-item:nth-child(4) {
          margin-bottom: -20vh;
        }

        .project-item:nth-child(5) {
          margin-top: -20rem;
        }

        /* Typography - Exact match to old design */
        .project-label {
          font-family: 'Montserrat', sans-serif;
          text-transform: uppercase;
          font-weight: 900;
          letter-spacing: 2px;
          font-size: 0.9rem;
          margin: 0 0 1rem 0;
          color: #fffff3;
        }

        .project-label.cream-text {
          color: #FFFFF3;
        }

        .project-title {
          font-family: 'TheSeasonsLight', 'The Seasons', 'Playfair Display', serif;
          font-size: 4rem;
          font-style: italic;
          margin: 1rem 0 2rem 0;
          line-height: 1.2;
          color: #FFFFF3;
        }

        .project-title.cream-text {
          color: #FFFFF3;
        }

        .project-title a {
          color: inherit;
          text-decoration: none;
          cursor: pointer;
        }

        .project-title a:hover {
          color: inherit;
        }

        .project-desc {
          margin-top: 1rem;
          font-family: 'MontserratSemiBold', 'Montserrat', Arial, sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          line-height: 1.6;
          opacity: 0.95;
          color: #4e2520;
        }

        .project-desc h4 {
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: #4e2520;
        }

        .project-desc p {
          margin: 0;
          color: #4e2520;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          /* Neutralize overlapping for tablet */
          .project-item:nth-child(2),
          .project-item:nth-child(4) {
            margin-bottom: 0 !important;
          }

          .project-item:nth-child(5) {
            margin-top: 0 !important;
          }

          .project-item.reverse .project-content {
            margin-top: 0 !important;
          }

          .project-item {
            flex-direction: column !important;
            min-height: auto;
            padding: 3rem 2rem;
          }

          .project-content {
            flex: unset;
            width: 100%;
            padding: 0 0 2rem 0 !important;
          }

          .project-image {
            flex: unset;
            width: 100%;
            height: auto;
            padding: 0 !important;
          }

          .project-image img {
            width: 100% !important;
            margin: 0 !important;
          }

          .project-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
          }

          .project-label {
            font-size: 0.85rem;
          }

          .project-desc {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 768px) {
          .projects-showcase-section {
            padding: 0;
          }

          .project-item {
            flex-direction: column !important;
            padding: 0;
            min-height: auto;
            margin: 0 !important;
          }

          .project-content {
            order: 1;
            padding: 2.5rem 1.5rem 0 1.5rem !important;
            margin: 0 !important;
          }

          .project-image {
            order: 2;
            padding: 1.5rem 1.5rem 2.5rem 1.5rem !important;
            height: auto !important;
          }

          .project-image img {
            width: 100% !important;
            margin: 0 !important;
          }

          .project-label {
            font-size: 0.8rem;
            margin: 0 0 0.8rem 0 !important;
          }

          .project-title {
            font-size: clamp(1.8rem, 6vw, 2.5rem);
            margin: 0.5rem 0 1.5rem 0 !important;
          }

          .project-desc {
            font-size: 0.9rem;
            line-height: 1.5;
          }

          .project-desc h4 {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .project-content {
            padding: 2rem 1.25rem 0 1.25rem !important;
          }

          .project-image {
            padding: 1.25rem 1.25rem 2rem 1.25rem !important;
          }

          .project-label {
            font-size: 0.75rem;
          }

          .project-title {
            font-size: clamp(1.5rem, 5vw, 2rem);
            margin: 0.5rem 0 1.2rem 0 !important;
          }

          .project-desc {
            font-size: 0.85rem;
          }

          .project-desc h4 {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Projects
