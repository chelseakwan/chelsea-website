import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experience } from '../data/experience'
import { projects } from '../data/projects'

const sk = name => `/ref/Portfolio website mockup/sketches/${name}`

const MONTHS = { January:'Jan', February:'Feb', March:'Mar', April:'Apr', May:'May',
                 June:'Jun', July:'Jul', August:'Aug', September:'Sep',
                 October:'Oct', November:'Nov', December:'Dec' }

const shortDuration = str =>
  str
    .replace(/(\w+) (\d{4})/g, (_, m, y) => `${MONTHS[m] || m} '${y.slice(2)}`)
    .replace('Present', '—')

const shortDate = str =>
  str.replace(/(\w+) (\d{4})/, (_, m, y) => `${MONTHS[m] || m} '${y.slice(2)}`)

const SIDE = [
  { name: 'Spoken languages', desc: 'English — native · Mandarin — working proficiency' },
  { name: 'Off the clock',    desc: 'Formula 1, pottery, guitar, baking, jazz & classical' },
  { name: '>> will relocate for good coffee', desc: '' },
]

function RowHover({ children, onClick }) {
  const [hover, setHover] = useState(false)
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(140px, 0.85fr) minmax(0, 1.45fr) 100px',
        columnGap: '20px',
        alignItems: 'baseline',
        padding: '7px 6px',
        cursor: onClick ? 'pointer' : 'default',
        borderRadius: '3px',
        background: hover && onClick ? 'rgba(132,172,206,0.16)' : 'transparent',
        transition: 'background 0.15s',
      }}
    >
      {children}
    </div>
  )
}

function Modal({ item, onClose }) {
  if (!item) return null
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(11,57,72,0.55)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.22 }}
          onClick={e => e.stopPropagation()}
          style={{ background: '#F9F5E3', borderRadius: '6px', maxWidth: '580px', width: '100%', maxHeight: '86vh', overflow: 'auto', padding: '38px 40px', boxShadow: '0 20px 60px rgba(11,57,72,0.4)', position: 'relative' }}
        >
          <button
            onClick={onClose}
            style={{ position: 'absolute', top: '18px', right: '20px', background: 'none', border: 'none', fontSize: '24px', lineHeight: 1, color: '#65472A', cursor: 'pointer' }}
          >
            ×
          </button>
          <p className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#84ACCE', margin: '0 0 8px' }}>
            {item.kicker}
          </p>
          <h3 className="font-serif text-maroon" style={{ fontSize: '29px', fontWeight: 700, margin: '0 0 6px', letterSpacing: '-0.015em' }}>
            {item.title}
          </h3>
          <p className="font-serif text-prose italic" style={{ fontSize: '16px', margin: '0 0 22px' }}>
            {item.subtitle}
          </p>
          <ul style={{ margin: '0 0 22px', paddingLeft: '18px' }}>
            {item.bullets.map((b, i) => (
              <li key={i} className="font-sans text-prose" style={{ fontSize: '15px', lineHeight: '1.7', marginBottom: '9px' }}>
                {b}
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {item.tags.map(t => (
              <span key={t} className="font-sans text-ink" style={{ fontSize: '12px', fontWeight: 500, border: '1px solid rgba(11,57,72,0.35)', padding: '4px 10px', borderRadius: '3px' }}>
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function TheMenu() {
  const [modal, setModal] = useState(null)

  const openExp = (job) => setModal({
    kicker: `Experience · ${job.location}`,
    title: job.company,
    subtitle: `${job.role} · ${job.duration}`,
    bullets: job.bullets,
    tags: job.tags,
  })

  const openProj = (proj) => setModal({
    kicker: `Project · ${proj.category}`,
    title: proj.name,
    subtitle: proj.tagline,
    bullets: [proj.description],
    tags: proj.tech,
  })

  return (
    <section style={{ padding: '96px 0 90px', position: 'relative' }}>

      {/* Doodles */}
      <img src={sk('teapot.png')} alt="" aria-hidden="true"
        style={{ position: 'absolute', top: '70px', left: '-12px', width: '158px', transform: 'rotate(-3deg)', mixBlendMode: 'multiply', pointerEvents: 'none' }} />
      <img src={sk('donut.png')} alt="" aria-hidden="true"
        style={{ position: 'absolute', top: '96px', right: '-14px', width: '118px', transform: 'rotate(4deg)', mixBlendMode: 'multiply', pointerEvents: 'none' }} />

      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <p className="font-mono text-sienna" style={{ fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 6px' }}>
          02 — On the Board
        </p>
        <h2 className="font-hand text-maroon" style={{ fontSize: '62px', fontWeight: 700, lineHeight: 1, margin: 0, transform: 'rotate(-1deg)', display: 'inline-block' }}>
          The Menu
        </h2>
        <p className="font-serif text-prose italic" style={{ fontSize: '18px', margin: '10px 0 0' }}>
          Roasted slow, served daily — tap any line for the full pour.
        </p>
      </div>

      {/* ── Behind the Counter (Experience) ── */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '16px', margin: '0 4px 8px' }}>
          <span className="font-mono text-maroon" style={{ fontWeight: 700, fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Behind the Counter
          </span>
        </div>
        <div style={{ height: '1px', background: 'rgba(11,57,72,0.3)', margin: '0 4px 12px' }} />
        {experience.map(job => (
          <RowHover key={job.id} onClick={() => openExp(job)}>
            <span className="font-mono text-ink" style={{ fontSize: '15px' }}>{job.company}</span>
            <span className="font-mono text-sienna" style={{ fontSize: '14px' }}>{job.role}</span>
            <span className="font-mono text-maroon" style={{ fontSize: '14px', textAlign: 'right', whiteSpace: 'nowrap' }}>
              {shortDuration(job.duration)}
            </span>
          </RowHover>
        ))}
      </div>

      {/* ── House Projects ── */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '16px', margin: '0 4px 8px' }}>
          <span className="font-mono text-maroon" style={{ fontWeight: 700, fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            House Projects
          </span>
        </div>
        <div style={{ height: '1px', background: 'rgba(11,57,72,0.3)', margin: '0 4px 12px' }} />
        {projects.map(proj => (
          <RowHover key={proj.id} onClick={() => openProj(proj)}>
            <span className="font-mono text-ink" style={{ fontSize: '15px' }}>{proj.name}</span>
            <span className="font-mono text-sienna" style={{ fontSize: '14px' }}>{proj.tech.slice(0, 3).join(', ')}</span>
            <span className="font-mono text-maroon" style={{ fontSize: '14px', textAlign: 'right', whiteSpace: 'nowrap' }}>
              {shortDate(proj.date)}
            </span>
          </RowHover>
        ))}
      </div>

      {/* ── On the Side ── */}
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '16px', margin: '0 4px 8px' }}>
          <span className="font-mono text-maroon" style={{ fontWeight: 700, fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            On the Side
          </span>
        </div>
        <div style={{ height: '1px', background: 'rgba(11,57,72,0.3)', margin: '0 4px 12px' }} />
        {SIDE.map(s => (
          <RowHover key={s.name}>
            <span className="font-mono text-ink" style={{ fontSize: '15px' }}>{s.name}</span>
            <span className="font-mono text-sienna" style={{ fontSize: '14px' }}>{s.desc}</span>
            <span />
          </RowHover>
        ))}
      </div>

      <Modal item={modal} onClose={() => setModal(null)} />
    </section>
  )
}
