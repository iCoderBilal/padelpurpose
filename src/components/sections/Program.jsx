import { program } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'

function ScheduleItem({ time, event }) {
  return (
    <li>
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

      <p className="mt-3 font-hero text-xl italic leading-snug text-navy md:text-2xl lg:mt-[0.7vw] lg:text-[1.5vw]">
        {event}
      </p>
    </li>
  )
}

export default function Program() {
  const ref = useReveal()

  return (
    <section
      id="program"
      className="bg-cream py-16 md:py-24 lg:py-[6vw]"
    >
      <div ref={ref} className="reveal mx-auto max-w-3xl px-6 md:px-10 lg:max-w-[50vw] lg:px-[4vw]">
        <h2 className="text-center font-hero text-4xl font-semibold italic text-navy md:text-5xl lg:text-[3.2vw]">
          {program.heading}
        </h2>

        <ol className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12 lg:mt-[3vw] lg:gap-x-[3vw] lg:gap-y-[2.5vw]">
          {program.schedule.map((item) => (
            <ScheduleItem key={item.time} time={item.time} event={item.event} />
          ))}
        </ol>
      </div>
    </section>
  )
}
