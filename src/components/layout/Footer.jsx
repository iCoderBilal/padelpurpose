import { ZEFFY_URL, CONTACT, BHF_URL } from '../../constants/links'
import Logo from '../brand/Logo'

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-24 lg:max-w-[80vw] lg:px-[4vw] lg:py-36">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo size="sm" className="[&_span]:text-white [&_p]:text-lime [&_.text-blue]:text-lime/80" />
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-white/60">
              The Brady Hunter Foundation&apos;s signature Hamptons charity fundraiser.
              Sport, style, and philanthropy united.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xs font-bold uppercase tracking-widest text-lime">
              Quick Links
            </h3>
            <ul className="space-y-2 font-sans text-sm text-white/70">
              <li><a href="#mission" className="transition-colors hover:text-white">Our Mission</a></li>
              <li><a href="#tickets" className="transition-colors hover:text-white">Tickets</a></li>
              <li><a href="#sponsors" className="transition-colors hover:text-white">Sponsorships</a></li>
              <li><a href="#contact" className="transition-colors hover:text-white">Contact</a></li>
              <li>
                <a href={BHF_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                  The Brady Hunter Foundation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-xs font-bold uppercase tracking-widest text-lime">
              Contact
            </h3>
            <p className="font-sans text-sm font-semibold text-white">{CONTACT.name}</p>
            <p className="font-sans text-xs italic text-white/60">{CONTACT.title}</p>
            <p className="mt-3 font-sans text-sm">
              <a href={CONTACT.phoneHref} className="text-white/70 transition-colors hover:text-lime">
                {CONTACT.phone}
              </a>
            </p>
            <p className="font-sans text-sm">
              <a href={CONTACT.emailHref} className="text-white/70 transition-colors hover:text-lime">
                {CONTACT.email}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 lg:py-[1.5vw]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row md:px-10 lg:max-w-[80vw] lg:px-[4vw]">
          <a
            href={ZEFFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-lime transition-colors hover:text-white"
          >
            Tickets &amp; Sponsorships on Zeffy →
          </a>
          <p className="font-sans text-xs text-white/50">
            &copy; {new Date().getFullYear()} Padel for a Purpose · The Brady Hunter Foundation
          </p>
        </div>
      </div>
    </footer>
  )
}
