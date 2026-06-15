import { pastEvents } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'
import SectionHeader from '../ui/SectionHeader'

export default function PastEvents() {
  const ref = useReveal()

  return (
    <section id="past-events" className="section-padding bg-white">
      <div ref={ref} className="reveal container-wide">
        <SectionHeader
          label="Our Track Record"
          title="Past Events"
          subtitle="From the Hamptons to Miami — Padel for a Purpose continues to grow."
          className="mb-14"
        />

        <div className="space-y-20">
          {pastEvents.map((evt) => (
            <div key={evt.id}>
              <div className="mb-7 flex flex-col gap-2 border-b border-navy/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <h3 className="font-serif text-2xl font-bold text-navy md:text-3xl">
                  {evt.label}
                </h3>
                <p className="font-sans text-sm font-medium italic text-blue">
                  {evt.stat}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                {evt.images.map((img) => (
                  <div
                    key={img.src}
                    className="group aspect-[4/3] overflow-hidden bg-sand shadow-soft"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Video placeholder */}
        <div className="mt-20 overflow-hidden bg-navy">
          <div className="flex aspect-video flex-col items-center justify-center gap-5 p-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime transition-transform duration-300 hover:scale-110">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#001F3F"
                aria-hidden="true"
                className="ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="font-serif text-2xl font-bold text-white">
              Recap Video Coming Soon
            </p>
            <p className="max-w-md font-sans text-sm text-white/60">
              Relive the energy of past Padel for a Purpose events. Video link will be added here.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
