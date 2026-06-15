export default function Mark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Racket face */}
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 6.5V25.5M6.5 16H25.5M9.3 9.3L22.7 22.7M22.7 9.3L9.3 22.7" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      {/* Ball */}
      <circle cx="29" cy="29" r="7" fill="#E2F700" />
    </svg>
  )
}
