"use client";
import { useState, useEffect, useRef } from 'react';

export const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold, rootMargin: '0px 0px -50px 0px' });

    const currentElement = elementRef.current;
    if (currentElement) { 
      observer.observe(currentElement); 
    }

    return () => { 
      if (currentElement) { 
        observer.unobserve(currentElement); 
      } 
    };
  }, [threshold]);

  return [elementRef, isVisible] as const;
};
