"use client";

import { useState } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import EventCard from "./EventCard";
import EventSignUpModal from "./EventSignUpModal";

type EventItem = {
  _id: string;
  title: string;
  date: string;
  location: string;
  description?: string;
  entryUrl?: string;
  signUpEnabled?: boolean;
  isPast?: boolean;
};

type EventsGridProps = {
  events: EventItem[];
};

export default function EventsGrid({ events }: EventsGridProps) {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const upcoming = events.filter((e) => !e.isPast);
  const past = events.filter((e) => e.isPast);

  return (
    <>
      {upcoming.length > 0 && (
        <>
          <h3 className="font-display text-2xl font-bold uppercase text-brand-black mb-6">Upcoming</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((event, i) => (
              <AnimatedSection key={event._id} delay={i * 0.05}>
                <EventCard
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  description={event.description}
                  entryUrl={event.entryUrl}
                  signUpEnabled={event.signUpEnabled}
                  onSignUp={() => setSelectedEvent(event)}
                />
              </AnimatedSection>
            ))}
          </div>
        </>
      )}

      {past.length > 0 && (
        <>
          <h3 className="font-display text-2xl font-bold uppercase text-brand-black mb-6 mt-16">Past Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-70">
            {past.map((event, i) => (
              <AnimatedSection key={event._id} delay={i * 0.05}>
                <EventCard
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  description={event.description}
                  entryUrl={event.entryUrl}
                />
              </AnimatedSection>
            ))}
          </div>
        </>
      )}

      <EventSignUpModal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        eventTitle={selectedEvent?.title ?? ""}
        eventDate={selectedEvent?.date ?? ""}
        eventLocation={selectedEvent?.location ?? ""}
      />
    </>
  );
}
