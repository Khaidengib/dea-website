export const apiVersion = "2024-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

// The site runs fine without a Sanity project connected yet — pages fall
// back to the fixtures in src/lib/content.ts until these are set (see
// README.md "Connecting the Sanity CMS").
export const sanityConfigured = Boolean(projectId && dataset);
