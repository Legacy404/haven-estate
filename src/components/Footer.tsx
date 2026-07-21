import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import MailerLiteSignup from './MailerLiteSignup';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const bottomTriggerRef = useRef<HTMLDivElement>(null);
  const reachedPageBottom = useInView(bottomTriggerRef, { amount: 1 });

  return (
    <motion.footer
      ref={footerRef}
      className="footer-wrap"
      initial={false}
      animate={{
        paddingTop: 0,
        paddingRight: reachedPageBottom ? 40 : 0,
        paddingBottom: reachedPageBottom ? 40 : 0,
        paddingLeft: reachedPageBottom ? 40 : 0,
      }}
      transition={{ duration: 1.45, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Clean thin white border edge surrounding the entire footer component content */}
      <motion.div 
        className="footer-inner"
        style={{
          backgroundImage: `url('/footer-estate.png')`,
          transformOrigin: 'bottom center',
        }}
        initial={false}
        animate={{
          borderRadius: reachedPageBottom ? 4 : 0,
          scale: reachedPageBottom ? 1 : 1.015,
        }}
        transition={{ duration: 1.45, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Dark overlay to ensure readability */}
        <div className="footer-overlay" />

        {/* Footer Top Content */}
        <div className="footer-content">
          
          {/* Column 1: Intro & Address */}
          <div className="footer-col" style={{ justifyContent: 'space-between' }}>
            <div>
              <span 
                className="font-sans font-bold text-xs uppercase tracking-widest text-[#ffffff] bg-transparent px-2 py-1 inline-block border border-white mb-4"
                style={{ marginBottom: '1.5rem', letterSpacing: '0.2em' }}
              >
                THE HAVEN ESTATE
              </span>
              <p className="font-serif leading-relaxed" style={{ fontSize: '1.75rem', fontWeight: 300, fontFamily: 'var(--serif)' }}>
                A historic 1900s estate reimagined for boutique, riverfront celebrations.
              </p>
            </div>
            
            <div className="font-sans font-medium text-sm text-gray-300" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin style={{ width: '1rem', height: '1rem', color: 'rgba(255,255,255,0.6)', flexShrink: 0 }} />
                <span className="address-two-lines">100 Riverfront Drive,<br />York Haven, PA 17370</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone style={{ width: '1rem', height: '1rem', color: 'rgba(255,255,255,0.6)', flexShrink: 0 }} />
                <span>+1 (717) 555-0190</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail style={{ width: '1rem', height: '1rem', color: 'rgba(255,255,255,0.6)', flexShrink: 0 }} />
                <a href="mailto:yorkhavenestate@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>yorkhavenestate@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <span className="font-sans font-bold text-xs uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.15em' }}>NAVIGATION</span>
            <ul className="footer-links">
              <li>
                <a href="#packages" className="hover:text-[#ffffff] transition-colors flex items-center gap-1">
                  Venue Packages <ArrowUpRight style={{ width: '0.8rem', height: '0.8rem' }} />
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("Booking Calendar Opening..."); }} className="hover:text-[#ffffff] transition-colors flex items-center gap-1">
                  Availability <ArrowUpRight style={{ width: '0.8rem', height: '0.8rem' }} />
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("Gallery Loading..."); }} className="hover:text-[#ffffff] transition-colors flex items-center gap-1">
                  Estate Gallery <ArrowUpRight style={{ width: '0.8rem', height: '0.8rem' }} />
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("Contact Form Opening..."); }} className="hover:text-[#ffffff] transition-colors flex items-center gap-1">
                  Get In Touch <ArrowUpRight style={{ width: '0.8rem', height: '0.8rem' }} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter & Clean Form */}
          <div className="footer-col">
            <span className="font-sans font-bold text-xs uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.15em' }}>NEWS & UPDATES</span>
            <p className="text-sm font-medium" style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)', fontWeight: 300, lineHeight: '1.6' }}>
              Subscribe to receive exclusive dates, wedding guides, and open house notifications.
            </p>
            
            <MailerLiteSignup
              className="footer-form"
              formId="footer"
              buttonText="JOIN THE FIRST LOOK LIST"
            />
            
            <div className="footer-socials">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Content: Giant typographic "HAVEN" in Cormorant Garamond */}
        <div className="footer-logo-wrap">
          <h2 
            className="footer-logo-text"
            style={{ 
              fontSize: 'min(13vw, 180px)',
              letterSpacing: '-0.055em',
              fontWeight: 300,
            }}
          >
            HAVEN ESTATE
          </h2>
        </div>
      </motion.div>
      <div ref={bottomTriggerRef} className="footer-bottom-trigger" aria-hidden="true" />
    </motion.footer>
  );
}
