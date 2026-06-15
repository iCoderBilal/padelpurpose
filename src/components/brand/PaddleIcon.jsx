export default function PaddleIcon({ className = '' }) {
  const dots = []
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 7; c++) {
      const cx = 18 + c * 12.5 + (r % 2 === 0 ? 0 : 6)
      const cy = 16 + r * 11
      const dx = cx - 60
      const dy = cy - 58
      if ((dx * dx) / (46 * 46) + (dy * dy) / (56 * 56) <= 1) {
        dots.push(<circle key={`${r}-${c}`} cx={cx} cy={cy} r="2.6" fill="#FAF9F4" />)
      }
    }
  }

  return (
    <svg viewBox="0 0 120 145" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
      <path
        d="M60 4C90 4 108 34 104 64C100 98 78 116 60 122C42 116 20 98 16 64C12 34 30 4 60 4Z"
        fill="#E2F700"
      />
      {dots}
      <path d="M50 120H70L60 142L50 120Z" fill="#E2F700" />
    </svg>
  )
}
