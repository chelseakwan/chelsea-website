export default function CoffeeCup({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 92 82"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      {/* Outer saucer */}
      <ellipse cx="45" cy="74" rx="33" ry="7" />
      {/* Saucer inner rim */}
      <ellipse cx="45" cy="74" rx="22" ry="4.5" />
      {/* Cup body */}
      <path d="M17 28 C15 62 25 70 45 70 C65 70 75 62 73 28" />
      {/* Cup top rim */}
      <ellipse cx="45" cy="28" rx="28" ry="6.5" />
      {/* Coffee surface */}
      <ellipse cx="45" cy="29" rx="22" ry="5" strokeOpacity="0.55" />
      {/* Handle */}
      <path d="M73 38 C90 36 92 60 74 58" />
      {/* Zigzag decorative band */}
      <polyline points="20,50 29,41 38,50 47,41 56,50 65,41 73,48" />
    </svg>
  )
}
