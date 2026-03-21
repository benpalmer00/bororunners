import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "How to Join",
  description:
    "Join Bororunners Running Club — Teesside's most inclusive running club. Beginners welcome. Four weekly sessions, dedicated run leaders, all abilities. Running club Middlesbrough.",
};

const steps = [
  {
    title: "Turn Up",
    description:
      "Just come along to any of our sessions. No booking needed (except Thursday — see waiting list). Wear comfortable running clothes and trainers.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Say Hello",
    description:
      "Every session starts with a welcome circle. We'll introduce you to the group and match you with a pace group and run leader.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
  {
    title: "Run at Your Pace",
    description:
      "No pressure, no judgement. Run with a group that matches your ability. Walk breaks are absolutely fine — we all started somewhere.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Join the Community",
    description:
      "Register as a member through England Athletics, join our WhatsApp group, and become part of Teesside's most supportive running family.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function JoinPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image
          src="/images/photos/hero-2.jpg"
          alt="Bororunners runners welcoming new members"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase text-white">
              Join the Club
            </h1>
            <p className="text-xl text-gray-300 mt-4 max-w-xl">
              Whether you&apos;ve never run before or you&apos;re chasing a PB, Bororunners is the place for you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeading
            title="How It Works"
            subtitle="Joining Bororunners is as simple as turning up. Here's what to expect."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 bg-brand-red-light text-brand-red rounded-full flex items-center justify-center mx-auto mb-3 font-display font-bold">
                    {i + 1}
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase text-brand-black mb-2">{step.title}</h3>
                  <p className="text-brand-gray-600 text-sm">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="container-narrow mx-auto">
          <AnimatedSection>
            <SectionHeading title="Session Overview" />
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-brand-black text-white">
                  <tr>
                    <th className="px-6 py-3 text-left font-display text-sm uppercase">Day</th>
                    <th className="px-6 py-3 text-left font-display text-sm uppercase">Time</th>
                    <th className="px-6 py-3 text-left font-display text-sm uppercase">Level</th>
                    <th className="px-6 py-3 text-left font-display text-sm uppercase">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-gray-100">
                  <tr>
                    <td className="px-6 py-4 font-bold">Monday</td>
                    <td className="px-6 py-4">6:10pm</td>
                    <td className="px-6 py-4">All Abilities</td>
                    <td className="px-6 py-4 text-sm text-brand-gray-500">Rotating locations</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">Wednesday</td>
                    <td className="px-6 py-4">6:00pm</td>
                    <td className="px-6 py-4">All Abilities</td>
                    <td className="px-6 py-4 text-sm text-brand-gray-500">Track sessions</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="px-6 py-4 font-bold">Thursday</td>
                    <td className="px-6 py-4">6:10pm</td>
                    <td className="px-6 py-4">All Abilities</td>
                    <td className="px-6 py-4 text-sm font-bold text-yellow-800">Waiting List Active</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">Friday</td>
                    <td className="px-6 py-4">9:15am</td>
                    <td className="px-6 py-4">All Abilities</td>
                    <td className="px-6 py-4 text-sm text-brand-gray-500">Parks & trails</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <AnimatedSection>
            <SectionHeading title="England Athletics Membership" />
            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-brand-gray-600 mb-4">
                Bororunners is affiliated with England Athletics (Club No. 7693694). When you join as a member,
                you&apos;ll register through England Athletics which gives you:
              </p>
              <ul className="space-y-2 text-brand-gray-600 mb-6">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand-red mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Public liability insurance cover during club sessions and races
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand-red mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Discounted entry to affiliated races
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-brand-red mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Access to England Athletics member benefits and resources
                </li>
              </ul>
              <p className="text-brand-gray-500 text-sm">
                Please note: members must be aged 12 or over to join Bororunners Running Club.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-brand-red text-center">
        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-white mb-4">
            Ready to Start?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
            No experience needed. No sign-up required for your first session. Just turn up, say hello, and run with us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/sessions" className="bg-white text-brand-red hover:bg-gray-100">
              View Sessions
            </Button>
            <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-red">
              Get in Touch
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
