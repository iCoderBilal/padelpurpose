import { mission } from '../../data/content'
import { ScrollRevealParagraph } from '../ui/ScrollRevealText'

export default function Mission() {
  return (
    <section
      id="mission"
      className="relative overflow-x-hidden bg-cream pt-12 pb-24 md:pt-16 md:pb-32 lg:pt-[3vw] lg:pb-[8vw]"
    >
      <div className="relative w-full min-w-0 px-6 md:px-10 lg:px-[4vw]">
        <div className="mx-auto w-full min-w-0 max-w-4xl dash-border bg-cream/95 backdrop-blur-[2px] md:max-w-3xl lg:max-w-[65vw]">
          {/* Sticky heading — always visible while scrolling mission copy */}
          <div className="sticky top-[1rem] z-10 dash-border-b bg-cream/90 px-6 py-5 backdrop-blur-sm md:px-12 md:py-6 lg:top-[.7vw] lg:px-[4vw] lg:py-[1.2vw]">
            <h2 className="text-center font-sans text-sm font-bold uppercase tracking-[0.22em] text-navy md:text-base lg:text-[1.15vw] lg:tracking-[0.18vw]">
              {mission.heading}
            </h2>
          </div>

          <div className="flex w-full min-w-0 flex-col gap-10 px-6 py-14 md:gap-12 md:px-12 md:py-20 lg:gap-[2.5vw] lg:px-[4vw] lg:py-[3vw]">
            {mission.lines.map((line) => (
              <ScrollRevealParagraph
                key={line}
                text={line}
                className="w-full min-w-0 text-center font-hero text-2xl leading-[1.2] text-navy md:text-[1.75rem] lg:text-[2.1vw] lg:leading-[1.2]"
              />
            ))}

            {/* Closing line — featured */}
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
                className="w-full min-w-0 text-center font-hero text-3xl font-semibold uppercase leading-tight tracking-[-0.01em] text-navy md:text-4xl lg:text-[2.8vw]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
