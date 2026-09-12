import { defineField, defineType } from "sanity";

export default defineType({
  name: "initiative",
  title: "Initiative",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({
      name: "goals",
      title: "Goals",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "participants", title: "Who Can Participate", type: "string" }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["Active", "Launching Soon", "Pilot"] },
      initialValue: "Active",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "status" },
  },
});
