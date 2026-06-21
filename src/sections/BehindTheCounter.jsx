// The Menu — Experience timeline. Most-recent first, collapsible bullet points.
// Finance/quant roles get a caramel accent so recruiters can spot them instantly.

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, MapPin } from 'lucide-react'
import { experience } from '../data/experience'
import Tag from '../components/Tag'

const typeAccent = {
  quant:      'border-l-4 border-caramel',
  finance:    'border-l-4 border-caramel',
  consulting: 'border-l-4 border-latte/60',
  engineering:'border-l-4 border-latte/30',
}

export default function BehindTheCounter() {
  const [expanded, setExpanded] = useState({ klaviyo: true })
  const toggle = (id) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <section id="the-menu" className="bg-parchment bg-paper-texture section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-hand text-caramel text-lg mb-1">experience</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-tight">
            The Menu
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-10">
          {/* Vertical line */}
          <div className="absolute left-2 md:left-4 top-0 bottom-0 w-px bg-latte/20" aria-hidden="true" />

          <div className="space-y-6">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative"
              >
                {/* Timeline dot */}
                <span
                  className={`absolute -left-6 md:-left-10 top-6 w-3 h-3 rounded-full border-2 ${
                    job.type === 'quant' || job.type === 'finance'
                      ? 'border-caramel bg-caramel'
                      : 'border-latte bg-parchment'
                  }`}
                  aria-hidden="true"
                />

                <div className={`bg-cream rounded-2xl overflow-hidden ${typeAccent[job.type] ?? ''}`}>
                  {/* Header row */}
                  <button
                    onClick={() => toggle(job.id)}
                    className="w-full text-left p-6 md:p-7 cursor-pointer group"
                    aria-expanded={!!expanded[job.id]}
                    aria-controls={`bullets-${job.id}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div className="flex items-start gap-2 flex-wrap">
                        <h3 className="font-serif text-xl text-espresso">{job.company}</h3>
                        {job.current && (
                          <span className="px-2 py-0.5 rounded-full bg-caramel/15 text-caramel text-xs font-sans font-semibold mt-0.5">
                            current
                          </span>
                        )}
                        {job.upcoming && (
                          <span className="px-2 py-0.5 rounded-full bg-espresso/10 text-espresso text-xs font-sans font-semibold mt-0.5">
                            incoming
                          </span>
                        )}
                      </div>
                      <ChevronDown
                        size={16}
                        className={`text-latte shrink-0 mt-1 transition-transform duration-200 group-hover:text-caramel ${
                          expanded[job.id] ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </div>

                    <p className="font-sans text-sm font-semibold text-espresso/80 mb-1">{job.role}</p>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-espresso/45 font-sans">
                      <span>{job.duration}</span>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={11} aria-hidden="true" />{job.location}
                      </span>
                    </div>
                  </button>

                  {/* Expandable bullets */}
                  {expanded[job.id] && (
                    <motion.div
                      id={`bullets-${job.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.28 }}
                      className="px-6 md:px-7 pb-6 border-t border-latte/15"
                    >
                      <ul className="mt-4 space-y-2" role="list">
                        {job.bullets.map((b, j) => (
                          <li key={j} className="flex gap-3 font-sans text-sm text-espresso/75 leading-relaxed">
                            <span className="text-caramel mt-1.5 shrink-0" aria-hidden="true">—</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-5">
                        {job.tags.map(t => <Tag key={t} label={t} variant="accent" />)}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
