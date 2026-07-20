import Hero from './components/Hero';
import Experiences from './components/Experiences';
import Packages from './components/Packages';
import Conversations from './components/Conversations';
import Footer from './components/Footer';
import { AudienceFit, BookingSteps, EstateInventory, LocationStory, ServicesCanvas } from './components/ValueSections';
import { ArrowDownRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollToPackages = () => {
    setMenuOpen(false);
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header / Navigation (Bend Club Style: Elegant, Sticky, Centered) */}
      <header 
        className="site-header"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.9rem 2rem',
          backgroundColor: 'rgba(252, 250, 246, 0.88)',
          backdropFilter: 'blur(12px)',
          borderBottom: 'var(--border-thin)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: '1.15rem', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
            The Haven <span style={{ color: 'var(--accent)', fontFamily: 'var(--serif)', fontStyle: 'italic' }}>Estate</span>
          </span>
        </div>
        
        <nav className="header-nav">
          <a href="#packages">PACKAGES</a>
          <a href="#" onClick={(e) => { e.preventDefault(); alert("Gallery coming soon!"); }}>GALLERY</a>
          <a href="#" onClick={(e) => { e.preventDefault(); alert("History details coming soon!"); }}>OUR STORY</a>
        </nav>

        <div className="header-cta-wrap">
          <button 
            onClick={scrollToPackages}
            className="cta-button"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.75rem' }}
          >
            Request Tour <ArrowDownRight style={{ width: '0.85rem', height: '0.85rem', marginLeft: '0.25rem' }} />
          </button>
        </div>

        <button className="mobile-menu-button" type="button" aria-label="Open navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}>
          <Menu />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-top">
          <span>THE HAVEN <em>ESTATE</em></span>
          <button type="button" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)}><X /></button>
        </div>
        <nav>
          <a href="#packages" onClick={() => setMenuOpen(false)}>Packages</a>
          <a href="#" onClick={(event) => { event.preventDefault(); setMenuOpen(false); alert('Gallery coming soon!'); }}>Gallery</a>
          <a href="#" onClick={(event) => { event.preventDefault(); setMenuOpen(false); alert('History details coming soon!'); }}>Our Story</a>
        </nav>
        <button className="mobile-menu-tour" type="button" onClick={scrollToPackages}>Request a Tour <ArrowDownRight /></button>
        <div className="mobile-menu-meta">YORK HAVEN, PENNSYLVANIA<br />RIVERFRONT MICRO-WEDDINGS</div>
      </div>

      {/* Page Sections Stack */}
      <main style={{ flexGrow: 1 }}>
        
        {/* Section 1 & 2: Hero and Intro Block */}
        <Hero />

        {/* Clarifies who the estate is designed for */}
        <AudienceFit />

        {/* Section 3: Experiences list stack (Dark Forest Green Background) */}
        <Experiences />

        {/* Complete property inventory and blank-canvas value */}
        <EstateInventory />
        <ServicesCanvas />

        {/* Section 4: Packages Residences Grid */}
        <Packages />

        {/* Property orientation and a clear path to booking */}
        <LocationStory />
        <BookingSteps />

        {/* Section 5: FAQs Split rows */}
        <Conversations />

      </main>

      {/* Section 6: Footer component wrapping in white borders */}
      <Footer />
    </div>
  );
}

export default App;
