import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamCard from "@/components/team/TeamCard";
import { sanityFetch, urlFor } from "@/sanity/lib/client";
import { getPageImage } from "@/lib/getPageImage";
import { teamMembersQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the Bororunners Running Club committee and run leaders. The volunteers who make Teesside's fastest growing running club possible.",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityTeamMember = any;

type TeamMember = {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
};

// Fallback data
const fallbackChairman: TeamMember = { name: "Ben Palmer", role: "Chairman & Head Coach", photo: "/images/team/ben-p.jpeg" };

const fallbackOfficers: TeamMember[] = [
  { name: "Jack McGarrity", role: "Club Coach", photo: "/images/team/jack-m.jpeg" },
  { name: "Lindsey Scott", role: "Club Secretary", photo: "/images/team/lindsey-s.jpeg" },
  { name: "Adelle Almond", role: "Club Treasurer" },
  { name: "Katie Lomas", role: "Club Ambassador", photo: "/images/team/katie-l.jpeg" },
  { name: "Rachel Cowperthwaite", role: "Membership Secretary" },
];

const fallbackSupport: TeamMember[] = [
  { name: "Elaine Watson", role: "Welfare Officer & DBS Verifier" },
  { name: "Robyn Cairney", role: "Mental Health Champion", photo: "/images/team/robyn-c.jpeg" },
  { name: "Kirsty Beattie", role: "Mental Health Champion", photo: "/images/team/kirsty-b.jpeg" },
  { name: "Daniel Kelly", role: "Welfare Officer" },
  { name: "Mike McCann", role: "Welfare Officer" },
  { name: "Karen Lavender", role: "Welfare Officer" },
  { name: "David Jukes", role: "Events & Charity" },
];

const fallbackRunLeaders: TeamMember[] = [
  { name: "Ben Palmer", role: "Run Leader", photo: "/images/team/ben-p.jpeg" },
  { name: "Lindsey Scott", role: "Run Leader", photo: "/images/team/lindsey-s.jpeg" },
  { name: "Mandy Lorraine", role: "Run Leader", photo: "/images/team/mandy-w.jpeg" },
  { name: "Katie Lomas", role: "Run Leader", photo: "/images/team/katie-l.jpeg" },
  { name: "Paul Bowman", role: "Run Leader", photo: "/images/team/paul-b.jpeg" },
  { name: "Kirk Sansom", role: "Run Leader", photo: "/images/team/kirk-s.jpeg" },
  { name: "Robyn Cairney", role: "Run Leader", photo: "/images/team/robyn-c.jpeg" },
  { name: "Kirsty Beattie", role: "Run Leader", photo: "/images/team/kirsty-b.jpeg" },
  { name: "Danielle Laverick", role: "Run Leader" },
];

function mapMember(m: SanityTeamMember): TeamMember {
  return {
    name: m.name,
    role: m.role,
    photo: m.photo ? urlFor(m.photo).width(300).height(300).url() : undefined,
    bio: m.bio,
  };
}

export default async function TeamPage() {
  const [teamHero, mascotPhoto] = await Promise.all([
    getPageImage("teamHeroImage", "/images/photos/group-1.jpg"),
    getPageImage("mascotPhoto", "", 300, 300),
  ]);
  const sanityMembers = await sanityFetch<SanityTeamMember[]>(teamMembersQuery);

  let chairman: TeamMember = fallbackChairman;
  let officers: TeamMember[] = fallbackOfficers;
  let support: TeamMember[] = fallbackSupport;
  let runLeaders: TeamMember[] = fallbackRunLeaders;

  if (sanityMembers && sanityMembers.length > 0) {
    const chairmanArr = sanityMembers.filter((m: SanityTeamMember) => m.category === "chairman").map(mapMember);
    const officerArr = sanityMembers.filter((m: SanityTeamMember) => m.category === "officer").map(mapMember);
    const supportArr = sanityMembers.filter((m: SanityTeamMember) => m.category === "support").map(mapMember);
    const runLeaderArr = sanityMembers.filter((m: SanityTeamMember) => m.category === "runLeader").map(mapMember);

    if (chairmanArr.length > 0) chairman = chairmanArr[0];
    if (officerArr.length > 0) officers = officerArr;
    if (supportArr.length > 0) support = supportArr;
    if (runLeaderArr.length > 0) runLeaders = runLeaderArr;
  }

  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src={teamHero}
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

          {/* Ben Palmer — Chairman */}
          <div className="flex justify-center mb-8">
            <AnimatedSection>
              <div className="w-56">
                <TeamCard {...chairman} highlight />
              </div>
            </AnimatedSection>
          </div>

          {/* Connector line */}
          <div className="flex justify-center mb-8">
            <div className="w-px h-8 bg-brand-red/30" />
          </div>

          {/* All committee members */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {[...officers, ...support].map((member, i) => (
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

          <div className="flex flex-wrap justify-center gap-6 max-w-[1000px] mx-auto">
            {runLeaders.map((leader, i) => (
              <AnimatedSection key={leader.name} delay={i * 0.05}>
                <div className="w-44">
                  <TeamCard name={leader.name} role={leader.role || "Run Leader"} photo={leader.photo} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Badger — Club Mascot spotlight */}
      <section className="section-padding bg-brand-black">
        <div className="container-wide mx-auto text-center">
          <AnimatedSection>
            <p className="text-brand-red font-display font-bold uppercase tracking-widest text-sm mb-2">
              Very Important Member
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-white mb-10">
              Club Mascot
            </h2>
            <div className="inline-block">
              <div className="relative bg-brand-red/10 border-2 border-brand-red rounded-2xl px-12 py-10 max-w-sm mx-auto">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-red text-white text-xs font-display font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  ⭐ Official Mascot
                </div>
                <div className="relative w-28 h-28 rounded-full bg-brand-red flex items-center justify-center mx-auto mb-4 ring-4 ring-brand-red/40 overflow-hidden">
                  {mascotPhoto ? (
                    <Image src={mascotPhoto} alt="Badger the club mascot" fill className="object-cover" sizes="112px" />
                  ) : (
                    <span className="font-display text-4xl font-bold text-white">B</span>
                  )}
                </div>
                <h3 className="font-display text-3xl font-bold uppercase text-white mb-1">Badger</h3>
                <p className="text-brand-red font-medium mb-4">Club Mascot</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Bororunners&apos; most beloved member. Never misses a session, never complains about the weather,
                  and always first to celebrate at the finish line.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
