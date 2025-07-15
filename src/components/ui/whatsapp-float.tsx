'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Phone } from 'lucide-react'

interface WhatsAppFloatProps {
  phoneNumber?: string
  message?: string
  position?: 'bottom-right' | 'bottom-left'
}

export function WhatsAppFloat({ 
  phoneNumber = "+919876543210", 
  message = "Hello! I'm interested in your construction services. Can you help me?",
  position = "bottom-right" 
}: WhatsAppFloatProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after a short delay when page loads
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    // Hide on very small screens to avoid interference
    const handleResize = () => {
      if (window.innerWidth < 320) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
    window.open(whatsappURL, '_blank')
    setIsOpen(false)
  }

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`, '_self')
    setIsOpen(false)
  }

  if (!isVisible) return null

  const positionClasses = position === 'bottom-right' 
    ? 'bottom-6 right-6' 
    : 'bottom-6 left-6'

  return (
    <div className={`fixed ${positionClasses} z-50 flex flex-col items-end space-y-3`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 max-w-sm mx-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Starken Group</div>
                  <div className="text-xs text-green-500 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                    Online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700">
                👋 Hi there! Need help with your construction project? 
                <br />
                <br />
                We're here to assist you with:
                <br />
                • Project consultation
                <br />
                • Cost estimation
                <br />
                • Design & planning
                <br />
                • Construction services
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg py-3 px-4 flex items-center justify-center space-x-2 transition-colors duration-200 font-medium"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </button>
              
              <button
                onClick={handlePhoneClick}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3 px-4 flex items-center justify-center space-x-2 transition-colors duration-200 font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </button>
            </div>

            {/* Footer */}
            <div className="text-xs text-gray-500 text-center mt-3">
              We typically reply within a few minutes
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      >
        {/* Pulse animation */}
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full"
          initial={{ scale: 1, opacity: 0.7 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Icon */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
        >
          <span className="text-xs text-white font-bold">1</span>
        </motion.div>
      </motion.button>
    </div>
  )
} 