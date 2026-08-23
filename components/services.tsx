import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ServiceCard } from '@/components/service-card'
import { services } from '@/lib/constants'

export function Services() {
  return (
    <section
      id="services"
      className="border-border/70 bg-muted/40 scroll-mt-24 border-y"
    >
      <div className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Cabinetry for Every Space"
            intro="Cabinetry works across the home — planned around the room it goes into and the storage it needs to provide."
          />
        </Reveal>

        <ul className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.slug} delay={(i % 3) * 90}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
