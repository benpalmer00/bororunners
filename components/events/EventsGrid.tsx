"use client";

import { useState } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import EventCard from "./EventCard";
import EventSignUpModal from "./EventSignUpModal";
import PastEventsTable from "./PastEventsTable";
import type { ClubEvent } from "@/lib/events";

type EventsGridProps = {
  upcoming: ClubEvent[];
  past: ClubEvent[];
};

export default function EventsGrid({ upcoming, past }: EventsGridProps) {
  const [selectedEvent, setSelectedEvent] = useState<ClubEvent | null>(null);

  return (
    <>
      {upcoming.length > 0 ? (
        <>
          <h3 className="font-display text-2xl font-bold uppercase text-brand-black mb-6">Upcoming</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((event, i) => (
              <AnimatedSection key={event.id} delay={i * 0.05}>
                <EventCard
                  title={event.title}
                  date={event.dateLabel}
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
      ) : (
        <p className="text-brand-gray-500">No upcoming races on the calendar just yet.</p>
      )}

      {past.length > 0 && (
        <>
          <h3 className="font-display text-2xl font-bold uppercase text-brand-black mb-6 mt-16">Past Events</h3>
          <PastEventsTable events={past} />
        </>
      )}

      <EventSignUpModal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        eventTitle={selectedEvent?.title ?? ""}
        eventDate={selectedEvent?.dateLabel ?? ""}
        eventLocation={selectedEvent?.location ?? ""}
      />
    </>
  );
}
