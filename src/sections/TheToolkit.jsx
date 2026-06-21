// TheToolkit — Skills section on a chalkboard-style dark background.
// Grouped by category; "proficient" tags are brighter than "familiar" ones — honest framing.

import { motion } from 'framer-motion'
import { skills } from '../data/skills'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function TheToolkit() {
  return (
    <section id="the-toolkit" className="bg-darkroast chalk-texture section-padding">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-hand text-caramel/80 text-lg mb-1">skills</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
            The Toolkit
          </h2>
          <div className="mt-4 flex items-center gap-4 text-xs font-sans text-white/40">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-white/80 inline-block" aria-hidden="true" />
              Proficient
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-white/25 inline-block" aria-hidden="true" />
              Familiar
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={item}
              className="rounded-xl border border-white/8 bg-white/4 p-5"
            >
              <p className="font-hand text-caramel/70 text-sm mb-3">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.proficient.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-sans font-medium bg-white/15 text-white border border-white/20"
                  >
                    {skill}
                  </span>
                ))}
                {group.familiar.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-sans bg-white/5 text-white/45 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
