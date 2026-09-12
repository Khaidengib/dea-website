import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, readToken } from "./env";

// Used for normal page rendering: fast (CDN-cached), published content only.
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});

// Used only when Presentation/draft mode is active: bypasses the CDN so
// unpublished edits show up immediately, and stega-encodes the response so
// the Presentation tool can turn page content into clickable edit targets.
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "drafts",
  token: readToken,
  stega: {
    enabled: true,
    studioUrl: "/studio",
  },
});
