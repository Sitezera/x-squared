import React from 'react';
import Hero from '../components/Home/Hero';

const NavaManchanabelle = () => {
  return (
    <div className="amidst-the-hill-page" style={{ position: 'relative' }}>
      <div style={{ background: '#fff' }}>
        <Hero 
          isLoading={false} 
          isFirstLoad={false} 
          leftText="Where Ideas Take Shape"
          rightText="Nava Manchanabelle"
          heroImage="/assets/Asset 20@2x.png"
          heroImageMobile="/assets/Asset 20@2x.png"
        />
      </div>
      <div style={{ background: '#E86C2A', width: '100vw', minHeight: '120vh', position: 'relative', zIndex: 0, marginTop: '-4rem', paddingTop: '4rem', paddingBottom: '7rem', marginLeft: 0, marginRight: 0 }}>
        <div style={{ width: '100%', display: 'flex', alignItems: 'flex-start', marginTop: '7rem', marginBottom: '0.5rem', flexDirection: 'column' }}>
          <h2 style={{ fontFamily: 'TheSeasonsLight, serif', fontSize: '5rem', fontStyle: 'italic', color: '#fff', margin: 0, paddingLeft: '9rem' }}>Nava Manchanabelle</h2>
          <div className="accentLines" style={{ width: '100vw', margin: '16px 0 0 0', padding: 0 }}>
            <div className="accentLine accentLine-top"></div>
            <div className="accentLine accentLine-middle"></div>
            <div className="accentLine accentLine-bottom"></div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '0.5rem 0 2rem 0' }}>
  <img src="/assets/DJI_20251115144315_0019_D.png" alt="Nava Manchanabelle Main" style={{ width: '74vw', height: 'auto', maxHeight: '90vh', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '2.2rem' }}>
    <img src="/assets/WhatsApp Image 2025-11-21 at 20.07.08.jpeg" alt="Nava Manchanabelle Additional" style={{ maxWidth: '36vw', maxHeight: '50vh', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
    <img src="/assets/WhatsApp Image 2025-11-21 at 20.10.44.jpeg" alt="Nava Manchanabelle Additional 2" style={{ maxWidth: '36vw', maxHeight: '50vh', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
    <img src="/assets/Screenshot 2025-11-20 at 3.51.17 PM.png" alt="Nava Manchanabelle Additional 3" style={{ maxWidth: '74vw', maxHeight: '90vh', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
        </div>
  <section className="project-details" style={{ paddingLeft: '16rem', paddingRight: '16rem', paddingTop: '2rem', paddingBottom: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '4rem' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'MontserratSemiBold, Montserrat, sans-serif', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '1px', fontSize: '1rem', marginBottom: '0.5rem', color: '#4e2520' }}>PROJECT</div>
                <div style={{ fontFamily: 'MontserratSemiBold, Montserrat, sans-serif', fontWeight: 600, letterSpacing: '1px', fontSize: '1rem', color: '#4e2520', marginBottom: '0.5rem' }}>
      Nava Manchanabelle
                </div>
                <div style={{ fontFamily: 'MontserratSemiBold, Montserrat, sans-serif', fontWeight: 600, letterSpacing: '1px', fontSize: '1rem', color: '#4e2520', marginBottom: '0.5rem' }}>
      Project near Manchanabelle, Karnataka
                </div>
                <div style={{ fontFamily: 'MontserratSemiBold, Montserrat, sans-serif', fontWeight: 600, letterSpacing: '1px', fontSize: '1rem', color: '#4e2520' }}>
      Size: 30 Acres
                </div>
            </div>
            <div style={{ flex: 1, textAlign: 'right' }}>
              <div style={{ fontFamily: 'MontserratSemiBold, Montserrat, sans-serif', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '1px', fontSize: '1rem', marginBottom: '1rem', color: '#4e2520' }}>Project Overview</div>
              <div style={{ fontFamily: 'MontserratSemiBold, Montserrat, sans-serif', fontWeight: 600, letterSpacing: '1px', fontSize: '1rem', color: '#4e2520', lineHeight: '1.7' }}>
     Premium villas and plotted development in the scenic Manchanabelle region. Designed for families and professionals seeking tranquility and accessibility. Modern infrastructure meets natural beauty for a unique living experience.
              </div>
            </div>
          </div>
  </section>
      </div>
    </div>
  );
};

export default NavaManchanabelle;
