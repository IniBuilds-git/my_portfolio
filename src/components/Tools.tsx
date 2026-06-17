"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { tools as SKILL_GROUPS } from "@/data/tools";

export default function Tools() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {SKILL_GROUPS.map((group, i) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35, delay: (i % 3) * 0.06 }}
          className="card-soft card-soft-hover p-5"
        >
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[hsl(var(--muted-foreground))]">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((tool) => (
              <span
                key={tool.name}
                className="inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-3 py-1.5 text-sm text-[hsl(var(--foreground))]"
              >
                <Icon icon={tool.icon} width="18" height="18" />
                {tool.name}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
