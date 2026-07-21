import { motion } from 'framer-motion';
import { ArrowDownRight, BedDouble, Car, Flower2, House, Lightbulb, MapPin, Trees, UsersRound } from 'lucide-react';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: .85, ease: [0.16, 1, 0.3, 1] as const } },
};

export function AudienceFit() {
  const audience = [
    ['01', 'Intentionally intimate', 'Designed for celebrations of 30–50 guests, where every invitation feels meaningful.'],
    ['02', 'Quietly elegant', 'Historic stone architecture and neutral interiors create a timeless foundation for your style.'],
    ['03', 'Refreshingly attainable', 'A private-estate experience with clear packages beginning at an approachable price.'],
    ['04', 'Entirely your own', 'A flexible blank canvas for the colors, flowers, tablescape, and traditions that feel like you.'],
  ];

  return <section className="audience-section">
    <motion.div className="audience-heading" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
      <span className="section-eyebrow">MADE FOR THE TWO OF YOU</span>
      <h2>Intimate by design.<br /><em>Elegant by nature.</em></h2>
      <p>The Haven Estate is for couples who want the beauty and intention of an elegant wedding—without the enormous guest list, complicated venue logistics, or traditional venue price tag.</p>
    </motion.div>
    <div className="audience-grid">{audience.map(([number, title, copy]) => <motion.article key={number} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}><span>{number}</span><h3>{title}</h3><p>{copy}</p></motion.article>)}</div>
    <div className="hero-intro-marquee" aria-hidden="true">
      <div className="hero-intro-marquee-track">
        {[0, 1].map(group => <div className="hero-intro-marquee-group" key={group}><span>HAVEN ESTATE</span><span>HAVEN ESTATE</span></div>)}
      </div>
    </div>
  </section>;
}

export function EstateInventory() {
  const inventory = [
    { icon: House, title: 'Inside the house', items: ['Fully remodeled three-story 1900s residence', 'Dining and reception area', 'Grand foyer and butler pantry', 'Indoor ceremony and weather-backup flexibility'] },
    { icon: BedDouble, title: 'Private suites', items: ['Dedicated bridal suite', 'Dedicated groom’s suite', 'Four private bedrooms', 'Overnight lodging for up to 12 guests'] },
    { icon: Trees, title: 'Across the grounds', items: ['Three acres of open lawn and woodland', 'Flexible outdoor ceremony area', 'Portrait, cocktail, and gathering spaces', 'Riverfront surroundings and bistro lighting'] },
    { icon: Car, title: 'Arrival and access', items: ['On-site parking for approximately 20 vehicles', 'Vendor loading and estate access', 'Potential nearby overflow parking', 'Optional guest shuttle planning'] },
  ];

  return <section className="inventory-section" id="estate-details">
    <div className="inventory-intro"><span className="section-eyebrow">THE COMPLETE ESTATE</span><h2>An entire property,<br /><em>ready to become yours.</em></h2><p>Move naturally from preparation to ceremony, dinner, celebration, and an overnight stay—all within one private setting.</p></div>
    <div className="inventory-grid">{inventory.map(({ icon: Icon, title, items }, index) => <article key={title}><div className="inventory-icon"><Icon /></div><span>0{index + 1}</span><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
    <p className="inventory-note">Nearby overflow parking is subject to availability and can be discussed during your property tour.</p>
  </section>;
}

export function ServicesCanvas() {
  const services = [
    { icon: UsersRound, title: 'Venue coordination', copy: 'A dedicated point of contact to guide estate logistics, layouts, access, and the flow of your day.' },
    { icon: Flower2, title: 'Florals and décor', copy: 'Optional styling support to bring your colors and vision into the ceremony and reception spaces.' },
    { icon: Lightbulb, title: 'Bistro lighting', copy: 'Warm architectural lighting that carries the celebration from golden hour into the evening.' },
  ];

  return <section className="canvas-section">
    <div className="canvas-image"><img src="/experience-manor.png" alt="Neutral historic interiors at The Haven Estate" loading="lazy" decoding="async" /><div className="canvas-image-label">HISTORIC CHARACTER · YOUR PERSONAL STYLE</div></div>
    <div className="canvas-copy"><span className="section-eyebrow">A TURN-KEY BLANK CANVAS</span><h2>The freedom to make it yours.<br /><em>The support to make it simple.</em></h2><p>Begin with timeless architecture, neutral interiors, open lawns, and flexible gathering spaces. Add the details that tell your story without competing with an overly themed venue.</p><div className="service-list">{services.map(({ icon: Icon, title, copy }) => <article key={title}><Icon /><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div>
  </section>;
}

export function LocationStory() {
  return <section className="location-section">
    <div className="location-copy"><span className="section-eyebrow">YORK HAVEN, PENNSYLVANIA</span><h2>Destination atmosphere.<br /><em>Close-to-home ease.</em></h2><p>Set along the Susquehanna River, The Haven Estate feels peacefully removed while remaining within reach of York, Harrisburg, Lancaster, and Baltimore.</p><div className="location-address"><MapPin /><div><strong>THE HAVEN ESTATE</strong><span className="address-two-lines">100 Riverfront Drive,<br />York Haven, PA 17370</span></div></div></div>
    <div className="estate-map estate-map--site-plan">
      <img src="/haven-estate-site-plan.png" alt="Site plan for The Haven Estate showing the house, ceremony aisle, formal garden, outdoor reception area, event lawn, parking, and property boundary" loading="lazy" decoding="async" />
    </div>
  </section>;
}

export function BookingSteps() {
  const steps = [
    ['01', 'Request a private tour', 'Share your preferred season, approximate guest count, and celebration style.'],
    ['02', 'Walk through the estate', 'Explore the house, suites, grounds, ceremony locations, and available dates.'],
    ['03', 'Choose your experience', 'Review the packages, included services, and optional enhancements that fit your plans.'],
    ['04', 'Receive your proposal', 'We’ll prepare a clear quote reflecting your date, package, and selected services.'],
    ['05', 'Reserve your date', 'Accept the proposal, sign the agreement, and submit the required retainer.'],
    ['06', 'Begin planning', 'Work with your venue coordinator to shape the estate around your celebration.'],
  ];

  return <section className="booking-section" id="booking">
    <div className="booking-heading"><span className="section-eyebrow">FROM FIRST LOOK TO WEDDING DAY</span><h2>A simple path<br /><em>to your celebration.</em></h2><button onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}>REQUEST A TOUR <ArrowDownRight /></button></div>
    <div className="booking-steps">{steps.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
  </section>;
}
