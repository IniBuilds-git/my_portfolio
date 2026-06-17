"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Section links resolve to a hash on the homepage, or /#id from /blog.
  const hrefFor = (l: NavLink) =>
    l.type === "route" ? "/blog" : onBlog ? `/#${l.id}` : `#${l.id}`;

  const themeToggle = (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="flex h-9 w-9 items-center justify-center rounded-full text-[hsl(var(--muted-foreground))] transition-colors hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );

  const activeLabel = links.find((l) => l.id === active)?.label ?? "Menu";

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-5 z-50 flex justify-center px-4"
    >
      {/* Desktop: full pill nav */}
      <nav className="hidden items-center gap-1 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card)/0.7)] p-1.5 shadow-lg backdrop-blur-md sm:flex">
        {links.map((l) => {
          const isActive = active === l.id;
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
          return l.type === "route" || onBlog ? (
            <Link key={l.id} href={hrefFor(l)} className={className}>
              {inner}
            </Link>
          ) : (
            <a key={l.id} href={hrefFor(l)} className={className}>
              {inner}
            </a>
          );
        })}
        <span className="ml-1">{themeToggle}</span>
      </nav>

      {/* Mobile: compact bar + dropdown */}
      <div className="w-full max-w-sm sm:hidden">
        <nav className="flex items-center justify-between gap-1 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card)/0.7)] px-2 py-1.5 shadow-lg backdrop-blur-md">
          <span className="px-3 text-sm font-semibold text-[hsl(var(--foreground))]">
            {activeLabel}
          </span>
          <div className="flex items-center">
            {themeToggle}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[hsl(var(--muted-foreground))] transition-colors hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-2 flex flex-col gap-1 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card)/0.9)] p-2 shadow-lg backdrop-blur-md"
            >
              {links.map((l) => {
                const isActive = active === l.id;
                const className = `rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"
                    : "text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]"
                }`;
                const close = () => setMenuOpen(false);
                return l.type === "route" || onBlog ? (
                  <Link key={l.id} href={hrefFor(l)} className={className} onClick={close}>
                    {l.label}
                  </Link>
                ) : (
                  <a key={l.id} href={hrefFor(l)} className={className} onClick={close}>
                    {l.label}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
