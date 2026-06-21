// HouseSpecialties — a "Today's Specials" chalkboard band that highlights quant/finance
// credentials for recruiters scanning quickly. Each item links deeper into the page.

import { motion } from 'framer-motion'
import { TrendingUp, BarChart2, Code2, Briefcase, BookOpen } from 'lucide-react'
import { specialties } from '../data/specialties'

const iconMap = { TrendingUp, BarChart2, Code2, Briefcase, BookOpen }

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function HouseSpecialties() {
  return (
    <section
      id="house-specialties"
      className="bg-chalkboard chalk-texture section-padding"
      aria-label="House Specialties"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-hand text-caramel/80 text-lg mb-1">today's specials</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
            House Specialties
          </h2>
          <div className="mt-3 w-16 h-0.5 bg-caramel/50 mx-auto" aria-hidden="true" />
        </motion.div>

        {/* Specialty cards */}
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          role="list"
        >
          {specialties.map(spec => {
            const Icon = iconMap[spec.icon]
            return (
              <motion.li key={spec.id} variants={item}>
                <a
                  href={spec.anchor}
                  onClick={e => {
                    e.preventDefault()
                    document.querySelector(spec.anchor)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="flex flex-col gap-3 p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-caramel/40 transition-all group cursor-pointer h-full"
                  aria-label={`${spec.label} — jump to section`}
                >
                  <div className="flex items-center gap-3">
                    {Icon && (
                      <span className="p-2 rounded-lg bg-caramel/20 text-caramel group-hover:bg-caramel/30 transition-colors" aria-hidden="true">
                        <Icon size={16} />
                      </span>
                    )}
                    <span className="font-sans font-semibold text-white text-sm">{spec.label}</span>
                  </div>
                  <p className="font-sans text-xs text-white/55 leading-relaxed">{spec.description}</p>
                </a>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
