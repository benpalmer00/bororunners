import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import SessionCard from "@/components/sessions/SessionCard";
import Button from "@/components/ui/Button";
import { sanityFetch } from "@/sanity/lib/client";
import { getPageImage } from "@/lib/getPageImage";
import { latestTimetableMonthQuery, sessionsQuery, timetableByMonthQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Sessions",
  description:
    "Bororunners runs four weekly sessions across Middlesbrough and Teesside. All sessions operate a waiting list — join via England Athletics to secure your spot. All abilities welcome.",
};

export const revalidate = 3600;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityDoc = any;

// Hardcoded fallback in case Sanity has no session data yet
const fallbackSessions = [
  {
    title: "Monday Evening Session",
    day: "Monday",
    time: "6:10pm",
    location: "Rotating locations across Teesside",
    meetingPoint: "Varies weekly — shared via WhatsApp group",
    abilityLevel: "All Abilities",
    hasWaitingList: true,
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
    hasWaitingList: true,
    description:
      "Track-based speed work including 400m reps, 800m intervals, and speed endurance sets. Multiple ability groups with tailored distances and recovery times. Great for building speed and confidence.",
  },
  {
    title: "Thursday Evening Session",
    day: "Thursday",
    time: "6:10pm",
    location: "Rotating locations (TIE, Coulby Manor Way, Southern Cross)",
    meetingPoint: "Varies weekly — shared via WhatsApp group",
    abilityLevel: "All Abilities",
    hasWaitingList: true,
    description:
      "Structured training covering tempo runs, intervals, and endurance work. All sessions operate a waiting list — register via England Athletics to secure your place.",
  },
  {
    title: "Friday Morning Session",
    day: "Friday",
    time: "9:15am",
    location: "Parks and trails (Stewart Park, Pinchinthorpe, Flatts Lane, Great Ayton)",
    meetingPoint: "Car park at the session location",
    abilityLevel: "All Abilities",
    hasWaitingList: true,
    description:
      "Morning sessions at scenic locations across Teesside. A mix of tempo runs, hill sprints, and 1k repeats. A brilliant way to start the weekend surrounded by beautiful countryside.",
  },
];

type TimetableRow = {
  date: string;
  location: string;
  time: string;
  workout: string;
  isHighlight?: boolean;
};

// Hardcoded fallback in case Sanity has no timetable data yet
const fallbackTimetable: TimetableRow[] = [
  { date: "Mon 30th March", location: "TBC", time: "6:10pm", workout: "1 x 2.2k, 2 x 1.1k, 2-5 x 650m w/ 2 minutes rest" },
  { date: "Wed 1st April", location: "TBC", time: "6:00pm", workout: "6-12 x 300/200's w/ 75s rest" },
  { date: "Thu 2nd April", location: "Great Ayton", time: "6:10pm", workout: "3/4 x 6 minutes Kenyan Hills w/ 2 minutes recovery" },
  { date: "Fri 3rd April", location: "Good Friday", time: "10:00am", workout: "2-6 mile Tempo Run + Hill Sprints" },
  { date: "Mon 6th April", location: "Bank Holiday", time: "10:00am", workout: "2-5 x 2k/1200's @ 10k effort w/ 3 minutes rest" },
  { date: "Wed 8th April", location: "TBC", time: "6:10pm", workout: "6 x 2 minutes @ 5k pace, 6 x 1 minutes @ MP w/ 2 mins → 90s rest" },
  { date: "Thu 9th April", location: "TIE", time: "6:10pm", workout: "6 x 2 minutes @ 5k pace, 6 x 1 minutes @ MP w/ 2 mins → 90s rest" },
  { date: "Fri 10th April", location: "TBC", time: "9:15am", workout: "3-4 x 1 mile @ 10k pace OR 1k @ 5k pace THEN 4 x 300m Paired Relays" },
  { date: "Sun 12th April", location: "Teesside Landmarks", time: "TBC", workout: "Teesside Landmarks with Destination Boro — Details to Follow", isHighlight: true },
  { date: "Mon 13th April", location: "TBC", time: "6:10pm", workout: "2-6 mile Tempo Run" },
  { date: "Wed 15th April", location: "TBC", time: "6:00pm", workout: "4-8 x 800's @ >5k pace w/ 2 minutes rest" },
  { date: "Thu 16th April", location: "Pinchinthorpe", time: "6:10pm", workout: "4-8 x 3 minutes @ >5k pace w/ 2 minutes rest" },
  { date: "Fri 17th April", location: "TBC", time: "9:15am", workout: "8-14 x 1 minute @ MP w/ 90s rest" },
  { date: "Mon 20th April", location: "TBC", time: "6:10pm", workout: "2-5 x 1 mile/1k repeats w/ 3 minutes rest" },
  { date: "Wed 22nd April", location: "Spring Coast 5k", time: "TBC", workout: "Spring Coast 5k — Race Event!", isHighlight: true },
  { date: "Thu 23rd April", location: "Stewart's Park", time: "6:10pm", workout: "Tempo Run OR 3-4 x 1 mile reps @ HM pace (2 mins float)" },
  { date: "Fri 24th April", location: "TBC", time: "9:15am", workout: "Tempo Run OR 3-4 x 1k @ HM pace (2 mins float)" },
  { date: "Mon 27th April", location: "TBC", time: "6:10pm", workout: "Tempo Run OR 3-4 x 1k @ HM pace (2 mins float)" },
  { date: "Wed 29th April", location: "TBC", time: "6:10pm", workout: "Tempo Run OR 3-4 x 1k @ HM pace (2 mins float)" },
  { date: "Thu 30th April", location: "TIE", time: "6:10pm", workout: "Tempo Run OR 3-4 x 1k @ HM pace (2 mins float)" },
  { date: "Fri 1st May", location: "TBC", time: "9:15am", workout: "TBC" },
];
const fallbackMonth = "April 2026";

export default async function SessionsPage() {
  // Fetch session cards and timetable from Sanity, fall back to hardcoded data
  const [sessionsHero, sanitySessions, latestMonth] = await Promise.all([
    getPageImage("sessionsHeroImage", "/images/photos/training-1.jpg"),
    sanityFetch<SanityDoc[]>(sessionsQuery),
    sanityFetch<string>(latestTimetableMonthQuery),
  ]);

  const sessions = sanitySessions && sanitySessions.length > 0
    ? sanitySessions.map((s: SanityDoc) => ({
        title: s.title,
        day: s.day,
        time: s.time,
        location: s.location || "",
        meetingPoint: s.meetingPoint || undefined,
        abilityLevel: s.abilityLevel || "All Abilities",
        hasWaitingList: s.hasWaitingList || false,
        waitingListUrl: s.waitingListUrl || undefined,
        description: s.description || "",
      }))
    : fallbackSessions;

  // Show the most recent month that has timetable entries in Sanity
  let timetableMonth: string = fallbackMonth;
  let timetable: TimetableRow[] = fallbackTimetable;

  if (latestMonth) {
    const rows = await sanityFetch<TimetableRow[]>(timetableByMonthQuery, { month: latestMonth });
    if (rows && rows.length > 0) {
      timetableMonth = latestMonth;
      timetable = rows;
    }
  }

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
            subtitle="All sessions operate a waiting list — register first, then come and run at your pace. All abilities welcome."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sessions.map((session, i) => (
              <AnimatedSection key={`${session.day}-${session.title}`} delay={i * 0.1}>
                <SessionCard {...session} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-black">
        <div className="container-wide mx-auto">
          <SectionHeading
            title={`${timetableMonth} Timetable`}
            subtitle="This month's full session schedule with locations and workouts."
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
                  {timetable.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-brand-gray-800 ${
                        row.isHighlight
                          ? "bg-brand-red/20 text-white font-bold"
                          : i % 2 === 0
                          ? "bg-brand-gray-900/30"
                          : ""
                      }`}
                    >
                      <td className="py-3 px-4 font-semibold text-white whitespace-nowrap">{row.date}</td>
                      <td className="py-3 px-4">{row.location}</td>
                      <td className="py-3 px-4">{row.time}</td>
                      <td className="py-3 px-4">{row.workout}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
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
