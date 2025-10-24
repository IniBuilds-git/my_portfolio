"use client";
import { motion } from "framer-motion";

export default function Tools() {
  const categories = [
    {
      title: "Languages",
      items: ["TypeScript", "Python", "JavaScript", "PHP", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      items: ["Next.js", "NestJS", "Laravel", "React", "LangChain"],
    },
    {
      title: "Cloud & Infrastructure",
      items: ["AWS", "Vercel", "Docker", "NGINX", "GitHub Actions"],
    },
    {
      title: "AI / ML",
      items: ["RAG", "FAISS", "OpenAI", "LangGraph", "Vector DBs"],
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
    },
    {
      title: "Tools & Others",
      items: ["Git", "Linux", "CI/CD", "Microservices", "REST APIs"],
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {categories.map((cat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="bg-[#0d0d0d] border border-zinc-800/60 rounded-xl p-6 hover:border-zinc-700/60 transition-all"
        >
          <h3 className="text-[15px] font-medium text-white mb-4">{cat.title}</h3>
          <ul className="space-y-2.5">
            {cat.items.map((tool, i) => (
              <li key={i} className="text-[13px] text-zinc-400 flex items-center gap-2.5">
                <span className="text-zinc-600">▸</span>
                {tool}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}