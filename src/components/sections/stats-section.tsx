"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Users, Calendar, Award, TrendingUp, CheckCircle, Globe, Target } from 'lucide-react'

const stats = [
  {
    icon: Building2,
    number: "500+",
    label: "Projects Completed",
    description: "Successfully delivered across India",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Users,
    number: "200+",
    label: "Happy Clients",
    description: "Trusted by leading organizations",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Calendar,
    number: "15+",
    label: "Years Experience",
    description: "Excellence in construction industry",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    icon: Award,
    number: "25+",
    label: "Awards Won",
    description: "Recognition for quality & innovation",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Globe,
    number: "12+",
    label: "Cities Covered",
    description: "Pan-India presence & operations",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Target,
    number: "95%",
    label: "On-Time Delivery",
    description: "Commitment to project timelines",
    color: "from-red-500 to-red-600"
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

const StatsSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.03)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px]"></div>
      
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
              Numbers That Speak 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500"> Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence is reflected in every project we deliver. These numbers 
              represent years of dedication, innovation, and trust earned from our clients.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                      {stat.number}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {stat.label}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center space-x-2 text-gray-600">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="font-medium">
                Join our growing list of satisfied clients across India
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection 