import Mark from './Mark'

export default function Logo({ size = 'md', className = '', centered = false }) {
  if (size === 'horizontal') {
    return (
      <div className={`flex items-center gap-2.5 select-none ${className}`} aria-label="Padel for a Purpose">
        <Mark className="h-8 w-8 text-navy" />
        <span className="font-serif text-lg font-bold leading-tight text-navy">
          Padel<span className="text-blue"> for a </span>Purpose
        </span>
      </div>
    )
  }

  const sizes = {
    sm: { padel: 'text-2xl', forA: 'text-xs', purpose: 'text-2xl', sub: 'text-[0.55rem]' },
    md: { padel: 'text-4xl md:text-5xl', forA: 'text-sm md:text-base', purpose: 'text-4xl md:text-5xl', sub: 'text-[0.65rem] md:text-xs' },
    lg: { padel: 'text-5xl md:text-7xl lg:text-8xl', forA: 'text-base md:text-lg', purpose: 'text-5xl md:text-7xl lg:text-8xl', sub: 'text-xs md:text-sm' },
  }

  const s = sizes[size]
  const align = centered ? 'text-center items-center' : ''

  return (
    <div className={`flex flex-col select-none ${align} ${className}`} aria-label="Padel for a Purpose">
      <div className="leading-none">
        <span className={`font-serif font-bold text-navy ${s.padel}`}>PADEL</span>
      </div>
      <div className={`font-sans font-bold uppercase tracking-[0.3em] text-blue ${s.forA} -my-0.5 md:-my-1`}>
        FOR A
      </div>
      <div className="leading-none">
        <span className={`font-serif font-bold text-navy ${s.purpose}`}>PURPOSE</span>
      </div>
      <p className={`mt-2 font-sans font-semibold uppercase tracking-[0.2em] text-blue ${s.sub}`}>
        Pro-Am Padel Tournament
      </p>
    </div>
  )
}
