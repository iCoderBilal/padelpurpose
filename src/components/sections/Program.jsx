import { program } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'

export default function Program() {
  const ref = useReveal()

  return (
    <section id="program" className="bg-navy py-14 md:py-16 lg:py-[4vw] mt-12 md:mt-16 lg:mt-[4vw]" aria-label={program.heading}>
      <div ref={ref} className="reveal">
        <h2 className="mb-10 text-center md:mb-12 lg:mb-[2.5vw]">
          <span className="inline-block bg-white px-2 py-1 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-navy md:px-2.5 md:py-1.5 md:text-base lg:px-[0.5vw] lg:py-[0.35vw] lg:text-[1.05vw] lg:tracking-[0.18vw]">
            {program.heading}
          </span>
        </h2>

        <ol className="container-wide grid list-none grid-cols-2 gap-y-10 px-6 md:grid-cols-4 md:gap-y-0 md:px-10 lg:px-[4vw]">
          {program.schedule.map((item, i) => (
            <li
              key={item.time}
              className={`flex flex-col items-center px-2 text-center md:px-6 ${
                i !== 0 ? 'md:border-l md:border-white/10' : ''
              }`}
            >
              <time
                dateTime={item.time}
                className="font-hero text-2xl font-black uppercase leading-none tracking-[-0.02em] text-lime md:text-3xl lg:text-[2.2vw]"
              >
                {item.time}
              </time>
              <p className="mt-2 max-w-[14rem] font-sans text-xs leading-snug text-white/60 md:text-sm lg:mt-[0.5vw] lg:max-w-[14vw] lg:text-[0.85vw]">
                {item.event}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
