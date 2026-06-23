import { useState } from 'react'
import { motion } from 'framer-motion'

const sk = name => `/ref/Portfolio website mockup/sketches/${name}`

const inputStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '15px',
  color: '#0B3948',
  background: 'transparent',
  border: '1px solid rgba(11,57,72,0.28)',
  borderRadius: '4px',
  padding: '13px 15px',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
}

export default function ComeFindMe() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [emailLabel, setEmailLabel] = useState('kwan.che@northeastern.edu')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('kwan.che@northeastern.edu').then(() => {
      setEmailLabel('Copied!')
      setTimeout(() => setEmailLabel('kwan.che@northeastern.edu'), 2000)
    })
  }

  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '90px 0', position: 'relative' }}>

      {/* Cup doodle — floats top right */}
      <img
        src={sk('cup2.png')}
        alt="" aria-hidden="true"
        style={{ position: 'absolute', top: '36px', right: '80px', width: '180px', transform: 'rotate(3deg)', '--r': '3deg', animation: 'floaty 8s ease-in-out infinite', mixBlendMode: 'multiply', pointerEvents: 'none' }}
      />

      {/* Section label */}
      <p className="font-mono text-sienna" style={{ fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 6px' }}>
        05 — Contact
      </p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-hand text-maroon"
        style={{ fontSize: '58px', fontWeight: 700, lineHeight: 1, margin: '0 0 8px', transform: 'rotate(-1deg)', display: 'inline-block' }}
      >
        Pull up a chair.
      </motion.h2>

      <p className="font-sans text-prose" style={{ fontSize: '16px', lineHeight: '1.7', margin: '0 0 36px', maxWidth: '480px' }}>
        Got a role, a project, or just want to talk shop about markets, F1, or a good espresso? The counter's open.
      </p>

      {/* Form */}
      <div style={{ maxWidth: '560px' }}>
        {status === 'success' ? (
          <div style={{ border: '1px solid rgba(11,57,72,0.16)', borderRadius: '6px', padding: '32px', textAlign: 'center' }}>
            <p className="font-serif text-maroon" style={{ fontSize: '22px', margin: '0 0 8px' }}>Thanks for stopping by.</p>
            <p className="font-sans text-prose" style={{ fontSize: '14px', margin: 0 }}>I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = '#84ACCE' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(11,57,72,0.28)' }}
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
                style={inputStyle}
                onFocus={e => { e.target.style.borderColor = '#84ACCE' }}
                onBlur={e => { e.target.style.borderColor = 'rgba(11,57,72,0.28)' }}
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              style={{ ...inputStyle, resize: 'vertical', marginBottom: '16px', display: 'block' }}
              onFocus={e => { e.target.style.borderColor = '#84ACCE' }}
              onBlur={e => { e.target.style.borderColor = 'rgba(11,57,72,0.28)' }}
            />
            {status === 'error' && (
              <p role="alert" className="font-sans" style={{ fontSize: '13px', color: '#c0392b', marginBottom: '12px' }}>
                Something went wrong — try emailing directly instead.
              </p>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="font-sans font-semibold text-canvas bg-ink cursor-pointer"
              style={{ fontSize: '15px', border: 'none', borderRadius: '4px', padding: '14px 28px', opacity: status === 'sending' ? 0.6 : 1, transition: 'background 0.18s' }}
              onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.background = '#082731' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#0B3948' }}
            >
              {status === 'sending' ? 'Sending…' : 'Send it over →'}
            </button>
          </form>
        )}

        {/* Footer links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginTop: '36px', paddingTop: '26px', borderTop: '1px solid rgba(11,57,72,0.16)' }}>
          <button
            onClick={copyEmail}
            className="font-sans text-maroon font-medium"
            style={{ fontSize: '14px', background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            ✉ {emailLabel}
          </button>
          <a
            href="https://linkedin.com/in/chelseagkwan"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sienna"
            style={{ fontSize: '14px', textDecoration: 'none' }}
          >
            in / chelseagkwan
          </a>
          <span className="font-sans text-sienna" style={{ fontSize: '14px' }}>
            Boston, MA
          </span>
        </div>
      </div>
    </section>
  )
}
