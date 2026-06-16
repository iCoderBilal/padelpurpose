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
              <div className="mb-7 flex flex-col gap-4 border-b border-navy/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <h3 className="font-serif text-2xl font-bold text-navy md:text-3xl">
                  {evt.label}
                </h3>

                <div className="flex flex-col items-start gap-3 sm:items-end">
                  <p className="font-sans text-sm font-medium italic text-blue">
                    {evt.stat}
                  </p>

                  {evt.videoUrl && (
                    <a
                      href={evt.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 border border-navy bg-navy px-6 py-3 font-sans text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-transparent hover:text-navy lg:px-[1.2vw] lg:py-[0.65vw] lg:text-[0.68vw]"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Watch Recap Video
                      <span className="sr-only">(opens in new tab)</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                {evt.images.map((img) => (
                  <div key={img.src} className="overflow-hidden bg-sand shadow-soft">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="block h-44 w-full object-cover sm:h-48 md:h-52 lg:h-[14vw]"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
