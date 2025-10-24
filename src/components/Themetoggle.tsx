"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Themetoggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="fixed top-5 right-5 z-50 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
    >
      <span className="text-xl" aria-hidden>
        {isDark ? "☀︎" : "☾"}
      </span>
    </button>
  );
}
