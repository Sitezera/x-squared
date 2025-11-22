import React from 'react';
import Hero from '../components/Home/Hero';

const NavaHarihara = () => {
  return (
    <div className="amidst-the-hill-page" style={{ position: 'relative' }}>
      <div style={{ background: '#fff' }}>
        <Hero 
          isLoading={false} 
          isFirstLoad={false} 
          leftText="Where Ideas Take Shape"
          rightText="Nava Harihara"
          heroImage="/assets/Asset 20@2x.png"
          heroImageMobile="/assets/Asset 20@2x.png"
        />
      </div>
        <div style={{ background: '#E86C2A', width: '100vw', minHeight: '120vh', position: 'relative', zIndex: 0, marginTop: '-4rem', paddingTop: '4rem', paddingBottom: '7rem', marginLeft: 0, marginRight: 0 }}>
          <div style={{ width: '100%', display: 'flex', alignItems: 'flex-start', marginTop: '7rem', marginBottom: '0.5rem', flexDirection: 'column' }}>
            <h2 style={{ fontFamily: 'TheSeasonsLight, serif', fontSize: '5rem', fontStyle: 'italic', color: '#fff', margin: 0, paddingLeft: '9rem' }}>Nava Harihara</h2>
            <div className="accentLines" style={{ width: '100vw', margin: '16px 0 0 0', padding: 0 }}>
              <div className="accentLine accentLine-top"></div>
              <div className="accentLine accentLine-middle"></div>
              <div className="accentLine accentLine-bottom"></div>
            </div>
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '0.5rem 0 2rem 0' }}>
            <img src="/assets/Screenshot 2025-11-20 at 3.35.42 PM.png" alt="Nava Harihara Main" style={{ maxWidth: '74vw', maxHeight: '90vh', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '2.2rem' }}>
            <img src="/assets/WhatsApp Image 2025-11-22 at 17.15.52.jpeg" alt="Nava Harihara Additional" style={{ maxWidth: '36vw', maxHeight: '50vh', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
            <img src="/assets/1_43 - Photo.jpg" alt="Nava Harihara Additional 2" style={{ maxWidth: '36vw', maxHeight: '50vh', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
            <img src="/assets/WhatsApp Image 2025-11-21 at 20.39.10.jpeg" alt="Nava Harihara Additional 3" style={{ maxWidth: '74vw', maxHeight: '90vh', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
          </div>
          <section className="project-details" style={{ paddingLeft: '16rem', paddingRight: '16rem', paddingTop: '2rem', paddingBottom: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '4rem' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', textTransform: 'uppercase', fontWeight: 900, letterSpacing: '2px', fontSize: '1rem', marginBottom: '0.5rem', color: '#4e2520' }}>PROJECT</div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, letterSpacing: '2px', fontSize: '1rem', color: '#4e2520', marginBottom: '0.5rem' }}>
                    <span style={{ fontFamily: 'MontserratSemiBold, Montserrat, sans-serif', fontWeight: 600 }}>Nava Harihara</span>
                  </div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, letterSpacing: '2px', fontSize: '1rem', color: '#4e2520', marginBottom: '0.5rem' }}>
                    <span style={{ fontFamily: 'MontserratSemiBold, Montserrat, sans-serif', fontWeight: 600 }}>Project near Harihara, Karnataka</span>
                  </div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, letterSpacing: '2px', fontSize: '1rem', color: '#4e2520' }}>
                    <span style={{ fontFamily: 'MontserratSemiBold, Montserrat, sans-serif', fontWeight: 600 }}>Size: 25 Acres</span>
                  </div>
              </div>
              <div style={{ flex: 1, textAlign: 'right' }}>
                <div style={{ fontFamily: 'Montserrat, sans-serif', textTransform: 'uppercase', fontWeight: 900, letterSpacing: '2px', fontSize: '1rem', marginBottom: '1rem', color: '#4e2520' }}>Project Overview</div>
                <div style={{ fontFamily: 'MontserratSemiBold, Montserrat, sans-serif', fontWeight: 600, letterSpacing: '1px', fontSize: '1rem', color: '#4e2520', lineHeight: '1.7' }}>
                  Villas and villaments on 25 acres in Harihara's growth corridor. Nava Harihara offers spacious plots and modern amenities, designed for families and professionals seeking a blend of tradition and contemporary living.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
};

export default NavaHarihara;
