import { press } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'
import SectionHeader from '../ui/SectionHeader'

export default function Press() {
  const ref = useReveal()

  return (
    <section id="press" className="section-padding bg-navy">
      <div ref={ref} className="reveal container-wide">
        <SectionHeader
          label="In The News"
          title="Press Coverage"
          subtitle="Sport, style, and philanthropy — as seen in leading publications."
          light
          className="mb-14"
        />

        <div className="grid gap-px overflow-hidden bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {press.map((item) => (
            <article
              key={item.publication + item.headline}
              className="bg-navy p-7 transition-colors duration-300 hover:bg-white/[0.04]"
            >
              <div className="flex min-h-10 items-center">
                <img
                  src={item.logo}
                  alt={item.publication}
                  className="h-8 w-auto max-w-[180px] object-contain object-left brightness-0 invert"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="mt-4 font-serif text-base italic leading-relaxed text-white/85">
                &ldquo;{item.headline}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
