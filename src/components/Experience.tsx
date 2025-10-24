"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const roles = [
    {
      company: "CarRecovery",
      role: "Backend Engineer / AI Integration",
      period: "2025 — Present",
      summary:
        "Building an AI-powered vehicle recovery platform with real-time tracking, automated dispatch, and intelligent customer support.",
      tags: ["Next.js", "NestJS", "AI", "AWS"],
    },
    {
      company: "SME AI Support Assistant",
      role: "AI + Backend Engineer",
      period: "2024 — Present",
      summary:
        "Engineering an intelligent RAG-based chatbot for Shopify/WooCommerce businesses to automate customer interactions at scale.",
      tags: ["LangChain", "FastAPI", "RAG", "PostgreSQL"],
    },
    {
      company: "Event Hub",
      role: "Backend & Infrastructure Engineer",
      period: "2023 — 2024",
      summary:
        "Built ticketing, wallet system, and real-time event management features for a full-stack Laravel/NestJS platform.",
      tags: ["Laravel", "NestJS", "MySQL", "Redis"],
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {roles.map((job, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="bg-[#0d0d0d] border border-zinc-800/60 rounded-xl p-6 hover:border-zinc-700/60 transition-all"
        >
          <div className="mb-3">
            <h3 className="text-[17px] font-medium text-white mb-1">{job.role}</h3>
            <div className="flex items-center justify-between text-[12px]">
              <span className="text-zinc-400">{job.company}</span>
              <span className="text-zinc-500">{job.period}</span>
            </div>
          </div>

          <p className="text-[13px] leading-[1.5] text-zinc-400 mb-4">
            {job.summary}
          </p>

          <div className="flex flex-wrap gap-2">
            {job.tags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-[11px] text-zinc-400"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}