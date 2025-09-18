import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'OUR TEAM', href: '#team' },
    { name: 'RESOURCE', href: '#resource' },
    { name: 'CONTACT US', href: '#contact' }
  ]

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <h2><span className="x-orange">X</span> SQUARED</h2>
          </div>

          <div className="nav-links desktop-nav">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-link"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="mobile-nav-link"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 2%;
          background: transparent;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(255, 254, 244, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
          padding : 1% 1%;
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .logo h2 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #4E2520;
          margin: 0;
          letter-spacing: 1px;
        }

        .x-orange {
          color: #f3793c;
          font-weight: 700;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
        }

        .nav-link {
          text-decoration: none;
          color: #4E2520;
          font-weight: 400;
          font-size: 0.9rem;
          transition: color 0.3s ease;
          letter-spacing: 0.5px;
        }

        .nav-link:hover {
          color: #f3793c;
        }

        .mobile-menu-toggle {
          display: none;
          cursor: pointer;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          width: 24px;
          height: 18px;
          justify-content: space-between;
        }

        .hamburger span {
          width: 100%;
          height: 2px;
          background: #4E2520;
          transition: all 0.3s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        .mobile-nav {
          display: none;
          padding: 1rem 0;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        .mobile-nav-link {
          display: block;
          text-decoration: none;
          color: #4E2520;
          font-weight: 400;
          font-size: 1rem;
          padding: 0.75rem 0;
          transition: color 0.3s ease;
          letter-spacing: 0.5px;
        }

        .mobile-nav-link:hover {
          color: #f3793c;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .mobile-nav {
            display: block;
          }

          .logo h2 {
            font-size: 1.25rem;
          }

          .nav-links {
            gap: 1.5rem;
          }
        }
      `}</style>
    </motion.nav>
  )
}

export default Navbar