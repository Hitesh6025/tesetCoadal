"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SmoothCardProps {
  children: ReactNode
  className?: string
  hoverScale?: number
  hoverRotate?: number
  whileHover?: any
  whileTap?: any
}

export const SmoothCard = ({ 
  children, 
  className = '', 
  hoverScale = 1.02, 
  hoverRotate = 0,
  whileHover,
  whileTap
}: SmoothCardProps) => {
  const defaultHover = {
    scale: hoverScale,
    rotate: hoverRotate,
    y: -8,
    transition: {
      duration: 0.4,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }

  const defaultTap = {
    scale: 0.98,
    transition: {
      duration: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }

  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      whileHover={whileHover || defaultHover}
      whileTap={whileTap || defaultTap}
      transition={{
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
    >
      {children}
    </motion.div>
  )
}

interface SmoothButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
}

export const SmoothButton = ({ 
  children, 
  className = '', 
  onClick, 
  variant = 'primary' 
}: SmoothButtonProps) => {
  const baseStyles = 'relative overflow-hidden rounded-xl font-semibold transition-all duration-300'
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700',
    secondary: 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-800'
  }

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        y: -2,
        transition: {
          duration: 0.3,
          ease: [0.6, -0.05, 0.01, 0.99]
        }
      }}
      whileTap={{
        scale: 0.95,
        transition: {
          duration: 0.1,
          ease: [0.6, -0.05, 0.01, 0.99]
        }
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0"
        whileHover={{
          opacity: 1,
          x: ['-100%', '100%'],
          transition: {
            x: { duration: 0.6, ease: "linear" },
            opacity: { duration: 0.3 }
          }
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export const MagneticButton = ({ children, className = '', onClick }: MagneticButtonProps) => {
  return (
    <motion.button
      className={`relative ${className}`}
      onClick={onClick}
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.4,
          ease: [0.6, -0.05, 0.01, 0.99]
        }
      }}
      whileTap={{
        scale: 0.9,
        transition: {
          duration: 0.2,
          ease: [0.6, -0.05, 0.01, 0.99]
        }
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        
        e.currentTarget.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.1)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translate(0px, 0px) scale(1)'
      }}
    >
      {children}
    </motion.button>
  )
}
