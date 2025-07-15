"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Building2, Phone, Mail, MapPin, Star, Award, Shield, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavItem {
  name: string
  href: string
  submenu?: NavItem[]
}

const starkenGroupNavItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about',
    submenu: [
      { name: 'Company Overview', href: '/about' },
      { name: 'Our Team', href: '/about/team' },
      { name: 'Milestones', href: '/about/milestones' },
      { name: 'Certifications', href: '/about/certifications' },
      { name: 'Gallery', href: '/about/gallery' },
    ]
  },
  { 
    name: 'Services', 
    href: '/services',
    submenu: [
      { name: 'Infrastructure', href: '/services/infrastructure' },
      { name: 'Residential', href: '/services/residential' },
      { name: 'Commercial', href: '/services/commercial' },
      { name: 'Engineering', href: '/services/engineering' },
      { name: 'Consultation', href: '/services/consultation' },
    ]
  },
  { name: 'Projects', href: '/projects' },
  { name: 'Companies', href: '/companies' },
  { name: 'Industries', href: '/industries' },
  { name: 'Clients', href: '/clients' },
  { name: 'Career', href: '/career' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

// Group nav items for better organization on smaller screens
const primaryNavItems = starkenGroupNavItems.slice(0, 6) // Home, About, Services, Projects, Companies, Industries
const secondaryNavItems = starkenGroupNavItems.slice(6) // Clients, Career, Blog, Contact

interface NavbarProps {
  siteType?: 'starken-group' | 'constroworld' | 'shrinidhi'
}

export default function Navbar({ siteType = 'starken-group' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showMoreMenu, setShowMoreMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setActiveDropdown(null)
  }

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const closeMenus = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
    setShowMoreMenu(false)
  }

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-slate-900 text-white text-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>info@starkengroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3" />
                <span>Mumbai, India</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Shield className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 text-yellow-400" />
                <span className="text-yellow-400">15+ Years Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" 
          : "bg-white shadow-sm"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3" onClick={closeMenus}>
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="w-2 h-2 text-white" />
                </div>
              </motion.div>
              <div className="hidden sm:block">
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  Starken
                </span>
                <br />
                <span className="text-xs lg:text-sm text-gray-600 font-medium">
                  Group
                </span>
                <span className="ml-1 text-xs text-orange-500">Construction Excellence</span>
              </div>
            </Link>

            {/* Desktop Navigation - Responsive Layout */}
            <div className="hidden lg:flex items-center">
              {/* Primary Navigation Items */}
              <div className="flex items-center space-x-1 xl:space-x-2">
                {primaryNavItems.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.submenu ? (
                      <button
                        className="flex items-center space-x-1 px-3 xl:px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm xl:text-base"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="px-3 xl:px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm xl:text-base"
                      >
                        {item.name}
                      </Link>
                    )}

                    {/* Dropdown Menu */}
                    {item.submenu && (
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-1 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                            onMouseEnter={() => setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm"
                                onClick={closeMenus}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}

                {/* More Menu for Secondary Items */}
                <div className="relative">
                  <button
                    className="flex items-center space-x-1 px-3 xl:px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm xl:text-base"
                    onMouseEnter={() => setShowMoreMenu(true)}
                    onMouseLeave={() => setShowMoreMenu(false)}
                  >
                    <MoreHorizontal className="w-4 h-4" />
                    <span className="hidden xl:inline">More</span>
                  </button>

                  <AnimatePresence>
                    {showMoreMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-1 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                        onMouseEnter={() => setShowMoreMenu(true)}
                        onMouseLeave={() => setShowMoreMenu(false)}
                      >
                        {secondaryNavItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 text-sm"
                            onClick={closeMenus}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* CTA Button */}
              <div className="ml-4 xl:ml-6">
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white px-4 xl:px-6 py-2 text-sm xl:text-base shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.location.href = '/contact'}
                >
                  <span className="hidden xl:inline">Get Quote</span>
                  <span className="xl:hidden">Quote</span>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <Button 
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-3 py-1.5 text-xs"
                onClick={() => window.location.href = '/contact'}
              >
                Quote
              </Button>
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-200 shadow-lg"
            >
              <div className="container mx-auto px-4 py-4 max-h-[80vh] overflow-y-auto">
                <div className="space-y-2">
                  {starkenGroupNavItems.map((item) => (
                    <div key={item.name}>
                      {item.submenu ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              className={cn(
                                "w-4 h-4 transition-transform duration-200",
                                activeDropdown === item.name && "rotate-180"
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 space-y-1 py-2">
                                  {item.submenu.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 text-sm"
                                      onClick={closeMenus}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                          onClick={closeMenus}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>info@starkengroup.com</span>
                    </div>
                    <div className="flex items-center space-x-2 text-emerald-600">
                      <Shield className="w-4 h-4" />
                      <span>ISO 9001:2015 Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
} 