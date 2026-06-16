import { useState, useEffect } from 'react'
import { navLinks, event } from '../../data/content'
import { ZEFFY_URL, CONTACT } from '../../constants/links'
import PaddleIcon from '../brand/PaddleIcon'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header id="site-header" className="fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out">
      <div className="h-[3px] w-full bg-navy" aria-hidden="true" />
      <div className="dash-border-b bg-cream/95 backdrop-blur-md">
        <div className="flex items-center justify-between gap-3 px-4 py-1.5 sm:gap-4 sm:px-6 md:px-10 lg:gap-[1.5vw] lg:px-[4vw] lg:py-[0.5vw]">
          {/* Left: BHF logo x paddle */}
          <a href="#home" onClick={closeMenu} className="relative z-50 flex cursor-pointer items-center gap-2 shrink-0 sm:gap-4 lg:gap-[1.4vw]">
            <img
              src="/images/bradyhunter-logo-black.png"
              alt="The Brady Hunter Foundation"
              width={320}
              height={80}
              className="h-14 w-28 sm:h-16 sm:w-32 md:h-16 md:w-32 lg:h-[5.5vw] lg:w-[10vw] object-cover"
            />
            <span className="font-serif text-xl text-navy/30 sm:text-2xl lg:text-[2vw]" aria-hidden="true">×</span>
            <PaddleIcon className="h-14 w-14 sm:h-16 sm:w-16 md:h-16 md:w-20 lg:h-[5vw] lg:w-[5vw]" />
          </a>

          {/* Right */}
          <div className="flex items-center gap-3 sm:gap-5 md:gap-6 lg:gap-[2vw]">
            <button
              type="button"
              className="cursor-pointer font-sans text-sm font-bold text-navy transition-colors hover:text-blue lg:text-[1.05vw]"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="full-menu"
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>

            <div className="hidden h-6 w-0 dash-border-l sm:block lg:h-[1.6vw]" aria-hidden="true" />

            <a
              href={ZEFFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden cursor-pointer font-sans text-sm font-bold text-navy underline decoration-navy/30 underline-offset-4 transition-colors hover:text-blue hover:decoration-blue sm:inline lg:text-[1.05vw]"
            >
              Get Tickets
            </a>

            <a
              href="#sponsors"
              onClick={closeMenu}
              className="hidden cursor-pointer font-sans text-sm font-bold text-navy underline decoration-navy/30 underline-offset-4 transition-colors hover:text-blue hover:decoration-blue sm:inline lg:text-[1.05vw]"
            >
              Sponsors
            </a>
          </div>
        </div>
      </div>

      {/* Full-screen menu */}
      <div
        id="full-menu"
        className={`fixed inset-0 z-40 flex flex-col overflow-y-auto bg-navy transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <button
          type="button"
          onClick={closeMenu}
          aria-label="Close menu"
          className="fixed top-4 right-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-lime hover:text-lime sm:top-6 sm:right-6 sm:h-12 sm:w-12 md:top-8 md:right-10 lg:right-16"
        >
          <span className="relative block h-4 w-4" aria-hidden="true">
            <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 rotate-45 bg-current" />
            <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 -rotate-45 bg-current" />
          </span>
        </button>

        <div className="container-wide m-auto flex w-full flex-col items-center justify-center px-6 py-24 text-center sm:px-10 lg:px-16">
          <nav className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4" aria-label="Main navigation">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{
                  transitionDelay: menuOpen ? `${100 + i * 60}ms` : '0ms',
                }}
                className={`cursor-pointer font-hero text-4xl font-black uppercase tracking-[-0.02em] text-white transition-all duration-500 ease-out hover:text-lime sm:text-5xl md:text-6xl lg:text-[3vw] ${
                  menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div
            style={{ transitionDelay: menuOpen ? `${100 + navLinks.length * 60}ms` : '0ms' }}
            className={`mt-12 flex flex-col items-center gap-8 transition-all duration-500 ease-out sm:mt-14 ${
              menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <a
              href={ZEFFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="group inline-flex cursor-pointer items-center gap-4 border border-lime/70 bg-transparent px-8 py-4 transition-all duration-300 hover:border-lime hover:bg-lime sm:px-10 sm:py-4"
            >
              <span className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-lime transition-colors duration-300 group-hover:text-navy sm:text-sm">
                Get Tickets
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-lime/50 transition-all duration-300 group-hover:border-navy group-hover:bg-navy">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="h-4 w-4 text-lime transition-colors duration-300 group-hover:text-lime"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>

            {/* <div className="font-hero-body max-w-sm text-sm text-white/55">
              <p className="font-semibold uppercase tracking-[0.2em] text-white/75">
                {event.dateShort} · {event.location}
              </p>
              <p className="mt-2 leading-relaxed">
                Questions?{' '}
                <a
                  href={CONTACT.emailHref}
                  onClick={closeMenu}
                  className="font-medium text-lime transition-colors hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  )
}
