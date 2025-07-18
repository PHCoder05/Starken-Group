"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, MapPin, Clock, CheckCircle, Star, Package, Truck, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ctaFeatures = [
  {
    icon: Package,
    text: "Free Material Consultation"
  },
  {
    icon: Star,
    text: "ISO Certified Quality"
  },
  {
    icon: Truck,
    text: "On-Time Delivery Guarantee"
  }
]

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-starken-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-starken-orange/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-property-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-starken-blue/10 to-starken-orange/10 text-starken-blue text-sm font-semibold mb-6">
                <Calculator className="w-5 h-5 mr-2" />
                Get Your Quote Now
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
                Need Quality Materials{" "}
                <span className="heading-gradient">For Your Project?</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Get competitive quotes for bulk construction materials and enjoy volume discounts. 
                Our experts will help you choose the right materials for your project with 
                quality assurance and timely delivery.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {ctaFeatures.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-starken-blue to-starken-orange rounded-xl flex items-center justify-center shadow-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Direct Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-starken-blue" />
                  <span className="text-gray-700">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-starken-blue" />
                  <span className="text-gray-700">materials@starkengroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-starken-blue" />
                  <span className="text-gray-700">Warehouse locations across India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main CTA Card */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-starken-blue/10 to-starken-orange/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Get Material Quote
                </h3>
                <p className="text-gray-600 mb-8">
                  Fill out the form and our material experts will provide you with competitive pricing within 24 hours.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company/Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-starken-blue focus:border-transparent transition-all duration-200"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-starken-blue focus:border-transparent transition-all duration-200"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-starken-blue focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Materials Required
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-starken-blue focus:border-transparent transition-all duration-200">
                      <option value="">Select material type</option>
                      <option value="aac-blocks">AAC Blocks</option>
                      <option value="cement">Cement</option>
                      <option value="plaster">Readymix Plaster</option>
                      <option value="rebar-coupler">Rebar Coupler</option>
                      <option value="adhesives">Adhesives & Grouts</option>
                      <option value="electrical">Electrical Solutions</option>
                      <option value="fasteners">Anchors & Fasteners</option>
                      <option value="automation">Home Automation</option>
                      <option value="multiple">Multiple Materials</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Quantity & Project Details
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-starken-blue focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Specify quantities needed, project timeline, delivery location, and any special requirements..."
                    />
                  </div>

                  <div className="space-y-4">
                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full bg-gradient-to-r from-starken-blue to-starken-orange hover:from-starken-orange hover:to-starken-blue font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      Get Material Quote
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <div className="flex items-center justify-center space-x-4">
                      <Button 
                        variant="outline" 
                        size="default"
                        className="border-2 border-starken-blue text-starken-blue hover:bg-starken-blue hover:text-white font-semibold"
                        asChild
                      >
                        <a href="/products">View Products</a>
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="default"
                        className="text-starken-blue hover:bg-starken-blue/10 font-semibold"
                        asChild
                      >
                        <a href="/about">About Us</a>
                      </Button>
                    </div>
                  </div>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-500">
                    🔒 Your information is secure and will never be shared with third parties.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-starken-orange/20 to-construction-orange/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-starken-blue/20 to-property-green-500/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 