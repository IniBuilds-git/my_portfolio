import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import Nav from "@/components/Nav";
import { mdxComponents } from "@/components/blog/mdx-components";
import { getAllSlugs, getPostBySlug, formatDate } from "@/lib/blog";

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };

  return {
    title: `${post.title} — Inioluwa Alake`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: post.cover ? [{ url: post.cover }] : undefined,
    },
  };
}

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypePrettyCode, { theme: "github-dark-dimmed", keepBackground: false }],
    ] as never,
  },
};

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="mx-auto min-h-screen max-w-3xl px-6 pt-28 pb-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <article className="mt-6">
          <header className="mb-8 border-b border-[hsl(var(--border))] pb-8">
            <div className="flex items-center gap-3 text-xs text-[hsl(var(--muted-foreground))]">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden>·</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl">
              {post.title}
            </h1>
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
          </header>

          <div className="blog-prose">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={mdxOptions}
            />
          </div>
        </article>
      </main>
    </>
  );
}
