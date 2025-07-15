'use client'

import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { Lightbulb, FileText, TrendingUp, Users, CheckCircle, ArrowRight, Award, Target, Clock, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

// Metadata is handled by layout.tsx for client components

const consultationServices = [
  {
    id: 1,
    name: "Project Feasibility Studies",
    icon: FileText,
    description: "Comprehensive feasibility analysis to evaluate project viability, risks, and potential returns before investment.",
    services: [
      "Market Analysis & Research",
      "Financial Viability Assessment",
      "Risk Analysis & Mitigation",
      "Site Evaluation & Due Diligence",
      "Regulatory Compliance Review",
      "Timeline & Cost Estimation"
    ],
    deliverables: "Detailed Feasibility Report",
    timeline: "2-4 Weeks",
    image: "/api/placeholder/600/400",
    clientTypes: ["Investors", "Developers", "Corporates"]
  },
  {
    id: 2,
    name: "Real Estate Advisory",
    icon: TrendingUp,
    description: "Strategic real estate consulting services for investment decisions, market entry, and portfolio optimization.",
    services: [
      "Investment Strategy Development",
      "Market Trend Analysis",
      "Property Valuation",
      "Portfolio Management",
      "Exit Strategy Planning",
      "Regulatory Guidance"
    ],
    deliverables: "Investment Recommendations",
    timeline: "1-3 Weeks",
    image: "/api/placeholder/600/400",
    clientTypes: ["HNIs", "Funds", "Institutions"]
  },
  {
    id: 3,
    name: "Construction Management",
    icon: Users,
    description: "Professional construction management and project oversight services ensuring quality delivery and cost control.",
    services: [
      "Project Planning & Scheduling",
      "Quality Control & Assurance",
      "Cost Management & Control",
      "Vendor Management",
      "Progress Monitoring",
      "Dispute Resolution"
    ],
    deliverables: "Project Management Plan",
    timeline: "Project Duration",
    image: "/api/placeholder/600/400",
    clientTypes: ["Builders", "Contractors", "Owners"]
  },
  {
    id: 4,
    name: "Design & Planning",
    icon: Lightbulb,
    description: "Creative design solutions and strategic planning services for optimal space utilization and functionality.",
    services: [
      "Architectural Design",
      "Space Planning & Layout",
      "Interior Design Concepts",
      "Landscape Planning",
      "Sustainable Design Solutions",
      "Value Engineering"
    ],
    deliverables: "Design Drawings & Plans",
    timeline: "3-6 Weeks",
    image: "/api/placeholder/600/400",
    clientTypes: ["Homeowners", "Businesses", "Institutions"]
  }
]

const consultingProcess = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "Understanding your requirements, goals, and project parameters through detailed discussions.",
    duration: "1-2 Days",
    deliverable: "Requirement Assessment"
  },
  {
    step: 2,
    title: "Analysis & Research",
    description: "Comprehensive market research, site analysis, and technical evaluation of project parameters.",
    duration: "1-2 Weeks",
    deliverable: "Analysis Report"
  },
  {
    step: 3,
    title: "Strategy Development",
    description: "Developing customized strategies and solutions based on analysis and client objectives.",
    duration: "1 Week",
    deliverable: "Strategic Recommendations"
  },
  {
    step: 4,
    title: "Implementation Support",
    description: "Ongoing support and guidance during project implementation and execution phases.",
    duration: "As Required",
    deliverable: "Continuous Support"
  }
]

const expertise = [
  {
    area: "Market Analysis",
    experience: "15+ Years",
    projects: "200+ Studies",
    specialization: "Residential & Commercial Markets"
  },
  {
    area: "Financial Planning",
    experience: "12+ Years",
    projects: "150+ Assessments",
    specialization: "ROI & Risk Analysis"
  },
  {
    area: "Regulatory Compliance",
    experience: "10+ Years",
    projects: "300+ Approvals",
    specialization: "RERA, Environmental, Municipal"
  },
  {
    area: "Project Management",
    experience: "15+ Years",
    projects: "100+ Projects",
    specialization: "Large Scale Developments"
  }
]

const benefits = [
  {
    title: "Expert Guidance",
    description: "Access to industry experts with decades of construction and real estate experience",
    icon: Award,
    value: "15+ Years Experience"
  },
  {
    title: "Risk Mitigation",
    description: "Identify and mitigate potential risks before they impact your project or investment",
    icon: Shield,
    value: "Risk-Free Planning"
  },
  {
    title: "Cost Optimization",
    description: "Optimize project costs and maximize returns through strategic planning and execution",
    icon: Target,
    value: "20-30% Cost Savings"
  },
  {
    title: "Time Efficiency",
    description: "Accelerate project timelines through proper planning and expert project management",
    icon: Clock,
    value: "Faster Delivery"
  }
]

const clientTestimonials = [
  {
    name: "Rajesh Agarwal",
    company: "Agarwal Developers",
    role: "Managing Director",
    testimonial: "Starken Group's feasibility study helped us avoid a potentially risky investment and guided us towards a more profitable opportunity.",
    project: "Residential Complex Feasibility",
    image: "/api/placeholder/100/100"
  },
  {
    name: "Priya Sharma",
    company: "Sharma Enterprises",
    role: "CEO",
    testimonial: "Their construction management expertise saved us significant time and costs while ensuring top-quality delivery.",
    project: "Commercial Building Management",
    image: "/api/placeholder/100/100"
  }
]

export default function ConsultationPage() {
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
              Strategic <span className="text-construction-yellow">Consultation</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Expert advisory services to guide your construction and real estate decisions with strategic insights, market intelligence, and professional expertise.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">500+</div>
                <div className="text-gray-300">Consultations Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">200+</div>
                <div className="text-gray-300">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">95%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultation Services */}
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
              Consultation <span className="text-primary-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting services designed to help you make informed decisions and achieve successful project outcomes.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {consultationServices.map((service) => (
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
                        <div className="text-sm font-bold text-primary-600">{service.timeline}</div>
                        <div className="text-xs text-gray-600">Timeline</div>
                      </div>
                      <div className="text-center p-3 bg-construction-orange/10 rounded-lg">
                        <div className="text-sm font-bold text-construction-orange">{service.deliverables}</div>
                        <div className="text-xs text-gray-600">Deliverable</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Service Includes</h4>
                      <ul className="space-y-2">
                        {service.services.slice(0, 4).map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Ideal For</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.clientTypes.map((type, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full" variant="outline">
                      Get Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Consulting Process */}
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
              Our Consulting <span className="text-primary-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to understanding your needs and delivering actionable insights and recommendations.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {consultingProcess.map((step, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center hover:shadow-construction transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-construction-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{step.description}</p>
                    <div className="space-y-1">
                      <div className="text-sm font-semibold text-primary-600">{step.duration}</div>
                      <div className="text-xs text-gray-500">{step.deliverable}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise Areas */}
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
              Areas of <span className="text-primary-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep domain expertise across multiple areas of construction and real estate consulting.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {expertise.map((area, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-4">
                      {area.area}
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-2xl font-bold text-primary-600">{area.experience}</div>
                        <div className="text-sm text-gray-600">Experience</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-construction-orange">{area.projects}</div>
                        <div className="text-sm text-gray-600">Projects</div>
                      </div>
                      <div className="text-sm text-gray-700 font-medium">
                        {area.specialization}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
              Why Choose Our <span className="text-primary-600">Consultation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of working with seasoned professionals who understand the construction and real estate industry.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center hover:shadow-construction transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-construction-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{benefit.description}</p>
                    <div className="text-lg font-bold text-primary-600">{benefit.value}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
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
              Client <span className="text-primary-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results and satisfied clients who have benefited from our expert consultation services.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {clientTestimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-construction transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-primary-600 font-medium">{testimonial.role}</p>
                        <p className="text-gray-600 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 italic mb-4">
                      "{testimonial.testimonial}"
                    </blockquote>
                    <div className="text-sm text-gray-500">
                      <strong>Project:</strong> {testimonial.project}
                    </div>
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
              Ready to Make Informed Decisions?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get expert consultation to guide your construction and real estate investments towards success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Schedule Consultation
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer siteType="starken-group" />
    </div>
  )
} 