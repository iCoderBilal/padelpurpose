import { useEffect, useState } from 'react'
import { venue, venueGallery } from '../../data/content'
import LightboxGallery from '../ui/LightboxGallery'

const START_INDEX = 0

function useVisibleCount() {
  const [count, setCount] = useState(3)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setCount(3)
      else if (window.innerWidth >= 768) setCount(2)
      else setCount(1)
    }

    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])

  return count
}

function ArrowButton({ direction, onClick, disabled }) {
  const label = direction === 'prev' ? 'Previous images' : 'Next images'

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-soft transition-all duration-300 hover:border-navy hover:bg-navy hover:text-lime disabled:pointer-events-none disabled:opacity-30 lg:h-[2.8vw] lg:w-[2.8vw]"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={direction === 'next' ? 'translate-x-px' : '-translate-x-px'}
      >
        {direction === 'prev' ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  )
}

export default function VenueGallery() {
  const visible = useVisibleCount()
  const maxIndex = Math.max(0, venueGallery.length - visible)
  const [index, setIndex] = useState(START_INDEX)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex))
  }, [maxIndex])

  const prev = () => setIndex((current) => Math.max(0, current - 1))
  const next = () => setIndex((current) => Math.min(maxIndex, current + 1))

  const slideWidth = 100 / visible

  return (
    <>
      <section id="venue-gallery" aria-label="Estate gallery" className="bg-cream py-10 md:py-14 lg:py-[3vw]">
        <p className="mb-6 text-center font-sans text-[0.65rem] font-bold uppercase tracking-[0.24em] text-navy/45 md:mb-8 md:text-xs lg:mb-[1.5vw] lg:text-[0.72vw] lg:tracking-[0.2vw]">
          {venue.galleryCaption}
        </p>

        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 md:gap-4 md:px-8 lg:max-w-[89vw] lg:gap-[1vw] lg:px-0">
          <div className="hidden md:flex">
            <ArrowButton direction="prev" onClick={prev} disabled={index === 0} />
          </div>

          <div className="min-w-0 flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * slideWidth}%)` }}
            >
              {venueGallery.map((image, imageIndex) => (
                <div
                  key={image.src}
                  className="shrink-0 px-1 md:px-2 lg:px-[0.5vw]"
                  style={{ width: `${slideWidth}%` }}
                >
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(imageIndex)}
                    aria-label={`View full size: ${image.alt}`}
                    className="relative block w-full cursor-pointer overflow-hidden border border-navy/10 bg-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      width={800}
                      height={220}
                      className="block h-[220px] w-full md:h-[260px] md:w-full lg:h-[16vw] lg:w-full"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex">
            <ArrowButton direction="next" onClick={next} disabled={index >= maxIndex} />
          </div>
        </div>

        {/* Dot pagination — mobile only */}
        <div className="mt-5 flex justify-center gap-2 md:hidden" aria-label="Gallery pagination">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View image ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-5 bg-navy' : 'w-1.5 bg-navy/30'
              }`}
            />
          ))}
        </div>
      </section>

      <LightboxGallery
        images={venueGallery}
        open={lightboxIndex !== null}
        index={lightboxIndex ?? 0}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </>
  )
}
