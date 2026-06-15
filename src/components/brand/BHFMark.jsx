export default function BHFMark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="The Brady Hunter Foundation"
      className={className}
    >
      <path
        d="M25 55C25 55 20 35 35 28C42 24 48 30 50 38C52 30 58 24 65 28C80 35 75 55 75 55"
        stroke="#001F3F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="38" cy="32" r="3" fill="#001F3F" />
      <circle cx="62" cy="32" r="3" fill="#001F3F" />
      <path d="M42 42C44 46 48 46 50 42" stroke="#001F3F" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M58 42C60 46 64 46 66 42" stroke="#001F3F" strokeWidth="1.5" strokeLinecap="round" />
      <text
        x="50"
        y="72"
        textAnchor="middle"
        fill="#001F3F"
        fontSize="7"
        fontFamily="DM Sans, sans-serif"
        fontWeight="600"
        letterSpacing="0.08em"
      >
        BRADY HUNTER FOUNDATION
      </text>
    </svg>
  )
}
