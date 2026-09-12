"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool, defineLocations } from "sanity/presentation";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
      resolve: {
        locations: {
          member: defineLocations({
            select: { name: "name" },
            resolve: () => ({ locations: [{ title: "Members page", href: "/members" }] }),
          }),
          leader: defineLocations({
            select: { name: "name" },
            resolve: () => ({ locations: [{ title: "Leadership page", href: "/leadership" }] }),
          }),
          event: defineLocations({
            select: { name: "name", slug: "slug.current" },
            resolve: (doc) => ({
              locations: [
                { title: "Events page", href: "/events" },
                ...(doc?.slug ? [{ title: doc.name || "Event", href: `/events/${doc.slug}` }] : []),
              ],
            }),
          }),
          initiative: defineLocations({
            select: { name: "name" },
            resolve: () => ({ locations: [{ title: "Initiatives page", href: "/initiatives" }] }),
          }),
          post: defineLocations({
            select: { title: "title", slug: "slug.current" },
            resolve: (doc) => ({
              locations: [
                { title: "Insights page", href: "/insights" },
                ...(doc?.slug ? [{ title: doc.title || "Post", href: `/insights/${doc.slug}` }] : []),
              ],
            }),
          }),
          siteSettings: defineLocations({
            select: {},
            resolve: () => ({ locations: [{ title: "Homepage", href: "/" }] }),
          }),
        },
      },
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
