"use client";
import { motion } from "framer-motion";

export default function Tools() {
  const categories = [
    {
      title: "Languages",
      items: [
        { name: "TypeScript", icon: "devicon-typescript-plain" },
        { name: "Python", icon: "devicon-python-plain" },
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "PHP", icon: "devicon-php-plain" },
        { name: "SQL", icon: "devicon-mysql-plain" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        { name: "Next.js", icon: "devicon-nextjs-original" },
        { name: "NestJS", icon: "devicon-nestjs-plain" },
        { name: "Laravel", icon: "devicon-laravel-plain" },
        { name: "React", icon: "devicon-react-original" },
        { name: "LangChain", icon: "devicon-python-plain" },
      ],
    },
    {
      title: "Cloud & Infra",
      items: [
        { name: "AWS", icon: "devicon-amazonwebservices-original" },
        { name: "Vercel", icon: "devicon-vercel-original" },
        { name: "Docker", icon: "devicon-docker-plain" },
        { name: "NGINX", icon: "devicon-nginx-original" },
        { name: "GitHub Actions", icon: "devicon-github-original" },
      ],
    },
    {
      title: "AI / ML",
      items: [
        { name: "RAG", icon: "devicon-python-plain" },
        { name: "FAISS", icon: "devicon-python-plain" },
        { name: "OpenAI", icon: "devicon-openai-original" },
        { name: "LangGraph", icon: "devicon-python-plain" },
      ],
    },
  ];

  return (
    <section className="grid md:grid-cols-2 gap-16">
      {categories.map((cat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.06 }}
        >
          <h3 className="text-lg font-medium mb-3">{cat.title}</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[15px] text-zinc-500 dark:text-zinc-400">
            {cat.items.map((tool, i) => (
              <span key={i} className="flex items-center gap-2 hover:text-zinc-200 transition">
                <i className={`${tool.icon} text-[18px] opacity-80`}></i>
                {tool.name}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
