"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail, Globe, Hand } from "lucide-react";
import Typewriter from "./Typewriter";

const AVATAR_SRC = "/profile.jpg";

const socials = [
  { name: "GitHub", href: "https://github.com/IniBuilds-git", Icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/inioluwa-alake/", Icon: Linkedin },
  { name: "Website", href: "https://inioluwaalake.com", Icon: Globe },
  { name: "Email", href: "mailto:inioluwa.eng@gmail.com", Icon: Mail },
];

const fade: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

function Avatar() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[hsl(var(--primary))] to-emerald-600 text-2xl font-bold text-[hsl(var(--primary-foreground))] shadow-lg shadow-[hsl(var(--primary)/0.25)]">
        IA
      </div>
    );
  }

  return (
    <Image
      src={AVATAR_SRC}
      alt="Inioluwa Alake"
      width={80}
      height={80}
      priority
      onError={() => setFailed(true)}
      className="h-20 w-20 shrink-0 rounded-2xl object-cover shadow-lg shadow-[hsl(var(--primary)/0.25)] ring-1 ring-[hsl(var(--primary)/0.3)]"
    />
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative px-6 pt-28 pb-4 lg:pt-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glow-card px-7 py-8 sm:px-10 sm:py-10"
        >
          {/* Avatar + name/role row */}
          <div className="flex items-center gap-5">
            <motion.div
              custom={0}
              variants={fade}
              initial="hidden"
              animate="show"
            >
              <Avatar />
            </motion.div>
            <motion.div custom={1} variants={fade} initial="hidden" animate="show">
              <h1 className="text-2xl font-bold accent-text sm:text-3xl">
                Inioluwa Alake
              </h1>
              <p className="mt-0.5 text-lg text-[hsl(var(--muted-foreground))]">
                <Typewriter words={["Software Engineer", "AI Engineer"]} />
              </p>
            </motion.div>
          </div>

          {/* Greeting */}
          <motion.h2
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-7 text-2xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-3xl"
          >
            <span className="inline-flex items-center gap-2">
              Hey, I&apos;m Inioluwa
              <Hand className="h-6 w-6 text-[hsl(var(--primary))]" />
            </span>
          </motion.h2>

          {/* Bio */}
          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-4 max-w-xl space-y-3 text-[15px] leading-relaxed text-[hsl(var(--muted-foreground))]"
          >
            <p>
              Software Engineer with 4+ years of experience building scalable
              full-stack and backend systems across fintech, logistics, gaming, and
              AI-powered products. I specialise in PHP/Laravel, Node.js, TypeScript,
              REST APIs, multi-tenant platforms, and production-ready services that
              are secure, reliable, and easy to maintain.
            </p>
            <p>
              Beyond traditional engineering, I work at the frontier of applied AI,
              designing and shipping LLM-powered features, RAG pipelines, and
              intelligent systems into real-world applications. I approach AI
              engineering as a product craft: turning powerful models into dependable
              tools that solve practical problems.
            </p>
            <p className="text-[hsl(var(--foreground))]">
              Based in the United Kingdom.
            </p>
          </motion.div>

          {/* Social icon buttons */}
          <motion.div
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-7 flex items-center gap-3"
          >
            {socials.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target={name === "Email" ? undefined : "_blank"}
                rel={name === "Email" ? undefined : "noopener noreferrer"}
                aria-label={name}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[hsl(var(--foreground))] text-[hsl(var(--background))] transition-transform hover:scale-105"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Connector line dropping to the content below */}
        <div className="mx-auto h-16 w-px bg-linear-to-b from-[hsl(var(--border))] to-transparent" />
      </div>
    </section>
  );
}
