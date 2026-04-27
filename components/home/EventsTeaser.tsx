"use client";

import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { isEventPast } from "@/lib/eventDates";

type EventItem = {
  title: string;
  date: string;
  location: string;
};

const fallbackEvents: EventItem[] = [
  {
    title: "London Marathon",
    date: "Sunday, 26th April 2026",
    location: "London",
  },
  {
    title: "Boro Runners Sports Day",
    date: "May 2026 (EST.)",
    location: "TBC",
  },
  {
    title: "Edinburgh Marathon",
    date: "Sunday, 24th May 2026",
    location: "Edinburgh",
  },
];

type EventsTeaserProps = {
  events?: EventItem[];
};

export default function EventsTeaser({ events }: EventsTeaserProps) {
  const all = events && events.length > 0 ? events : fallbackEvents;
  const data = all.filter((e) => !isEventPast(e.date));

  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <SectionHeading
          title="Upcoming Events"
          subtitle="From local parkruns to major races — we run them all together."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.slice(0, 3).map((event, i) => (
            <AnimatedSection key={event.title} delay={i * 0.1}>
              <Card className="h-full">
                <div className="p-6">
                  <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase text-brand-black mb-2">
                    {event.title}
                  </h3>
                  <p className="text-brand-red font-medium text-sm mb-1">{event.date}</p>
                  <p className="text-brand-gray-500 text-sm">{event.location}</p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button href="/events" variant="outline">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}
