// app/components/layout/footer.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import Logo from '@/components/ui/logo';
import { footerSections } from '@/lib/footer-data';

// A co-located sub-component for footer links, now using next/link
const FooterLink = ({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) => {
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <motion.li whileHover={{ x: 2 }}>
      <Link 
        href={href} 
        {...linkProps} 
        onClick={handleLinkClick}
        className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-light"
      >
        {children}
      </Link>
    </motion.li>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();
  const [containerRef, isVisible] = useScrollReveal(0.1);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const gradientX = useTransform(mouseX, [0, 1400], [0, 100]);
  const gradientY = useTransform(mouseY, [0, 600], [0, 100]);

  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } } 
  };
  const itemVariants = { 
    hidden: { opacity: 0, y: 20 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } 
  };

  return (
    <motion.footer
      ref={containerRef}
      className="relative overflow-hidden isolate"
      onMouseMove={handleMouseMove}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <motion.div 
        className="absolute inset-0 opacity-20" 
        style={{ 
          background: useTransform(
            [gradientX, gradientY], 
            ([x, y]) => `radial-gradient(circle 1000px at ${x}% ${y}%, rgba(59, 130, 246, 0.05), transparent 50%)`
          ) 
        }}
      />
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`, 
          backgroundSize: '100px 100px' 
        }}
      />
      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <div className="mb-6"><Logo /></div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm font-light">
              Your local expert for professional Starlink installation, based in Reston and serving the entire DMV region. We connect you to the future of internet with precision and care.
            </p>
          </motion.div>

          {/* Link Columns - Dynamically Generated */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="text-white font-medium text-sm mb-6 tracking-wide">{section.title}</h4>
              <ul className="space-y-3.5">
                {section.links.map((link) => (
                  <FooterLink key={link.href} href={link.href} external={link.external}>
                    {link.label}
                  </FooterLink>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div variants={itemVariants} className="mt-20 pt-8 border-t border-neutral-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-neutral-500 text-xs font-light tracking-wide">
              © {year} The Orbit Tech. Based in Reston, VA. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-neutral-500 hover:text-neutral-300 text-xs font-light transition-colors">Privacy</Link>
              <Link href="/terms" className="text-neutral-500 hover:text-neutral-300 text-xs font-light transition-colors">Terms</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
