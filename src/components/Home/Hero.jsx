import React from 'react'
import { motion } from 'framer-motion'
import { TextReveal, ScaleInOnScroll } from '../animations/ScrollAnimations'
import { useSmoothScroll } from '../../hooks/useScrollAnimations'

const Hero = ({ isLoading = false, isFirstLoad = false }) => {
  // Enable smooth scrolling like 49North
  useSmoothScroll();

  // Animation variants for text tiles sliding like the orange boxes
  const leftTextVariants = {
    hidden: { 
      opacity: 1,
      x: '-100%', // Start off-screen left (same as orange boxes)
      y: 0,
      scale: 1
    },
    sliding: {
      opacity: 1,
      x: '50vw', // Slide across screen like orange boxes, but stop at center area
      y: 0,
      scale: 1,
      transition: {
        duration: isFirstLoad ? 1.1 : 0.8, // Match orange box duration
        delay: isFirstLoad ? 0.5 : 0.2, // Start with orange boxes
        ease: [0.76, 0, 0.24, 1], // Same easing as orange boxes
      }
    },
    visible: { 
      opacity: 1,
      x: 0, // Settle to final position
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: isFirstLoad ? 1.8 : 1.0, // After sliding motion completes
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
    immediate: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.1 }
    }
  };

  const rightTextVariants = {
    hidden: { 
      opacity: 1,
      x: '100%', // Start off-screen right (same as orange boxes)
      y: 0,
      scale: 1
    },
    sliding: {
      opacity: 1,
      x: '-50vw', // Slide across screen like orange boxes, but stop at center area
      y: 0,
      scale: 1,
      transition: {
        duration: isFirstLoad ? 1.1 : 0.8, // Match orange box duration
        delay: isFirstLoad ? 0.62 : 0.32, // Staggered like orange boxes
        ease: [0.76, 0, 0.24, 1], // Same easing as orange boxes
      }
    },
    visible: { 
      opacity: 1,
      x: 0, // Settle to final position
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: isFirstLoad ? 1.9 : 1.1, // After sliding motion completes
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
    immediate: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.1 }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.1, // Start very small
      y: 0,
      rotate: 0
    },
    sliding: {
      opacity: 0, 
      scale: 0.1, // Stay hidden during sliding phase
      y: 0,
      rotate: 0,
      transition: { duration: 0.1 }
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: isFirstLoad ? 1.6 : 1.0,
        delay: isFirstLoad ? 0.8 : 0.3, // After text tiles have settled
        ease: [0.25, 0.1, 0.25, 1],
        type: "spring",
        stiffness: 150,
        damping: 25
      }
    },
    immediate: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.1 }
    }
  };

  const containerVariants = {
    hidden: {},
    sliding: {
      transition: {
        staggerChildren: 0, // No stagger - each element has its own timing
        delayChildren: 0
      }
    },
    visible: {
      transition: {
        staggerChildren: 0, // No stagger - each element has its own timing
        delayChildren: 0
      }
    },
    immediate: {
      transition: { staggerChildren: 0, delayChildren: 0 }
    }
  };

  // Multi-stage animation sequence for first load
  const [animationStage, setAnimationStage] = React.useState(isFirstLoad ? "hidden" : "immediate");

  React.useEffect(() => {
    if (isFirstLoad) {
      // Stage 1: hidden → sliding (with orange boxes)
      setTimeout(() => setAnimationStage("sliding"), 500);
      // Stage 2: sliding → visible (settle into place)
      setTimeout(() => setAnimationStage("visible"), 1800);
    }
  }, [isFirstLoad]);

  const animationState = !isFirstLoad ? "immediate" : animationStage;

  return (
    <section className="hero" id="home">
      <motion.div 
        className="hero-container"
        initial="hidden"
        animate={animationState}
        variants={containerVariants}
      >
        {/* Left text - "Where Ideas" sliding from behind orange boxes */}
        <motion.div
          className="hero-text-left"
          variants={leftTextVariants}
        >
          <TextReveal 
            text="Where Ideas" 
            className="hero-title"
            delay={isFirstLoad ? 2.0 : 0.1} // Wait for slide to complete
            staggerDelay={0.1}
          />
        </motion.div>

        {/* Center image with scaling animation */}
        <motion.div
          className="hero-image-container"
          variants={imageVariants}
        >
          <ScaleInOnScroll delay={0} initialScale={1} threshold={1}>
            <picture>
              <source media="(max-width: 768px)" srcSet="/assets/heroMobile.svg" />
              <img
                src="/assets/hero image.png"
                alt="Minimalist interior with natural light"
                className="hero-img"
              />
            </picture>
          </ScaleInOnScroll>
        </motion.div>

        {/* Right text - "Takes Shape" sliding from behind orange boxes */}
        <motion.div
          className="hero-text-right"
          variants={rightTextVariants}
        >
          <TextReveal 
            text="Take Shape" 
            className="hero-title"
            delay={isFirstLoad ? 2.1 : 0.3} // Wait for slide to complete
            staggerDelay={0.1}
          />
        </motion.div>

        
      </motion.div>

      <style jsx>{`
        .hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #fffef4;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 2%;
        }

        .hero-container {
          position: relative;
          width: 100%;
          max-width: 1400px;
          height: 100vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-image-container {
          position: relative;
          width: 45%;
          max-width: 45%;
          height: auto;
          z-index: 1;
          border-radius: 0;
          overflow: hidden;
          transform-origin: center;
          transition: transform 0.1s ease-out;
        }

        .hero-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        
        .hero-text-left {
          position: absolute;
          left: 8%;
          top: 28%;
          z-index: 30;
          transition: transform 0.1s ease-out, opacity 0.1s ease-out;
        }

        .hero-text-right {
          position: absolute;
          right: 11%;
          bottom: 25%;
          z-index: 30;
          transition: transform 0.1s ease-out, opacity 0.1s ease-out;
        }

        .hero-title {
          font-family: 'TheSeasonsLight', Georgia, serif;
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 300;
          font-style: italic;
          color: #4e2520;
          line-height: 1;
          margin: 0;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          color: #4e2520;
          font-size: 1rem;
          font-style: italic;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .scroll-indicator:hover {
          transform: translateX(-50%) translateY(-5px);
          opacity: 0.8;
        }

        .scroll-indicator p {
          margin: 0;
          animation: fadeInOut 3s infinite;
          font-family: 'Times New Roman', Georgia, serif;
          font-weight: 300;
        }

        @keyframes fadeInOut {
          0%, 100% { opacity: 0.4; transform: translateY(0px); }
          50% { opacity: 1; transform: translateY(-3px); }
        }

        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .hero-image-container {
            width: 45%;
          }

          .hero-text-left {
            left: 5%;
            top: 30%;
          }

          .hero-text-right {
            right: 1%;
            bottom: 28%;
          }

          .hero-title {
            font-size: clamp(2.5rem, 5vw, 4.5rem);
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 0;
          }

          .hero-container {
            height: 100vh;
            min-height: 500px;
            flex-direction: column;
            justify-content: center;
            gap: 0;
          }

          .hero-image-container {
            width: 75%;
            max-width: none;
            position: relative;
            top: auto;
            left: auto;
            right: auto;
            bottom: auto;
            margin: 0 auto;
          }

          .hero-text-left {
            position: relative;
            left: 10%;
            top: auto;
            text-align: left;
            width: 100%;
            margin-bottom: 1.5rem;
          }

          .hero-text-right {
            position: relative;
            right: 10%;
            bottom: auto;
            text-align: right;
            width: 100%;
            margin-top: 1.5rem;
          }

          .hero-title {
            font-size: clamp(2.8rem, 8vw, 4rem);
            white-space: normal;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding: 0;
          }

          .hero-container {
            height: 100vh;
            min-height: 450px;
            padding: 1rem;
          }

          .hero-image-container {
            width: 100%;
          }

          .hero-text-left {
            margin-bottom: 1rem;
            left : 2% 
          }

          .hero-text-right {
            margin-top: 1rem;
            right : 2%;
          }

          .hero-title {
            font-size: clamp(2.8rem, 7vw, 3rem);
          }

          .scroll-indicator {
            font-size: 0.9rem;
            bottom: 8%;
          }
        }

        /* Prevent text selection during scroll interaction */
        .hero-container {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }
      `}</style>
    </section>
  )
}

export default Hero