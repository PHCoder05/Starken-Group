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
    description: "To deliver exceptional construction and real estate solutions that exceed client expectations while maintaining the highest standards of quality, safety, and sustainability.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the leading construction company recognized for innovation, excellence, and transforming communities through sustainable infrastructure development.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Heart,
    title: "Values",
    description: "Integrity, Quality, Innovation, Safety, Sustainability, and Client Satisfaction are the core principles that guide every aspect of our business operations.",
    color: "from-purple-500 to-purple-600"
  }
]

const teamMembers = [
  {
    name: "Rajesh Kumar",
    position: "CEO & Founder",
    experience: "20+ Years",
    image: "/api/placeholder/300/300",
    bio: "Visionary leader with extensive experience in construction and real estate development."
  },
  {
    name: "Priya Sharma",
    position: "Chief Operations Officer",
    experience: "15+ Years",
    image: "/api/placeholder/300/300",
    bio: "Operations expert ensuring seamless project execution and quality delivery."
  },
  {
    name: "Amit Patel",
    position: "Chief Technology Officer",
    experience: "12+ Years",
    image: "/api/placeholder/300/300",
    bio: "Technology innovator driving digital transformation in construction processes."
  },
  {
    name: "Sneha Reddy",
    position: "Head of Design",
    experience: "10+ Years",
    image: "/api/placeholder/300/300",
    bio: "Creative architect leading innovative design solutions for modern construction."
  }
]

const achievements = [
  { icon: Award, label: "Awards Won", value: "25+" },
  { icon: Building2, label: "Projects Completed", value: "500+" },
  { icon: Users, label: "Team Members", value: "200+" },
  { icon: Calendar, label: "Years of Excellence", value: "15+" }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar siteType="starken-group" />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-construction-orange relative overflow-hidden">
          <div className="absolute inset-0 bg-construction-pattern opacity-10" />
          <div className="relative z-10 max-w-7xl mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                About <span className="text-construction-yellow">Starken Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                Building the future of India with innovative construction solutions, 
                sustainable practices, and unwavering commitment to excellence since 2008.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Story */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Our <span className="heading-gradient">Journey</span>
                </h2>
                <div className="prose prose-lg text-gray-600 space-y-6">
                  <p>
                    Founded in 2008, Starken Group began as a small construction company with a big vision. 
                    Our founder, Rajesh Kumar, envisioned creating a company that would not just build structures, 
                    but would build the future of India's infrastructure landscape.
                  </p>
                  <p>
                    Over the past 15 years, we have grown from a small team of dedicated professionals 
                    to a leading construction and real estate development company. Our journey has been 
                    marked by continuous innovation, sustainable practices, and an unwavering commitment 
                    to quality that has earned us the trust of hundreds of clients across India.
                  </p>
                  <p>
                    Today, Starken Group stands as a testament to what vision, dedication, and quality 
                    craftsmanship can achieve. We have successfully completed over 500 projects, 
                    employed more than 200 professionals, and continue to set new benchmarks in the industry.
                  </p>
                </div>
                
                {/* Achievements Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon
                    return (
                      <motion.div
                        key={achievement.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors duration-300"
                      >
                        <IconComponent className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.value}</div>
                        <div className="text-sm text-gray-600">{achievement.label}</div>
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
                    src="/api/placeholder/600/400"
                    alt="Starken Group Office"
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
        <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
          <div className="max-w-7xl mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Our <span className="heading-gradient">Core Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our decisions, shape our culture, and drive our commitment to excellence.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
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
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Our <span className="heading-gradient">Milestones</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key moments that have shaped our journey and defined our growth over the years.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                      <Card className="hover:shadow-glow transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="text-primary-600 font-bold text-lg mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
          <div className="max-w-7xl mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Meet Our <span className="heading-gradient">Leadership Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced professionals leading our organization with vision, expertise, and dedication.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                      <p className="text-primary-600 font-medium mb-2">{member.position}</p>
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
        <section className="section-padding bg-gradient-to-r from-primary-600 to-construction-orange">
          <div className="max-w-7xl mx-auto container-padding text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Build Your Dream Project?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                Join our legacy of excellence and let's create something extraordinary together. 
                Our team is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Start Your Project
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900">
                  Contact Our Team
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer siteType="starken-group" />
    </div>
  )
}
