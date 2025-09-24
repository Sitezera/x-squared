import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          service: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* Contact Form Section */}
        <div className="footer-content">
          <div className="contact-section">
            <h2 className="section-title">Business Solutions</h2>
            <p className="section-subtitle">Let's bring your real estate vision to life.</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Web3Forms Access Key - Hidden Field */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="status-message success">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="status-message error">
                  Something went wrong. Please try again.
                </div>
              )}

              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  disabled={isSubmitting}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Id*"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-row">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select Type of Services</option>
                  <option value="project-management">Project Management</option>
                  <option value="consultation">Consultation</option>
                  <option value="portfolio">Portfolio Management</option>
                  <option value="enabler">Project Enabler</option>
                </select>
              </div>
              
              <div className="form-row">
                <textarea
                  name="message"
                  placeholder="Type Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="form-textarea"
                  disabled={isSubmitting}
                />
              </div>
              
              <motion.button
                type="submit"
                className="submit-button"
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SENDING...' : 'SUBMIT'}
              </motion.button>
            </form>
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            <div className="links-column">
              <h3 className="column-title">EXPLORE</h3>
              <ul className="link-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/projects">All Projects</Link></li>
                <li><Link to="/team">Our Team</Link></li>
                <li><Link to="/services">Services</Link></li>
              </ul>
            </div>

            <div className="links-column">
              <h3 className="column-title">USEFUL LINKS</h3>
              <ul className="link-list">
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/projects">Featured Projects</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/team">Leadership</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-brand">
            <div className="brand-logo">
              <img src="/assets/Layer 47.svg" alt="XSquared Logo" className="footer-logo-image" />
            </div>
            <p className="brand-description">
              XSquared transforms land into high-value assets with precision, strategy, and vision.
            </p>
            
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="social-icon">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </a>
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-contact">
            <h3 className="contact-title">GET IN TOUCH</h3>
            <p className="contact-address">
              No.5EC-702, HRBR Layout 2nd Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043
            </p>
            <div className="contact-info">
              <a href="tel:+919001315531" className="contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                +91 90013 15531
              </a>
              <a href="mailto:Varun.xsquared@gmail.com" className="contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Varun.xsquared@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #FFFFF3;
          padding: 5rem 0 3rem;
          position: relative;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 3rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 6rem;
          margin-bottom: 5rem;
        }

        .section-title {
          font-size: 2.5rem;
          color: #4E2520;
          margin: 0 0 1rem 0;
          font-weight: 500;
        }

        .section-subtitle {
          color: #4E2520;
          font-size: 0.95rem;
          margin: 0 0 2.5rem 0;
          opacity: 0.8;
        }

        .contact-form {
          max-width: 500px;
        }

        .status-message {
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          text-align: center;
          font-weight: 500;
        }

        .status-message.success {
          background-color: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .status-message.error {
          background-color: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .form-row:nth-child(2),
        .form-row:nth-child(3) {
          grid-template-columns: 1fr;
        }

        .form-input,
        .form-select,
        .form-textarea {
          padding: 0.875rem 1rem;
          border: 1px solid rgba(78, 37, 32, 0.2);
          border-radius: 24px;
          background: #FFFFFF;
          color: #4E2520;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          outline: none;
          width: 100%;
        }

        .form-input::placeholder,
        .form-select,
        .form-textarea::placeholder {
          color: rgba(78, 37, 32, 0.5);
        }

        .form-select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23F3793C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.2rem;
          padding-right: 2.5rem;
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
          font-family: inherit;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          border-color: #F3793C;
          background: #FFFFFF;
        }

        .submit-button {
          background: #4E2520;
          color: #FFFFFF;
          padding: 0.875rem 2.5rem;
          border: none;
          border-radius: 24px;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .submit-button:hover {
          background: #3A1D19;
        }

        .submit-button:disabled {
          background: #ccc;
          color: #666;
          cursor: not-allowed;
          opacity: 0.6;
        }

        .submit-button:disabled:hover {
          background: #ccc;
          transform: none;
        }

        .footer-links {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .column-title {
          color: #4E2520;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          margin: 0 0 1.5rem 0;
        }

        .link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .link-list li {
          margin-bottom: 0.875rem;
        }

        .link-list a {
          color: #4E2520;
          text-decoration: none;
          font-size: 0.9rem;
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .link-list a:hover {
          opacity: 1;
          color: #F3793C;
        }

        .footer-bottom {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(78, 37, 32, 0.1);
        }

        .brand-logo {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .footer-logo-image {
          height: 45px;
          width: auto;
          max-width: 180px;
        }

        .brand-description {
          color: #4E2520;
          font-size: 0.875rem;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
          opacity: 0.7;
          max-width: 300px;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(78, 37, 32, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4E2520;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: #F3793C;
          border-color: #F3793C;
          color: #FFFFFF;
        }

        .contact-title {
          color: #4E2520;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          margin: 0 0 1.5rem 0;
        }

        .contact-address {
          color: #4E2520;
          font-size: 0.875rem;
          line-height: 1.6;
          margin: 0 0 1.5rem 0;
          opacity: 0.7;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }

        .contact-link {
          color: #4E2520;
          text-decoration: none;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .contact-link:hover {
          opacity: 1;
          color: #F3793C;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
          }

          .footer-bottom {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 4rem 0 2rem;
          }

          .footer-container {
            padding: 0 2rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .form-row:first-child {
            grid-template-columns: 1fr;
          }

          .footer-links {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 3rem 0 2rem;
          }

          .footer-container {
            padding: 0 1.5rem;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .footer-content {
            gap: 3rem;
          }

          .footer-links {
            gap: 2rem;
          }

          .column-title {
            font-size: 0.8rem;
          }

          .link-list a {
            font-size: 0.85rem;
          }

          .social-links {
            gap: 0.75rem;
          }

          .social-icon {
            width: 32px;
            height: 32px;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer