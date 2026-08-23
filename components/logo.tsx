import Image from 'next/image'
import Link from 'next/link'

import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

/** Official IWD logo supplied by the business. */
export function Logo({
  className,
}: {
  className?: string
  tone?: 'dark' | 'light'
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.legalName} — home`}
      className={cn(
        'group inline-flex items-center transition-opacity hover:opacity-75',
        className,
      )}
    >
      <Image
        src="/images/general/iwd-logo.png"
        alt="IWD Melbourne logo"
        width={1680}
        height={918}
        priority
        className="h-auto w-[5.25rem] object-contain sm:w-[6.25rem] lg:w-[7rem]"
      />
    </Link>
  )
}
