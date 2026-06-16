import { program } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'

function ProgramIcon({ name }) {
  const props = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    className: 'lg:h-[1.1vw] lg:w-[1.1vw]',
  }

  switch (name) {
    case 'checkin':
      return (
        <svg {...props}>
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
          <path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
          <path d="M9 12h6M9 16h4" />
        </svg>
      )
    case 'party':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      )
    case 'finals':
      return (
        <svg {...props}>
          <path d="M8 21h8M12 17v4M7 4h10l1 7H6L7 4z" />
          <path d="M7 11v2a5 5 0 0 0 10 0v-2" />
        </svg>
      )
    case 'award':
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="5" />
          <path d="M8.5 13 7 21l5-2 5 2-1.5-8" />
        </svg>
      )
    default:
      return null
  }
}

function ScheduleItem({ time, event, icon, index }) {
  return (
    <li className="relative">
      <article className="flex h-full flex-col border border-dashed border-white/20 bg-[#001833]/70 p-6 transition-colors duration-300 hover:border-white/35 hover:bg-[#001833] md:p-7 lg:p-[1.6vw]">
        <div className="flex items-start justify-between gap-4">
          <span className="font-sans text-[0.65rem] font-bold tabular-nums tracking-[0.35em] text-white/30 lg:text-[0.65vw]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/40 bg-white/5 text-white lg:h-[2.5vw] lg:w-[2.5vw]">
            <ProgramIcon name={icon} />
          </div>
        </div>

        <time
          dateTime={time}
          className="mt-6 block font-sans text-sm font-bold uppercase tracking-[0.14em] text-lime md:text-base lg:mt-[1.2vw] lg:text-[1vw]"
        >
          {time}
        </time>

        <p className="mt-3 font-hero text-xl font-medium leading-snug text-white/95 md:text-lg lg:mt-[0.75vw] lg:text-[1.05vw] lg:leading-[1.35]">
          {event}
        </p>
      </article>
    </li>
  )
}

export default function Program() {
  const ref = useReveal()

  return (
    <section id="program" className="bg-[#001224] pb-16 md:pb-20 lg:pb-[5vw]">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6 md:px-10 lg:max-w-[80vw] lg:px-0">
        <header className="text-center">
          <h2 className="font-hero text-4xl font-black uppercase tracking-[-0.02em] text-white md:text-5xl lg:text-[3vw]">
            <span className="inline-block bg-lime px-2 py-1 font-sans text-sm font-semibold text-navy md:px-2.5 md:py-1.5 md:text-base lg:px-[0.5vw] lg:py-[0.35vw] lg:text-[1.05vw]">
              {program.heading}
            </span>
          </h2>

          <div
            className="mx-auto mt-8 flex max-w-xs items-center justify-center gap-3 lg:mt-[2vw] lg:max-w-[16vw] lg:gap-[0.8vw]"
            aria-hidden="true"
          >
            <span className="h-px flex-1 border-t border-dashed border-white/25" />
            <span className="h-1.5 w-1.5 rounded-full bg-lime lg:h-[0.45vw] lg:w-[0.45vw]" />
            <span className="h-px flex-1 border-t border-dashed border-white/25" />
          </div>
        </header>

        <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4 lg:mt-[3.5vw] lg:gap-[0.8vw]">
          {program.schedule.map((item, index) => (
            <ScheduleItem
              key={item.time}
              index={index}
              time={item.time}
              event={item.event}
              icon={item.icon}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}
