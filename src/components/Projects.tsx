"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="bg-[#0d0d0d] border border-zinc-800/60 rounded-xl p-6 hover:border-zinc-700/60 transition-all min-h-[240px] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-[17px] font-medium text-white pr-4">
              {project.title}
            </h3>
            <div className="flex gap-3 text-[12px] text-zinc-500 flex-shrink-0">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors whitespace-nowrap">
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors whitespace-nowrap">
                  View
                </a>
              )}
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors whitespace-nowrap">
                  Demo
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-[13px] leading-[1.5] text-zinc-400 mb-4 flex-grow">
            {project.description}
          </p>

          {/* Tags */}
          <div className="space-y-2">
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-[11px] text-zinc-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Additional Tags */}
            {project.additionalTags && project.additionalTags.length > 0 && (
              <div className="flex flex-wrap gap-2 text-[11px] text-zinc-600">
                {project.additionalTags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            )}
          </div>

          {/* Badge */}
          {project.badge && (
            <div className="mt-3 pt-3 border-t border-zinc-800/60">
              <span className="text-[11px] text-zinc-600">{project.badge}</span>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}