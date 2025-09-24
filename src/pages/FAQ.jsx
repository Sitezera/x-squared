import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "Is the land legally clear and verified?",
      answer: "Yes. All our projects undergo thorough title verification, compliance checks, and regulatory clearances before launch."
    },
    {
      question: "What type of developments does XSquared focus on?",
      answer: "We focus on developments that maximize the value of land — from luxury villas and plotted communities to integrated townships and commercial hubs. Clients are given flexibility in choosing the type of construction they prefer. Every project is driven by transparency and supported by cutting-edge technology."
    },
    {
      question: "How does XSquared ensure project timelines are met?",
      answer: "Our in-house project management teams (PMCs, CMCs, and quality auditors) oversee execution at every stage. With upfront approvals and proactive liaisoning, we minimize delays and keep projects on schedule."
    },
    {
      question: "What makes XSquared different from other developers?",
      answer: "We don't chase square footage sales. Instead, we prioritize green spaces, transparent communication, and sustainable planning. Every detail is conveyed to customers clearly, ensuring trust at every step."
    },
    {
      question: "Can I visit completed or ongoing projects?",
      answer: "Yes. Site visits can be arranged for both completed and under-development projects. This allows clients to assess quality and transparency firsthand."
    },
    {
      question: "How are amenities and infrastructure maintained?",
      answer: "Each project has defined maintenance systems, managed either by in-house teams or specialized facility management partners. A dedicated property management team ensures long-term upkeep."
    },
    {
      question: "Does XSquared assist with financing?",
      answer: "Yes. We collaborate with leading financial institutions to support buyers with home loans, tailored investment structures, and financing options."
    },
    {
      question: "What is the resale or exit process for investors?",
      answer: "Our End-to-End Asset and Wealth Management covers acquisition, growth, and ROI. Investors are offered structured exit options that maximize returns. We treat investor capital with the same care as our own, offering customized, tax-efficient solutions."
    },
    {
      question: "Are your projects aligned with sustainability standards?",
      answer: "Yes. Our design and construction practices prioritize sustainability, efficient resource use, and environmentally responsible planning."
    },
    {
      question: "How can I become an investor with XSquared?",
      answer: "We conduct a detailed profiling process for prospective investors, matching their criteria with our SOPs. Based on this, our team proposes both short-term and long-term investment opportunities tailored to their goals."
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Frequently Asked Questions</h1>
            <p className="hero-description">
              Find answers to common questions about our projects, processes, and services. Our commitment to transparency means every detail is clearly explained.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="question-text">{faq.question}</span>
                  <span className="question-icon">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="answer-content">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="faq-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-header">
              <h2 className="section-title">Still Have Questions?</h2>
              <div className="header-line"></div>
            </div>
            <p className="cta-text">
              Our team is here to provide personalized answers and guide you through every aspect of your real estate journey with XSquared.
            </p>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .faq-page {
          background: #FFFFF3;
          min-height: 100vh;
          padding-top: 80px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Hero Section */
        .faq-hero {
          padding: 6rem 0 4rem;
          text-align: center;
        }

        .hero-title {
          font-family: 'Times New Roman', Georgia, serif;
          font-size: clamp(3rem, 5vw, 5rem);
          font-weight: 300;
          font-style: italic;
          color: #4E2520;
          margin: 0 0 2rem 0;
          line-height: 1.1;
        }

        .hero-description {
          font-family: 'Times New Roman', Georgia, serif;
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          font-style: italic;
          color: #4E2520;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
          font-weight: 300;
        }

        /* FAQ Section */
        .faq-section {
          padding: 6rem 0;
        }

        .faq-list {
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-item {
          margin-bottom: 1rem;
          border-radius: 16px;
          overflow: hidden;
          background: #FFFFF3;
          border: 2px solid #F3793C;
          transition: box-shadow 0.3s ease;
        }

        .faq-item:hover {
          box-shadow: 0 8px 25px rgba(243, 121, 60, 0.1);
        }

        .faq-question {
          width: 100%;
          padding: 2rem;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          transition: background-color 0.3s ease;
        }

        .faq-question:hover {
          background: rgba(243, 121, 60, 0.05);
        }

        .faq-question.active {
          background: rgba(243, 121, 60, 0.1);
        }

        .question-text {
          font-size: 1.2rem;
          font-weight: 600;
          color: #4E2520;
          line-height: 1.4;
          text-align: left;
          flex: 1;
        }

        .question-icon {
          font-size: 2rem;
          color: #F3793C;
          font-weight: 300;
          min-width: 30px;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .faq-question.active .question-icon {
          transform: rotate(180deg);
        }

        .faq-answer {
          overflow: hidden;
          border-top: 1px solid rgba(243, 121, 60, 0.2);
        }

        .answer-content {
          padding: 2rem;
          padding-top: 1.5rem;
        }

        .answer-content p {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #4E2520;
          margin: 0;
          opacity: 0.85;
          text-align: justify;
        }

        /* CTA Section */
        .faq-cta {
          padding: 6rem 0;
          background: #4E2520;
          border-radius: 20px;
          margin: 4rem 0;
        }

        .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 3rem;
          gap: 2rem;
        }

        .section-title {
          color: #FFFFF3;
          font-size: 2.5rem;
          font-weight: 500;
          letter-spacing: 1px;
          margin: 0;
          white-space: nowrap;
        }

        .header-line {
          flex: 1;
          height: 1px;
          background: #FFFFF3;
        }

        .cta-text {
          color: #FFFFF3;
          font-family: 'Times New Roman', Georgia, serif;
          font-size: 1.5rem;
          font-style: italic;
          font-weight: 300;
          line-height: 1.8;
          margin: 0;
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 0 1.5rem;
          }

          .faq-hero {
            padding: 4rem 0 3rem;
          }

          .faq-section {
            padding: 4rem 0;
          }

          .faq-cta {
            padding: 4rem 0;
            margin: 3rem 0;
            border-radius: 16px;
          }

          .faq-question {
            padding: 1.5rem;
            gap: 1rem;
          }

          .question-text {
            font-size: 1.1rem;
          }

          .question-icon {
            font-size: 1.5rem;
            min-width: 25px;
          }

          .answer-content {
            padding: 1.5rem;
            padding-top: 1rem;
          }

          .answer-content p {
            font-size: 1rem;
          }

          .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .header-line {
            width: 100%;
          }

          .section-title {
            font-size: 2rem;
          }

          .cta-text {
            font-size: 1.3rem;
            text-align: left;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .faq-hero {
            padding: 3rem 0 2rem;
          }

          .faq-question {
            padding: 1.25rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .question-text {
            font-size: 1rem;
          }

          .question-icon {
            align-self: flex-end;
            margin-top: -2rem;
          }

          .answer-content {
            padding: 1.25rem;
            padding-top: 0.75rem;
          }

          .answer-content p {
            font-size: 0.95rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .cta-text {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default FAQ