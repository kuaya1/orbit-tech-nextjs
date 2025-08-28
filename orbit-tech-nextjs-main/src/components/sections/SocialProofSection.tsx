// app/components/sections/social-proof-section.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { primaryTestimonial, secondaryTestimonials } from '@/lib/testimonials-data';
import { PrimaryTestimonialCard, SecondaryTestimonialCard } from '@/components/ui/testimonial-cards';

const SocialProofSection = () => {
  // We use one observer for the whole section to trigger the animations
  const [sectionRef, sectionVisible] = useScrollReveal(0.1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      id="testimonials"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-black relative overflow-hidden"
      initial="hidden"
      animate={sectionVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div className="text-center max-w-3xl mx-auto mb-20" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Trusted by Homeowners
            <span className="block text-blue-400 mt-2">Across the DMV</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Real reviews from your neighbors in Virginia, Maryland, and DC who have transformed their internet with our professional Starlink installation.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div className="mb-16" variants={itemVariants}>
          <PrimaryTestimonialCard testimonial={primaryTestimonial} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
            >
              <SecondaryTestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div className="text-center mt-20" variants={itemVariants}>
          <Link href="#contact" className="inline-flex items-center justify-center bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20">
            Become Our Next Success Story
          </Link>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default SocialProofSection;