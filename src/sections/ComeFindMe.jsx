// ComeFindMe — Contact section. Warm intro, a basic form (ready to wire to Formspree/EmailJS),
// and direct links to email, LinkedIn, and GitHub.

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send } from 'lucide-react'

export default function ComeFindMe() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    // Replace the action URL below with your Formspree endpoint, e.g.:
    // https://formspree.io/f/your_id
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

  const inputClass =
    'w-full bg-cream border border-latte/25 rounded-xl px-4 py-3 font-sans text-sm text-espresso placeholder:text-espresso/35 focus:outline-none focus:border-caramel transition-colors'

  return (
    <section id="come-find-me" className="bg-parchment bg-paper-texture section-padding">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-hand text-caramel text-lg mb-2">contact</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-tight mb-5">
            Come Find Me
          </h2>
          <p className="font-sans text-base text-espresso/65 leading-relaxed mb-8">
            Pull up a chair. Whether you're a recruiter, collaborator, or just curious — I'd love to hear from you.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:kwan.che@northeastern.edu"
              className="flex items-center gap-3 text-espresso/70 hover:text-caramel transition-colors group"
              aria-label="Send email"
            >
              <span className="p-2 rounded-lg bg-cream border border-latte/20 group-hover:border-caramel/30 transition-colors" aria-hidden="true">
                <Mail size={16} />
              </span>
              <span className="font-sans text-sm">kwan.che@northeastern.edu</span>
            </a>
            <a
              href="https://linkedin.com/in/chelseagkwan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-espresso/70 hover:text-caramel transition-colors group"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <span className="p-2 rounded-lg bg-cream border border-latte/20 group-hover:border-caramel/30 transition-colors" aria-hidden="true">
                <Linkedin size={16} />
              </span>
              <span className="font-sans text-sm">linkedin.com/in/chelseagkwan</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-espresso/70 hover:text-caramel transition-colors group"
              aria-label="GitHub profile (opens in new tab)"
            >
              <span className="p-2 rounded-lg bg-cream border border-latte/20 group-hover:border-caramel/30 transition-colors" aria-hidden="true">
                <Github size={16} />
              </span>
              <span className="font-sans text-sm">GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {status === 'success' ? (
            <div className="rounded-2xl bg-cream border border-latte/20 p-8 text-center">
              <p className="font-serif text-2xl text-espresso mb-2">Thanks for stopping by.</p>
              <p className="font-sans text-sm text-espresso/60">I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block font-sans text-xs font-medium text-espresso/60 mb-1.5">
                  Your name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className={inputClass}
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-sans text-xs font-medium text-espresso/60 mb-1.5">
                  Email address <span aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  className={inputClass}
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-sans text-xs font-medium text-espresso/60 mb-1.5">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === 'error' && (
                <p role="alert" className="font-sans text-xs text-red-600">
                  Something went wrong. Try emailing me directly instead.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-espresso text-parchment font-sans font-semibold text-sm tracking-wide hover:bg-caramel transition-colors disabled:opacity-50 cursor-pointer"
              >
                <Send size={14} aria-hidden="true" />
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  )
}
