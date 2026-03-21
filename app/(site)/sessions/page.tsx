import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import SessionCard from "@/components/sessions/SessionCard";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sessions",
  description:
    "Join Bororunners for four weekly running sessions across Middlesbrough and Teesside. Monday, Wednesday, Thursday evenings and Friday mornings. All abilities welcome with dedicated run leaders.",
};

const sessions = [
  {
    title: "Monday Evening Session",
    day: "Monday",
    time: "6:10pm",
    location: "Rotating locations across Teesside",
    meetingPoint: "Varies weekly — check WhatsApp group",
    abilityLevel: "All Abilities",
    description:
      "Interval and tempo training with multiple pace groups. Sessions include 600m-1200m reps, hill sprints, and progressive tempo runs. Every session has dedicated run leaders to guide pace and keep things sociable.",
  },
  {
    title: "Wednesday Track Session",
    day: "Wednesday",
    time: "6:00pm",
    location: "Track venues (LJ Track, Guisborough, Nunthorpe)",
    meetingPoint: "At the track entrance",
    abilityLevel: "All Abilities",
    description:
      "Track-based speed work including 400m reps, 800m intervals, and speed endurance sets. Multiple ability groups with tailored distances and recovery times. Great for building speed and confidence.",
  },
  {
    title: "Thursday Evening Session",
    day: "Thursday",
    time: "6:10pm",
    location: "Rotating locations (TIE, Coulby Manor Way, Southern Cross)",
    meetingPoint: "Varies weekly — check WhatsApp group",
    abilityLevel: "All Abilities",
    hasWaitingList: true,
    description:
      "Structured training covering tempo runs, intervals, and endurance work. This session is extremely popular and currently operates a waiting list due to high demand.",
  },
  {
    title: "Friday Morning Session",
    day: "Friday",
    time: "9:15am",
    location: "Parks and trails (Stewart Park, Pinchinthorpe, Flatts Lane, Great Ayton)",
    meetingPoint: "Car park at the session location",
    abilityLevel: "All Abilities",
    description:
      "Morning sessions at scenic locations across Teesside. A mix of tempo runs, hill sprints, and 1k repeats. A brilliant way to start the weekend surrounded by beautiful countryside.",
  },
];

export default function SessionsPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src="/images/photos/training-1.jpg"
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
              We run together, for each other. Every session has dedicated run leaders, ability-matched groups, and a big welcome circle for new faces.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeading
            title="Weekly Sessions"
            subtitle="Turn up, introduce yourself, and run at your pace. All abilities welcome."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sessions.map((session, i) => (
              <AnimatedSection key={session.day} delay={i * 0.1}>
                <SessionCard {...session} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

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
                <h3 className="font-display text-lg font-bold uppercase text-brand-black mb-2">Welcome Circle</h3>
                <p className="text-brand-gray-600 text-sm">
                  Every session starts with a welcome circle where members introduce themselves to new runners. You&apos;ll know everyone by name before you start running.
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
            No experience needed. Just turn up, say hello, and run with us.
          </p>
          <Button href="/join" className="bg-white text-brand-red hover:bg-gray-100">
            How to Join
          </Button>
        </AnimatedSection>
      </section>
    </>
  );
}
