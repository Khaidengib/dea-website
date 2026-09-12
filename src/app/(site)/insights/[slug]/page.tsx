import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { getPosts } from "@/lib/data";

export const revalidate = 60;

async function findPost(slug: string) {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-base leading-relaxed text-navy-800/85">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 font-display text-2xl font-semibold text-navy-950">{children}</h2>
    ),
  },
};

function isPortableText(body: unknown): body is Record<string, unknown>[] {
  return Array.isArray(body) && typeof body[0] === "object" && body[0] !== null;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await findPost(slug);
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
      <div className="mt-8 space-y-5">
        {isPortableText(post.body) ? (
          <PortableText value={post.body} components={portableTextComponents} />
        ) : (
          (post.body as string[]).map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-navy-800/85">
              {para}
            </p>
          ))
        )}
      </div>
    </article>
  );
}
