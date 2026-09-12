"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { sanityConfigured } from "@/sanity/env";

export default function StudioPage() {
  if (!sanityConfigured) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "12px",
          fontFamily: "sans-serif",
          background: "#0a1730",
          color: "#f6f7f9",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <h1 style={{ fontSize: "22px", fontWeight: 600 }}>Studio not connected yet</h1>
        <p style={{ maxWidth: "480px", color: "#b9c1cf", fontSize: "14px", lineHeight: 1.6 }}>
          Add <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and{" "}
          <code>NEXT_PUBLIC_SANITY_DATASET</code> as environment variables in Vercel, then
          redeploy. See README.md &ldquo;Connecting the Sanity CMS.&rdquo;
        </p>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
