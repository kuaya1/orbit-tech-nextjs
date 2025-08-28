"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { ArrowRight, Star, Shield, Clock, Phone } from 'lucide-react';

const FinalCTASection = () => {
  const [sectionRef, sectionVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const floatVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-black overflow-hidden isolate"
      initial="hidden"
      animate={sectionVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="absolute inset-0 opacity-20" style={{
        background: 'radial-gradient(circle 1200px at 50% 0%, rgba(59, 130, 246, 0.08), transparent 60%)'
      }} />
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} 
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Content */}
        <motion.div
          ref={ctaRef}
          className="text-center mb-20"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-8"
            variants={itemVariants}
          >
            <span className="text-white">Ready to Transform</span>
            <br />
            <span className="text-white font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Your Connectivity?
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed mb-12"
            variants={itemVariants}
          >
            Join hundreds of satisfied customers across Virginia, Maryland, and DC who trust us for 
            professional Starlink installation. Same-day service, lifetime support, and guaranteed results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center justify-center bg-blue-500 text-white font-semibold px-10 py-5 rounded-2xl text-lg transition-all duration-300 hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <span className="relative flex items-center gap-3">
                Get Your Free Installation Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>

            <motion.a
              href="tel:+15719996915"
              className="group inline-flex items-center justify-center bg-white/5 border border-white/10 text-white font-semibold px-10 py-5 rounded-2xl text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5 mr-3" />
              Call: (571) 999-6915
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Trust Indicators Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          animate={ctaVisible ? "visible" : "hidden"}
        >
          <motion.div 
            className="group text-center p-8 rounded-3xl bg-gradient-to-b from-neutral-900/30 to-black/30 backdrop-blur-sm border border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-500"
            variants={itemVariants}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
              <Shield className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-light text-white mb-2">100% Licensed</h3>
            <p className="text-neutral-400 font-light">Fully insured with 90-day warranty on all installations</p>
          </motion.div>

          <motion.div 
            className="group text-center p-8 rounded-3xl bg-gradient-to-b from-neutral-900/30 to-black/30 backdrop-blur-sm border border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-500"
            variants={itemVariants}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
              <Star className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-light text-white mb-2">5-Star Service</h3>
            <p className="text-neutral-400 font-light">Rated by hundreds of satisfied customers across the DMV</p>
          </motion.div>

          <motion.div 
            className="group text-center p-8 rounded-3xl bg-gradient-to-b from-neutral-900/30 to-black/30 backdrop-blur-sm border border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-500"
            variants={itemVariants}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
              <Clock className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-light text-white mb-2">Same-Day Setup</h3>
            <p className="text-neutral-400 font-light">Emergency installations available with 24/7 support</p>
          </motion.div>
        </motion.div>

        {/* Final Statement */}
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-2 text-neutral-500 text-sm font-light"
            variants={floatVariants}
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-neutral-600" />
            <span>Trusted by Virginia, Maryland & DC Residents</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-neutral-600" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FinalCTASection;
