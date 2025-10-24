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
    <section className="w-full max-w-[1400px] mx-auto px-8 md:px-16 py-8">
      {/* Tab Navigation */}
      <div className="flex items-center gap-0 mb-10 text-[13px]">
        {tabs.map((tab, idx) => {
          const isActive = active === tab;
          return (
            <div key={tab} className="flex items-center">
              <button
                onClick={() => setActive(tab)}
                className={`transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {tab}
              </button>
              {idx < tabs.length - 1 && (
                <span className="text-zinc-700 mx-2">|</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {active === "Projects" && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Projects />
          </motion.div>
        )}
        {active === "Experience" && (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Experience />
          </motion.div>
        )}
        {active === "Tools" && (
          <motion.div
            key="tools"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Tools />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}