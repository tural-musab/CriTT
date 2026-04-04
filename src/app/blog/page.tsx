import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Blog — CriTT CRM",
  description: "CRM, yapay zeka, çağrı merkezi ve dijital dönüşüm hakkında güncel yazılar.",
};

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
}

function getBlogPosts(): BlogPost[] {
  const contentDir = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

  return files
    .map((file) => {
      const content = fs.readFileSync(path.join(contentDir, file), "utf-8");
      const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
      if (!frontmatterMatch) return null;

      const frontmatter = frontmatterMatch[1];
      const get = (key: string) => {
        const match = frontmatter.match(new RegExp(`${key}:\\s*"(.+?)"`));
        return match ? match[1] : "";
      };

      return {
        slug: file.replace(".md", ""),
        title: get("title"),
        description: get("description"),
        date: get("date"),
        author: get("author"),
        category: get("category"),
      };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()) as BlogPost[];
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 dot-grid-subtle -z-10 opacity-30" />
      <div className="absolute inset-0 radial-glow -z-10" />

      <section className="max-w-7xl mx-auto px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block py-1 px-4 rounded-full bg-surface-container-highest text-primary font-bold text-xs tracking-widest uppercase mb-6">
            ● BLOG
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-8 font-headline">
            Güncel{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-tertiary-fixed-dim">
              Yazılar
            </span>
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            CRM, yapay zeka ve dijital dönüşüm hakkında bilgi edinin.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8">
        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass-card p-8 rounded-3xl block group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
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
              <h2 className="text-2xl font-bold font-headline mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-on-surface-variant mb-4">{post.description}</p>
              <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Devamını Oku <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
