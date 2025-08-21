// Server-side static hero section for immediate SEO content
import Link from 'next/link'
import Image from 'next/image'

export default function StaticHero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 leading-tight">Certified Starlink Installers</span>
              <span className="block text-white leading-tight mt-2">Serving Reston & The DMV</span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From professional installation to whole-home Wi-Fi optimization—we ensure every corner of your property gets blazing-fast internet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-transform hover:scale-[1.02]"
              >
                Get a Free Quote
              </Link>
              <a href="tel:+15719996915" className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-transform hover:scale-[1.02]">
                Call (571) 999-6915
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-4 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 text-neutral-400">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Same Day Service</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Expert Technicians</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl blur-3xl opacity-50" />
            <div className="relative bg-black rounded-2xl border border-white/10 overflow-hidden aspect-[4/3]">
              <Image
                src="/Untitled design (20).png"
                alt="Professional Starlink satellite internet installation equipment"
                fill
                priority={true}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
