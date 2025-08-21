"use client"

import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import ContactForm from "@/components/sections/ContactForm"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <ServicesSection />
      <ContactForm />
    </main>
  )
}
