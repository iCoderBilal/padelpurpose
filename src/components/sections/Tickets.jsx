import { tickets, ticketsSection } from '../../data/content'
import { ZEFFY_URL } from '../../constants/links'
import { useReveal } from '../../hooks/useReveal'

function TicketFeature({ ticket, index }) {
  return (
    <article className="overflow-hidden border border-navy/10 bg-white shadow-soft">
      <div className="grid min-h-[22rem] grid-cols-1 lg:min-h-[26vw] lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col justify-between px-7 py-8 md:px-10 md:py-10 lg:px-[2.8vw] lg:py-[2.5vw]">
          <div>
            <span className="inline-flex h-10 w-10 items-center justify-center border border-dashed border-navy/25 font-sans text-xs font-bold tabular-nums tracking-[0.2em] text-navy/40 lg:h-[2.4vw] lg:w-[2.4vw] lg:text-[0.68vw]">
              {String(index + 1).padStart(2, '0')}
            </span>

            <h3 className="mt-8 max-w-md font-hero text-3xl font-semibold uppercase leading-[1.08] tracking-[-0.02em] text-navy md:text-4xl lg:mt-[1.5vw] lg:text-[2.2vw]">
              {ticket.name}
            </h3>
          </div>

          <div className="mt-10 lg:mt-0">
            <p className="flex max-w-2xl flex-wrap gap-x-3 gap-y-2 font-hero-body text-sm leading-relaxed text-ink/60 md:text-base lg:max-w-[42vw] lg:gap-x-[0.6vw] lg:gap-y-[0.4vw] lg:text-[0.92vw] lg:leading-[1.65]">
              {ticket.includes.map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 lg:gap-[0.35vw]">
                  <svg
                    className="h-3.5 w-3.5 shrink-0 text-navy lg:h-[0.85vw] lg:w-[0.85vw]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {item}
                </span>
              ))}
            </p>

            <div className="mt-6 flex flex-wrap items-end justify-between gap-4 lg:mt-[1.2vw]">
              <p className="font-hero text-4xl font-black tracking-[-0.03em] text-navy lg:text-[2.8vw]">
                {ticket.price}
              </p>

              <a
                href={ZEFFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-navy bg-navy px-6 py-3 font-sans text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-transparent hover:text-navy lg:px-[1.2vw] lg:py-[0.65vw] lg:text-[0.68vw]"
              >
                Get Ticket
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[14rem] bg-sand lg:min-h-full">
          <img
            src={ticket.image}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </article>
  )
}

export default function Tickets() {
  const ref = useReveal()

  return (
    <section id="tickets" className="bg-cream py-16 md:py-20 lg:py-[5vw] mt-12 md:mt-16 lg:mt-[4vw]">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-6 md:px-10 lg:px-0 lg:max-w-[80vw]">
        <header className="flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-[3vw]">
          <div>
            <h2 className="mt-3 font-hero text-4xl font-black uppercase leading-[1.02] tracking-[-0.03em] text-navy md:text-5xl lg:mt-[0.6vw] lg:text-[3.4vw]">
              {ticketsSection.heading}
            </h2>
          </div>

          <p className="max-w-xs font-hero-body text-sm leading-relaxed text-ink/55 md:text-base lg:max-w-[18vw] lg:text-right lg:text-[0.95vw]">
            {ticketsSection.subtitle}
          </p>
        </header>

        <div className="mt-10 space-y-6 lg:mt-[2.5vw] lg:space-y-[1.2vw]">
          {tickets.map((ticket, index) => (
            <TicketFeature key={ticket.id} ticket={ticket} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
