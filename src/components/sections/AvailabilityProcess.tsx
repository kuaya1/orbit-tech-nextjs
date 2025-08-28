"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CheckCircle, XCircle, Loader2, Info, History, Target } from 'lucide-react';
import { serviceableZips } from '@/lib/serviceableZips';

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, parameters?: Record<string, unknown>) => void;
  }
}

const AvailabilityProcess = () => {
  // Scroll animation state
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  // Background image state for responsive behavior
  const [backgroundImage, setBackgroundImage] = useState("url('/Untitled design (31) desktop.PNG')");
  
  // Availability check state
  const [zipCode, setZipCode] = useState('');
  const [serviceStatus, setServiceStatus] = useState<null | boolean | 'loading'>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showRecent, setShowRecent] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  // Input references for better focus management
  const inputRef = useRef<HTMLInputElement>(null);
  const blurTimeoutRef = useRef<number | null>(null);

  // Update background image based on screen size
  useEffect(() => {
    const updateBackgroundImage = () => {
      const isMobile = window.innerWidth <= 768;
      setBackgroundImage(isMobile 
        ? "url('/Untitled design (31) mobile.PNG')" 
        : "url('/Untitled design (31) desktop.PNG')"
      );
    };
    updateBackgroundImage();
    window.addEventListener('resize', updateBackgroundImage);
    return () => window.removeEventListener('resize', updateBackgroundImage);
  }, []);

  // Parallax effect for background
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let rafId: number;
    const update = () => {
      rafId = 0;
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
      
      const y = (progress - 0.5) * 120;
      const scale = 1.06 - progress * 0.04;

      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`;
      }
      if (overlayRef.current) {
        overlayRef.current.style.transform = `translate3d(0, ${(y * 0.4).toFixed(2)}px, 0)`;
      }
    };

    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    update();

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // Load recent searches from localStorage
  useEffect(() => {
    try {
      const savedSearches = localStorage.getItem('recentZipSearchesDMV');
      if (savedSearches) {
        const parsed = JSON.parse(savedSearches);
        if (Array.isArray(parsed)) {
          setRecentSearches(parsed.slice(0, 5));
        }
      }
    } catch (error) {
      console.error("Failed to parse recent searches:", error);
      localStorage.removeItem('recentZipSearchesDMV');
    }
  }, []);

  // Save a zip code to recent searches
  const saveToRecent = useCallback((zip: string) => {
    if (!zip || zip.length !== 5) return;
    setRecentSearches(prev => {
      const updated = [zip, ...prev.filter(item => item !== zip)].slice(0, 5);
      localStorage.setItem('recentZipSearchesDMV', JSON.stringify(updated));
      return updated;
    });
  }, []);

  // Check service area
  const checkServiceArea = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.length !== 5) {
      setErrorMessage('Please enter a valid 5-digit ZIP code');
      return;
    }
    setErrorMessage('');
    setServiceStatus('loading');
    setShowRecent(false);
    
    setTimeout(() => {
      const isServiceable = serviceableZips.has(zipCode);
      setServiceStatus(isServiceable);
      saveToRecent(zipCode);
      setShowResults(true);
      
      // Track Google Analytics conversion
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17369280864/afTpCKOIgYkbEODiqNpA',
          'event_category': 'Availability',
          'event_label': `ZIP Check - ${isServiceable ? 'Available' : 'Unavailable'}`,
          'value': zipCode
        });
      }
    }, 800);
  }, [zipCode, saveToRecent]);

  // Input Handlers
  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 5);
    setZipCode(value);
    if (errorMessage) setErrorMessage('');
    if (showResults) setShowResults(false);
    if (!showRecent) setShowRecent(true);
  };
  
  const handleFocus = () => {
    if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current);
    setShowRecent(true);
  };
  
  const handleBlur = () => {
    blurTimeoutRef.current = window.setTimeout(() => setShowRecent(false), 150);
  };
  
  const selectRecentZip = (zip: string) => {
    if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current);
    setZipCode(zip);
    setShowRecent(false);
    inputRef.current?.focus();
  };
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="availability-process"
      className="pt-32 pb-20 md:pt-40 md:pb-32 bg-red-500 relative overflow-hidden flex items-center justify-center min-h-[80vh]"
    >
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage,
          transform: 'scale(1.06)',
          willChange: 'transform',
        }}
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)',
          willChange: 'transform',
        }}
      />
      
      {/* Keyframe animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 transition-all duration-1000 delay-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Check Service Availability
            </h2>
            <p className="text-xl text-gray-300">
              Enter your ZIP code to see if we service your area
            </p>
          </div>

          <form onSubmit={checkServiceArea} className="w-full animate-fadeInUp" style={{animationDelay: '200ms'}}>
            <div className="flex flex-col sm:flex-row items-end gap-3">
              <div className="w-full sm:flex-grow">
                <label htmlFor="zipInput" className="block text-sm font-semibold text-white mb-2">Service Address</label>
                <div className="relative">
                  <input
                    id="zipInput"
                    ref={inputRef}
                    type="text"
                    value={zipCode}
                    onChange={handleZipChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Enter ZIP code"
                    maxLength={5}
                    inputMode="numeric"
                    pattern="\d{5}"
                    className="w-full px-4 py-3 pr-12 rounded-md bg-black/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                    aria-label="Enter your ZIP code"
                    required
                  />
                  <Target className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 pointer-events-none"/>
                  
                  {showRecent && recentSearches.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-black/70 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl z-20 overflow-hidden animate-fadeInUp">
                      <div className="p-2 text-xs text-white/60 border-b border-white/10 font-bold tracking-wide">
                        Recent searches
                      </div>
                      {recentSearches.map((zip) => (
                        <button
                          key={zip}
                          type="button"
                          onClick={() => selectRecentZip(zip)}
                          onMouseDown={(e) => e.preventDefault()}
                          className="w-full text-left px-3 py-2.5 hover:bg-white/10 text-white transition-colors duration-200 flex items-center gap-2"
                        >
                          <History className="h-4 w-4 text-white/60"/>
                          <span className="font-medium tracking-tight">{zip}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full sm:w-auto">
                <button
                  type="submit"
                  disabled={serviceStatus === 'loading' || zipCode.length !== 5}
                  className="w-full px-8 py-3 rounded-md bg-white text-black font-bold text-base hover:bg-gray-200 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  {serviceStatus === 'loading' ? (
                    <Loader2 className="h-5 w-5 animate-spin mx-auto" />
                  ) : 'CHECK'}
                </button>
              </div>
            </div>
          </form>

          <div className="mt-6 min-h-[160px]">
            {errorMessage && (
              <div className="mt-3 text-red-300 text-sm flex items-center justify-center gap-2 font-medium" role="alert">
                <Info className="h-4 w-4 flex-shrink-0" />
                {errorMessage}
              </div>
            )}
            
            {showResults && serviceStatus !== 'loading' && serviceStatus !== null && (
              <div className={`rounded-xl p-6 backdrop-blur-sm border transition-all duration-700 animate-fadeInUp bg-black/20 ${
                serviceStatus ? 'border-green-500/50' : 'border-red-500/50'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm border ${
                    serviceStatus ? 'bg-green-500/20 border-green-500/30' : 'bg-red-500/20 border-red-500/30'
                  }`}>
                    {serviceStatus ? <CheckCircle className="h-5 w-5 text-green-400" /> : <XCircle className="h-5 w-5 text-red-400" />}
                  </div>
                  <div className="flex-grow text-left">
                    <h4 className="text-lg font-bold text-white mb-1">
                      {serviceStatus ? 'Service Available!' : 'Not Available Yet'}
                    </h4>
                    <p className="text-white/80 leading-relaxed">
                      {serviceStatus
                        ? `Great! We provide professional Starlink installation services in ${zipCode}. You can get high-speed satellite internet with same-day installation.` 
                        : `We're not currently servicing ${zipCode}, but we're expanding rapidly. Join our waitlist to be notified when service becomes available.`}
                    </p>
                    {serviceStatus && (
                      <div className="mt-4 flex flex-col sm:flex-row gap-3">
                        <a
                          href="tel:(571) 999-6915"
                          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Call (571) 999-6915
                        </a>
                        <a
                          href="mailto:info@theorbittech.com"
                          className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                        >
                          Get Free Quote
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <p className="text-white/60 text-sm leading-relaxed font-medium mt-8 text-center">
            Currently serving the <span className="text-white font-semibold">Washington DC Metro area</span> and surrounding regions within 100 miles of McLean, VA.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityProcess;
