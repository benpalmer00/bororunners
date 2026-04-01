import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import WaitlistForm from "@/components/join/WaitlistForm";
import { getPageImage } from "@/lib/getPageImage";

export const metadata: Metadata = {
  title: "How to Join",
  description:
    "Join Bororunners Running Club — Teesside's most inclusive running club. All sessions operate a waiting list. Submit your details below and Ben will be in touch. All abilities welcome.",
};

const perks = [
  { label: "Public liability insurance during club sessions and races" },
  { label: "Discounted entry to England Athletics affiliated races" },
  { label: "Access to England Athletics member benefits and resources" },
  { label: "Added to the club WhatsApp group for session info" },
  { label: "Matched with a pace group and dedicated run leader" },
  { label: "Part of Teesside's most supportive running community" },
];

const whatHappensNext = [
  {
    title: "We review your request",
    description: "Ben will receive your details and check availability across your chosen sessions.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: "You get confirmed",
    description: "As soon as a place opens up, Ben will be in touch to confirm your spot and get you added to the WhatsApp group.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Come and run",
    description: "Every session starts with a welcome circle. You'll be introduced by name, matched with a pace group, and made to feel at home.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default async function JoinPage() {
  const [joinHero, joinMembership] = await Promise.all([
    getPageImage("joinHeroImage", "/images/photos/hero-2.jpg"),
    getPageImage("joinMembershipImage", "/images/photos/group-2.jpg", 800, 1000),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image
          src={joinHero}
          alt="Bororunners runners welcoming new members"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/65" />
        <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-block bg-brand-red text-white px-4 py-1 rounded-full text-sm font-display font-bold uppercase tracking-wider mb-4">
              All Abilities Welcome
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase text-white">
              Join the Club
            </h1>
            <p className="text-xl text-gray-300 mt-4 max-w-xl">
              Whether you&apos;ve never run before or you&apos;re chasing a PB — there&apos;s a place for you at Bororunners.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Waiting list notice banner */}
      <section className="bg-yellow-400 py-4">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-yellow-900 font-display font-bold uppercase tracking-wide text-sm flex items-center justify-center gap-2">
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            All sessions currently operate a waiting list — submit your details below to get started
          </p>
        </div>
      </section>

      {/* Main waitlist section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — info */}
            <AnimatedSection>
              <span className="inline-block bg-brand-red-light text-brand-red px-3 py-1 rounded-full text-sm font-display font-bold uppercase tracking-wider mb-4">
                Waiting List
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-brand-black mb-4">
                Join the Waiting List
              </h2>
              <p className="text-brand-gray-600 mb-8 leading-relaxed">
                Due to the popularity of our sessions, all four weekly runs currently operate a waiting list.
                Fill in the form and Ben will be in touch as soon as a place becomes available.
              </p>

              {/* What happens next */}
              <div className="space-y-6 mb-10">
                {whatHappensNext.map((step, i) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center shrink-0 font-display font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-display font-bold uppercase text-brand-black mb-1">{step.title}</h3>
                      <p className="text-brand-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sessions summary */}
              <div className="bg-brand-gray-50 rounded-xl p-6">
                <h3 className="font-display font-bold uppercase text-brand-black mb-4 text-sm tracking-wider">Weekly Sessions</h3>
                <div className="space-y-2">
                  {[
                    { day: "Monday", time: "6:10pm" },
                    { day: "Wednesday", time: "6:00pm" },
                    { day: "Thursday", time: "6:10pm" },
                    { day: "Friday", time: "9:15am" },
                  ].map((s) => (
                    <div key={s.day} className="flex items-center justify-between py-2 border-b border-brand-gray-200 last:border-0">
                      <span className="font-bold text-brand-black text-sm">{s.day}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-brand-gray-500">{s.time}</span>
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-yellow-800 bg-yellow-100 px-2 py-0.5 rounded-full">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Waiting list
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right — form */}
            <AnimatedSection delay={0.2}>
              <WaitlistForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Membership perks */}
      <section className="section-padding bg-brand-gray-50">
        <div className="container-narrow mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-brand-red-light text-brand-red px-3 py-1 rounded-full text-sm font-display font-bold uppercase tracking-wider mb-4">
                  England Athletics Affiliated
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-brand-black mb-4">
                  What You Get as a Member
                </h2>
                <p className="text-brand-gray-600 mb-6">
                  Bororunners is affiliated with England Athletics (Club No. 7693694). Once your place is confirmed, you&apos;ll register through England Athletics and unlock a range of benefits.
                </p>
                <ul className="space-y-3">
                  {perks.map((perk) => (
                    <li key={perk.label} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-brand-red rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-brand-gray-600 text-sm">{perk.label}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-brand-gray-400 text-xs mt-6">
                  Members must be aged 12 or over to join Bororunners Running Club.
                </p>
              </div>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={joinMembership}
                  alt="Bororunners members at a session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-red text-center">
        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-white mb-4">
            Any Questions?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
            Not sure which session is right for you? Get in touch and we&apos;ll help you find your feet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/sessions" variant="white">
              View Sessions
            </Button>
            <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-red">
              Contact Us
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
