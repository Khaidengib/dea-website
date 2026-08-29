import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20 sm:px-8">
      <Link href="/insights" className="inline-flex items-center gap-1.5 text-sm text-navy-700 hover:text-navy-950">
        <ArrowLeft size={15} /> DEA Insights
      </Link>
      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-navy-600/70">
        {post.category} ·{" "}
        {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}{" "}
        · {post.author}
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-navy-950 sm:text-4xl">
        {post.title}
      </h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-navy-800/85">
        {post.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </article>
  );
}
