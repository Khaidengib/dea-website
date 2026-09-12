export const apiVersion = "2024-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

// Optional: lets the Presentation tool (the "click anything on the page to
// edit it" view) show unpublished draft edits, not just published content.
// Without it, Presentation still works but only shows published content.
// See README.md "Connecting the Sanity CMS" for how to generate this.
export const readToken = process.env.SANITY_API_READ_TOKEN;

// The site runs fine without a Sanity project connected yet — pages fall
// back to the fixtures in src/lib/content.ts until these are set (see
// README.md "Connecting the Sanity CMS").
export const sanityConfigured = Boolean(projectId && dataset);
