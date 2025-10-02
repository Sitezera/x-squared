import { useEffect, useState } from 'react';

// Smooth Scroll Hook - creates the fluid scrolling effect like 49North
export const useSmoothScroll = (pathname) => {
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

      // Disable scroll restoration
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }

      // Scroll to top on route change
      lenis.scrollTo(0, { immediate: true });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Store lenis instance globally for route changes
      window.lenisInstance = lenis;
    };

    initSmoothScroll();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  // Scroll to top when pathname changes
  useEffect(() => {
    const scrollToTop = () => {
      if (window.lenisInstance) {
        // Use Lenis scroll
        window.lenisInstance.scrollTo(0, { immediate: true, force: true });
      }
      // Always also use native scroll as backup
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Execute immediately
    scrollToTop();

    // Also execute after a small delay to ensure it works
    const timeoutId = setTimeout(scrollToTop, 10);

    return () => clearTimeout(timeoutId);
  }, [pathname]);
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