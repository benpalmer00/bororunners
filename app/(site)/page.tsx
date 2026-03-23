import Hero from "@/components/home/Hero";
import EnglandAthleticsBanner from "@/components/home/EnglandAthleticsBanner";
import StatsStrip from "@/components/home/StatsStrip";
import SessionsTeaser from "@/components/home/SessionsTeaser";
import AboutTeaser from "@/components/home/AboutTeaser";
import EventsTeaser from "@/components/home/EventsTeaser";
import ROTMTeaser from "@/components/home/ROTMTeaser";
import GalleryTeaser from "@/components/home/GalleryTeaser";
import SponsorsStrip from "@/components/home/SponsorsStrip";
import JoinCTA from "@/components/home/JoinCTA";
import { sanityFetch, urlFor } from "@/sanity/lib/client";
import {
  sessionsQuery,
  eventsQuery,
  currentRunnerOfTheMonthQuery,
  featuredGalleryImagesQuery,
  sponsorsQuery,
} from "@/sanity/lib/queries";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityDoc = any;

function formatEventDate(dateStr: string): string {
  const d = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return d.toLocaleDateString("en-GB", options);
}

export default async function HomePage() {
  const [sanitySessions, sanityEvents, sanityROTM, sanityGallery, sanitySponsors] =
    await Promise.all([
      sanityFetch<SanityDoc[]>(sessionsQuery),
      sanityFetch<SanityDoc[]>(eventsQuery),
      sanityFetch<SanityDoc>(currentRunnerOfTheMonthQuery),
      sanityFetch<SanityDoc[]>(featuredGalleryImagesQuery),
      sanityFetch<SanityDoc[]>(sponsorsQuery),
    ]);

  // Transform sessions
  const sessions = sanitySessions && sanitySessions.length > 0
    ? sanitySessions.map((s: SanityDoc) => ({
        day: s.day,
        time: s.time,
        location: s.location || "",
        level: s.abilityLevel || "All Abilities",
        description: s.description || "",
        hasWaitingList: s.hasWaitingList || false,
      }))
    : undefined;

  // Transform events (next 3)
  const events = sanityEvents && sanityEvents.length > 0
    ? sanityEvents.slice(0, 3).map((e: SanityDoc) => ({
        title: e.title,
        date: e.date ? formatEventDate(e.date) : "",
        location: e.location || "",
      }))
    : undefined;

  // Transform ROTM
  const rotm = sanityROTM
    ? {
        name: sanityROTM.name,
        month: sanityROTM.month,
        photo: sanityROTM.photo ? urlFor(sanityROTM.photo).width(800).height(600).url() : "/images/photos/social-2.jpg",
        writeUp: sanityROTM.writeUp || "",
      }
    : null;

  // Transform gallery
  const galleryImages = sanityGallery && sanityGallery.length > 0
    ? sanityGallery.map((img: SanityDoc) => ({
        src: img.image ? urlFor(img.image).width(800).height(800).url() : "",
        alt: img.image?.alt || img.caption || "Bororunners photo",
      }))
    : undefined;

  // Transform sponsors
  const sponsors = sanitySponsors && sanitySponsors.length > 0
    ? sanitySponsors.map((s: SanityDoc) => ({
        name: s.name,
        logo: s.logo ? urlFor(s.logo).width(320).height(160).url() : "",
        url: s.websiteUrl || "#",
      }))
    : undefined;

  return (
    <>
      <Hero />
      <EnglandAthleticsBanner />
      <StatsStrip />
      <SessionsTeaser sessions={sessions} />
      <AboutTeaser />
      <EventsTeaser events={events} />
      <ROTMTeaser rotm={rotm} />
      <GalleryTeaser images={galleryImages} />
      <SponsorsStrip sponsors={sponsors} />
      <JoinCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsClub",
            name: "Bororunners Running Club",
            url: "https://bororunners.co.uk",
            description:
              "Teesside's award-winning running club. 272 members, weekly sessions across Middlesbrough and Stockton. All abilities welcome.",
            foundingDate: "2022-03",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Middlesbrough",
              addressRegion: "North East England",
              addressCountry: "GB",
            },
            sport: "Running",
            email: "ben.palmer3@hotmail.com",
            sameAs: [
              "https://www.facebook.com/groups/400333825542006",
              "https://www.instagram.com/boro.runners",
            ],
          }),
        }}
      />
    </>
  );
}
