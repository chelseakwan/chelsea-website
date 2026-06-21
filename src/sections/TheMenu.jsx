// TheMenu — Projects section. Cards styled as menu items with warm paper texture.
// Filter by category. Modal opens for full project detail on click.

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
import Tag from '../components/Tag'
import BrewingBadge from '../components/BrewingBadge'

const categories = ['All', 'Finance & Quant', 'Data & ML', 'Web & Apps']

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const card = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function TheMenu() {
  const [filter, setFilter]     = useState('All')
  const [selected, setSelected] = useState(null)

  const visible = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section id="the-menu" className="bg-steam section-padding">
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
            The Menu
          </h2>
          <p className="font-sans text-sm text-espresso/55">
            Here's what's on offer — click any item for the full description.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter projects by category">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-semibold tracking-wide border transition-colors cursor-pointer ${
                filter === cat
                  ? 'bg-espresso text-parchment border-espresso'
                  : 'bg-transparent text-espresso/60 border-latte/30 hover:border-espresso/40 hover:text-espresso'
              }`}
              aria-pressed={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {visible.map(project => (
              <motion.article
                key={project.id}
                variants={card}
                layout
                exit={{ opacity: 0, scale: 0.95 }}
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

                {/* Outcome */}
                <div className="bg-cream rounded-xl px-4 py-2.5 border border-latte/15">
                  <p className="font-sans text-xs text-espresso/50 mb-0.5">outcome</p>
                  <p className="font-sans text-xs font-medium text-espresso/80">{project.outcome}</p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map(t => <Tag key={t} label={t} />)}
                </div>

                <div className="flex items-center justify-between text-xs text-espresso/40 font-sans">
                  <span>{project.role}</span>
                  <span>{project.date}</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
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
  )
}
