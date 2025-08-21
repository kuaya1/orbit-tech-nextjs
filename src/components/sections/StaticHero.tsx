// Server-side static hero section for immediate SEO content
import Link from 'next/link'
import Image from 'next/image'

export default function StaticHero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Fallback styles for crawlers that don't load CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .crawler-fallback { 
            background: #000 !important; 
            color: #fff !important; 
            min-height: 100vh !important; 
            padding: 40px 20px !important; 
          }
          .crawler-text { 
            color: #ffffff !important; 
            font-size: 24px !important; 
            line-height: 1.4 !important; 
            margin: 20px 0 !important; 
          }
          .crawler-cta { 
            background: #3b82f6 !important; 
            color: #ffffff !important; 
            padding: 15px 30px !important; 
            text-decoration: none !important; 
            display: inline-block !important; 
            margin: 10px !important; 
            border-radius: 8px !important; 
          }
        `
      }} />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 crawler-fallback">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight crawler-text">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 leading-tight" 
                    style={{WebkitBackgroundClip: 'text', backgroundClip: 'text', color: '#60a5fa'}}>
                Certified Starlink Installers
              </span>
              <span className="block text-white leading-tight mt-2 crawler-text">Serving Reston & The DMV</span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 crawler-text">
              From professional installation to whole-home Wi-Fi optimization—we ensure every corner of your property gets blazing-fast internet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-transform hover:scale-[1.02] crawler-cta"
              >
                Get a Free Quote
              </Link>
              <a href="tel:+15719996915" className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-transform hover:scale-[1.02] crawler-cta" style={{backgroundColor: '#1f2937', color: '#ffffff'}}>
                Call (571) 999-6915
              </a>
            </div>

            {/* Critical business info with fallback styling */}
            <div className="flex flex-wrap gap-x-6 gap-y-4 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 text-neutral-400" style={{color: '#d1d5db'}}>
                <span className="text-green-500" style={{color: '#10b981'}}>✓</span>
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400" style={{color: '#d1d5db'}}>
                <span className="text-green-500" style={{color: '#10b981'}}>✓</span>
                <span className="text-sm font-medium">Same Day Service</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400" style={{color: '#d1d5db'}}>
                <span className="text-green-500" style={{color: '#10b981'}}>✓</span>
                <span className="text-sm font-medium">Expert Technicians</span>
              </div>
            </div>

            {/* Crawler-visible business info */}
            <div className="crawler-text" style={{color: '#ffffff', fontSize: '16px', marginTop: '30px'}}>
              <p><strong>Orbit Tech Starlink</strong> - Professional Starlink Installation</p>
              <p>📍 Serving Northern Virginia, Reston, Herndon, Ashburn</p>
              <p>📞 Call: (571) 999-6915</p>
              <p>✉️ Email: orbittech.install@gmail.com</p>
              <p>⭐ Licensed & Insured | Same Day Service | Expert Installation</p>
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
