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

function ScheduleItem({ time, event, icon }) {
  return (
    <li className="flex gap-4 md:gap-5 lg:gap-[1.2vw]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-lime bg-lime/15 text-navy lg:h-[2.8vw] lg:w-[2.8vw]">
        <ProgramIcon name={icon} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-sans text-sm font-bold text-blue md:text-base lg:text-[1.05vw]">
          {time}
        </p>

        <div className="mt-2 flex items-center gap-1 lg:mt-[0.5vw]">
          <span className="h-0.5 flex-1 bg-lime" aria-hidden="true" />
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            aria-hidden="true"
            className="shrink-0 text-lime lg:h-[0.65vw] lg:w-[0.65vw]"
          >
            <path d="M2 5h6M6 3l2 2-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <p className="mt-3 font-hero text-xl font-medium leading-snug text-navy md:text-2xl lg:mt-[0.7vw] lg:text-[1.45vw]">
          {event}
        </p>
      </div>
    </li>
  )
}

export default function Program() {
  const ref = useReveal()

  return (
    <section id="program" className="bg-cream py-16 md:py-24 lg:py-[6vw]">
      <div ref={ref} className="reveal mx-auto max-w-4xl px-6 md:px-10 lg:max-w-[58vw] lg:px-[4vw]">
        <h2 className="text-center font-hero text-4xl font-black uppercase tracking-[-0.02em] text-navy md:text-5xl lg:text-[3vw]">
          {program.heading}
        </h2>

        <ol className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:mt-[3vw] lg:gap-x-[2.5vw] lg:gap-y-[2.5vw]">
          {program.schedule.map((item) => (
            <ScheduleItem key={item.time} time={item.time} event={item.event} icon={item.icon} />
          ))}
        </ol>
      </div>
    </section>
  )
}
