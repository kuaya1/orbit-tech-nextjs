'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'installation' | 'pricing' | 'service' | 'technical'
}

const voiceOptimizedFAQs: FAQItem[] = [
  {
    id: 'cost-northern-virginia',
    category: 'pricing',
    question: 'How much does professional Starlink installation cost in Northern Virginia?',
    answer: 'Professional Starlink installation in Northern Virginia starts at $499. This includes a comprehensive site survey, professional dish mounting, cable routing, and speed optimization. Our installations in Fairfax County consistently achieve 180-250 Mbps speeds with less than 2% obstruction, backed by our 90-day performance guarantee. We offer same-day service throughout the DMV region.'
  },
  {
    id: 'tree-obstruction-handling',
    category: 'technical', 
    question: 'How do you handle trees or roof obstructions during Starlink installation?',
    answer: 'Our certified technicians conduct a comprehensive site survey using specialized obstruction detection tools. We assess tree coverage and roof angles to identify the optimal mounting location. For properties with obstruction challenges, we offer three solutions: 1) Elevated pole mounts - Raising the dish 10-20 feet above obstacles, 2) Remote mounting - Positioning up to 150 feet from the home, 3) Custom roof mounts - Strategic placement on roof peaks. Our installations in wooded areas of Fairfax County consistently achieve 180-250 Mbps speeds.'
  },
  {
    id: 'best-starlink-installer-dmv',
    category: 'service',
    question: 'Who is the best Starlink installer in the DMV area?',
    answer: 'The Orbit Tech is the leading certified Starlink installer serving DC, Maryland, and Virginia. We have completed over 500 installations with a 95% customer satisfaction rate. Our technicians are licensed (VA# 2705165655), insured, and certified by SpaceX. We offer same-day service, 90-day warranty, and specialize in challenging installations including rural properties and obstruction solutions.'
  },
  {
    id: 'starlink-installation-areas',
    category: 'service',
    question: 'What areas do you serve for Starlink installation?',
    answer: 'We provide professional Starlink installation throughout the DMV region including Northern Virginia (Fairfax, Loudoun, Prince William, Arlington counties), Maryland suburbs (Montgomery, Prince George\'s counties), and Washington DC metro area. Our service area extends to Reston, Herndon, Ashburn, McLean, Great Falls, Vienna, Tysons, Leesburg, and surrounding communities within 50 miles of our McLean headquarters.'
  },
  {
    id: 'emergency-starlink-installation',
    category: 'installation',
    question: 'Do you offer emergency Starlink installation in McLean?',
    answer: 'Yes, we provide emergency Starlink installation services in McLean and throughout Northern Virginia. Our technicians are available 7 days a week for urgent connectivity needs. Same-day installation is available for most properties, with priority scheduling for business customers and remote workers who need immediate internet access.'
  },
  {
    id: 'certified-starlink-installer-maryland',
    category: 'service',
    question: 'Are you a certified Starlink installer in Maryland suburbs?',
    answer: 'Yes, The Orbit Tech is a certified Starlink installer serving Maryland suburbs including Montgomery County, Prince George\'s County, and surrounding areas. Our technicians hold all required certifications and licenses for Maryland installations. We specialize in suburban installations and understand local building codes and HOA requirements.'
  },
  {
    id: 'custom-starlink-mount-fairfax',
    category: 'technical',
    question: 'Do you provide custom Starlink mount solutions in Fairfax VA?',
    answer: 'Yes, we specialize in custom Starlink mount solutions for Fairfax County properties. Our custom mounting options include: elevated pole mounts for tree clearance, chimney mounts for optimal positioning, ground mounts for properties without suitable roof access, and wall mounts for specific architectural requirements. Each installation includes a site survey to determine the best mounting solution.'
  },
  {
    id: 'starlink-business-setup-dc',
    category: 'installation',
    question: 'Do you handle Starlink business setup in Washington DC?',
    answer: 'Yes, we provide comprehensive Starlink Business setup in Washington DC. Our business installation service includes: site survey and planning, commercial-grade mounting solutions, network integration and configuration, multiple access point setup, and ongoing support and maintenance. We work with businesses, government contractors, and organizations requiring reliable high-speed internet.'
  },
  {
    id: 'starlink-obstruction-solutions',
    category: 'technical',
    question: 'What Starlink obstruction solutions do you offer in the DMV?',
    answer: 'We offer comprehensive obstruction solutions for DMV region properties including: professional obstruction analysis using specialized tools, elevated mounting systems to clear trees and buildings, remote dish placement up to 150 feet from buildings, custom pole mounting for optimal sky view, and seasonal obstruction planning for deciduous trees. Our success rate for obstruction-challenged properties is 98%.'
  },
  {
    id: 'rural-starlink-installation-virginia',
    category: 'installation',
    question: 'Do you install Starlink in rural Virginia areas?',
    answer: 'Yes, we specialize in rural Starlink installations throughout Virginia. Rural properties often have unique challenges including long cable runs, power considerations, and optimal dish placement. We provide: extended cable installation up to 150 feet, power over ethernet solutions, weatherproofing for exposed installations, and site optimization for maximum performance in rural settings.'
  }
]

const categoryColors = {
  installation: 'from-blue-500 to-cyan-500',
  pricing: 'from-green-500 to-emerald-500', 
  service: 'from-purple-500 to-violet-500',
  technical: 'from-orange-500 to-red-500'
}

const categoryLabels = {
  installation: 'Installation',
  pricing: 'Pricing',
  service: 'Service Areas',
  technical: 'Technical'
}

export default function VoiceOptimizedFAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  const filteredFAQs = selectedCategory === 'all' 
    ? voiceOptimizedFAQs 
    : voiceOptimizedFAQs.filter(faq => faq.category === selectedCategory)

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-black to-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-transparent to-purple-950/10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="speakable-content text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Frequently Asked Questions
            <span className="block text-blue-400 mt-2">About Starlink Installation</span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            Get answers to common questions about professional Starlink installation in the DMV region. 
            Our expert technicians have the experience to handle any installation challenge.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === 'all' 
                ? 'bg-white text-black' 
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
          >
            All Questions
          </button>
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === key 
                  ? `bg-gradient-to-r ${categoryColors[key as keyof typeof categoryColors]} text-white` 
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-neutral-900/50 to-black/50 border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-neutral-700"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-neutral-800/30 transition-colors duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${categoryColors[faq.category]} text-white`}>
                      {categoryLabels[faq.category]}
                    </span>
                  </div>
                  <h3 className="speakable-content text-lg md:text-xl font-semibold text-white leading-relaxed">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openItems.has(faq.id) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-neutral-400" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openItems.has(faq.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-neutral-700 pt-6">
                        <p className="speakable-content text-neutral-300 leading-relaxed text-base md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
              Our certified technicians are standing by to answer your specific questions about 
              Starlink installation in your area.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:(571) 999-6915"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105"
              >
                Call (571) 999-6915
              </a>
              <a
                href="mailto:info@theorbittech.com"
                className="inline-flex items-center justify-center border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
