// Hero — full-viewport landing. CTAs navigate to tabs instead of scrolling.

import { motion } from 'framer-motion'
import { ArrowRight, FileText } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

export default function Hero({ onNavigate }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-parchment bg-paper-texture overflow-hidden px-6 text-center"
      aria-label="Introduction"
    >
      {/* Warm background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-caramel/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-5">
        <motion.p {...fadeUp(0.1)} className="font-hand text-lg text-caramel tracking-wide">
          welcome — grab a seat
        </motion.p>

        <motion.h1 {...fadeUp(0.3)} className="font-serif text-6xl md:text-8xl text-espresso leading-tight">
          Chelsea Kwan
        </motion.h1>

        <motion.p {...fadeUp(0.55)} className="font-sans text-lg md:text-xl text-latte max-w-xl leading-relaxed">
          Finance &amp; quant student. Builder of things.{' '}
          <span className="italic font-serif text-caramel">Brewed fresh daily.</span>
        </motion.p>

        <motion.p {...fadeUp(0.72)} className="font-sans text-sm md:text-base text-espresso/55 max-w-md leading-relaxed">
          Mathematics &amp; Business @ Northeastern · Fintech · GPA 3.9 · Incoming Quant Analyst @ Pericles Capital
        </motion.p>

        {/* Tab CTAs */}
        <motion.div {...fadeUp(0.9)} className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <button
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-espresso text-parchment font-sans font-semibold text-sm tracking-wide hover:bg-caramel transition-colors cursor-pointer"
          >
            See the Menu
            <ArrowRight size={15} aria-hidden="true" />
          </button>

          <button
            onClick={() => onNavigate('about')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-espresso/40 text-espresso font-sans font-semibold text-sm tracking-wide hover:border-espresso hover:bg-cream transition-colors cursor-pointer"
          >
            Meet the Barista
          </button>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-latte/40 text-espresso/60 font-sans text-sm tracking-wide hover:border-caramel hover:text-caramel transition-colors"
          >
            <FileText size={14} aria-hidden="true" />
            Full Résumé
          </a>
        </motion.div>

        {/* Quick nav chips */}
        <motion.div
          {...fadeUp(1.1)}
          className="flex flex-wrap justify-center gap-2 mt-4"
          aria-label="Quick navigation"
        >
          {[
            { label: "What's Brewing", tab: 'brewing' },
            { label: 'Come Find Me', tab: 'contact' },
          ].map(({ label, tab }) => (
            <button
              key={tab}
              onClick={() => onNavigate(tab)}
              className="px-4 py-1.5 rounded-full text-xs font-sans text-espresso/45 border border-latte/20 hover:text-caramel hover:border-caramel/30 transition-colors cursor-pointer"
            >
              {label}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
