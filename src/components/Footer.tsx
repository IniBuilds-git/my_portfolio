'use client'

import { motion } from 'framer-motion'
import Container from './ui/Container'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {currentYear} inioluwa.com
          </div>
          <div className="flex space-x-6">
            {['Email', 'GitHub', 'LinkedIn'].map((item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </Container>
    </footer>
  )
}