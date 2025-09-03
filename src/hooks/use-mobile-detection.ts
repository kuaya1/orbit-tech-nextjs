"use client";
import { useState, useEffect } from 'react';

export const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const userAgent = navigator.userAgent;
      
      // Check screen width and user agent
      const mobileWidth = width <= 768;
      const mobileAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      
      setIsMobile(mobileWidth || mobileAgent);
      setIsLoading(false);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return { isMobile, isLoading };
};
