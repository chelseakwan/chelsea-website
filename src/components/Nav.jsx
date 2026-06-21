// Nav — sticky top navigation with scroll-spy (highlights active section as you scroll),
// a mobile hamburger menu, and a always-visible resume download button

import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'

const links = [
  { label: 'Meet the Barista',   href: '#meet-the-barista' },
  { label: 'House Specialties',  href: '#house-specialties' },
  { label: 'Where I Trained',    href: '#where-i-trained' },
  { label: 'Behind the Counter', href: '#behind-the-counter' },
  { label: 'The Menu',           href: '#the-menu' },
  { label: 'The Toolkit',        href: '#the-toolkit' },
  { label: "What's Brewing",     href: '#whats-brewing' },
  { label: 'Come Find Me',       href: '#come-find-me' },
]

export default function Nav() {
  const [active, setActive]   = useState('')
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = links.map(l => l.href.slice(1))
    const observers = sectionIds.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-parchment/95 backdrop-blur-sm shadow-sm border-b border-latte/15' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16" aria-label="Main navigation">
        {/* Logo */}
        <a
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="font-serif text-xl text-espresso hover:text-caramel transition-colors cursor-pointer"
          aria-label="Back to top"
        >
          Chelsea Kwan
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6" role="list">
          {links.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`font-sans text-xs tracking-wide transition-colors cursor-pointer ${
                  active === link.href.slice(1)
                    ? 'text-caramel font-semibold'
                    : 'text-espresso/70 hover:text-espresso'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Resume button + mobile toggle */}
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
            className="lg:hidden p-2 text-espresso hover:text-caramel transition-colors"
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
        <div className="lg:hidden bg-parchment/98 backdrop-blur-sm border-t border-latte/15 px-6 py-4 flex flex-col gap-3">
          {links.map(link => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`text-left font-sans text-sm py-2 border-b border-latte/10 transition-colors cursor-pointer ${
                active === link.href.slice(1) ? 'text-caramel font-semibold' : 'text-espresso/80'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="mt-2 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-caramel text-white text-sm font-sans font-semibold text-center justify-center"
          >
            <Download size={14} aria-hidden="true" />
            Full Résumé
          </a>
        </div>
      )}
    </header>
  )
}
