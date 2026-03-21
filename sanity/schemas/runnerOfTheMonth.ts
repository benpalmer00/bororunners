import { defineField, defineType } from "sanity";

export default defineType({
  name: "runnerOfTheMonth",
  title: "Runner of the Month",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "month", title: "Month", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
    }),
    defineField({ name: "writeUp", title: "Write-Up", type: "text" }),
    defineField({ name: "isCurrent", title: "Current Winner", type: "boolean", initialValue: false }),
  ],
  preview: {
    select: { title: "name", subtitle: "month", media: "photo" },
  },
});
