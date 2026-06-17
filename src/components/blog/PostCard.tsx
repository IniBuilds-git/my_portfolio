import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate, type PostMeta } from "@/lib/blog";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card-soft card-soft-hover group block p-6"
    >
      <div className="flex items-center gap-3 text-xs text-[hsl(var(--muted-foreground))]">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden>·</span>
        <span>{post.readingTime}</span>
        {post.draft && (
          <span className="rounded-full bg-amber-500/15 px-2 py-0.5 font-medium text-amber-400">
            Draft
          </span>
        )}
      </div>

      <h3 className="mt-2 text-xl font-semibold text-[hsl(var(--foreground))] transition-colors group-hover:text-[hsl(var(--primary))]">
        {post.title}
      </h3>

      <p className="mt-2 text-[15px] leading-relaxed text-[hsl(var(--muted-foreground))]">
        {post.excerpt}
      </p>

      {post.tags && post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[hsl(var(--primary)/0.35)] bg-[hsl(var(--primary)/0.1)] px-3 py-1 text-xs font-medium text-[hsl(var(--primary))]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium accent-text">
        Read post
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
