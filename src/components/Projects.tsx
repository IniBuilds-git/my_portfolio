"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

function Screenshot({ project }: { project: Project }) {
  const label = project.title.split("—")[0].trim();
  return (
    <div className="group relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-linear-to-br from-[hsl(var(--card))] to-[hsl(var(--background))] shadow-2xl">
      {/* faux browser chrome */}
      <div className="relative z-10 flex items-center gap-1.5 border-b border-[hsl(var(--border))] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
      </div>

      {project.liveUrl ? (
        <div className="relative h-[calc(100%-2.75rem)] w-full overflow-hidden bg-white">
          {}
          <iframe
            src={project.liveUrl}
            title={`${label} live preview`}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
            tabIndex={-1}
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
            style={{
              width: "200%",
              height: "200%",
              transform: "scale(0.5)",
            }}
          />
          {/* click overlay → open real site in a new tab */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${label} in a new tab`}
            className="absolute inset-0 z-10"
          />
        </div>
      ) : project.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={`${label} screenshot`}
          loading="lazy"
          className="h-[calc(100%-2.75rem)] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        <>
          <div className="flex h-[calc(100%-2.75rem)] items-center justify-center px-6 pb-8">
            <span className="text-center text-lg font-semibold accent-text">
              {label}
            </span>
          </div>
          {/* subtle grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] bg-size-[28px_28px]"
          />
          {/* teal glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-10 left-1/2 h-32 w-2/3 -translate-x-1/2 rounded-full bg-[hsl(var(--primary)/0.15)] blur-3xl"
          />
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <div className="space-y-20 lg:space-y-28">
      {projects.map((project, index) => {
        const imageRight = index % 2 === 1;
        return (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
          >
            {/* Screenshot */}
            <motion.div
              whileHover={{ y: -6, rotateX: 0, rotateY: 0 }}
              transition={{ duration: 0.4 }}
              className={`perspective-[1400px] ${imageRight ? "lg:order-2" : "lg:order-1"}`}
            >
              <div
                className="transition-transform duration-500 ease-out hover:transform-[rotateY(0deg)]"
                style={{
                  transform: imageRight
                    ? "rotateY(6deg) rotateX(2deg)"
                    : "rotateY(-6deg) rotateX(2deg)",
                }}
              >
                <Screenshot project={project} />
              </div>
            </motion.div>

            {/* Text */}
            <div className={imageRight ? "lg:order-1" : "lg:order-2"}>
              <h3 className="text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl">
                {project.title.split("—")[0].trim()}
              </h3>

              <p className="mt-4 max-w-xl text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">
                {project.description}
              </p>

              {/* Cyan pill tags (tech stack) */}
              <div className="mt-6 flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[hsl(var(--primary)/0.4)] bg-[hsl(var(--primary)/0.12)] px-4 py-1.5 text-sm font-medium text-[hsl(var(--primary))]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[hsl(var(--foreground))] px-4 py-2 text-sm font-medium text-[hsl(var(--background))] transition-transform hover:scale-105"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[hsl(var(--border))] px-4 py-2 text-sm font-medium text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))]"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
