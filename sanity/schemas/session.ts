import { defineField, defineType } from "sanity";

export default defineType({
  name: "session",
  title: "Session",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "day",
      title: "Day",
      type: "string",
      options: {
        list: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "time", title: "Time", type: "string", validation: (r) => r.required() }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "meetingPoint", title: "Meeting Point", type: "string" }),
    defineField({
      name: "abilityLevel",
      title: "Ability Level",
      type: "string",
      options: {
        list: ["Beginner", "All Abilities", "Intermediate", "Advanced"],
      },
    }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "hasWaitingList", title: "Has Waiting List", type: "boolean", initialValue: false }),
    defineField({ name: "waitingListUrl", title: "Waiting List URL", type: "url" }),
    defineField({ name: "isActive", title: "Active", type: "boolean", initialValue: true }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  preview: {
    select: { title: "title", subtitle: "day" },
  },
});
