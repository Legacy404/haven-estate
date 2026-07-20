import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HERO_SLIDES = [
  { src: '/hero-estate.png', alt: 'The Haven Estate riverfront wedding grounds' },
  { src: '/experience-manor.png', alt: 'The historic stone manor at The Haven Estate' },
  { src: '/package-microwedding.png', alt: 'An intimate micro-wedding at The Haven Estate' },
  { src: '/footer-estate.png', alt: 'The Haven Estate at dusk' },
];

const SLIDE_DURATION = 5000;
const HEADLINE_MESSAGES = [
  { primary: 'An intimate estate.', secondary: 'For your closest people.' },
  { primary: 'Elegant by nature.', secondary: 'Attainable by design.' },
  { primary: 'Historic character.', secondary: 'A blank canvas for you.' },
  { primary: 'A smaller guest list.', secondary: 'A more meaningful day.' },
  { primary: 'Your private weekend.', secondary: 'At an approachable price.' },
];
const PHRASE_DURATION = 8000;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activePhrase, setActivePhrase] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActivePhrase((current) => (current + 1) % HEADLINE_MESSAGES.length);
    }, PHRASE_DURATION);

    return () => window.clearTimeout(timer);
  }, [activePhrase]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const imageContainerVariants = {
    hidden: { scale: 1.05, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ width: '100%', backgroundColor: 'var(--bg)' }}
    >
      {/* SECTION 1: Full-screen Hero Block */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '92vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '4rem 2rem',
        }}
      >
        {/* Full-bleed Background Image */}
        <motion.div
          variants={imageContainerVariants}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
          }}
        >
          <AnimatePresence mode="sync" initial={false}>
            <motion.img
              key={HERO_SLIDES[activeSlide].src}
              src={HERO_SLIDES[activeSlide].src}
              alt={HERO_SLIDES[activeSlide].alt}
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '-100%' }}
              transition={{ duration: 1.25, ease: [0.76, 0, 0.24, 1] }}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                willChange: 'transform',
              }}
            />
          </AnimatePresence>
          {/* Subtle gradient overlay to read text */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(15, 23, 29, 0.08) 0%, rgba(15, 23, 29, 0.18) 45%, rgba(10, 16, 20, 0.72) 82%, rgba(5, 8, 10, 0.9) 100%)',
            }}
          />
          <div className="hero-progress-track" aria-hidden="true">
            <div key={activeSlide} className="hero-progress-bar" />
          </div>
        </motion.div>

        {/* Hero Headline Overlay */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            color: '#ffffff',
          }}
        >
          <motion.span
            variants={textVariants}
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '0.82rem',
              fontWeight: 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              display: 'block',
              opacity: 0.9,
            }}
          >
            York Haven, Pennsylvania • Recently Renovated 1900's Estate
          </motion.span>
          <motion.h1
            variants={textVariants}
            className="hero-headline"
            style={{
              fontSize: 'calc(2.5rem + 3vw)',
              lineHeight: .85,
              maxWidth: '1100px',
              textShadow: '0 2px 10px rgba(0,0,0,0.1)',
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                className="hero-headline-slide"
                key={HEADLINE_MESSAGES[activePhrase].primary}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.85, ease: 'easeInOut' }}
              >
                <motion.span
                  className="hero-headline-primary"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.05, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  {HEADLINE_MESSAGES[activePhrase].primary}
                </motion.span>
                <motion.span
                  className="hero-headline-secondary"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.15, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  {HEADLINE_MESSAGES[activePhrase].secondary}
                </motion.span>
              </motion.span>
            </AnimatePresence>
          </motion.h1>
        </div>
      </section>

      {/* SECTION 2: Center Intro Statement Block (Cream Background) */}
      <section
        style={{
          padding: '6rem 2rem',
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Blueprint ornament based on the estate's arched stained-glass window */}
        <motion.div
          variants={textVariants}
          className="window-blueprint"
          style={{
            color: 'var(--accent)',
            marginBottom: '2rem',
          }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 120 150" fill="none">
            <path d="M12 138V59C12 31.9 33.5 10 60 10s48 21.9 48 49v79H12Z" />
            <path d="M21 138V61c0-22.7 17.5-41 39-41s39 18.3 39 41v77" />
            <path d="M12 59h96M12 92h96M12 116h96M40 22v116M80 22v116M60 10v128" />
            <circle cx="60" cy="57" r="15" />
            <circle cx="60" cy="57" r="8" />
            <path d="M60 42l4 7 8 1-6 6 2 8-8-4-8 4 2-8-6-6 8-1 4-7Z" />
            <path d="M45 48c-7-10-16-12-24-8M75 48c7-10 16-12 24-8M45 67c-8 8-16 9-24 5M75 67c8 8 16 9 24 5" />
            <path d="M25 32c8 1 13 6 16 14M95 32c-8 1-13 6-16 14M35 101c7-7 14-8 25-2 11-6 18-5 25 2M35 126c7-7 14-8 25-2 11-6 18-5 25 2" />
            <circle cx="26" cy="76" r="5" /><circle cx="42" cy="76" r="5" /><circle cx="78" cy="76" r="5" /><circle cx="94" cy="76" r="5" />
            <circle cx="20" cy="104" r="3.5" /><circle cx="29" cy="104" r="3.5" /><circle cx="38" cy="104" r="3.5" /><circle cx="82" cy="104" r="3.5" /><circle cx="91" cy="104" r="3.5" /><circle cx="100" cy="104" r="3.5" />
            <path d="M48 91c-9-10-18-8-21 0-2 6 4 10 9 6 4-3 1-8-3-6M72 91c9-10 18-8 21 0 2 6-4 10-9 6-4-3-1-8 3-6" />
            <path d="M55 84c-4 4-5 8-1 12l6 6 6-6c4-4 3-8-1-12M60 102v20M54 111h12M51 128c3-5 6-7 9-7s6 2 9 7" />
            <path d="M27 118c6-5 11-5 16 0s10 5 17 0c7 5 12 5 17 0s10-5 16 0" />
          </svg>
        </motion.div>

        <motion.p
          variants={textVariants}
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'calc(1.35rem + 0.8vw)',
            fontWeight: 300,
            lineHeight: 1.5,
            color: 'var(--text)',
            maxWidth: '960px',
          }}
        >
          Centrally situated in York Haven's historic riverfront, steps from the Susquehanna River and scenic Carriage Lawns, The Haven Estate offers a luxury 1900s stone residence with concierge wedding programming year-round.
        </motion.p>
      </section>
    </motion.div>
  );
}
