import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'

import { CtaButton } from '@/components/cta-button'
import { PageHeader } from '@/components/page-header'
import { Process } from '@/components/process'
import { Reveal } from '@/components/reveal'
import { services } from '@/lib/constants'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Cabinetry Services',
  description:
    'Kitchen cabinetry, laundry cabinetry, vanity cabinets, wardrobes, garage storage and other cabinetry works by IWD Melbourne Pty Ltd in Melbourne, Victoria.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Cabinetry for Every Space"
        intro={site.description}
        image="/images/kitchens/kitchen-02.png"
        imageAlt="Butler pantry cabinetry with pull-out drawers and timber drawer boxes"
      />

      <div className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="flex flex-col gap-20 lg:gap-32">
          {services.map((service, i) => (
            <Reveal
              as="article"
              key={service.slug}
              id={service.slug}
              className="scroll-mt-28"
            >
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? 'lg:[&>figure]:order-2' : ''
                }`}
              >
                <figure className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    loading={i === 0 ? 'eager' : 'lazy'}
                    priority={i === 0}
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover"
                  />
                </figure>

                <div>
                  <p className="eyebrow text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h2 className="mt-4 font-serif text-[2rem] leading-[1.1] font-light text-balance sm:text-4xl lg:text-[2.75rem]">
                    {service.title}
                  </h2>
                  <p className="text-foreground/80 mt-5 text-[1.0625rem] leading-relaxed">
                    {service.short}
                  </p>
                  <div className="text-muted-foreground mt-5 flex flex-col gap-4 text-[0.9375rem] leading-relaxed">
                    {service.detail.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
                    <CtaButton href={site.enquiry}>
                      Enquire About {service.title}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </CtaButton>
                    <CtaButton href={site.phone.href} variant="outline">
                      <Phone className="size-4" aria-hidden="true" />
                      Call Now
                    </CtaButton>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Process />
    </>
  )
}
