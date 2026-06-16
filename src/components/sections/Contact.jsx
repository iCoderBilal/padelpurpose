import { contactSection } from '../../data/content'
import { ZEFFY_URL, CONTACT } from '../../constants/links'
import { useReveal } from '../../hooks/useReveal'
import Button from '../ui/Button'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="bg-cream pb-24 pt-14 md:pb-28 md:pt-16 lg:pb-[6vw] lg:pt-[4vw]" aria-label="Get tickets and contact">
      <div ref={ref} className="reveal mx-auto px-6 md:px-10 lg:max-w-[80vw] lg:px-[4vw]">
        <div className="relative overflow-hidden bg-navy px-8 py-14 text-center shadow-lift md:px-14 md:py-20 lg:px-[4vw] lg:py-[5vw]">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lime/10 blur-3xl md:h-64 md:w-64 lg:h-[18vw] lg:w-[18vw]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue/10 blur-3xl lg:h-[20vw] lg:w-[20vw]"
            aria-hidden="true"
          />

          <div className="relative">
            <span className="inline-block bg-lime px-2.5 py-1 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-navy md:px-3 md:py-1.5 md:text-base lg:px-[0.6vw] lg:py-[0.35vw] lg:text-[1.05vw] lg:tracking-[0.18vw]">
              {contactSection.badge}
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl font-hero text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.02em] text-white md:text-5xl lg:mt-[1.2vw] lg:max-w-[40vw] lg:text-[3.5vw]">
              {contactSection.heading}
            </h2>

            <p className="mx-auto mt-5 max-w-xl font-hero-body text-sm leading-relaxed text-white/60 md:text-base lg:mt-[1vw] lg:max-w-[32vw] lg:text-[1.05vw] lg:leading-[1.65]">
              {contactSection.body}
            </p>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center lg:mt-[2vw] lg:gap-[0.8vw]">
              <Button
                href={ZEFFY_URL}
                external
                variant="lime"
                size="lg"
                className="w-full sm:w-auto sm:min-w-[16rem] lg:min-w-[18vw] lg:px-[2vw] lg:py-[0.9vw] lg:text-[0.85vw]"
              >
                {contactSection.ctaPrimary}
              </Button>
              <a
                href={CONTACT.emailHref}
                className="inline-flex w-full items-center justify-center gap-2 border border-white/25 bg-transparent px-10 py-4.5 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-navy sm:w-auto sm:min-w-[14rem] lg:min-w-[14vw] lg:px-[1.8vw] lg:py-[0.9vw] lg:text-[0.85vw]"
              >
                {contactSection.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="relative mt-14 border-t border-white/10 pt-10 md:mt-16 lg:mt-[3vw] lg:pt-[2.5vw]">
            <p className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.28em] text-lime md:text-xs lg:text-[0.72vw]">
              {contactSection.contactLabel}
            </p>

            <div className="mt-8 grid gap-8 text-center sm:grid-cols-3 sm:gap-6 lg:mt-[1.5vw] lg:gap-[1.5vw]">
              <div className="sm:text-left">
                <p className="font-hero text-xl font-semibold text-white md:text-2xl lg:text-[1.35vw]">
                  {CONTACT.name}
                </p>
                <p className="mt-1 font-sans text-xs italic text-white/50 md:text-sm lg:mt-[0.3vw] lg:text-[0.85vw]">
                  {CONTACT.title}
                </p>
              </div>

              <div className="flex flex-col items-center sm:items-start sm:justify-center">
                <p className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/40 lg:text-[0.68vw]">
                  Phone
                </p>
                <a
                  href={CONTACT.phoneHref}
                  className="mt-1.5 font-sans text-lg font-semibold text-white transition-colors hover:text-lime md:text-xl lg:mt-[0.35vw] lg:text-[1.1vw]"
                >
                  {CONTACT.phone}
                </a>
              </div>

              <div className="flex flex-col items-center sm:items-start sm:justify-center">
                <p className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/40 lg:text-[0.68vw]">
                  Email
                </p>
                <a
                  href={CONTACT.emailHref}
                  className="mt-1.5 break-all font-sans text-lg font-semibold text-white transition-colors hover:text-lime md:text-xl lg:mt-[0.35vw] lg:text-[1.1vw]"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
