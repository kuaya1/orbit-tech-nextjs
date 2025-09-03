"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ServiceAreas = () => {
  const serviceAreas = [
    {
      county: "Fairfax County, VA",
      cities: ["Reston", "McLean", "Vienna", "Herndon", "Great Falls", "Oakton"],
      href: "/locations/fairfax-county-va",
      distance: "2-15 miles",
      responseTime: "30 min"
    },
    {
      county: "Loudoun County, VA", 
      cities: ["Ashburn", "Leesburg", "Sterling", "Purcellville", "Round Hill"],
      href: "/locations/loudoun-county-va",
      distance: "15-25 miles",
      responseTime: "45 min"
    },
    {
      county: "Arlington County, VA",
      cities: ["Arlington", "Crystal City", "Ballston", "Clarendon"],
      href: "/locations/arlington-county-va", 
      distance: "20-25 miles",
      responseTime: "45 min"
    },
    {
      county: "Montgomery County, MD",
      cities: ["Rockville", "Bethesda", "Silver Spring", "Gaithersburg", "Potomac"],
      href: "/locations/montgomery-county-md",
      distance: "15-30 miles", 
      responseTime: "1 hour"
    },
    {
      county: "Prince William County, VA",
      cities: ["Manassas", "Woodbridge", "Gainesville", "Haymarket"],
      href: "/locations/prince-william-county-va",
      distance: "25-40 miles",
      responseTime: "1 hour"
    },
    {
      county: "Prince George's County, MD",
      cities: ["College Park", "Bowie", "Greenbelt", "Hyattsville"],
      href: "/locations/prince-georges-county-md",
      distance: "25-35 miles",
      responseTime: "1 hour"
    }
  ];

  return (
    <section id="service-areas" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-6">
            Service Areas <span className="font-semibold text-blue-400">Near You</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Professional Starlink installation serving all major DMV areas within 50 miles of our Reston location. 
            Same-day service available for most locations.
          </p>
        </motion.div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area.county}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={area.href}>
                <div className="bg-black/40 border border-neutral-800 rounded-2xl p-6 hover:border-blue-500/30 hover:bg-black/60 transition-all duration-300 h-full">
                  {/* County Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {area.county}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </div>

                  {/* Distance & Response Time */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-neutral-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{area.distance}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{area.responseTime}</span>
                    </div>
                  </div>

                  {/* Cities List */}
                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-neutral-500 mb-2">Cities we serve:</p>
                    <div className="flex flex-wrap gap-2">
                      {area.cities.map((city) => (
                        <span
                          key={city}
                          className="text-xs bg-neutral-800/50 text-neutral-300 px-2 py-1 rounded-md group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-sm text-blue-400 group-hover:text-blue-300 font-medium">
                    View installation details →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Central Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-3xl p-8 lg:p-12 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-light text-white mb-4">
              Centrally Located in <span className="font-semibold text-blue-400">Reston, VA</span>
            </h3>
            <p className="text-lg text-neutral-300 mb-8">
              Our strategic location at 1760 Reston Pkwy allows us to provide rapid response times 
              across the entire DMV region. Within 50 miles of major landmarks including:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-semibold text-white">10 min</div>
                <div className="text-sm text-neutral-400">to Dulles Airport</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-white">15 min</div>
                <div className="text-sm text-neutral-400">to Tysons Corner</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-white">25 min</div>
                <div className="text-sm text-neutral-400">to Washington DC</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-white">30 min</div>
                <div className="text-sm text-neutral-400">to Baltimore</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15719996915"
                className="inline-flex items-center justify-center bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call for Service Area Availability
              </a>
              <a
                href="https://maps.app.goo.gl/i3Gk33rmV9pxHBuA9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions to Our Location
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreas;
