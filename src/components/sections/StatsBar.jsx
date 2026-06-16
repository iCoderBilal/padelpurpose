import { stats } from '../../data/content'

export default function StatsBar() {
  return (
    <section className="bg-navy py-14 md:py-16 lg:py-[4vw]" aria-label="Event statistics">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 md:grid-cols-4 md:gap-y-0 md:px-10 lg:max-w-[80vw] lg:px-[4vw]">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center px-2 text-center md:px-6 ${
              i !== 0 ? 'md:border-l md:border-white/10' : ''
            }`}
          >
            <p className="font-hero text-4xl font-black uppercase leading-none tracking-[-0.02em] text-lime md:text-5xl lg:text-[3.2vw]">
              {stat.value}
            </p>
            <p className="mt-2 max-w-[14rem] font-sans text-xs leading-snug text-white/60 md:text-sm lg:mt-[0.5vw] lg:max-w-[14vw] lg:text-[0.85vw]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
