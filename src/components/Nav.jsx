import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const TABS = [
  { id: 'home',    label: 'Home',           n: '01' },
  { id: 'barista', label: 'The Barista',    n: '02' },
  { id: 'menu',    label: 'The Menu',       n: '03' },
  { id: 'brewing', label: "What's Brewing", n: '04' },
  { id: 'contact', label: 'Contact',        n: '05' },
]

export default function Nav({ activeTab, onTabChange }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const go = (id) => { onTabChange(id); setMobileOpen(false) }

  return (
    <>
      {/* ── Desktop right rail ── */}
      <nav
        className="hidden md:flex fixed top-0 right-0 bottom-0 z-50 flex-col justify-between items-end"
        style={{ width: '240px', padding: '40px 36px', borderLeft: '1px solid rgba(11,57,72,0.12)', background: '#F9F5E3' }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2 cursor-pointer bg-transparent border-none"
        >
          <span className="font-serif font-semibold text-maroon" style={{ fontSize: '18px', letterSpacing: '-0.01em' }}>
            Chelsea Kwan
          </span>
          <img
            src="/ref/Portfolio website mockup/sketches/cup2.png"
            alt=""
            style={{ height: '28px', width: 'auto', mixBlendMode: 'multiply' }}
          />
        </button>

        {/* Tab list */}
        <div className="flex flex-col items-end gap-1 w-full">
          {TABS.map(tab => {
            const active = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => go(tab.id)}
                className="flex items-center justify-end gap-3 w-full bg-transparent border-none cursor-pointer"
                style={{ padding: '8px 0' }}
                aria-current={active ? 'page' : undefined}
              >
                <span className="font-mono text-sienna" style={{ fontSize: '11px', opacity: 0.6 }}>
                  {tab.n}
                </span>
                <span
                  className="font-serif"
                  style={{
                    fontSize: '17px',
                    letterSpacing: '-0.01em',
                    color: active ? '#66101F' : '#65472A',
                    fontWeight: active ? 600 : 400,
                    transition: 'color 0.2s',
                  }}
                >
                  {tab.label}
                </span>
                <span
                  style={{
                    height: '2px',
                    width: active ? '20px' : '0px',
                    background: '#66101F',
                    borderRadius: '2px',
                    transition: 'width 0.25s ease',
                    flexShrink: 0,
                  }}
                />
              </button>
            )
          })}
        </div>

        {/* Resume */}
        <a
          href="/resume.pdf"
          download
          className="font-sans text-sienna transition-colors"
          style={{
            fontSize: '13px',
            fontWeight: 500,
            background: 'none',
            border: '1px solid rgba(101,71,42,0.5)',
            borderRadius: '3px',
            padding: '8px 14px',
            textDecoration: 'none',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#65472A'; e.currentTarget.style.color = '#F9F5E3' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#65472A' }}
        >
          Full Résumé ↓
        </a>
      </nav>

      {/* ── Mobile top bar ── */}
      <header
        className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3.5"
        style={{ background: '#F9F5E3', borderBottom: '1px solid rgba(11,57,72,0.12)' }}
      >
        <button
          onClick={() => go('home')}
          className="font-serif font-semibold text-maroon text-lg cursor-pointer bg-transparent border-none"
        >
          Chelsea Kwan
        </button>
        <button
          onClick={() => setMobileOpen(o => !o)}
          className="text-ink cursor-pointer bg-transparent border-none p-1"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div
          className="md:hidden fixed top-[52px] left-0 right-0 z-50 flex flex-col gap-0.5 px-5 pb-5 pt-3"
          style={{ background: '#F9F5E3', borderBottom: '1px solid rgba(11,57,72,0.12)' }}
        >
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => go(tab.id)}
              className="flex items-center gap-3 py-2.5 bg-transparent border-none cursor-pointer text-left"
            >
              <span className="font-mono text-sienna text-[11px]" style={{ opacity: 0.6 }}>{tab.n}</span>
              <span
                className="font-serif text-lg"
                style={{ color: activeTab === tab.id ? '#66101F' : '#65472A', fontWeight: activeTab === tab.id ? 600 : 400 }}
              >
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <span style={{ height: '2px', width: '14px', background: '#66101F', borderRadius: '2px' }} />
              )}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="mt-3 font-sans text-sienna text-sm text-center block"
            style={{ border: '1px solid rgba(101,71,42,0.5)', borderRadius: '3px', padding: '10px', textDecoration: 'none' }}
          >
            Full Résumé ↓
          </a>
        </div>
      )}
    </>
  )
}
