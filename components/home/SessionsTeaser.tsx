"use client";

import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";

type Session = {
  day: string;
  time: string;
  location: string;
  level: string;
  description: string;
  hasWaitingList?: boolean;
};

const fallbackSessions: Session[] = [
  {
    day: "Monday",
    time: "6:10pm",
    location: "Various locations across Teesside",
    level: "All Abilities",
    hasWaitingList: true,
    description: "Interval and tempo training with multiple pace groups and dedicated run leaders.",
  },
  {
    day: "Wednesday",
    time: "6:00pm",
    location: "Track sessions",
    level: "All Abilities",
    hasWaitingList: true,
    description: "Track-based speed work at various venues including Guisborough and LJ Track.",
  },
  {
    day: "Thursday",
    time: "6:10pm",
    location: "Various locations",
    level: "All Abilities",
    hasWaitingList: true,
    description: "Structured training sessions. Currently operating a waiting list due to demand.",
  },
  {
    day: "Friday",
    time: "9:15am",
    location: "Parks and trails",
    level: "All Abilities",
    hasWaitingList: true,
    description: "Morning trail and road sessions at scenic locations across Teesside.",
  },
];

type SessionsTeaserProps = {
  sessions?: Session[];
};

export default function SessionsTeaser({ sessions }: SessionsTeaserProps) {
  const data = sessions && sessions.length > 0 ? sessions : fallbackSessions;

  return (
    <section className="section-padding bg-brand-gray-50">
      <div className="container-wide mx-auto">
        <SectionHeading
          title="Weekly Sessions"
          subtitle="Four sessions every week, all abilities welcome. All sessions operate a waiting list — register first to secure your place."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((session, i) => (
            <AnimatedSection key={session.day} delay={i * 0.1}>
              <Card className="h-full">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display text-xl font-bold uppercase text-brand-black">
                      {session.day}
                    </span>
                    <span className="text-brand-red font-bold text-sm">{session.time}</span>
                  </div>
                  <p className="text-sm text-brand-gray-500 mb-2">{session.location}</p>
                  <span className="inline-block bg-brand-red-light text-brand-red text-xs font-bold px-2 py-1 rounded-full mb-3">
                    {session.level}
                  </span>
                  <p className="text-sm text-brand-gray-600">{session.description}</p>
                  <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <p className="text-xs font-bold text-yellow-800 uppercase">
                      Waiting List Active
                    </p>
                    <p className="text-xs text-yellow-700 mt-1">
                      This session is at capacity. Join the waiting list to secure your spot.
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button href="/sessions">View All Sessions</Button>
        </div>
      </div>
    </section>
  );
}
