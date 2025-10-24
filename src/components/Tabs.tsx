"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "./Projects";
import Experience from "./Experience";
import Tools from "./Tools";

const tabs = ["Projects", "Experience", "Tools"];

export default function Tabs() {
  const [active, setActive] = useState("Projects");

  return (
    <section className="pt-6">
      {/* top rule */}
      <div className="border-b border-zinc-200/50 dark:border-white/10" />

      {/* tab row */}
<div className="mt-16 md:mt-20 pb-28">
        {tabs.map((tab) => {
          const isActive = active === tab;
          return (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`pb-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition ${
                isActive ? "text-zinc-900 dark:text-zinc-100" : ""
              }`}
            >
              <span className="relative">
                {tab}
                {isActive && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute left-0 right-0 -bottom-[10px] h-[1.5px] bg-zinc-900 dark:bg-zinc-100"
                  />
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* content */}
<div className="mt-20 md:mt-24 pb-32">
        <AnimatePresence mode="wait">
          {active === "Projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <Projects />
            </motion.div>
          )}
          {active === "Experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <Experience />
            </motion.div>
          )}
          {active === "Tools" && (
            <motion.div
              key="tools"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <Tools />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
