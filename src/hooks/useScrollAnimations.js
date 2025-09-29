import { useEffect, useState } from 'react';

// Smooth Scroll Hook - creates the fluid scrolling effect like 49North
export const useSmoothScroll = () => {
  useEffect(() => {
    let lenis;
    
    const initSmoothScroll = async () => {
      const { default: Lenis } = await import('lenis');
      
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    initSmoothScroll();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);
};

// Scroll Progress Hook - tracks scroll progress for animations
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return scrollProgress;
};