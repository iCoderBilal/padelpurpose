import { press, pressSection } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'

function PressLogo({ publication, logo, wide = false, url }) {
  const imageClass = wide
    ? 'h-11 w-auto max-w-[360px] object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100 md:h-12 md:max-w-[440px] lg:h-[3.2vw] lg:max-w-[28vw]'
    : 'h-9 w-auto max-w-[150px] object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100 md:h-10 md:max-w-[170px] lg:h-[2.5vw] lg:max-w-[11vw]'

  const image = (
    <img
      src={logo}
      alt={publication}
      loading="lazy"
      decoding="async"
      className={imageClass}
    />
  )

  return (
    <div className="flex shrink-0 items-center px-8 md:px-10 lg:px-[2.5vw]">
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
        >
          {image}
          <span className="sr-only">Read article on {publication} (opens in new tab)</span>
        </a>
      ) : (
        image
      )}
    </div>
  )
}

function PressMarquee() {
  const logos = [...press, ...press]

  return (
    <div
      className="relative border-y border-white/10 py-8 md:py-10 lg:py-[2vw]"
      aria-label="Publication logos"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-navy to-transparent md:w-16 lg:w-[4vw]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-navy to-transparent md:w-16 lg:w-[4vw]" aria-hidden="true" />

      <div className="overflow-hidden">
        <div className="press-marquee-track items-center">
          {logos.map((item, i) => (
            <PressLogo
              key={`${item.publication}-${i}`}
              publication={item.publication}
              logo={item.logo}
              wide={item.logoWide}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Press() {
  const ref = useReveal()

  return (
    <section id="press" className="bg-navy pt-14 md:pt-16 lg:pt-[4vw] pb-2 md:pb-6 lg:pb-[1vw]" aria-label={pressSection.heading}>
      <div ref={ref} className="reveal">
        <header className="mx-auto mb-10 max-w-3xl px-6 text-center md:mb-12 md:px-10 lg:mb-[2.5vw] lg:max-w-[50vw] lg:px-[4vw]">
          <h2>
            <span className="inline-block bg-lime px-2 py-1 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-navy md:px-2.5 md:py-1.5 md:text-base lg:px-[0.5vw] lg:py-[0.35vw] lg:text-[1.05vw] lg:tracking-[0.18vw]">
              {pressSection.heading}
            </span>
          </h2>
        </header>

        <PressMarquee />
      </div>
    </section>
  )
}
