// WhereITrained — Education section. Shows degree, GPA, honors.
// Coursework and activities are collapsed by default, expandable on click.

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Award, BookOpen } from 'lucide-react'
import { education } from '../data/education'
import Tag from '../components/Tag'

export default function WhereITrained() {
  const [expanded, setExpanded] = useState({})

  const toggle = (id) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <section id="where-i-trained" className="bg-steam section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-hand text-caramel text-lg mb-1">academics</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-tight">
            Where I Trained
          </h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-parchment rounded-2xl border border-latte/20 overflow-hidden"
            >
              {/* Main info */}
              <div className="p-7 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-serif text-2xl text-espresso">{edu.institution}</h3>
                    <p className="font-sans text-sm text-latte mt-0.5">{edu.school}</p>
                  </div>
                  <span className="font-sans text-xs text-espresso/50 shrink-0 pt-1">{edu.location}</span>
                </div>

                <p className="font-sans text-base font-medium text-espresso mb-1">{edu.degree}</p>
                <p className="font-sans text-sm text-espresso/65 mb-4">
                  Concentration: {edu.concentration} &nbsp;·&nbsp; Minor: {edu.minor} &nbsp;·&nbsp; Expected {edu.graduation}
                </p>

                {/* GPA + Honors row */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-caramel text-white text-sm font-sans font-semibold">
                    GPA {edu.gpa}
                  </span>
                  {edu.honors.map(h => (
                    <span key={h} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream border border-latte/25 text-xs font-sans text-espresso/75">
                      <Award size={11} aria-hidden="true" />
                      {h}
                    </span>
                  ))}
                </div>

                {/* Activities */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {edu.activities.map(a => <Tag key={a} label={a} />)}
                </div>

                {/* Expand toggle */}
                <button
                  onClick={() => toggle(edu.id)}
                  className="inline-flex items-center gap-1.5 font-sans text-sm text-caramel font-medium hover:text-mocha transition-colors cursor-pointer"
                  aria-expanded={!!expanded[edu.id]}
                  aria-controls={`courses-${edu.id}`}
                >
                  <BookOpen size={14} aria-hidden="true" />
                  {expanded[edu.id] ? 'Hide coursework' : 'Show relevant coursework'}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${expanded[edu.id] ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
              </div>

              {/* Expandable coursework */}
              {expanded[edu.id] && (
                <motion.div
                  id={`courses-${edu.id}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="px-7 md:px-8 pb-7 border-t border-latte/15"
                >
                  <p className="font-hand text-caramel text-base mt-5 mb-3">Relevant Courses</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map(c => <Tag key={c} label={c} variant="accent" />)}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
