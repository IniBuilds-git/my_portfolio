'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './ui/AnimatedSection'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <div className="space-y-20">
      {projects.map((project, index) => (
        <AnimatedSection key={project.id} delay={0}>
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-300 dark:border-gray-700 pt-12 first:border-t-0 first:pt-0"
          >
            {/* Project Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-0 text-gray-1200 dark:text-gray-1200">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.15 }}
                    className="px-3 py-1 bg-gray-900 dark:bg-gray-800 border border-gray-900 dark:border-gray-700 text-white dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Project Description */}
            <p className="text-gray-1200 dark:text-gray-1200 text-lg md:text-xl mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Additional Tags */}
            {project.additionalTags && project.additionalTags.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {project.additionalTags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-gray-1200 dark:text-gray-1200 text-sm font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Project Links */}
            {(project.githubUrl || project.liveUrl) && (
              <div className="flex gap-4 mt-6">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="px-4 py-2 border-2 border-gray-900 dark:border-gray-600 text-gray-1200 dark:text-gray-1200 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </motion.a>
                )}
              </div>
            )}
          </motion.div>
        </AnimatedSection>
      ))}
    </div>
  )
}