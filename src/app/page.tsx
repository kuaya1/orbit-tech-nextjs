import type { Metadata } from 'next'
import StaticHero from '@/components/sections/StaticHero'
import Services from '@/components/sections/ServicesSection'
import AvailabilityProcess from '@/components/sections/AvailabilityProcess'
import FeaturedJobsSection from '@/components/sections/FeaturedJobsSection'
import SocialProofSection from '@/components/sections/SocialProofSection'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'The Orbit Tech | Professional Starlink Installation DMV',
  description: 'Professional Starlink installation services in McLean, VA and surrounding areas. Expert technicians, same-day service. Call (571) 999-6915',
  keywords: ['Starlink installation', 'DMV', 'McLean VA', 'satellite internet', 'professional installation', 'Reston'],
  openGraph: {
    title: 'The Orbit Tech | Professional Starlink Installation DMV',
    description: 'Professional Starlink installation services in McLean, VA and surrounding areas. Expert technicians, same-day service.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function Home() {
  return (
    <main>
      {/* Static hero for immediate SEO content */}
      <StaticHero />
      <Services />
      <AvailabilityProcess />
      <FeaturedJobsSection />
      <SocialProofSection />
      <ContactForm />
    </main>
  )
}
