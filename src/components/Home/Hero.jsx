import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const [touchStartY, setTouchStartY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const sectionRef = useRef(null)

  // Initial loading animation trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100) // Small delay to ensure smooth start
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleWheel = (e) => {
      if (isExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setIsExpanded(false)
        e.preventDefault()
      } else if (!isExpanded) {
        e.preventDefault()
        const scrollDelta = e.deltaY * 0.001
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1)
        setScrollProgress(newProgress)

        if (newProgress >= 1) {
          setIsExpanded(true)
        }
      }
    }

    const handleTouchStart = (e) => {
      setTouchStartY(e.touches[0].clientY)
    }

    const handleTouchMove = (e) => {
      if (!touchStartY) return

      const touchY = e.touches[0].clientY
      const deltaY = touchStartY - touchY

      if (isExpanded && deltaY < -20 && window.scrollY <= 5) {
        setIsExpanded(false)
        e.preventDefault()
      } else if (!isExpanded) {
        e.preventDefault()
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005
        const scrollDelta = deltaY * scrollFactor
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1)
        setScrollProgress(newProgress)

        if (newProgress >= 1) {
          setIsExpanded(true)
        }

        setTouchStartY(touchY)
      }
    }

    const handleTouchEnd = () => {
      setTouchStartY(0)
    }

    const handleScroll = () => {
      if (!isExpanded) {
        window.scrollTo(0, 0)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('touchstart', handleTouchStart, { passive: false })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [scrollProgress, isExpanded, touchStartY])

  // Calculate dynamic sizes and positions based on scroll progress
  const imageScale = 1 + scrollProgress * 0.5 // Scales from 1 to 1.5 (reduced from 2.8)
  const leftTextTranslate = scrollProgress * -200 // Moves left text further left
  const rightTextTranslate = scrollProgress * 200 // Moves right text further right
  const textOpacity = Math.max(0.3, 1 - scrollProgress * 0.7) // Fade out text slightly

  return (
    <motion.section
      className="hero"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="hero-container" ref={sectionRef}>
        {/* Left text - "Where Ideas" */}
        <motion.div
          className="hero-text-left"
          initial={{ x: -200, opacity: 0 }}
          animate={isLoaded ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0.25, 0.25, 0.25, 0.75]
          }}
          style={{
            transform: `translateX(${leftTextTranslate}px)`,
            opacity: isLoaded ? textOpacity : 0
          }}
        >
          <motion.h1
            className="hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            Where Ideas
          </motion.h1>
        </motion.div>

        {/* Center image */}
        <motion.div
          className="hero-image-container"
          initial={{ scale: 0.3, opacity: 0, y: 50 }}
          animate={isLoaded ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.3, opacity: 0, y: 50 }}
          transition={{
            duration: 1.4,
            delay: 0.2,
            ease: [0.25, 0.25, 0.25, 0.75]
          }}
          style={{
            transform: `scale(${imageScale}) translateY(${isLoaded ? 0 : 50}px)`,
            zIndex: 1
          }}
        >
          <motion.img
            src="/assets/hero image.png"
            alt="Minimalist interior with natural light"
            className="hero-img"
            initial={{ scale: 1.2, filter: "blur(10px)" }}
            animate={isLoaded ? { scale: 1, filter: "blur(0px)" } : { scale: 1.2, filter: "blur(10px)" }}
            transition={{ duration: 1.6, delay: 0.8 }}
          />

          {/* Overlay that fades out as image expands */}
          <motion.div
            className="image-overlay"
            initial={{ opacity: 0.8 }}
            animate={isLoaded ? { opacity: Math.max(0, 0.2 - scrollProgress * 0.2) } : { opacity: 0.8 }}
            transition={{ duration: 1, delay: 1.2 }}
            style={{
              opacity: isLoaded ? Math.max(0, 0.2 - scrollProgress * 0.2) : 0.8
            }}
          />
        </motion.div>

        {/* Right text - "Takes Shape" */}
        <motion.div
          className="hero-text-right"
          initial={{ x: 200, opacity: 0 }}
          animate={isLoaded ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.7,
            ease: [0.25, 0.25, 0.25, 0.75]
          }}
          style={{
            transform: `translateX(${rightTextTranslate}px)`,
            opacity: isLoaded ? textOpacity : 0
          }}
        >
          <motion.h1
            className="hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Takes Shape
          </motion.h1>
        </motion.div>

        {/* Scroll indicator */}
        {!isExpanded && (
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isLoaded && scrollProgress < 0.1 ? 1 : 0,
              y: isLoaded ? 0 : 20
            }}
            transition={{
              duration: 0.6,
              delay: isLoaded ? 2.0 : 0,
              ease: "easeOut"
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 2.2 }}
            >
              Scroll to explore
            </motion.p>
          </motion.div>
        )}
      </div>

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
          width: 40%;
          max-width: 550px;
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

        .image-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 0;
          pointer-events: none;
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
          right: 12%;
          bottom: 25%;
          z-index: 30;
          transition: transform 0.1s ease-out, opacity 0.1s ease-out;
        }

        .hero-title {
          font-family: 'Times New Roman', Georgia, serif;
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
        }

        .scroll-indicator p {
          margin: 0;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
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
            right: 8%;
            bottom: 28%;
          }

          .hero-title {
            font-size: clamp(2.5rem, 5vw, 4.5rem);
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            height: 100vh;
            min-height: 500px;
          }

          .hero-image-container {
            width: 60%;
            max-width: 400px;
          }

          .hero-text-left {
            left: 2%;
            top: 25%;
          }

          .hero-text-right {
            right: 3%;
            bottom: 22%;
          }

          .hero-title {
            font-size: clamp(2rem, 4.5vw, 3rem);
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding: 1rem;
          }

          .hero-container {
            height: 100vh;
            min-height: 450px;
          }

          .hero-image-container {
            width: 70%;
            max-width: 300px;
          }

          .hero-text-left {
            left: 0;
            top: 20%;
          }

          .hero-text-right {
            right: 0;
            bottom: 20%;
          }

          .hero-title {
            font-size: clamp(1.75rem, 4vw, 2.25rem);
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
    </motion.section>
  )
}

export default Hero