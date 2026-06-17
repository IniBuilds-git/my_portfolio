"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, GraduationCap, FlaskConical, ExternalLink } from "lucide-react";
import { experiences } from "@/data/experience";
import type { ExperienceCategory } from "@/types";

const categories: { id: ExperienceCategory; label: string; Icon: typeof Briefcase }[] = [
  { id: "Experience", label: "Experience", Icon: Briefcase },
  { id: "Education", label: "Education", Icon: GraduationCap },
  { id: "Research", label: "Research", Icon: FlaskConical },
];

export default function Experience() {
  const [active, setActive] = useState<ExperienceCategory>("Experience");
  const items = experiences.filter((e) => e.category === active);

  return (
    <div>
      {/* Category selector — full-width segmented (rython style) */}
      <div className="mb-10 grid grid-cols-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card)/0.5)] p-1">
        {categories.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`relative flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "text-[hsl(var(--foreground))]"
                  : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="expCategory"
                  className="absolute inset-0 rounded-lg bg-[hsl(var(--muted))]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon className="h-4 w-4" />
                {label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[hsl(var(--border))] sm:left-[9px]" />

        <div className="space-y-5">
          {items.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* dot */}
              <span className="absolute left-0 top-5 h-3.5 w-3.5 rounded-full border-2 border-[hsl(var(--primary))] bg-[hsl(var(--background))] sm:h-[18px] sm:w-[18px]" />

              <div className="card-soft card-soft-hover p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold leading-snug text-[hsl(var(--foreground))]">
                      {exp.role}
                    </h3>
                    <p className="mt-0.5 text-sm text-[hsl(var(--muted-foreground))]">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap items-center gap-2">
                    <span className="rounded-full pill px-2.5 py-0.5 text-xs font-medium">
                      {exp.period}
                    </span>
                    {exp.year && (
                      <span className="rounded-full bg-[hsl(var(--primary-soft))] px-2.5 py-0.5 text-xs font-medium text-[hsl(var(--primary))]">
                        {exp.year}
                      </span>
                    )}
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                  {exp.description}
                </p>

                {exp.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-[hsl(var(--muted))] px-2 py-1 font-mono text-xs text-[hsl(var(--muted-foreground))]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {exp.achievements.map((a, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                        {a}
                      </li>
                    ))}
                  </ul>
                )}

                {exp.link && (
                  <a
                    href={exp.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(var(--primary))] transition-colors hover:text-[hsl(var(--foreground))]"
                  >
                    {exp.link.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
