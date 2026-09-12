import type { Metadata } from "next";
import { getPosts } from "@/lib/data";
import InsightsFilter from "./InsightsFilter";

export const metadata: Metadata = {
  title: "DEA Insights",
  description: "Perspectives from DEA members on economics, entrepreneurship, and leadership.",
};

export const revalidate = 60;

export default async function InsightsPage() {
  const posts = await getPosts();

  return (
    <>
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-silver-400">DEA Insights</p>
          <h1 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
            Perspectives from DEA Members
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <InsightsFilter posts={posts} />
      </section>
    </>
  );
}
