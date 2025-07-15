"use client"

import { motion } from 'framer-motion'
import { Award, Target, Eye, Heart, Users, Calendar, ArrowRight, Play, Building, CheckCircle, Star, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To deliver exceptional construction and real estate solutions that exceed client expectations while maintaining the highest standards of quality, safety, and sustainability.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be the leading construction company recognized for innovation, excellence, and transforming communities through sustainable infrastructure development.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600"
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Integrity, Quality, Innovation, Safety, Sustainability, and Client Satisfaction are the core principles that guide every aspect of our business operations.",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600"
  }
]

const achievements = [
  { icon: Award, label: "ISO Certified", value: "Quality Standards", color: "text-blue-600" },
  { icon: Users, label: "Expert Team", value: "50+ Professionals", color: "text-orange-600" },
  { icon: Calendar, label: "Since 2008", value: "15+ Years", color: "text-emerald-600" },
  { icon: Building, label: "Projects", value: "500+ Completed", color: "text-purple-600" }
]

const features = [
  "ISO 9001:2015 Certified Quality Management",
  "Sustainable Construction Practices",
  "Advanced Project Management",
  "24/7 Customer Support",
  "On-Time Project Delivery",
  "Competitive Pricing"
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

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px]"></div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Content Side */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Header */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Building Excellence
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                    Since 2008
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  With over 15 years of experience in construction and real estate, Starken Group 
                  has established itself as a trusted partner for clients seeking quality, innovation, 
                  and reliability in every project.
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white group">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Company Story
                </Button>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/api/placeholder/600/450"
                    alt="Starken Group Office"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Floating Achievement Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">ISO Certified</div>
                      <div className="text-sm text-gray-600">Quality Excellence</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">15+ Years</div>
                      <div className="text-sm text-gray-600">Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mission, Vision, Values */}
          <motion.div variants={containerVariants} className="mb-20">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Foundation
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that drive our commitment to excellence and guide every decision we make.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  >
                    <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8 text-center">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${value.bgColor} mb-6`}>
                          <Icon className={`w-8 h-8 ${value.textColor}`} />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div variants={containerVariants}>
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Achievements
              </h3>
              <p className="text-lg text-gray-600">
                Milestones that reflect our commitment to excellence and growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-50 rounded-lg mb-4">
                      <Icon className={`w-7 h-7 ${achievement.color}`} />
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {achievement.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {achievement.label}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 