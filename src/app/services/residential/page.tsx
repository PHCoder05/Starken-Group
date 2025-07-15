'use client'

import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { Home, Building2, Trees, Shield, Star, CheckCircle, ArrowRight, Users, Award, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

// Metadata is handled by layout.tsx for client components

const residentialServices = [
  {
    id: 1,
    name: "Luxury Residential Complexes",
    icon: Building2,
    description: "Premium residential developments with world-class amenities, modern architecture, and sustainable living solutions.",
    features: [
      "High-rise Apartment Buildings",
      "Luxury Amenities & Facilities",
      "Modern Architecture Design",
      "Smart Home Integration",
      "Landscaped Gardens",
      "24/7 Security Systems"
    ],
    projects: "25+ Complexes",
    units: "2000+ Homes",
    image: "/api/placeholder/600/400",
    priceRange: "₹50L - ₹5Cr"
  },
  {
    id: 2,
    name: "Affordable Housing",
    icon: Home,
    description: "Government-backed affordable housing projects providing quality homes for middle and lower-income families.",
    features: [
      "PMAY Compliant Projects",
      "Budget-friendly Pricing",
      "Quality Construction",
      "Basic Amenities",
      "Easy Financing Options",
      "Community Facilities"
    ],
    projects: "15+ Projects",
    units: "5000+ Units",
    image: "/api/placeholder/600/400",
    priceRange: "₹15L - ₹40L"
  },
  {
    id: 3,
    name: "Gated Communities",
    icon: Trees,
    description: "Exclusive gated communities with comprehensive amenities, security, and modern infrastructure for premium living.",
    features: [
      "Exclusive Gated Entry",
      "Club House & Recreation",
      "Swimming Pool & Gym",
      "Children's Play Area",
      "Jogging Tracks",
      "Maintenance Services"
    ],
    projects: "10+ Communities",
    units: "1500+ Villas",
    image: "/api/placeholder/600/400",
    priceRange: "₹1Cr - ₹10Cr"
  },
  {
    id: 4,
    name: "Sustainable Housing",
    icon: Shield,
    description: "Eco-friendly residential projects with green building practices, solar power, and sustainable living features.",
    features: [
      "Solar Power Integration",
      "Rainwater Harvesting",
      "Waste Management Systems",
      "Green Building Materials",
      "Energy Efficient Design",
      "Organic Garden Spaces"
    ],
    projects: "8+ Green Projects",
    units: "800+ Eco-Homes",
    image: "/api/placeholder/600/400",
    priceRange: "₹40L - ₹2Cr"
  }
]

const amenities = [
  { name: "Swimming Pool", icon: "🏊‍♂️" },
  { name: "Gymnasium", icon: "💪" },
  { name: "Clubhouse", icon: "🏢" },
  { name: "Children's Play Area", icon: "🎮" },
  { name: "Landscaped Gardens", icon: "🌳" },
  { name: "24/7 Security", icon: "🛡️" },
  { name: "Power Backup", icon: "⚡" },
  { name: "Parking Space", icon: "🚗" },
  { name: "Lift Access", icon: "🛗" },
  { name: "Water Treatment", icon: "💧" },
  { name: "Waste Management", icon: "♻️" },
  { name: "Smart Home Features", icon: "🏠" }
]

const featuredProjects = [
  {
    name: "Skyline Residences",
    location: "Mumbai, Maharashtra",
    type: "Luxury Apartments",
    units: "200+ Units",
    completion: "Completed 2023",
    image: "/api/placeholder/400/300",
    price: "₹1.2Cr - ₹3.5Cr",
    amenities: ["Swimming Pool", "Gym", "Clubhouse", "Security"]
  },
  {
    name: "Green Valley Township",
    location: "Bangalore, Karnataka",
    type: "Eco-friendly Villas",
    units: "150 Villas",
    completion: "Under Construction",
    image: "/api/placeholder/400/300",
    price: "₹80L - ₹2Cr",
    amenities: ["Solar Power", "Garden", "Club", "Security"]
  },
  {
    name: "Affordable Homes Phase-3",
    location: "Lucknow, UP",
    type: "Affordable Housing",
    units: "500 Apartments",
    completion: "Completed 2023",
    image: "/api/placeholder/400/300",
    price: "₹18L - ₹35L",
    amenities: ["Basic Facilities", "Parking", "Power", "Water"]
  }
]

const whyChooseUs = [
  {
    title: "Quality Construction",
    description: "Superior construction quality with best-in-class materials and workmanship",
    icon: Award,
    stats: "Zero Defect Delivery"
  },
  {
    title: "Timely Delivery",
    description: "Committed to delivering projects on time with transparent progress tracking",
    icon: Target,
    stats: "95% On-Time Delivery"
  },
  {
    title: "Customer Support",
    description: "Dedicated customer support throughout the buying journey and beyond",
    icon: Users,
    stats: "24/7 Support"
  },
  {
    title: "Value for Money",
    description: "Competitive pricing with maximum value and long-term appreciation potential",
    icon: Star,
    stats: "Best ROI"
  }
]

export default function ResidentialPage() {
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
              Dream <span className="text-construction-yellow">Homes</span> Reality
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Creating exceptional residential spaces that combine modern design, quality construction, and sustainable living for families across India.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">50+</div>
                <div className="text-gray-300">Residential Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">8000+</div>
                <div className="text-gray-300">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">15+</div>
                <div className="text-gray-300">Cities Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">98%</div>
                <div className="text-gray-300">Customer Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Residential Services */}
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
              Residential <span className="text-primary-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive residential development services catering to diverse needs, from affordable housing to luxury living spaces.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {residentialServices.map((service) => (
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
                        <div className="text-xs text-gray-600">Projects</div>
                      </div>
                      <div className="text-center p-2 bg-construction-orange/10 rounded-lg">
                        <div className="text-sm font-bold text-construction-orange">{service.units}</div>
                        <div className="text-xs text-gray-600">Units</div>
                      </div>
                      <div className="text-center p-2 bg-green-50 rounded-lg">
                        <div className="text-sm font-bold text-green-600">{service.priceRange}</div>
                        <div className="text-xs text-gray-600">Price Range</div>
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
                      Explore Projects
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Amenities */}
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
              World-Class <span className="text-primary-600">Amenities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every residential project comes equipped with modern amenities designed to enhance your lifestyle and comfort.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
          >
            {amenities.map((amenity, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4">
                    <div className="text-3xl mb-2">{amenity.icon}</div>
                    <h3 className="text-sm font-semibold text-gray-900">{amenity.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
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
              Featured <span className="text-primary-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest residential projects that showcase our commitment to quality, innovation, and customer satisfaction.
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
                        <span>Units:</span>
                        <span className="font-medium">{project.units}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Status:</span>
                        <span className="font-medium">{project.completion}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Price:</span>
                        <span className="font-bold text-primary-600">{project.price}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Amenities</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.amenities.map((amenity, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose <span className="text-primary-600">Starken Group</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of working with a trusted residential developer committed to excellence and customer satisfaction.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyChooseUs.map((reason, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center hover:shadow-construction transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-construction-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <reason.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{reason.description}</p>
                    <div className="text-lg font-bold text-primary-600">{reason.stats}</div>
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
              Find Your Dream Home Today
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Explore our residential projects and discover the perfect home that matches your lifestyle and budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Schedule Site Visit
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Browse Projects
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