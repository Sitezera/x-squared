import React from 'react'
import { motion } from 'framer-motion'

const Team = () => {
  const teamMembers = [
    {
      name: "Naveen Reddy",
      position: "Co-Founder, New Acquisitions",
      description: "Drawing from his farming roots, Naveen has built a profound understanding of land value and potential. His foresight in acquisitions ensures XSquared consistently identifies and secures high-growth opportunities."
    },
    {
      name: "Nikhil Arora",
      position: "Founder, Strategic Investments",
      description: "With a background in economics and finance, Nikhil drives investment strategy, capital structuring, and risk-managed growth. His data-driven approach forms the financial backbone of XSquared's portfolio."
    },
    {
      name: "Sanket Shah",
      position: "Head of Design and Strategy",
      description: "Sanket translates consumer psychology and lifestyle trends into purposeful designs. His strategic lens ensures every project aligns with evolving market needs and long-term relevance."
    },
    {
      name: "Varun Mukherjee",
      position: "Founder Office",
      description: "Blending engineering and marketing expertise, Varun bridges strategy and execution at XSquared. As part of the Founder's Office, he drives key initiatives and communication that strengthens processes, and ensures cross-functional alignment. His focus on clarity, problem-solving, and data-driven decisions supports leadership in delivering consistent growth and market impact."
    }
  ]

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Our Team</h1>
            <p className="hero-description">
              XSquared's strength lies in the people who lead with vision and execute with precision. Each member of our leadership team brings deep expertise and a shared commitment to redefining real estate in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="team-section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="member-header">
                  <h3 className="member-name">{member.name}</h3>
                  <span className="member-position">{member.position}</span>
                </div>
                <p className="member-description">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="team-vision">
        <div className="container">
          <motion.div
            className="vision-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-header">
              <h2 className="section-title">Leadership Philosophy</h2>
              <div className="header-line"></div>
            </div>
            <p className="vision-text">
              Our leadership team combines decades of industry insight with innovative thinking to drive XSquared's mission. Together, we believe in creating more than real estate—we build lasting value, meaningful communities, and opportunities that generate impact for generations.
            </p>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .team-page {
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
        .team-hero {
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

        /* Team Section */
        .team-section {
          padding: 6rem 0;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 3rem;
          margin-top: 2rem;
        }

        .team-card {
          background: #FFFFF3;
          border: 2px solid #F3793C;
          border-radius: 20px;
          padding: 3rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(243, 121, 60, 0.15);
        }

        .team-card:nth-child(even) {
          border-color: #4E2520;
        }

        .member-header {
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(243, 121, 60, 0.2);
        }

        .team-card:nth-child(even) .member-header {
          border-bottom-color: rgba(78, 37, 32, 0.2);
        }

        .member-name {
          font-size: 1.8rem;
          font-weight: 600;
          color: #4E2520;
          margin: 0 0 0.5rem 0;
          line-height: 1.2;
        }

        .member-position {
          color: #F3793C;
          font-size: 1.1rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .team-card:nth-child(even) .member-position {
          color: #4E2520;
        }

        .member-description {
          color: #4E2520;
          font-size: 1.05rem;
          line-height: 1.7;
          margin: 0;
          text-align: justify;
          opacity: 0.85;
        }

        /* Vision Section */
        .team-vision {
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

        .header-line {
          flex: 1;
          height: 1px;
          background: #FFFFF3;
        }

        .vision-text {
          color: #FFFFF3;
          font-family: 'Times New Roman', Georgia, serif;
          font-size: 1.5rem;
          font-style: italic;
          font-weight: 300;
          line-height: 1.8;
          margin: 0;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .team-grid {
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

          .team-hero {
            padding: 4rem 0 3rem;
          }

          .team-section {
            padding: 4rem 0;
          }

          .team-vision {
            padding: 4rem 0;
            margin: 3rem 0;
            border-radius: 16px;
          }

          .team-card {
            padding: 2.5rem;
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

          .vision-text {
            font-size: 1.3rem;
            text-align: left;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .team-hero {
            padding: 3rem 0 2rem;
          }

          .team-card {
            padding: 2rem;
          }

          .member-name {
            font-size: 1.5rem;
          }

          .member-position {
            font-size: 1rem;
          }

          .member-description {
            font-size: 1rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .vision-text {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Team