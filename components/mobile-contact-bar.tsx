import Link from 'next/link'
import { Phone } from 'lucide-react'

import { site } from '@/lib/site'

/**
 * Fixed bottom contact bar on mobile only.
 *
 * The matching bottom padding that stops this bar covering page content is
 * applied by the `.pb-safe-cta` spacer rendered at the end of the footer flow
 * via the body padding utility below.
 */
export function MobileContactBar() {
  return (
    <div className="border-border bg-background/95 fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden">
      <a
        href={site.phone.href}
        className="border-border text-foreground flex items-center justify-center gap-2 border-r py-4 text-[0.75rem] font-medium tracking-[0.12em] uppercase"
      >
        <Phone className="size-4" aria-hidden="true" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="bg-accent text-accent-foreground flex items-center justify-center py-4 text-[0.75rem] font-medium tracking-[0.12em] uppercase"
      >
        Get in Touch
      </Link>
    </div>
  )
}
