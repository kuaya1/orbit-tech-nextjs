// app/components/ui/job-card.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, CheckCircle } from 'lucide-react';
import { InstallationJob } from '@/types/jobs';

interface JobCardProps {
  job: InstallationJob;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/portfolio/${job.id}`} passHref legacyBehavior>
      <motion.a
        className="group relative block h-[480px] rounded-2xl overflow-hidden cursor-pointer bg-neutral-900 border border-neutral-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -5, transition: { duration: 0.3 } }}
        aria-label={`View case study for installation in ${job.location}`}
      >
        <Image
          src={job.imageUrl}
          alt={`Starlink installation in ${job.location}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        
        <div className="relative h-full flex flex-col justify-end p-6 text-white">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">{job.location}</h3>
            <p className="text-xs text-neutral-400 font-light">{job.region}</p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-3 pt-4 border-t border-neutral-700">
               <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /><p className="text-sm font-medium">{job.solution}</p></div>
               <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-blue-400" /><p className="text-sm font-medium">{job.speedAchieved} Achieved Speed</p></div>
            </div>
          </motion.div>
        </div>
      </motion.a>
    </Link>
  );
};

export default JobCard;
