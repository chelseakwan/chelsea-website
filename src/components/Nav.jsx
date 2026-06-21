// Nav — tab-based top navigation. Clicking a tab swaps the page content instead of scrolling.
// Active tab is highlighted. Resume download always visible.

import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'

const tabs = [
  { id: 'about',    label: 'About' },
  { id: 'menu',     label: 'The Menu' },
  { id: 'brewing',  label: "What's Brewing" },
  { id: 'contact',  label: 'Come Find Me' },
]

export default function Nav({ activeTab, onTabChange }) {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleTab = (id) => {
    setOpen(false)
    onTabChange(id)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || activeTab !== 'home'
          ? 'bg-parchment/95 backdrop-blur-sm shadow-sm border-b border-latte/15'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo — always goes home */}
        <button
          onClick={() => handleTab('home')}
          className="font-serif text-xl text-espresso hover:text-caramel transition-colors cursor-pointer"
          aria-label="Go to home"
        >
          Chelsea Kwan
        </button>

        {/* Desktop tabs */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {tabs.map(tab => (
            <li key={tab.id}>
              <button
                onClick={() => handleTab(tab.id)}
                className={`px-4 py-2 rounded-full font-sans text-sm transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-espresso text-parchment font-semibold'
                    : 'text-espresso/65 hover:text-espresso hover:bg-cream'
                }`}
                aria-current={activeTab === tab.id ? 'page' : undefined}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Resume + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-caramel text-caramel text-xs font-sans font-semibold tracking-wide hover:bg-caramel hover:text-white transition-colors"
            aria-label="Download full résumé"
          >
            <Download size={13} aria-hidden="true" />
            Full Résumé
          </a>

          <button
            className="md:hidden p-2 text-espresso hover:text-caramel transition-colors"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-parchment/98 backdrop-blur-sm border-t border-latte/15 px-6 py-4 flex flex-col gap-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTab(tab.id)}
              className={`text-left font-sans text-sm py-3 px-4 rounded-xl transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-espresso text-parchment font-semibold'
                  : 'text-espresso/75 hover:bg-cream'
              }`}
              aria-current={activeTab === tab.id ? 'page' : undefined}
            >
              {tab.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="mt-2 inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-caramel text-white text-sm font-sans font-semibold justify-center"
          >
            <Download size={14} aria-hidden="true" />
            Full Résumé
          </a>
        </div>
      )}
    </header>
  )
}
