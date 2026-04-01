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
    defineField({
      name: "heroImage",
      title: "Home Hero Image",
      type: "image",
      description: "Main hero image on the home page. Recommended: 1920x1080 or wider.",
      options: { hotspot: true },
    }),
    defineField({
      name: "aboutHeroImage",
      title: "About Page Hero Image",
      type: "image",
      description: "Hero image on the About page.",
      options: { hotspot: true },
    }),
    defineField({
      name: "aboutStoryImage",
      title: "About Page Story Image",
      type: "image",
      description: "Photo beside the 'Built on Community' section on the About page.",
      options: { hotspot: true },
    }),
    defineField({
      name: "sessionsHeroImage",
      title: "Sessions Page Hero Image",
      type: "image",
      description: "Hero image on the Sessions page.",
      options: { hotspot: true },
    }),
    defineField({
      name: "joinHeroImage",
      title: "Join Page Hero Image",
      type: "image",
      description: "Hero image on the Join the Club page.",
      options: { hotspot: true },
    }),
    defineField({
      name: "joinMembershipImage",
      title: "Join Page Membership Image",
      type: "image",
      description: "Photo beside the membership perks section on the Join page.",
      options: { hotspot: true },
    }),
    defineField({
      name: "teamHeroImage",
      title: "Team Page Hero Image",
      type: "image",
      description: "Hero image on the Meet the Team page.",
      options: { hotspot: true },
    }),
    defineField({
      name: "eventsHeroImage",
      title: "Events Page Hero Image",
      type: "image",
      description: "Hero image on the Events page.",
      options: { hotspot: true },
    }),
    defineField({
      name: "homeAboutImage",
      title: "Home About Teaser Image",
      type: "image",
      description: "Photo in the 'From 8 Runners to Award-Winning Club' section on the home page.",
      options: { hotspot: true },
    }),
    defineField({
      name: "mascotPhoto",
      title: "Club Mascot Photo",
      type: "image",
      description: "Photo of Badger the club mascot, shown on the Meet the Team page.",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
