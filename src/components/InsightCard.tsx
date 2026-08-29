import Link from "next/link";
import type { Post } from "@/lib/content";

export default function InsightCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="card-lift group flex flex-col overflow-hidden rounded-md border border-silver-300/60 bg-white"
    >
      <div className="flex h-32 items-center justify-center bg-gradient-to-br from-navy-900 to-navy-700">
        <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-silver-200">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-wide text-navy-600/70">
          {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}{" "}
          · {post.author}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold text-navy-950 group-hover:underline decoration-silver-400 underline-offset-4">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-800/75">{post.excerpt}</p>
      </div>
    </Link>
  );
}
