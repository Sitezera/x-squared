import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Home/Hero'
import Review from '../components/Home/Review'

const projects = [
  {
    id: 1,
    name: 'Amidst The Hill',
    logo: '/assets/1-AMIDST THE HILLS-01-01.png',
    link: '/amidst-the-hill',
    image: '/assets/1_1 - Photo.jpg',
    overview: 'Ultra-luxury villas 60 kilometers from Bengaluru, positioned at elevation with direct hill views. Amidst the Hills targets buyers seeking vacation homes or retirement properties in an area with limited high-end inventory. Gated community built for privacy, designed for appreciation. For those who want distance from the city without losing access to it.',
    reverse: false
  },
  {
    id: 2,
    name: 'Nava Kandwara',
    link: '/nava-kandwara',
    image: '/assets/View 1_Option 1.jpg',
    overview: 'Villas and villaments on 38 acres in Bengaluru\'s northern growth corridor. Kandhwara sits where infrastructure investment is moving, offering larger plots than city alternatives at better entry points. Designed for primary residences or long-term holds. For buyers who track development patterns, not just property listings.',
    reverse: true
  },
 
  {
    id: 3,
    name: 'Nava Harihara',
    link: '/nava-harihara',
    image: '/assets/WhatsApp Image 2025-11-21 at 20.39.10.jpeg',
    overview: 'A premium residential project spread across 4.5 and 27 acres in the scenic Nandi Hills region. Offers plotted developments and future-ready villas, crafted in phases for sustainable growth.',
    reverse: false
  }, {
    id: 4,
    name: 'Nava Manchanabelle',
    link: '/nava-manchanabelle',
    image: '/assets/Navamanchalle.png',
    overview: 'A plotted residential community designed for professionals and families. Strategically located near NH44 in Chikkaballapur, it combines accessibility with lifestyle convenience.',
    reverse: true
  },
  {
    id: 5,
    name: 'Premium Villaments',
    link: '#',
    image: '/assets/ATHimage.png',
    overview: 'Each project reflects our commitment to excellence, transforming visions into thriving realities. Explore what sets us apart—because every project tells a story of success.',
    reverse: false
  }
]

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

      {/* Projects Showcase Section */}
      <section className="projects-showcase">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`project-row ${project.reverse ? 'reverse' : ''}`}
          >
            {/* Content Side */}
            <motion.div 
              className="project-content"
              initial={{ opacity: 0, x: project.reverse ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="project-label">PROJECT</p>
              {project.logo ? (
                <a href={project.link} className="project-logo-link">
                  <img src={project.logo} alt={project.name} className="project-logo" />
                </a>
              ) : (
                <h1 className="project-title">
                  <a href={project.link}>{project.name}</a>
                </h1>
              )}
              <div className="project-desc">
                <h4>Overview</h4>
                <p>{project.overview}</p>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div 
              className="project-image-wrapper"
              initial={{ opacity: 0, x: project.reverse ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="image-container">
                <img src={project.image} alt={project.name} />
              </div>
            </motion.div>
          </div>
        ))}
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

        /* Projects Showcase Section */
        .projects-showcase {
          width: 100%;
          background: #E87438;
          padding: 6rem 0;
        }

        /* Project Row - Grid Layout for consistent sizing */
        .project-row {
          display: grid;
          grid-template-columns: 40% 60%;
          min-height: 75vh;
          align-items: center;
          margin-bottom: 4rem;
        }

        .project-row:last-child {
          margin-bottom: 0;
        }

        /* Reverse layout - swap columns */
        .project-row.reverse {
          grid-template-columns: 60% 40%;
        }

        /* Project Content */
        .project-content {
          padding: 4rem 3rem 4rem 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .project-row.reverse .project-content {
          order: 2;
          padding: 4rem 4rem 4rem 3rem;
        }

        /* Project Image Wrapper */
        .project-image-wrapper {
          padding: 2rem 6rem 2rem 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-row.reverse .project-image-wrapper {
          order: 1;
          padding: 2rem 2rem 2rem 6rem;
        }

        /* Image Container - Fixed aspect ratio */
        .image-container {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 0;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Typography */
        .project-label {
          font-family: 'Montserrat', sans-serif;
          text-transform: uppercase;
          font-weight: 900;
          letter-spacing: 2px;
          font-size: 0.9rem;
          margin: 0 0 1rem 0;
          color: #FFFFF3;
        }

        .project-title {
          font-family: 'TheSeasonsLight', 'The Seasons', 'Playfair Display', serif;
          font-size: 3.5rem;
          font-style: italic;
          margin: 0.5rem 0 1.5rem 0;
          line-height: 1.2;
          color: #FFFFF3;
        }

        .project-title a {
          color: inherit;
          text-decoration: none;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        .project-title a:hover {
          opacity: 0.85;
        }

        .project-logo-link {
          display: block;
          margin: 0.5rem 0 1.5rem 0;
        }

        .project-logo {
          max-width: 280px;
          height: auto;
          display: block;
          transition: opacity 0.3s ease;
        }

        .project-logo-link:hover .project-logo {
          opacity: 0.85;
        }

        .project-desc {
          margin-top: 1rem;
          font-family: 'MontserratSemiBold', 'Montserrat', Arial, sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          line-height: 1.7;
          color: #4e2520;
        }

        .project-desc h4 {
          font-weight: 700;
          margin: 0 0 0.75rem 0;
          color: #4e2520;
          font-size: 1rem;
        }

        .project-desc p {
          margin: 0;
          color: #4e2520;
        }

        /* Large Desktop Adjustments */
        @media (min-width: 1400px) {
          .project-content {
            padding: 4rem 4rem 4rem 6rem;
          }

          .project-row.reverse .project-content {
            padding: 4rem 6rem 4rem 4rem;
          }

          .project-image-wrapper {
            padding: 2rem 8rem 2rem 2rem;
          }

          .project-row.reverse .project-image-wrapper {
            padding: 2rem 2rem 2rem 8rem;
          }

          .project-title {
            font-size: 4rem;
          }

          .project-logo {
            max-width: 320px;
          }
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .projects-showcase {
            padding: 4rem 0;
          }

          .project-row,
          .project-row.reverse {
            grid-template-columns: 1fr;
            min-height: auto;
            margin-bottom: 3rem;
          }

          .project-content,
          .project-row.reverse .project-content {
            order: 1;
            padding: 2rem 3rem;
          }

          .project-image-wrapper,
          .project-row.reverse .project-image-wrapper {
            order: 2;
            padding: 0 3rem 2rem 3rem;
          }

          .project-title {
            font-size: clamp(2.5rem, 5vw, 3.5rem);
          }

          .project-label {
            font-size: 0.85rem;
          }

          .project-desc {
            font-size: 0.9rem;
          }

          .project-logo {
            max-width: 240px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .projects-showcase {
            padding: 3rem 0;
          }

          .project-row {
            margin-bottom: 2.5rem;
          }

          .project-content,
          .project-row.reverse .project-content {
            padding: 2rem 1.5rem 1rem 1.5rem;
          }

          .project-image-wrapper,
          .project-row.reverse .project-image-wrapper {
            padding: 0 1.5rem 2rem 1.5rem;
          }

          .project-label {
            font-size: 0.8rem;
            margin: 0 0 0.75rem 0;
          }

          .project-title {
            font-size: clamp(2rem, 6vw, 2.5rem);
            margin: 0.5rem 0 1.25rem 0;
          }

          .project-desc {
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .project-desc h4 {
            font-size: 0.95rem;
            margin-bottom: 0.5rem;
          }

          .project-logo {
            max-width: 200px;
          }

          .project-logo-link {
            margin: 0.25rem 0 1rem 0;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .projects-showcase {
            padding: 2rem 0;
          }

          .project-row {
            margin-bottom: 2rem;
          }

          .project-content,
          .project-row.reverse .project-content {
            padding: 1.5rem 1.25rem 0.75rem 1.25rem;
          }

          .project-image-wrapper,
          .project-row.reverse .project-image-wrapper {
            padding: 0 1.25rem 1.5rem 1.25rem;
          }

          .project-label {
            font-size: 0.75rem;
          }

          .project-title {
            font-size: clamp(1.75rem, 5.5vw, 2rem);
            margin: 0.5rem 0 1rem 0;
          }

          .project-desc {
            font-size: 0.85rem;
          }

          .project-desc h4 {
            font-size: 0.9rem;
          }

          .project-logo {
            max-width: 160px;
          }
        }
      `}</style>
    </div>
  )
}

export default Projects
