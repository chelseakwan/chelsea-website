// WhatsBrewing — Future projects tab. Shows upcoming and in-planning work.
// Dark espresso background with animated steam wisps.

import { motion } from 'framer-motion'
import Tag from '../components/Tag'

const futureProjects = [
  {
    id: 'pericles',
    timeframe: 'Starting September 2026',
    confirmed: true,
    title: 'Data Center & Commodities Research',
    org: 'Pericles Capital',
    description:
      'Backtesting the statistical relationship between data center buildout and its downstream impact on commodity and equity markets. Full quant workflow: data sourcing, factor construction, signal testing, and backtesting infrastructure.',
    tags: ['Python', 'Quantitative Research', 'Backtesting', 'Statistics', 'Equities'],
  },
  {
    id: 'multi-factor',
    timeframe: 'In Planning',
    confirmed: false,
    title: 'Multi-Factor Portfolio Optimizer',
    description:
      'Extending the Markowitz & SIM work into a multi-factor model that incorporates macroeconomic indicators alongside traditional risk factors. Goal: a Python-based backtesting framework with interactive performance visualization.',
    tags: ['Python', 'NumPy', 'Portfolio Theory', 'Factor Models', 'Matplotlib'],
  },
  {
    id: 'fin-knowledge-graph',
    timeframe: 'In Planning',
    confirmed: false,
    title: 'Financial Knowledge Graph',
    description:
      'Building on the Cortex data engineering work — an AI-accessible knowledge graph for financial document analysis, connecting companies, SEC filings, and market events using Neo4j and LLM embeddings for natural language querying.',
    tags: ['Python', 'Neo4j', 'AI', 'Data Engineering', 'PostgreSQL'],
  },
]

function SteamWisps() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-4 pointer-events-none" aria-hidden="true">
      {[0, 1, 2, 3].map(i => (
        <div
          key={i}
          className="steam-wisp"
          style={{
            height: 30 + i * 8,
            animationDelay: `${i * 0.65}s`,
            animationDuration: `${2.5 + i * 0.3}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function WhatsBrewing() {
  return (
    <section
      id="whats-brewing"
      className="min-h-screen bg-espresso relative overflow-hidden section-padding"
      aria-label="What's Brewing — future projects"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-caramel/8 blur-3xl rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header with steam */}
        <div className="relative text-center mb-16">
          <SteamWisps />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="pt-8"
          >
            <p className="font-hand text-caramel/70 text-lg mb-2">on the horizon</p>
            <h2 className="font-serif text-4xl md:text-5xl text-parchment leading-tight mb-4">
              What's Brewing
            </h2>
            <p className="font-sans text-sm text-white/40 max-w-md mx-auto leading-relaxed">
              Projects confirmed, in planning, and simmering on the back burner.
            </p>
          </motion.div>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {futureProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`rounded-2xl p-6 flex flex-col gap-4 border ${
                project.confirmed
                  ? 'border-caramel/40 bg-caramel/8 brew-glow'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {/* Status */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-sans font-semibold ${
                    project.confirmed
                      ? 'bg-caramel/25 text-caramel'
                      : 'bg-white/10 text-white/55'
                  }`}
                >
                  {project.timeframe}
                </span>
                {project.confirmed && (
                  <span className="text-xs font-sans text-caramel/60">confirmed</span>
                )}
              </div>

              {/* Title */}
              <div>
                <h3 className="font-serif text-lg text-parchment leading-snug">{project.title}</h3>
                {project.org && (
                  <p className="font-sans text-xs text-caramel/70 mt-0.5">{project.org}</p>
                )}
              </div>

              <p className="font-sans text-sm text-white/55 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map(t => (
                  <Tag key={t} label={t} variant="chalk" />
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
