"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const roles = [
    {
      company: "CarRecovery (In Progress)",
      role: "Backend Engineer / AI Integration",
      period: "2025 — Present",
      summary:
        "Building an AI-powered vehicle recovery platform with real-time tracking, automated dispatch, and intelligent customer support.",
    },
    {
      company: "SME AI Support Assistant",
      role: "AI + Backend Engineer",
      period: "2024 — Present",
      summary:
        "Engineering an intelligent RAG-based chatbot for Shopify/WooCommerce businesses to automate customer interactions at scale.",
    },
    {
      company: "Event Hub — SaaS Platform",
      role: "Backend & Infrastructure Engineer",
      period: "2023 — 2024",
      summary:
        "Built ticketing, wallet system, and real-time event management features for a full-stack Laravel/NestJS platform.",
    },
  ];

  return (
    <section className="space-y-10">
      {roles.map((job, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="space-y-1"
        >
          <h3 className="text-lg font-medium text-white">{job.role}</h3>
          <p className="text-gray-400 text-sm">{job.company} — {job.period}</p>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl">
            {job.summary}
          </p>
        </motion.div>
      ))}
    </section>
  );
}
