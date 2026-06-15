import { stats } from '../../data/content'

export default function StatsBar() {
  return (
    <section className="bg-navy py-14 md:py-16" aria-label="Event statistics">
      <div className="container-wide grid grid-cols-2 gap-y-10 px-6 md:grid-cols-4 md:gap-y-0 md:px-10 lg:px-16">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center px-2 text-center md:px-6 ${
              i !== 0 ? 'md:border-l md:border-white/10' : ''
            }`}
          >
            <p className="font-serif text-4xl font-bold italic text-lime md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 max-w-[14rem] font-sans text-xs leading-snug text-white/60 md:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
