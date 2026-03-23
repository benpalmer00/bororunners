import type { StructureResolver } from "sanity/structure";
import {
  CalendarIcon,
  UsersIcon,
  ImageIcon,
  DocumentTextIcon,
  CogIcon,
  TagIcon,
  StarFilledIcon,
  StarIcon,
  ClockIcon,
} from "@sanity/icons";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Bororunners CMS")
    .items([
      // ── Sessions & Training ──────────────────────────
      S.listItem()
        .title("Sessions & Training")
        .icon(ClockIcon)
        .child(
          S.list()
            .title("Sessions & Training")
            .items([
              S.listItem()
                .title("Weekly Sessions")
                .icon(ClockIcon)
                .child(S.documentTypeList("session").title("Weekly Sessions")),
              S.listItem()
                .title("Timetable")
                .icon(CalendarIcon)
                .child(S.documentTypeList("timetableEvent").title("Timetable")),
            ])
        ),

      // ── Events ───────────────────────────────────────
      S.listItem()
        .title("Events & Races")
        .icon(CalendarIcon)
        .child(S.documentTypeList("event").title("Events & Races")),

      S.divider(),

      // ── People ───────────────────────────────────────
      S.listItem()
        .title("People")
        .icon(UsersIcon)
        .child(
          S.list()
            .title("People")
            .items([
              S.listItem()
                .title("Committee & Team")
                .icon(UsersIcon)
                .child(S.documentTypeList("teamMember").title("Committee & Team")),
              S.listItem()
                .title("Runner of the Month")
                .icon(StarFilledIcon)
                .child(S.documentTypeList("runnerOfTheMonth").title("Runner of the Month")),
            ])
        ),

      S.divider(),

      // ── Content ──────────────────────────────────────
      S.listItem()
        .title("Blog & News")
        .icon(DocumentTextIcon)
        .child(S.documentTypeList("blogPost").title("Blog & News")),

      S.listItem()
        .title("Photo Gallery")
        .icon(ImageIcon)
        .child(S.documentTypeList("galleryImage").title("Photo Gallery")),

      S.divider(),

      // ── Club ─────────────────────────────────────────
      S.listItem()
        .title("Shop / Merchandise")
        .icon(TagIcon)
        .child(S.documentTypeList("merchandiseItem").title("Shop / Merchandise")),

      S.listItem()
        .title("Sponsors & Partners")
        .icon(StarIcon)
        .child(S.documentTypeList("sponsor").title("Sponsors & Partners")),

      S.divider(),

      // ── Settings (singleton) ─────────────────────────
      S.listItem()
        .title("Site Settings")
        .icon(CogIcon)
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
    ]);
