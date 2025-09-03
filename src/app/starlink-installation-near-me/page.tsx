import type { Metadata } from 'next'
import { Suspense } from 'react'
import NearMeHero from '@/components/near-me/NearMeHero'
import ServiceAreas from '@/components/near-me/ServiceAreas'
import LocalizedContent from '@/components/near-me/LocalizedContent'
import NearMeStructuredData from '@/components/seo/NearMeStructuredData'
import FinalCTASection from '@/components/sections/FinalCTASection'

export const metadata: Metadata = {
  title: 'Starlink Installation Near Me | Same-Day Service DMV | The Orbit Tech',
  description: 'Looking for Starlink installation near you? Located in Reston, VA, serving all DMV areas within 50 miles. Same-day installation available. ⚡ Call (571) 999-6915',
  keywords: [
    'starlink installation near me',
    'starlink installer near me',
    'local starlink installation',
    'starlink installation nearby',
    'starlink setup near me',
    'starlink technician near me',
    'starlink installation service area',
    'professional starlink installer nearby'
  ],
  openGraph: {
    title: 'Starlink Installation Near Me | Same-Day Service',
    description: 'Professional Starlink installation near you. Located 2.3 miles away in Reston, VA. Same-day service available.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://theorbittech.com/starlink-installation-near-me'
  },
}

export default function NearMePage() {
  return (
    <>
      <NearMeStructuredData />
      <main className="min-h-screen bg-black text-white">
        <Suspense fallback={<div>Loading...</div>}>
          <NearMeHero />
        </Suspense>
        <ServiceAreas />
        <LocalizedContent />
        <FinalCTASection />
      </main>
    </>
  )
}
