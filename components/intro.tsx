import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { site } from '@/lib/site'

export function Intro() {
  return (
    <section className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            eyebrow={`${site.location.locality}, ${site.location.region}`}
            title="Made for the way you live."
          />

          <div className="text-muted-foreground mt-7 flex flex-col gap-5 text-[1.0625rem] leading-relaxed">
            <p>
              {site.legalName} provides cabinetry solutions for kitchens,
              laundries, vanities, wardrobes, garages and other spaces where
              practical storage and considered design matter.
            </p>
            <p>
              Every space has its own dimensions, access and storage
              requirements. Cabinetry is measured, planned and built to suit
              them — so the finished result fits the room properly and holds
              what needs to be held.
            </p>
          </div>

          <Link
            href="/about"
            className="text-foreground border-accent/40 hover:border-accent mt-9 inline-flex items-center gap-2 border-b pb-1.5 text-[0.8125rem] font-medium tracking-[0.1em] uppercase transition-colors"
          >
            About IWD Melbourne
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={120}>
          <div className="grid gap-4 lg:grid-cols-5">
            <div className="relative aspect-[4/3] overflow-hidden lg:col-span-3 lg:aspect-[4/5]">
              <Image
                src="/images/work/desktop-media-unit.png"
                alt="Cabinetry joinery detail showing a timber drawer front and slim brass finger pull"
                fill
                sizes="(max-width: 1024px) 60vw, 34vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 lg:col-span-2">
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-square">
                <Image
                  src="/images/general/materials-01.png"
                  alt="Cabinetry material samples including oak veneer, laminate and stone"
                  fill
                  sizes="(max-width: 1024px) 40vw, 22vw"
                  className="object-cover"
                />
              </div>
              <div className="bg-secondary flex min-h-56 flex-col justify-end p-6 sm:min-h-64 lg:min-h-0 lg:flex-1 lg:p-5">
                <p className="text-muted-foreground max-w-sm font-serif text-[1.5rem] leading-snug sm:text-[1.7rem] lg:text-[1.375rem]">
                  Kitchens, laundries, vanities, wardrobes, garages and more.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
