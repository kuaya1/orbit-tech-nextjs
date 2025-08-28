// app/components/sections/hero-section.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { StarRating, TrustIndicator } from '@/components/ui/trust-elements';
import { trustIndicators } from '@/lib/hero-data';

const HeroSection = () => {
  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } 
  };
  const fadeInUp = { 
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 30, stiffness: 100 } } 
  };
  const scaleIn = { 
    hidden: { opacity: 0, scale: 0.95 }, 
    visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, damping: 35, stiffness: 100, duration: 1.0 } } 
  };

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen bg-black overflow-hidden flex items-center py-12 sm:py-16 lg:py-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          
          {/* Content - Optimized for mobile */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8 max-w-4xl mx-auto lg:mx-0">
            {/* 1. Title - Optimized for mobile */}
            <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] sm:leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 leading-[1.1]">Starlink Installation Experts</span>
              <span className="block text-white leading-[1.1] mt-2 sm:mt-3">Serving Entire DMV Region</span>
            </motion.h1>

            {/* 2. Subtitle - Optimized for mobile */}
            <motion.p variants={fadeInUp} className="text-lg sm:text-xl lg:text-2xl text-neutral-300 leading-relaxed max-w-3xl mx-auto lg:mx-0 px-2 sm:px-0">
              From professional Starlink installation to mesh Wi-Fi optimization—we deliver 200+ Mbps speeds to every corner of your property. Same-week service. Guaranteed
            </motion.p>

            {/* 3. Quote Button & 4. Call Button - Mobile optimized */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center lg:justify-start px-2 sm:px-0 pt-2">
              {/* 3. Quote Button */}
              <Link href="#contact" className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto shadow-lg hover:shadow-blue-500/25">
                Get a Free Quote
              </Link>
              {/* 4. Call Button */}
              <a href="tel:+15719996915" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto backdrop-blur-sm">
                Call (571) 999-6915
              </a>
            </motion.div>

            {/* Trust indicators - Mobile optimized */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-4 justify-center lg:justify-start pt-4 sm:pt-6 px-2 sm:px-0">
              {trustIndicators.map((indicator) => (
                <TrustIndicator key={indicator.text} icon={indicator.icon} text={indicator.text} />
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image (Hidden on mobile) */}
          <motion.div className="relative hidden lg:block" variants={scaleIn}>
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-50" />
            <div className="relative bg-black rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden aspect-[4/3] mx-4 sm:mx-0">
              <Image
                src="/Untitled design (20).png"
                alt="Professional Starlink satellite internet installation equipment"
                fill
                priority={false} // Not priority since hidden on mobile
                sizes="(max-width: 1024px) 0vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;

