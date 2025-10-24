"use client";
import { motion } from "framer-motion";
import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-xl md:text-[22px] font-medium text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h3>
        <p className="text-zinc-500 dark:text-zinc-500 text-xs mt-1 tracking-wide">
          {project.status}
        </p>
      </div>

      <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-2xl">
        {project.description}
      </p>

      {project.tags?.length > 0 && (
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[14px] text-zinc-500 dark:text-zinc-400">
          {project.tags.map((tag, i) => (
            <span key={i} className="opacity-80">{tag}</span>
          ))}
        </div>
      )}

      {(project.liveUrl || project.githubUrl) && (
        <div className="flex gap-6 pt-1">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="text-zinc-800 dark:text-zinc-200 underline underline-offset-4 decoration-zinc-400 hover:decoration-zinc-200 dark:decoration-zinc-500 dark:hover:decoration-zinc-300"
            >
              Live →
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="text-zinc-800 dark:text-zinc-200 underline underline-offset-4 decoration-zinc-400 hover:decoration-zinc-200 dark:decoration-zinc-500 dark:hover:decoration-zinc-300"
            >
              GitHub →
            </motion.a>
          )}
        </div>
      )}
    </div>
  );
}
