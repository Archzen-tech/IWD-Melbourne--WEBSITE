import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'

import { CtaButton } from '@/components/cta-button'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section className="bg-charcoal relative isolate flex min-h-[100svh] items-end overflow-hidden lg:min-h-[94svh]">
      {/* Background photography */}
      <Image
        src="/images/hero/kitchen-hero.png"
        alt="Custom kitchen cabinetry with matte oak joinery and a stone island bench"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Readability gradients — vertical for the text block, horizontal on desktop */}
      <div
        aria-hidden="true"
        className="from-charcoal/92 via-charcoal/55 absolute inset-0 bg-gradient-to-t to-transparent z-10"
      />
      <div
        aria-hidden="true"
        className="from-charcoal/85 absolute inset-0 hidden bg-gradient-to-r via-transparent to-transparent lg:block z-10"
      />

      <div className="relative mx-auto w-full max-w-[88rem] px-5 pt-32 pb-40 sm:px-8 sm:pb-20 lg:px-12 lg:pt-40 lg:pb-24 z-20">
        <div className="max-w-2xl animate-hero-fade">
          <p className="eyebrow text-background/70 flex items-center gap-3">
            <span aria-hidden="true" className="bg-background/40 h-px w-10" />
            Custom Cabinetry • Melbourne
          </p>

          <h1 className="text-background mt-7 font-serif text-[2.75rem] leading-[1.02] font-light tracking-[-0.015em] text-balance sm:text-6xl lg:text-[5rem]">
            Cabinetry Designed Around Your Space.
          </h1>

          <p className="text-background/75 mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-pretty lg:text-lg">
            {site.description}
          </p>

          <div className="relative z-10 mt-8 flex -translate-y-8 flex-col gap-3 sm:mt-10 sm:translate-y-0 sm:flex-row sm:items-center sm:gap-4">
            <CtaButton href="/contact" variant="solidLight">
              Get in Touch
              <ArrowRight className="size-4" aria-hidden="true" />
            </CtaButton>
            <CtaButton href="/work" variant="outlineLight">
              Explore Our Work
            </CtaButton>
          </div>

          <a
            href={site.phone.href}
            className="text-background/65 hover:text-background relative z-10 mt-2 inline-flex -translate-y-8 items-center gap-2.5 text-sm tracking-[0.04em] transition-colors sm:mt-9 sm:translate-y-0"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  )
}
