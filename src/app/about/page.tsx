"use client"

import { motion } from 'framer-motion'
import { Award, Users, Calendar, Target, Eye, Heart, Building2, TrendingUp, Shield, CheckCircle } from 'lucide-react'
import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/layout/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const milestones = [
  {
    year: "2008",
    title: "Company Founded",
    description: "Starken Group was established with a vision to transform the construction industry in India."
  },
  {
    year: "2012",
    title: "First Major Project",
    description: "Completed our first large-scale residential complex, setting new standards for quality."
  },
  {
    year: "2015",
    title: "ISO Certification",
    description: "Achieved ISO 9001:2015 certification for quality management systems."
  },
  {
    year: "2018",
    title: "500+ Projects Milestone",
    description: "Successfully completed over 500 projects across residential and commercial sectors."
  },
  {
    year: "2020",
    title: "Sustainable Construction Initiative",
    description: "Launched green building program focusing on sustainable and eco-friendly construction."
  },
  {
    year: "2023",
    title: "Technology Integration",
    description: "Implemented advanced construction technologies including BIM and smart project management systems."
  }
]

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To provide premium construction materials that exceed industry standards while ensuring reliable supply chain management, competitive pricing, and exceptional customer service.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the leading construction materials supplier recognized for innovation, quality assurance, and transforming building projects through reliable material solutions.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Heart,
    title: "Values",
    description: "Quality Assurance, Reliability, Innovation, Customer Focus, Sustainability, and Integrity are the core principles that guide our materials sourcing and supply operations.",
    color: "from-purple-500 to-purple-600"
  }
]

const teamMembers = [
  {
    name: "Rajesh Kumar",
    position: "CEO & Founder",
    experience: "20+ Years",
    image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Visionary leader with extensive experience in construction materials supply and distribution."
  },
  {
    name: "Priya Sharma",
    position: "Chief Operations Officer",
    experience: "15+ Years",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Operations expert ensuring seamless material supply and quality delivery."
  },
  {
    name: "Amit Patel",
    position: "Head of Quality Control",
    experience: "12+ Years",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Quality assurance specialist ensuring all materials meet international standards."
  },
  {
    name: "Sneha Reddy",
    position: "Head of Procurement",
    experience: "10+ Years",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Procurement expert managing supplier relationships and material sourcing."
  }
]

const achievements = [
  { icon: Award, label: "ISO Certified", value: "Quality", color: "text-blue-600" },
  { icon: Building2, label: "Products Supplied", value: "10K+", color: "text-orange-600" },
  { icon: Users, label: "Team Members", value: "50+", color: "text-emerald-600" },
  { icon: Calendar, label: "Years Experience", value: "15+", color: "text-purple-600" }
]

export default function AboutPage() {
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
              About <span className="text-construction-yellow">Starken Group</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              With over 15 years of experience in construction materials supply, we've established ourselves as a trusted partner for builders seeking quality, reliability, and innovation in every construction material.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Journey</span>
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  Founded in 2008, Starken Group began as a construction materials supplier with a vision to provide quality materials to builders across India. 
                  Our founder envisioned creating a company that would not just supply materials, but would be a trusted partner in building India's infrastructure.
                </p>
                <p>
                  Over the past 15 years, we have grown from a small materials supplier to a leading construction materials company. 
                  Our journey has been marked by continuous innovation, quality assurance, and an unwavering commitment to customer satisfaction.
                </p>
                <p>
                  Today, Starken Group stands as a testament to what vision, dedication, and quality materials can achieve. 
                  We have successfully supplied materials for over 500 projects and continue to set new benchmarks in the industry.
                </p>
              </div>
              
              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon
                  return (
                    <motion.div
                      key={achievement.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-3 sm:p-4 lg:p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                    >
                      <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${achievement.color} mx-auto mb-2 sm:mb-3`} />
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1">{achievement.value}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{achievement.label}</div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-construction">
                <Image
                  src="https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Starken Group Warehouse"
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Foundation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions, shape our culture, and drive our commitment to excellence in construction materials supply.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="h-full hover:shadow-glow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed text-center">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Milestones</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key moments that have shaped our journey and defined our growth in the construction materials industry.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                    <Card className="hover:shadow-glow transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals leading our organization with vision, expertise, and dedication to quality materials supply.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="text-center hover:shadow-glow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                  <div className="relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="object-cover w-full h-64"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                    <p className="text-sm text-gray-500 mb-3">{member.experience}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Source Quality Materials?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join our legacy of excellence and let's build something extraordinary together. 
              Our team is ready to supply the best materials for your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get Material Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Contact Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer siteType="starken-group" />
    </div>
  )
}
