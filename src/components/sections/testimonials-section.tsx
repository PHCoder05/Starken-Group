"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight, Building, Award, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "Procurement Head",
    company: "DLF India",
    image: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Starken's commitment to delivering high-quality construction materials is truly commendable. Their AAC blocks and adhesives have significantly improved our project efficiency and structural integrity.",
    rating: 5,
    project: "Commercial Projects",
    value: "10,000+ Tons Supplied"
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Quality Control Manager",
    company: "Tata Housing",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "The consistency and quality of readymix plaster from Starken have been a game-changer for our finishing work. Their reliable supply chain has helped us stay on schedule without any compromise on quality.",
    rating: 5,
    project: "Residential Complexes",
    value: "500+ Metric Tons"
  },
  {
    id: 3,
    name: "Amit Patel",
    position: "Lead Engineer",
    company: "L&T Construction",
    image: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Starken's rebar couplers and high-grade cement have met our stringent technical requirements for large-scale infrastructure projects. Their material expertise and support are invaluable.",
    rating: 5,
    project: "Infrastructure Projects",
    value: "2,000+ Tonnes of Cement"
  },
  {
    id: 4,
    name: "Sunita Mehta",
    position: "Purchase Manager",
    company: "Prestige Group",
    image: "https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "We rely on Starken for a wide range of materials, from electrical wiring to specialized tile adhesives. Their comprehensive product range and commitment to quality make them our preferred supplier.",
    rating: 5,
    project: "Mixed-Use Developments",
    value: "1,000+ SKU's Procured"
  }
]

const clientLogos = [
  { name: "DLF India", logo: "https://images.pexels.com/photos/2239655/pexels-photo-2239655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Tata Housing", logo: "https://images.pexels.com/photos/2239655/pexels-photo-2239655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "L&T Construction", logo: "https://images.pexels.com/photos/2239655/pexels-photo-2239655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Prestige Group", logo: "https://images.pexels.com/photos/2239655/pexels-photo-2239655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Godrej Properties", logo: "https://images.pexels.com/photos/2239655/pexels-photo-2239655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Omaxe Ltd", logo: "https://images.pexels.com/photos/2239655/pexels-photo-2239655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-starken-blue via-starken-blue-dark to-starken-orange relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:30px_30px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold mb-6">
            <Users className="w-5 h-5 mr-2" />
            Client Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            What Our Clients{" "}
            <span className="text-construction-yellow">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from the industry leaders and organizations 
            who have trusted us with their most important projects.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Quote Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-construction-yellow rounded-full flex items-center justify-center">
                  <Quote className="w-10 h-10 text-starken-blue" />
                </div>
              </div>
              
              {/* Testimonial Content */}
              <div className="flex-1 text-center lg:text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed italic">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    
                    <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-construction-yellow text-construction-yellow" />
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                      <div className="text-center lg:text-left">
                        <div className="font-bold text-white text-lg">
                          {testimonials[currentTestimonial].name}
                        </div>
                        <div className="text-gray-300">
                          {testimonials[currentTestimonial].position}
                        </div>
                        <div className="text-construction-yellow font-semibold">
                          {testimonials[currentTestimonial].company}
                        </div>
                      </div>
                      <div className="hidden sm:block w-px h-12 bg-white/20" />
                      <div className="text-center lg:text-left">
                        <div className="text-white font-medium">
                          {testimonials[currentTestimonial].project}
                        </div>
                        <div className="text-construction-yellow font-bold">
                          {testimonials[currentTestimonial].value}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Navigation */}
              <div className="flex-shrink-0 flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="border-white/30 text-white hover:bg-white/20 rounded-full p-3"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="border-white/30 text-white hover:bg-white/20 rounded-full p-3"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-3 mb-16"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-construction-yellow scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="h-12 flex items-center justify-center">
                  <div className="text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                    {client.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 