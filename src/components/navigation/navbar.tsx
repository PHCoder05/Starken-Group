"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Building2, Phone, Mail, MapPin, Star, Award, Shield, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavItem {
  name: string
  href: string
  submenu?: NavItem[]
}

const starkenGroupNavItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Clients', href: '/clients' },
  { name: 'Career', href: '/career' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Blogs', href: '/blogs' },
]

// All nav items are primary now - no need for grouping
const primaryNavItems = starkenGroupNavItems

interface NavbarProps {
  siteType?: 'starken-group' | 'constroworld' | 'shrinidhi'
}

export default function Navbar({ siteType = 'starken-group' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

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
                <span>materials@starkengroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3" />
                <span>Warehouse: Mumbai, India</span>
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
              <Image
                src="/logo.jpg"
                alt="Starken Construction Materials Logo"
                width={48}
                height={48}
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain rounded-xl shadow-lg border border-white/20 bg-white"
                priority
              />
              <div>
                <div className="font-bold text-lg lg:text-xl text-gray-900">
                  Starken Group
                </div>
                <div className="text-xs text-gray-500 hidden lg:block">
                  Construction Materials
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {primaryNavItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-semibold"
                    onClick={closeMenus}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex">
              <Button 
                size="default" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="space-y-2">
                  {primaryNavItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                        onClick={closeMenus}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                  
                  {/* Mobile CTA Button */}
                  <div className="pt-4 border-t border-gray-200 mt-4">
                    <Button 
                      size="default" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                      asChild
                    >
                      <Link href="/contact" onClick={closeMenus}>Get Quote</Link>
                    </Button>
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