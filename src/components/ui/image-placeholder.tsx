'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Building2, Home, Factory, Image as ImageIcon, Loader2 } from 'lucide-react'

interface ImagePlaceholderProps {
  width?: number
  height?: number
  alt?: string
  className?: string
  type?: 'residential' | 'commercial' | 'infrastructure' | 'general'
  showIcon?: boolean
  gradientFrom?: string
  gradientTo?: string
}

const getIconByType = (type: string) => {
  switch (type) {
    case 'residential':
      return Home
    case 'commercial':
      return Building2
    case 'infrastructure':
      return Factory
    default:
      return ImageIcon
  }
}

const getGradientByType = (type: string) => {
  switch (type) {
    case 'residential':
      return 'from-property-green-500 to-property-green-600'
    case 'commercial':
      return 'from-premium-blue-500 to-premium-blue-600'
    case 'infrastructure':
      return 'from-elegant-gray-500 to-elegant-gray-600'
    default:
      return 'from-luxury-gold-500 to-luxury-gold-600'
  }
}

export default function ImagePlaceholder({
  width = 600,
  height = 400,
  alt = 'Image placeholder',
  className,
  type = 'general',
  showIcon = true,
  gradientFrom,
  gradientTo
}: ImagePlaceholderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const Icon = getIconByType(type)
  const gradientClass = gradientFrom && gradientTo 
    ? `from-${gradientFrom} to-${gradientTo}` 
    : getGradientByType(type)

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg bg-gradient-to-br',
        gradientClass,
        'flex items-center justify-center transition-all duration-300 hover:shadow-lg',
        className
      )}
      style={{ width, height }}
      role="img"
      aria-label={alt}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white">
        {isLoading && (
          <Loader2 className="w-8 h-8 animate-spin mb-2" />
        )}
        
        {showIcon && !isLoading && (
          <Icon className="w-12 h-12 mb-3 opacity-80" />
        )}
        
        <div className="text-center px-4">
          <div className="text-lg font-semibold opacity-90">
            {width} × {height}
          </div>
          <div className="text-sm opacity-70 mt-1 capitalize">
            {type} Image
          </div>
        </div>
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  )
}

// Higher-order component for image loading
interface SmartImageProps {
  src?: string
  fallbackType?: 'residential' | 'commercial' | 'infrastructure' | 'general'
  width?: number
  height?: number
  alt?: string
  className?: string
}

export function SmartImage({
  src,
  fallbackType = 'general',
  width = 600,
  height = 400,
  alt = 'Image',
  className
}: SmartImageProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(!!src)

  // Always show placeholder for /api/placeholder URLs or missing src
  if (!src || src.includes('/api/placeholder') || imageError) {
    return (
      <ImagePlaceholder
        width={width}
        height={height}
        alt={alt}
        className={className}
        type={fallbackType}
      />
    )
  }

  return (
    <div className="relative">
      {imageLoading && (
        <div className="absolute inset-0 z-10">
          <ImagePlaceholder
            width={width}
            height={height}
            alt="Loading..."
            className={className}
            type={fallbackType}
          />
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'transition-opacity duration-300 object-cover',
          imageLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
        onLoad={() => setImageLoading(false)}
        onError={() => {
          setImageError(true)
          setImageLoading(false)
        }}
      />
    </div>
  )
} 