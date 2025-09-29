// Performance optimization for 49North-style animations
import { useEffect } from 'react';

// Reduce motion for users who prefer it
export const useReducedMotion = () => {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (mediaQuery.matches) {
      // Disable complex animations for accessibility
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
      document.documentElement.style.setProperty('--animation-delay', '0s');
    }
  }, []);
};

// Optimize animations for mobile devices
export const useMobileOptimization = () => {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // Reduce animation complexity on mobile
      document.documentElement.style.setProperty('--mobile-animation-scale', '0.8');
      document.documentElement.style.setProperty('--mobile-animation-duration', '0.4s');
    }
  }, []);
};

// Intersection Observer optimization
export const useIntersectionObserver = (ref, options = {}) => {
  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      rootMargin: '50px',
      threshold: 0.1,
      ...options
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, options]);
};

// CSS for optimized animations
export const animationCSS = `
  .animate-in {
    animation-play-state: running !important;
  }
  
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.1s !important;
      animation-delay: 0s !important;
      transition-duration: 0.1s !important;
    }
  }

  @media (max-width: 768px) {
    .hero-text-left, .hero-text-right {
      animation-duration: var(--mobile-animation-duration, 0.4s) !important;
    }
  }

  /* Optimize for 60fps */
  .hero-image-container,
  .service-card,
  .about-text {
    will-change: transform, opacity;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }
`;