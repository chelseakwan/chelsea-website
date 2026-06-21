// MeetTheBarista — the About section. Conversational, first-person, humanizes the person
// behind the credentials. Includes a "What's in my cup right now" current focus callout.

import { motion } from 'framer-motion'

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function MeetTheBarista() {
  return (
    <section id="meet-the-barista" className="bg-parchment bg-paper-texture section-padding">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left: heading + identity */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <p className="font-hand text-caramel text-lg mb-2">About me</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-8 leading-tight">
            Meet the<br />
            <em>Barista</em>
          </h2>

          <div className="space-y-4 font-sans text-base text-espresso/80 leading-relaxed">
            <p>
              I'm a BS Mathematics & Business Administration student at Northeastern's D'Amore-McKim School of Business — Fintech concentration, Data Science minor, 3.9 GPA. I'm the kind of person who finds DCF models genuinely interesting and gets unreasonably excited about a well-structured dataset.
            </p>
            <p>
              My work lives at the intersection of finance, data, and strategy. Whether that's transforming $5B+ in spend data at Klaviyo, building end-to-end data pipelines at Cortex, or leading a team of 24+ consultants at Disrupt FinTech — I care about building things that have real, measurable impact.
            </p>
            <p>
              This fall, I'm joining <span className="text-caramel font-medium">Pericles Capital</span> as a Quantitative Analyst, where I'll be researching and backtesting data center impact on commodities and equities.
            </p>
          </div>
        </motion.div>

        {/* Right: personal + current focus */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, ease: 'easeOut', delay: 0.15 } } }}
          className="flex flex-col gap-6"
        >
          {/* Personal side */}
          <div className="bg-cream rounded-2xl p-7 border border-latte/15">
            <p className="font-hand text-caramel text-base mb-3">outside the desk</p>
            <p className="font-sans text-sm text-espresso/75 leading-relaxed">
              I play guitar, make pottery, follow Formula 1 way too closely, and am working through a long reading list. I also speak Mandarin (working proficiency — not just "a little bit"). Baking is how I decompress; jazz and classical music is how I think.
            </p>
          </div>

          {/* What's in my cup */}
          <div className="bg-espresso rounded-2xl p-7 relative overflow-hidden">
            {/* Steam wisps */}
            <div className="absolute top-3 right-10" aria-hidden="true">
              <div className="steam-wisp" style={{ height: 28, animationDelay: '0s' }} />
              <div className="steam-wisp" style={{ height: 24, animationDelay: '0.8s', left: 12, position: 'absolute', top: 0 }} />
            </div>
            <p className="font-hand text-caramel/80 text-base mb-3">what's in my cup right now</p>
            <p className="font-sans text-sm text-parchment/80 leading-relaxed">
              Researching statistical correlations between data center buildout and commodity/equity markets — preview of my upcoming work at Pericles Capital. Also: stochastic processes problem sets and a copy of <em>The Man Who Solved the Market</em>.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
