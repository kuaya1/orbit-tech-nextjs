// app/components/layout/navbar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

import { navLinks } from '@/lib/nav-data';
import Logo from '@/components/ui/logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Effect for closing menu and managing body scroll
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Effect for scroll-based background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu whenever the path changes
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);   // removed isMenuOpen from dependencies

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
        e.preventDefault();
        const targetId = href.substring(2);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
    // For other links, Next.js's <Link> will handle navigation.
    // The path change will trigger the useEffect above to close the menu.
  };

  const navBgClass = isScrolled || isMenuOpen
    ? 'bg-black/50 backdrop-blur-lg border-b border-neutral-800'
    : 'bg-transparent';
  
  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-neutral-300 hover:text-white text-sm font-medium tracking-wide transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
            
            <div className="hidden lg:flex items-center space-x-3">
              <a href="tel:+15719996915" className="bg-white/10 border border-transparent text-white font-medium rounded-lg text-sm px-4 py-2.5 hover:bg-white/20 transition-all duration-300">
                (571) 999-6915
              </a>
              <Link href="/#contact" onClick={(e) => handleLinkClick(e, "/#contact")} className="bg-white text-black font-semibold rounded-lg text-sm px-6 py-2.5 hover:bg-neutral-200 transition-all duration-300 shadow-md">
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 rounded-lg text-white"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-xl border-b border-neutral-800 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <nav className="px-4 py-8 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block py-3 px-4 text-neutral-200 hover:text-white hover:bg-white/10 rounded-lg text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 px-4 space-y-3">
              <a href="tel:+15719996915" className="block w-full text-center bg-white/10 border border-transparent text-white font-medium rounded-lg text-base px-6 py-3">
                Call: (571) 999-6915
              </a>
               <Link href="/#contact" onClick={(e) => handleLinkClick(e, "/#contact")} className="block w-full text-center bg-white text-black font-semibold rounded-lg text-base px-6 py-3">
                Get Your Free Quote
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
