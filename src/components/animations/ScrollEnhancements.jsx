import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Scroll Progress Bar - like 49North's reading indicator
export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #4e2520, #F3793C)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 1000,
      }}
    />
  );
};

// Floating Scroll to Top Button - enhanced version
export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange(latest => {
      setIsVisible(latest > 300);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0
      }}
      whileHover={{ 
        scale: 1.1,
        backgroundColor: '#4e2520'
      }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: 'none',
        background: '#F3793C',
        color: 'white',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: 999,
        fontSize: '1.2rem',
        fontWeight: 'bold'
      }}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      ↑
    </motion.button>
  );
};

// Page Loading Animation - 49North style
export const PageLoader = ({ isLoading }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#fffef4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        pointerEvents: isLoading ? 'all' : 'none'
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
          scale: { duration: 1, repeat: Infinity, ease: 'easeInOut' }
        }}
        style={{
          width: '60px',
          height: '60px',
          border: '3px solid #F3793C',
          borderTop: '3px solid #4e2520',
          borderRadius: '50%'
        }}
      />
    </motion.div>
  );
};

// Parallax Background - for sections
export const ParallaxBackground = ({ 
  children, 
  speed = 0.5, 
  className = '',
  backgroundColor = 'transparent'
}) => {
  const { scrollY } = useScroll();
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    return scrollY.onChange(latest => {
      setOffsetY(latest * speed);
    });
  }, [scrollY, speed]);

  return (
    <motion.div
      className={className}
      style={{
        transform: `translateY(${offsetY}px)`,
        backgroundColor,
        willChange: 'transform'
      }}
    >
      {children}
    </motion.div>
  );
};