import { motion } from 'framer-motion'

const sk = name => `/ref/Portfolio website mockup/sketches/${name}`

const SPECIALTIES = [
  { label: 'Strategic Finance', desc: 'Spend strategy, negotiations, and savings that show up in the P&L.',    icon: sk('machine.png'), tab: 'menu'    },
  { label: 'Quant Research',    desc: 'Portfolio optimization and systematic signals, done honestly.',          icon: sk('teapot.png'),  tab: 'menu'    },
  { label: 'Data Engineering',  desc: 'Pipelines and knowledge graphs that make data findable.',               icon: sk('bag.png'),     tab: 'menu'    },
  { label: 'Always Building',   desc: 'Leading Disrupt, learning markets, shipping side projects.',            icon: sk('muffin.png'),  tab: 'barista' },
]

export default function Hero({ onNavigate }) {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '90px 0' }}>

      <div style={{ position: 'relative' }}>
        {/* "COFFEE TIME" title doodle */}
        <img
          src={sk('title.png')}
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', top: '-66px', left: '-2px', width: '212px', transform: 'rotate(-2deg)', opacity: 0.55, mixBlendMode: 'multiply', pointerEvents: 'none' }}
        />

        {/* Wavy underline accent */}
        <svg
          style={{ position: 'absolute', bottom: '-38px', left: '-6px' }}
          width="118" height="34" viewBox="0 0 120 40" fill="none"
          stroke="#84ACCE" strokeWidth="2.6" strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M4 20 q12 -16 24 0 q12 16 24 0 q12 -16 24 0 q12 16 24 0" />
        </svg>

        {/* Location eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
          <span
            className="font-mono text-sienna"
            style={{ fontSize: '12px', letterSpacing: '0.28em', textTransform: 'uppercase' }}
          >
            Boston, MA — Open Daily
          </span>
          <span style={{ flex: '0 0 40px', height: '1px', background: 'rgba(11,57,72,0.3)' }} />
        </div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="font-serif text-maroon"
          style={{ fontSize: 'clamp(52px, 7vw, 74px)', lineHeight: 0.98, letterSpacing: '-0.025em', margin: '0 0 8px', position: 'relative' }}
        >
          Hello, I'm<br />Chelsea Kwan.
          {/* Espresso machine doodle — floats above heading */}
          <img
            src={sk('machine.png')}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute', top: '-71px', left: '420px', width: '196px',
              '--r': '5deg',
              animation: 'floaty 7s ease-in-out infinite',
              mixBlendMode: 'multiply',
              pointerEvents: 'none',
            }}
          />
        </motion.h1>

        {/* Handwritten subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-hand text-maroon"
          style={{ fontSize: '30px', margin: '6px 0 22px', transform: 'rotate(-1.5deg)', display: 'inline-block' }}
        >
          math &amp; business student · fintech-bound
        </motion.p>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-sans text-prose"
          style={{ fontSize: '17px', lineHeight: '1.75', maxWidth: '540px', margin: '0 0 34px' }}
        >
          I work at the intersection of markets, data, and code — from strategic finance
          and procurement analytics to systematic research and knowledge-graph pipelines.
          Pull up a stool; the menu's just a tab away.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <button
            onClick={() => onNavigate('menu')}
            className="font-sans font-semibold text-canvas bg-ink cursor-pointer"
            style={{ fontSize: '15px', border: 'none', borderRadius: '3px', padding: '14px 24px', transition: 'background 0.18s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#082731' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#0B3948' }}
          >
            See the Menu →
          </button>
        </motion.div>
      </div>

      {/* House Specialties */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid rgba(11,57,72,0.14)' }}
      >
        <p className="font-mono text-sienna" style={{ fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 26px' }}>
          House Specialties
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px' }}>
          {SPECIALTIES.map(sp => (
            <button
              key={sp.label}
              onClick={() => onNavigate(sp.tab)}
              className="text-left cursor-pointer bg-transparent border-none"
              style={{ paddingTop: '18px', borderTop: '2px solid #66101F' }}
            >
              <img
                src={sp.icon}
                alt=""
                aria-hidden="true"
                style={{ height: '60px', width: 'auto', display: 'block', marginBottom: '12px', mixBlendMode: 'multiply' }}
              />
              <h3 className="font-serif text-maroon" style={{ fontSize: '18px', fontWeight: 600, margin: '0 0 6px' }}>
                {sp.label}
              </h3>
              <p className="font-sans text-prose" style={{ fontSize: '13.5px', lineHeight: '1.55', margin: 0 }}>
                {sp.desc}
              </p>
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
