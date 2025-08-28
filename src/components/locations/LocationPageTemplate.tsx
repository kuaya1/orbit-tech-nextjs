import React from 'react';
import { MapPin, Star, Shield, Clock, Phone, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import type { Location } from '@/data/locations';

interface LocationPageTemplateProps {
  location: Location;
}

export default function LocationPageTemplate({ location }: LocationPageTemplateProps) {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
              <MapPin className="w-4 h-4" />
              {location.county}, {location.state}
            </div>

            {/* Main Heading - Optimized for Conversion */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
              {location.name} Starlink Installation
              <span className="block text-blue-400 mt-2">
                Same-Day Service from $499
              </span>
            </h1>

            {/* Pricing Banner */}
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl mb-8">
              <div className="text-white">
                <span className="text-2xl font-bold">$499</span>
                <span className="text-sm text-neutral-300 ml-2">Professional Installation</span>
              </div>
              <div className="w-px h-8 bg-blue-500/30" />
              <div className="text-white">
                <span className="text-lg font-semibold">$120/mo</span>
                <span className="text-sm text-neutral-300 ml-1">Service</span>
              </div>
            </div>

            {/* Intro Copy */}
            <p className="text-xl text-neutral-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              {location.introCopy}
            </p>

            {/* Urgency Banner */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium rounded-full mb-8">
              <Clock className="w-4 h-4" />
              Currently scheduling installations in {location.name} this week
            </div>

            {/* CTA Buttons - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="#contact"
                className="group inline-flex items-center justify-center bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 relative overflow-hidden"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span className="relative">Schedule {location.name} Installation - $499</span>
              </a>
              <a 
                href="tel:+15719996915"
                className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:bg-white/10"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call for Same-Day Service
              </a>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap gap-x-6 gap-y-4 justify-center">
              <div className="flex items-center gap-2 text-neutral-400">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <Star className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">50+ {location.name} Installations</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <Clock className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">Based in Reston - 15 Min Away</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">90-Day Installation Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Challenges Section */}
      <section className="py-24 sm:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
                  Local Expertise for
                  <span className="block text-blue-400 mt-2">{location.name} Installations</span>
                </h2>
                <p className="text-lg text-neutral-300 leading-relaxed">
                  {location.localChallenges}
                </p>
              </div>

              {/* Service Areas */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  We Serve These {location.name} Communities:
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {location.cities.map((city: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-neutral-300 text-sm">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Local Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-800">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-neutral-500">Local Installations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">24hr</div>
                  <div className="text-sm text-neutral-500">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">90 Day</div>
                  <div className="text-sm text-neutral-500">Warranty</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl blur-3xl opacity-50" />
              <div className="relative bg-black rounded-2xl border border-white/10 overflow-hidden aspect-[4/3]">
                <Image
                  src="/Untitled design (20).png"
                  alt={`Professional Starlink installation in ${location.name}, ${location.state}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Specific to Location */}
      <section className="py-24 sm:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              Complete Starlink Solutions
              <span className="block text-blue-400 mt-2">for {location.name} Residents</span>
            </h2>
            <p className="text-lg text-neutral-300">
              From initial consultation to final optimization, we provide comprehensive Starlink services tailored to {location.name}&apos;s unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Professional Installation */}
            <div className="group bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-2xl p-8 transition-all duration-300 hover:border-neutral-700 relative">
              <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                $499
              </div>
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Professional Installation</h3>
              <p className="text-neutral-400 mb-6">Expert mounting, precise aiming, and weather-resistant setup designed for {location.name}&apos;s unique terrain and weather conditions.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Site survey & analysis
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Storm-proof mounting
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Cable management & weatherproofing
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Same-day service available
                </li>
              </ul>
              <div className="text-orange-400 text-sm font-medium">
                Next available in {location.name}: This week
              </div>
            </div>

            {/* Wi-Fi Optimization */}
            <div className="group bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-2xl p-8 transition-all duration-300 hover:border-neutral-700 relative">
              <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                +$299
              </div>
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Star className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Whole-Home Wi-Fi</h3>
              <p className="text-neutral-400 mb-6">Eliminate dead zones throughout your {location.name} property with professional mesh network setup optimized for local building types.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Custom mesh network design
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Speed optimization & testing
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Smart device integration
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Performance guarantee
                </li>
              </ul>
              <div className="text-blue-400 text-sm font-medium">
                Popular upgrade in {location.name}
              </div>
            </div>

            {/* Local Support */}
            <div className="group bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-2xl p-8 transition-all duration-300 hover:border-neutral-700 relative">
              <div className="absolute top-4 right-4 px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">
                FREE
              </div>
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Local DMV Support</h3>
              <p className="text-neutral-400 mb-6">Based in Reston, we provide rapid response and ongoing support for all {location.name} customers with local expertise you can trust.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  24/7 emergency service
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Local technician response
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  90-day installation warranty
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Lifetime technical support
                </li>
              </ul>
              <div className="text-green-400 text-sm font-medium">
                15 minutes from {location.name}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              Frequently Asked Questions
              <span className="block text-blue-400 mt-2">About {location.name} Installations</span>
            </h2>
            <p className="text-lg text-neutral-300">
              Common questions from {location.name} homeowners about Starlink installation and service.
            </p>
          </div>

          <div className="space-y-6">
            {location.faqs.map((faq: { question: string; answer: string }, index: number) => (
              <details 
                key={index}
                className="group bg-gradient-to-b from-neutral-900/50 to-black/50 border border-neutral-800 rounded-2xl p-6 transition-all duration-300 hover:border-neutral-700"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <div className="w-6 h-6 text-blue-400 transform transition-transform group-open:rotate-45">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </summary>
                <div className="mt-4 pt-4 border-t border-neutral-800">
                  <p className="text-neutral-300 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Local Contact CTA */}
      <section className="relative py-32 lg:py-40 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
        <div className="absolute inset-0 opacity-20" style={{
          background: 'radial-gradient(circle 1000px at 50% 0%, rgba(59, 130, 246, 0.08), transparent 60%)'
        }} />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
            <MapPin className="w-4 h-4" />
            Ready to Get Started in {location.name}?
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-8">
            <span className="text-white">Transform your</span>
            <br />
            <span className="text-white font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              {location.name} connectivity
            </span>
          </h2>

          <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Join your neighbors in {location.name} who have already upgraded to lightning-fast Starlink internet. 
            Professional installation with same-day service available.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center bg-blue-500 text-white font-semibold px-10 py-5 rounded-2xl text-lg transition-all duration-300 hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <span className="relative flex items-center gap-3">
                Schedule {location.name} Installation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            <a
              href="tel:+15719996915"
              className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-white font-semibold px-10 py-5 rounded-2xl text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call: (571) 999-6915
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <a href="tel:+15719996915" className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors">
              <Phone className="w-5 h-5 text-blue-500" />
              <span>(571) 999-6915</span>
            </a>
            <a href="mailto:contact@theorbittech.com" className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors">
              <Mail className="w-5 h-5 text-blue-500" />
              <span>contact@theorbittech.com</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6 text-neutral-500 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Proudly serving {location.name}, {location.county}, {location.state} and surrounding areas</span>
          </div>
        </div>
      </section>
    </main>
  );
}
