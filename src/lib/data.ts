import { draftMode } from "next/headers";
import { client, previewClient } from "@/sanity/client";
import { sanityConfigured } from "@/sanity/env";
import {
  membersQuery,
  leadershipQuery,
  eventsQuery,
  initiativesQuery,
  postsQuery,
  siteSettingsQuery,
} from "@/sanity/queries";
import {
  members as fallbackMembers,
  leadership as fallbackLeadership,
  events as fallbackEvents,
  initiatives as fallbackInitiatives,
  posts as fallbackPosts,
  stats as fallbackStats,
  site,
  type Member,
  type LeadershipPerson,
  type Event,
  type Initiative,
  type Post,
} from "@/lib/content";

// How often (in seconds) pages re-fetch from Sanity. Content edited in
// Studio shows up on the live site within this window — no redeploy needed.
export const REVALIDATE_SECONDS = 60;

type SiteSettings = {
  heroHeadline?: string;
  heroSubtext?: string;
  stats?: { label: string; value: string }[];
  aboutHeadline?: string;
  aboutBody?: string;
  missionStatement?: string;
  visionStatement?: string;
};

async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  if (!sanityConfigured) return fallback;
  try {
    const { isEnabled } = await draftMode();
    const activeClient = isEnabled ? previewClient : client;
    const result = isEnabled
      ? await activeClient.fetch<T>(query, {}, { cache: "no-store" })
      : await activeClient.fetch<T>(query, {}, { next: { revalidate: REVALIDATE_SECONDS } });
    if (Array.isArray(result) && result.length === 0) return fallback;
    if (!result) return fallback;
    return result;
  } catch (err) {
    console.error("Sanity fetch failed, using fallback content:", err);
    return fallback;
  }
}

export async function getMembers(): Promise<Member[]> {
  return safeFetch<Member[]>(membersQuery, fallbackMembers);
}

export async function getLeadership(): Promise<LeadershipPerson[]> {
  return safeFetch<LeadershipPerson[]>(leadershipQuery, fallbackLeadership);
}

export async function getEvents(): Promise<Event[]> {
  return safeFetch<Event[]>(eventsQuery, fallbackEvents);
}

export async function getInitiatives(): Promise<Initiative[]> {
  return safeFetch<Initiative[]>(initiativesQuery, fallbackInitiatives);
}

export async function getPosts(): Promise<Post[]> {
  return safeFetch<Post[]>(postsQuery, fallbackPosts);
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return safeFetch<SiteSettings>(siteSettingsQuery, {
    heroHeadline: "Building the Next Generation of Dallas Leaders.",
    heroSubtext:
      "Dallas Entrepreneurial Alliance brings together ambitious students to explore entrepreneurship, economics, leadership, innovation, and the ideas shaping the future.",
    stats: fallbackStats.map(({ label, value }) => ({ label, value })),
    aboutHeadline: "A Student-Led Network for Ambition, Ideas, and Opportunity.",
    aboutBody: `DEA is a youth-led organization connecting ambitious students across Dallas-area schools around one shared idea: that the next generation of business and civic leaders should start building those skills now, not after graduation. We bring together economics, entrepreneurship, leadership, and financial literacy into one cross-school community.`,
    missionStatement: `${site.name} exists to empower students to become informed, innovative, and purposeful leaders by creating opportunities to explore economics, entrepreneurship, leadership, and the ideas shaping the future.`,
    visionStatement:
      "A connected ecosystem of ambitious young leaders across every school in Dallas — supported by mentors, employers, and each other.",
  });
}
