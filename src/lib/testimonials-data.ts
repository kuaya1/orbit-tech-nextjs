// app/lib/testimonials-data.ts

import { Testimonial } from '@/types/testimonials';

export const primaryTestimonial: Testimonial = {
  id: 'google-review-peter-baughan',
  quote: "We called Orbit to ask about getting connectivity - they were out the next day... Eric is an expert! Goes the extra mile - and at a very reasonable price. Highly recommended!",
  customerName: "Peter Baughan",
  location: "Reston, VA • Local Guide",
  date: "August 2025"
};

export const secondaryTestimonials: Testimonial[] = [
  {
    id: 'google-review-dave-wiseman',
    quote: "Fantastic job with a very challenging roof and receiver location. Eric provided options and worked with us to get the receiver and hiding associated wires and router in the perfect place for us.",
    customerName: "Dave Wiseman",
    location: "Local Guide • 27 reviews",
    date: "July 2025"
  },
  {
    id: 'google-review-courtney-g',
    quote: "Eric went above and beyond to provide a great installation on my (difficult) roof in Annapolis. Exceeded my expectations and was very professional through the whole process.",
    customerName: "Courtney G",
    location: "Annapolis, MD",
    date: "June 2025"
  }
];