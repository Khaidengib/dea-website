import type { Metadata } from "next";
import { getMembers } from "@/lib/data";
import MembersFilter from "./MembersFilter";

export const metadata: Metadata = {
  title: "Members",
  description: "The Dallas Entrepreneurial Alliance member directory.",
};

export const revalidate = 60;

export default async function MembersPage() {
  const members = await getMembers();

  return (
    <>
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-silver-400">Members</p>
          <h1 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
            The DEA Community
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <MembersFilter members={members} />
      </section>
    </>
  );
}
