export default function Teapot({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 108 92"
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
      {/* Body */}
      <path d="M24 34 Q20 72 34 80 Q53 86 72 80 Q86 72 82 34 Q82 26 53 24 Q24 26 24 34 Z" />
      {/* Base ring */}
      <path d="M36 80 Q53 84 70 80" strokeOpacity="0.5" />
      {/* Lid edge */}
      <path d="M34 32 Q53 22 72 32" />
      {/* Lid dome */}
      <path d="M38 30 Q53 18 68 30" />
      {/* Finial stem */}
      <line x1="53" y1="18" x2="53" y2="10" />
      {/* Finial ball */}
      <circle cx="53" cy="7" r="4.5" />
      {/* Spout — curved upward */}
      <path d="M24 46 C12 40 6 28 10 17 C12 10 18 12 16 20" />
      {/* Spout rim */}
      <path d="M10 17 C8 14 10 11 13 12" />
      {/* Handle */}
      <path d="M82 40 C100 36 102 58 100 66 C98 74 84 70 82 62" />
      {/* Decorative belly lines */}
      <path d="M32 54 Q53 62 74 54" strokeOpacity="0.38" strokeWidth="1.2" />
      <path d="M30 64 Q53 72 76 64" strokeOpacity="0.38" strokeWidth="1.2" />
    </svg>
  )
}
