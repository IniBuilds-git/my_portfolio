"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

type NavLink = { label: string; id: string; type: "section" | "route" };

const links: NavLink[] = [
  { label: "Home", id: "home", type: "section" },
  { label: "Experience", id: "experience", type: "section" },
  { label: "Projects", id: "projects", type: "section" },
  { label: "Skills", id: "skills", type: "section" },
  { label: "Blog", id: "blog", type: "route" },
  { label: "Contact", id: "contact", type: "section" },
];

// The three tab views share one scroll region (#work), so scroll position
// can't distinguish them — the active tab is driven by the URL hash instead.
const TAB_IDS = ["experience", "projects", "skills"];

export default function Nav() {
  const pathname = usePathname();
  const onBlog = pathname?.startsWith("/blog") ?? false;
  const { theme, toggleTheme } = useTheme();

  // On the homepage, active state is computed from scroll/hash.
  // On /blog routes, "Blog" is always active and section links point back home.
  const [active, setActive] = useState(onBlog ? "blog" : "home");

  useEffect(() => {
    if (onBlog) {
      setActive("blog");
      return;
    }

    const compute = () => {
      const y = window.scrollY + 120;
      const workEl = document.getElementById("work");
      const contactEl = document.getElementById("contact");
      const hash = window.location.hash.replace("#", "");

   
      if (hash === "contact") {
        setActive("contact");
        return;
      }
      if (contactEl && contactEl.offsetTop <= y) {
        setActive("contact");
        return;
      }
      if (workEl && workEl.offsetTop <= y) {
        setActive(TAB_IDS.includes(hash) ? hash : "experience");
        return;
      }
      setActive("home");
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("hashchange", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("hashchange", compute);
    };
  }, [onBlog]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-5 z-50 flex justify-center px-4"
    >
      <nav className="flex items-center gap-1 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card)/0.7)] p-1.5 shadow-lg backdrop-blur-md">
        {links.map((l) => {
          const isActive = active === l.id;
          // Section links resolve to a hash on the homepage, or /#id from /blog.
          const href =
            l.type === "route"
              ? "/blog"
              : onBlog
                ? `/#${l.id}`
                : `#${l.id}`;
          const className = `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            isActive
              ? "text-[hsl(var(--background))]"
              : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
          }`;
          const inner = (
            <>
              {isActive && (
                <motion.span
                  layoutId="navActive"
                  className="absolute inset-0 rounded-full bg-[hsl(var(--foreground))]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </>
          );

          // Use a real Link for cross-route navigation; plain anchor for same-page hashes.
          return l.type === "route" || onBlog ? (
            <Link key={l.id} href={href} className={className}>
              {inner}
            </Link>
          ) : (
            <a key={l.id} href={href} className={className}>
              {inner}
            </a>
          );
        })}

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          className="ml-1 flex h-9 w-9 items-center justify-center rounded-full text-[hsl(var(--muted-foreground))] transition-colors hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>
      </nav>
    </motion.header>
  );
}
