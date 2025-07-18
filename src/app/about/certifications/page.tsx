'use client'

import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { Shield, Award, CheckCircle, Calendar, Download, ExternalLink, Star, Building2, Users, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const certifications = [
  {
    id: 1,
    name: "ISO 9001:2015",
    fullName: "Quality Management Systems",
    issuedBy: "Bureau Veritas Certification",
    issuedDate: "March 2021",
    validUntil: "March 2024",
    description: "International standard for quality management systems, ensuring consistent quality in our services and customer satisfaction.",
    category: "Quality Management",
    icon: Shield,
    image: "/api/placeholder/400/300",
    color: "from-blue-500 to-blue-600",
    benefits: [
      "Consistent quality delivery",
      "Customer satisfaction focus",
      "Continuous improvement processes",
      "Risk-based thinking approach"
    ]
  },
  {
    id: 2,
    name: "ISO 14001:2015",
    fullName: "Environmental Management Systems",
    issuedBy: "SGS India Pvt Ltd",
    issuedDate: "June 2021",
    validUntil: "June 2024",
    description: "Environmental management standard ensuring our commitment to environmental protection and sustainable practices.",
    category: "Environmental",
    icon: CheckCircle,
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-emerald-500 to-emerald-600",
    benefits: [
      "Environmental impact reduction",
      "Waste management optimization",
      "Energy efficiency improvement",
      "Sustainable construction practices"
    ]
  },
  {
    id: 3,
    name: "ISO 45001:2018",
    fullName: "Occupational Health & Safety Management",
    issuedBy: "TUV India Pvt Ltd",
    issuedDate: "September 2021",
    validUntil: "September 2024",
    description: "International standard for occupational health and safety management systems, ensuring worker safety and well-being.",
    category: "Safety",
    icon: Users,
    image: "/api/placeholder/400/300",
    color: "from-orange-500 to-orange-600",
    benefits: [
      "Worker safety enhancement",
      "Accident prevention",
      "Health risk reduction",
      "Safety culture development"
    ]
  },
  {
    id: 4,
    name: "LEED Green Associate",
    fullName: "Leadership in Energy & Environmental Design",
    issuedBy: "US Green Building Council",
    issuedDate: "January 2022",
    validUntil: "January 2025",
    description: "Professional credential demonstrating knowledge of green building practices and LEED rating system.",
    category: "Green Building",
    icon: Star,
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-green-500 to-green-600",
    benefits: [
      "Green building expertise",
      "Energy efficiency focus",
      "Sustainable design principles",
      "LEED project capability"
    ]
  },
  {
    id: 5,
    name: "MSME Registration",
    fullName: "Micro, Small & Medium Enterprises",
    issuedBy: "Ministry of MSME, Government of India",
    issuedDate: "April 2020",
    validUntil: "Permanent",
    description: "Official registration as a Micro, Small & Medium Enterprise, enabling access to government schemes and benefits.",
    category: "Government",
    icon: Building2,
    image: "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-purple-500 to-purple-600",
    benefits: [
      "Government scheme access",
      "Financial benefits",
      "Priority sector lending",
      "Tax advantages"
    ]
  },
  {
    id: 6,
    name: "CREDAI Membership",
    fullName: "Confederation of Real Estate Developers",
    issuedBy: "CREDAI Maharashtra",
    issuedDate: "August 2019",
    validUntil: "Annual Renewal",
    description: "Membership in India's premier real estate developers' association, demonstrating credibility and industry recognition.",
    category: "Industry Association",
    icon: Award,
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-indigo-500 to-indigo-600",
    benefits: [
      "Industry networking",
      "Best practices sharing",
      "Policy advocacy",
      "Professional development"
    ]
  }
]

const complianceAreas = [
  {
    title: "Legal Compliance",
    description: "Full compliance with all applicable construction laws, building codes, and regulatory requirements.",
    items: [
      "Building Code Compliance",
      "Environmental Clearances",
      "Labor Law Compliance",
      "Safety Regulations",
      "Municipal Approvals"
    ]
  },
  {
    title: "Quality Standards",
    description: "Adherence to international quality standards and best practices in construction and project management.",
    items: [
      "Material Quality Testing",
      "Construction Quality Control",
      "Project Management Standards",
      "Customer Service Excellence",
      "Continuous Improvement"
    ]
  },
  {
    title: "Safety Protocols",
    description: "Comprehensive safety management systems ensuring worker and site safety across all projects.",
    items: [
      "Site Safety Management",
      "Worker Safety Training",
      "Emergency Response Plans",
      "Safety Equipment Standards",
      "Accident Prevention Programs"
    ]
  },
  {
    title: "Environmental Standards",
    description: "Environmental protection measures and sustainable construction practices in all operations.",
    items: [
      "Waste Management Systems",
      "Energy Efficiency Measures",
      "Water Conservation Practices",
      "Green Building Standards",
      "Carbon Footprint Reduction"
    ]
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

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar siteType="starken-group" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Certifications &
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400"> Compliance</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Our commitment to excellence is validated through internationally recognized 
                certifications and rigorous compliance with industry standards.
              </p>
            </motion.div>

            {/* Certification Stats */}
            <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Shield className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white">6+</div>
                <div className="text-sm text-slate-300">Active Certifications</div>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Award className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white">ISO</div>
                <div className="text-sm text-slate-300">Certified Systems</div>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-slate-300">Compliance Rate</div>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-slate-300">Years Certified</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Certifications
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                International standards and certifications that validate our commitment 
                to quality, safety, and environmental responsibility.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {certifications.map((cert, index) => {
                const Icon = cert.icon
                return (
                  <motion.div
                    key={cert.id}
                    variants={itemVariants}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  >
                    <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      {/* Header */}
                      <div className={`relative h-24 bg-gradient-to-r ${cert.color} flex items-center justify-center`}>
                        <Icon className="w-12 h-12 text-white" />
                        <div className="absolute top-4 right-4">
                          <span className="bg-white/20 text-white px-2 py-1 rounded text-xs font-medium">
                            {cert.category}
                          </span>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {cert.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">{cert.fullName}</p>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {cert.description}
                        </p>

                        {/* Certification Details */}
                        <div className="space-y-2 mb-4 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Issued by:</span>
                            <span className="font-medium">{cert.issuedBy}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Valid until:</span>
                            <span className="font-medium">{cert.validUntil}</span>
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                          <ul className="space-y-1">
                            {cert.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Verify
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compliance Framework
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive compliance with legal, quality, safety, and environmental 
                standards across all our operations and projects.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {complianceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {area.description}
                      </p>
                      
                      <div className="space-y-3">
                        {area.items.map((item, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Partner with a Certified Leader
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Choose Starken Group for your next project and benefit from our certified 
                quality management, safety protocols, and environmental standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8">
                  Download Certificates
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer siteType="starken-group" />
    </div>
  )
} 