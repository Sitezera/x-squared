import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      title: 'Yaravanakatte',
      description: 'We are a real estate firm with over 30 years of expertise, and our main goal is to provide amazing locations to our partners and clients.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      details: 'Each project reflects our commitment to excellence, transforming visions into thriving realities. Explore what sets us apart—because every project tells a story of success.'
    },
    {
      title: 'Sunset Heights',
      description: 'Premium residential complex offering modern living spaces with panoramic views and world-class amenities.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      details: 'A testament to architectural excellence and sustainable development, creating communities that thrive.'
    },
    {
      title: 'Garden Estates',
      description: 'Luxurious villa project combining contemporary design with natural landscapes for ultimate comfort.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      details: 'Where modern architecture meets serene landscapes, offering an unparalleled living experience.'
    }
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToProject = (index) => {
    setCurrentProject(index)
  }

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-label">LATEST PROJECT</h2>
          <div className="header-line"></div>
        </div>

        <div className="projects-content">
          <div className="project-info">
            <p className="project-intro">
              {projects[currentProject].details}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              className="project-showcase"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 
                className="project-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {projects[currentProject].title}
              </motion.h1>
              
              <motion.p 
                className="project-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {projects[currentProject].description}
              </motion.p>

              <motion.div 
                className="project-image-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.7 }}
              >
                <img 
                  src={projects[currentProject].image} 
                  alt={projects[currentProject].title}
                  className="project-image"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <button 
            className="nav-arrow nav-prev" 
            onClick={prevProject}
            aria-label="Previous project"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button 
            className="nav-arrow nav-next" 
            onClick={nextProject}
            aria-label="Next project"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="project-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentProject ? 'active' : ''}`}
                onClick={() => goToProject(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .projects {
           background: #F3793C;
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          margin: 0 0px;
          z-index : 10;
        }

        .projects::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 3rem;
          position: relative;
          z-index: 1;
        }

        .projects-header {
          display: flex;
          align-items: center;
          margin-bottom: 3rem;
          gap: 1.5rem;
        }

        .section-label {
          color: #FFFFF3;
          font-size: 0.875rem;
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

        .projects-content {
          position: relative;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .project-info {
          max-width: 400px;
        }

        .project-intro {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.875rem;
          line-height: 1.6;
          margin: 0 0 3rem 0;
          font-weight: 300;
          letter-spacing: 0.3px;
        }

        .project-showcase {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: center;
        }

        .project-title {
          font-family: 'Playfair Display', 'Times New Roman', serif;
          font-size: 4.5rem;
          font-weight: 300;
          font-style: italic;
          color: #FFFFF3;
          margin: 0 0 2rem 0;
          line-height: 0.9;
          letter-spacing: -2px;
          grid-column: 1;
        }

        .project-description {
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.95rem;
          line-height: 1.7;
          margin: 0;
          font-weight: 300;
          letter-spacing: 0.3px;
          max-width: 380px;
          grid-column: 1;
        }

        .project-image-container {
          grid-column: 2;
          grid-row: 1 / 3;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          background: #FFFFFF;
          padding: 4px;
        }

        .project-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 4px;
          aspect-ratio: 4/3;
          object-fit: cover;
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .nav-arrow:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-50%) scale(1.1);
        }

        .nav-prev {
          left: 2rem;
        }

        .nav-next {
          right: 2rem;
        }

        .project-dots {
          position: absolute;
          bottom: -2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.75rem;
          z-index: 10;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        .dot.active {
          background: #FFFFFF;
          width: 24px;
          border-radius: 4px;
        }

        @media (max-width: 1024px) {
          .projects-container {
            padding: 0 2rem;
          }

          .project-showcase {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }

          .project-title {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .projects {
            padding: 4rem 0;
          }

          .project-showcase {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .project-title {
            font-size: 3rem;
            margin-bottom: 1.5rem;
            grid-column: 1;
            grid-row: 1;
          }

          .project-description {
            grid-column: 1;
            grid-row: 2;
            margin-bottom: 2rem;
          }

          .project-image-container {
            grid-column: 1;
            grid-row: 3;
            max-width: 100%;
          }

          .nav-arrow {
            width: 40px;
            height: 40px;
          }

          .nav-prev {
            left: 1rem;
          }

          .nav-next {
            right: 1rem;
          }

          .project-dots {
            bottom: -3rem;
          }
        }

        @media (max-width: 480px) {
          .projects {
            padding: 3rem 0;
          }

          .projects-container {
            padding: 0 1.5rem;
          }

          .project-title {
            font-size: 2.5rem;
          }

          .project-description {
            font-size: 0.9rem;
          }

          .project-intro {
            font-size: 0.85rem;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects