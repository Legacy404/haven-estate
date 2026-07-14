import { motion } from 'framer-motion';

interface Package {
  id: string;
  tag: string;
  name: string;
  duration: string;
  tagline: string;
  description: string;
  price: string;
  image: string;
}

const PACKAGES: Package[] = [
  {
    id: 'elopement',
    tag: 'THE ELOPEMENT',
    name: 'Refined simplicity.',
    duration: '2-Hour Experience',
    tagline: 'Simple, romantic, and focused on your union.',
    description: 'A curated short-duration reservation on the waterfront for couples focused on intimate promises and beautiful photographs.',
    price: '$1,500',
    image: '/package-elopement.png'
  },
  {
    id: 'micro-wedding',
    tag: 'THE MICRO-WEDDING',
    name: 'Complete celebration.',
    duration: '8-Hour Single-Day Rental',
    tagline: 'The ideal luxury boutique wedding layout.',
    description: 'A comprehensive, single-day rental allowing full use of the historic stone house, carriage lawns, and indoor reception parlor.',
    price: '$2,500',
    image: '/package-microwedding.png'
  },
  {
    id: 'all-exclusive',
    tag: 'THE ALL-EXCLUSIVE',
    name: 'Intimate weekend takeover.',
    duration: 'Full-Weekend Takeover',
    tagline: 'Your private historic estate retreat.',
    description: 'A full-weekend reservation (Thursday to Sunday) offering lodging, rehearsal space, main celebration setups, and morning brunches.',
    price: '$5,000',
    image: '/package-weekend.png'
  }
];

export default function Packages() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="packages" style={{ padding: '6rem 2rem', backgroundColor: 'var(--bg)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Section Title matching 'The Bend Club' Residences section */}
        <div style={{ marginBottom: '4rem' }}>
          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '2.5rem',
              fontWeight: 300,
              color: 'var(--text)',
              marginBottom: '2rem'
            }}
          >
            The Haven Estate.
          </h2>
        </div>

        {/* 3-Column Grid */}
        <motion.div
          className="packages-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              className="package-card"
              variants={cardVariants}
            >
              {/* Image Frame */}
              <div className="package-img-wrap">
                <img src={pkg.image} alt={pkg.tagline} />
              </div>

              {/* Tag */}
              <span
                style={{
                  fontFamily: 'var(--sans)',
                  fontWeight: 500,
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  marginTop: '0.5rem',
                  display: 'block'
                }}
              >
                {pkg.tag}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.75rem',
                  fontWeight: 300,
                  lineHeight: 1.2,
                  color: 'var(--text)'
                }}
              >
                {pkg.name}
              </h3>

              {/* Details & Price Info */}
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.85rem',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: 'var(--text-muted)'
                }}
              >
                {pkg.description}
              </p>

              <div
                style={{
                  marginTop: 'auto',
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  borderTop: '1px solid rgba(34,32,30,0.06)',
                  paddingTop: '1rem'
                }}
              >
                <span style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                  {pkg.duration}
                </span>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem', color: 'var(--text)' }}>
                  From {pkg.price}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
