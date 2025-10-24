'use client'

import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { Moon, Sun } from 'lucide-react'

export function Themetoggle() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="relative p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.2 }}
      >
        {theme === 'light' ? (
          <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        ) : (
          <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        )}
      </motion.div>
    </motion.button>
  )
}