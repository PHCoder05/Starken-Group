'use client'

import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { Building2, Construction, Building, Zap, Wrench, CheckCircle, ArrowRight, Award, Users, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

// Metadata is handled by layout.tsx for client components

const infrastructureServices = [
  {
    id: 1,
    name: "Highway & Road Construction",
    icon: Construction,
    description: "Complete highway and road infrastructure development with modern engineering solutions and durable construction techniques.",
    features: [
      "National & State Highway Construction",
      "Urban Road Development",
      "Bridge Construction",
      "Traffic Management Systems",
      "Road Safety Implementation",
      "Maintenance & Repair Services"
    ],
    projects: "50+ Roads Built",
    experience: "12+ Years",
    image: "/api/placeholder/600/400",
    technologies: ["GPS Surveying", "Asphalt Technology", "Concrete Paving", "Smart Traffic Systems"]
  },
  {
    id: 2,
    name: "Bridge Engineering",
    icon: Building2,
    description: "Design and construction of bridges, flyovers, and elevated structures using advanced engineering principles and materials.",
    features: [
      "Cable-stayed Bridges",
      "Flyover Construction",
      "Pedestrian Bridges",
      "Railway Overpasses",
      "Structural Engineering",
      "Foundation Systems"
    ],
    projects: "25+ Bridges Built",
    experience: "10+ Years",
    image: "/api/placeholder/600/400",
    technologies: ["Pre-cast Technology", "Cable Systems", "Foundation Engineering", "Structural Analysis"]
  },
  {
    id: 3,
    name: "Utilities & MEP",
    icon: Zap,
    description: "Comprehensive utilities and MEP (Mechanical, Electrical, Plumbing) infrastructure for large-scale developments.",
    features: [
      "Electrical Infrastructure",
      "Water Supply Systems",
      "Sewage Treatment Plants",
      "HVAC Systems",
      "Fire Safety Systems",
      "Smart Building Integration"
    ],
    projects: "100+ Systems Installed",
    experience: "15+ Years",
    image: "/api/placeholder/600/400",
    technologies: ["BMS Integration", "Smart Meters", "Energy Management", "Automation Systems"]
  },
  {
    id: 4,
    name: "Transportation Infrastructure",
    icon: Building,
    description: "Complete transportation hubs including metro stations, bus terminals, and integrated transit facilities.",
    features: [
      "Metro Station Development",
      "Bus Terminal Construction",
      "Airport Infrastructure",
      "Railway Stations",
      "Parking Facilities",
      "Integrated Transit Systems"
    ],
    projects: "15+ Transport Hubs",
    experience: "8+ Years",
    image: "/api/placeholder/600/400",
    technologies: ["Transit Technology", "Passenger Systems", "Security Integration", "Digital Signage"]
  }
]

const keyProjects = [
  {
    name: "Delhi-Mumbai Highway Expansion",
    location: "Multiple States",
    scope: "500 km Highway Development",
    completion: "2023",
    image: "/api/placeholder/400/300",
    value: "₹800 Crores"
  },
  {
    name: "Metro Blue Line Extension",
    location: "Delhi NCR",
    scope: "15 km Metro Line with 12 Stations",
    completion: "2022",
    image: "/api/placeholder/400/300",
    value: "₹1200 Crores"
  },
  {
    name: "Smart City Infrastructure",
    location: "Indore, MP",
    scope: "Complete City Infrastructure Upgrade",
    completion: "Ongoing",
    image: "/api/placeholder/400/300",
    value: "₹500 Crores"
  }
]

const capabilities = [
  {
    title: "Advanced Engineering",
    description: "State-of-the-art engineering solutions with BIM and 3D modeling",
    icon: Wrench,
    stats: "50+ Engineers"
  },
  {
    title: "Project Management",
    description: "Expert project management ensuring timely delivery and quality",
    icon: Users,
    stats: "200+ Projects"
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality control and testing protocols",
    icon: CheckCircle,
    stats: "ISO Certified"
  },
  {
    title: "Innovation",
    description: "Cutting-edge technology and sustainable practices",
    icon: Award,
    stats: "25+ Awards"
  }
]

export default function InfrastructurePage() {
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
              Infrastructure <span className="text-construction-yellow">Excellence</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Building the backbone of modern India with world-class infrastructure solutions including highways, bridges, utilities, and transportation systems.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">200+</div>
                <div className="text-gray-300">Infrastructure Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">1000+</div>
                <div className="text-gray-300">KM Roads Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">50+</div>
                <div className="text-gray-300">Bridges Constructed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">15+</div>
                <div className="text-gray-300">Transport Hubs</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
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
              Our Infrastructure <span className="text-primary-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive infrastructure development services designed to build the foundation for sustainable growth and development.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {infrastructureServices.map((service) => (
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
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-primary-50 rounded-lg">
                        <div className="text-lg font-bold text-primary-600">{service.projects}</div>
                        <div className="text-sm text-gray-600">Delivered</div>
                      </div>
                      <div className="text-center p-3 bg-construction-orange/10 rounded-lg">
                        <div className="text-lg font-bold text-construction-orange">{service.experience}</div>
                        <div className="text-sm text-gray-600">Experience</div>
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

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full" variant="outline">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Projects */}
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
              Showcasing our expertise through landmark infrastructure projects that have transformed communities and regions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {keyProjects.map((project, index) => (
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
                        <span>Scope:</span>
                        <span className="font-medium">{project.scope}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Completion:</span>
                        <span className="font-medium">{project.completion}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Value:</span>
                        <span className="font-bold text-primary-600">{project.value}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      View Project Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
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
              Our <span className="text-primary-600">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced capabilities and expertise that set us apart in infrastructure development and delivery.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {capabilities.map((capability, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center hover:shadow-construction transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-construction-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <capability.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{capability.description}</p>
                    <div className="text-2xl font-bold text-primary-600">{capability.stats}</div>
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
              Ready to Build Infrastructure Excellence?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Partner with us to develop world-class infrastructure that drives growth and transforms communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Discuss Your Project
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  View Our Portfolio
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