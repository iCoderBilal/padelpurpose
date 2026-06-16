import { useEffect, useRef } from 'react'
import { event, heroGallery } from '../../data/content'
import { getLenis } from '../SmoothScroll'

const PARALLAX_MIN_WIDTH = 1024
const CONTENT_RATE = 0.04
const COLLAGE_EXTRA_RATE = 0.025
const PARALLAX_MAX = 700

export default function Hero() {
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const collageRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const desktop = window.matchMedia(`(min-width: ${PARALLAX_MIN_WIDTH}px)`)

    const update = () => {
      const hero = heroRef.current
      const content = contentRef.current
      const collage = collageRef.current
      if (!hero || !content || !collage) return

      if (!desktop.matches) {
        content.style.transform = ''
        collage.style.transform = ''
        return
      }

      const scroll = Math.min(Math.max(-hero.getBoundingClientRect().top, 0), PARALLAX_MAX)
      content.style.transform = `translate3d(0, ${scroll * CONTENT_RATE}px, 0)`
      collage.style.transform = `translate3d(0, ${scroll * COLLAGE_EXTRA_RATE}px, 0)`
    }

    desktop.addEventListener('change', update)

    let lenisOff = () => {}
    let retry = null

    const bindLenis = () => {
      const lenis = getLenis()
      if (!lenis) return false
      lenis.on('scroll', update)
      lenisOff = () => lenis.off('scroll', update)
      return true
    }

    if (!bindLenis()) {
      retry = setTimeout(() => {
        bindLenis()
        update()
      }, 50)
    }

    update()

    return () => {
      clearTimeout(retry)
      desktop.removeEventListener('change', update)
      lenisOff()
      if (contentRef.current) contentRef.current.style.transform = ''
      if (collageRef.current) collageRef.current.style.transform = ''
    }
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative overflow-hidden bg-cream pt-28 pb-14 md:pt-36 lg:pt-[9vw] lg:pb-[9vw]"
      aria-label="Hero"
    >
      <div ref={contentRef} className="lg:will-change-transform">
        <div className="px-4 text-center md:px-10 lg:px-[4vw]">
          <p
            className="cinema font-sans text-xs font-bold uppercase tracking-[0.28em] text-navy md:text-sm lg:text-[0.9vw] lg:tracking-[0.24vw]"
            style={{ animationDelay: '0.05s' }}
          >
            {event.heroKicker}
          </p>

          <h1
            className="cinema mt-4 font-hero text-[44px] leading-[1.1] font-black uppercase tracking-[-0.02em] text-navy md:mt-5 md:text-5xl lg:mt-[1vw] lg:text-[5vw]"
            style={{ animationDelay: '0.15s' }}
          >
            {event.heroHeading}
          </h1>

          <p
            className="cinema mx-auto mt-6 max-w-2xl font-hero-body text-lg leading-relaxed text-ink/85 md:text-lg lg:mt-[1.4vw] lg:max-w-[70vw] lg:text-[1.6vw]"
            style={{ animationDelay: '0.35s' }}
          >
            <span className="mb-4 block text-sm font-bold md:text-md lg:text-[1vw]">
              {event.heroDescriptionLine2}
            </span>
            <span className="mx-auto inline-block bg-lime px-2 py-1 font-sans text-sm font-semibold text-navy md:px-2.5 md:py-1.5 md:text-base lg:px-[0.5vw] lg:py-[0.35vw] lg:text-[1.05vw]">
              {event.heroDescriptionLine1}
            </span>
          </p>
        </div>

        <div
          ref={collageRef}
          className="mx-auto mt-9 max-w-7xl overflow-hidden px-6 md:px-12 lg:mt-[4vw] lg:max-w-[80vw] lg:px-[3vw] lg:will-change-transform"
        >
          <div className="cinema" style={{ animationDelay: '0.55s' }}>
            <div className="flex items-end justify-center">
              {[heroGallery[0], heroGallery[1], heroGallery[2], heroGallery[3]].map((img, i) => (
                <img
                  key={`r1-${i}`}
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  decoding="async"
                  className={`block w-auto shrink-0 ${[
                    'h-14 sm:h-22 md:h-32 lg:h-[12vw]',
                    'h-22 sm:h-34 md:h-48 lg:h-[16vw]',
                    'h-20 sm:h-26 md:h-40 lg:h-[14vw]',
                    'h-14 sm:h-18 md:h-28 lg:h-[11vw]',
                  ][i]}`}
                />
              ))}
            </div>
            <div className="flex items-start justify-center">
              {[heroGallery[4], heroGallery[5], heroGallery[6], heroGallery[7], heroGallery[8]].map((img, i) => (
                <img
                  key={`r2-${i}`}
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  decoding="async"
                  className={`block w-auto shrink-0 ${[
                    'h-0 sm:h-18 md:h-34 lg:h-[12.5vw]',
                    'h-18 sm:h-26 md:h-36 lg:h-[13vw]',
                    'h-16 sm:h-22 md:h-28 lg:h-[11vw]',
                    'h-20 sm:h-26 md:h-32 lg:h-[12vw]',
                    'h-0 sm:h-18 md:h-22 lg:h-[9vw]',
                  ][i]}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
