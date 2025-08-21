import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '@/types/testimonials';

// Star Rating Component
const StarIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <Star className={`${className} fill-yellow-400 text-yellow-400`} />
);

// Primary Testimonial Card (larger, featured)
interface PrimaryTestimonialCardProps {
  testimonial: Testimonial;
  isVisible: boolean;
}

export const PrimaryTestimonialCard: React.FC<PrimaryTestimonialCardProps> = ({
  testimonial,
  isVisible
}) => {
  return (
    <div className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-8 md:p-12 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700" />
      
      <div className="relative z-10">
        {/* Google Badge */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6" />
              ))}
            </div>
            <span className="text-neutral-400 text-sm font-medium">Google Review</span>
          </div>
          <div className="text-xs text-neutral-500 font-light">{testimonial.date}</div>
        </div>

        {/* Quote */}
        <blockquote className="text-xl md:text-2xl text-neutral-200 leading-relaxed mb-8 font-light group-hover:text-white transition-colors duration-300">
          "{testimonial.quote}"
        </blockquote>

        {/* Customer Info */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">
              {testimonial.customerName.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <div className="text-white font-semibold group-hover:text-blue-100 transition-colors duration-300">
              {testimonial.customerName}
            </div>
            <div className="text-neutral-400 text-sm font-light">
              {testimonial.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Secondary Testimonial Card (smaller, supporting)
interface SecondaryTestimonialCardProps {
  testimonial: Testimonial;
  isVisible: boolean;
  index: number;
}

export const SecondaryTestimonialCard: React.FC<SecondaryTestimonialCardProps> = ({
  testimonial,
  isVisible,
  index
}) => {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 p-6 transition-all duration-1000 hover:bg-neutral-800/70 hover:border-neutral-600 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
    style={{ transitionDelay: `${200 + index * 150}ms` }}>
      
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-4 h-4" />
            ))}
          </div>
          <div className="text-xs text-neutral-500 font-light">{testimonial.date}</div>
        </div>

        {/* Quote */}
        <blockquote className="text-neutral-300 leading-relaxed mb-6 group-hover:text-neutral-200 transition-colors duration-300">
          "{testimonial.quote}"
        </blockquote>

        {/* Customer Info */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {testimonial.customerName.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <div className="text-white font-medium text-sm group-hover:text-blue-100 transition-colors duration-300">
              {testimonial.customerName}
            </div>
            <div className="text-neutral-400 text-xs font-light">
              {testimonial.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
