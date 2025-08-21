'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const trustIndicators = [
    { icon: CheckCircle, text: "Professional Installation" },
    { icon: CheckCircle, text: "Same-Day Service Available" },
    { icon: CheckCircle, text: "100-Mile Service Radius" },
    { icon: CheckCircle, text: "Expert Technicians" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
        >
          {/* Left Column - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
              >
                <span className="text-white">Professional</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  Starlink
                </span>
                <br />
                <span className="text-white">Installation</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed"
              >
                Expert Starlink setup and installation services in <span className="text-blue-400 font-semibold">McLean, Virginia</span> and surrounding areas. Get connected to high-speed satellite internet with our professional installation.
              </motion.p>
            </div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <indicator.icon className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg">{indicator.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Pricing and CTA */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-baseline space-x-4">
                <span className="text-4xl md:text-5xl font-bold text-white">$599</span>
                <span className="text-xl text-gray-400">starting price</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="tel:(571) 999-6915"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-6 w-6 mr-3" />
                  Call (571) 999-6915
                </motion.a>
                
                <motion.a
                  href="mailto:info@theorbittech.com"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-bold text-lg rounded-xl hover:bg-blue-400 hover:text-gray-900 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-6 w-6 mr-3" />
                  Get Free Quote
                </motion.a>
              </div>
            </motion.div>

            {/* Business Info */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>McLean, VA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-400" />
                <span>Same-Day Service</span>
              </div>
            </motion.div>

            {/* Google Rating */}
            <motion.div variants={itemVariants} className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-white font-semibold">5.0</span>
                <span className="text-gray-300">Google Reviews</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full h-[600px] lg:h-[700px]">
              {/* Main satellite installation image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl overflow-hidden">
                <Image
                  src="/Starlink Dmv (22).png"
                  alt="Professional Starlink installation technician on roof"
                  fill
                  className="object-cover rounded-3xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent rounded-3xl"></div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Installations</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 left-8 bg-blue-600/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl text-white"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">Same Day</div>
                  <div className="text-sm opacity-90">Service Available</div>
                </div>
              </motion.div>

              {/* Signal waves animation */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 border-4 border-blue-400 rounded-full opacity-30 animate-ping"></div>
                  <div className="absolute inset-4 border-2 border-blue-300 rounded-full opacity-40 animate-ping" style={{animationDelay: '1s'}}></div>
                  <div className="absolute inset-8 border border-blue-200 rounded-full opacity-50 animate-ping" style={{animationDelay: '2s'}}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
}
