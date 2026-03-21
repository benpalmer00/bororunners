import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamCard from "@/components/team/TeamCard";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the Bororunners Running Club committee and run leaders. The volunteers who make Teesside's fastest growing running club possible.",
};

const committee = [
  { name: "Ben Palmer", role: "Chairman & Head Coach", photo: "/images/team/ben-p.jpeg" },
  { name: "Jack McGarrity", role: "Club Coach", photo: "/images/team/jack-m.jpeg" },
  { name: "Lindsey Scott", role: "Club Secretary", photo: "/images/team/lindsey-s.jpeg" },
  { name: "Katie Lomas", role: "Club Ambassador", photo: "/images/team/katie-l.jpeg" },
  { name: "Rachel Cowperthwaite", role: "Membership Secretary", photo: "/images/team/robyn-c.jpeg" },
  { name: "Robyn Cairney", role: "Mental Health Champion", photo: "/images/team/robyn-c.jpeg" },
  { name: "Kirsty Beattie", role: "Mental Health Champion", photo: "/images/team/kirsty-b.jpeg" },
  { name: "Kirk Sansom", role: "Run Leader", photo: "/images/team/kirk-s.jpeg" },
  { name: "Mandy Lorraine", role: "Run Leader", photo: "/images/team/mandy-w.jpeg" },
  { name: "Paul Bowman", role: "Run Leader", photo: "/images/team/paul-b.jpeg" },
];

export default function TeamPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src="/images/photos/group-1.jpg"
          alt="Bororunners team photo"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase text-white">Meet the Team</h1>
            <p className="text-xl text-gray-300 mt-4 max-w-xl">
              The volunteers who make Bororunners possible. Coaches, run leaders, welfare officers, and more.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeading
            title="Club Committee 2026"
            subtitle="Our dedicated committee keeps the club running smoothly behind the scenes."
          />

          <AnimatedSection>
            <div className="relative aspect-[16/9] md:aspect-[2/1] rounded-xl overflow-hidden shadow-2xl mb-16">
              <Image
                src="/images/team/committee-2026.png"
                alt="Boro Runners Club Committee 2026"
                fill
                className="object-contain bg-brand-gray-50"
                sizes="100vw"
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {committee.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.05}>
                <TeamCard {...member} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="container-wide mx-auto">
          <SectionHeading
            title="Run Leaders 2026"
            subtitle="Our run leaders guide every pace group, keeping sessions safe, sociable, and fun."
          />

          <AnimatedSection>
            <div className="relative aspect-[16/9] md:aspect-[2/1] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team/run-leaders-2026.png"
                alt="Boro Runners Run Leaders 2026"
                fill
                className="object-contain bg-brand-gray-50"
                sizes="100vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
