import { motion } from 'framer-motion'

const sk = name => `/ref/Portfolio website mockup/sketches/${name}`

const futureProjects = [
  {
    id: 'pericles',
    status: 'Starting September 2026',
    confirmed: true,
    title: 'Data Center & Commodities Research',
    org: 'Pericles Capital',
    desc: 'Backtesting the statistical relationship between data center buildout and its downstream impact on commodity and equity markets. Full quant workflow: data sourcing, factor construction, signal testing, and backtesting infrastructure.',
    tags: ['Python', 'Quantitative Research', 'Backtesting', 'Statistics', 'Equities'],
  },
  {
    id: 'multi-factor',
    status: 'In Planning',
    confirmed: false,
    title: 'Multi-Factor Portfolio Optimizer',
    org: '',
    desc: 'Extending the Markowitz & SIM work into a multi-factor model that incorporates macroeconomic indicators alongside traditional risk factors. Goal: a Python-based backtesting framework with interactive performance visualization.',
    tags: ['Python', 'NumPy', 'Portfolio Theory', 'Factor Models', 'Matplotlib'],
  },
  {
    id: 'fin-knowledge-graph',
    status: 'In Planning',
    confirmed: false,
    title: 'Financial Knowledge Graph',
    org: '',
    desc: 'Building on the Cortex data engineering work — an AI-accessible knowledge graph for financial document analysis, connecting companies, SEC filings, and market events using Neo4j and LLM embeddings for natural language querying.',
    tags: ['Python', 'Neo4j', 'AI', 'Data Engineering', 'PostgreSQL'],
  },
]

export default function WhatsBrewing() {
  return (
    <section
      style={{ padding: '104px 0 90px', position: 'relative' }}
      aria-label="What's Brewing — future projects"
    >
      {/* Teapot doodle */}
      <img
        src={sk('teapot.png')}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '60px',
          right: '-18px',
          width: '132px',
          transform: 'rotate(4deg)',
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ marginBottom: '46px', maxWidth: '620px' }}
      >
        <p
          className="font-mono"
          style={{ fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#65472A', margin: '0 0 14px' }}
        >
          04 — On the Horizon
        </p>
        <h2
          className="font-serif"
          style={{ fontWeight: 600, fontSize: '56px', lineHeight: 1, letterSpacing: '-0.025em', margin: '0 0 14px', color: '#66101F' }}
        >
          What's Brewing
        </h2>
        <p
          className="font-serif"
          style={{ fontStyle: 'italic', fontSize: '19px', lineHeight: 1.5, color: '#3f5963', margin: 0 }}
        >
          Projects confirmed, in planning, and simmering on the back burner.
        </p>
      </motion.div>

      {/* Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(258px, 1fr))', gap: '24px', alignItems: 'stretch' }}>
        {futureProjects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              height: '100%',
              border: `1px solid ${project.confirmed ? 'rgba(102,16,31,0.45)' : 'rgba(11,57,72,0.18)'}`,
              borderRadius: '5px',
              padding: '26px 24px',
            }}
          >
            {/* Status badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span
                className="font-mono"
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.04em',
                  color: '#65472A',
                  border: '1px solid rgba(101,71,42,0.4)',
                  borderRadius: '3px',
                  padding: '6px 12px',
                }}
              >
                {project.status}
              </span>
              {project.confirmed && (
                <span className="font-mono" style={{ fontSize: '13px', color: '#66101F' }}>
                  confirmed ✓
                </span>
              )}
            </div>

            {/* Title */}
            <div>
              <h3
                className="font-serif"
                style={{ fontWeight: 600, fontSize: '24px', lineHeight: 1.12, letterSpacing: '-0.01em', margin: 0, color: '#66101F' }}
              >
                {project.title}
              </h3>
              {project.org && (
                <p className="font-mono" style={{ fontSize: '13px', color: '#84ACCE', margin: '8px 0 0' }}>
                  {project.org}
                </p>
              )}
            </div>

            <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: '#3f5963', margin: 0 }}>
              {project.desc}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: 'auto', paddingTop: '6px' }}>
              {project.tags.map(t => (
                <span
                  key={t}
                  className="font-sans"
                  style={{
                    fontSize: '13px',
                    fontWeight: 500,
                    border: '1px solid rgba(11,57,72,0.28)',
                    color: '#0B3948',
                    padding: '5px 11px',
                    borderRadius: '3px',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
