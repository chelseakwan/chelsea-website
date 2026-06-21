// BrewingBadge — the animated "Currently Brewing" label shown on active/in-progress project cards

export default function BrewingBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-caramel text-white text-xs font-sans font-semibold tracking-wide brew-glow">
      <SteamIcon />
      Currently Brewing
    </span>
  )
}

function SteamIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <path d="M8 14s1-1 1-3-1-3-1-5" />
      <path d="M12 14s1-1 1-3-1-3-1-5" />
      <path d="M16 14s1-1 1-3-1-3-1-5" />
    </svg>
  )
}
