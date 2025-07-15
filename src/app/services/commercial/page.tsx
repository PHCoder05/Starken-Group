'use client'

import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { Building, Store, Factory, Hotel, CheckCircle, ArrowRight, TrendingUp, Award, Users, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

// Metadata is handled by layout.tsx for client components

const commercialServices = [
  {
    id: 1,
    name: "Office Complexes",
    icon: Building,
    description: "Modern office buildings and corporate complexes with Grade-A specifications and world-class amenities.",
    features: [
      "Grade-A Office Spaces",
      "Central Air Conditioning",
      "High-Speed Elevators",
      "24/7 Power Backup",
      "Ample Parking Space",
      "Security & Surveillance"
    ],
    projects: "30+ Complexes",
    sqft: "5M+ Sq Ft",
    image: "/api/placeholder/600/400",
    rentRange: "₹50-150/sq ft"
  },
  {
    id: 2,
    name: "Retail & Shopping Centers",
    icon: Store,
    description: "Vibrant retail spaces and shopping centers designed to attract customers and maximize business potential.",
    features: [
      "Strategic Locations",
      "High Footfall Areas",
      "Flexible Retail Spaces",
      "Food Courts & Entertainment",
      "Parking Facilities",
      "Modern Infrastructure"
    ],
    projects: "20+ Centers",
    sqft: "3M+ Sq Ft",
    image: "/api/placeholder/600/400",
    rentRange: "₹80-250/sq ft"
  },
  {
    id: 3,
    name: "Industrial Facilities",
    icon: Factory,
    description: "Custom-built industrial facilities and manufacturing units with specialized infrastructure requirements.",
    features: [
      "Custom Design Solutions",
      "Heavy Load Capacity",
      "Specialized Utilities",
      "Safety Compliance",
      "Logistics Support",
      "Expansion Capability"
    ],
    projects: "15+ Facilities",
    sqft: "8M+ Sq Ft",
    image: "/api/placeholder/600/400",
    rentRange: "₹25-75/sq ft"
  },
  {
    id: 4,
    name: "Hospitality Projects",
    icon: Hotel,
    description: "Hotels, resorts, and hospitality venues designed for exceptional guest experiences and operational efficiency.",
    features: [
      "Guest Room Design",
      "Conference Facilities",
      "Restaurant & Banquet",
      "Recreation Areas",
      "Luxury Amenities",
      "Operational Efficiency"
    ],
    projects: "8+ Hotels",
    sqft: "2M+ Sq Ft",
    image: "/api/placeholder/600/400",
    rentRange: "₹100-300/sq ft"
  }
]

const featuredProjects = [
  {
    name: "Metro Business Center",
    location: "Pune, Maharashtra",
    type: "Office Complex",
    area: "1.8M Sq Ft",
    completion: "Completed 2022",
    image: "/api/placeholder/400/300",
    value: "₹120 Crores",
    occupancy: "95% Occupied",
    features: ["Grade-A Offices", "Conference Center", "Food Court", "Parking"]
  },
  {
    name: "Tech Park Complex",
    location: "Hyderabad, Telangana",
    type: "IT Park",
    area: "2.8M Sq Ft",
    completion: "Completed 2022",
    image: "/api/placeholder/400/300",
    value: "₹250 Crores",
    occupancy: "100% Pre-leased",
    features: ["IT Offices", "Innovation Labs", "Cafeteria", "Recreation"]
  },
  {
    name: "Grand Shopping Plaza",
    location: "Mumbai, Maharashtra",
    type: "Retail Center",
    area: "500K Sq Ft",
    completion: "Under Construction",
    image: "/api/placeholder/400/300",
    value: "₹180 Crores",
    occupancy: "70% Pre-booked",
    features: ["Retail Shops", "Food Court", "Entertainment", "Parking"]
  }
]

const specifications = [
  {
    category: "Structural",
    specs: [
      "RCC Frame Structure",
      "Earthquake Resistant Design",
      "High Load Bearing Capacity",
      "Premium Quality Materials"
    ]
  },
  {
    category: "Electrical",
    specs: [
      "3-Phase Power Supply",
      "DG Backup Systems",
      "LED Lighting Solutions",
      "Smart Building Automation"
    ]
  },
  {
    category: "HVAC",
    specs: [
      "Central Air Conditioning",
      "Energy Efficient Systems",
      "Zone-wise Climate Control",
      "Fresh Air Management"
    ]
  },
  {
    category: "Safety",
    specs: [
      "Fire Safety Systems",
      "CCTV Surveillance",
      "Access Control Systems",
      "Emergency Evacuation"
    ]
  }
]

const advantages = [
  {
    title: "Strategic Locations",
    description: "Prime commercial locations with excellent connectivity and high visibility",
    icon: Target,
    benefit: "Higher ROI"
  },
  {
    title: "Quality Construction",
    description: "Superior construction standards with premium materials and finishes",
    icon: Award,
    benefit: "Lower Maintenance"
  },
  {
    title: "Modern Amenities",
    description: "State-of-the-art facilities and amenities for enhanced business operations",
    icon: TrendingUp,
    benefit: "Attract Tenants"
  },
  {
    title: "Professional Management",
    description: "Expert facility management services for hassle-free operations",
    icon: Users,
    benefit: "Peace of Mind"
  }
]

export default function CommercialPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

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
              Commercial <span className="text-construction-yellow">Excellence</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Creating world-class commercial spaces that drive business success through innovative design, quality construction, and strategic locations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">75+</div>
                <div className="text-gray-300">Commercial Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">18M+</div>
                <div className="text-gray-300">Sq Ft Developed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">95%</div>
                <div className="text-gray-300">Occupancy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">500+</div>
                <div className="text-gray-300">Business Partners</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commercial Services */}
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
              Commercial <span className="text-primary-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive commercial development services designed to meet diverse business needs and maximize investment returns.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {commercialServices.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="h-full hover:shadow-construction transition-all duration-300 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <service.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-gray-900">
                        {service.name}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="text-center p-2 bg-primary-50 rounded-lg">
                        <div className="text-sm font-bold text-primary-600">{service.projects}</div>
                        <div className="text-xs text-gray-600">Completed</div>
                      </div>
                      <div className="text-center p-2 bg-construction-orange/10 rounded-lg">
                        <div className="text-sm font-bold text-construction-orange">{service.sqft}</div>
                        <div className="text-xs text-gray-600">Developed</div>
                      </div>
                      <div className="text-center p-2 bg-green-50 rounded-lg">
                        <div className="text-sm font-bold text-green-600">{service.rentRange}</div>
                        <div className="text-xs text-gray-600">Rent/Month</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full" variant="outline">
                      View Properties
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Flagship <span className="text-primary-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our premier commercial developments that set new standards for business infrastructure.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-construction transition-all duration-300 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                      {project.name}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <span className="font-medium">{project.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Type:</span>
                        <span className="font-medium">{project.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Area:</span>
                        <span className="font-medium">{project.area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Status:</span>
                        <span className="font-medium">{project.completion}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Value:</span>
                        <span className="font-bold text-primary-600">{project.value}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Occupancy:</span>
                        <span className="font-bold text-green-600">{project.occupancy}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full">
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specifications */}
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
              Technical <span className="text-primary-600">Specifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commercial projects are built to the highest standards with premium specifications and modern infrastructure.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {specifications.map((spec, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-4">
                      {spec.category}
                    </h3>
                    <ul className="space-y-3">
                      {spec.specs.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Investment <span className="text-primary-600">Advantages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose Starken Group for commercial investments that deliver superior returns and long-term value appreciation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {advantages.map((advantage, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center hover:shadow-construction transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-construction-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <advantage.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{advantage.description}</p>
                    <div className="text-lg font-bold text-primary-600">{advantage.benefit}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
              Ready to Invest in Commercial Excellence?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Discover premium commercial opportunities that offer superior returns and long-term value appreciation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Investment Consultation
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  View Portfolio
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