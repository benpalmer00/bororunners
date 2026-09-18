import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import EventsGrid from "@/components/events/EventsGrid";
import { getPageImage } from "@/lib/getPageImage";
import { getPastEvents, getUpcomingEvents } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events & Races",
  description:
    "Upcoming races and events for Bororunners Running Club. From local 5ks to the Great North Run — we run them all together across Teesside and beyond.",
};

export default async function EventsPage() {
  const eventsHero = await getPageImage("eventsHeroImage", "/images/photos/race-day-2.jpg");
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src={eventsHero}
          alt="Bororunners at a race event"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase text-white">
              Events &amp; Races
            </h1>
            <p className="text-xl text-gray-300 mt-4 max-w-xl">
              From local parkruns to major races — we run them all together.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeading
            title="Racing Calendar"
            subtitle="Our racing calendar for the year. We always stay to cheer the last runner home."
          />

          <EventsGrid upcoming={upcoming} past={past} />
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="container-narrow mx-auto text-center">
          <AnimatedSection>
            <SectionHeading
              title="Run With Us"
              subtitle="We enter races across the North East and beyond. Whether it's your first 5k or your tenth marathon, you'll have the whole club behind you."
            />
            <p className="text-brand-gray-600 max-w-2xl mx-auto">
              At every race, Bororunners members stay to the end. We form two lines either side of the finish
              and clap every single runner home. It&apos;s what makes race day with Boro special.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
