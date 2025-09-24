import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projectCategories = [
    {
      title: "Luxury Villas",
      projects: [
        {
          name: "Amidst the Hills – Nandi Hills",
          size: "32 Acres",
          description: "A high-end villa development in the Nandi Hills region. Planned as an ultra-luxury gated community with panoramic hill views, it targets affluent buyers seeking vacation or retirement homes."
        },
        {
          name: "Kandhwara",
          size: "38 Acres",
          description: "A scenic development offering villaments and villas. Designed for seamless expansion, it taps into the rising demand around Nandi Hills with a mix of nature, space, and smart living."
        }
      ]
    },
    {
      title: "Residential & Plotted Developments",
      projects: [
        {
          name: "Kavaranahalli",
          size: "31.5 Acres",
          description: "A premium residential project spread across 4.5 and 27 acres in the scenic Nandi Hills region. Offers plotted developments and future-ready villas, crafted in phases for sustainable growth."
        },
        {
          name: "Yarappanahalli",
          size: "4 Acres",
          description: "A residential project featuring mid-rise apartments for professionals and families. Located near KIADB Hardware Park, it offers quality living in East Bangalore's fast-growing corridor."
        },
        {
          name: "Vemgal",
          size: "2 Acres",
          description: "A compact plotted development near Vemgal Industrial Area. Provides well-sized plots with essential infrastructure, ideal for building homes or making smart investments."
        },
        {
          name: "Manchanballe",
          size: "30 Acres",
          description: "A plotted residential community designed for professionals and families. Strategically located near NH44 in Chikkaballapur, it combines accessibility with lifestyle convenience."
        }
      ]
    },
    {
      title: "Integrated & Mixed-Use Townships",
      projects: [
        {
          name: "Ettakodi",
          size: "180 Acres",
          description: "A flagship self-sustained township envisioned as a 'city within a city.' It integrates residential, commercial, educational, healthcare, and recreational spaces to serve the region's long-term growth."
        },
        {
          name: "Coimbatore",
          size: "31 Acres",
          description: "A plotted residential development marking XSquared's expansion beyond Karnataka. Designed for Coimbatore's workforce and NRI investors, it combines essential amenities with investment security."
        }
      ]
    },
    {
      title: "Commercial Spaces",
      projects: [
        {
          name: "Bagalur",
          size: "60,000 sq. ft.",
          description: "A commercial development designed for tech and growing businesses. Strategically located near the airport and upcoming tech parks, it has scope for mixed-use expansion in North Bangalore's growth corridor."
        },
        {
          name: "Verlakonda",
          size: "52 Acres",
          description: "A mixed-use development with 12 acres dedicated to commercial space and 40 acres to residential plots. Planned to create a vibrant, self-sustained hub where living and working meet."
        }
      ]
    }
  ]

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Our Projects</h1>
            <p className="hero-description">
              From luxury villas and plotted communities to integrated townships and commercial hubs, our projects span across diverse categories, each designed to unlock land potential and create lasting value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Categories */}
      {projectCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`projects-category ${categoryIndex % 2 === 0 ? 'bg-light' : 'bg-dark'}`}>
          <div className="container">
            <motion.div
              className="category-header"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="category-title">{category.title}</h2>
              <div className="header-line"></div>
            </motion.div>

            <div className="projects-grid">
              {category.projects.map((project, projectIndex) => (
                <motion.div
                  key={projectIndex}
                  className="project-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: projectIndex * 0.2 }}
                >
                  <div className="project-header">
                    <h3 className="project-name">{project.name}</h3>
                    <span className="project-size">{project.size}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-header">
              <h2 className="section-title">Explore Investment Opportunities</h2>
              <div className="header-line"></div>
            </div>
            <p className="cta-text">
              Each project represents a carefully selected opportunity designed to maximize value and deliver long-term growth. From luxury developments to strategic commercial spaces, discover how our projects can become part of your investment portfolio.
            </p>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .projects-page {
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
        .projects-hero {
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

        /* Projects Categories */
        .projects-category {
          padding: 6rem 0;
        }

        .projects-category.bg-light {
          background: #FFFFF3;
        }

        .projects-category.bg-dark {
          background: #4E2520;
          border-radius: 20px;
          margin: 4rem 0;
        }

        .category-header {
          display: flex;
          align-items: center;
          margin-bottom: 4rem;
          gap: 2rem;
        }

        .category-title {
          font-size: 2.5rem;
          font-weight: 500;
          letter-spacing: 1px;
          margin: 0;
          white-space: nowrap;
        }

        .bg-light .category-title {
          color: #4E2520;
        }

        .bg-dark .category-title {
          color: #FFFFF3;
        }

        .header-line {
          flex: 1;
          height: 1px;
        }

        .bg-light .header-line {
          background: #4E2520;
        }

        .bg-dark .header-line {
          background: #FFFFF3;
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 3rem;
        }

        .project-card {
          padding: 2.5rem;
          border-radius: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .bg-light .project-card {
          background: #FFFFF3;
          border: 2px solid #F3793C;
        }

        .bg-dark .project-card {
          background: rgba(255, 255, 243, 0.1);
          border: 2px solid #F3793C;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(243, 121, 60, 0.2);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }

        .project-name {
          font-size: 1.4rem;
          font-weight: 600;
          margin: 0;
          line-height: 1.3;
          flex: 1;
        }

        .bg-light .project-name {
          color: #4E2520;
        }

        .bg-dark .project-name {
          color: #FFFFF3;
        }

        .project-size {
          background: #F3793C;
          color: #FFFFF3;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.85rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .project-description {
          font-size: 1rem;
          line-height: 1.7;
          margin: 0;
          text-align: justify;
        }

        .bg-light .project-description {
          color: #4E2520;
          opacity: 0.85;
        }

        .bg-dark .project-description {
          color: #FFFFF3;
          opacity: 0.9;
        }

        /* CTA Section */
        .projects-cta {
          padding: 6rem 0;
          background: #F3793C;
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

        .projects-cta .header-line {
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
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
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

          .projects-hero {
            padding: 4rem 0 3rem;
          }

          .projects-category {
            padding: 4rem 0;
          }

          .projects-category.bg-dark {
            margin: 3rem 0;
            border-radius: 16px;
          }

          .projects-cta {
            padding: 4rem 0;
            margin: 3rem 0;
            border-radius: 16px;
          }

          .category-header,
          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            margin-bottom: 3rem;
          }

          .header-line {
            width: 100%;
          }

          .category-title,
          .section-title {
            font-size: 2rem;
          }

          .project-card {
            padding: 2rem;
          }

          .project-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .project-size {
            align-self: flex-start;
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

          .projects-hero {
            padding: 3rem 0 2rem;
          }

          .project-card {
            padding: 1.5rem;
          }

          .project-name {
            font-size: 1.2rem;
          }

          .project-description {
            font-size: 0.95rem;
          }

          .category-title,
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

export default Projects