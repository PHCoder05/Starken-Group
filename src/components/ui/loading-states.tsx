'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Loader2, Building2 } from 'lucide-react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'luxury' | 'minimal'
  text?: string
  className?: string
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6', 
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
}

export function LoadingSpinner({ 
  size = 'md', 
  variant = 'default',
  text,
  className 
}: LoadingSpinnerProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-3', className)}>
      {variant === 'luxury' ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className={cn(
            'rounded-full bg-gradient-to-r from-luxury-gold-500 to-warm-beige-600 p-1',
            sizeClasses[size]
          )}
        >
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
            <Building2 className={cn(
              'text-luxury-gold-600',
              size === 'sm' && 'w-2 h-2',
              size === 'md' && 'w-3 h-3',
              size === 'lg' && 'w-4 h-4',
              size === 'xl' && 'w-6 h-6'
            )} />
          </div>
        </motion.div>
      ) : variant === 'minimal' ? (
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className={cn(
                'bg-luxury-gold-500 rounded-full',
                size === 'sm' && 'w-1 h-1',
                size === 'md' && 'w-2 h-2',
                size === 'lg' && 'w-3 h-3',
                size === 'xl' && 'w-4 h-4'
              )}
            />
          ))}
        </div>
      ) : (
        <Loader2 className={cn(
          'animate-spin text-luxury-gold-600',
          sizeClasses[size]
        )} />
      )}
      
      {text && (
        <p className="text-sm text-gray-600 font-medium">{text}</p>
      )}
    </div>
  )
}

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'rectangular' | 'circular' | 'card'
  animation?: boolean
}

export function Skeleton({ 
  className, 
  variant = 'rectangular',
  animation = true 
}: SkeletonProps) {
  const baseClasses = cn(
    'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]',
    animation && 'animate-[shimmer_1.5s_ease-in-out_infinite]'
  )

  switch (variant) {
    case 'text':
      return <div className={cn(baseClasses, 'h-4 w-full rounded', className)} />
    case 'circular':
      return <div className={cn(baseClasses, 'w-12 h-12 rounded-full', className)} />
    case 'card':
      return (
        <div className={cn('space-y-4 p-6', className)}>
          <Skeleton variant="rectangular" className="h-48 w-full" />
          <div className="space-y-2">
            <Skeleton variant="text" className="w-3/4" />
            <Skeleton variant="text" className="w-1/2" />
          </div>
        </div>
      )
    default:
      return <div className={cn(baseClasses, 'h-6 w-full rounded', className)} />
  }
}

interface PageLoadingProps {
  message?: string
}

export function PageLoading({ message = "Loading..." }: PageLoadingProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center space-y-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <LoadingSpinner size="xl" variant="luxury" />
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-2"
        >
          <h2 className="text-2xl font-bold text-gray-900">Please wait</h2>
          <p className="text-gray-600">{message}</p>
        </motion.div>
      </div>
    </div>
  )
}

interface CardSkeletonProps {
  count?: number
  className?: string
}

export function CardSkeleton({ count = 3, className }: CardSkeletonProps) {
  return (
    <div className={cn('grid gap-6', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden"
        >
          <Skeleton variant="card" />
        </motion.div>
      ))}
    </div>
  )
}

interface ProjectSkeletonProps {
  count?: number
}

export function ProjectSkeleton({ count = 6 }: ProjectSkeletonProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden"
        >
          <div className="space-y-4">
            {/* Image skeleton */}
            <Skeleton className="h-48 w-full rounded-t-2xl rounded-b-none" />
            
            {/* Content skeleton */}
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <Skeleton variant="text" className="w-3/4 h-5" />
                <Skeleton variant="text" className="w-1/2 h-4" />
              </div>
              
              <div className="space-y-2">
                <Skeleton variant="text" className="w-full h-4" />
                <Skeleton variant="text" className="w-2/3 h-4" />
              </div>
              
              {/* Tags skeleton */}
              <div className="flex gap-2">
                <Skeleton className="w-16 h-6 rounded-full" />
                <Skeleton className="w-20 h-6 rounded-full" />
                <Skeleton className="w-12 h-6 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

interface LoadingOverlayProps {
  isVisible: boolean
  message?: string
  onCancel?: () => void
}

export function LoadingOverlay({ 
  isVisible, 
  message = "Processing...",
  onCancel 
}: LoadingOverlayProps) {
  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm w-full mx-4"
      >
        <div className="text-center space-y-6">
          <LoadingSpinner size="lg" variant="luxury" />
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">Please wait</h3>
            <p className="text-gray-600">{message}</p>
          </div>
          
          {onCancel && (
            <button
              onClick={onCancel}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
} 