import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Inioluwa Alake",
  description:
    "Notes on software engineering, applied AI, and the systems I build — and books I've read.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="mx-auto min-h-screen max-w-3xl px-6 pt-28 pb-20">
        <Link
          href="/#home"
          className="inline-flex items-center gap-1.5 text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>

        <header className="mt-6 mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl">
            Blog
          </h1>
          <p className="mt-3 max-w-xl text-[15px] text-[hsl(var(--muted-foreground))]">
            Notes on software engineering, applied AI, and the systems I build
            — and books I&apos;ve read.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="card-soft p-10 text-center">
            <p className="text-[hsl(var(--muted-foreground))]">
              No posts yet — check back soon.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
