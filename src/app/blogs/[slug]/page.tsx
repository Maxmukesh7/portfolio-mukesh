import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import ScrollProgress from "@/components/ui/scroll-progress";
import Link from "next/link";
import { ArrowLeft, CalendarDays, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import RevealAnimation from "@/components/reveal-animations";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  return {
    title: `${post.metadata.title} | Portfolio`,
    description: post.metadata.summary,
  };
}

const components = {
  h1: (props: any) => (
    <h1 className="text-3xl md:text-5xl font-bold mt-12 mb-6 text-zinc-900 dark:text-zinc-100" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4 text-zinc-800 dark:text-zinc-200" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-zinc-700 dark:text-zinc-300" {...props} />
  ),
  p: (props: any) => (
    <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed mb-6 text-lg" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside mb-6 text-zinc-700 dark:text-zinc-400 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside mb-6 text-zinc-700 dark:text-zinc-400 space-y-2" {...props} />
  ),
  li: (props: any) => <li className="ml-4" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-purple-500 pl-4 italic text-zinc-700 dark:text-zinc-400 my-6 bg-zinc-100 dark:bg-zinc-900/50 py-2 pr-4 rounded-r"
      {...props}
    />
  ),
  code: (props: any) => (
    <code className="bg-zinc-100 dark:bg-zinc-900 text-purple-600 dark:text-purple-300 px-1.5 py-0.5 rounded text-sm font-mono border border-zinc-200 dark:border-zinc-800" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-zinc-900 text-zinc-100 p-4 rounded-lg overflow-x-auto mb-6 border border-zinc-800" {...props} />
  ),
  a: (props: any) => (
    <a className="text-purple-600 dark:text-purple-400 hover:underline underline-offset-4 transition-colors" {...props} />
  ),
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  return (
    <div className="min-h-screen relative font-sans bg-slate-50 dark:bg-transparent text-zinc-900 dark:text-zinc-100">
      <ScrollProgress className="bg-gradient-to-r from-purple-500 to-pink-500" />

      <div className="container mx-auto px-4 py-24 max-w-3xl">
        <RevealAnimation>
          <Link
            href="/blogs"
            className="inline-flex items-center text-zinc-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </Link>
        </RevealAnimation>

        <RevealAnimation delay={0.1}>
          <div className="mb-8">
            <div className="flex gap-2 mb-4 flex-wrap">
              {post.metadata.tags?.map((tag) => (
                <Badge key={tag} variant="outline" className="border-purple-500/30 text-purple-600 dark:text-purple-400">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-zinc-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-zinc-500">
              {post.metadata.title}
            </h1>
            <div className="flex items-center gap-6 text-zinc-500 text-sm border-b border-zinc-200 dark:border-zinc-800 pb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.metadata.author}
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                {post.metadata.publishedAt}
              </div>
            </div>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.2}>
          <article className="prose dark:prose-invert max-w-none">
            <MDXRemote source={post.content} components={components} />
          </article>
        </RevealAnimation>
      </div>
    </div>
  );
}
