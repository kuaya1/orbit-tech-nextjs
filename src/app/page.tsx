"use client"

import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import FeaturedJobsSection from "@/components/sections/FeaturedJobsSection"
import SocialProofSection from "@/components/sections/SocialProofSection"
import AvailabilityProcess from "@/components/sections/AvailabilityProcess"
import ContactForm from "@/components/sections/ContactForm"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <AvailabilityProcess />
      <ServicesSection />
      <SocialProofSection />
      <ContactForm />
      <FeaturedJobsSection />
    </main>
  )
}
