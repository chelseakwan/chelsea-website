import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sk = name => `/ref/Portfolio website mockup/sketches/${name}`

const SKILLS = [
  { title: 'Programming & Query',    icon: sk('cup.png'),     items: ['Python', 'SQL', 'Cypher'] },
  { title: 'Frameworks & Libraries', icon: sk('teapot.png'),  items: ['Sklearn', 'NumPy', 'Pandas', 'Seaborn', 'FastAPI', 'Matplotlib'] },
  { title: 'Tools',                  icon: sk('machine.png'), items: ['Git', 'Docker', 'Tableau', 'Snowflake', 'Coefficient', 'PowerPoint', 'Excel'] },
  { title: 'Databases',              icon: sk('bag.png'),     items: ['PostgreSQL / pgvector', 'Neo4j', 'Kuzu'] },
]

export default function MeetTheBarista() {
  const [eduOpen, setEduOpen] = useState(true)

  return (
    <section style={{ padding: '104px 0 90px', position: 'relative' }}>

      {/* Vase doodle — top right */}
      <img
        src={sk('vase.png')}
        alt="" aria-hidden="true"
        style={{ position: 'absolute', top: '78px', right: '-14px', width: '120px', transform: 'rotate(2deg)', mixBlendMode: 'multiply', pointerEvents: 'none' }}
      />

      {/* ── About ── */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '40px' }}>
        <div>
          <p className="font-mono text-sienna" style={{ fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 4px' }}>
            01 — About
          </p>
          <h2 className="font-serif text-maroon" style={{ fontSize: '44px', fontWeight: 600, margin: 0, letterSpacing: '-0.02em' }}>
            Meet the Barista
          </h2>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '52px', alignItems: 'start' }}>
        {/* Bio */}
        <div className="font-sans text-prose" style={{ fontSize: '17px', lineHeight: '1.8' }}>
          <p style={{ margin: '0 0 18px' }}>
            I'm a Mathematics &amp; Business Administration student at Northeastern's D'Amore-McKim
            School of Business, concentrating in fintech with a minor in data science. I got curious
            about markets the same way I got curious about a good pour-over — by wanting to understand
            exactly what's happening underneath.
          </p>
          <p style={{ margin: '0 0 18px' }}>
            Lately that's meant a strategic-finance co-op at Klaviyo (spend strategy, negotiations,
            and a savings process that captured real dollars), data engineering at Cortex, and leading{' '}
            <em className="text-maroon italic">Disrupt FinTech Consulting</em>.
            {' '}This fall I'm joining Pericles Capital as a quantitative analyst.
          </p>
          <p style={{ margin: 0 }}>
            Off the clock you'll find me at the pottery wheel, watching Formula 1, playing guitar,
            baking, or working through a stack of books with something jazz or classical on.
          </p>
        </div>

        {/* What's in my cup */}
        <aside style={{ border: '1px solid rgba(11,57,72,0.16)', borderLeft: '3px solid #84ACCE', borderRadius: '0 4px 4px 0', padding: '24px 26px' }}>
          <p className="font-mono text-sienna" style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', margin: '0 0 12px' }}>
            What's in my cup right now
          </p>
          <p className="font-serif text-maroon italic" style={{ fontSize: '19px', lineHeight: '1.5', margin: '0 0 14px' }}>
            "Heading to{' '}
            <span style={{ borderBottom: '1.5px solid #84ACCE' }}>Pericles Capital</span>
            {' '}to study how data-center buildout moves commodity and equity prices."
          </p>
          <p className="font-sans text-prose" style={{ fontSize: '14px', lineHeight: '1.65', margin: 0 }}>
            Wrapping a strategic-finance co-op at Klaviyo and directing consulting projects at Disrupt FinTech.
          </p>
        </aside>
      </div>

      {/* ── Education ── */}
      <div style={{ marginTop: '72px', paddingTop: '44px', borderTop: '1px solid rgba(11,57,72,0.14)', position: 'relative' }}>
        {/* Bag doodle */}
        <img
          src={sk('bag.png')}
          alt="" aria-hidden="true"
          style={{ position: 'absolute', top: '-4px', left: '480px', width: '116px', transform: 'rotate(-3deg)', mixBlendMode: 'multiply', pointerEvents: 'none' }}
        />

        <h2 className="font-serif text-maroon" style={{ fontSize: '38px', fontWeight: 600, margin: '0 0 30px', letterSpacing: '-0.02em' }}>
          Education
        </h2>

        {/* Northeastern row — click to expand */}
        <button
          onClick={() => setEduOpen(v => !v)}
          className="w-full text-left bg-transparent border-none cursor-pointer"
          style={{ padding: '22px 0', borderTop: '1px solid rgba(11,57,72,0.18)' }}
          aria-expanded={eduOpen}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px', flexWrap: 'wrap' }}>
            <h3 className="font-serif text-maroon" style={{ fontSize: '23px', fontWeight: 600, margin: 0, letterSpacing: '-0.01em' }}>
              Northeastern University
            </h3>
            <span className="font-mono text-sienna" style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>
              2024 — May 2028
            </span>
          </div>
          <p className="font-sans text-prose" style={{ fontSize: '15px', margin: '6px 0 0', textAlign: 'left' }}>
            BS, Mathematics &amp; Business Administration · Concentration: Fintech · Minor: Data Science — D'Amore-McKim School of Business
          </p>

          <AnimatePresence initial={false}>
            {eduOpen && (
              <motion.div
                key="edu-details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '18px' }}>
                  <div>
                    <p className="font-mono" style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#84ACCE', margin: '0 0 6px' }}>GPA</p>
                    <p className="font-sans text-prose" style={{ fontSize: '15px', margin: 0 }}>3.9 / 4.0</p>
                  </div>
                  <div>
                    <p className="font-mono" style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#84ACCE', margin: '0 0 6px' }}>Coursework</p>
                    <p className="font-sans text-prose" style={{ fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                      Probability &amp; Statistics, Stochastic Processes, Differential Equations, Linear Algebra, Mathematical Modeling, Asset Valuation, Financial Econometrics
                    </p>
                  </div>
                  <div>
                    <p className="font-mono" style={{ fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#84ACCE', margin: '0 0 6px' }}>Awards &amp; Activities</p>
                    <p className="font-sans text-prose" style={{ fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                      Honors Program, Dean's List, Disrupt Consulting, Generate, Association of Women in Mathematics
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* ── Skills ── */}
      <div style={{ marginTop: '72px', paddingTop: '44px', borderTop: '1px solid rgba(11,57,72,0.14)', position: 'relative' }}>
        <h2 className="font-serif text-maroon" style={{ fontSize: '38px', fontWeight: 600, margin: '0 0 30px', letterSpacing: '-0.02em', position: 'relative', display: 'inline-block' }}>
          Skills
          <img
            src={sk('muffin.png')}
            alt="" aria-hidden="true"
            style={{ position: 'absolute', top: '-35px', left: '90px', width: '100px', transform: 'rotate(3deg)', mixBlendMode: 'multiply', pointerEvents: 'none' }}
          />
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '38px' }}>
          {SKILLS.map(group => (
            <div key={group.title}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '16px' }}>
                <img src={group.icon} alt="" style={{ height: '40px', width: 'auto', mixBlendMode: 'multiply' }} />
                <h3 className="font-serif text-ink" style={{ fontSize: '19px', fontWeight: 600, margin: 0 }}>
                  {group.title}
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {group.items.map(skill => (
                  <span
                    key={skill}
                    className="font-sans text-ink"
                    style={{ fontSize: '13px', fontWeight: 500, border: '1px solid rgba(11,57,72,0.28)', padding: '5px 11px', borderRadius: '3px' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
