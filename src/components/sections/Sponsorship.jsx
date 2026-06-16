import { sponsorshipSection } from '../../data/content'
import { ZEFFY_URL, CONTACT } from '../../constants/links'
import { useReveal } from '../../hooks/useReveal'

export default function Sponsorship() {
  const ref = useReveal()
  const { featured } = sponsorshipSection

  return (
    <section
      id="sponsors"
      className="relative overflow-hidden bg-cream pt-16 pb-24 md:pt-20 md:pb-32 lg:pt-[5vw] lg:pb-[8vw]"
    >
      <div ref={ref} className="reveal px-6 md:px-10 lg:px-[4vw]">
        <div className="mx-auto grid max-w-5xl gap-10 lg:max-w-[72vw] lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-[3vw]">
          {/* Copy */}
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.35em] text-blue md:text-sm lg:text-[0.85vw] lg:tracking-[0.4vw]">
              {sponsorshipSection.label}
            </p>

            <h2 className="mt-4 font-hero text-4xl font-black uppercase leading-[1.05] tracking-[-0.02em] text-navy md:text-5xl lg:mt-[1vw] lg:text-[3.2vw]">
              {sponsorshipSection.heading}
            </h2>

            <p className="mt-5 font-hero-body text-base leading-relaxed text-ink/75 md:text-lg lg:mt-[1.2vw] lg:text-[1.1vw] lg:leading-[1.65]">
              {sponsorshipSection.subtitle}
            </p>

            <a
              href={ZEFFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-navy px-8 py-4 font-sans text-xs font-bold uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-blue lg:mt-[2vw] lg:px-[1.8vw] lg:py-[0.9vw] lg:text-[0.75vw]"
            >
              View All on Zeffy
              <span className="sr-only">(opens in new tab)</span>
            </a>

            <p className="mt-5 font-hero-body text-sm text-ink/55 lg:mt-[1.2vw] lg:text-[0.95vw]">
              For custom packages,{' '}
              <a
                href={CONTACT.emailHref}
                className="font-semibold text-blue underline-offset-2 hover:text-navy hover:underline"
              >
                contact {CONTACT.name.split(' ')[0]}
              </a>
              .
            </p>
          </div>

          {/* Featured tier */}
          <div className="dash-border bg-white px-7 py-8 md:px-9 md:py-10 lg:px-[2vw] lg:py-[2.2vw]">
            <span className="inline-block bg-lime px-3 py-1 font-sans text-[0.65rem] font-bold uppercase tracking-[0.2em] text-navy lg:px-[0.7vw] lg:py-[0.25vw] lg:text-[0.65vw]">
              {featured.badge}
            </span>

            <p className="mt-5 font-sans text-xs font-bold uppercase tracking-[0.22em] text-blue lg:mt-[1vw] lg:text-[0.75vw]">
              {featured.name}
            </p>

            <p className="mt-2 font-hero text-5xl font-black leading-none tracking-[-0.03em] text-navy md:text-6xl lg:text-[3.5vw]">
              {featured.price}
            </p>

            <p className="mt-5 font-hero-body text-sm leading-relaxed text-ink/65 md:text-base lg:mt-[1vw] lg:text-[0.95vw]">
              {featured.summary}
            </p>

            <a
              href={ZEFFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center bg-navy px-8 py-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-blue lg:mt-[1.8vw] lg:py-[0.9vw] lg:text-[0.75vw]"
            >
              Sponsor on Zeffy
              <span className="sr-only">(opens in new tab)</span>
            </a>

            <p className="mt-4 text-center font-hero-body text-xs text-ink/45 lg:mt-[1vw] lg:text-[0.8vw]">
              {sponsorshipSection.zeffyNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
