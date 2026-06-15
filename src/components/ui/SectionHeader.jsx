export default function SectionHeader({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {label && (
        <span
          className={`kicker flex items-center gap-3 ${
            light ? 'text-lime' : 'text-blue'
          }`}
        >
          <span
            className={`h-px w-7 ${light ? 'bg-lime/60' : 'bg-blue/40'}`}
            aria-hidden="true"
          />
          {label}
        </span>
      )}
      {title && (
        <h2
          className={`mt-5 font-serif text-[2rem] font-bold leading-[1.08] tracking-[-0.01em] md:text-5xl lg:text-[3.25rem] ${
            light ? 'text-white' : 'text-navy'
          }`}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={`mt-5 max-w-xl font-sans text-base leading-relaxed md:text-lg ${
            light ? 'text-white/70' : 'text-ink/65'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
