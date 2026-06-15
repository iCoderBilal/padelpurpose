import { ZEFFY_URL } from '../../constants/links'
import Button from './Button'

export default function TicketCard({ ticket }) {
  const highlighted = ticket.highlight

  return (
    <article
      className={`relative flex h-full flex-col ${
        highlighted
          ? 'border-2 border-lime bg-navy text-white'
          : 'dash-border bg-white/80'
      }`}
    >
      {highlighted && (
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lime px-4 py-1 font-sans text-[0.65rem] font-bold uppercase tracking-[0.22em] text-navy lg:px-[1vw] lg:py-[0.25vw] lg:text-[0.65vw]">
          Most Popular
        </span>
      )}

      <div className="flex flex-1 flex-col px-7 py-9 md:px-9 md:py-10 lg:px-[2vw] lg:py-[2.2vw]">
        <p
          className={`font-sans text-[0.7rem] font-bold uppercase tracking-[0.28em] ${
            highlighted ? 'text-lime' : 'text-blue'
          } lg:text-[0.75vw] lg:tracking-[0.24vw]`}
        >
          {ticket.tagline}
        </p>

        <h3
          className={`mt-3 font-hero text-2xl font-semibold uppercase leading-tight tracking-[-0.01em] md:text-[1.75rem] lg:mt-[0.6vw] lg:text-[1.55vw]`}
        >
          {ticket.name}
        </h3>

        <p
          className={`mt-5 font-hero text-5xl font-black leading-none tracking-[-0.03em] md:text-6xl lg:mt-[1vw] lg:text-[3.8vw]`}
        >
          {ticket.price}
        </p>

        <div
          className={`my-7 h-px w-full lg:my-[1.5vw] ${
            highlighted ? 'bg-white/15' : 'bg-navy/10'
          }`}
        />

        <p
          className={`font-hero-body text-sm leading-relaxed md:text-base lg:text-[0.95vw] lg:leading-[1.65] ${
            highlighted ? 'text-white/75' : 'text-ink/65'
          }`}
        >
          {ticket.description}
        </p>

        <ul className="mt-7 flex-1 space-y-3 lg:mt-[1.5vw] lg:space-y-[0.65vw]">
          {ticket.includes.map((item) => (
            <li
              key={item}
              className={`flex items-start gap-3 font-hero-body text-sm lg:text-[0.92vw] ${
                highlighted ? 'text-white/90' : 'text-ink/80'
              }`}
            >
              <span
                className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                  highlighted ? 'bg-lime' : 'bg-blue'
                }`}
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>

        {ticket.disclaimer && (
          <p
            className={`mt-6 font-hero-body text-xs italic leading-relaxed lg:mt-[1.2vw] lg:text-[0.8vw] ${
              highlighted ? 'text-white/45' : 'text-ink/45'
            }`}
          >
            {ticket.disclaimer}
          </p>
        )}

        {highlighted ? (
          <a
            href={ZEFFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex w-full items-center justify-center gap-3 border border-lime bg-lime px-8 py-4 font-sans text-xs font-bold uppercase tracking-[0.22em] text-navy transition-all duration-300 hover:bg-transparent hover:text-lime lg:mt-[1.8vw] lg:px-[1.8vw] lg:py-[0.9vw] lg:text-[0.75vw] lg:tracking-[0.2vw]"
          >
            Get Ticket
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-navy/20 transition-colors duration-300 group-hover:border-lime group-hover:bg-navy">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-3.5 w-3.5 text-navy transition-colors duration-300 group-hover:text-lime"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="sr-only">(opens in new tab)</span>
          </a>
        ) : (
          <Button
            href={ZEFFY_URL}
            external
            variant="primary"
            size="lg"
            className="mt-8 w-full lg:mt-[1.8vw]"
          >
            Get Ticket
          </Button>
        )}
      </div>
    </article>
  )
}
