export default function CoffeeBag({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 64 84"
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
      {/* Main bag body */}
      <path d="M9 24 L9 74 Q9 78 13 78 L51 78 Q55 78 55 74 L55 24 Z" />
      {/* Bag base crease */}
      <path d="M9 74 L55 74" strokeOpacity="0.5" />
      {/* Folded top — left flap */}
      <path d="M9 24 L16 10 L32 14" />
      {/* Folded top — right flap */}
      <path d="M55 24 L48 10 L32 14" />
      {/* Top fold line */}
      <path d="M9 24 L55 24" />
      {/* Crease line from fold */}
      <path d="M16 10 L16 24" strokeOpacity="0.45" />
      <path d="M48 10 L48 24" strokeOpacity="0.45" />
      {/* Label */}
      <rect x="14" y="35" width="36" height="24" rx="3" strokeOpacity="0.9" />
      {/* Coffee bean on label */}
      <ellipse cx="32" cy="47" rx="7.5" ry="9" />
      <path d="M32 38 Q29 47 32 56" strokeOpacity="0.55" strokeWidth="1.2" />
      {/* Side panel lines */}
      <path d="M9 28 Q6 50 9 68" strokeOpacity="0.3" strokeWidth="1" />
      <path d="M55 28 Q58 50 55 68" strokeOpacity="0.3" strokeWidth="1" />
    </svg>
  )
}
