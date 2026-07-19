import { defineField, defineType } from "sanity";
import { PlayIcon } from "@sanity/icons";

export default defineType({
  name: "optimiseMedia",
  title: "Optimise Media",
  type: "document",
  icon: PlayIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title / Caption",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "mediaType",
      title: "Media Type",
      type: "string",
      options: { list: ["Image", "Video"], layout: "radio" },
      initialValue: "Image",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
      hidden: ({ parent }) => parent?.mediaType === "Video",
    }),
    defineField({
      name: "video",
      title: "Video File",
      type: "file",
      options: { accept: "video/*" },
      hidden: ({ parent }) => parent?.mediaType !== "Video",
    }),
    defineField({
      name: "poster",
      title: "Video Thumbnail",
      type: "image",
      description: "Optional image shown before the video plays",
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.mediaType !== "Video",
    }),
    defineField({
      name: "isHeroVideo",
      title: "Use as Hero Video",
      type: "boolean",
      description:
        "Show this video full-screen at the top of the Optimise page. Only enable this on one video.",
      initialValue: false,
      hidden: ({ parent }) => parent?.mediaType !== "Video",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first in the gallery",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "mediaType", media: "image" },
  },
});
