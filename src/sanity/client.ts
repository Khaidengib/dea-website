import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  // Content edited in Studio should reach the live site without a redeploy.
  // Pages that call this client set their own `revalidate` (see
  // src/lib/data.ts) so Next.js re-fetches on a short interval instead of
  // caching the response forever.
  perspective: "published",
});
