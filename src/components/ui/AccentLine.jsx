export default function AccentLine({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="h-px flex-1 bg-lime" />
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
        className="shrink-0 text-lime"
      >
        <path
          d="M1 11L11 1M11 1H4M11 1V8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
