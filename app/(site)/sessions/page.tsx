import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import SessionCard from "@/components/sessions/SessionCard";
import Button from "@/components/ui/Button";
import { getPageImage } from "@/lib/getPageImage";
import { getWeekLabel, getWeeklySessions } from "@/lib/sessions";

export const metadata: Metadata = {
  title: "Sessions",
  description:
    "Bororunners runs weekly sessions across Middlesbrough and Teesside. All sessions operate a waiting list — join via England Athletics to secure your spot. All abilities welcome.",
};

export default async function SessionsPage() {
  const sessionsHero = await getPageImage("sessionsHeroImage", "/images/photos/training-1.jpg");
  const sessions = getWeeklySessions();
  const weekLabel = getWeekLabel();

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src={sessionsHero}
          alt="Bororunners training session"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase text-white">Sessions</h1>
            <p className="text-xl text-gray-300 mt-4 max-w-xl">
              All sessions operate a waiting list. Register via England Athletics to secure your place, then run with dedicated run leaders and ability-matched groups.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeading
            title="Weekly Sessions"
            subtitle={`${weekLabel}. Days without a session are left off the list.`}
          />

          {sessions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sessions.map((session, i) => (
                <AnimatedSection key={`${session.day}-${session.title}-${session.date || i}`} delay={i * 0.1}>
                  <SessionCard
                    title={session.title}
                    day={session.day}
                    time={session.time}
                    location={session.location}
                    meetingPoint={session.meetingPoint}
                    abilityLevel={session.abilityLevel || "All Abilities"}
                    description={session.description || session.workout || ""}
                    hasWaitingList={session.hasWaitingList}
                    waitingListUrl={session.waitingListUrl}
                  />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <p className="text-brand-gray-500">No sessions listed for this week yet.</p>
          )}
        </div>
      </section>

      {sessions.length > 0 && (
        <section className="section-padding bg-brand-black">
          <div className="container-wide mx-auto">
            <SectionHeading
              title={`${weekLabel} Timetable`}
              subtitle="This week's session schedule with locations and workouts."
              light
            />

            <AnimatedSection>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-brand-gray-700">
                      <th className="py-3 px-4 font-display uppercase text-brand-red text-xs tracking-wider">Date</th>
                      <th className="py-3 px-4 font-display uppercase text-brand-red text-xs tracking-wider">Location</th>
                      <th className="py-3 px-4 font-display uppercase text-brand-red text-xs tracking-wider">Time</th>
                      <th className="py-3 px-4 font-display uppercase text-brand-red text-xs tracking-wider">Workout</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {sessions.map((row, i) => (
                      <tr
                        key={`${row.day}-${row.date || i}`}
                        className={`border-b border-brand-gray-800 ${
                          row.isHighlight
                            ? "bg-brand-red/20 text-white font-bold"
                            : i % 2 === 0
                            ? "bg-brand-gray-900/30"
                            : ""
                        }`}
                      >
                        <td className="py-3 px-4 font-semibold text-white whitespace-nowrap">
                          {row.date || row.day}
                        </td>
                        <td className="py-3 px-4">{row.location}</td>
                        <td className="py-3 px-4">{row.time}</td>
                        <td className="py-3 px-4">{row.workout || row.description || row.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      <section className="section-padding bg-brand-gray-50">
        <div className="container-narrow mx-auto text-center">
          <AnimatedSection>
            <SectionHeading
              title="What to Expect"
              subtitle="Joining your first session? Here's what happens."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center font-display font-bold text-lg mb-4">1</div>
                <h3 className="font-display text-lg font-bold uppercase text-brand-black mb-2">Register First</h3>
                <p className="text-brand-gray-600 text-sm">
                  All sessions operate a waiting list. Join via England Athletics to secure your spot — once you&apos;re registered, you&apos;ll be added to the WhatsApp group with all session details.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center font-display font-bold text-lg mb-4">2</div>
                <h3 className="font-display text-lg font-bold uppercase text-brand-black mb-2">Find Your Group</h3>
                <p className="text-brand-gray-600 text-sm">
                  You&apos;ll be placed in a pace group that matches your ability. Each group has a dedicated run leader to guide pace and keep things sociable.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center font-display font-bold text-lg mb-4">3</div>
                <h3 className="font-display text-lg font-bold uppercase text-brand-black mb-2">Run & Celebrate</h3>
                <p className="text-brand-gray-600 text-sm">
                  Run at your pace, supported by your group. Afterwards, stick around for a chat — the social side is just as important as the running.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-brand-red text-center">
        <AnimatedSection>
          <h2 className="font-display text-4xl font-bold uppercase text-white mb-4">
            Ready to Join a Session?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
            No experience needed. Register via England Athletics, join the waiting list, and we&apos;ll see you at a session.
          </p>
          <Button href="/join" variant="white">
            How to Join
          </Button>
        </AnimatedSection>
      </section>
    </>
  );
}
