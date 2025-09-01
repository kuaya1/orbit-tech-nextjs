'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Star, Shield, Clock } from 'lucide-react'

interface StatisticProps {
  number: string
  label: string
  icon: React.ReactNode
}

const Statistic = ({ number, label, icon }: StatisticProps) => (
  <div className="text-center">
    <div className="flex justify-center mb-3">
      {icon}
    </div>
    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{number}</div>
    <div className="text-sm text-neutral-400">{label}</div>
  </div>
)

export default function AuthorityContentHub() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-neutral-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/5 via-transparent to-cyan-950/5" />
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        
        {/* Authority Statistics */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="speakable-content text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              Why DMV Residents Choose
              <span className="block text-blue-400 mt-2">The Orbit Tech</span>
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Proven expertise with over 500 successful installations across DC, Maryland, and Virginia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <Statistic 
              number="500+" 
              label="DMV Installations Completed" 
              icon={<CheckCircle className="w-8 h-8 text-green-500" />}
            />
            <Statistic 
              number="95%" 
              label="Customer Satisfaction Rate" 
              icon={<Star className="w-8 h-8 text-yellow-500" />}
            />
            <Statistic 
              number="98%" 
              label="Obstruction Success Rate" 
              icon={<Shield className="w-8 h-8 text-blue-500" />}
            />
            <Statistic 
              number="Same Day" 
              label="Installation Available" 
              icon={<Clock className="w-8 h-8 text-purple-500" />}
            />
          </div>
        </motion.div>

        {/* GEO-Optimized Content Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Installation Expertise */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-neutral-900/50 to-black/50 border border-neutral-800 rounded-3xl p-8">
            <h3 className="speakable-content text-2xl font-bold text-white mb-6">
              How do you handle challenging Starlink installations in the DMV?
            </h3>
            <div className="prose prose-invert max-w-none">
              <p className="speakable-content text-neutral-300 leading-relaxed mb-4">
                Our certified technicians conduct comprehensive site surveys using specialized obstruction detection tools. 
                We assess tree coverage and roof angles to identify optimal mounting locations for maximum performance.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-300"><strong className="text-white">Elevated pole mounts:</strong> Raising dishes 10-20 feet above obstacles</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-300"><strong className="text-white">Remote mounting:</strong> Positioning up to 150 feet from the home</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-300"><strong className="text-white">Custom roof mounts:</strong> Strategic placement on roof peaks</p>
                </div>
              </div>
              <p className="speakable-content text-neutral-300 leading-relaxed mt-4">
                <strong className="text-white">Performance guarantee:</strong> Our installations in wooded areas of Fairfax County 
                consistently achieve 180-250 Mbps speeds with less than 2% obstruction, backed by our 90-day performance guarantee.
              </p>
            </div>
          </motion.div>

          {/* Local Market Authority */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-neutral-900/50 to-black/50 border border-neutral-800 rounded-3xl p-8">
            <h3 className="speakable-content text-2xl font-bold text-white mb-6">
              What makes you the best Starlink installer in Northern Virginia?
            </h3>
            <div className="prose prose-invert max-w-none">
              <p className="speakable-content text-neutral-300 leading-relaxed mb-4">
                The Orbit Tech is the leading certified Starlink installer serving the DMV region with unmatched local expertise 
                and technical knowledge of Northern Virginia's unique installation challenges.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-3 p-3 bg-black/30 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-neutral-300"><strong className="text-white">Licensed & Insured:</strong> VA# 2705165655</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-black/30 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-neutral-300"><strong className="text-white">SpaceX Certified:</strong> Official installation partner</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-black/30 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-neutral-300"><strong className="text-white">Local Expertise:</strong> 500+ DMV installations</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-black/30 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-neutral-300"><strong className="text-white">Performance Guarantee:</strong> 90-day warranty</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Expertise Block */}
        <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-950/20 to-purple-950/20 border border-blue-500/20 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="speakable-content text-3xl font-bold text-white mb-6">
                Professional Installation Process for Maximum Performance
              </h3>
              <p className="speakable-content text-neutral-300 leading-relaxed mb-8">
                Our systematic approach ensures every Starlink installation achieves optimal performance. 
                Average speed improvement: <strong className="text-white">15x faster than traditional satellite internet</strong>.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Comprehensive Site Survey</h4>
                    <p className="text-neutral-400">Professional obstruction analysis using specialized tools and satellite mapping</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Optimal Mounting Solution</h4>
                    <p className="text-neutral-400">Custom mounting selection based on property requirements and local building codes</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Professional Installation</h4>
                    <p className="text-neutral-400">Weatherproof mounting, cable routing, and network configuration by certified technicians</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Speed Optimization & Testing</h4>
                    <p className="text-neutral-400">Performance verification and optimization to ensure maximum speed achievement</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-black/50 rounded-2xl p-8 border border-neutral-700">
                <h4 className="text-white font-semibold mb-4 text-center">Typical DMV Performance Results</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-300">Download Speed:</span>
                    <span className="text-green-400 font-bold">180-250 Mbps</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-300">Upload Speed:</span>
                    <span className="text-green-400 font-bold">15-25 Mbps</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-300">Latency:</span>
                    <span className="text-green-400 font-bold">25-35ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-300">Obstruction Rate:</span>
                    <span className="text-green-400 font-bold">&lt; 2%</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                  <p className="text-green-400 text-sm font-medium text-center">
                    ⭐ 95% customer satisfaction across 500+ installations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Service Areas with Specific Expertise */}
        <motion.div variants={itemVariants} className="mt-20">
          <div className="text-center mb-12">
            <h3 className="speakable-content text-3xl font-bold text-white mb-4">
              Where do you install Starlink in the DMV region?
            </h3>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Professional Starlink installation throughout Northern Virginia, Maryland suburbs, and Washington DC metro area.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-neutral-900/50 to-black/50 border border-neutral-800 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-white mb-4">Northern Virginia</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Fairfax County (Reston, Herndon, Vienna)</li>
                <li>• Loudoun County (Ashburn, Leesburg, Sterling)</li>
                <li>• Prince William County (Woodbridge, Manassas)</li>
                <li>• Arlington County</li>
                <li>• McLean, Great Falls, Tysons</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-900/50 to-black/50 border border-neutral-800 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-white mb-4">Maryland Suburbs</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• Montgomery County</li>
                <li>• Prince George's County</li>
                <li>• Bethesda, Rockville, Gaithersburg</li>
                <li>• Silver Spring, College Park</li>
                <li>• Potomac, Germantown</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-900/50 to-black/50 border border-neutral-800 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-white mb-4">Washington DC</h4>
              <ul className="space-y-2 text-neutral-300">
                <li>• All DC quadrants</li>
                <li>• Downtown, Capitol Hill</li>
                <li>• Georgetown, Dupont Circle</li>
                <li>• Commercial & residential</li>
                <li>• Government contractor sites</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}
