"use client"

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation, type Variants } from 'framer-motion'

export const useScrollAnimation = (threshold = 0.1, once = true) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: threshold, once })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [isInView, controls])

  return { ref, controls }
}

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60
  },
  visible: { 
    opacity: 1, 
    y: 0
  }
}

export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60
  },
  visible: { 
    opacity: 1, 
    x: 0
  }
}

export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60
  },
  visible: { 
    opacity: 1, 
    x: 0
  }
}

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8
  },
  visible: { 
    opacity: 1, 
    scale: 1
  }
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

export const slideInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 100
  },
  visible: { 
    opacity: 1, 
    y: 0
  }
}

export const AnimatedSection = motion.section
export const AnimatedDiv = motion.div
export const AnimatedH1 = motion.h1
export const AnimatedH2 = motion.h2
export const AnimatedH3 = motion.h3
export const AnimatedP = motion.p
