'use client'

import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { Cog, Calculator, Compass, Zap, CheckCircle, ArrowRight, Award, Users, Target, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

// Metadata is handled by layout.tsx for client components

const engineeringServices = [
  {
    id: 1,
    name: "Structural Engineering",
    icon: Calculator,
    description: "Advanced structural design and analysis using cutting-edge technology for safe, efficient, and cost-effective solutions.",
    capabilities: [
      "Structural Design & Analysis",
      "Earthquake Resistant Design",
      "Foundation Engineering",
      "Steel & Concrete Structures",
      "Building Information Modeling",
      "Load Calculation & Optimization"
    ],
    projects: "200+ Structures",
    experience: "15+ Years",
    image: "/api/placeholder/600/400",
    technologies: ["AutoCAD", "SAP2000", "ETABS", "Revit BIM"]
  },
  {
    id: 2,
    name: "MEP Engineering",
    icon: Zap,
    description: "Comprehensive Mechanical, Electrical, and Plumbing engineering services for optimal building performance.",
    capabilities: [
      "HVAC System Design",
      "Electrical Distribution",
      "Plumbing & Drainage",
      "Fire Safety Systems",
      "Building Automation",
      "Energy Management"
    ],
    projects: "150+ Systems",
    experience: "12+ Years",
    image: "/api/placeholder/600/400",
    technologies: ["HAP", "AutoCAD MEP", "Revit MEP", "DIALux"]
  },
  {
    id: 3,
    name: "Geotechnical Engineering",
    icon: Compass,
    description: "Soil investigation and foundation design services ensuring stable and durable construction foundations.",
    capabilities: [
      "Soil Investigation",
      "Foundation Design",
      "Slope Stability Analysis",
      "Ground Improvement",
      "Retaining Wall Design",
      "Settlement Analysis"
    ],
    projects: "100+ Sites",
    experience: "10+ Years",
    image: "/api/placeholder/600/400",
    technologies: ["GeoStudio", "PLAXIS", "SLOPE/W", "Field Testing"]
  },
  {
    id: 4,
    name: "Project Engineering",
    icon: Cog,
    description: "End-to-end project engineering services from conceptual design to construction completion and commissioning.",
    capabilities: [
      "Project Planning",
      "Design Coordination",
      "Construction Management",
      "Quality Assurance",
      "Cost Engineering",
      "Risk Management"
    ],
    projects: "75+ Projects",
    experience: "15+ Years",
    image: "/api/placeholder/600/400",
    technologies: ["MS Project", "Primavera", "BIM 360", "Autodesk Construction Cloud"]
  }
]

const technicalCapabilities = [
  {
    category: "Design Software",
    tools: [
      "AutoCAD (2D/3D Design)",
      "Revit (BIM Modeling)",
      "SAP2000 (Structural Analysis)",
      "ETABS (Building Analysis)",
      "STAAD Pro (Steel Design)",
      "Tekla Structures (Detailing)"
    ]
  },
  {
    category: "Analysis Tools",
    tools: [
      "Finite Element Analysis",
      "Dynamic Analysis",
      "Seismic Analysis",
      "Wind Load Analysis",
      "Thermal Analysis",
      "CFD Analysis"
    ]
  },
  {
    category: "Standards & Codes",
    tools: [
      "IS Codes (Indian Standards)",
      "NBC (National Building Code)",
      "AISC (Steel Construction)",
      "ACI (Concrete Institute)",
      "IEEE (Electrical Standards)",
      "ASHRAE (HVAC Standards)"
    ]
  },
  {
    category: "Specializations",
    tools: [
      "High-rise Buildings",
      "Industrial Structures",
      "Bridge Engineering",
      "Seismic Design",
      "Green Building Design",
      "Smart Building Systems"
    ]
  }
]

const projects = [
  {
    name: "High-rise Tower Structural Design",
    location: "Mumbai, Maharashtra",
    scope: "50-storey residential tower",
    challenge: "Seismic zone requirements",
    solution: "Base isolation system",
    image: "/api/placeholder/400/300",
    value: "₹15 Crores",
    duration: "18 months"
  },
  {
    name: "Industrial Plant MEP Design",
    location: "Chennai, Tamil Nadu",
    scope: "Complete MEP system for manufacturing facility",
    challenge: "Heavy power load requirements",
    solution: "Optimized electrical distribution",
    image: "/api/placeholder/400/300",
    value: "₹8 Crores",
    duration: "12 months"
  },
  {
    name: "Bridge Foundation Engineering",
    location: "Delhi NCR",
    scope: "5km highway bridge foundation",
    challenge: "Poor soil conditions",
    solution: "Deep pile foundation system",
    image: "/api/placeholder/400/300",
    value: "₹25 Crores",
    duration: "24 months"
  }
]

const expertise = [
  {
    title: "Certified Engineers",
    description: "Team of qualified and certified engineers with extensive industry experience",
    icon: Award,
    stats: "50+ Engineers"
  },
  {
    title: "Advanced Technology",
    description: "Latest software tools and analysis methods for accurate and efficient design",
    icon: TrendingUp,
    stats: "25+ Software Tools"
  },
  {
    title: "Quality Standards",
    description: "Adherence to international quality standards and best practices",
    icon: Target,
    stats: "ISO Certified"
  },
  {
    title: "Project Success",
    description: "Proven track record of successful project delivery with zero failures",
    icon: Users,
    stats: "100% Success Rate"
  }
]

export default function EngineeringPage() {
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
              Engineering <span className="text-construction-yellow">Excellence</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Advanced engineering solutions combining technical expertise, innovative design, and cutting-edge technology to deliver superior construction outcomes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">50+</div>
                <div className="text-gray-300">Qualified Engineers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">500+</div>
                <div className="text-gray-300">Projects Engineered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">15+</div>
                <div className="text-gray-300">Years Expertise</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">100%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engineering Services */}
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
              Engineering <span className="text-primary-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering services covering all aspects of construction from structural design to MEP systems.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {engineeringServices.map((service) => (
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
                        <div className="text-sm text-gray-600">Completed</div>
                      </div>
                      <div className="text-center p-3 bg-construction-orange/10 rounded-lg">
                        <div className="text-lg font-bold text-construction-orange">{service.experience}</div>
                        <div className="text-sm text-gray-600">Experience</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Core Capabilities</h4>
                      <ul className="space-y-2">
                        {service.capabilities.slice(0, 4).map((capability, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {capability}
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

      {/* Technical Capabilities */}
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
              Technical <span className="text-primary-600">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced tools, standards, and specialized knowledge that enable us to deliver complex engineering solutions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {technicalCapabilities.map((capability, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-4 text-center">
                      {capability.category}
                    </h3>
                    <ul className="space-y-3">
                      {capability.tools.map((tool, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                          {tool}
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

      {/* Project Examples */}
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
              Engineering <span className="text-primary-600">Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complex engineering challenges solved through innovative solutions and technical expertise.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
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
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-3">
                      {project.name}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div><strong>Location:</strong> {project.location}</div>
                      <div><strong>Scope:</strong> {project.scope}</div>
                      <div><strong>Challenge:</strong> {project.challenge}</div>
                      <div><strong>Solution:</strong> {project.solution}</div>
                    </div>
                    <div className="flex justify-between text-sm mb-4">
                      <div>
                        <div className="font-semibold text-primary-600">{project.value}</div>
                        <div className="text-gray-500">Project Value</div>
                      </div>
                      <div>
                        <div className="font-semibold text-construction-orange">{project.duration}</div>
                        <div className="text-gray-500">Duration</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      View Case Study
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Expertise */}
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
              Our <span className="text-primary-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets our engineering team apart in delivering exceptional technical solutions and project outcomes.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {expertise.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center hover:shadow-construction transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-construction-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                    <div className="text-lg font-bold text-primary-600">{item.stats}</div>
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
              Need Engineering Expertise?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Partner with our experienced engineering team to bring your complex construction projects to life with innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Consult Our Engineers
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  View Our Work
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