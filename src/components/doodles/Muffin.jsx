export default function Muffin({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 66 72"
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
      {/* Dome top */}
      <path d="M9 40 C8 10 18 4 33 4 C48 4 58 10 57 40" />
      {/* Wrapper body */}
      <path d="M9 40 L9 62 Q9 66 13 66 L53 66 Q57 66 57 62 L57 40 Z" />
      {/* Wrapper top crease */}
      <path d="M9 40 L57 40" strokeOpacity="0.6" />
      {/* Vertical pleats on wrapper */}
      <line x1="17" y1="40" x2="15" y2="66" strokeOpacity="0.35" strokeWidth="1.2" />
      <line x1="25" y1="40" x2="24" y2="66" strokeOpacity="0.35" strokeWidth="1.2" />
      <line x1="33" y1="40" x2="33" y2="66" strokeOpacity="0.35" strokeWidth="1.2" />
      <line x1="41" y1="40" x2="42" y2="66" strokeOpacity="0.35" strokeWidth="1.2" />
      <line x1="49" y1="40" x2="51" y2="66" strokeOpacity="0.35" strokeWidth="1.2" />
      {/* Chocolate chips on dome */}
      <ellipse cx="22" cy="22" rx="4.5" ry="3.2" />
      <ellipse cx="35" cy="14" rx="5" ry="3.5" />
      <ellipse cx="46" cy="24" rx="4" ry="3" />
      <ellipse cx="27" cy="33" rx="3.5" ry="2.8" />
      <ellipse cx="44" cy="34" rx="3.2" ry="2.5" strokeOpacity="0.7" />
    </svg>
  )
}
