// WhatsBrewing — "What's Brewing" section at the bottom of the page.
// Shows current active roles and the upcoming Pericles Capital opportunity.
// Dark espresso background with animated steam wisps for warmth and energy.

import { motion } from 'framer-motion'

const brews = [
  {
    id: 'klaviyo',
    status: 'Active',
    company: 'Klaviyo Inc.',
    role: 'Strategic Finance Analysis Co-op',
    since: 'January 2026',
    description:
      'Inside a $600M+ ARR B2B SaaS company, transforming $5B+ in spend data into category strategy, leading procurement negotiations, and building automations that scale finance operations.',
    highlight: '$5B+ spend data · $300K+ negotiations · 6+ automations shipped',
  },
  {
    id: 'disrupt',
    status: 'Active',
    company: 'Disrupt FinTech Consulting',
    role: 'Director of Consulting & Strategy Lead',
    since: 'May 2025',
    description:
      'Leading a 24+ person consulting organization — directing client strategy, running stakeholder meetings, and scaling the org 3× through targeted recruitment and market outreach.',
    highlight: '24+ consultants · 5 client projects · 300% org growth',
  },
  {
    id: 'pericles',
    status: 'On the horizon',
    company: 'Pericles Capital',
    role: 'Incoming Quantitative Analyst',
    since: 'September 2026',
    description:
      'Researching and backtesting the statistical relationship between data center buildout and its downstream impact on commodity and equity markets.',
    highlight: 'Statistical correlation · Backtesting · Equities & commodities',
    upcoming: true,
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
    <section id="whats-brewing" className="bg-espresso relative overflow-hidden section-padding">
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="pt-6"
          >
            <p className="font-hand text-caramel/70 text-lg mb-2">currently on the stove</p>
            <h2 className="font-serif text-4xl md:text-5xl text-parchment leading-tight">
              What's Brewing
            </h2>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {brews.map((brew, i) => (
            <motion.div
              key={brew.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`rounded-2xl p-6 flex flex-col gap-4 border ${
                brew.upcoming
                  ? 'border-caramel/30 bg-caramel/8'
                  : 'border-white/10 bg-white/5'
              } ${!brew.upcoming ? 'brew-glow' : ''}`}
            >
              {/* Status badge */}
              <span
                className={`self-start inline-flex items-center px-3 py-1 rounded-full text-xs font-sans font-semibold ${
                  brew.upcoming
                    ? 'bg-caramel/20 text-caramel'
                    : 'bg-white/10 text-white/70'
                }`}
              >
                {brew.status}
              </span>

              <div>
                <h3 className="font-serif text-lg text-parchment leading-snug">{brew.company}</h3>
                <p className="font-sans text-xs text-white/50 mt-0.5">{brew.role}</p>
                <p className="font-sans text-xs text-caramel/70 mt-0.5">Since {brew.since}</p>
              </div>

              <p className="font-sans text-sm text-white/60 leading-relaxed">
                {brew.description}
              </p>

              <div className="mt-auto pt-3 border-t border-white/8">
                <p className="font-hand text-xs text-caramel/60 leading-relaxed">
                  {brew.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
