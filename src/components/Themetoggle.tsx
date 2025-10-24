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
      className="fixed top-8 right-8 z-50 text-xl hover:opacity-80 transition-opacity"
    >
      <span aria-hidden>
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}