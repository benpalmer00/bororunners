import { defineField, defineType } from "sanity";
import { CalendarIcon } from "@sanity/icons";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  icon: CalendarIcon,
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "date", title: "Date", type: "datetime" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "entryUrl", title: "Entry URL", type: "url" }),
    defineField({ name: "facebookEventUrl", title: "Facebook Event URL", type: "url" }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
    }),
    defineField({ name: "isPast", title: "Past Event", type: "boolean", initialValue: false }),
    defineField({
      name: "signUpEnabled",
      title: "Enable Sign-Up",
      type: "boolean",
      description: "Allow runners to sign up for this event from the website.",
      initialValue: true,
    }),
    defineField({ name: "results", title: "Results", type: "text" }),
  ],
  preview: {
    select: { title: "title", subtitle: "date" },
  },
});
