import HeroSection from '@/components/sections/hero-section-new'
import Services from '@/components/sections/ServicesSection'
import AvailabilityProcess from '@/components/sections/AvailabilityProcess'
import FeaturedJobsSection from '@/components/sections/FeaturedJobsSection'
import SocialProofSection from '@/components/sections/SocialProofSection'
import ContactForm from '@/components/sections/ContactForm'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Services />
      <AvailabilityProcess />
      <FeaturedJobsSection />
      <SocialProofSection />
      <ContactForm />
    </main>
  )
}
