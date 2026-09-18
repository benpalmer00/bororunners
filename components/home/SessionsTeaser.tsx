import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";
import type { ClubSession } from "@/lib/sessions";

type SessionsTeaserProps = {
  sessions: ClubSession[];
  weekLabel?: string;
};

export default function SessionsTeaser({ sessions, weekLabel }: SessionsTeaserProps) {
  if (sessions.length === 0) return null;

  return (
    <section className="section-padding bg-brand-gray-50">
      <div className="container-wide mx-auto">
        <SectionHeading
          title="Weekly Sessions"
          subtitle={
            weekLabel
              ? `${weekLabel}. All abilities welcome — register first to secure your place.`
              : "This week's sessions. All abilities welcome — register first to secure your place."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.map((session, i) => (
            <AnimatedSection key={`${session.day}-${session.title}-${session.date || i}`} delay={i * 0.1}>
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
                    {session.abilityLevel || "All Abilities"}
                  </span>
                  <p className="text-sm text-brand-gray-600">{session.description || session.workout}</p>
                  {session.hasWaitingList && (
                    <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <p className="text-xs font-bold text-yellow-800 uppercase">Waiting List Active</p>
                      <p className="text-xs text-yellow-700 mt-1">
                        This session is at capacity. Join the waiting list to secure your spot.
                      </p>
                    </div>
                  )}
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
