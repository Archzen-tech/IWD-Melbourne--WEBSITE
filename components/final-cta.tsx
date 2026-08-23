import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'

import { CtaButton } from '@/components/cta-button'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site'

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/kitchens/kitchen-03.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="bg-charcoal/82 absolute inset-0"
      />

      <div className="relative mx-auto max-w-[88rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-background font-serif text-[2.25rem] leading-[1.08] font-light text-balance sm:text-5xl lg:text-[3.75rem]">
            Have a cabinetry project in mind?
          </h2>
          <p className="text-background/70 mx-auto mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-pretty">
            Talk to {site.name} about your cabinetry requirements.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CtaButton href={site.phone.href} variant="solidLight">
              <Phone className="size-4" aria-hidden="true" />
              Call {site.phone.display}
            </CtaButton>
            <CtaButton href={site.enquiry} variant="outlineLight">
              Send an Enquiry
              <ArrowRight className="size-4" aria-hidden="true" />
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
