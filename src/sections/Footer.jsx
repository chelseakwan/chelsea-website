// Footer — quiet, minimal. Quick tab links, external links, back-to-top.

import { ArrowUp, Mail, Linkedin, Github } from 'lucide-react'

export default function Footer({ onTabChange }) {
  return (
    <footer className="bg-espresso border-t border-white/8 px-6 md:px-12 py-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        <div className="flex flex-col sm:flex-row items-center gap-4 text-white/35 font-sans text-xs">
          <span>© {new Date().getFullYear()} Chelsea Kwan</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <div className="flex gap-3">
            {[
              { id: 'about',   label: 'About' },
              { id: 'menu',    label: 'The Menu' },
              { id: 'contact', label: 'Come Find Me' },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => onTabChange(id)}
                className="hover:text-caramel transition-colors cursor-pointer"
              >
                {label}
              </button>
            ))}
          </div>
          <span className="font-hand text-caramel/35 text-sm">Thanks for stopping by.</span>
        </div>

        <div className="flex items-center gap-5">
          <a href="mailto:kwan.che@northeastern.edu" aria-label="Email" className="text-white/30 hover:text-caramel transition-colors">
            <Mail size={16} />
          </a>
          <a href="https://linkedin.com/in/chelseagkwan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/30 hover:text-caramel transition-colors">
            <Linkedin size={16} />
          </a>
          <a href="https://github.com/chelseakwan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white/30 hover:text-caramel transition-colors">
            <Github size={16} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="ml-2 p-2 rounded-full border border-white/15 text-white/40 hover:text-caramel hover:border-caramel/40 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  )
}
