// Hero — full-viewport landing section. First impression: name, positioning line, two CTAs.
// Entrance animations stagger in using Framer Motion.

import { motion } from 'framer-motion'
import { ArrowDown, FileText } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial:  { opacity: 0, y: 28 },
  animate:  { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

export default function Hero() {
  const scrollToMenu = () =>
    document.getElementById('the-menu')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-parchment bg-paper-texture overflow-hidden px-6 text-center"
      aria-label="Introduction"
    >
      {/* Decorative warm circle */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-caramel/5 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-5">
        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0.1)}
          className="font-hand text-lg text-caramel tracking-wide"
        >
          welcome — grab a seat
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.3)}
          className="font-serif text-6xl md:text-8xl text-espresso leading-tight"
        >
          Chelsea Kwan
        </motion.h1>

        {/* Positioning statement */}
        <motion.p
          {...fadeUp(0.55)}
          className="font-sans text-lg md:text-xl text-latte max-w-xl leading-relaxed"
        >
          Finance &amp; quant student. Builder of things.{' '}
          <span className="italic font-serif text-caramel">Brewed fresh daily.</span>
        </motion.p>

        {/* Short welcome */}
        <motion.p
          {...fadeUp(0.75)}
          className="font-sans text-sm md:text-base text-espresso/60 max-w-md leading-relaxed"
        >
          Mathematics &amp; Business @ Northeastern · Fintech · GPA 3.9 · Incoming Quant Analyst @ Pericles Capital
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.95)}
          className="flex flex-wrap items-center justify-center gap-4 mt-2"
        >
          <button
            onClick={scrollToMenu}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-espresso text-parchment font-sans font-semibold text-sm tracking-wide hover:bg-caramel transition-colors cursor-pointer"
          >
            See the Menu
            <ArrowDown size={15} aria-hidden="true" />
          </button>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-espresso text-espresso font-sans font-semibold text-sm tracking-wide hover:bg-espresso hover:text-parchment transition-colors"
          >
            Full Résumé
            <FileText size={15} aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-espresso/30"
        aria-hidden="true"
      >
        <span className="font-sans text-xs tracking-widest uppercase">scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
