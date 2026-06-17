import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export interface PostFrontmatter {
  title: string;
  date: string; // ISO, e.g. "2026-06-17"
  excerpt: string;
  tags?: string[];
  cover?: string;
  draft?: boolean;
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
  readingTime: string; // e.g. "5 min read"
}

export interface Post extends PostMeta {
  content: string; // raw MDX body
}

function ensureDir(): boolean {
  return fs.existsSync(BLOG_DIR);
}

function readPost(fileName: string): Post {
  const slug = fileName.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), "utf-8");
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;

  return {
    slug,
    title: fm.title ?? slug,
    date: fm.date ?? "",
    excerpt: fm.excerpt ?? "",
    tags: fm.tags ?? [],
    cover: fm.cover,
    draft: fm.draft ?? false,
    readingTime: readingTime(content).text,
    content,
  };
}

/** All published posts, newest first. Drafts are excluded in production. */
export function getAllPosts(): PostMeta[] {
  if (!ensureDir()) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f));

  const showDrafts = process.env.NODE_ENV !== "production";

  return files
    .map(readPost)
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    // strip the raw content from the list payload
    .map(({ content: _content, ...meta }) => meta);
}

export function getPostBySlug(slug: string): Post | null {
  if (!ensureDir()) return null;
  for (const ext of [".mdx", ".md"]) {
    const file = path.join(BLOG_DIR, slug + ext);
    if (fs.existsSync(file)) return readPost(slug + ext);
  }
  return null;
}

export function getAllSlugs(): string[] {
  if (!ensureDir()) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

/** Format an ISO date as e.g. "June 17, 2026". Falls back to the raw string. */
export function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
