import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "heroHeadline", title: "Hero Headline", type: "string" }),
    defineField({ name: "heroSubtext", title: "Hero Supporting Text", type: "text", rows: 3 }),
    defineField({
      name: "stats",
      title: "Homepage Statistics",
      type: "array",
      of: [
        {
          type: "object",
          name: "stat",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Value", type: "string" },
          ],
        },
      ],
      validation: (r) => r.max(4),
    }),
    defineField({ name: "aboutHeadline", title: "About Preview Headline", type: "string" }),
    defineField({ name: "aboutBody", title: "About Preview Body", type: "text", rows: 5 }),
    defineField({ name: "missionStatement", title: "Mission Statement", type: "text", rows: 4 }),
    defineField({ name: "visionStatement", title: "Vision Statement", type: "text", rows: 4 }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
