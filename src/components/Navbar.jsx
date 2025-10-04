import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'OUR TEAM', href: '/team' },
    { name: 'SERVICES', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'CONTACT US', href: '/contact' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="logo" aria-label="XSquared Home">
              <img
                src="/assets/Layer 47.svg"
                alt="XSquared Logo"
                className="logo-image"
              />
            </Link>

            <div className="desktop-nav">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`desktop-nav-link ${location.pathname === item.href ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <button
              className="hamburger-button"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <img
                src="/assets/hamburger.svg"
                alt=""
                className="hamburger-icon"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className="menu-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="menu-header">
                <Link to="/" className="menu-logo">
                  <img
                    src="/assets/Layer 47.svg"
                    alt="XSquared Logo"
                    className="menu-logo-image"
                  />
                </Link>
                <button
                  className="close-button"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="#4E2520" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <nav className="menu-nav" aria-label="Main navigation">
                <ul className="menu-list">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      className="menu-item"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                    >
                      <Link
                        to={item.href}
                        className={`menu-link ${location.pathname === item.href ? 'active' : ''}`}
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        /* Navbar Styles */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 0.5rem 2rem;
          background: transparent;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(255, 254, 244, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        .nav-content {
          display: flex;
          align-items: center;
          padding: 0.5rem 0;
        }

        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          z-index: 10;
        }

        .logo-image {
          height: 6vh;
          width: auto;
          max-width: 180px;
          transition: transform 0.3s ease;
        }

        .logo:hover .logo-image {
          transform: scale(1.05);
        }

        .hamburger-button {
              background: none;
    border: none;
    cursor: pointer;
    padding: 0px 2rem;
    display: block;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
    z-index: 10;
    margin-top: 1%;
        }

        @media (max-width: 768px) {
          .hamburger-button {
            display: flex;
          }
        }

        .hamburger-button:hover {
          transform: scale(1.1);
        }

        .hamburger-button:focus-visible {
          outline: 2px solid #f3793c;
          outline-offset: 4px;
          border-radius: 4px;
        }

        .hamburger-icon {
          width: 42px;
          height: auto;
          display: block;
        }

        .desktop-nav {
          display: flex;
          gap: 2rem;
          align-items: center;
          margin-left: 15rem;
        }

        .desktop-nav-link {
          text-decoration: none;
          color: #4E2520;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
          transition: color 0.3s ease;
          white-space: nowrap;
        }

        .desktop-nav-link:hover,
        .desktop-nav-link.active {
          color: #f3793c;
        }

        /* Menu Backdrop */
        .menu-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1100;
          backdrop-filter: blur(2px);
        }

        /* Menu Panel */
        .menu-panel {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 450px;
          background: #FFFFF3;
          z-index: 1200;
          overflow-y: auto;
          box-shadow: -5px 0 30px rgba(0, 0, 0, 0.15);
        }

        .menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 2.5rem;
          border-bottom: 1px solid rgba(78, 37, 32, 0.1);
        }

        .menu-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .menu-logo-image {
          height: 40px;
          width: auto;
        }

        .close-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
          border-radius: 50%;
        }

        .close-button:hover {
          transform: rotate(90deg);
          background: rgba(243, 121, 60, 0.1);
        }

        .close-button:focus-visible {
          outline: 2px solid #f3793c;
          outline-offset: 2px;
        }

        .menu-nav {
          padding: 3rem 0;
        }

        .menu-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        .menu-item {
          margin: 0;
          padding: 0;
        }

        .menu-link {
          display: flex;
          align-items: center;
          padding: 1.25rem 2.5rem;
          text-decoration: none;
          color: #4E2520;
          font-weight: 500;
          font-size: 1.5rem;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          border-left: 4px solid transparent;
          position: relative;
        }

        .menu-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 0;
          background: rgba(243, 121, 60, 0.05);
          transition: width 0.3s ease;
        }

        .menu-link:hover::before,
        .menu-link.active::before {
          width: 100%;
        }

        .menu-link:hover,
        .menu-link.active {
          color: #f3793c;
          border-left-color: #f3793c;
          padding-left: 3rem;
        }

        .menu-link:focus-visible {
          outline: 2px solid #f3793c;
          outline-offset: -2px;
        }

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .desktop-nav {
            gap: 2rem;
          }

          .desktop-nav-link {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 1rem 1.5rem;
          }

          .nav-content {
            padding: 0;
          }

          .logo-image {
            height: 40px;
            max-width: 140px;
          }

          .hamburger-button {
            padding: 0.25rem;
            margin-left: auto;
          }

          .hamburger-icon {
            width: 28px;
          }

          .desktop-nav {
            display: none;
          }

          .menu-panel {
            max-width: 100%;
          }

          .menu-header {
            padding: 1.5rem 2rem;
          }

          .menu-logo-image {
            height: 35px;
          }

          .menu-nav {
            padding: 2rem 0;
          }

          .menu-link {
            padding: 1rem 2rem;
            font-size: 1.3rem;
          }

          .menu-link:hover,
          .menu-link.active {
            padding-left: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 0.875rem 1.25rem;
          }

          .logo-image {
            height: 36px;
            max-width: 120px;
          }

          .hamburger-button {
            padding: 0.25rem;
          }

          .hamburger-icon {
            width: 26px;
          }

          .menu-header {
            padding: 1.25rem 1.5rem;
          }

          .menu-logo-image {
            height: 30px;
          }

          .menu-nav {
            padding: 1.5rem 0;
          }

          .menu-link {
            padding: 0.875rem 1.5rem;
            font-size: 1.1rem;
            letter-spacing: 0.5px;
          }

          .menu-link:hover,
          .menu-link.active {
            padding-left: 2rem;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .navbar,
          .logo-image,
          .hamburger-button,
          .menu-link,
          .close-button {
            transition: none;
          }
        }

        /* Print styles */
        @media print {
          .navbar {
            position: static;
            background: white;
            box-shadow: none;
          }

          .hamburger-button {
            display: none;
          }

          .menu-backdrop,
          .menu-panel {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar