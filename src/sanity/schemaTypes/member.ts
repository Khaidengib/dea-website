import { defineField, defineType } from "sanity";

export default defineType({
  name: "member",
  title: "Member",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "position", title: "Position", type: "string", initialValue: "Member" }),
    defineField({ name: "school", title: "School", type: "string" }),
    defineField({ name: "gradYear", title: "Graduation Year", type: "string" }),
    defineField({
      name: "interest",
      title: "Primary Area of Interest",
      type: "string",
      options: {
        list: [
          "Economics",
          "Entrepreneurship",
          "Leadership",
          "Innovation",
          "Financial Literacy",
          "Community",
        ],
      },
    }),
    defineField({ name: "bio", title: "Short Bio", type: "text", rows: 3 }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
  ],
  preview: {
    select: { title: "name", subtitle: "school", media: "photo" },
  },
});
