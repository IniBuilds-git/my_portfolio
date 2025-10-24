"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full max-w-[1400px] mx-auto px-8 md:px-16 py-12 mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-between text-[12px] text-zinc-600"
      >
        <p>© {year} chizi.app</p>
        
        <div className="flex gap-6">
          <a href="mailto:your@email.com" className="hover:text-zinc-400 transition-colors">
            Email
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">
            LinkedIn
          </a>
        </div>
      </motion.div>
    </footer>
  );
}