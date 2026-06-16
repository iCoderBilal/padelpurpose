import { pastEvents } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'

export default function PastEvents() {
  const ref = useReveal()

  return (
    <section id="past-events" className="bg-cream pb-20 md:pb-20 lg:pb-[9vw] pt-2 md:pt-6 lg:pt-[1vw]">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-6 md:px-10 lg:max-w-[80vw] lg:px-0">
        <header className="mx-auto max-w-3xl text-center lg:max-w-[50vw]">
          <h2 className="mt-4 font-hero text-4xl font-black uppercase leading-[1.05] tracking-[-0.02em] text-navy md:text-5xl lg:mt-[1vw] lg:text-[3.2vw]">
            Past Events
          </h2>

          <p className="mt-5 font-hero-body text-base leading-relaxed text-ink/70 md:text-lg lg:mt-[1.2vw] lg:text-[1.05vw] lg:leading-[1.65]">
            From the Hamptons to Miami — Padel for a Purpose continues to grow.
          </p>
        </header>

        <div className="mt-14 space-y-16 lg:mt-[3.5vw] lg:space-y-[4vw]">
          {pastEvents.map((evt) => (
            <article key={evt.id}>
              <div className="mb-6 flex flex-col gap-4 border-b border-dashed border-navy/15 pb-5 sm:flex-row sm:items-end sm:justify-between lg:mb-[1.5vw] lg:pb-[1.2vw]">
                <h3 className="font-hero text-2xl font-semibold uppercase tracking-[-0.02em] text-navy md:text-3xl lg:text-[1.75vw]">
                  {evt.label}
                </h3>

                <div className="flex flex-col items-start gap-3 sm:items-end">
                  {/* <p className="font-hero-body text-sm leading-relaxed text-ink/55 md:text-base lg:text-[0.95vw]">
                    {evt.stat}
                  </p> */}

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
                      <span className="sr-only"> (opens in new tab)</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-3 lg:gap-[0.6vw]">
                {evt.images.map((img) => (
                  <div key={img.src} className="overflow-hidden border border-navy/10 bg-white shadow-soft">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="block h-44 w-full sm:h-48 md:h-52 lg:h-[13vw]"
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
