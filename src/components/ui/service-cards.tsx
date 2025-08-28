// app/components/ui/service-cards.tsx
import React from 'react';
import Link from 'next/link';

// Primary Service Card Component
interface PrimaryServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

export const PrimaryServiceCard: React.FC<PrimaryServiceCardProps> = ({ title, subtitle, description, features, icon }) => {
  return (
    <div className="group bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-3xl p-10 lg:p-12 relative overflow-hidden transition-all duration-500 hover:border-neutral-700">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8">
          {icon}
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Most Popular
          </span>
        </div>
        <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{title}</h3>
        <p className="text-blue-400 font-medium mb-4">{subtitle}</p>
        <p className="text-neutral-300 text-lg leading-relaxed mb-8">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-neutral-200 font-medium">{feature}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="#contact" aria-label="Schedule Professional Starlink Installation" className="inline-flex items-center justify-center bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20">
            Get Free Quote
          </Link>
          <a href="tel:+15719996915" aria-label="Call for Starlink Installation Quote" className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/10">
            Call (571) 999-6915
          </a>
        </div>
        <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-neutral-800">
          <div className="flex items-center text-sm text-neutral-400">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Licensed & Insured
          </div>
          <div className="flex items-center text-sm text-neutral-400">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            90-Day Warranty
          </div>
          <div className="flex items-center text-sm text-neutral-400">
             <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            Same-Day Service
          </div>
        </div>
      </div>
    </div>
  );
};

// Secondary Service Card Component
interface SecondaryServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

export const SecondaryServiceCard: React.FC<SecondaryServiceCardProps> = ({ title, description, features, icon }) => {
  return (
    <div className="group bg-black/50 border border-neutral-800 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:bg-neutral-900/50 hover:border-neutral-700">
      <div className="flex-grow">
        {icon}
        <h4 className="font-semibold text-white mb-3 text-xl tracking-tight">{title}</h4>
        <p className="text-neutral-400 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-4 h-4 text-neutral-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
              <span className="text-neutral-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        <Link href="#contact" aria-label={`Learn more about ${title}`} className="inline-flex items-center text-blue-400 font-medium text-sm group-hover:text-blue-300 transition-colors duration-300">
          Learn More
          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
};