import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeInOnScroll, SlideInFromLeft, SlideInFromRight, TextReveal, StaggerContainer, ScaleInOnScroll } from '../animations/ScrollAnimations'
import { useSwipeable } from 'react-swipeable';
import styles from './Services.module.css'

const Services = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)

  const services = [
    {
      icon: "/assets/service icon1.png",
      title: "PROJECT MANAGEMENT & CONSULTATION",
      text: "We provide structured project management and consultation services to streamline every stage of development. From planning to delivery, our approach combines foresight with disciplined execution to handle complexities effectively."
    },
    {
      icon: "/assets/service icon2.png",
      title: "PROJECT ENABLER",
      text: "We support projects from concept to completion, ensuring operational, financial, and legal requirements are met seamlessly. Acting as the backbone of execution, we help visions move forward with clarity and confidence."
    },
    {
      icon: "/assets/service icone 3.png",
      title: "END-TO-END PORTFOLIO MANAGEMENT",
      text: "Our portfolio management services cover the entire asset lifecycle—from acquisition and enhancement to divestment. With a focus on precision and long-term performance, we enable portfolios to achieve sustainable growth and maximum returns."
    }
  ]

  const handlePrevService = () => {
    setCurrentServiceIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1))
  }

  const handleNextService = () => {
    setCurrentServiceIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1))
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentServiceIndex((prev) => Math.min(prev + 1, services.length - 1)),
    onSwipedRight: () => setCurrentServiceIndex((prev) => Math.max(prev - 1, 0)),
    trackMouse: true,
  });

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.servicesContent}>
          {/* Hero Image and Title with 49North-style animations */}
          <div className={styles.servicesHero}>
            <div className={styles.heroContent}>
              <SlideInFromLeft delay={0.2} className={styles.titleWrapper}>
                <TextReveal 
                  text="Our Services" 
                  className={styles.servicesTitle}
                  delay={0.4}
                  staggerDelay={0.08}
                />
              </SlideInFromLeft>
              
              <FadeInOnScroll
                delay={0.6}
                duration={0.8}
                yOffset={30}
                className={styles.descriptionWrapper}
              >
                <p className={styles.servicesDescription}>
                  We are a real estate firm with over 15 years of expertise,
                  and our main goal is to provide amazing locations to our
                  partners and clients. Within the luxury real estate market,
                  our agency offers customized solutions.
                </p>
              </FadeInOnScroll>
            </div>
            
            <SlideInFromRight delay={0.8} distance={80} className={styles.heroImage}>
              <ScaleInOnScroll 
                delay={0.3}
                initialScale={0.9}
                threshold={0.2}
              >
                <motion.img 
                  src="/assets/WhatsApp Image 2025-11-14 at 17.52.14.jpeg" 
                  alt="Our Services" 
                  className={styles.serviceHeroImg}
                  style={{ aspectRatio: '4/3', width: '100%', height: 'auto', objectFit: 'cover' }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                  }}
                />
              </ScaleInOnScroll>
            </SlideInFromRight>
          </div>

          {/* Service Cards - Desktop Grid */}
          <StaggerContainer
            className={styles.servicesGrid}
            staggerDelay={0.15}
            threshold={0.1}
          >
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <ScaleInOnScroll delay={0.2} initialScale={0.8}>
                  <div className={styles.serviceIcon}>
                    <img src={service.icon} alt={service.title} className={styles.serviceIconImg} />
                  </div>
                </ScaleInOnScroll>

                <FadeInOnScroll delay={0.4} yOffset={20}>
                  <h3 className={styles.serviceName}>
                    {service.title}
                  </h3>
                </FadeInOnScroll>

                <FadeInOnScroll delay={0.6} yOffset={15}>
                  <p className={styles.serviceText}>
                    {service.text}
                  </p>
                </FadeInOnScroll>
              </div>
            ))}
          </StaggerContainer>

          {/* Service Cards - Mobile Carousel */}
          <div className={styles.servicesCarousel} {...handlers}>
            <div className={styles.carouselWrapper}>
              <div
                className={styles.carouselTrack}
                style={{
                  transform: `translateX(-${currentServiceIndex * 85}%)`
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`${styles.carouselCard} ${index === currentServiceIndex ? styles.activeCard : ''}`}
                    onClick={() => setCurrentServiceIndex(index)}
                  >
                    <div className={styles.serviceIcon}>
                      <img src={service.icon} alt={service.title} className={styles.serviceIconImg} />
                    </div>
                    <h3 className={styles.serviceName}>
                      {service.title}
                    </h3>
                    <p className={styles.serviceText}>
                      {service.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className={styles.carouselFade}></div>
            </div>

            {/* Carousel Indicators */}
            <div className={styles.carouselIndicators}>
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${index === currentServiceIndex ? styles.indicatorActive : ''}`}
                  onClick={() => setCurrentServiceIndex(index)}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services