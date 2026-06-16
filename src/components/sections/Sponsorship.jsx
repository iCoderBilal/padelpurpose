import { useEffect, useState } from 'react'
import { sponsorshipSection, sponsorshipTiers } from '../../data/content'
import { ZEFFY_URL, CONTACT } from '../../constants/links'
import { useReveal } from '../../hooks/useReveal'

const PREVIEW_COUNT = sponsorshipSection.previewCount

function useVisibleCount() {
  const [count, setCount] = useState(1)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setCount(3)
      else if (window.innerWidth >= 768) setCount(2)
      else setCount(1)
    }

    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])

  return count
}

function ArrowButton({ direction, onClick, disabled }) {
  const label = direction === 'prev' ? 'Previous sponsorship tiers' : 'Next sponsorship tiers'

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-soft transition-all duration-300 hover:border-navy hover:bg-navy hover:text-lime disabled:pointer-events-none disabled:opacity-30 lg:h-[2.8vw] lg:w-[2.8vw]"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={direction === 'next' ? 'translate-x-px' : '-translate-x-px'}
      >
        {direction === 'prev' ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  )
}

function SponsorshipCard({ tier }) {
  const preview = tier.benefits.slice(0, PREVIEW_COUNT)
  const hasMore = tier.benefits.length > PREVIEW_COUNT

  return (
    <article className="flex h-full w-full min-w-0 flex-col dash-border bg-white p-6 shadow-lift md:p-7 lg:p-[1.6vw]">
      {tier.featured && tier.badge && (
        <span className="mb-4 inline-block w-fit bg-lime px-2.5 py-1 font-sans text-[0.6rem] font-bold uppercase tracking-[0.18em] text-navy lg:mb-[0.8vw] lg:px-[0.5vw] lg:py-[0.2vw] lg:text-[0.62vw]">
          {tier.badge}
        </span>
      )}

      <h3 className="font-hero text-xl font-semibold uppercase leading-tight tracking-[-0.02em] text-navy md:text-2xl lg:text-[1.35vw]">
        {tier.name}
      </h3>

      <p className="mt-3 font-hero text-4xl font-black leading-none tracking-[-0.03em] text-navy md:text-5xl lg:mt-[0.6vw] lg:text-[2.4vw]">
        {tier.price}
      </p>

      <ul className="mt-6 flex-1 space-y-2.5 border-t border-dashed border-navy/15 pt-5 lg:mt-[1.2vw] lg:space-y-[0.45vw] lg:pt-[1vw]">
        {preview.map((benefit) => (
          <li
            key={benefit}
            className="flex gap-2 font-hero-body text-sm leading-snug text-ink/70 lg:text-[0.88vw] lg:leading-[1.45]"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-lime lg:mt-[0.35vw] lg:h-[0.25vw] lg:w-[0.25vw]" aria-hidden="true" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      {hasMore && (
        <a
          href={ZEFFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit font-sans text-[0.65rem] font-bold uppercase tracking-[0.16em] text-blue underline-offset-2 transition-colors hover:text-navy hover:underline lg:mt-[0.8vw] lg:text-[0.68vw]"
        >
          Read more
          <span className="sr-only"> — full {tier.name} benefits on Zeffy (opens in new tab)</span>
        </a>
      )}

      <a
        href={ZEFFY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center border border-navy bg-navy px-6 py-3.5 font-sans text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-transparent hover:text-navy lg:mt-[1.2vw] lg:py-[0.75vw] lg:text-[0.68vw]"
      >
        Request Sponsorship
        <span className="sr-only"> (opens in new tab)</span>
      </a>
    </article>
  )
}

export default function Sponsorship() {
  const ref = useReveal()
  const visible = useVisibleCount()
  const maxIndex = Math.max(0, sponsorshipTiers.length - visible)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex))
  }, [maxIndex])

  const prev = () => setIndex((current) => Math.max(0, current - 1))
  const next = () => setIndex((current) => Math.min(maxIndex, current + 1))
  const slideCount = sponsorshipTiers.length
  const trackWidth = (slideCount / visible) * 100
  const slideWidth = 100 / slideCount

  return (
    <section
      id="sponsors"
      className="relative overflow-hidden bg-cream pt-16 pb-24 md:pt-20 md:pb-32 lg:pt-[5vw] lg:pb-[8vw]"
    >
      <div ref={ref} className="reveal px-6 md:px-10 lg:px-[4vw]">
        <header className="mx-auto max-w-3xl text-center lg:max-w-[50vw]">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.35em] text-blue md:text-sm lg:text-[0.85vw] lg:tracking-[0.4vw]">
            {sponsorshipSection.label}
          </p>

          <h2 className="mt-4 font-hero text-4xl font-black uppercase leading-[1.05] tracking-[-0.02em] text-navy md:text-5xl lg:mt-[1vw] lg:text-[3.2vw]">
            {sponsorshipSection.heading}
          </h2>

          <p className="mt-5 font-hero-body text-base leading-relaxed text-ink/70 md:text-lg lg:mt-[1.2vw] lg:text-[1.05vw] lg:leading-[1.65]">
            {sponsorshipSection.subtitle}
          </p>
        </header>

        <div className="mx-auto mt-12 flex max-w-7xl items-center gap-3 md:mt-14 md:gap-4 lg:mt-[3vw] lg:max-w-[89vw] lg:gap-[1vw]">
          <ArrowButton direction="prev" onClick={prev} disabled={index === 0} />

          <div className="min-w-0 flex-1 overflow-hidden">
            <div
              className="flex items-stretch transition-transform duration-500 ease-out"
              style={{
                width: `${trackWidth}%`,
                transform: `translateX(-${index * slideWidth}%)`,
              }}
            >
              {sponsorshipTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="box-border flex min-w-0 shrink-0 px-1.5 md:px-2 lg:px-[0.5vw]"
                  style={{ width: `${slideWidth}%` }}
                >
                  <SponsorshipCard tier={tier} />
                </div>
              ))}
            </div>
          </div>

          <ArrowButton direction="next" onClick={next} disabled={index >= maxIndex} />
        </div>

      </div>
    </section>
  )
}
