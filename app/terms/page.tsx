import type { Metadata } from 'next'

import { LegalPlaceholder } from '@/components/legal-placeholder'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms & Conditions for IWD Melbourne Pty Ltd. This page is awaiting the final terms supplied by the business.',
  alternates: { canonical: '/terms' },
  robots: { index: false, follow: true },
}

export default function TermsPage() {
  return (
    <LegalPlaceholder
      eyebrow="Legal"
      title="Terms & Conditions"
      documentName="Terms & Conditions"
    />
  )
}
