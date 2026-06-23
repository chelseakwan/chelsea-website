import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import CoffeeBag from '../components/doodles/CoffeeBag'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}
const item = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: 'easeOut' } },
}

export default function HouseSpecialties() {
  return (
    <section
      id="house-specialties"
      className="relative section-padding overflow-hidden"
      aria-label="House Specialties — Skills"
    >
      {/* Subtle warm tint panel behind content */}
      <div className="absolute inset-0 bg-caramel/[0.04] pointer-events-none" aria-hidden="true" />

      {/* Coffee bag doodle — margin decoration */}
      <div className="absolute top-8 -right-8 md:-right-2 pointer-events-none" aria-hidden="true">
        <CoffeeBag
          className="text-espresso opacity-[0.12]"
          style={{ width: '88px', transform: 'rotate(8deg)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-hand text-caramel/90 text-lg mb-1">skills &amp; tools</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-tight">
            House Specialties
          </h2>
          <div className="mt-4 flex items-center gap-5 text-xs font-sans text-espresso/45">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-espresso/80 inline-block" aria-hidden="true" />
              Proficient
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full border border-latte/50 inline-block" aria-hidden="true" />
              Familiar
            </span>
          </div>
        </motion.div>

        {/* Skill groups */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={item}
              className="rounded-2xl border border-latte/20 bg-cream/70 p-5 backdrop-blur-[1px]"
            >
              <p className="font-hand text-caramel text-sm mb-3">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.proficient.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-sans font-medium bg-espresso/85 text-parchment"
                  >
                    {skill}
                  </span>
                ))}
                {group.familiar.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-sans text-espresso/55 border border-latte/35 bg-transparent"
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
