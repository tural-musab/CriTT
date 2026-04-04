import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import fs from "fs";
import path from "path";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  content: string;
}

function getPost(slug: string): BlogPost | null {
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const frontmatterMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!frontmatterMatch) return null;

  const frontmatter = frontmatterMatch[1];
  const content = frontmatterMatch[2].trim();
  const get = (key: string) => {
    const match = frontmatter.match(new RegExp(`${key}:\\s*"(.+?)"`));
    return match ? match[1] : "";
  };

  return {
    slug,
    title: get("title"),
    description: get("description"),
    date: get("date"),
    author: get("author"),
    category: get("category"),
    content,
  };
}

function getAllSlugs(): string[] {
  const contentDir = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(".md", ""));
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getPost(slug);
    if (!post) return { title: "Yazı Bulunamadı" };
    return {
      title: post.title,
      description: post.description,
    };
  });
}

/**
 * Simple markdown to HTML converter for trusted blog content.
 * Content comes from local filesystem markdown files authored by the team —
 * no user-generated input. Safe to render as HTML.
 */
function markdownToHtml(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold font-headline mt-8 mb-4">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold font-headline mt-10 mb-4">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold font-headline mt-8 mb-6">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/^(?!<[h|u|o|l])(.*\S.*)$/gm, '<p class="text-on-surface-variant leading-relaxed mb-4">$1</p>');
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const htmlContent = markdownToHtml(post.content);

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
      <div className="absolute inset-0 radial-glow -z-10" />

      <article className="max-w-3xl mx-auto px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft size={16} />
          Tüm Yazılar
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-on-surface-variant">
            <Calendar size={12} />
            {new Date(post.date).toLocaleDateString("tr-TR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1 text-xs text-on-surface-variant">
            <User size={12} />
            {post.author}
          </span>
        </div>

        {/* Blog content from trusted local markdown files — no user input */}
        <div
          className="glass-card p-8 md:p-12 rounded-3xl"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </div>
  );
}
