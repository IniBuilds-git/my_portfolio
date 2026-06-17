"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  /** Phrases to cycle through, typed then deleted in order. */
  words: string[];
  typingSpeed?: number; // ms per character while typing
  deletingSpeed?: number; // ms per character while deleting
  pauseTime?: number; // ms to hold a fully-typed word before deleting
  className?: string;
}

export default function Typewriter({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseTime = 1400,
  className = "",
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    // Finished typing → pause, then start deleting.
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(t);
    }

    // Finished deleting → advance to the next word.
    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const next = deleting
      ? current.slice(0, text.length - 1)
      : current.slice(0, text.length + 1);

    const t = setTimeout(() => setText(next), deleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className} aria-label={words.join(", ")}>
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-0.5 translate-y-0.5 animate-pulse bg-current align-middle" />
    </span>
  );
}
