// app/components/ui/testimonial-cards.tsx

import React from 'react';
import { Testimonial } from '@/types/testimonials';

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-yellow-400">
    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const PrimaryTestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <div className="group bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-3xl p-10 lg:p-12 relative overflow-hidden transition-all duration-500 hover:border-neutral-700">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">Verified Customer</span>
      </div>
              {/* Quote */}
        <blockquote className="text-xl md:text-2xl text-neutral-200 leading-relaxed mb-8 font-light group-hover:text-white transition-colors duration-300">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
          {testimonial.customerName.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h4 className="text-white font-semibold">{testimonial.customerName}</h4>
          <p className="text-neutral-400 text-sm">{testimonial.location}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 pt-8 mt-8 border-t border-neutral-800">
         <div className="flex items-center text-sm text-neutral-400"><svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Google Review</div>
         <div className="flex items-center text-sm text-neutral-400"><svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>{testimonial.date}</div>
      </div>
    </div>
  </div>
);

export const SecondaryTestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <div className="group bg-black/50 border border-neutral-800 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:bg-neutral-900/50 hover:border-neutral-700">
    <div className="flex-grow">
      <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
      <blockquote className="mb-6"><p className="text-neutral-300 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p></blockquote>
    </div>
    <div className="mt-auto pt-6 border-t border-neutral-800">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
           {testimonial.customerName.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h5 className="text-white text-sm font-semibold">{testimonial.customerName}</h5>
          <p className="text-neutral-500 text-xs">{testimonial.location}</p>
        </div>
      </div>
    </div>
  </div>
);