"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-36 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-left leading-relaxed px-6 md:px-0"
      >
        <h1 className="text-[2.5rem] md:text-[3rem] font-medium text-zinc-900 dark:text-zinc-100 tracking-[-0.02em] leading-tight mb-4">
          Hey, I'm{" "}
          <span className="font-normal text-zinc-950 dark:text-white">
            Inioluwa
          </span>
        </h1>

        <p className="text-[1.05rem] md:text-[1.15rem] text-zinc-600 dark:text-zinc-400 mb-3">
          Software Engineer & AI Builder with 3 + years of experience building
          backend systems, cloud infrastructure, and intelligent automation for
          scalable products.
        </p>

        <p className="text-[1.05rem] md:text-[1.15rem] text-zinc-500 dark:text-zinc-500">
          Currently building{" "}
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">
            CarRecovery
          </span>{" "}
          and{" "}
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">
            SME Support Assistant.
          </span>
        </p>
      </motion.div>
    </section>
  );
}
