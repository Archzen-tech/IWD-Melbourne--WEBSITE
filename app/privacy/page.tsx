import type { Metadata } from 'next'

import { LegalPlaceholder } from '@/components/legal-placeholder'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for IWD Melbourne Pty Ltd. This page is awaiting the final policy text supplied by the business.',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: true },
}

export default function PrivacyPage() {
  return (
    <LegalPlaceholder
      eyebrow="Legal"
      title="Privacy Policy"
      documentName="Privacy Policy"
    />
  )
}
