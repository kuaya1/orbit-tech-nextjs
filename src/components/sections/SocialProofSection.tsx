'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { PrimaryTestimonialCard, SecondaryTestimonialCard } from '@/components/ui/testimonial-cards';
import { primaryTestimonial, secondaryTestimonials } from '@/lib/testimonials-data';

export const SocialProofSection: React.FC = () => {
  const [titleRef, isTitleVisible] = useScrollReveal(0.1);
  const [primaryRef, isPrimaryVisible] = useScrollReveal(0.1);
  const [secondaryRef, isSecondaryVisible] = useScrollReveal(0.1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlays */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          initial="hidden"
          animate={isTitleVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-6"
            variants={itemVariants}
          >
            <span className="text-yellow-400 text-sm font-medium">Customer Reviews</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Trusted by{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Homeowners
            </span>
            <br />
            Across the DMV
          </motion.h2>
          
          <motion.p 
            className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Real customers sharing their experience with The Orbit Tech's professional 
            Starlink installation services throughout Virginia, Maryland, and Washington D.C.
          </motion.p>
        </motion.div>

        {/* Primary Testimonial */}
        <div ref={primaryRef} className="mb-16">
          <PrimaryTestimonialCard
            testimonial={primaryTestimonial}
            isVisible={isPrimaryVisible}
          />
        </div>

        {/* Secondary Testimonials Grid */}
        <div ref={secondaryRef}>
          <motion.div 
            className={`text-center mb-12 transition-all duration-1000 ${
              isSecondaryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            initial="hidden"
            animate={isSecondaryVisible ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              More Happy Customers
            </h3>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Join the growing community of satisfied customers who chose The Orbit Tech for their Starlink needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryTestimonials.map((testimonial, index) => (
              <SecondaryTestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isVisible={isSecondaryVisible}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className={`text-center mt-20 transition-all duration-1000 ${
            isSecondaryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
          initial="hidden"
          animate={isSecondaryVisible ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl p-8 border border-neutral-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Satisfied Customers?
            </h3>
            <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
              Experience the same professional service and quality installation that our customers rave about.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:5719996915"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25"
              >
                Call (571) 999-6915
              </a>
              <button className="border border-neutral-600 hover:border-neutral-500 text-neutral-300 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                Read More Reviews
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
