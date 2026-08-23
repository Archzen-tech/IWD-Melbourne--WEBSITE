import { Mail, MapPin, Phone } from 'lucide-react'

import { FacebookIcon } from '@/components/icons/facebook-icon'
import { ContactForm } from '@/components/contact-form'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { site } from '@/lib/site'

export function Contact({
  showForm = true,
  showHeading = true,
}: {
  showForm?: boolean
  /** Hide when the page already renders this copy in its <h1> header. */
  showHeading?: boolean
}) {
  return (
    <section
      id="contact"
      className="mx-auto max-w-[88rem] scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Details */}
        <Reveal className="lg:col-span-5 order-2 lg:order-1">
          {showHeading ? (
            <SectionHeading
              eyebrow="Contact"
              title="Let's Talk About Your Space"
              intro={`Have a cabinetry project in mind? Get in touch with ${site.name} to discuss your requirements.`}
            />
          ) : null}

          <dl className={`flex flex-col ${showHeading ? 'mt-12' : ''}`}>
            <div className="border-foreground/15 flex flex-col gap-3 border-t py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div>
                <dt className="eyebrow text-muted-foreground flex items-center gap-2.5">
                  <Phone className="size-3.5" aria-hidden="true" />
                  Phone
                </dt>
                <dd className="mt-2.5 font-sans text-[1.375rem] font-semibold tracking-tight text-foreground leading-none">
                  {site.phone.display}
                </dd>
              </div>
              <a
                href={site.phone.href}
                className="border-foreground/25 hover:bg-foreground hover:text-background inline-flex shrink-0 items-center justify-center self-start border px-5 py-3 text-[0.6875rem] font-medium tracking-[0.14em] uppercase transition-colors sm:self-auto"
              >
                Call Now
              </a>
            </div>

            <div className="border-foreground/15 flex flex-col gap-3 border-t py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="min-w-0">
                <dt className="eyebrow text-muted-foreground flex items-center gap-2.5">
                  <Mail className="size-3.5" aria-hidden="true" />
                  Email
                </dt>
                <dd className="mt-2.5 font-sans text-[1.125rem] font-normal text-foreground/90 leading-tight break-all">
                  {site.email.display}
                </dd>
              </div>
              <a
                href={site.email.href}
                className="border-foreground/25 hover:bg-foreground hover:text-background inline-flex shrink-0 items-center justify-center self-start border px-5 py-3 text-[0.6875rem] font-medium tracking-[0.14em] uppercase transition-colors sm:self-auto"
              >
                Send Email
              </a>
            </div>

            <div className="border-foreground/15 border-t py-7">
              <dt className="eyebrow text-muted-foreground flex items-center gap-2.5">
                <MapPin className="size-3.5" aria-hidden="true" />
                Location
              </dt>
              <dd className="mt-2.5 font-sans text-[1.125rem] font-normal text-foreground/90 leading-tight">
                <address className="not-italic">
                  {site.location.display}
                </address>
              </dd>
            </div>

            <div className="border-foreground/15 flex flex-col gap-3 border-y py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div>
                <dt className="eyebrow text-muted-foreground flex items-center gap-2.5">
                  <FacebookIcon className="size-3.5" />
                  Facebook
                </dt>
                <dd className="mt-2.5 font-sans text-[1.125rem] font-normal text-foreground/90 leading-tight">
                  {site.legalName}
                </dd>
              </div>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="border-foreground/25 hover:bg-foreground hover:text-background inline-flex shrink-0 items-center justify-center self-start border px-5 py-3 text-[0.6875rem] font-medium tracking-[0.14em] uppercase transition-colors sm:self-auto"
              >
                Follow Us
              </a>
            </div>
          </dl>
        </Reveal>

        {/* Form */}
        {showForm ? (
          <Reveal className="lg:col-span-7 order-1 lg:order-2" delay={100}>
            <div className="bg-muted/50 border-border border p-6 sm:p-9 lg:p-11">
              <h3 className="font-serif text-[1.75rem] leading-tight font-normal">
                Send an Enquiry
              </h3>
              <p className="text-muted-foreground mt-2.5 text-[0.9375rem] leading-relaxed">
                Share a few details about your space and we&apos;ll be in touch.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
