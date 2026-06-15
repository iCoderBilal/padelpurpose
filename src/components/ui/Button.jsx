const variants = {
  primary:
    'bg-navy text-white hover:bg-blue focus-visible:ring-blue shadow-soft',
  lime:
    'bg-lime text-navy hover:bg-lime-dark focus-visible:ring-lime shadow-soft',
  secondary:
    'bg-navy text-white hover:bg-navy/90 focus-visible:ring-blue border border-navy',
  outline:
    'bg-transparent text-navy border border-navy/30 hover:border-navy hover:bg-navy hover:text-white focus-visible:ring-navy',
  ghost:
    'bg-transparent text-blue hover:text-navy underline-offset-4 hover:underline focus-visible:ring-blue',
}

const sizes = {
  sm: 'px-5 py-2.5 text-[0.7rem] tracking-[0.18em]',
  md: 'px-7 py-3.5 text-xs tracking-[0.18em]',
  lg: 'px-10 py-4.5 text-sm tracking-[0.2em]',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  onClick,
  type = 'button',
  ...props
}) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-none font-sans font-semibold uppercase transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        {...props}
      >
        {children}
        {external && (
          <span className="sr-only">(opens in new tab)</span>
        )}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
