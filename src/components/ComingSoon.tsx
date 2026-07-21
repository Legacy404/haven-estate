import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import MailerLiteSignup from './MailerLiteSignup';

const images = [
  { src: '/1.PNG', alt: 'The Haven Estate wedding concept' },
  { src: '/2.png', alt: 'The Haven Estate wedding concept' },
  { src: '/3.png', alt: 'The Haven Estate wedding concept' },
  { src: '/4.png', alt: 'The Haven Estate wedding concept' },
];

const messages = [
  ['Your canvas for a beautiful,', 'intimate, exclusive wedding.'],
  ['A historic estate for', 'your most meaningful day.'],
  ['An elegant celebration,', 'shared with your closest people.'],
  ['A private riverfront setting,', 'made entirely your own.'],
];

export default function ComingSoon() {
  const [slide, setSlide] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    images.slice(1).forEach(({ src }) => {
      const image = new Image();
      image.src = src;
    });

    const timer = window.setInterval(() => {
      setSlide(current => (current + 1) % images.length);
    }, 7000);

    const introTimer = window.setTimeout(() => setShowIntro(false), 4200);

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(introTimer);
    };
  }, []);

  return <main className="coming-soon">
    <AnimatePresence>
      {showIntro && <motion.div
        className="coming-soon-intro"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: .78, delay: .42, ease: [0.45, 0, 0.55, 1] } }}
        transition={{ duration: 1.05, ease: 'easeInOut' }}
      >
        <div>
          <motion.span className="coming-soon-intro-the" initial={{ opacity: 0, y: -90 }} animate={{ opacity: 1, y: 0 }} exit={{ y: '-100vh', opacity: 0, transition: { duration: 1.25, ease: [0.76, 0, 0.24, 1] } }} transition={{ duration: 1.15, delay: .2, ease: [0.16, 1, 0.3, 1] }}>The</motion.span>
          <div className="coming-soon-intro-name">
            <motion.strong initial={{ opacity: 0, x: '-22vw' }} animate={{ opacity: 1, x: 0 }} exit={{ x: '-110vw', opacity: 0, transition: { duration: 1.35, ease: [0.76, 0, 0.24, 1] } }} transition={{ duration: 1.35, delay: .32, ease: [0.16, 1, 0.3, 1] }}>Haven</motion.strong>
            <motion.img
              src="/pre.png"
              alt=""
              initial={{ width: 0, height: 0, opacity: 0, scale: .88 }}
              animate={{ width: 'clamp(72px,11vw,170px)', height: 'clamp(72px,11vw,170px)', opacity: 1, scale: 1 }}
              exit={{ zIndex: 2, width: '102vw', height: '102vh', opacity: 1, scale: 1, transition: { duration: 1.45, ease: [0.76, 0, 0.24, 1] } }}
              transition={{ width: { duration: 1.05, delay: 1.45, ease: [0.76, 0, 0.24, 1] }, height: { duration: 1.05, delay: 1.45, ease: [0.76, 0, 0.24, 1] }, opacity: { duration: .8, delay: 1.65 }, scale: { duration: 1, delay: 1.45, ease: [0.16, 1, 0.3, 1] } }}
            />
            <motion.strong initial={{ opacity: 0, x: '22vw' }} animate={{ opacity: 1, x: 0 }} exit={{ x: '110vw', opacity: 0, transition: { duration: 1.35, ease: [0.76, 0, 0.24, 1] } }} transition={{ duration: 1.35, delay: .32, ease: [0.16, 1, 0.3, 1] }}>Estate</motion.strong>
          </div>
        </div>
      </motion.div>}
    </AnimatePresence>

    <div className="coming-soon-media" aria-live="off">
      <AnimatePresence initial={false} mode="sync">
        <motion.img
          key={images[slide].src}
          src={images[slide].src}
          alt={images[slide].alt}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 1.35, ease: [0.76, 0, 0.24, 1] }}
          fetchPriority={slide === 0 ? 'high' : 'auto'}
          decoding="async"
        />
      </AnimatePresence>
      <div className="coming-soon-shade" />
    </div>

    <header className="coming-soon-header">
      <a className="coming-soon-logo" href="/" aria-label="The Haven Estate home">
        <span>THE HAVEN</span> <em>ESTATE</em>
      </a>
      <span className="coming-soon-location">YORK HAVEN, PENNSYLVANIA</span>
    </header>

    <section className="coming-soon-content">
      <motion.p className="coming-soon-kicker" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .35 }}>
        THE HAVEN ESTATE · COMING SOON
      </motion.p>

      <h1 className="coming-soon-headline">
        <AnimatePresence mode="wait">
          <motion.span
            key={messages[slide][0]}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: .75, ease: [0.16, 1, 0.3, 1] }}
          >
            {messages[slide][0]}
          </motion.span>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.em
            key={messages[slide][1]}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: .82, delay: .28, ease: [0.16, 1, 0.3, 1] }}
          >
            {messages[slide][1]}
          </motion.em>
        </AnimatePresence>
      </h1>

      <motion.p className="coming-soon-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1 }}>
        A thoughtfully restored 1900s estate being reimagined for elegant micro-weddings, intimate gatherings, and private celebrations along the Susquehanna River.
      </motion.p>

    </section>

    <motion.div className="coming-soon-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.25 }}>
      <MailerLiteSignup
        className="coming-soon-signup"
        formId="coming-soon"
        label="Sign up to receive our First Look Book and updates on the estate’s progress."
        buttonText="JOIN THE FIRST LOOK LIST"
        showArrow
      />
      <a className="coming-soon-contact" href="mailto:yorkhavenestate@gmail.com">CONTACT THE ESTATE <ArrowUpRight /></a>
    </motion.div>

    <div className="coming-soon-footer">
      <div className="coming-soon-progress" aria-hidden="true"><span key={slide} /></div>
      <span>{String(slide + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
    </div>
  </main>;
}
