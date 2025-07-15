"use client"

import { motion } from 'framer-motion'
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/about/team' },
  { name: 'Milestones', href: '/about/milestones' },
  { name: 'Certifications', href: '/about/certifications' },
  { name: 'Gallery', href: '/about/gallery' },
]

const servicesLinks = [
  { name: 'Infrastructure', href: '/services/infrastructure' },
  { name: 'Residential', href: '/services/residential' },
  { name: 'Commercial', href: '/services/commercial' },
  { name: 'Engineering', href: '/services/engineering' },
  { name: 'Consultation', href: '/services/consultation' },
]

const quickLinks = [
  { name: 'Projects', href: '/projects' },
  { name: 'Industries', href: '/industries' },
  { name: 'Clients', href: '/clients' },
  { name: 'Career', href: '/career' },
  { name: 'Blog', href: '/blog' },
]

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
]

const subsidiaries = [
  { name: 'Starken Constroworld', href: 'https://starkencw.com', description: 'Trading & Products' },
  { name: 'Shrinidhi Innotech', href: 'https://shrinidhiipl.com', description: 'Innovation & Technology' },
]

interface FooterProps {
  siteType?: 'starken-group' | 'constroworld' | 'shrinidhi'
}

export default function Footer({ siteType = 'starken-group' }: FooterProps) {
  const getSiteInfo = () => {
    switch (siteType) {
      case 'constroworld':
        return {
          name: 'Starken Constroworld',
          description: 'Leading provider of construction materials and trading solutions.',
          email: 'info@starkencw.com',
          phone: '+91 9876543210',
          address: 'Mumbai, Maharashtra, India'
        }
      case 'shrinidhi':
        return {
          name: 'Shrinidhi Innotech',
          description: 'Innovation and technology solutions for modern construction.',
          email: 'info@shrinidhiipl.com',
          phone: '+91 9876543211',
          address: 'Bangalore, Karnataka, India'
        }
      default:
        return {
          name: 'Starken Group',
          description: 'Leading construction and real estate development company transforming landscapes across India.',
          email: 'info@starkenventure.com',
          phone: '+91 9876543212',
          address: 'Corporate Office: Mumbai, Maharashtra, India'
        }
    }
  }

  const siteInfo = getSiteInfo()

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-construction-pattern opacity-5" />
      
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-primary-600 to-construction-orange">
          <div className="max-w-7xl mx-auto container-padding py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                Stay Updated with Our Latest Projects
              </h3>
              <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for updates on new projects, industry insights, and company news.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button variant="secondary" size="default" className="group">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto container-padding py-16">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Building2 className="h-8 w-8 text-primary-400" />
                  <div className="absolute -inset-1 bg-primary-400/20 rounded-lg blur" />
                </div>
                <span className="font-display font-bold text-xl text-white">
                  {siteInfo.name}
                </span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {siteInfo.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">{siteInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-300">{siteInfo.phone}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{siteInfo.address}</span>
                </div>
              </div>

              {/* Awards */}
              <div className="mt-6 p-4 bg-gray-800 rounded-xl border border-gray-700">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="w-5 h-5 text-construction-yellow" />
                  <span className="font-semibold text-white">ISO Certified Company</span>
                </div>
                <p className="text-gray-400 text-xs">
                  Quality management systems certified to international standards
                </p>
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {servicesLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links & Subsidiaries */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3 mb-8">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {siteType === 'starken-group' && (
                <>
                  <h4 className="font-bold text-white mb-4">Group Companies</h4>
                  <div className="space-y-3">
                    {subsidiaries.map((subsidiary) => (
                      <div key={subsidiary.name} className="group">
                        <Link
                          href={subsidiary.href}
                          className="text-primary-400 hover:text-primary-300 font-medium text-sm block"
                        >
                          {subsidiary.name}
                        </Link>
                        <p className="text-gray-400 text-xs">{subsidiary.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto container-padding py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
            >
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm mr-2">Follow us:</span>
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
                    >
                      <IconComponent className="w-4 h-4" />
                    </motion.a>
                  )
                })}
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
} 