'use client'

import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Building2, User, MessageSquare, Globe, Star, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    projectType: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        projectType: ''
      })
    }, 3000)
  }

  const officeInfo = {
    address: "Office No. 5, 2nd Floor, Sai Plaza, Plot No. 123, Sector 15, CBD Belapur, Navi Mumbai - 400614",
    city: "Navi Mumbai, Maharashtra, India",
    phone: "+91 98765 43210",
    email: "info@starkengroup.com",
    hours: "Monday - Saturday: 9:00 AM - 6:00 PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.180775334068!2d73.01576507523134!3d19.037355354286784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3c48b9b3b7b%3A0x4a4c4a4c4a4c4a4c!2sCBD%20Belapur%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1641234567890!5m2!1sen!2sin"
  }

  const services = [
    "Residential Construction",
    "Commercial Development", 
    "Industrial Infrastructure",
    "Real Estate Development",
    "Project Management",
    "Interior Design",
    "Architecture Services",
    "Consultation Services",
    "Other"
  ]

  const budgetRanges = [
    "Under ₹50 Lakhs",
    "₹50 Lakhs - ₹1 Crore",
    "₹1 Crore - ₹5 Crores",
    "₹5 Crores - ₹10 Crores",
    "₹10 Crores - ₹50 Crores",
    "Above ₹50 Crores"
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Speak directly with our experts",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@starkengroup.com", "projects@starkengroup.com"],
      description: "Send us detailed project requirements",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: MapPin,
      title: "Visit Office",
      details: ["Navi Mumbai", "Maharashtra, India"],
      description: "Meet our team in person",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Globe,
      title: "Online Support",
      details: ["24/7 Chat Support", "Quick Response"],
      description: "Get instant assistance online",
      color: "from-purple-500 to-purple-600"
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
                Get In 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400"> Touch</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Ready to start your construction project? Contact our expert team 
                for consultation, quotes, and professional guidance.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-slate-300">Support Available</div>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Clock className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">&lt;2h</div>
                <div className="text-sm text-slate-300">Response Time</div>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Shield className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-slate-300">Confidential</div>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-slate-300">Happy Clients</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
                Multiple Ways to Connect
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the most convenient way to reach us. Our team is ready to assist 
                you with your construction and real estate needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  >
                    <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                      <CardContent className="p-8">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${method.color} mb-6`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {method.title}
                        </h3>
                        
                        <div className="space-y-2 mb-4">
                          {method.details.map((detail, idx) => (
                            <div key={idx} className="text-gray-700 font-medium">
                              {detail}
                            </div>
                          ))}
                        </div>
                        
                        <p className="text-gray-600 text-sm">
                          {method.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Send Us a Message
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Fill out the form below and we'll get back to you within 24 hours with a detailed response.
                  </p>
                </motion.div>

                <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Required *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Please describe your project requirements, timeline, location, and any specific needs..."
                      />
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : isSubmitted ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span>Message Sent!</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </motion.form>
              </motion.div>

              {/* Office Info & Map */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="space-y-8"
              >
                {/* Office Information */}
                <motion.div variants={itemVariants}>
                  <Card className="bg-white border-0 shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Office Information
                      </h3>
                      
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                            <p className="text-gray-600 leading-relaxed">{officeInfo.address}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Phone className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                            <p className="text-gray-600">{officeInfo.phone}</p>
                            <p className="text-sm text-gray-500">Available for immediate assistance</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mail className="w-6 h-6 text-orange-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                            <p className="text-gray-600">{officeInfo.email}</p>
                            <p className="text-sm text-gray-500">We respond within 2 hours</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Clock className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                            <p className="text-gray-600">{officeInfo.hours}</p>
                            <p className="text-sm text-gray-500">Emergency support: 24/7</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Google Maps */}
                <motion.div variants={itemVariants}>
                  <Card className="bg-white border-0 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <div className="h-80 w-full">
                        <iframe
                          src={officeInfo.mapUrl}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Starken Group Office Location"
                        ></iframe>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900">Visit Our Office</h4>
                            <p className="text-sm text-gray-600">Click for directions</p>
                          </div>
                          <Button
                            variant="outline"
                            className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"
                            onClick={() => window.open('https://maps.google.com/?q=CBD+Belapur+Navi+Mumbai', '_blank')}
                          >
                            Get Directions
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Have Questions?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our expert team is ready to help you with any questions about your construction project.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2h</div>
                  <div className="text-gray-600">Average Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-500">24/7</div>
                  <div className="text-gray-600">Emergency Support</div>
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