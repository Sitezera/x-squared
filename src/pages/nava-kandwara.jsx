import React from 'react';
import Hero from '../components/Home/Hero';

const NavaKandwara = () => {
  return (
    <div className="amidst-the-hill-page" style={{ position: 'relative' }}>
      <div style={{ background: '#fff' }}>
        <Hero 
          isLoading={false} 
          isFirstLoad={false} 
          leftText="Where Ideas Take Shape"
          rightText="Amidst the Hill"
          heroImage="/assets/Asset 20@2x.png"
          heroImageMobile="/assets/Asset 20@2x.png"
        />
      </div>
      <div style={{ background: '#E86C2A', width: '100vw', minHeight: '120vh', position: 'relative', zIndex: 0, marginTop: '-4rem', paddingTop: '4rem', paddingBottom: '7rem', marginLeft: 0, marginRight: 0 }}>
        <div style={{ width: '100%', display: 'flex', alignItems: 'flex-start', marginTop: '7rem', marginBottom: '0.5rem', flexDirection: 'column' }}>
          <h2 style={{ fontFamily: 'TheSeasonsLight, serif', fontSize: '5rem', fontStyle: 'italic', color: '#fff', margin: 0, paddingLeft: '9rem' }}>Nava Kandwara</h2>
          <div className="accentLines" style={{ width: '100vw', margin: '16px 0 0 0', padding: 0 }}>
            <div className="accentLine accentLine-top"></div>
            <div className="accentLine accentLine-middle"></div>
            <div className="accentLine accentLine-bottom"></div>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '0.5rem 0 2rem 0' }}>
          <img src="/assets/View 1_Option 1.jpg" alt="Nava Kandwara Main" style={{ maxWidth: '74vw', maxHeight: '90vh', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '2.2rem' }}>
          <img src="/assets/View 5_Option 1.jpg" alt="Nava Kandwara Additional" style={{ maxWidth: '36vw', maxHeight: '50vh', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
          <img src="/assets/View 2_Option 3.jpg" alt="Nava Kandwara Additional 2" style={{ maxWidth: '36vw', maxHeight: '50vh', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
          <img src="/assets/View 3_Option 2.jpg" alt="Amidst the Hill Additional 3" style={{ maxWidth: '74vw', maxHeight: '90vh', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
        </div>
  <section className="project-details" style={{ paddingLeft: '16rem', paddingRight: '16rem', paddingTop: '2rem', paddingBottom: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '4rem' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', textTransform: 'uppercase', fontWeight: 900, letterSpacing: '2px', fontSize: '1rem', marginBottom: '0.5rem', color: '#4e2520' }}>PROJECT</div>
                <div style={{ fontFamily: 'MontserratSemiBold, Montserrat, sans-serif', fontWeight: 600, letterSpacing: '1px', fontSize: '1rem', color: '#4e2520', marginBottom: '0.5rem' }}>
                  Nava Kandwara
                </div>
                <div style={{ fontFamily: 'MontserratSemiBold, Montserrat, sans-serif', fontWeight: 600, letterSpacing: '1px', fontSize: '1rem', color: '#4e2520', marginBottom: '0.5rem' }}>
                  Project near Nandi Hills, Karnataka
                </div>
                <div style={{ fontFamily: 'MontserratSemiBold, Montserrat, sans-serif', fontWeight: 600, letterSpacing: '1px', fontSize: '1rem', color: '#4e2520' }}>
                  Size: 38 Acres
                </div>
            </div>
            <div style={{ flex: 1, textAlign: 'right' }}>
              <div style={{ fontFamily: 'Montserrat, sans-serif', textTransform: 'uppercase', fontWeight: 900, letterSpacing: '2px', fontSize: '1rem', marginBottom: '1rem', color: '#4e2520' }}>Project Overview</div>
              <div style={{ fontFamily: 'MontserratSemiBold, Montserrat, sans-serif', fontWeight: 600, letterSpacing: '1px', fontSize: '1rem', color: '#4e2520', lineHeight: '1.7' }}>
                Villas and villaments on 38 acres in Bengaluru's northern growth corridor. Kandhwara sits where infrastructure investment is moving, offering larger plots than city alternatives at better entry points. Designed for primary residences or long-term holds. For buyers who track development patterns, not just property listings.
              </div>
            </div>
          </div>
  </section>
      </div>
    </div>
  );
};

export default NavaKandwara;
