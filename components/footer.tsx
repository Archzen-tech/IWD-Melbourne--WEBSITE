import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

import { FacebookIcon } from '@/components/icons/facebook-icon'
import { services } from '@/lib/constants'
import { nav, site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="bg-charcoal text-background/70">
      <div className="mx-auto max-w-[88rem] px-5 pt-20 pb-24 sm:pb-12 sm:px-8 lg:px-12 lg:pt-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Identity */}
          <div className="lg:col-span-5">
            <span className="font-serif text-[1.5rem] font-light tracking-wide text-background block leading-none">
              {site.name}
            </span>
            <p className="text-background/60 mt-6 max-w-sm text-[0.9375rem] leading-relaxed">
              {site.description}
            </p>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/70 hover:border-background/60 hover:text-background mt-8 inline-flex items-center gap-2.5 border-b border-transparent pb-1 text-[0.8125rem] tracking-[0.06em] transition-colors"
            >
              <FacebookIcon className="size-4" />
              Follow us on Facebook
            </a>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer" className="lg:col-span-2">
            <h2 className="eyebrow text-background/40">Navigate</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-background text-[0.9375rem] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background text-[0.9375rem] transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <div className="lg:col-span-2">
            <h2 className="eyebrow text-background/40">Cabinetry</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="hover:text-background text-[0.9375rem] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="eyebrow text-background/40">Contact</h2>
            <ul className="mt-5 flex flex-col gap-4 text-[0.9375rem]">
              <li>
                <a
                  href={site.phone.href}
                  className="hover:text-background flex items-start gap-3 transition-colors"
                >
                  <Phone
                    className="mt-1 size-4 shrink-0 opacity-60"
                    aria-hidden="true"
                  />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={site.email.href}
                  className="hover:text-background flex items-start gap-3 break-all transition-colors"
                >
                  <Mail
                    className="mt-1 size-4 shrink-0 opacity-60"
                    aria-hidden="true"
                  />
                  {site.email.display}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-1 size-4 shrink-0 opacity-60"
                  aria-hidden="true"
                />
                <address className="not-italic">
                  {site.location.display}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-background/12 mt-16 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-background/45 text-[0.8125rem]">
            © 2026 {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/privacy"
              className="text-background/45 hover:text-background/80 text-[0.8125rem] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-background/45 hover:text-background/80 text-[0.8125rem] transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <a
              href="https://www.archzen.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-background text-[0.8125rem] font-medium tracking-wide transition-colors inline-flex items-center gap-1.5 group"
            >
              Website by ArchZen
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
