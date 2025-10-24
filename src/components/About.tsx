"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
      >
        I’m passionate about building scalable backend systems, cloud-secure
        infrastructures, and AI-powered applications. I love solving problems
        that improve digital experiences and streamline complex workflows.
      </motion.p>
    </section>
  );
}
