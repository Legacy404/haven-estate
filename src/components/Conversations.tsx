import { motion } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string;
}

const FAQS: FAQ[] = [
  {
    question: 'WHAT IS THE MAXIMUM CAPACITY?',
    answer: 'The Haven Estate is specifically designed for boutique gatherings. We accommodate a maximum of 30 to 50 guests, ensuring an intimate, luxury experience for your closest friends and family.'
  },
  {
    question: 'CAN WE STAY OVERNIGHT?',
    answer: 'Yes. Our All-Exclusive weekend rental includes private check-in from Thursday to Sunday, providing luxury overnight lodging for up to 12 guests inside our beautifully renovated guest suites.'
  },
  {
    question: 'IS CATERING INCLUDED IN THE PRICE?',
    answer: 'We provide full coordination support alongside a curated list of preferred premium local catering partners, although you are welcome to bring vendor selections of your choice.'
  }
];

export default function Conversations() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section className="faq-section">
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Title */}
        <div style={{ marginBottom: '2rem', borderBottom: 'var(--border-thin)', paddingBottom: '2.5rem' }}>
          <span 
            style={{ 
              fontFamily: 'var(--sans)', 
              fontWeight: 500, 
              fontSize: '0.75rem', 
              letterSpacing: '0.25em', 
              color: 'var(--accent)', 
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1rem'
            }}
          >
            COMMON INQUIRIES
          </span>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--text)' }}>
            A clear first read for early conversations.
          </h2>
        </div>

        {/* FAQ Grid Rows */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {FAQS.map((faq, idx) => (
            <motion.div 
              key={idx} 
              className="faq-row"
              variants={itemVariants}
            >
              <div className="faq-question">
                {faq.question}
              </div>
              <div className="faq-answer">
                {faq.answer}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
