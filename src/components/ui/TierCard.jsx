import { useState } from 'react'
import { ZEFFY_URL } from '../../constants/links'
import Button from '../ui/Button'

export default function TierCard({ tier, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <article
      className={`bg-white transition-all duration-300 ${
        tier.featured
          ? 'shadow-lift ring-1 ring-navy/10'
          : 'shadow-soft hover:-translate-y-0.5 hover:shadow-lift'
      }`}
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 p-6 text-left md:p-8"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div>
          {tier.badge && (
            <span className="mb-3 inline-block bg-lime px-3 py-1 font-sans text-[0.6rem] font-bold uppercase tracking-[0.2em] text-navy">
              {tier.badge}
            </span>
          )}
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-blue md:text-sm">
            {tier.name}
          </h3>
          <p className="mt-2 font-serif text-3xl font-bold text-navy md:text-4xl">
            {tier.price}
          </p>
        </div>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy/15 font-sans text-xl text-navy transition-all duration-300 ${
            open ? 'rotate-45 border-blue bg-blue text-white' : ''
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-7 md:px-8 md:pb-8">
            <div className="mb-5 h-px w-full bg-navy/10" />
            <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {tier.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 font-sans text-sm text-ink/75">
                  <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-lime-dark" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <Button href={ZEFFY_URL} external size="md" className="mt-7">
              Sponsor on Zeffy
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
