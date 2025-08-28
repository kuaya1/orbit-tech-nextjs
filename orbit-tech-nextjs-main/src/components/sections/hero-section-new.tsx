// app/components/sections/hero-section.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TrustIndicator } from '@/components/ui/trust-elements';
import { trustIndicators } from '@/lib/hero-data';

const HeroSection = () => {
  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } 
  };
  const fadeInUp = { 
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0, transition: { damping: 30, stiffness: 100 } } 
  };
  const scaleIn = { 
    hidden: { opacity: 0, scale: 0.95 }, 
    visible: { opacity: 1, scale: 1, transition: { damping: 35, stiffness: 100, duration: 1.0 } } 
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen bg-black overflow-hidden flex items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 leading-tight">Certified Starlink Installers</span>
              <span className="block text-white leading-tight mt-2">Serving Reston & The DMV</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From professional installation to whole-home Wi-Fi optimization—we ensure every corner of your property gets blazing-fast internet.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="#contact" 
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="inline-flex items-center justify-center bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-transform hover:scale-[1.02]"
              >
                Get a Free Quote
              </Link>
              <a href="tel:+15719996915" className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-transform hover:scale-[1.02]">
                Call (571) 999-6915
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-x-6 gap-y-4 justify-center lg:justify-start pt-4">
              {trustIndicators.map((indicator) => (
                <TrustIndicator key={indicator.text} icon={indicator.icon} text={indicator.text} />
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div className="relative" variants={scaleIn}>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl blur-3xl opacity-50" />
            <div className="relative bg-black rounded-2xl border border-white/10 overflow-hidden aspect-[4/3]">
              <Image
                src="/Untitled design (20).png"
                alt="Professional Starlink satellite internet installation equipment"
                fill
                priority={true} // Crucial for LCP performance
                sizes="(max-width: 1024px) 100vw, 50vw"
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
