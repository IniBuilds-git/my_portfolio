import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * Styled HTML elements for rendered MDX, matching the dark/teal theme.
 * Code blocks are syntax-highlighted by rehype-pretty-code (shiki) — we only
 * style the wrapper here; token colors come from the shiki theme.
 */
export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="mt-10 mb-4 text-3xl font-bold tracking-tight text-[hsl(var(--foreground))]"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-10 mb-3 text-2xl font-bold tracking-tight text-[hsl(var(--foreground))]"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-2 text-xl font-semibold text-[hsl(var(--foreground))]"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="my-4 text-[15px] leading-relaxed text-[hsl(var(--muted-foreground))]"
      {...props}
    />
  ),
  a: ({ href = "", ...props }) => {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    const className =
      "font-medium accent-text underline underline-offset-4 decoration-[hsl(var(--primary)/0.4)] hover:decoration-[hsl(var(--primary))]";
    return isInternal ? (
      <Link href={href} className={className} {...props} />
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props} />
    );
  },
  ul: (props) => (
    <ul
      className="my-4 list-disc space-y-2 pl-6 text-[15px] text-[hsl(var(--muted-foreground))] marker:text-[hsl(var(--primary))]"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="my-4 list-decimal space-y-2 pl-6 text-[15px] text-[hsl(var(--muted-foreground))] marker:text-[hsl(var(--primary))]"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-[hsl(var(--primary))] pl-4 italic text-[hsl(var(--muted-foreground))]"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-[hsl(var(--border))]" />,
  // Inline code (block code is handled by rehype-pretty-code's <pre><code>)
  code: (props) => {
    const isBlock = "data-language" in props || "data-rehype-pretty-code-figure" in props;
    if (isBlock) return <code {...props} />;
    return (
      <code
        className="rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-1.5 py-0.5 font-mono text-[13px] text-[hsl(var(--foreground))]"
        {...props}
      />
    );
  },
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-xl border border-[hsl(var(--border))] bg-[hsl(0_0%_3%)] p-4 text-[13px] leading-relaxed"
      {...props}
    />
  ),
  img: ({ alt = "", ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element -- author-supplied markdown image
    <img
      alt={alt}
      className="my-6 w-full rounded-xl border border-[hsl(var(--border))]"
      {...props}
    />
  ),
  table: (props) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-3 py-2 text-left font-semibold text-[hsl(var(--foreground))]"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border border-[hsl(var(--border))] px-3 py-2 text-[hsl(var(--muted-foreground))]"
      {...props}
    />
  ),
};
