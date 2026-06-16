import { useRef, useState } from 'react'
import { pastEvents } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'

function EventGallery({ images }) {
  const [index, setIndex] = useState(0)
  const drag = useRef({ startX: 0, active: false, moved: false })
  const maxIndex = images.length - 1

  const onPointerDown = (e) => {
    drag.current = { startX: e.clientX, active: true, moved: false }
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e) => {
    if (!drag.current.active) return
    if (Math.abs(e.clientX - drag.current.startX) > 8) drag.current.moved = true
  }
  const onPointerUp = (e) => {
    if (!drag.current.active) return
    const delta = e.clientX - drag.current.startX
    drag.current.active = false
    if (Math.abs(delta) > 50) {
      if (delta < 0) setIndex((i) => Math.min(maxIndex, i + 1))
      else setIndex((i) => Math.max(0, i - 1))
    }
  }

  return (
    <>
      {/* Mobile: swipeable carousel */}
      <div className="md:hidden">
        <div
          className="cursor-grab overflow-hidden active:cursor-grabbing select-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((img) => (
              <div key={img.src} className="w-full shrink-0">
                <div className="overflow-hidden border border-navy/10 bg-white shadow-soft">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={800}
                    height={256}
                    className="block h-52 w-full object-cover"
                    draggable="false"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-2" aria-label="Event image pagination">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View photo ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-5 bg-navy' : 'w-1.5 bg-navy/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Tablet/Desktop: 4-col grid */}
      <div className="hidden md:grid md:grid-cols-4 md:gap-3 lg:gap-[0.6vw]">
        {images.map((img) => (
          <div key={img.src} className="overflow-hidden border border-navy/10 bg-white shadow-soft">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={400}
              height={208}
              className="block h-52 w-full lg:h-[13vw] lg:w-full"
            />
          </div>
        ))}
      </div>
    </>
  )
}

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
                  {evt.videoUrl && (
                    <a
                      href={evt.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 border border-navy bg-navy px-6 py-3 font-sans text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-transparent hover:text-navy lg:px-[1.2vw] lg:py-[0.65vw] lg:text-[0.68vw]"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Watch Recap Video
                      <span className="sr-only"> (opens in new tab)</span>
                    </a>
                  )}
                </div>
              </div>

              <EventGallery images={evt.images} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
