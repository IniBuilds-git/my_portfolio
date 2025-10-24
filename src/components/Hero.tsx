"use client";

import { motion } from "framer-motion";
import Container from "./ui/Container";
import Section from "./ui/Section";
import { Themetoggle } from "./Themetoggle";

export default function Hero() {
  return (
    <Section className="min-h-screen flex items-center relative">
      <Container>
        <div className="absolute top-6 right-6">
          <Themetoggle />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-gray-900"
          >
            Hey, I'm <span className="gradient-text">Inioluwa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed"
          >
            Software Engineer with 4+ years of experience designing APIs,
            architecting secure data systems, and deploying high-availability
            infrastructure — and an active AI Builder.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-500 mb-12"
          >
            Currently building{" "}
            <span className="font-semibold text-gray-800">CarRecovery</span> and{" "}
            <span className="font-semibold text-gray-800">SME Customer Support AI Assistant</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
