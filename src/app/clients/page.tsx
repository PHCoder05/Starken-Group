'use client'

import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { Building2, Star, Quote, CheckCircle, Users, TrendingUp, Award, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

// Metadata is handled by layout.tsx for client components

const clientCategories = [
  {
    name: "Government & PSUs",
    clients: [
      { name: "NHPC Limited", logo: "https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Power Generation" },
      { name: "NHAI", logo: "https://images.pexels.com/photos/461073/pexels-photo-461073.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Highway Infrastructure" },
      { name: "Delhi Development Authority", logo: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Urban Development" },
      { name: "Reserve Bank of India", logo: "https://images.pexels.com/photos/259600/pexels-photo-259600.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Banking" },
      { name: "Indian Railways", logo: "https://images.pexels.com/photos/221357/pexels-photo-221357.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Transportation" },
      { name: "AIIMS", logo: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Healthcare" }
    ]
  },
  {
    name: "Corporate Giants",
    clients: [
      { name: "Reliance Industries", logo: "https://images.pexels.com/photos/257447/pexels-photo-257447.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Petrochemicals" },
      { name: "L&T Limited", logo: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Engineering" },
      { name: "Tata Group", logo: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Conglomerate" },
      { name: "Tech Mahindra", logo: "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "IT Services" },
      { name: "Wipro", logo: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Technology" },
      { name: "Infosys", logo: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "IT Services" }
    ]
  },
  {
    name: "Healthcare & Education",
    clients: [
      { name: "Apollo Hospitals", logo: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Healthcare" },
      { name: "Fortis Healthcare", logo: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Medical Services" },
      { name: "Manipal Group", logo: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Education" },
      { name: "Symbiosis International", logo: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Education" },
      { name: "Bharti Vidyapeeth", logo: "https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Education" },
      { name: "KEM Hospital", logo: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Healthcare" }
    ]
  },
  {
    name: "Real Estate & Retail",
    clients: [
      { name: "Godrej Properties", logo: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Real Estate" },
      { name: "Phoenix Mills", logo: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Retail" },
      { name: "Oberoi Realty", logo: "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Real Estate" },
      { name: "Brigade Group", logo: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Real Estate" },
      { name: "DLF Limited", logo: "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Real Estate" },
      { name: "Prestige Group", logo: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=600", sector: "Real Estate" }
    ]
  }
]

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "Project Director",
    company: "NHPC Limited",
    image: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Starken Group's expertise in construction materials supply has been instrumental in our project success. Their quality AAC blocks and cement have exceeded our expectations.",
    rating: 5,
    project: "Power Plant Construction - 10,000+ Tons Material Supply"
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Senior Manager",
    company: "L&T Limited",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "The reliability and consistency of Starken's construction materials have made them our preferred supplier for multiple projects. Excellent quality control and timely delivery.",
    rating: 5,
    project: "Infrastructure Development - 500+ Metric Tons Materials"
  },
  {
    id: 3,
    name: "Amit Patel",
    position: "Operations Head",
    company: "Tata Group",
    image: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Starken's comprehensive range of construction materials from readymix plaster to electrical components has streamlined our procurement process significantly.",
    rating: 5,
    project: "Commercial Complex - 2,000+ Tonnes Cement & Materials"
  },
  {
    id: 4,
    name: "Dr. Sunita Mehta",
    position: "Infrastructure Head",
    company: "Apollo Hospitals",
    image: "https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "For our healthcare facility construction, Starken provided medical-grade materials and specialized adhesives that met all our stringent quality requirements.",
    rating: 5,
    project: "Healthcare Facility - Medical Grade Materials Supply"
  }
];

const stats = [
  { label: "Satisfied Clients", value: "200+", icon: Users },
  { label: "Project Success Rate", value: "98%", icon: CheckCircle },
  { label: "Client Retention", value: "85%", icon: TrendingUp },
  { label: "Industry Awards", value: "15+", icon: Award }
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
  visible: { opacity: 1, y: 0 }
}

export default function ClientsPage() {
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
              Our <span className="text-construction-yellow">Clients</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Trusted by leading organizations across industries, we've built lasting partnerships through exceptional service and uncompromising quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-6 bg-gray-50 rounded-2xl"
                >
                  <IconComponent className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Client Portfolio */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Trusted by <span className="text-primary-600">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From government organizations to Fortune 500 companies, our diverse client portfolio reflects our versatility and excellence.
            </p>
          </motion.div>

          <div className="space-y-16">
            {clientCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                  {category.clients.map((client, clientIndex) => (
                    <motion.div
                      key={clientIndex}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-glow transition-all duration-300 group"
                    >
                      <div className="aspect-w-3 aspect-h-2 mb-4">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={200}
                          height={100}
                          className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm text-center mb-1">{client.name}</h4>
                      <p className="text-xs text-gray-500 text-center">{client.sector}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our <span className="text-primary-600">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from real clients who have experienced our commitment to excellence firsthand.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="bg-gray-50 p-8 rounded-2xl relative"
              >
                <Quote className="h-8 w-8 text-primary-600 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

                {/* Project */}
                <div className="bg-primary-50 p-3 rounded-lg mb-6">
                  <p className="text-sm text-primary-800 font-medium">
                    <Building2 className="h-4 w-4 inline mr-2" />
                    {testimonial.project}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    <p className="text-primary-600 text-sm font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Approach */}
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
              Our Partnership <span className="text-primary-600">Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in building long-term relationships that go beyond individual projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-8 bg-white rounded-2xl shadow-sm"
            >
              <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaborative Approach</h3>
              <p className="text-gray-600">
                We work closely with our clients as partners, understanding their vision and contributing our expertise to achieve shared success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center p-8 bg-white rounded-2xl shadow-sm"
            >
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                Our rigorous quality control processes ensure that every project meets the highest standards and exceeds client expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center p-8 bg-white rounded-2xl shadow-sm"
            >
              <Globe className="h-12 w-12 text-construction-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">End-to-End Support</h3>
              <p className="text-gray-600">
                From initial consultation to post-completion support, we provide comprehensive services throughout the project lifecycle.
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
              Join Our Growing Family of Satisfied Clients
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Experience the difference of working with a trusted partner who puts your success first.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Learn About Us
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