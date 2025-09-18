import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const teamMembers = [
    {
      name: "Naveen Reddy",
      title: "Co-Founder and New Acquisitions",
      image: "/assets/naveen reddy.png"
    },
    {
      name: "Varun Mukherjee",
      title: "Founder and Strategic Investments",
      image: "/assets/varun mukherjee.png"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  return (
    <section className="team" id="team">
      <div className="container">
        <motion.div
          className="team-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
           <div className="teams-header">
            <h2 className="teams-label">OUR TEAM</h2>
            <div className="teams-line"></div>
          </div>
          <p className="team-description">
            Our team consists of industry leaders, skilled architects, marketing experts, and legal specialists - offering combined expertise with passion to bring your projects to life.
          </p>
        </motion.div>

        <div className="team-content">
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            <span>‹</span>
          </button>

          <div className="team-layout">
            {/* Naveen Reddy - Top Left Image */}
            <motion.div
              className="member-container naveen-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="member-image naveen-image">
                <img src="/assets/naveen reddy.png" alt="Naveen Reddy" className="team-photo" />
              </div>
              <div className="member-info naveen-info">
                <h3 className="member-name">Naveen Reddy</h3>
                <p className="member-title">Co-Founder and New Acquisitions</p>
              </div>
            </motion.div>

            {/* Varun Mukherjee - Bottom Right Image */}
            <motion.div
              className="member-container varun-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="member-info varun-info">
                <h3 className="member-name">Varun Mukherjee</h3>
                <p className="member-title">Founder and Strategic Investments</p>
              </div>
              <div className="member-image varun-image">
                <img src="/assets/varun mukherjee.png" alt="Varun Mukherjee" className="team-photo" />
              </div>
            </motion.div>
          </div>

          <button className="carousel-btn next-btn" onClick={nextSlide}>
            <span>›</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .team {
          background: #FFFFF3;
          padding: 6rem 0;
          position: relative;
        }

        .team-header {
          margin-bottom: 3rem;
        }
        .teams-header {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          gap: 1.5rem;
        }
        .teams-label {
          color: #F3793C;
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 2px;
          margin: 0;
          white-space: nowrap;
        }
        .teams-line {
          flex: 0 0 80px;
          height: 1px;
          background: #F3793C;
        }

        .section-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #F3793C;
          margin: 0 0 2rem 0;
          letter-spacing: 2px;
          text-align: left;
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          width: 80px;
          height: 2px;
          background-color: #F3793C;
          margin-left: 20px;
        }

        .team-description {
          font-size: 1rem;
          line-height: 1.6;
          color: #4E2520;
          margin: 0;
        }

        .team-content {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-btn {
          background: transparent;
          border: none;
          font-size: 3rem;
          color: #F3793C;
          cursor: pointer;
          padding: 0;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border-radius: 50%;
          position: absolute;
          z-index: 10;
        }

        .prev-btn {
          left: -80px;
        }

        .next-btn {
          right: -80px;
        }

        .carousel-btn:hover {
          background: rgba(243, 121, 60, 0.1);
          transform: scale(1.1);
        }

        .carousel-btn span {
          line-height: 1;
        }

        .team-layout {
          position: relative;
          width: 100%;
          height: 500px;
          max-width: 800px;
          margin: 0 auto;
        }

        .member-container {
          position: absolute;
        }

        .naveen-container {
          top: 0;
          left: 0;
        }

        .varun-container {
          bottom: 0;
          right: 0;
        }

        .member-image {
          width: 300px;
          height: 250px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(78, 37, 32, 0.15);
        }

        .naveen-image {
          position: relative;
        }

        .varun-image {
          position: relative;
        }

        .team-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .member-info {
          position: absolute;
        }

        .naveen-info {
          top: 50%;
          left: 320px;
          transform: translateY(-50%);
          text-align: left;
        }

        .varun-info {
          top: 50%;
          right: 320px;
          transform: translateY(-50%);
          text-align: right;
        }

        .member-name {
          font-family: 'Times New Roman', Times, serif;
          font-size: 2.2rem;
          font-weight: 400;
          font-style: italic;
          color: #4E2520;
          margin: 0 0 0.5rem 0;
          white-space: nowrap;
        }

        .member-title {
          font-size: 1rem;
          color: #F3793C;
          margin: 0;
          font-weight: 400;
          white-space: nowrap;
        }

        @media (max-width: 1200px) {
          .prev-btn {
            left: -60px;
          }
          
          .next-btn {
            right: -60px;
          }
        }

        @media (max-width: 1024px) {
          .team-grid {
            gap: 2rem;
          }

          .carousel-btn {
            font-size: 2.5rem;
            width: 50px;
            height: 50px;
          }

          .prev-btn {
            left: -40px;
          }
          
          .next-btn {
            right: -40px;
          }
        }

        @media (max-width: 768px) {
          .team {
            padding: 4rem 0;
          }

          .team-content {
            flex-direction: column;
            gap: 2rem;
          }

          .carousel-btn {
            display: none;
          }

          .team-layout {
            height: 600px;
            max-width: 400px;
          }

          .naveen-info {
            left: 0;
            top: 280px;
            text-align: center;
            width: 300px;
          }

          .varun-info {
            right: 0;
            top: 320px;
            text-align: center;
            width: 300px;
          }

          .member-image {
            width: 280px;
            height: 220px;
          }

          .member-name {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .team-layout {
            height: 550px;
            max-width: 320px;
          }

          .member-image {
            width: 250px;
            height: 200px;
          }

          .naveen-info {
            width: 250px;
            top: 230px;
          }

          .varun-info {
            width: 250px;
            top: 280px;
          }

          .member-name {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Team