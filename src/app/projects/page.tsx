'use client'

import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { Building2, Home, Factory, MapPin, Calendar, Eye, ArrowRight, Filter, CheckCircle, Clock, Users, Square } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SmartImage } from '@/components/ui/image-placeholder'
import { ProjectCard } from '@/components/ui/modern-card'
import { useState } from 'react'

// Metadata is handled by layout.tsx for client components

const categories = [
  { id: 'all', name: 'All Projects', icon: Building2, count: 45 },
  { id: 'residential', name: 'Residential', icon: Home, count: 18 },
  { id: 'commercial', name: 'Commercial', icon: Building2, count: 15 },
  { id: 'infrastructure', name: 'Infrastructure', icon: Factory, count: 12 },
]

const projectStatuses = [
  { id: 'all', name: 'All Status', count: 45 },
  { id: 'completed', name: 'Completed', count: 32 },
  { id: 'ongoing', name: 'Ongoing', count: 8 },
  { id: 'upcoming', name: 'Upcoming', count: 5 },
]

const projects = [
  {
    id: 1,
    title: "Skyline Residences",
    category: "residential",
    location: "Mumbai, Maharashtra",
    year: "2023",
    description: "Luxury residential complex with 200+ apartments featuring modern amenities, sustainable design, and panoramic city views.",
    image: "/api/placeholder/600/400",
    status: "completed",
    size: "2.5M sq ft",
    units: "200+ Apartments",
    features: ["Swimming Pool", "Gymnasium", "Garden Areas", "Security", "Parking"],
    client: "Raj Empires",
    budget: "₹150 Crores"
  },
  {
    id: 2,
    title: "Metro Business Center",
    category: "commercial",
    location: "Pune, Maharashtra", 
    year: "2022",
    description: "State-of-the-art commercial complex with office spaces, retail outlets, conference facilities, and modern amenities.",
    image: "/api/placeholder/600/400",
    status: "completed",
    size: "1.8M sq ft",
    units: "50+ Office Spaces",
    features: ["Conference Halls", "Retail Space", "Food Court", "Parking", "Security"],
    client: "Corporate Partners Ltd",
    budget: "₹120 Crores"
  },
  {
    id: 3,
    title: "Highway Bridge Project",
    category: "infrastructure",
    location: "Delhi-NCR",
    year: "2023",
    description: "Major infrastructure project connecting key transportation routes with modern engineering solutions and smart traffic management.",
    image: "/api/placeholder/600/400",
    status: "ongoing",
    size: "5 km length",
    units: "4-Lane Bridge",
    features: ["Smart Traffic", "LED Lighting", "Safety Barriers", "Emergency Lanes"],
    client: "National Highway Authority",
    budget: "₹200 Crores"
  },
  {
    id: 4,
    title: "Green Valley Township",
    category: "residential",
    location: "Bangalore, Karnataka",
    year: "2024",
    description: "Eco-friendly residential township with sustainable living solutions, green spaces, and modern infrastructure.",
    image: "/api/placeholder/600/400",
    status: "ongoing",
    size: "3.2M sq ft",
    units: "300+ Villas",
    features: ["Solar Power", "Rainwater Harvesting", "Organic Gardens", "Clubhouse"],
    client: "Green Living Developers",
    budget: "₹180 Crores"
  },
  {
    id: 5,
    title: "Tech Park Complex",
    category: "commercial",
    location: "Hyderabad, Telangana",
    year: "2022",
    description: "Modern IT park with Grade-A office spaces, innovation centers, and world-class amenities for tech companies.",
    image: "/api/placeholder/600/400",
    status: "completed",
    size: "2.8M sq ft",
    units: "25+ Office Buildings",
    features: ["High-Speed Internet", "Innovation Labs", "Cafeterias", "Recreation Areas"],
    client: "Tech Solutions Group",
    budget: "₹250 Crores"
  },
  {
    id: 6,
    title: "Metro Station Development",
    category: "infrastructure",
    location: "Chennai, Tamil Nadu",
    year: "2023",
    description: "Modern metro station with passenger amenities, retail spaces, and integrated transportation facilities.",
    image: "/api/placeholder/600/400",
    status: "completed",
    size: "150,000 sq ft",
    units: "2 Platforms",
    features: ["Escalators", "Retail Shops", "Parking", "Accessibility Features"],
    client: "Chennai Metro Rail",
    budget: "₹80 Crores"
  },
  {
    id: 7,
    title: "Luxury Hotel Resort",
    category: "commercial",
    location: "Goa",
    year: "2024",
    description: "Premium beach resort with luxury suites, conference facilities, spa, and recreational amenities.",
    image: "/api/placeholder/600/400",
    status: "upcoming",
    size: "1.5M sq ft",
    units: "150 Rooms",
    features: ["Beach Access", "Spa & Wellness", "Conference Center", "Multiple Restaurants"],
    client: "Hospitality Partners",
    budget: "₹300 Crores"
  },
  {
    id: 8,
    title: "Smart City Infrastructure",
    category: "infrastructure",
    location: "Indore, Madhya Pradesh",
    year: "2024",
    description: "Comprehensive smart city infrastructure including roads, utilities, smart lighting, and digital connectivity.",
    image: "/api/placeholder/600/400",
    status: "ongoing",
    size: "25 km area",
    units: "Complete Infrastructure",
    features: ["Smart Lighting", "Digital Connectivity", "Waste Management", "Traffic Systems"],
    client: "Indore Smart City Mission",
    budget: "₹500 Crores"
  },
  {
    id: 9,
    title: "Affordable Housing Project",
    category: "residential",
    location: "Lucknow, Uttar Pradesh",
    year: "2023",
    description: "Government-backed affordable housing project providing quality homes for middle-income families.",
    image: "/api/placeholder/600/400",
    status: "completed",
    size: "4M sq ft",
    units: "800+ Apartments",
    features: ["Community Center", "Playground", "Basic Amenities", "Affordable Pricing"],
    client: "UP Housing Development",
    budget: "₹100 Crores"
  }
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory
    const statusMatch = selectedStatus === 'all' || project.status === selectedStatus
    return categoryMatch && statusMatch
  })

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'ongoing':
        return <Clock className="w-4 h-4 text-orange-500" />
      case 'upcoming':
        return <Calendar className="w-4 h-4 text-blue-500" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700'
      case 'ongoing':
        return 'bg-orange-100 text-orange-700'
      case 'upcoming':
        return 'bg-blue-100 text-blue-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
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
              Our <span className="text-construction-yellow">Projects</span> Portfolio
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Explore our comprehensive portfolio of successful projects spanning residential, commercial, and infrastructure development across India.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">200+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">50M+</div>
                <div className="text-gray-300">Sq Ft Built</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  Project Categories
                </h2>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-primary-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      {category.name}
                      <span className="text-xs bg-black/20 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Project Status
                </h3>
                <div className="flex flex-wrap gap-2">
                  {projectStatuses.map((status) => (
                    <button
                      key={status.id}
                      onClick={() => setSelectedStatus(status.id)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                        selectedStatus === status.id
                          ? 'bg-construction-orange text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {status.name} ({status.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="group h-full hover:shadow-construction transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <SmartImage
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      fallbackType="commercial"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(project.status)}`}>
                        {getStatusIcon(project.status)}
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Square className="w-4 h-4" />
                        {project.size}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        {project.client}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-500">Project Value</div>
                        <div className="font-semibold text-primary-600">{project.budget}</div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="group/btn text-primary-600 hover:text-primary-700"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Found</h3>
              <p className="text-gray-600">
                No projects match your current filter criteria. Try adjusting your filters.
              </p>
            </motion.div>
          )}
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
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss how we can bring your vision to life with our expertise and dedication.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg">
                Get Free Quote
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer siteType="starken-group" />
    </div>
  )
} 