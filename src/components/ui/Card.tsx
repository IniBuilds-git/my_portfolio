'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={`bg-white rounded-xl border border-gray-200 p-6 ${hover ? 'hover:shadow-lg' : ''} transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}