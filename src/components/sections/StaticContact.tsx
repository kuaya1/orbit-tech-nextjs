// Server-side rendered contact section for immediate SEO content

export default function StaticContact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-gradient-to-b from-black to-neutral-900 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-transparent to-cyan-950/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Ready for
            <span className="block text-blue-400 mt-2">Lightning-Fast Internet?</span>
          </h2>
          <p className="text-lg leading-8 text-neutral-300">
            Get a free consultation and quote for your Starlink installation. Our certified technicians are standing by to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                
                {/* Phone */}
                <a href="tel:+15719996915" className="group flex items-center gap-4 p-6 bg-black/50 border border-neutral-800 rounded-2xl transition-all duration-300 hover:bg-neutral-900/50 hover:border-neutral-700">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 mb-1">Call or Text</p>
                    <p className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">(571) 999-6915</p>
                    <p className="text-sm text-neutral-500">Available 7 days a week</p>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:orbittech.install@gmail.com" className="group flex items-center gap-4 p-6 bg-black/50 border border-neutral-800 rounded-2xl transition-all duration-300 hover:bg-neutral-900/50 hover:border-neutral-700">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 mb-1">Email Us</p>
                    <p className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">orbittech.install@gmail.com</p>
                    <p className="text-sm text-neutral-500">Quick response guaranteed</p>
                  </div>
                </a>

                {/* Service Area */}
                <div className="flex items-center gap-4 p-6 bg-black/50 border border-neutral-800 rounded-2xl">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 mb-1">Service Area</p>
                    <p className="text-xl font-semibold text-white">Northern Virginia</p>
                    <p className="text-sm text-neutral-500">Reston, Herndon, Ashburn & surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Why Choose Orbit Tech?</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-300">Licensed and insured technicians</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-300">Same-day and emergency services</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-300">Competitive pricing with no hidden fees</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-300">100% satisfaction guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-300">Ongoing support and maintenance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-3xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Request a Free Quote</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-neutral-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-neutral-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-neutral-300 mb-2">
                  Installation Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="123 Main St, Reston, VA 20191"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your installation needs, property type, current internet situation, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02]"
              >
                Get My Free Quote
                <svg className="w-5 h-5 ml-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <p className="text-sm text-neutral-500 text-center">
                * Required fields. We&apos;ll respond within 24 hours.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-12 border-t border-neutral-800 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Installation Today?
          </h3>
          <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
            For emergency installations or same-day service, call us directly. We often have same-day availability for urgent projects.
          </p>
          <a 
            href="tel:+15719996915"
            className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105"
          >
            <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now: (571) 999-6915
          </a>
        </div>
      </div>
    </section>
  )
}
