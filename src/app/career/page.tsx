'use client'

import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { Users, TrendingUp, Award, Globe, ArrowRight, ExternalLink, Briefcase, MapPin, Clock, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect } from 'react'

export default function CareerPage() {
  const handleRedirectToStarkenVentures = () => {
    window.open('https://starkenventures.com/career', '_blank')
  }

  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Accelerate your career with diverse opportunities and leadership development programs."
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Performance-based incentives, bonuses, and recognition programs for outstanding contributions."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with passionate professionals in a supportive, team-oriented environment."
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous learning opportunities, training programs, and skill enhancement initiatives."
    },
    {
      icon: Globe,
      title: "Work-Life Balance",
      description: "Flexible work arrangements and comprehensive benefits package for your well-being."
    },
    {
      icon: Briefcase,
      title: "Diverse Projects",
      description: "Work on exciting, challenging projects across various industries and technologies."
    }
  ]

  const currentOpenings = [
    {
      title: "Senior Project Manager",
      department: "Construction",
      location: "Pune, Maharashtra",
      type: "Full-time",
      experience: "5-8 years",
      description: "Lead complex construction projects from planning to completion, ensuring quality and timely delivery."
    },
    {
      title: "Civil Engineer",
      department: "Engineering",
      location: "Mumbai, Maharashtra", 
      type: "Full-time",
      experience: "2-5 years",
      description: "Design and oversee construction projects, ensuring compliance with safety and quality standards."
    },
    {
      title: "Business Development Executive",
      department: "Sales & Marketing",
      location: "Bangalore, Karnataka",
      type: "Full-time", 
      experience: "3-6 years",
      description: "Drive business growth by identifying opportunities and building client relationships."
    },
    {
      title: "Quality Assurance Manager",
      department: "Quality Control",
      location: "Pune, Maharashtra",
      type: "Full-time",
      experience: "4-7 years", 
      description: "Implement quality management systems and ensure compliance with industry standards."
    },
    {
      title: "Software Developer",
      department: "Technology",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "1-4 years",
      description: "Develop innovative software solutions for construction management and automation."
    },
    {
      title: "Finance Analyst",
      department: "Finance",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "2-4 years",
      description: "Analyze financial data, prepare reports, and support strategic decision-making processes."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
              Build Your <span className="text-construction-yellow">Career</span> With Us
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Join our dynamic team and be part of building tomorrow's infrastructure. Discover exciting opportunities in construction, real estate, and technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={handleRedirectToStarkenVentures}
                className="group"
              >
                View All Openings
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
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
              Why Choose <span className="text-primary-600">Starken Group</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe our people are our greatest asset. Join us and experience a workplace that values innovation, growth, and collaboration.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 p-8 rounded-2xl hover:shadow-glow transition-all duration-300 group"
                >
                  <IconComponent className="h-12 w-12 text-primary-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Current Openings */}
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
              Current <span className="text-primary-600">Openings</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore exciting career opportunities across our various departments and locations.
            </p>
            <div className="bg-construction-orange/10 border border-construction-orange/20 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-construction-orange font-medium">
                For detailed job descriptions and to apply, please visit our dedicated career portal at starkenventures.com
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {currentOpenings.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-glow transition-all duration-300 border border-gray-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-primary-600 font-medium">{job.department}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{job.description}</p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {job.experience}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group"
                  onClick={handleRedirectToStarkenVentures}
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              Don't see a role that fits? We're always looking for talented individuals.
            </p>
            <Button 
              variant="starken" 
              size="lg"
              onClick={handleRedirectToStarkenVentures}
              className="group"
            >
              Submit Your Resume
              <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Our <span className="text-primary-600">Culture</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Starken Group, we foster an environment where innovation thrives, collaboration is key, and every team member has the opportunity to make a meaningful impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Innovation-driven mindset</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Collaborative team environment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Commitment to sustainability</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Continuous learning and development</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-primary-50 p-6 rounded-2xl">
                  <Users className="h-10 w-10 text-primary-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Team Spirit</h4>
                  <p className="text-sm text-gray-600">Collaborative environment where everyone contributes to success.</p>
                </div>
                <div className="bg-construction-orange/10 p-6 rounded-2xl">
                  <Award className="h-10 w-10 text-construction-orange mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
                  <p className="text-sm text-gray-600">Commitment to delivering the highest quality in everything we do.</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-green-50 p-6 rounded-2xl">
                  <TrendingUp className="h-10 w-10 text-green-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Growth</h4>
                  <p className="text-sm text-gray-600">Opportunities for personal and professional development.</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-2xl">
                  <Globe className="h-10 w-10 text-purple-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Impact</h4>
                  <p className="text-sm text-gray-600">Work on projects that make a real difference in communities.</p>
                </div>
              </div>
            </motion.div>
          </div>
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
              Ready to Build Your Future?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Take the next step in your career journey with Starken Group. Apply today and become part of our growing family.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={handleRedirectToStarkenVentures}
                className="group"
              >
                Explore Careers at Starken Ventures
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Contact HR Team
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