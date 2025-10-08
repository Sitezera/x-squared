import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Fade In Animation Component - similar to 49North's content reveals
export const FadeInOnScroll = ({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  yOffset = 30,
  className = '',
  threshold = 0.1,
  triggerOnce = true
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.1, 0.25, 1] // Smooth easing similar to 49North
      }}
    >
      {children}
    </motion.div>
  );
};

// Slide In From Left - for text blocks and images
export const SlideInFromLeft = ({ 
  children, 
  delay = 0, 
  duration = 0.8,
  distance = 60,
  className = '',
  threshold = 0.1 
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: -distance }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -distance }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

// Slide In From Right - for complementary content
export const SlideInFromRight = ({ 
  children, 
  delay = 0, 
  duration = 0.8,
  distance = 60,
  className = '',
  threshold = 0.1 
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: distance }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: distance }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

// Text Reveal Animation - word by word reveal like 49North
export const TextReveal = ({ 
  text, 
  delay = 0, 
  staggerDelay = 0.08,
  duration = 0.6,
  className = '',
  threshold = 0.1 
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  const words = text.split(' ');

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ 
            duration,
            delay: delay + (index * staggerDelay),
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

// Scale In Animation - for images and cards
export const ScaleInOnScroll = ({ 
  children, 
  delay = 0, 
  duration = 0.8,
  initialScale = 0.8,
  className = '',
  threshold = 0.1 
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: initialScale }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: initialScale }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

// Parallax Section - for background elements
export const ParallaxSection = ({ 
  children, 
  speed = 0.5, 
  className = '' 
}) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        transform: inView ? `translateY(${window.scrollY * speed}px)` : 'translateY(0px)',
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 40 }}
    >
      {children}
    </motion.div>
  );
};

// Stagger Container - for lists and grids
export const StaggerContainer = ({ 
  children, 
  staggerDelay = 0.1,
  className = '',
  threshold = 0.1 
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Smooth Page Transition Wrapper
export const PageTransition = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
};