import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HomePageLoader = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Allow time for text tiles to get into position behind boxes
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Call onComplete after boxes have slid out
      setTimeout(() => {
        onComplete();
      }, 1000); 
    }, 1500); // Longer delay to coordinate with Hero text movement

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Variants for the orange boxes
  const boxVariants = {
    initial: { 
      x: '-100%',
      scaleY: 1
    },
    animate: { 
      x: '100vw',
      transition: {
        duration: 1.1, // Longer to show text movement behind
        ease: [0.76, 0, 0.24, 1], // Smoother easing
      }
    }
  };

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.12, // Slightly slower stagger to see text movement
        delayChildren: 0.5, // More delay to let text get into position
      }
    }
  };

  // Add a subtle logo/text reveal during the animation
  const logoVariants = {
    initial: { 
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    animate: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2, // Earlier appearance
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      y: -10,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.3, delay: 0.5 }
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9999,
            pointerEvents: 'none',
            overflow: 'hidden'
          }}
        >
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              position: 'relative',
              width: '100%',
              height: '100%'
            }}
          >
            {/* First orange box */}
            <motion.div
              variants={boxVariants}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                height: '33.33vh',
                backgroundColor: '#F3793C',
                zIndex: 3
              }}
            />
            
            {/* Second orange box */}
            <motion.div
              variants={boxVariants}
              style={{
                position: 'absolute',
                top: '33.33vh',
                left: 0,
                width: '100vw',
                height: '33.33vh',
                backgroundColor: '#F3793C',
                zIndex: 2
              }}
            />
            
            {/* Third orange box */}
            <motion.div
              variants={boxVariants}
              style={{
                position: 'absolute',
                top: '66.66vh',
                left: 0,
                width: '100vw',
                height: '33.34vh',
                backgroundColor: '#F3793C',
                zIndex: 1
              }}
            />
            
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HomePageLoader;