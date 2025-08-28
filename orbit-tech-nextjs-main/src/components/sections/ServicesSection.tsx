// app/components/sections/services.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { PrimaryServiceCard, SecondaryServiceCard } from '@/components/ui/service-cards';
import { primaryServiceData, secondaryServicesData } from '@/lib/services-data';

const Services = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [primaryRef, primaryVisible] = useScrollReveal();
  const [secondaryRef, secondaryVisible] = useScrollReveal();

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
      id="services"
      className="py-24 sm:py-32 bg-black relative overflow-hidden"
      initial="hidden"
      animate={headerVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      
      <div ref={headerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Your Complete
            <span className="block text-blue-400 mt-2">Starlink Solution</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            From site assessment to final speed test, we handle every detail. Licensed, insured, and committed to perfection in every installation.
          </p>
        </motion.div>

        <motion.div
          ref={primaryRef}
          className="mb-16"
          initial="hidden"
          animate={primaryVisible ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <PrimaryServiceCard {...primaryServiceData} />
        </motion.div>

        <motion.div
          ref={secondaryRef}
          initial="hidden"
          animate={secondaryVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="mb-12" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Complete Connectivity Solutions
            </h3>
            <p className="text-center text-neutral-400 max-w-2xl mx-auto">
              Enhance your Starlink installation with our premium add-on services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryServicesData.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
              >
                <SecondaryServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;