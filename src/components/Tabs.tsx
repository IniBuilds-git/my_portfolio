'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Container from './ui/Container'
import Section from './ui/Section'
import { useState } from 'react'
import Projects from './Projects'
import Experience from './Experience'
import Tools from './Tools'


type TabType = 'projects' | 'experience' | 'tools'

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<TabType>('projects')

  const tabs = [
    { id: 'projects' as TabType, label: 'Projects', count: 5 },
    { id: 'experience' as TabType, label: 'Experience', count: 4 },
    { id: 'tools' as TabType, label: 'Tools', count: 12 },
  ]

  const tabContent = {
    projects: <Projects />,
    experience: <Experience/>,
    tools: <Tools />,
  }

  return (
    <Section id="work" className="min-h-screen">
      <Container>
        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Work & Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore my projects, professional experience, and the technologies I work with
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'text-gray-900 dark:text-gray-100'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{tab.label}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    activeTab === tab.id
                      ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                  }`}>
                    {tab.count}
                  </span>
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  )
}