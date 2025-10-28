// src/components/Themetoggle.tsx
'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/components/ThemeProvider'
import { Sun } from 'lucide-react'

export default function Themetoggle() {
  const { setTheme } = useTheme()

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme('light')} // ✅ never sets "dark"
      className="relative p-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
      aria-label="Theme toggle (light only)"
      title="Light mode only"
    >
      <Sun className="h-5 w-5" />
    </motion.button>
  )
}
