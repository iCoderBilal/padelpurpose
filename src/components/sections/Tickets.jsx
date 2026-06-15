import { ticketGallery, tickets, ticketsSection } from '../../data/content'
import { ZEFFY_URL } from '../../constants/links'
import { useReveal } from '../../hooks/useReveal'
import TicketCard from '../ui/TicketCard'

export default function Tickets() {
  const ref = useReveal()

  return (
    <section
      id="tickets"
      className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-20 md:pb-32 lg:pt-[5vw] lg:pb-[8vw]"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent"
        aria-hidden="true"
      />

      <div ref={ref} className="reveal px-6 md:px-10 lg:px-[4vw]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center lg:max-w-[58vw]">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.35em] text-blue md:text-sm lg:text-[0.85vw] lg:tracking-[0.4vw]">
            {ticketsSection.label}
          </p>

          <h2 className="mt-4 font-hero text-4xl font-black uppercase leading-[1.05] tracking-[-0.02em] text-navy md:text-5xl lg:mt-[1vw] lg:text-[3.6vw]">
            {ticketsSection.heading}
          </h2>

          <p className="mt-5 font-hero-body text-base leading-relaxed text-ink/75 md:text-lg lg:mt-[1.2vw] lg:text-[1.15vw] lg:leading-[1.65]">
            {ticketsSection.subtitle}
          </p>
        </div>

        {/* Ticket cards */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:mt-[3.5vw] lg:max-w-[72vw] lg:gap-[1.2vw]">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>

        {/* Experience photos */}
        <div className="mx-auto mt-14 max-w-5xl lg:mt-[4vw] lg:max-w-[72vw]">
          <div className="mb-5 text-center lg:mb-[1.2vw]">
            <p className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.28em] text-navy/60 lg:text-[0.75vw] lg:tracking-[0.22vw]">
              What Awaits
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:gap-[0.8vw]">
            {ticketGallery.map((img) => (
              <div key={img.src} className="overflow-hidden bg-sand">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={960}
                  height={640}
                  className="aspect-[3/2] h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Zeffy trust note */}
        <div className="mx-auto mt-12 max-w-3xl dash-border bg-cream/50 px-6 py-5 text-center lg:mt-[3vw] lg:max-w-[50vw] lg:px-[2vw] lg:py-[1.2vw]">
          <p className="font-hero-body text-sm leading-relaxed text-ink/60 md:text-base lg:text-[0.95vw]">
            {ticketsSection.note}{' '}
            <a
              href={ZEFFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue underline-offset-2 transition-colors hover:text-navy hover:underline"
            >
              Get tickets on Zeffy
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
