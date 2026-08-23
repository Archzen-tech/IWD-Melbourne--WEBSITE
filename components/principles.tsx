import Image from 'next/image'
import { Layers, Ruler, Sparkles } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { principles } from '@/lib/constants'

const icons = [Ruler, Layers, Sparkles]

export function Principles() {
  return (
    <section className="bg-charcoal relative isolate overflow-hidden">
      {/* Subtle photographic texture behind the type */}
      <Image
        src="/images/general/workshop-01.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-[0.14]"
      />
      <div
        aria-hidden="true"
        className="from-charcoal via-charcoal/85 to-charcoal absolute inset-0 bg-gradient-to-b"
      />

      <div className="relative mx-auto max-w-[88rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Approach"
            title="Cabinetry That Makes Space Work Better"
            tone="light"
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <ul className="mt-14 grid gap-px lg:mt-20 lg:grid-cols-3">
          {principles.map((principle, i) => {
            const Icon = icons[i]
            return (
              <Reveal
                as="li"
                key={principle.title}
                delay={i * 110}
                className="border-background/12 flex flex-col border-t py-9 lg:border-t-0 lg:border-l lg:px-9 lg:py-2 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
              >
                <Icon
                  className="text-taupe size-6 shrink-0"
                  aria-hidden="true"
                />
                <h3 className="text-background mt-6 font-serif text-[1.625rem] leading-snug font-normal">
                  {principle.title}
                </h3>
                <p className="text-background/60 mt-3.5 text-[1.0625rem] leading-relaxed">
                  {principle.body}
                </p>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
