import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import EventsGrid from "@/components/events/EventsGrid";
import { sanityFetch } from "@/sanity/lib/client";
import { getPageImage } from "@/lib/getPageImage";
import { allEventsWithSignUpQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Events & Races",
  description:
    "Upcoming races and events for Bororunners Running Club. From local 5ks to the Great North Run — we run them all together across Teesside and beyond.",
};

export const revalidate = 3600;

type SanityEvent = {
  _id: string;
  title: string;
  date: string;
  location: string;
  description?: string;
  entryUrl?: string;
  signUpEnabled?: boolean;
  isPast?: boolean;
};

const fallbackEvents = [
  // Past — Late 2025
  { _id: "1", title: "Nightmare on 6.66 Street", date: "Sunday, 2nd November 2025", location: "TBC", signUpEnabled: false, isPast: true },
  { _id: "2", title: "Marton Willy Relays", date: "Sunday, 9th November 2025", location: "Marton", signUpEnabled: false, isPast: true },
  { _id: "3", title: "Leeds Abbey Dash", date: "Sunday, 30th November 2025", location: "Leeds", signUpEnabled: false, isPast: true },
  { _id: "4", title: "Aintree Half Marathon", date: "Sunday, 14th December 2025", location: "Aintree", signUpEnabled: false, isPast: true },
  { _id: "5", title: "HMP Kirklevington 5k", date: "Sunday, 14th December 2025", location: "Kirklevington", signUpEnabled: false, isPast: true },
  // Past — Early 2026
  { _id: "6", title: "Hardmoors 15/30", date: "Saturday, 3rd January 2026", location: "North York Moors", signUpEnabled: false, isPast: true },
  { _id: "7", title: "Brass Monkey Half Marathon", date: "Sunday, 18th January 2026", location: "York", signUpEnabled: false, isPast: true },
  { _id: "8", title: "Boro Brassic Half Marathon", date: "Sunday, 18th January 2026", location: "Middlesbrough", signUpEnabled: false, isPast: true },
  { _id: "9", title: "Hardmoors 26.2 / Saltburn 10K", date: "Sunday, 1st February 2026", location: "Saltburn", signUpEnabled: false, isPast: true },
  { _id: "10", title: "DB Foodbank Run", date: "Saturday, 7th February 2026", location: "TBC", signUpEnabled: false, isPast: true },
  { _id: "11", title: "Boro Half Marathon", date: "Sunday, 1st March 2026", location: "Middlesbrough", signUpEnabled: false, isPast: true },
  // Upcoming
  { _id: "12", title: "Superhero Run", date: "March 2026", location: "Middlesbrough", signUpEnabled: true },
  { _id: "13", title: "London Landmarks", date: "Sunday, 12th April 2026", location: "London", signUpEnabled: true },
  { _id: "14", title: "Teesside Landmarks", date: "Sunday, 12th April 2026", location: "Teesside", signUpEnabled: true },
  { _id: "15", title: "Manchester Marathon", date: "Sunday, 19th April 2026", location: "Manchester", signUpEnabled: true },
  { _id: "16", title: "Spring Coast 5k", date: "Wednesday, 22nd April 2026 (EST.)", location: "TBC", signUpEnabled: true },
  { _id: "17", title: "London Marathon", date: "Sunday, 26th April 2026", location: "London", signUpEnabled: true },
  { _id: "18", title: "Boro Runners Sports Day", date: "May 2026 (EST.)", location: "TBC", signUpEnabled: true },
  { _id: "19", title: "Edinburgh Half Marathon", date: "Sunday, 24th May 2026", location: "Edinburgh", signUpEnabled: true },
  { _id: "20", title: "Edinburgh Marathon", date: "Sunday, 24th May 2026", location: "Edinburgh", signUpEnabled: true },
  { _id: "21", title: "NYMAC Relays", date: "Thursday, 28th May 2026 (EST.)", location: "North Yorkshire", signUpEnabled: true },
  { _id: "22", title: "Parkrunathon", date: "June 2026 (EST.)", location: "Various Parkruns", signUpEnabled: true },
  { _id: "23", title: "Summer Coast 5k", date: "Wednesday, 15th July 2026 (EST.)", location: "TBC", signUpEnabled: true },
  { _id: "24", title: "Planned Club Event", date: "July 2026 (EST.)", location: "TBC", signUpEnabled: true },
  { _id: "25", title: "Newcastle Frontrunners LGBTQ 5k", date: "July 2026 (EST.)", location: "Newcastle", signUpEnabled: true },
  { _id: "26", title: "York 10K", date: "Sunday, 2nd August 2026", location: "York", signUpEnabled: true },
  { _id: "27", title: "NYMAC Relays", date: "Thursday, 27th August 2026 (EST.)", location: "North Yorkshire", signUpEnabled: true },
  { _id: "28", title: "Boro 5k", date: "Sunday, 30th August 2026", location: "Middlesbrough", signUpEnabled: true },
  { _id: "29", title: "Boro 10k", date: "Sunday, 30th August 2026", location: "Middlesbrough", signUpEnabled: true },
  { _id: "30", title: "Great North Run", date: "Sunday, 13th September 2026", location: "Newcastle to South Shields", signUpEnabled: true },
  { _id: "31", title: "Berlin Marathon", date: "Sunday, 27th September 2026", location: "Berlin", signUpEnabled: true },
  { _id: "32", title: "Manchester Half Marathon", date: "Sunday, 4th October 2026", location: "Manchester", signUpEnabled: true },
  { _id: "33", title: "York 10 Mile", date: "Sunday, 18th October 2026", location: "York", signUpEnabled: true },
];

export default async function EventsPage() {
  const eventsHero = await getPageImage("eventsHeroImage", "/images/photos/race-day-2.jpg");
  let events: SanityEvent[] = fallbackEvents;

  const sanityEvents = await sanityFetch<SanityEvent[]>(allEventsWithSignUpQuery);
  if (sanityEvents && sanityEvents.length > 0) {
    const now = new Date();
    events = sanityEvents.map((e) => ({
      ...e,
      isPast: e.isPast || (e.date ? new Date(e.date) < now : false),
      date: e.date
        ? new Date(e.date).toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
          })
        : "TBC",
    }));
  }

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

          <EventsGrid events={events} />
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
