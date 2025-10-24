"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="space-y-16 md:space-y-20">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
          transition={{ duration: 0.35, delay: index * 0.05 }}
          className="pt-6 border-t border-zinc-200/60 dark:border-white/10 first:pt-0 first:border-t-0"
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </section>
  );
}
