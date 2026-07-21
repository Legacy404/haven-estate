import { motion } from 'framer-motion';

interface Experience {
  id: string;
  tag: string;
  title: string;
  image: string;
}

const EXPERIENCES: Experience[] = [
  {
    id: 'riverfront',
    tag: 'THE SUSQUEHANNA',
    title: 'Exchange vows by the waters edge.',
    image: '/hero-estate.png'
  },
  {
    id: 'stone-manor',
    tag: 'THE ESTATE',
    title: 'Dine in historic 1900s architecture.',
    image: '/experience-manor.png'
  },
  {
    id: 'bridal-suite',
    tag: 'THE SUITES',
    title: 'Luxury spaces made for early preparation.',
    image: '/experience-suite.png'
  }
];

export default function Experiences() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 45, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section className="dark-section">
      <motion.div
        className="experience-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {EXPERIENCES.map((exp) => (
          <motion.div
            key={exp.id}
            className="experience-item"
            variants={itemVariants}
          >
            {/* Left Column: Portrait Image card */}
            <div className="experience-image-wrap">
              <img src={exp.image} alt={exp.title} loading="lazy" decoding="async" />
            </div>

            {/* Right Column: Slogan details */}
            <div className="experience-text-wrap">
              <span
                style={{
                  fontFamily: 'var(--sans)',
                  fontWeight: 500,
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  color: 'var(--blush)',
                  textTransform: 'uppercase'
                }}
              >
                {exp.tag}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'calc(1.8rem + 1vw)',
                  fontWeight: 300,
                  lineHeight: 1.25,
                  maxWidth: '480px',
                  color: '#ffffff'
                }}
              >
                {exp.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
