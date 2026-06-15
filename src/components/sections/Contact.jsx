import { ZEFFY_URL, CONTACT } from '../../constants/links'
import { useReveal } from '../../hooks/useReveal'
import Button from '../ui/Button'
import Logo from '../brand/Logo'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="section-padding bg-cream">
      <div ref={ref} className="reveal container-wide">
        <div className="grid overflow-hidden bg-white shadow-lift lg:grid-cols-2">
          {/* Left branding */}
          <div className="flex flex-col justify-between gap-10 border-b border-navy/10 bg-sand p-10 md:p-14 lg:border-r lg:border-b-0">
            <Logo size="md" />
            <div>
              <p className="font-serif text-2xl font-bold italic text-navy md:text-3xl">
                Thank you for supporting the cause.
              </p>
              <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-ink/60">
                Every ticket and sponsorship helps build a forever home for animals
                and brighter futures for children in need.
              </p>
            </div>
          </div>

          {/* Right contact */}
          <div className="p-10 md:p-14">
            <span className="kicker text-blue">Get In Touch</span>
            <p className="mt-5 font-sans text-sm leading-relaxed text-ink/65">
              For questions regarding custom sponsorship packages or event details,
              please contact:
            </p>

            <h2 className="mt-7 font-serif text-3xl font-bold text-navy md:text-4xl">
              {CONTACT.name}
            </h2>
            <p className="mt-1.5 font-sans text-sm italic text-ink/55">
              {CONTACT.title}
            </p>

            <div className="mt-9 space-y-6">
              <div>
                <p className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.2em] text-blue">
                  Phone
                </p>
                <a
                  href={CONTACT.phoneHref}
                  className="font-sans text-xl font-semibold text-navy transition-colors hover:text-blue"
                >
                  {CONTACT.phone}
                </a>
              </div>
              <div>
                <p className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.2em] text-blue">
                  Email
                </p>
                <a
                  href={CONTACT.emailHref}
                  className="font-sans text-xl font-semibold text-navy transition-colors hover:text-blue"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center gap-5 text-center">
          <p className="font-serif text-xl font-bold text-navy md:text-2xl">
            Ready to join us on August 2nd?
          </p>
          <Button href={ZEFFY_URL} external variant="lime" size="lg">
            Tickets &amp; Sponsorships
          </Button>
        </div>
      </div>
    </section>
  )
}
