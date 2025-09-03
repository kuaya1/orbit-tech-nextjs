"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Star, MapPin, CheckCircle, Phone } from 'lucide-react';

const LocalizedContent = () => {
  const proximitySignals = [
    "Located within 2.3 miles of Reston Town Center",
    "Serving residents near Dulles Toll Road (Route 267)",
    "5 minutes from Wiehle-Reston East Metro Station", 
    "Adjacent to Fairfax County Parkway",
    "Within 10 miles of Dulles International Airport",
    "Near major cross-streets: Reston Pkwy & Sunset Hills Rd"
  ];

  const localBenefits = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Local DMV Expertise",
      description: "Understanding unique challenges of Northern Virginia installations including HOA requirements and local building codes."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Rapid Response Times",
      description: "Emergency same-day service available within 50-mile radius. Average response time under 2 hours for urgent calls."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Licensed in VA, MD, DC",
      description: "Fully licensed and insured across all DMV jurisdictions with local permits and contractor certifications."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Community Trust",
      description: "Hundreds of local installations with verified reviews from your neighbors across Fairfax, Loudoun, and Montgomery counties."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Proximity Signals Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-6">
              Your <span className="font-semibold text-blue-400">Local</span> Starlink Experts
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Based in the heart of Northern Virginia, we're your neighborhood Starlink installation specialists 
              with deep local knowledge and rapid response capabilities.
            </p>
          </div>

          <div className="bg-gradient-to-r from-neutral-900/50 to-black/50 border border-neutral-800 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Conveniently Located Near You
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {proximitySignals.map((signal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-neutral-300">{signal}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-neutral-400 mb-6">
                <strong className="text-white">Business Address:</strong> 1760 Reston Pkwy, Reston, VA 20190
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://maps.app.goo.gl/i3Gk33rmV9pxHBuA9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Driving Directions
                </a>
                <a
                  href="tel:+15719996915"
                  className="inline-flex items-center justify-center bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (571) 999-6915
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Local Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {localBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-blue-500/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              </div>
              <p className="text-neutral-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Distance-Based Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-white mb-4">
              <span className="font-semibold text-blue-400">Distance-Based</span> Service Guarantee
            </h3>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              The closer you are to our Reston location, the faster we can respond. 
              Here's what you can expect based on your distance from us:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-black/30 rounded-2xl border border-neutral-800">
              <div className="text-3xl font-bold text-blue-400 mb-2">0-15 miles</div>
              <div className="text-lg font-semibold text-white mb-3">Premium Zone</div>
              <ul className="text-sm text-neutral-400 space-y-2">
                <li>• Same-day installation</li>
                <li>• 30-minute emergency response</li>
                <li>• Free site survey</li>
                <li>• Priority scheduling</li>
              </ul>
            </div>

            <div className="text-center p-6 bg-black/30 rounded-2xl border border-neutral-800">
              <div className="text-3xl font-bold text-blue-400 mb-2">15-35 miles</div>
              <div className="text-lg font-semibold text-white mb-3">Standard Zone</div>
              <ul className="text-sm text-neutral-400 space-y-2">
                <li>• Next-day installation</li>
                <li>• 1-hour emergency response</li>
                <li>• Scheduled site survey</li>
                <li>• Regular scheduling</li>
              </ul>
            </div>

            <div className="text-center p-6 bg-black/30 rounded-2xl border border-neutral-800">
              <div className="text-3xl font-bold text-blue-400 mb-2">35-50 miles</div>
              <div className="text-lg font-semibold text-white mb-3">Extended Zone</div>
              <ul className="text-sm text-neutral-400 space-y-2">
                <li>• 2-3 day installation</li>
                <li>• 2-hour emergency response</li>
                <li>• Remote site consultation</li>
                <li>• Flexible scheduling</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-neutral-400 mb-6">
              <strong className="text-white">Note:</strong> All installations include lifetime technical support regardless of distance.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-blue-600 transition-colors"
            >
              Check Your Service Zone
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocalizedContent;
