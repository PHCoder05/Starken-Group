'use client'

import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/layout/footer'
import { motion } from 'framer-motion'
import { Camera, Grid, Filter, Download, Share2, Calendar, MapPin, Building2, Users, Image as ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { useState } from 'react'

// Metadata is handled by layout.tsx for client components

const galleryCategories = [
  { id: 'all', name: 'All Photos', icon: Grid, count: 48 },
  { id: 'projects', name: 'Completed Projects', icon: Building2, count: 20 },
  { id: 'construction', name: 'Under Construction', icon: Users, count: 12 },
  { id: 'events', name: 'Company Events', icon: Calendar, count: 8 },
  { id: 'awards', name: 'Awards & Recognition', icon: Download, count: 8 },
]

const galleryItems = [
  {
    id: 1,
    title: "Skyline Residences - Aerial View",
    category: "projects",
    location: "Mumbai, Maharashtra",
    date: "December 2023",
    description: "Spectacular aerial view of our completed luxury residential complex featuring 200+ apartments with modern amenities.",
    image: "/api/placeholder/800/600",
    tags: ["Residential", "Completed", "Luxury", "Mumbai"]
  },
  {
    id: 2,
    title: "Metro Business Center - Grand Opening",
    category: "events",
    location: "Pune, Maharashtra",
    date: "November 2023",
    description: "Grand opening ceremony of Metro Business Center with distinguished guests and stakeholders celebrating the milestone.",
    image: "/api/placeholder/800/600",
    tags: ["Commercial", "Event", "Opening", "Celebration"]
  },
  {
    id: 3,
    title: "Highway Bridge Construction Progress",
    category: "construction",
    location: "Delhi-NCR",
    date: "October 2023",
    description: "Construction progress of the 5km highway bridge project showcasing advanced engineering and construction techniques.",
    image: "/api/placeholder/800/600",
    tags: ["Infrastructure", "Bridge", "Highway", "Construction"]
  },
  {
    id: 4,
    title: "Industry Leadership Award 2023",
    category: "awards",
    location: "New Delhi",
    date: "September 2023",
    description: "Receiving the prestigious Industry Leadership Award for excellence in construction and real estate development.",
    image: "/api/placeholder/800/600",
    tags: ["Award", "Recognition", "Leadership", "Achievement"]
  },
  {
    id: 5,
    title: "Green Valley Township - Phase 1",
    category: "projects",
    location: "Bangalore, Karnataka",
    date: "August 2023",
    description: "Eco-friendly residential township featuring sustainable living solutions and modern infrastructure.",
    image: "/api/placeholder/800/600",
    tags: ["Residential", "Eco-friendly", "Township", "Sustainable"]
  },
  {
    id: 6,
    title: "Team Building Event 2023",
    category: "events",
    location: "Lonavala, Maharashtra",
    date: "July 2023",
    description: "Annual team building event bringing together employees from all departments for collaboration and fun activities.",
    image: "/api/placeholder/800/600",
    tags: ["Team", "Event", "Building", "Collaboration"]
  },
  {
    id: 7,
    title: "Tech Park Complex Construction",
    category: "construction",
    location: "Hyderabad, Telangana",
    date: "June 2023",
    description: "Construction of modern IT park with Grade-A office spaces and world-class amenities for tech companies.",
    image: "/api/placeholder/800/600",
    tags: ["Commercial", "IT Park", "Construction", "Technology"]
  },
  {
    id: 8,
    title: "Safety Excellence Award",
    category: "awards",
    location: "Mumbai, Maharashtra",
    date: "May 2023",
    description: "Recognition for maintaining highest safety standards across all construction sites and achieving zero accidents.",
    image: "/api/placeholder/800/600",
    tags: ["Safety", "Award", "Excellence", "Recognition"]
  },
  {
    id: 9,
    title: "Metro Station Development",
    category: "projects",
    location: "Chennai, Tamil Nadu",
    date: "April 2023",
    description: "Modern metro station with passenger amenities, retail spaces, and integrated transportation facilities.",
    image: "/api/placeholder/800/600",
    tags: ["Infrastructure", "Metro", "Transportation", "Public"]
  },
  {
    id: 10,
    title: "Annual Company Meet 2023",
    category: "events",
    location: "Pune, Maharashtra",
    date: "March 2023",
    description: "Annual company meeting celebrating achievements, sharing future vision, and recognizing outstanding performers.",
    image: "/api/placeholder/800/600",
    tags: ["Annual", "Meet", "Company", "Achievement"]
  },
  {
    id: 11,
    title: "Smart City Infrastructure Progress",
    category: "construction",
    location: "Indore, Madhya Pradesh",
    date: "February 2023",
    description: "Progress on smart city infrastructure including roads, utilities, smart lighting, and digital connectivity systems.",
    image: "/api/placeholder/800/600",
    tags: ["Smart City", "Infrastructure", "Technology", "Development"]
  },
  {
    id: 12,
    title: "Innovation Excellence Award",
    category: "awards",
    location: "Bangalore, Karnataka",
    date: "January 2023",
    description: "Recognition for innovative construction technologies and digital transformation initiatives in the industry.",
    image: "/api/placeholder/800/600",
    tags: ["Innovation", "Technology", "Digital", "Excellence"]
  }
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const filteredImages = galleryItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  )

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
              Project <span className="text-construction-yellow">Gallery</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Explore our visual journey through completed projects, ongoing construction, company events, and milestone achievements that showcase our expertise and dedication.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">500+</div>
                <div className="text-gray-300">Project Photos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">50+</div>
                <div className="text-gray-300">Events Captured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">25+</div>
                <div className="text-gray-300">Award Moments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-yellow">15+</div>
                <div className="text-gray-300">Years Documented</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  Photo Categories
                </h2>
                <div className="flex flex-wrap gap-3">
                  {galleryCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-primary-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      {category.name}
                      <span className="text-xs bg-black/20 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <Button variant="outline" size="sm">
                  <Grid className="w-4 h-4 mr-2" />
                  View
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Card className="group h-full hover:shadow-construction transition-all duration-300 overflow-hidden cursor-pointer"
                      onClick={() => setSelectedImage(item)}>
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full">
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                        <Camera className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                      <div className="flex items-center gap-2 text-white/80 text-xs">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Images Found</h3>
              <p className="text-gray-600">
                No images match your current filter criteria. Try selecting a different category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
             onClick={() => setSelectedImage(null)}>
          <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden"
               onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                width={800}
                height={600}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                    {selectedImage.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedImage.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {selectedImage.date}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{selectedImage.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {selectedImage.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

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
              Want to See Your Project Featured?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join our growing portfolio of successful projects and let us help bring your vision to life with the same excellence you see here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                Download Gallery
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer siteType="starken-group" />
    </div>
  )
} 