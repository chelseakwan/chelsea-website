// Tag — a small pill chip used to display skills, tech stack labels, and role types throughout the site

export default function Tag({ label, variant = 'default' }) {
  const styles = {
    default: 'bg-cream text-espresso border border-latte/30',
    accent:  'bg-caramel/15 text-caramel border border-caramel/30',
    chalk:   'bg-white/10 text-white/80 border border-white/20',
  }

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-sans font-medium tracking-wide ${styles[variant]}`}>
      {label}
    </span>
  )
}
