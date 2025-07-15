'use client'

import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { Factory, Building, Truck, Home, Zap, Wrench, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

// Metadata is handled by layout.tsx for client components

const industries = [
  {
    id: 1,
    name: "Manufacturing",
    description: "State-of-the-art manufacturing facilities and industrial complexes designed for optimal efficiency and productivity.",
    icon: Factory,
    image: "/api/placeholder/600/400",
    color: "from-blue-600 to-indigo-600",
    stats: {
      projects: "120+",
      sqft: "2M+",
      clients: "45"
    },
    services: [
      "Factory Construction",
      "Warehouse Development",
      "Production Line Setup",
      "Quality Control Systems",
      "Automation Integration",
      "Safety Compliance"
    ],
    sectors: [
      "Automotive Manufacturing",
      "Pharmaceutical Plants",
      "Food Processing Units",
      "Textile Manufacturing",
      "Chemical Processing",
      "Electronics Assembly"
    ],
    keyProjects: [
      "Tata Motors Assembly Plant - 500,000 sq ft facility",
      "Cipla Pharmaceutical Complex - Advanced R&D center",
      "ITC Food Processing Unit - Automated production lines"
    ]
  },
  {
    id: 2,
    name: "Trading & Commercial",
    description: "Modern commercial spaces and trading centers that drive business growth and facilitate commerce.",
    icon: Building,
    image: "/api/placeholder/600/400",
    color: "from-green-600 to-teal-600",
    stats: {
      projects: "85+",
      sqft: "1.5M+",
      clients: "32"
    },
    services: [
      "Shopping Mall Construction",
      "Office Complex Development",
      "Retail Space Design",
      "Logistics Centers",
      "Distribution Hubs",
      "Commercial Infrastructure"
    ],
    sectors: [
      "Retail Chains",
      "Financial Services",
      "Technology Parks",
      "Trading Companies",
      "E-commerce Warehouses",
      "Corporate Headquarters"
    ],
    keyProjects: [
      "Phoenix Mall Pune - 800,000 sq ft retail space",
      "Tech Mahindra Campus - IT park development",
      "Reliance Distribution Center - Automated logistics hub"
    ]
  },
  {
    id: 3,
    name: "Services & Infrastructure",
    description: "Critical infrastructure and service facilities that support communities and drive economic development.",
    icon: Wrench,
    image: "/api/placeholder/600/400",
    color: "from-orange-600 to-red-600",
    stats: {
      projects: "150+",
      sqft: "3M+",
      clients: "60"
    },
    services: [
      "Healthcare Facilities",
      "Educational Institutions",
      "Government Buildings",
      "Transportation Hubs",
      "Utility Infrastructure",
      "Public Services"
    ],
    sectors: [
      "Hospitals & Clinics",
      "Schools & Universities",
      "Government Offices",
      "Airport Terminals",
      "Railway Stations",
      "Power Plants"
    ],
    keyProjects: [
      "AIIMS Pune Extension - 300-bed medical facility",
      "Pune Metro Stations - 15 station infrastructure",
      "Maharashtra Bhavan - Government complex"
    ]
  },
  {
    id: 4,
    name: "Residential Construction",
    description: "Premium residential projects that redefine modern living with innovative design and sustainable practices.",
    icon: Home,
    image: "/api/placeholder/600/400",
    color: "from-purple-600 to-pink-600",
    stats: {
      projects: "200+",
      units: "8000+",
      families: "6500+"
    },
    services: [
      "Luxury Apartments",
      "Villa Communities",
      "Affordable Housing",
      "Smart Homes",
      "Gated Communities",
      "Urban Redevelopment"
    ],
    sectors: [
      "Premium Housing",
      "Mid-Segment Housing",
      "Affordable Housing",
      "Senior Living",
      "Student Housing",
      "Co-living Spaces"
    ],
    keyProjects: [
      "Starken Heights - 500-unit luxury complex",
      "Green Valley Villas - Eco-friendly community",
      "Affordable Homes Project - 2000 units for EWS"
    ]
  }
]

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar siteType="starken-group" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-construction-orange overflow-hidden">
        <div className="absolute inset-0 bg-construction-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Our <span className="text-construction-yellow">Industries</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              From manufacturing facilities to residential complexes, we deliver exceptional construction solutions across diverse industries, driving growth and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">4</div>
                <div className="text-sm">Major Industries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">555+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">6.5M+</div>
                <div className="text-sm">Sq Ft Developed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">137</div>
                <div className="text-sm">Industry Clients</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {industries.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <motion.div
                  key={industry.id}
                  variants={itemVariants}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Industry Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative h-96 rounded-2xl overflow-hidden group">
                      <Image
                        src={industry.image}
                        alt={industry.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-80`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <IconComponent className="h-16 w-16 mx-auto mb-4" />
                          <h3 className="text-3xl font-bold mb-2">{industry.name}</h3>
                          <p className="text-lg opacity-90">Excellence in Every Project</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Industry Details */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">{industry.name}</h2>
                      <p className="text-lg text-gray-600 leading-relaxed">{industry.description}</p>
                    </div>

                    {/* Industry Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(industry.stats).map(([key, value], idx) => (
                        <div key={idx} className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                          <div className="text-2xl font-bold text-primary-600">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Core Services */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Core Services</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {industry.services.map((service, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Sectors */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Sectors</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.sectors.map((sector, idx) => (
                          <span key={idx} className="bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded-full">
                            {sector}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Notable Projects */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Notable Projects</h4>
                      <div className="space-y-2">
                        {industry.keyProjects.map((project, idx) => (
                          <div key={idx} className="flex items-start text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-construction-orange rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span>{project}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <Button variant="starken" size="lg">
                        View Projects
                      </Button>
                      <Button variant="outline" size="lg">
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Why Choose <span className="text-primary-600">Starken Group</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multi-industry expertise and proven track record make us the preferred partner for complex construction projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center p-6 bg-primary-50 rounded-2xl"
            >
              <Factory className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Expertise</h3>
              <p className="text-gray-600 text-sm">
                Deep understanding of industry-specific requirements and regulations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-6 bg-construction-orange/10 rounded-2xl"
            >
              <Zap className="h-12 w-12 text-construction-orange mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation Focus</h3>
              <p className="text-gray-600 text-sm">
                Cutting-edge technology and innovative solutions for modern challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center p-6 bg-green-50 rounded-2xl"
            >
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">
                Skilled professionals with extensive experience across all industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center p-6 bg-purple-50 rounded-2xl"
            >
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600 text-sm">
                Consistent delivery of high-quality projects on time and within budget.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-construction-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Whatever your industry, we have the expertise to deliver exceptional results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Discuss Your Project
                </Button>
              </Link>
              <Link href="/companies">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Meet Our Companies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer siteType="starken-group" />
    </div>
  )
} 