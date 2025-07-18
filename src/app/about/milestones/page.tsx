'use client'

import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { Award, Calendar, Trophy, Target, Star, TrendingUp, Users, Building2, Shield, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const milestones = [
  {
    year: "2008",
    title: "Foundation of Excellence",
    description: "Starken Group was established with a vision to transform the construction industry in India through innovation, quality, and sustainability.",
    category: "Foundation",
    icon: Building2,
    color: "from-blue-500 to-blue-600"
  },
  {
    year: "2010",
    title: "First Major Residential Project",
    description: "Completed our first large-scale residential complex with 100+ units, setting new standards for quality construction and customer satisfaction.",
    category: "Projects",
    icon: Building2,
    color: "from-emerald-500 to-emerald-600"
  },
  {
    year: "2012",
    title: "Commercial Construction Division",
    description: "Launched specialized commercial construction division, expanding our capabilities to serve corporate and industrial clients.",
    category: "Expansion",
    icon: TrendingUp,
    color: "from-orange-500 to-orange-600"
  },
  {
    year: "2015",
    title: "ISO 9001:2015 Certification",
    description: "Achieved ISO 9001:2015 certification for quality management systems, demonstrating our commitment to international standards.",
    category: "Certification",
    icon: Shield,
    color: "from-purple-500 to-purple-600"
  },
  {
    year: "2017",
    title: "Infrastructure Development Entry",
    description: "Entered infrastructure development sector with our first highway project, expanding our expertise to large-scale infrastructure.",
    category: "Diversification",
    icon: Target,
    color: "from-indigo-500 to-indigo-600"
  },
  {
    year: "2018",
    title: "500+ Projects Milestone",
    description: "Successfully completed over 500 projects across residential, commercial, and infrastructure sectors with 98% client satisfaction.",
    category: "Achievement",
    icon: Trophy,
    color: "from-yellow-500 to-yellow-600"
  },
  {
    year: "2020",
    title: "Green Building Initiative",
    description: "Launched comprehensive green building program focusing on sustainable construction practices and LEED certified projects.",
    category: "Sustainability",
    icon: CheckCircle,
    color: "from-green-500 to-green-600"
  },
  {
    year: "2021",
    title: "Digital Transformation",
    description: "Implemented advanced construction technologies including BIM, IoT, and smart project management systems across all operations.",
    category: "Technology",
    icon: Star,
    color: "from-cyan-500 to-cyan-600"
  },
  {
    year: "2022",
    title: "Pan-India Expansion",
    description: "Expanded operations to 12+ cities across India, establishing regional offices and local partnerships for nationwide coverage.",
    category: "Growth",
    icon: TrendingUp,
    color: "from-pink-500 to-pink-600"
  },
  {
    year: "2023",
    title: "Excellence Recognition",
    description: "Received multiple industry awards including 'Best Construction Company' and 'Innovation in Sustainability' recognition.",
    category: "Awards",
    icon: Award,
    color: "from-amber-500 to-amber-600"
  }
]

const achievements = [
  {
    title: "CREDAI Excellence Award 2023",
    category: "Industry Recognition",
    description: "Recognized for outstanding contribution to real estate development and construction excellence.",
    year: "2023",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Green Building Council India Award",
    category: "Sustainability",
    description: "Honored for leadership in sustainable construction practices and green building development.",
    year: "2022",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Best Infrastructure Developer",
    category: "Infrastructure",
    description: "Awarded for excellence in infrastructure development and innovative engineering solutions.",
    year: "2022",
    image: "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "ISO 9001:2015 Certification",
    category: "Quality Management",
    description: "International certification for quality management systems and operational excellence.",
    year: "2021",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Construction Week Award",
    category: "Innovation",
    description: "Recognition for innovation in construction technology and project management excellence.",
    year: "2021",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Customer Satisfaction Excellence",
    category: "Client Relations",
    description: "Achieved 98% customer satisfaction rating across all completed projects and services.",
    year: "2020",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
]

const stats = [
  { number: "15+", label: "Years of Excellence", icon: Calendar },
  { number: "500+", label: "Projects Completed", icon: Building2 },
  { number: "25+", label: "Awards Won", icon: Award },
  { number: "200+", label: "Team Members", icon: Users },
  { number: "12+", label: "Cities Covered", icon: Target },
  { number: "98%", label: "Client Satisfaction", icon: Star }
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

export default function MilestonesPage() {
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
                Milestones &
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400"> Achievements</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                A journey of excellence, innovation, and continuous growth in the construction 
                and real estate industry since 2008.
              </p>
            </motion.div>

            {/* Key Stats */}
            <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  >
                    <Icon className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-slate-300">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Journey Through Time
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From our humble beginnings to becoming a leading construction company, 
                explore the key milestones that shaped our success story.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-orange-500"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon
                  const isEven = index % 2 === 0
                  
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                      {/* Timeline Node */}
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center z-10">
                        <Icon className="w-4 h-4 text-blue-600" />
                      </div>

                      {/* Content */}
                      <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8 ml-12 md:ml-0' : 'md:pl-8 ml-12 md:ml-0'}`}>
                        <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <span className={`text-2xl font-bold bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}>
                                {milestone.year}
                              </span>
                              <span className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                                {milestone.category}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {milestone.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Empty space for alternating layout */}
                      <div className="hidden md:block w-5/12"></div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
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
                Awards & Recognition
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our commitment to excellence has been recognized by industry leaders 
                and prestigious organizations across the construction sector.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {achievement.year}
                        </span>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="text-sm text-gray-500 mb-2">{achievement.category}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Vision Section */}
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
                Building the Future
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                As we continue our journey of excellence, we remain committed to innovation, 
                sustainability, and creating exceptional value for our clients and communities.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-white">2025</div>
                  <div className="text-blue-100">1000+ Projects Goal</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white">50+</div>
                  <div className="text-blue-100">Cities Target</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white">100%</div>
                  <div className="text-blue-100">Green Building Focus</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer siteType="starken-group" />
    </div>
  )
} 