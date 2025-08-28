// app/components/sections/featured-jobs-section.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { installationJobs } from '@/lib/jobs-data';
import JobCard from '@/components/ui/job-card';

const FeaturedJobsSection = () => {
  const [containerRef, isVisible] = useScrollReveal(0.1);

  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } } 
  };
  const itemVariants = { 
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } 
  };

  return (
    <motion.section
      id="featured-jobs"
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-black overflow-hidden"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Featured Jobs
          </h2>
          <p className="mt-6 text-lg text-neutral-300">
            Real installations, real results. See how we transform connectivity for families and businesses across Virginia, Maryland, and DC.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {installationJobs.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedJobsSection;
