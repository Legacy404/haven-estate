import { motion } from 'framer-motion';

export default function Hero() {
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
          <img
            src="/hero-estate.png"
            alt="The Haven Estate"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          {/* Subtle gradient overlay to read text */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)',
            }}
          />
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
              fontSize: '1rem',
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
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'calc(2.5rem + 3vw)',
              fontWeight: 700,
              lineHeight: .85,
              maxWidth: '900px',
              textShadow: '0 2px 10px rgba(0,0,0,0.1)',
            }}
          >
            An intimate and affordable micro-wedding venue
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
          borderBottom: 'var(--border-thin)',
        }}
      >
        {/* Star ornament mimicking the reference layout */}
        <motion.div
          variants={textVariants}
          style={{
            fontSize: '1.5rem',
            color: 'var(--accent)',
            marginBottom: '2rem',
            fontFamily: 'var(--serif)',
          }}
        >
          ✦
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
