"use client";

import React, { useState, useRef } from 'react';
import Script from 'next/script';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Phone, Mail, MapPin, Loader2, CheckCircle } from 'lucide-react';

import { FormData, FormErrors } from '@/types/contact';
import { trustIndicators } from '@/lib/contact-data';

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', address: '', serviceType: 'installation', message: ''
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isEmailServiceReady, setIsEmailServiceReady] = useState(false);
  const emailjsRef = useRef<{
    init: (config: { publicKey: string }) => void;
    send: (serviceId: string, templateId: string, params: Record<string, unknown>) => Promise<{ status: number }>;
  } | null>(null);

  // Mouse tracking for subtle background effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };
  const gradientX = useTransform(mouseX, [0, 1000], [0, 100]);
  const gradientY = useTransform(mouseY, [0, 600], [0, 100]);

  // EmailJS Initialization via next/script's onLoad
  const handleEmailJsLoad = () => {
    if ((window as unknown as Record<string, unknown>).emailjs) {
      emailjsRef.current = (window as unknown as Record<string, unknown>).emailjs as {
        init: (config: { publicKey: string }) => void;
        send: (serviceId: string, templateId: string, params: Record<string, unknown>) => Promise<{ status: number }>;
      };
      try {
        emailjsRef.current?.init({ publicKey: "cZxddkmZep5G_h86H" });
        setIsEmailServiceReady(true);
      } catch (error) {
        console.error('EmailJS initialization failed:', error);
      }
    }
  };

  // Form validation and submission logic
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (formData.phone.length < 10) {
      errors.phone = 'Please enter a valid phone number';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || !isEmailServiceReady || !emailjsRef.current) {
      if (!isEmailServiceReady) setFormStatus('error');
      return;
    }
    setFormStatus('loading');
    try {
      const templateParams = { ...formData, time: new Date().toLocaleString(), source: 'Quote Form' };
      const response = await emailjsRef.current!.send("service_a1n7ph9", "template_si8q63h", templateParams);

      if (response.status === 200) {
        if ((window as unknown as Record<string, unknown>).gtag) {
          ((window as unknown as Record<string, unknown>).gtag as (
            command: string,
            action: string,
            params: Record<string, unknown>
          ) => void)('event', 'conversion', {
            'send_to': 'AW-17369280864/afTpCKOIgYkbEODiqNpA',
            'event_category': 'Contact',
            'event_label': 'Contact Form Submission'
          });
        }
        setFormStatus('success');
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', address: '', serviceType: 'installation', message: '' });
          setFormStatus('idle');
        }, 5000);
      } else { 
        throw new Error('Failed to send'); 
      }
    } catch (error) {
      console.error('Email send failed:', error);
      setFormStatus('error');
    }
  };

  // Framer Motion variants
  const containerVariants = { 
    hidden: { opacity: 0 }, 
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } } 
  };
  const itemVariants = { 
    hidden: { opacity: 0, y: 30 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } 
  };

  return (
    <section 
      id="contact" 
      onMouseMove={handleMouseMove} 
      className="relative py-32 lg:py-40 overflow-hidden isolate" 
      aria-labelledby="contact-heading"
    >
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        strategy="afterInteractive"
        onLoad={handleEmailJsLoad}
      />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <motion.div 
        className="absolute inset-0 opacity-20" 
        style={{ 
          background: useTransform(
            [gradientX, gradientY], 
            ([x, y]) => `radial-gradient(circle 800px at ${x}% ${y}%, rgba(59, 130, 246, 0.06), transparent 60%)`
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

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.1 }} 
        variants={containerVariants} 
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Header */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <h2 id="contact-heading" className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-6">
            <span className="text-white">Get your free,</span><br />
            <span className="text-white font-semibold">no-obligation quote.</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light">
            Professional Starlink installation by experts based here in Reston, Virginia. We&apos;ll respond within one business day.
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16" variants={itemVariants}>
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 mb-3">
                <indicator.icon className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-2xl font-light text-white">{indicator.value}</div>
              <div className="text-sm text-neutral-500 mt-1 font-light">{indicator.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Form Container */}
        <motion.div className="relative max-w-3xl mx-auto" variants={itemVariants}>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 blur-xl -z-10" />
          <div className="relative bg-gradient-to-b from-neutral-900/30 to-black/30 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-neutral-300 mb-2">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-black/70 transition-all ${
                      formErrors.name ? 'border-red-500/50' : 'border-neutral-800'
                    }`} 
                    placeholder="John Smith" 
                    required 
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-xs text-red-400 font-light">{formErrors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-light text-neutral-300 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-black/70 transition-all ${
                      formErrors.email ? 'border-red-500/50' : 'border-neutral-800'
                    }`} 
                    placeholder="john@example.com" 
                    required 
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-xs text-red-400 font-light">{formErrors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone and Service Type Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-light text-neutral-300 mb-2">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-black/70 transition-all ${
                      formErrors.phone ? 'border-red-500/50' : 'border-neutral-800'
                    }`} 
                    placeholder="(571) 999-6915" 
                    required 
                  />
                  {formErrors.phone && (
                    <p className="mt-1 text-xs text-red-400 font-light">{formErrors.phone}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-light text-neutral-300 mb-2">
                    Service Needed
                  </label>
                  <select 
                    id="serviceType" 
                    name="serviceType" 
                    value={formData.serviceType} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-xl text-white focus:outline-none focus:border-blue-500/50 focus:bg-black/70 transition-all"
                  >
                    <option value="installation">Starlink Installation</option>
                    <option value="wifi-optimization">Wi-Fi Optimization</option>
                    <option value="business-solution">Business Solution</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Address Field */}
              <div>
                <label htmlFor="address" className="block text-sm font-light text-neutral-300 mb-2">
                  Installation Address
                </label>
                <input 
                  type="text" 
                  id="address" 
                  name="address" 
                  value={formData.address} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-black/70 transition-all" 
                  placeholder="123 Main St, McLean, VA 22102" 
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-light text-neutral-300 mb-2">
                  Additional Details
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-black/70 transition-all resize-none" 
                  placeholder="Tell us about your installation needs, property details, or any questions you have..."
                />
              </div>
              
              {/* Submit Button */}
              <motion.button 
                type="submit" 
                disabled={formStatus === 'loading' || !isEmailServiceReady} 
                className="w-full bg-blue-500 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:bg-blue-600 disabled:bg-neutral-800 disabled:cursor-not-allowed relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span className="relative flex items-center justify-center gap-2">
                  {formStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Sent Successfully!</span>
                    </>
                  ) : formStatus === 'error' ? (
                    'Error - Try Again'
                  ) : (
                    'Get My Free Quote'
                  )}
                </span>
              </motion.button>

              {/* Status Messages */}
              {formStatus === 'success' && (
                <motion.div 
                  className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-green-400 text-sm font-light">
                    Thank you! We&apos;ve received your request and will be in touch soon.
                  </p>
                </motion.div>
              )}
              
              {formStatus === 'error' && (
                <motion.div 
                  className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-red-400 text-sm font-light">
                    Something went wrong. Please try again or call us directly.
                  </p>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
        
        {/* Direct Contact Info */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <p className="text-sm text-neutral-500 font-light mb-6">Prefer to talk directly?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <a 
              href="tel:+15719996915" 
              className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
            >
              <Phone className="w-5 h-5 text-blue-500" />
              <span>(571) 999-6915</span>
            </a>
            <a 
              href="mailto:contact@theorbittech.com" 
              className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
            >
              <Mail className="w-5 h-5 text-blue-500" />
              <span>contact@theorbittech.com</span>
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-6 text-neutral-500 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Serving Virginia, Maryland, & Washington D.C.</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
