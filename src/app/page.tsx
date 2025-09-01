"use client"

import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import FeaturedJobsSection from "@/components/sections/FeaturedJobsSection"
import SocialProofSection from "@/components/sections/SocialProofSection"
import AvailabilityProcess from "@/components/sections/AvailabilityProcess"
import ContactForm from "@/components/sections/ContactForm"
import FinalCTASection from "@/components/sections/FinalCTASection"
import VoiceOptimizedFAQ from "@/components/sections/VoiceOptimizedFAQ"
import AuthorityContentHub from "@/components/sections/AuthorityContentHub"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <AvailabilityProcess />
      <ServicesSection />
      <AuthorityContentHub />
      <VoiceOptimizedFAQ />
      <SocialProofSection />
      <ContactForm />
      <FeaturedJobsSection />
      <FinalCTASection />
    </main>
  )
}
