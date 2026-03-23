import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "signUpPin",
      title: "Event Sign-Up PIN",
      type: "string",
      description:
        "4-digit PIN that club members need to enter before signing up for any event. Share this with members via WhatsApp.",
      validation: (r) => r.regex(/^\d{4}$/, { name: "4-digit PIN", invert: false }),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
