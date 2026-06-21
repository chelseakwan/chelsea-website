import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MapPin, X, ExternalLink } from 'lucide-react'
import { experience } from '../data/experience'
import { projects } from '../data/projects'
import Tag from '../components/Tag'
import BrewingBadge from '../components/BrewingBadge'

const typeAccent = {
  quant:       'border-l-4 border-caramel',
  finance:     'border-l-4 border-caramel',
  consulting:  'border-l-4 border-latte/60',
  engineering: 'border-l-4 border-latte/30',
}

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function TheMenu() {
  const [expanded, setExpanded] = useState({})
  const [selected, setSelected] = useState(null)

  const toggle = (id) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <>
      {/* ── Experience ── */}
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

          <div className="relative pl-6 md:pl-10">
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
                  <span
                    className={`absolute -left-6 md:-left-10 top-6 w-3 h-3 rounded-full border-2 ${
                      job.type === 'quant' || job.type === 'finance'
                        ? 'border-caramel bg-caramel'
                        : 'border-latte bg-parchment'
                    }`}
                    aria-hidden="true"
                  />

                  <div className={`bg-cream rounded-2xl overflow-hidden ${typeAccent[job.type] ?? ''}`}>
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

      {/* ── Projects ── */}
      <section className="bg-steam section-padding">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="font-hand text-caramel text-lg mb-1">projects</p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-tight mb-2">
              Side of the Day
            </h2>
            <p className="font-sans text-sm text-espresso/55">
              Here's what's on offer — click any item for the full description.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {projects.map(project => (
              <motion.article
                key={project.id}
                variants={cardVariants}
                onClick={() => setSelected(project)}
                className="bg-parchment rounded-2xl border border-latte/20 p-6 flex flex-col gap-4 cursor-pointer hover:shadow-md hover:border-caramel/30 transition-all group"
                aria-label={`${project.name} — click for details`}
              >
                {project.brewing && <BrewingBadge />}

                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-serif text-lg text-espresso leading-snug group-hover:text-caramel transition-colors">
                      {project.name}
                    </h3>
                    <ExternalLink size={14} className="text-latte/50 group-hover:text-caramel shrink-0 mt-1 transition-colors" aria-hidden="true" />
                  </div>
                  <p className="font-hand text-sm text-caramel/80">{project.tagline}</p>
                </div>

                <p className="font-sans text-xs text-espresso/60 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="bg-cream rounded-xl px-4 py-2.5 border border-latte/15">
                  <p className="font-sans text-xs text-espresso/50 mb-0.5">outcome</p>
                  <p className="font-sans text-xs font-medium text-espresso/80">{project.outcome}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map(t => <Tag key={t} label={t} />)}
                </div>

                <div className="flex items-center justify-between text-xs text-espresso/40 font-sans">
                  <span>{project.role}</span>
                  <span>{project.date}</span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* Detail modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/60 backdrop-blur-sm"
              onClick={() => setSelected(null)}
              role="dialog"
              aria-modal="true"
              aria-label={selected.name}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25 }}
                onClick={e => e.stopPropagation()}
                className="bg-parchment rounded-2xl max-w-lg w-full p-8 shadow-2xl border border-latte/20 relative"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-cream text-latte hover:text-espresso transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                {selected.brewing && <div className="mb-4"><BrewingBadge /></div>}

                <h3 className="font-serif text-2xl text-espresso mb-1">{selected.name}</h3>
                <p className="font-hand text-caramel mb-5">{selected.tagline}</p>

                <p className="font-sans text-sm text-espresso/75 leading-relaxed mb-5">{selected.description}</p>

                <div className="bg-cream rounded-xl px-4 py-3 mb-5 border border-latte/15">
                  <p className="font-sans text-xs text-espresso/45 mb-1">key outcome</p>
                  <p className="font-sans text-sm font-medium text-espresso/85">{selected.outcome}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {selected.tech.map(t => <Tag key={t} label={t} variant="accent" />)}
                </div>

                <div className="flex items-center justify-between text-xs text-espresso/40 font-sans">
                  <span>{selected.role}</span>
                  <span>{selected.date}</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}
