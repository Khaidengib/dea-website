import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client } from "@/sanity/client";
import { readToken } from "@/sanity/env";

// Called by Sanity's Presentation tool when you open the live-preview view.
// Turns on Next.js draft mode so pages render unpublished edits.
//
// Requires SANITY_API_READ_TOKEN (see README.md "Connecting the Sanity CMS").
// Without it, this route returns a clear error instead of crashing, and the
// Presentation tool falls back to showing published content only.
export async function GET(request: Request) {
  if (!readToken) {
    return new Response(
      "Draft preview isn't set up yet: SANITY_API_READ_TOKEN is missing. See README.md \u2018Connecting the Sanity CMS\u2019.",
      { status: 501 }
    );
  }
  const { GET: enable } = defineEnableDraftMode({
    client: client.withConfig({ token: readToken }),
  });
  return enable(request);
}
