import { tickets, ticketsSection } from '../../data/content'
import { ZEFFY_URL } from '../../constants/links'
import { useReveal } from '../../hooks/useReveal'
import Button from '../ui/Button'

function GetTicketButton({ className = '' }) {
  return (
    <Button
      href={ZEFFY_URL}
      external
      variant="lime"
      size="md"
      className={`min-w-[11rem] gap-2.5 shadow-lift hover:shadow-[0_14px_36px_rgba(0,31,63,0.14)] lg:min-w-[12vw] lg:gap-[0.45vw] lg:px-[1.5vw] lg:py-[0.8vw] lg:text-[0.72vw] ${className}`}
    >
      Get Ticket
      <svg
        className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 lg:h-[0.9vw] lg:w-[0.9vw]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </Button>
  )
}

function TicketFeature({ ticket, index }) {
  return (
    <article className="overflow-hidden border border-navy/10 bg-white shadow-soft">
      <div className="grid min-h-[22rem] grid-cols-1 md:grid-cols-[1.15fr_0.85fr] lg:min-h-[26vw]">
        <div className="flex flex-col justify-between px-7 py-8 md:px-10 md:py-10 lg:px-[2.8vw] lg:py-[2.5vw]">
          <div>
            <span className="inline-flex h-10 w-10 items-center justify-center border border-dashed border-navy/25 font-sans text-xs font-bold tabular-nums tracking-[0.2em] text-navy/40 lg:h-[2.4vw] lg:w-[2.4vw] lg:text-[0.68vw]">
              {String(index + 1).padStart(2, '0')}
            </span>

            <h3 className="mt-8 max-w-md font-hero text-3xl font-semibold uppercase leading-[1.08] tracking-[-0.02em] text-navy md:text-4xl lg:mt-[1.5vw] lg:text-[2.2vw]">
              {ticket.name}
            </h3>
          </div>

          <div className="mt-10 md:mt-0">
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

            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between lg:mt-[1.2vw]">
              <p className="font-hero text-4xl font-black tracking-[-0.03em] text-navy lg:text-[2.8vw]">
                {ticket.price}
              </p>

              <GetTicketButton className="w-full sm:w-auto" />
            </div>
          </div>
        </div>

        <div className="relative min-h-[14rem] overflow-hidden bg-sand md:min-h-full">
          <img
            src={ticket.image}
            alt=""
            loading="lazy"
            width={800}
            height={600}
            className="block h-[14rem] w-full md:h-full md:min-h-[22rem] lg:min-h-[26vw] lg:w-full lg:object-cover"
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
