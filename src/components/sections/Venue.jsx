import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { venue } from '../../data/content'

gsap.registerPlugin(ScrollTrigger)

const FRAME_COUNTS = { desktop: 85, mobile: 84 }
const pad = (n) => String(n).padStart(3, '0')

function buildFramePaths(setName) {
  return Array.from({ length: FRAME_COUNTS[setName] }, (_, i) => `/venue-frames/${setName}/frame-${pad(i + 1)}.webp`)
}

function buildOverlayTimeline(stepEls, hintEl) {
  const tl = gsap.timeline({ paused: true, defaults: { ease: 'cubic-bezier(0.22, 1, 0.36, 1)' } })
  const fade = 0.07

  gsap.set(stepEls.filter(Boolean), { opacity: 0, y: 24, scale: 0.97 })

  venue.scrollSteps.forEach((step, i) => {
    const el = stepEls[i]
    if (!el) return

    tl.fromTo(el, { opacity: 0, y: 24, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: fade }, step.start)
    tl.to(el, { opacity: 0, y: -24, scale: 1.02, duration: fade }, step.end - fade)
  })

  if (hintEl) {
    tl.to(hintEl, { opacity: 0, duration: 0.05 }, 0)
  }

  return tl
}

export default function Venue() {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const stepRefs = useRef([])
  const hintRef = useRef(null)
  const [reducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (reducedMotion) return

    const section = sectionRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let images = []
    let highestLoadedIndex = -1
    let lastRequestedIndex = 0
    let lastDrawnIndex = -1
    let currentSet = null
    let started = false

    function drawFrame(index) {
      lastRequestedIndex = index
      const clamped = Math.min(Math.max(index, 0), highestLoadedIndex)
      if (clamped < 0) return

      const img = images[clamped]
      const cw = canvas.width
      const ch = canvas.height
      if (!img || !cw || !ch) return

      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight)
      const dw = img.naturalWidth * scale
      const dh = img.naturalHeight * scale

      ctx.clearRect(0, 0, cw, ch)
      ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh)
      lastDrawnIndex = clamped
    }

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = Math.round(rect.width * dpr)
      canvas.height = Math.round(rect.height * dpr)
      drawFrame(lastDrawnIndex >= 0 ? lastDrawnIndex : lastRequestedIndex)
    }

    const BATCH = 5 // frames per idle task

    function loadFrameSet(setName) {
      if (currentSet === setName) return
      currentSet = setName
      images = new Array(FRAME_COUNTS[setName])
      highestLoadedIndex = -1
      lastDrawnIndex = -1

      const paths = buildFramePaths(setName)

      // Load frame 0 immediately so the canvas has something to show
      const loadOne = (i) => {
        const img = new Image()
        img.decoding = 'async'
        img.fetchPriority = 'low'
        img.onload = () => {
          if (currentSet !== setName) return
          images[i] = img
          if (i > highestLoadedIndex) highestLoadedIndex = i
          if (i === 0) drawFrame(0)
          if (lastRequestedIndex > lastDrawnIndex) drawFrame(lastRequestedIndex)
        }
        img.src = paths[i]
      }

      loadOne(0)

      // Load the rest in small idle batches so they don't saturate the
      // network and block other page resources.
      let batchStart = 1
      const scheduleBatch = () => {
        if (batchStart >= paths.length || currentSet !== setName) return
        const end = Math.min(batchStart + BATCH, paths.length)
        for (let i = batchStart; i < end; i++) loadOne(i)
        batchStart = end
        if (batchStart < paths.length) {
          if (typeof requestIdleCallback !== 'undefined') {
            requestIdleCallback(scheduleBatch, { timeout: 300 })
          } else {
            setTimeout(scheduleBatch, 50)
          }
        }
      }

      if (typeof requestIdleCallback !== 'undefined') {
        requestIdleCallback(scheduleBatch, { timeout: 300 })
      } else {
        setTimeout(scheduleBatch, 50)
      }
    }

    // Pick the desktop vs mobile frame set, and react if the viewport
    // crosses that boundary mid-session (resize, tablet rotation, etc).
    const frameSetMQ = window.matchMedia('(min-width: 768px)')
    const onFrameSetChange = (e) => {
      if (started) loadFrameSet(e.matches ? 'desktop' : 'mobile')
    }
    frameSetMQ.addEventListener('change', onFrameSetChange)

    // Only start loading after the page `load` event so frames never
    // compete with critical Hero / font / above-the-fold resources.
    // rootMargin '0px 0px 150% 0px' gives a ~1.5-viewport head-start
    // as the user scrolls down toward the Venue section.
    let ioRef = null
    const wrappedObserve = () => {
      ioRef = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            started = true
            loadFrameSet(frameSetMQ.matches ? 'desktop' : 'mobile')
            ioRef.disconnect()
          }
        },
        { rootMargin: '0px 0px 150% 0px' }
      )
      ioRef.observe(section)
    }

    if (document.readyState === 'complete') {
      wrappedObserve()
    } else {
      window.addEventListener('load', wrappedObserve, { once: true })
    }

    const ro = new ResizeObserver(resizeCanvas)
    ro.observe(canvas)
    resizeCanvas()

    // Responsive pin distance + scroll-driven frame/timeline scrubbing.
    const mm = gsap.matchMedia()
    mm.add(
      {
        isMobile: '(max-width: 767px)',
        isTablet: '(min-width: 768px) and (max-width: 1023px)',
        isDesktop: '(min-width: 1024px)',
      },
      (context) => {
        const { isMobile, isTablet } = context.conditions
        const endMultiplier = isMobile ? 3.0 : isTablet ? 3.5 : 3.9
        const tl = buildOverlayTimeline(stepRefs.current, hintRef.current)

        const st = ScrollTrigger.create({
          trigger: section,
          pin: true,
          scrub: true,
          start: 'top top',
          end: () => '+=' + window.innerHeight * endMultiplier,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress
            const targetFrame = Math.round(p * ((FRAME_COUNTS[currentSet] ?? 85) - 1))
            if (targetFrame !== lastDrawnIndex) drawFrame(targetFrame)
            tl.progress(p)
          },
          onToggle: (self) => {
            document.body.classList.toggle('venue-scroll-active', self.isActive)
          },
        })

        st.update()

        return () => {
          document.body.classList.remove('venue-scroll-active')
        }
      }
    )

    return () => {
      mm.revert()
      ro.disconnect()
      if (ioRef) ioRef.disconnect()
      window.removeEventListener('load', wrappedObserve)
      frameSetMQ.removeEventListener('change', onFrameSetChange)
      document.body.classList.remove('venue-scroll-active')
    }
  }, [reducedMotion])

  if (reducedMotion) {
    return (
      <section id="venue" aria-label={venue.heading} className="relative w-full bg-navy py-12 md:py-16 lg:py-20">
        <div className="relative mx-auto w-full max-w-[90vw] dash-border p-3 md:p-4 lg:p-[0.75vw]">
          <div className="relative overflow-hidden">
          <img
            src="/venue-frames/desktop/frame-043.webp"
            alt=""
            aria-hidden="true"
            width={1280}
            height={720}
            className="block h-[480px] w-full md:h-[540px] md:w-full"
          />

          <div className="pointer-events-none absolute inset-0 bg-black/58" aria-hidden="true" />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-12 px-6 py-12 md:px-10 lg:px-[4vw]">
            {venue.scrollSteps.map((step, i) => (
              <div key={i} className="mx-auto max-w-2xl text-center drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)] lg:max-w-[70vw]">
                {step.titleLines && (
                  <h2 className="font-hero font-semibold uppercase leading-tight tracking-[-0.01em]">
                    {step.titleLines.map((line, lineIndex) => (
                      <span
                        key={line}
                        className={
                          lineIndex === 1
                            ? 'mt-2 inline-block bg-lime px-2 py-0.5 text-2xl text-navy md:text-3xl lg:mt-[0.5vw] lg:px-[0.5vw] lg:py-[0.25vw] lg:text-[2.8vw]'
                            : 'block text-2xl text-white md:text-3xl lg:text-[2.8vw]'
                        }
                      >
                        {line}
                      </span>
                    ))}
                  </h2>
                )}
                {step.body && (
                  <p
                    className={`font-hero-body leading-relaxed text-white ${
                      step.titleLines
                        ? 'mt-5 text-base md:text-lg lg:mt-[1.2vw] lg:text-[1.05vw] lg:leading-[1.65]'
                        : step.highlight
                          ? 'font-sans text-lg font-bold uppercase tracking-[0.08em] md:text-xl lg:text-[1.35vw] lg:tracking-[0.1vw]'
                          : 'text-lg md:text-lg lg:text-[1.6vw]'
                    }`}
                  >
                    {step.body}
                    {step.highlight && (
                      <>
                        {' '}
                        <span className="inline-block bg-lime px-1.5 py-0.5 text-navy lg:px-[0.4vw] lg:py-[0.15vw]">
                          {step.highlight}
                        </span>
                      </>
                    )}
                  </p>
                )}
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} id="venue" className="relative h-svh w-full overflow-hidden bg-[#FAF9F4]" aria-label={venue.heading}>
      <div className="absolute inset-y-[6%] left-1/2 w-full max-w-[90vw] -translate-x-1/2 dash-border p-3 md:p-4 lg:p-[0.75vw] md:inset-y-[8%] lg:inset-y-[10%]">
        <div className="relative h-full w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

        <div className="pointer-events-none absolute inset-0 bg-black/58" aria-hidden="true" />

        <div className="absolute inset-0 flex items-center justify-center px-6 md:px-10 lg:px-[4vw]">
          {venue.scrollSteps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (stepRefs.current[i] = el)}
              className="absolute inset-0 flex items-center justify-center px-6 md:px-10 lg:px-[4vw]"
              style={{ opacity: 0 }}
            >
              <div className="mx-auto max-w-2xl text-center drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)] lg:max-w-[70vw]">
                {step.titleLines && (
                  <h2 className="font-hero font-semibold uppercase leading-tight tracking-[-0.01em]">
                    {step.titleLines.map((line, lineIndex) => (
                      <span
                        key={line}
                        className={
                          lineIndex === 1
                            ? 'mt-2 inline-block bg-lime px-2 py-0.5 text-[27px] text-navy md:text-4xl lg:mt-[0.5vw] lg:px-[0.5vw] lg:py-[0.25vw] lg:text-[3.5vw]'
                            : 'block text-[27px] text-white md:text-4xl lg:text-[3.5vw]'
                        }
                      >
                        {line}
                      </span>
                    ))}
                  </h2>
                )}
                {step.body && (
                  <p
                    className={`font-hero-body leading-relaxed text-white lg:max-w-[45vw] ${
                      step.titleLines
                        ? 'mt-5 text-sm md:text-lg lg:mt-[1.2vw] lg:text-[1.05vw] lg:leading-[1.65]'
                        : step.highlight
                          ? 'font-sans text-md font-bold uppercase tracking-[0.08em] md:text-xl lg:text-[1.35vw] lg:tracking-[0.1vw]'
                          : 'text-sm md:text-lg lg:text-[1.2vw]'
                    }`}
                  >
                    {step.body}
                    {step.highlight && (
                      <>
                        {' '}
                        <span className="inline-block bg-lime px-1.5 py-0.5 text-navy lg:px-[0.4vw] lg:py-[0.15vw]">
                          {step.highlight}
                        </span>
                      </>
                    )}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div ref={hintRef} className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 lg:bottom-[2vw]">
          <p className="font-sans text-xs text-center uppercase tracking-[0.25em] text-white/60 lg:text-[0.75vw]">
            Scroll to explore
          </p>
        </div>
        </div>
      </div>
    </section>
  )
}
