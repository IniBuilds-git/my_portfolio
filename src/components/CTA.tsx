"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-40 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-semibold mb-6"
      >
        Let’s work together
      </motion.h2>
      <motion.a
        href="mailto:yourname@email.com"
        whileHover={{ scale: 1.05 }}
        className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full text-lg hover:bg-gray-700 transition"
      >
        Get in Touch
      </motion.a>
    </section>
  );
}
