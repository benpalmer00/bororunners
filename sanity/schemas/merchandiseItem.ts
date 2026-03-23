import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export default defineType({
  name: "merchandiseItem",
  title: "Merchandise Item",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
    }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "price", title: "Price (£)", type: "number" }),
    defineField({
      name: "sizes",
      title: "Available Sizes",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "url", title: "Product URL (Sprinters Sportswear)", type: "url" }),
    defineField({ name: "isAvailable", title: "Available", type: "boolean", initialValue: true }),
  ],
  preview: {
    select: { title: "name", subtitle: "price", media: "photo" },
  },
});
