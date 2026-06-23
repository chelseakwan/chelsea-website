export default function FlowerVase({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 74 98"
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
      {/* Carafe body — wide base, narrowing neck */}
      <path d="M12 92 Q10 90 10 74 L10 54 Q10 46 16 44 Q22 42 24 36 L50 36 Q52 42 58 44 Q64 46 64 54 L64 74 Q64 90 62 92 Z" />
      {/* Base rim */}
      <path d="M12 92 L62 92" />
      {/* Neck rim / opening */}
      <path d="M24 36 Q37 32 50 36" />
      {/* Water line inside */}
      <path d="M14 62 Q37 66 60 62" strokeOpacity="0.38" strokeWidth="1.2" />
      {/* Stems */}
      <path d="M26 36 C25 22 20 10 18 3" />
      <path d="M31 36 C31 20 32 11 34 4" />
      <path d="M37 36 C37 24 39 14 42 5" />
      <path d="M44 36 C45 20 49 11 53 5" />
      <path d="M49 36 C51 22 56 12 60 7" />
      {/* Flower heads */}
      <circle cx="18" cy="3" r="5.5" />
      <circle cx="34" cy="4" r="5.5" />
      <circle cx="42" cy="5" r="5" />
      <circle cx="53" cy="5" r="4.5" />
      <circle cx="60" cy="7" r="5.5" />
      {/* Flower centers */}
      <circle cx="18" cy="3" r="2" strokeOpacity="0.5" strokeWidth="1.2" />
      <circle cx="34" cy="4" r="2" strokeOpacity="0.5" strokeWidth="1.2" />
      <circle cx="42" cy="5" r="1.8" strokeOpacity="0.5" strokeWidth="1.2" />
      <circle cx="53" cy="5" r="1.8" strokeOpacity="0.5" strokeWidth="1.2" />
      <circle cx="60" cy="7" r="2" strokeOpacity="0.5" strokeWidth="1.2" />
      {/* Leaves */}
      <path d="M28 18 C22 16 20 22 24 26" strokeWidth="1.4" />
      <path d="M40 17 C46 15 46 22 42 24" strokeWidth="1.4" />
    </svg>
  )
}
