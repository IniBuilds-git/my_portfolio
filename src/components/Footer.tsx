"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const email = "inioluwa.eng@gmail.com";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/IniBuilds-git", Icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/inioluwa-alake/", Icon: Linkedin },
  { name: "Email", url: `mailto:${email}`, Icon: Mail },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-24 pb-12 pt-10">
      <div className="mx-auto max-w-3xl px-6">
        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-3xl">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-[hsl(var(--muted-foreground))]">
            I&apos;m open to backend, full-stack, and AI engineering roles and
            collaborations. The fastest way to reach me is by email.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-6 py-3 text-sm font-medium text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))]"
          >
            <FileText className="h-4 w-4" />
            View résumé
          </a>
        </motion.div>

        {/* Profile card — rython.dev inspired */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="glow-card mt-12 px-6 py-12 text-center sm:px-12"
        >
          {/* Avatar with teal ring */}
          <div className="mx-auto h-28 w-28 overflow-hidden rounded-full p-1 ring-2 ring-[hsl(var(--primary)/0.6)]">
            <Image
              src="/profile.jpg"
              alt="Inioluwa Alake"
              width={112}
              height={112}
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <h3 className="mt-6 text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]">
            Inioluwa Alake
          </h3>
          <p className="mt-1 text-[15px] text-[hsl(var(--muted-foreground))]">
            Software &amp; AI Engineer
          </p>

          {/* Email + socials row */}
          <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-7">
            <div className="text-left">
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Email me at:</p>
              <a
                href={`mailto:${email}`}
                className="text-[15px] font-medium text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--primary))]"
              >
                {email}
              </a>
            </div>

            <span
              aria-hidden
              className="hidden h-12 w-px bg-[hsl(var(--border))] sm:block"
            />

            <div className="flex items-center gap-3">
              {socialLinks.map(({ name, url, Icon }) => (
                <a
                  key={name}
                  href={url}
                  target={name === "Email" ? undefined : "_blank"}
                  rel={name === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] transition-colors hover:border-[hsl(var(--primary)/0.5)] hover:text-[hsl(var(--primary))]"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <p className="mt-8 text-center text-sm text-[hsl(var(--muted-foreground))]">
          © {currentYear} Inioluwa Alake. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
