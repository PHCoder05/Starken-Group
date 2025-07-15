"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Home, Factory, MapPin, Calendar, Eye, ArrowRight, Award, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const categories = [
  { id: 'all', name: 'All Projects', icon: Building2, color: 'text-gray-600' },
  { id: 'residential', name: 'Residential', icon: Home, color: 'text-blue-600' },
  { id: 'commercial', name: 'Commercial', icon: Building2, color: 'text-orange-600' },
  { id: 'infrastructure', name: 'Infrastructure', icon: Factory, color: 'text-emerald-600' },
]

const projects = [
  {
    id: 1,
    title: "Skyline Residences",
    category: "residential",
    location: "Mumbai, Maharashtra",
    year: "2023",
    description: "Luxury residential complex with 200+ apartments featuring modern amenities and sustainable design.",
    image: "/api/placeholder/600/400",
    status: "Completed",
    size: "2.5M sq ft",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Metro Business Center",
    category: "commercial",
    location: "Pune, Maharashtra",
    year: "2022",
    description: "State-of-the-art commercial complex with office spaces, retail outlets, and conference facilities.",
    image: "/api/placeholder/600/400",
    status: "Completed",
    size: "1.8M sq ft",
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 3,
    title: "Highway Bridge Project",
    category: "infrastructure",
    location: "Delhi-NCR",
    year: "2023",
    description: "Major infrastructure project connecting key transportation routes with modern engineering solutions.",
    image: "/api/placeholder/600/400",
    status: "Ongoing",
    size: "5 km length",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    id: 4,
    title: "Green Valley Homes",
    category: "residential",
    location: "Bangalore, Karnataka",
    year: "2022",
    description: "Eco-friendly residential community with solar power, rainwater harvesting, and green spaces.",
    image: "/api/placeholder/600/400",
    status: "Completed",
    size: "1.2M sq ft",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 5,
    title: "Tech Innovation Hub",
    category: "commercial",
    location: "Hyderabad, Telangana",
    year: "2023",
    description: "Modern technology campus with flexible workspaces, research facilities, and sustainable features.",
    image: "/api/placeholder/600/400",
    status: "Ongoing",
    size: "3.2M sq ft",
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 6,
    title: "Metro Rail Extension",
    category: "infrastructure",
    location: "Chennai, Tamil Nadu",
    year: "2023",
    description: "Urban transportation infrastructure expansion improving connectivity and reducing traffic congestion.",
    image: "/api/placeholder/600/400",
    status: "Planning",
    size: "12 km route",
    color: "from-emerald-500 to-emerald-600"
  }
]

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
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-emerald-100 text-emerald-700'
      case 'Ongoing': return 'bg-blue-100 text-blue-700'
      case 'Planning': return 'bg-orange-100 text-orange-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px]"></div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500"> Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse range of successful projects that showcase our expertise 
              in residential, commercial, and infrastructure development across India.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = activeCategory === category.id
              return (
                <Button
                  key={category.id}
                  variant={isActive ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' 
                      : 'border-gray-300 text-gray-700 hover:border-blue-300 hover:text-blue-600 bg-white'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {category.name}
                </Button>
              )
            })}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group"
                >
                  <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      {/* Project Image */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
                        {/* Status Badge */}
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                        </div>
                        
                        {/* View Button */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button size="sm" className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        {/* Title Overlay */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-bold text-white mb-1">
                            {project.title}
                          </h3>
                          <div className="flex items-center text-white/90 text-sm">
                            <MapPin className="w-4 h-4 mr-1" />
                            {project.location}
                          </div>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {project.description}
                        </p>

                        {/* Project Details */}
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {project.year}
                          </div>
                          <div className="font-medium text-gray-700">
                            {project.size}
                          </div>
                        </div>

                        {/* View Details Button */}
                        <Button variant="outline" className="w-full border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-300 group">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Bottom CTA Section */}
          <motion.div 
            variants={itemVariants}
            className="text-center bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900">500+ Projects Delivered</h3>
                <p className="text-gray-600">Across residential, commercial & infrastructure sectors</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to add your project to our impressive portfolio? Let's discuss how we can bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8">
                View All Projects
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 