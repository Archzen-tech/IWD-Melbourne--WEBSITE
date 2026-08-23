import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { FacebookIcon } from '@/components/icons/facebook-icon'
import { FinalCta } from '@/components/final-cta'
import { PageHeader } from '@/components/page-header'
import { Principles } from '@/components/principles'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { services } from '@/lib/constants'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'IWD Melbourne Pty Ltd provides cabinetry works across kitchens, laundries, vanities, wardrobes, garage storage and other requirements in Melbourne, Victoria.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={site.location.display}
        title="About IWD Melbourne"
        intro={site.description}
        image="/images/general/workshop-01.png"
        imageAlt="Cabinet making workshop with stacked timber veneer panels and hand tools"
      />

      <section className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="Who we are"
              title="Cabinetry works across the home."
            />

            <div className="text-muted-foreground mt-7 flex flex-col gap-5 text-[1.0625rem] leading-relaxed">
              <p>
                {site.legalName} is a cabinetry business based in{' '}
                {site.location.locality}, {site.location.region}, Australia.
                Our work covers kitchen, laundry and vanity cabinets,
                wardrobes, garage storage and all kinds of cabinetry works.
              </p>
              <p>
                Cabinetry is what holds a home together day to day. It decides
                how much fits in a kitchen, whether a laundry is workable, and
                how easily a wardrobe or garage stays in order. Our focus is on
                building cabinetry that suits the dimensions of the space and
                the storage it actually needs to provide.
              </p>
              <p>
                Each space is measured and planned individually, so the
                cabinetry fits the room properly rather than being adapted from
                a fixed set of sizes.
              </p>
            </div>

            <div className="border-foreground/15 mt-12 border-t pt-8">
              <h3 className="eyebrow text-muted-foreground">
                Cabinetry we provide
              </h3>
              <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services#${service.slug}`}
                      className="group border-border/70 hover:border-accent flex items-center justify-between gap-4 border-b py-3 transition-colors"
                    >
                      <span className="font-serif text-[1.25rem] leading-none">
                        {service.title}
                      </span>
                      <ArrowUpRight
                        className="text-muted-foreground group-hover:text-accent size-4 shrink-0 transition-colors"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={120}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/general/other-cabinetry-02.png"
                alt="Custom entry hallway joinery with a bench seat, shoe storage and a tall coat cupboard"
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover"
              />
            </div>

            <dl className="border-border bg-muted/50 mt-4 border p-7">
              <div className="border-border/70 flex flex-col gap-1 border-b pb-5">
                <dt className="eyebrow text-muted-foreground">Business</dt>
                <dd className="font-serif text-[1.25rem] leading-tight">
                  {site.legalName}
                </dd>
              </div>
              <div className="border-border/70 flex flex-col gap-1 border-b py-5">
                <dt className="eyebrow text-muted-foreground">Location</dt>
                <dd className="font-serif text-[1.25rem] leading-tight">
                  <address className="not-italic">
                    {site.location.display}
                  </address>
                </dd>
              </div>
              <div className="flex flex-col gap-1 pt-5">
                <dt className="eyebrow text-muted-foreground">Social</dt>
                <dd className="mt-1">
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent inline-flex items-center gap-2.5 text-[0.9375rem] transition-colors"
                  >
                    <FacebookIcon className="size-4" />
                    Follow us on Facebook
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <Principles />
      <FinalCta />
    </>
  )
}
