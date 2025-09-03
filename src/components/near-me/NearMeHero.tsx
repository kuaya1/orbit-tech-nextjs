"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ArrowRight, Navigation } from 'lucide-react';
import { useMobileDetection } from '@/hooks/use-mobile-detection';

interface LocationData {
  city: string;
  distance: string;
  estimatedTime: string;
}

const NearMeHero = () => {
  const [userLocation, setUserLocation] = useState<LocationData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { isMobile } = useMobileDetection();

  useEffect(() => {
    // Try to detect user location
    const detectLocation = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const { latitude, longitude } = position.coords;
              
              // Calculate distance from Reston, VA (38.9586, -77.3570)
              const distance = calculateDistance(latitude, longitude, 38.9586, -77.3570);
              
              // Get city name from coordinates (simplified)
              const city = await getCityFromCoords(latitude, longitude);
              
              setUserLocation({
                city: city || 'Your Area',
                distance: `${distance.toFixed(1)} miles away`,
                estimatedTime: `${Math.ceil(distance / 35)} hour response`
              });
              setIsLoading(false);
            },
            () => {
              // Fallback for denied location access
              setUserLocation({
                city: 'DMV Area',
                distance: '2.3 miles away',
                estimatedTime: '30 min response'
              });
              setIsLoading(false);
            }
          );
        } else {
          // Fallback for browsers without geolocation
          setUserLocation({
            city: 'DMV Area',
            distance: '2.3 miles away',
            estimatedTime: '30 min response'
          });
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Location detection error:', error);
        setUserLocation({
          city: 'DMV Area',
          distance: '2.3 miles away',
          estimatedTime: '30 min response'
        });
        setIsLoading(false);
      }
    };

    detectLocation();
  }, []);

  // Calculate distance between two coordinates
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Simplified city detection (in real app, use geocoding API)
  const getCityFromCoords = async (lat: number, lon: number): Promise<string> => {
    // Simplified mapping based on common DMV coordinates
    if (lat > 38.8 && lat < 39.2 && lon > -77.6 && lon < -76.8) {
      if (lat > 39.0) return 'Rockville';
      if (lat > 38.95) return 'Reston';
      if (lat > 38.9) return 'McLean';
      return 'Fairfax';
    }
    return 'Your Area';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="absolute inset-0 opacity-20" style={{
        background: 'radial-gradient(circle 1200px at 50% 50%, rgba(59, 130, 246, 0.1), transparent 70%)'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-8"
        >
          <MapPin className="w-4 h-4 text-blue-400" />
          {isLoading ? (
            <span className="text-blue-400 text-sm font-medium">Locating you...</span>
          ) : (
            <span className="text-blue-400 text-sm font-medium">
              📍 {userLocation?.distance} • {userLocation?.estimatedTime}
            </span>
          )}
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-white">Starlink Installation</span>
          <br />
          <span className="text-white font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Near {userLocation?.city || 'You'}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed mb-12"
        >
          Professional Starlink installation service located in Reston, VA. 
          Same-day installation available for your area with certified technicians and lifetime support.
        </motion.p>

        {/* Mobile-Optimized Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`flex ${isMobile ? 'flex-col' : 'flex-col sm:flex-row'} gap-4 justify-center items-center mb-16`}
        >
          {/* Primary CTA - Click to Call (Mobile Priority) */}
          <a
            href="tel:+15719996915"
            className={`group inline-flex items-center justify-center bg-blue-500 text-white font-semibold ${
              isMobile ? 'w-full py-5 text-xl' : 'px-8 py-4 text-lg'
            } rounded-xl transition-all duration-300 hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden`}
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <Phone className="w-5 h-5 mr-3" />
            <span className="relative">
              {isMobile ? 'Call Now: (571) 999-6915' : 'Call Now: (571) 999-6915'}
            </span>
          </a>

          {/* Secondary CTA - Get Directions */}
          <a
            href="https://maps.app.goo.gl/i3Gk33rmV9pxHBuA9"
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center justify-center bg-white/5 border border-white/10 text-white font-semibold ${
              isMobile ? 'w-full py-5 text-xl' : 'px-8 py-4 text-lg'
            } rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/20`}
          >
            <Navigation className="w-5 h-5 mr-3" />
            Get Directions
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Quick Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <Clock className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
            <h3 className="text-white font-semibold mb-2">Same-Day Service</h3>
            <p className="text-neutral-400 text-sm">Emergency installations available</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <MapPin className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
            <h3 className="text-white font-semibold mb-2">50-Mile Radius</h3>
            <p className="text-neutral-400 text-sm">Serving all DMV areas</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <Phone className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
            <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
            <p className="text-neutral-400 text-sm">Lifetime technical assistance</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NearMeHero;
