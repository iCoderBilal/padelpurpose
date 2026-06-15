export default function PadelBall({ className = '' }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <circle cx="40" cy="40" r="36" fill="#E2F700" />
      <path
        d="M12 28C22 18 58 18 68 28"
        stroke="#001F3F"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.2"
      />
      <path
        d="M12 52C22 62 58 62 68 52"
        stroke="#001F3F"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.2"
      />
      <ellipse cx="40" cy="40" rx="8" ry="36" fill="none" stroke="#001F3F" strokeWidth="1.5" opacity="0.15" />
    </svg>
  )
}
