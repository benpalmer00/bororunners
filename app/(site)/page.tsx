import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import SessionsTeaser from "@/components/home/SessionsTeaser";
import AboutTeaser from "@/components/home/AboutTeaser";
import EventsTeaser from "@/components/home/EventsTeaser";
import ROTMTeaser from "@/components/home/ROTMTeaser";
import GalleryTeaser from "@/components/home/GalleryTeaser";
import SponsorsStrip from "@/components/home/SponsorsStrip";
import JoinCTA from "@/components/home/JoinCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <SessionsTeaser />
      <AboutTeaser />
      <EventsTeaser />
      <ROTMTeaser />
      <GalleryTeaser />
      <SponsorsStrip />
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
