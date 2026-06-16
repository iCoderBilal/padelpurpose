import { mission } from '../../data/content'
import { ScrollRevealParagraph } from '../ui/ScrollRevealText'
import { useReveal } from '../../hooks/useReveal'
import { useScrollRevealOpacity } from '../../hooks/useScrollRevealOpacity'

function MissionPhoto({ pillar, frameClass, stagger }) {
  const ref = useScrollRevealOpacity(stagger)

  return (
    <figure
      ref={ref}
      className={`scroll-reveal-item absolute w-[46%] max-w-[11rem] overflow-hidden border border-navy/10 bg-cream shadow-lift sm:max-w-[13rem] sm:w-[42%] lg:w-[14vw] lg:max-w-none ${frameClass}`}
    >
      <img
        src={pillar.src}
        alt={pillar.alt}
        loading="lazy"
        className="aspect-[4/5] w-full object-cover"
      />
    </figure>
  )
}

const collageFrames = [
  'left-[4%] top-[14%] z-10 rotate-[7deg] sm:left-[10%] sm:top-[12%] lg:left-[12%] lg:top-[10%] lg:rotate-[8deg]',
  'left-1/2 top-0 z-30 -translate-x-1/2 rotate-0',
  'right-[4%] top-[10%] z-20 -rotate-[7deg] sm:right-[10%] sm:top-[8%] lg:right-[12%] lg:top-[6%] lg:-rotate-[8deg]',
]

export default function Mission() {
  const ref = useReveal()

  return (
    <section
      id="mission"
      className="relative overflow-x-hidden bg-cream pt-12 pb-4 md:pt-16 md:pb-10 lg:pt-[3vw] lg:pb-[3vw]"
    >
      <div className="relative w-full min-w-0 px-6 md:px-10 lg:px-[4vw]">
        <div
          ref={ref}
          className="reveal mx-auto w-full min-w-0 max-w-4xl dash-border bg-cream/95 backdrop-blur-[2px] md:max-w-3xl lg:max-w-[65vw]"
        >
          <div className="sticky top-[1rem] z-10 dash-border-b bg-cream/90 px-6 py-5 backdrop-blur-sm md:px-12 md:py-6 lg:top-[.7vw] lg:px-[4vw] lg:py-[1.2vw]">
            <h2 className="text-center">
              <span className="inline-block bg-lime px-2 py-1 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-navy md:px-2.5 md:py-1.5 md:text-base lg:px-[0.5vw] lg:py-[0.35vw] lg:text-[1.15vw] lg:tracking-[0.18vw]">
                {mission.heading}
              </span>
            </h2>
          </div>

          <div className="flex w-full min-w-0 flex-col gap-6 px-6 py-14 md:gap-12 md:px-12 md:py-20 lg:gap-[2.5vw] lg:px-[4vw] lg:py-[3vw]">
            {mission.lines.map((line) => (
              <ScrollRevealParagraph
                key={line}
                text={line}
                className="w-full min-w-0 text-center font-light font-hero text-[17px] leading-[1.2] text-navy md:text-[1.4rem] lg:text-[1.7vw] lg:leading-[1.2]"
              />
            ))}

            <div className="relative mt-4 w-full pt-10 md:mt-6 md:pt-12 lg:mt-[1vw] lg:pt-[2.5vw]">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-center gap-3 lg:gap-[0.8vw]"
                aria-hidden="true"
              >
                <span className="w-16 border-t border-dashed border-black lg:w-[4vw]" />
                <span className="relative flex h-3 w-3 items-center justify-center rounded-full border border-lime bg-lime/30 lg:h-[0.9vw] lg:w-[0.9vw]">
                  <span className="h-px w-full rotate-45 bg-black/40" />
                </span>
                <span className="w-16 border-t border-dashed border-black lg:w-[4vw]" />
              </div>

              <ScrollRevealParagraph
                text={mission.closingLine}
                className="w-full min-w-0 text-center font-hero text-xl font-semibold uppercase leading-tight tracking-[-0.01em] text-navy md:text-3xl lg:text-[2.2vw]"
              />
            </div>
          </div>

          {/* Overlapping tilted photo stack — after closing line */}
          <div className="dash-border-t px-4 pb-0 pt-0 md:px-8 md:pb-0 md:pt-0 lg:px-[2vw] lg:pb-[0vw] lg:pt-[0vw]">
            <div
              className="relative mx-auto h-[17rem] w-full max-w-xl sm:h-[19rem] md:h-[22rem] lg:h-[24vw] lg:max-w-none"
              aria-hidden="false"
            >
              {mission.pillars.map((pillar, index) => (
                <MissionPhoto
                  key={pillar.src}
                  pillar={pillar}
                  frameClass={collageFrames[index]}
                  stagger={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
