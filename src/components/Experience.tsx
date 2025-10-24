'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './ui/AnimatedSection'
import { experiences } from '@/data/experience'

export default function Experience() {
  return (
    <div className="space-y-12">
      {experiences.map((experience, index) => (
        <AnimatedSection key={experience.id} delay={0}>
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="border-t border-gray-200 dark:border-gray-800 pt-12 first:border-t-0 first:pt-0"
          >
            {/* Header with role and period */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {experience.role}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {experience.company} • {experience.period}
                </p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium">
                  {experience.year}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
              {experience.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.15 }}
                  className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Achievements */}
            {experience.achievements && experience.achievements.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </AnimatedSection>
      ))}
    </div>
  )
}