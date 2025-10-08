import React from 'react'
import { motion } from 'framer-motion'
import { FadeInOnScroll, SlideInFromLeft, TextReveal, ScaleInOnScroll } from '../animations/ScrollAnimations'

const About = () => {
  // Create one continuous paragraph with inline images
  const textSegments = [
    { text: "At XSquared, we identify untapped land and transform it into thriving communities, luxury developments, ", image: "/assets/about 1.png" },
    { text: "and iconic spaces that create long term value. We bring every stage of real estate under one roof—from legal clarity and design to construction, brand strategy, and sales.", image: "/assets/about 2.png" },
    { text: "Our team combines deep industry expertise with a clear vision, ensuring projects are executed with transparency and precision.", image: "/assets/about 3.png" },
    { text: "We believe real estate is about unlocking possibilities and creating places people are proud to be part of.", image: "/assets/about 4.png" },
    { text: "Our mission is to turn vision into pride, transform land into lasting value, and leave a mark for generations.", image: "/assets/about 5.png" }
  ];

  return (
    <section className="about" id="about" aria-label="About XSquared">
      <div className="container">
        <div className="about-content">
          {/* Heading with 49North-style entrance */}
          <SlideInFromLeft delay={0.2} className="about-header">
            <div className="abouts-header">
              <TextReveal 
                text="ABOUT US" 
                className="abouts-label"
                delay={0.4}
                staggerDelay={0.05}
              />
              <motion.span 
                className="header-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
          </SlideInFromLeft>

          {/* Single continuous paragraph with inline images */}
          <FadeInOnScroll 
            delay={0.6}
            duration={0.8}
            yOffset={40}
            threshold={0.1}
            className="about-text"
          >
            <motion.p 
              className="text-italic continuous-paragraph"
              whileInView={{ 
                opacity: [0.7, 1],
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {textSegments.map((segment, index) => (
                <React.Fragment key={index}>
                  <span className="text-segment">{segment.text}</span>
                  {segment.image && (
                    <ScaleInOnScroll
                      delay={0.3 + (index * 0.1)}
                      initialScale={0.7}
                      className="inline-image-wrapper"
                    >
                      <motion.img
                        src={segment.image}
                        alt={`About illustration ${index + 1}`}
                        className="inline-image"
                        whileHover={{
                          scale: 2.8,
                          skewX: 0,
                          y: -15,
                          zIndex: 1000,
                          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)"
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25
                        }}
                      />
                    </ScaleInOnScroll>
                  )}
                  {index < textSegments.length - 1 && " "}
                </React.Fragment>
              ))}
            </motion.p>
          </FadeInOnScroll>
        </div>
      </div>
      <style jsx>{`
        .about {
          background : #F3793C;
          padding: 6% 0 6% 0 ;
          position: relative;
          overflow: visible;
          border-radius: 20px;
          margin: 2rem 0rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-content {
          width: 100%;
          padding: 0 2rem;
        }

        .about-header {
          margin-bottom: 3rem;
        }
         .abouts-header {
          display: flex;
          align-items: baseline;
          margin-bottom: 3rem;
          
        }
        .abouts-label {
          font-family: 'MontserratRegular';
          color: #FFFFF3;
          font-size: 1.4rem;
          font-weight: 600;
          letter-spacing: 2px;
          margin: 0;
          white-space: nowrap;
        }
        .header-line {
          flex: 0 0 200px;
          height: 1px;
          background: #FFFFF3;
        }
        .section-title {
          font-family: 'MontserratRegular';
          font-size: 0px;
          color: #FFFFF3;
          margin: 0;
          letter-spacing: 0.15em;
          text-align: left;
        }

        .about-text {
          color: white;
          max-width: 100%;
        }

        .text-block {
          display: block;
          margin-bottom: 0.3rem;
          line-height: 2.2;
          text-align: left;
        }

        .text-italic {
          font-family: 'TheSeasonsRegularL', Georgia, serif;
          font-style: italic;
          font-size: 1.8rem;
          line-height: 4rem;
          text-align: left;
          margin: 0;
        }

        .continuous-paragraph {
          display: block;
          margin: 0;
        }

        .text-segment {
          display: inline;
        }

        .image-wrapper {
          display: inline-block;
          vertical-align: middle;
          margin: 0 0rem;
          position: relative;
        }

        .inline-image {
          height: 3.5rem;
          width: 20rem;
          margin: 0 10px;
          border-radius: 5px;
          object-fit: cover;
          display: inline-block;
          vertical-align: middle;
          transform: skewX(-12deg);
          transform-origin: center center;
          cursor: pointer;
          position: relative;
          will-change: transform;
        }

        /* Enhanced animation classes for continuous paragraph */
        .continuous-paragraph:hover {
          opacity: 1;
        }

        .inline-image-wrapper {
          display: inline-block;
          vertical-align: middle;
          margin: 0 3px;
          line-height: 0;
          position: relative;
          z-index: 1;
          overflow: visible;
        }

        .inline-image-wrapper:hover {
          z-index: 1000;
        }

        .header-line {
          transform-origin: left;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .about {
            padding: 3.5rem 2.5rem;
          }

          .about-content {
            padding: 0 1.5rem;
          }

          .text-italic {
            font-size: 2rem;
          }

          .inline-image {
            height: 2.5rem;
            min-width: 3.5rem;
            max-width: 4.5rem;
          }
        }

        @media (max-width: 768px) {
          .about {
            padding: 2.5rem 1.5rem;
            margin: 1rem 0;
            border-radius: 15px;
          }

          .about-content {
            padding: 0;
          }

          .about-header {
            margin-bottom: 2rem;
          }

          .abouts-header {
            margin-bottom: 2rem;
          }

          .abouts-label {
            font-size: 1.2rem;
            letter-spacing: 1.5px;
          }

          .header-line {
            flex: 0 0 120px;
          }

          .text-italic {
            font-size: 1.2rem;
            line-height: 2.5rem;
            text-align: left;
          }

          .text-block {
            line-height: 2;
            margin-bottom: 0.2rem;
          }

          .inline-image {
            height: 2.8rem;
            width: 10rem;
            min-width: auto;
            max-width: none;
            transform: skewX(-8deg);
            border-radius: 5px;
            margin: 0 5px;
            cursor: pointer;
          }

          .inline-image-wrapper {
            margin: 0 2px;
          }
        }

        @media (max-width: 480px) {
          .about {
            padding: 2rem 1.25rem;
            margin: 0.5rem 0;
            border-radius: 12px;
          }

          .about-content {
            padding: 0;
          }

          .about-header {
            margin-bottom: 1.5rem;
          }

          .abouts-header {
            margin-bottom: 1.5rem;
          }

          .abouts-label {
            font-size: 1rem;
            letter-spacing: 1px;
          }

          .header-line {
            flex: 0 0 80px;
          }

          .text-italic {
            font-size: 1rem;
            line-height: 2.2rem;
          }

          .text-block {
            line-height: 1.8;
            margin-bottom: 0.15rem;
          }

          .inline-image {
            height: 2.5rem;
            width: 9rem;
            transform: skewX(-8deg);
            border-radius: 4px;
            margin: 0 4px;
            cursor: pointer;
          }

          .inline-image-wrapper {
            margin: 0 2px;
          }
        }

        /* Animation for images on scroll */
        @keyframes fadeInSkew {
          from {
            opacity: 0;
            transform: skewX(-12deg) translateY(10px);
          }
          to {
            opacity: 1;
            transform: skewX(-12deg) translateY(0);
          }
        }

        .inline-image {
          animation: fadeInSkew 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default About