import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import type { Service } from '@/lib/constants'

export function ServiceCard({
  service,
  priority = false,
}: {
  service: Service
  priority?: boolean
}) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group focus-visible:outline-accent block focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      <div className="bg-secondary relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          loading={priority ? 'eager' : 'lazy'}
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="from-charcoal/40 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>

      <div className="flex items-start justify-between gap-4 pt-5">
        <div>
          <h3 className="group-hover:text-accent font-serif text-[1.5rem] leading-tight font-normal transition-colors">
            {service.title}
          </h3>
          <p className="text-muted-foreground mt-2.5 max-w-sm text-[0.9375rem] leading-relaxed">
            {service.short}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="border-border text-muted-foreground group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground mt-1 inline-flex size-9 shrink-0 items-center justify-center border transition-colors duration-300"
        >
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  )
}
