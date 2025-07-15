'use client'

import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { Building2, Calendar, Users, TrendingUp, MapPin, Globe, Award, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

// Metadata is handled by layout.tsx for client components

const companies = [
  {
    id: 1,
    name: "Raj Empires",
    tagline: "Premium Real Estate Development",
    established: "2008",
    description: "Raj Empires specializes in luxury residential and commercial real estate development, creating iconic properties that redefine urban living.",
    website: "https://rajempires.com",
    location: "Pune, Maharashtra",
    employees: "150+",
    projects: "50+",
    image: "/api/placeholder/600/400",
    logo: "/api/placeholder/100/60",
    services: [
      "Luxury Residential Projects",
      "Commercial Complexes", 
      "Urban Planning",
      "Real Estate Investment"
    ],
    achievements: [
      "CREDAI Excellence Award 2020",
      "Best Residential Project 2019",
      "Green Building Certification"
    ],
    keyProjects: [
      "Raj Empire Towers - Premium commercial complex",
      "Imperial Heights - Luxury residential project",
      "Heritage Gardens - Eco-friendly township"
    ],
    color: "from-blue-600 to-purple-600"
  },
  {
    id: 2,
    name: "AVS Alliance",
    tagline: "Infrastructure & Construction Excellence",
    established: "2012",
    description: "AVS Alliance is a leading infrastructure and construction company specializing in large-scale projects including highways, bridges, and industrial facilities.",
    website: "https://avsalliance.com",
    location: "Mumbai, Maharashtra",
    employees: "300+",
    projects: "100+",
    image: "/api/placeholder/600/400",
    logo: "/api/placeholder/100/60",
    services: [
      "Highway Construction",
      "Bridge Engineering",
      "Industrial Infrastructure",
      "Project Management"
    ],
    achievements: [
      "National Infrastructure Award 2021",
      "ISO 9001:2015 Certification",
      "Safety Excellence Award"
    ],
    keyProjects: [
      "Mumbai-Pune Highway Extension",
      "Industrial Park Development",
      "Metro Rail Infrastructure"
    ],
    color: "from-orange-600 to-red-600"
  },
  {
    id: 3,
    name: "SNS Technocrats",
    tagline: "Technology & Innovation Solutions",
    established: "2015",
    description: "SNS Technocrats focuses on cutting-edge technology solutions for the construction industry, including smart building systems and digital infrastructure.",
    website: "https://snstechnocrats.com",
    location: "Bangalore, Karnataka",
    employees: "80+",
    projects: "200+",
    image: "/api/placeholder/600/400",
    logo: "/api/placeholder/100/60",
    services: [
      "Smart Building Technology",
      "IoT Solutions",
      "Digital Infrastructure",
      "Automation Systems"
    ],
    achievements: [
      "Innovation Excellence Award 2022",
      "Best Tech Startup 2020",
      "Digital India Recognition"
    ],
    keyProjects: [
      "Smart City Solutions Platform",
      "Automated Construction Systems",
      "Digital Twin Technology"
    ],
    color: "from-green-600 to-teal-600"
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

export default function CompaniesPage() {
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
              Our <span className="text-construction-yellow">Companies</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Discover the diverse portfolio of companies under Starken Group, each specializing in different aspects of construction, real estate, and technology innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">3</div>
                <div className="text-sm">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">15+</div>
                <div className="text-sm">Years Combined</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">530+</div>
                <div className="text-sm">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">350+</div>
                <div className="text-sm">Projects</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {companies.map((company, index) => (
              <motion.div
                key={company.id}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Company Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative h-96 rounded-2xl overflow-hidden group">
                    <Image
                      src={company.image}
                      alt={company.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-80`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Image
                          src={company.logo}
                          alt={`${company.name} logo`}
                          width={120}
                          height={72}
                          className="mx-auto mb-4 filter brightness-0 invert"
                        />
                        <h3 className="text-3xl font-bold mb-2">{company.name}</h3>
                        <p className="text-lg">{company.tagline}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-3xl font-display font-bold text-gray-900">{company.name}</h2>
                      <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                        Est. {company.established}
                      </span>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">{company.description}</p>
                  </div>

                  {/* Company Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <MapPin className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                      <div className="text-sm text-gray-600">Location</div>
                      <div className="font-semibold text-gray-900">{company.location}</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <Users className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                      <div className="text-sm text-gray-600">Team</div>
                      <div className="font-semibold text-gray-900">{company.employees}</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <TrendingUp className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                      <div className="text-sm text-gray-600">Projects</div>
                      <div className="font-semibold text-gray-900">{company.projects}</div>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Core Services</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {company.services.map((service, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <div className="space-y-2">
                      {company.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <Award className="w-4 h-4 text-construction-orange mr-3" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Button variant="starken" size="lg">
                      <Globe className="w-4 h-4 mr-2" />
                      Visit Website
                    </Button>
                    <Button variant="outline" size="lg">
                      <Target className="w-4 h-4 mr-2" />
                      View Projects
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Group Synergy Section */}
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
              Stronger <span className="text-primary-600">Together</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our companies work in perfect synergy, combining their expertise to deliver comprehensive solutions that exceed expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-8 bg-primary-50 rounded-2xl"
            >
              <Building2 className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Integrated Solutions</h3>
              <p className="text-gray-600">
                From real estate development to technology integration, our companies provide end-to-end solutions for complex projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center p-8 bg-construction-orange/10 rounded-2xl"
            >
              <Users className="h-12 w-12 text-construction-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Shared Expertise</h3>
              <p className="text-gray-600">
                Our combined talent pool of 530+ professionals brings diverse skills and experience to every project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center p-8 bg-green-50 rounded-2xl"
            >
              <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Accelerated Growth</h3>
              <p className="text-gray-600">
                Together, we've achieved remarkable growth and continue to expand our reach across multiple sectors.
              </p>
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
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Discover how our group companies can collaborate to bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/industries">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Explore Industries
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