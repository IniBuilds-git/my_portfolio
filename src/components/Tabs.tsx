"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Projects from "./Projects";
import Experience from "./Experience";
import Tools from "./Tools";

type TabType = "experience" | "projects" | "skills";

const tabs: { id: TabType; label: string }[] = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

const tabContent: Record<TabType, React.ReactNode> = {
  experience: <Experience />,
  projects: <Projects />,
  skills: <Tools />,
};

const headings: Record<TabType, { title: string; subtitle: string }> = {
  experience: {
    title: "Where I've worked & learned",
    subtitle: "My professional journey, education, and the things I do outside work.",
  },
  projects: {
    title: "Things I've built",
    subtitle: "A selection of products and systems I've designed and shipped.",
  },
  skills: {
    title: "My toolkit",
    subtitle: "The languages, frameworks, and platforms I reach for.",
  },
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<TabType>("experience");

  // Let nav anchors (#experience / #projects / #skills) drive the active tab.
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "experience" || hash === "projects" || hash === "skills") {
        setActiveTab(hash);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  return (
    <section id="work" className="scroll-mt-24 py-16 lg:py-24">
      {/* Anchor targets so each nav link lands here and selects its tab */}
      <span id="experience" className="block -mt-24 pt-24" aria-hidden />
      <span id="projects" className="block -mt-24 pt-24" aria-hidden />
      <span id="skills" className="block -mt-24 pt-24" aria-hidden />

      <div className="mx-auto max-w-6xl px-6">
        {/* Tab buttons */}
        <div className="mx-auto mb-10 flex w-fit items-center gap-1 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-1 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                history.replaceState(null, "", `#${tab.id}`);
                // replaceState doesn't emit hashchange — notify the nav manually.
                window.dispatchEvent(new HashChangeEvent("hashchange"));
              }}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
              }`}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-[hsl(var(--primary))]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Heading for the active tab */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-3xl">
            {headings[activeTab].title}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-[15px] text-[hsl(var(--muted-foreground))]">
            {headings[activeTab].subtitle}
          </p>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
