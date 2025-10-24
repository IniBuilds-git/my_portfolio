"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-16">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs text-zinc-500 dark:text-zinc-500"
      >
        © {year} — Inioluwa
      </motion.p>
    </footer>
  );
}
