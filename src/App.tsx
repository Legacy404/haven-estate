import Hero from './components/Hero';
import Experiences from './components/Experiences';
import Packages from './components/Packages';
import Conversations from './components/Conversations';
import Footer from './components/Footer';
import { ArrowDownRight } from 'lucide-react';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header / Navigation (Bend Club Style: Elegant, Sticky, Centered) */}
      <header 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.5rem 2.5rem',
          backgroundColor: 'rgba(250, 246, 240, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: 'var(--border-thin)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: '1.35rem', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
            The Haven <span style={{ color: 'var(--accent)', fontFamily: 'var(--serif)', fontStyle: 'italic' }}>Estate</span>
          </span>
        </div>
        
        <nav className="header-nav">
          <a href="#packages">PACKAGES</a>
          <a href="#" onClick={(e) => { e.preventDefault(); alert("Gallery coming soon!"); }}>GALLERY</a>
          <a href="#" onClick={(e) => { e.preventDefault(); alert("History details coming soon!"); }}>OUR STORY</a>
        </nav>

        <div>
          <button 
            onClick={() => {
              const el = document.getElementById('packages');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="cta-button"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.75rem' }}
          >
            Request Tour <ArrowDownRight style={{ width: '0.85rem', height: '0.85rem', marginLeft: '0.25rem' }} />
          </button>
        </div>
      </header>

      {/* Page Sections Stack */}
      <main style={{ flexGrow: 1 }}>
        
        {/* Section 1 & 2: Hero and Intro Block */}
        <Hero />

        {/* Section 3: Experiences list stack (Dark Forest Green Background) */}
        <Experiences />

        {/* Section 4: Packages Residences Grid */}
        <Packages />

        {/* Section 5: FAQs Split rows */}
        <Conversations />

      </main>

      {/* Section 6: Footer component wrapping in white borders */}
      <Footer />
    </div>
  );
}

export default App;
