import { defineType, defineField } from "sanity";

export default defineType({
  name: "timetableEvent",
  title: "Timetable Event",
  type: "document",
  fields: [
    defineField({
      name: "date",
      title: "Date",
      type: "string",
      description: 'e.g. "Mon 2nd March"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sortDate",
      title: "Sort Date",
      type: "date",
      description: "The actual date — used for ordering. Pick the calendar date.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: 'e.g. "TIE", "Coulby Manor Way", "LJ Track"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "time",
      title: "Time",
      type: "string",
      description: 'e.g. "6:10pm", "9:15am"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "workout",
      title: "Workout",
      type: "string",
      description: 'e.g. "4-7 x 1k @ 5k pace w/ 2 minutes rest"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "month",
      title: "Month",
      type: "string",
      description: 'e.g. "March 2026" — used to group events by month',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isHighlight",
      title: "Special Event?",
      type: "boolean",
      description: "Toggle on for special events like Superhero Run — highlights the row in red.",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Date",
      name: "dateAsc",
      by: [{ field: "sortDate", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "date",
      subtitle: "location",
      month: "month",
    },
    prepare({ title, subtitle, month }) {
      return {
        title: `${title} — ${subtitle}`,
        subtitle: month,
      };
    },
  },
});
