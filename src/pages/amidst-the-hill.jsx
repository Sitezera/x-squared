import React from 'react';
import Hero from '../components/Home/Hero';

const AmidstTheHill = () => {
  return (
    <div className="amidst-the-hill-page">
      <div className="hero-wrapper">
        <Hero 
          isLoading={false} 
          isFirstLoad={false} 
          leftText="Where Ideas Take Shape"
          rightText="Amidst the Hill"
          heroImage="/assets/Asset 20@2x.png"
          heroImageMobile="/assets/Asset 20@2x.png"
        />
      </div>
      <div className="content-section">
        <div className="title-section">
          <h2 className="project-title">Amidst the Hill</h2>
          <div className="accentLines">
            <div className="accentLine accentLine-top"></div>
            <div className="accentLine accentLine-middle"></div>
            <div className="accentLine accentLine-bottom"></div>
          </div>
        </div>
        <div className="main-image-container">
          <img src="/assets/1_1 - Photo.jpg" alt="Amidst the Hill Main" className="main-image" />
        </div>
        <div className="dual-image-container">
          <img src="/assets/DJI_20251112140408_0030_D.JPG" alt="Amidst the Hill Additional" className="dual-image" />
          <img src="/assets/1_18 - Photo.jpg" alt="Amidst the Hill Additional 2" className="dual-image" />
        </div>
        <div className="single-image-container">
          <img src="/assets/DJI_20250605165717_0080_D.JPG" alt="Amidst the Hill Additional 3" className="single-image" />
        </div>
        <section className="project-details">
          <div className="details-container">
            <div className="details-left">
              <div className="label">PROJECT</div>
              <div className="info-text">Amidst the Hill</div>
              <div className="info-text">Project in Nandi Hills, Karnataka</div>
              <div className="info-text">Size: 32 Acres</div>
            </div>
            <div className="details-right">
              <div className="label">Project Overview</div>
              <div className="overview-text">
                Ultra-luxury villas 60 kilometers from Bengaluru, positioned at elevation with direct hill views. Amidst the Hills targets buyers seeking vacation homes or retirement properties in an area with limited high-end inventory. Gated community built for privacy, designed for appreciation. For those who want distance from the city without losing access to it.
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .amidst-the-hill-page {
          position: relative;
        }

        .hero-wrapper {
          background: #fff;
        }

        .content-section {
          background: #E86C2A;
          width: 100%;
          min-height: 120vh;
          position: relative;
          z-index: 0;
          margin-top: -4rem;
          padding-top: 4rem;
          padding-bottom: 7rem;
        }

        .title-section {
          width: 100%;
          display: flex;
          align-items: flex-start;
          margin-top: 7rem;
          margin-bottom: 0.5rem;
          flex-direction: column;
        }

        .project-title {
          font-family: 'TheSeasonsLight', serif;
          font-size: 5rem;
          font-style: italic;
          color: #fff;
          margin: 0;
          padding-left: 9rem;
        }

        .accentLines {
          width: 100vw;
          margin: 16px 0 0 0;
          padding: 0;
        }

        .main-image-container {
          width: 100%;
          display: flex;
          justify-content: center;
          margin: 0.5rem 0 2rem 0;
        }

        .main-image {
          max-width: 74vw;
          max-height: 90vh;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        }

        .dual-image-container {
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 2.2rem;
        }

        .dual-image {
          max-width: 36vw;
          max-height: 50vh;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        }

        .single-image-container {
          width: 100%;
          display: flex;
          justify-content: center;
          margin: 2rem 0;
        }

        .single-image {
          max-width: 74vw;
          max-height: 90vh;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        }

        .project-details {
          padding-left: 16rem;
          padding-right: 16rem;
          padding-top: 2rem;
          padding-bottom: 2rem;
        }

        .details-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: 4rem;
        }

        .details-left,
        .details-right {
          flex: 1;
        }

        .details-right {
          text-align: right;
        }

        .label {
          font-family: 'Montserrat', sans-serif;
          text-transform: uppercase;
          font-weight: 900;
          letter-spacing: 2px;
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: #4e2520;
        }

        .details-right .label {
          margin-bottom: 1rem;
        }

        .info-text {
          font-family: 'MontserratSemiBold', 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 1px;
          font-size: 1rem;
          color: #4e2520;
          margin-bottom: 0.5rem;
        }

        .overview-text {
          font-family: 'MontserratSemiBold', 'Montserrat', sans-serif;
          font-weight: 600;
          letter-spacing: 1px;
          font-size: 1rem;
          color: #4e2520;
          line-height: 1.7;
        }

        @media (max-width: 1024px) {
          .content-section {
            padding-bottom: 4rem;
          }

          .title-section {
            margin-top: 4rem;
          }

          .project-title {
            font-size: 4rem;
            padding-left: 4rem;
          }

          .project-details {
            padding-left: 4rem;
            padding-right: 4rem;
          }

          .details-container {
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .content-section {
            margin-top: 0;
            padding-top: 2rem;
            padding-bottom: 3rem;
            min-height: auto;
          }

          .title-section {
            margin-top: 2rem;
            margin-bottom: 1.5rem;
          }

          .project-title {
            font-size: clamp(2.5rem, 8vw, 3.5rem);
            padding-left: 1.5rem;
          }

          .main-image-container {
            margin: 1rem 0;
          }

          .main-image {
            max-width: 90vw;
            max-height: 60vh;
          }

          .dual-image-container {
            flex-direction: column;
            gap: 1rem;
            padding: 0 1.5rem;
          }

          .dual-image {
            max-width: 100%;
            max-height: 40vh;
          }

          .single-image-container {
            margin: 1rem 0;
            padding: 0 1.5rem;
          }

          .single-image {
            max-width: 100%;
            max-height: 60vh;
          }

          .project-details {
            padding: 2rem 1.5rem;
          }

          .details-container {
            flex-direction: column;
            gap: 2rem;
          }

          .details-right {
            text-align: left;
          }

          .label {
            font-size: 0.9rem;
          }

          .info-text,
          .overview-text {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .content-section {
            padding-top: 1.5rem;
            padding-bottom: 2rem;
          }

          .title-section {
            margin-top: 1.5rem;
            margin-bottom: 1rem;
          }

          .project-title {
            font-size: clamp(2rem, 7vw, 2.5rem);
            padding-left: 1rem;
          }

          .main-image,
          .single-image {
            max-height: 50vh;
          }

          .dual-image {
            max-height: 35vh;
          }

          .project-details {
            padding: 1.5rem 1rem;
          }

          .details-container {
            gap: 1.5rem;
          }

          .label {
            font-size: 0.85rem;
          }

          .info-text,
          .overview-text {
            font-size: 0.9rem;
          }

          .overview-text {
            line-height: 1.6;
          }
        }
      `}</style>
    </div>
  );
};

export default AmidstTheHill;
