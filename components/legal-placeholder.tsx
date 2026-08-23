import { Mail, Phone } from 'lucide-react'

import { PageHeader } from '@/components/page-header'
import { site } from '@/lib/site'

/**
 * Renders a legal page that is intentionally free of legal text.
 *
 * No policy or contract wording is invented here. The page states plainly
 * that the document has not been published yet and points visitors to the
 * business's real contact details. Replace the body below with the actual
 * text once the business supplies it.
 */
export function LegalPlaceholder({
  eyebrow,
  title,
  documentName,
}: {
  eyebrow: string
  title: string
  documentName: string
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} />

      <section className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-muted-foreground text-[1.0625rem] leading-relaxed text-pretty">
            {site.legalName} has not yet published its {documentName}. Rather
            than display placeholder legal wording, this page has been left
            without it.
          </p>
          <p className="text-muted-foreground mt-5 text-[1.0625rem] leading-relaxed text-pretty">
            For any questions about how {site.name} handles your enquiry or
            your information, please get in touch directly.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phone.href}
              className="bg-foreground text-background hover:bg-accent inline-flex items-center justify-center gap-2.5 px-6 py-4 text-[0.6875rem] font-medium tracking-[0.14em] uppercase transition-colors"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              Call {site.phone.display}
            </a>
            <a
              href={site.email.href}
              className="border-foreground/25 hover:bg-foreground hover:text-background inline-flex items-center justify-center gap-2.5 border px-6 py-4 text-[0.6875rem] font-medium tracking-[0.14em] uppercase transition-colors"
            >
              <Mail className="size-3.5" aria-hidden="true" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
