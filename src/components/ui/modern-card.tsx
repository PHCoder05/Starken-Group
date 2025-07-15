'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface ModernCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'luxury' | 'property' | 'premium' | 'glass'
  hoverEffect?: 'lift' | 'glow' | 'tilt' | 'scale' | 'none'
  gradient?: boolean
  glowColor?: string
  onClick?: () => void
}

const variantStyles = {
  default: 'bg-white border border-border shadow-md',
  luxury: 'bg-gradient-to-br from-luxury-gold-50 to-warm-beige-100 border border-luxury-gold-200 shadow-xl',
  property: 'bg-gradient-to-br from-property-green-50 to-emerald-100 border border-property-green-200 shadow-xl',
  premium: 'bg-gradient-to-br from-premium-blue-50 to-blue-100 border border-premium-blue-200 shadow-xl',
  glass: 'bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl'
}

const hoverEffects = {
  lift: 'hover:-translate-y-2 hover:shadow-2xl',
  glow: 'hover:shadow-glow-lg',
  tilt: 'hover:rotate-1 hover:scale-105',
  scale: 'hover:scale-105',
  none: ''
}

export function ModernCard({ 
  children, 
  className, 
  variant = 'default',
  hoverEffect = 'lift',
  gradient = false,
  glowColor,
  onClick
}: ModernCardProps) {
  return (
    <motion.div
      whileHover={{ 
        y: hoverEffect === 'lift' ? -8 : 0,
        scale: hoverEffect === 'scale' ? 1.05 : 1,
        rotateY: hoverEffect === 'tilt' ? 5 : 0
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        'rounded-2xl p-6 transition-all duration-300 cursor-pointer group relative overflow-hidden',
        variantStyles[variant],
        hoverEffects[hoverEffect],
        gradient && 'bg-gradient-to-br from-white via-gray-50 to-gray-100',
        className
      )}
      style={glowColor ? { '--glow-color': glowColor } as React.CSSProperties : undefined}
      onClick={onClick}
    >
      {/* Gradient overlay for enhanced visual appeal */}
      {variant !== 'glass' && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Floating elements for luxury effect */}
      {variant === 'luxury' && (
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-luxury-gold-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
      )}
    </motion.div>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  imageType?: 'residential' | 'commercial' | 'infrastructure'
  location?: string
  status?: string
  size?: string
  price?: string
  features?: string[]
  onClick?: () => void
  className?: string
}

export function ProjectCard({
  title,
  description,
  image,
  imageType = 'commercial',
  location,
  status,
  size,
  price,
  features = [],
  onClick,
  className
}: ProjectCardProps) {
  return (
    <ModernCard 
      variant="default" 
      hoverEffect="lift" 
      className={cn('group cursor-pointer', className)}
      onClick={onClick}
    >
      {/* Image Section */}
      {image && (
        <div className="relative h-48 -m-6 mb-6 rounded-t-2xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Status Badge */}
          {status && (
            <div className="absolute top-4 left-4">
              <span className={cn(
                'px-3 py-1 rounded-full text-xs font-semibold',
                status === 'Completed' && 'bg-property-green-500 text-white',
                status === 'Ongoing' && 'bg-luxury-gold-500 text-white',
                status === 'Upcoming' && 'bg-premium-blue-500 text-white'
              )}>
                {status}
              </span>
            </div>
          )}
          
          {/* Price Badge */}
          {price && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-white/90 text-gray-900 text-xs font-bold">
                {price}
              </span>
            </div>
          )}
        </div>
      )}
      
      {/* Content Section */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-luxury-gold-600 transition-colors">
            {title}
          </h3>
          {location && (
            <p className="text-sm text-gray-500 mt-1 flex items-center">
              <span className="w-1 h-1 bg-gray-400 rounded-full mr-2" />
              {location}
            </p>
          )}
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Details */}
        {size && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Size:</span>
            <span className="font-semibold text-gray-900">{size}</span>
          </div>
        )}
        
        {/* Features */}
        {features.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
              >
                {feature}
              </span>
            ))}
            {features.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                +{features.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </ModernCard>
  )
}

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features?: string[]
  price?: string
  popular?: boolean
  onClick?: () => void
  className?: string
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features = [],
  price,
  popular = false,
  onClick,
  className
}: ServiceCardProps) {
  return (
    <ModernCard 
      variant={popular ? "luxury" : "default"}
      hoverEffect="lift"
      className={cn('relative', className)}
      onClick={onClick}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-luxury-gold-500 text-white px-4 py-1 rounded-full text-xs font-bold">
            POPULAR
          </span>
        </div>
      )}
      
      <div className="space-y-6">
        {/* Icon */}
        <div className={cn(
          'w-14 h-14 rounded-2xl flex items-center justify-center',
          popular 
            ? 'bg-luxury-gold-500 text-white' 
            : 'bg-premium-blue-500 text-white'
        )}>
          <Icon className="w-7 h-7" />
        </div>
        
        {/* Header */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
        
        {/* Price */}
        {price && (
          <div className="border-t border-gray-200 pt-4">
            <div className="text-2xl font-bold text-gray-900">{price}</div>
          </div>
        )}
        
        {/* Features */}
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-property-green-500 rounded-full mr-3" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </ModernCard>
  )
} 