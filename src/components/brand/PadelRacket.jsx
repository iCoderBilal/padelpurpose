export default function PadelRacket({ className = '', flip = false }) {
  return (
    <svg
      viewBox="0 0 120 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`${flip ? 'scale-x-[-1]' : ''} ${className}`}
    >
      <ellipse cx="60" cy="90" rx="52" ry="68" fill="#E2F700" />
      <ellipse cx="60" cy="90" rx="38" ry="52" fill="none" stroke="#001F3F" strokeWidth="2" opacity="0.15" />
      <line x1="30" y1="70" x2="90" y2="110" stroke="#001F3F" strokeWidth="1.5" opacity="0.12" />
      <line x1="30" y1="110" x2="90" y2="70" stroke="#001F3F" strokeWidth="1.5" opacity="0.12" />
      <line x1="60" y1="30" x2="60" y2="150" stroke="#001F3F" strokeWidth="1.5" opacity="0.12" />
      <line x1="20" y1="90" x2="100" y2="90" stroke="#001F3F" strokeWidth="1.5" opacity="0.12" />
      <rect x="52" y="155" width="16" height="130" rx="4" fill="#E2F700" />
      <rect x="54" y="280" width="12" height="30" rx="3" fill="#C8DB00" />
    </svg>
  )
}
