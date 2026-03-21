import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import EventCard from "@/components/events/EventCard";

export const metadata: Metadata = {
  title: "Events & Races",
  description:
    "Upcoming races and events for Bororunners Running Club. From local 5ks to the Great North Run — we run them all together across Teesside and beyond.",
};

const upcomingEvents = [
  { title: "Teesside Landmarks", date: "Sunday, 6th April 2025", location: "Teesside" },
  { title: "Redcar Coast 5k", date: "Wednesday, 23rd April 2025, 7:15pm", location: "Redcar" },
  { title: "NYMAC Relays", date: "Thursday, 29th May 2025, 7pm", location: "North Yorkshire" },
  { title: "Ali Brownlee 5k", date: "Sunday, 1st June 2025", location: "TBC" },
  { title: "Superhero Saturday", date: "Saturday, 21st June 2025, 9am", location: "Destination Boro" },
  { title: "Durham City Run Festival", date: "17th–19th July 2025", location: "Durham" },
  { title: "Parkrunathon", date: "Saturday, 19th July 2025", location: "Various Parkruns" },
  { title: "Darlington 10k", date: "Sunday, 3rd August 2025, 10am", location: "Darlington" },
  { title: "Branches & Bays 10k", date: "Sunday, 17th August 2025, 10am", location: "TBC" },
  { title: "Middlesbrough 10k", date: "Sunday, 31st August 2025, 9am", location: "Middlesbrough" },
  { title: "Great North Run", date: "Sunday, 7th September 2025, 10am", location: "Newcastle to South Shields" },
  { title: "Redcar Running Festival", date: "Sunday, 21st September 2025", location: "Redcar" },
  { title: "Scarborough 10k", date: "Sunday, 19th October 2025, 9:45am", location: "Scarborough" },
  { title: "Saturn Run", date: "Sunday, 9th November 2025, 9:30am", location: "TBC" },
  { title: "Christmas Parkrun", date: "December 2025, 9am", location: "Albert Park" },
];

export default function EventsPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src="/images/photos/race-day-2.jpg"
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
            title="Racing Calendar 2025"
            subtitle="Our full racing calendar for the year. We always stay to cheer the last runner home."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, i) => (
              <AnimatedSection key={event.title} delay={i * 0.05}>
                <EventCard {...event} />
              </AnimatedSection>
            ))}
          </div>
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
