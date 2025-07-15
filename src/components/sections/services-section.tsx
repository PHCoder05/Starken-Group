"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Home, Factory, Wrench, Shield, Users, ArrowRight, CheckCircle, Zap, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SmartImage } from '@/components/ui/image-placeholder'

const services = [
  {
    icon: Building2,
    title: "Infrastructure Development",
    description: "Large-scale infrastructure projects including bridges, highways, and public facilities with cutting-edge engineering solutions.",
    features: ["Highway Construction", "Bridge Engineering", "Public Infrastructure", "Urban Planning"],
    image: "/api/placeholder/600/400",
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-500",
    textColor: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Home,
    title: "Residential Construction",
    description: "Premium residential developments from luxury villas to affordable housing projects with sustainable design principles.",
    features: ["Luxury Villas", "Apartment Complexes", "Affordable Housing", "Smart Homes"],
    image: "/api/placeholder/600/400",
    color: "from-orange-500 to-orange-600",
    borderColor: "border-orange-500",
    textColor: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    icon: Factory,
    title: "Commercial Projects",
    description: "State-of-the-art commercial buildings, office complexes, and industrial facilities designed for modern business needs.",
    features: ["Office Buildings", "Shopping Centers", "Industrial Plants", "Warehouses"],
    image: "/api/placeholder/600/400",
    color: "from-emerald-500 to-emerald-600",
    borderColor: "border-emerald-500",
    textColor: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    icon: Wrench,
    title: "Engineering Services",
    description: "Comprehensive engineering solutions including structural design, MEP services, and project management consulting.",
    features: ["Structural Design", "MEP Services", "Project Management", "Quality Assurance"],
    image: "/api/placeholder/600/400",
    color: "from-purple-500 to-purple-600",
    borderColor: "border-purple-500",
    textColor: "text-purple-600",
    bgColor: "bg-purple-50"
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

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500"> Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we provide comprehensive construction and real estate services 
              that transform visions into reality with uncompromising quality and innovation.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              const isHovered = hoveredIndex === index
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group"
                >
                  <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      {/* Image Section */}
                      <div className="relative h-64 overflow-hidden">
                        <SmartImage
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`}></div>
                        
                        {/* Icon Overlay */}
                        <div className="absolute top-6 left-6">
                          <div className={`w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center ${isHovered ? 'scale-110' : ''} transition-transform duration-300`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        
                        {/* Title Overlay */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8">
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Features List */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className={`w-4 h-4 ${service.textColor}`} />
                              <span className="text-sm text-gray-700 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <Button 
                          variant="outline" 
                          className={`w-full ${service.borderColor} ${service.textColor} hover:bg-gradient-to-r ${service.color} hover:text-white hover:border-transparent transition-all duration-300 group`}
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div 
            variants={itemVariants}
            className="text-center bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your construction vision to life with our expertise and commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Get Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8">
                View Our Portfolio
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 