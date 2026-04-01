import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { getPageImage } from "@/lib/getPageImage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bororunners Running Club — from 8 founding members in 2022 to 272 registered runners and England Athletics Club Committee of the Year 2024. Teesside's most inclusive running club.",
};

const milestones = [
  {
    date: "March 2022",
    title: "Bororunners Founded",
    description: "Ben Palmer and 8 founding members set out to create a different kind of running club — one built on community, inclusivity, and celebration.",
  },
  {
    date: "2022–2023",
    title: "England Athletics Affiliation",
    description: "The club officially affiliated with England Athletics (Club No. 7693694), establishing welfare officers and professional standards from day one.",
  },
  {
    date: "2023",
    title: "Past 100 Members",
    description: "Rapid growth saw Bororunners pass the 100-member milestone, with new runners joining every week through word of mouth and social media.",
  },
  {
    date: "2024",
    title: "Club Committee of the Year",
    description: "Bororunners won the England Athletics Club Committee of the Year 2024. Ben Palmer received the individual volunteer award.",
  },
  {
    date: "2025",
    title: "272 Members & Growing",
    description: "Four weekly sessions, nine dedicated run leaders, a full committee, and a community that stays to cheer every runner home.",
  },
];

const values = [
  {
    title: "Inclusive",
    description: "Every runner, every ability, every background. We create space for everyone to belong.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Supportive",
    description: "Run leaders in every group, mental health champions, and a welcoming circle at every session.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Celebratory",
    description: "We stay to the end of every race. Two lines, clapping everyone home. Every runner matters.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

export default async function AboutPage() {
  const [aboutHero, aboutStory] = await Promise.all([
    getPageImage("aboutHeroImage", "/images/photos/hero-3.jpg"),
    getPageImage("aboutStoryImage", "/images/photos/club-night-1.jpg", 800, 1000),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image
          src={aboutHero}
          alt="Bororunners Running Club group photo"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase text-white">
              Our Story
            </h1>
            <p className="text-xl text-gray-300 mt-4 max-w-xl">
              From 8 runners in Stewart&apos;s Park to 272 members and England Athletics Club Committee of the Year.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Origin */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-brand-black mb-6">
                  Built on Community
                </h2>
                <p className="text-brand-gray-600 mb-4 leading-relaxed">
                  Bororunners was founded by Ben Palmer, a passionate runner and coach from Middlesbrough.
                  Ben first started running at primary school, progressing through cross country competitions
                  before joining Middlesbrough Mandale athletics club. He found a love for the sport through
                  racing up and down the country with a close group of friends.
                </p>
                <p className="text-brand-gray-600 mb-4 leading-relaxed">
                  He began coaching during his second year of university, discovering he loved helping people
                  reach their potential. In 2022, he founded Bororunners with a group of friends, determined
                  to create something different — a community-centred club where runners of all abilities
                  feel genuinely welcome and celebrated.
                </p>
                <blockquote className="border-l-4 border-brand-red pl-4 italic text-brand-gray-600 my-6">
                  &ldquo;My favourite thing about coaching is seeing people improve but also to watch people build
                  friendships. At Bororunners we are people of all different ages and abilities so to give
                  people a platform and environment to enjoy their running at whatever level has created a
                  really inclusive environment.&rdquo;
                  <span className="block mt-2 text-brand-red font-bold not-italic text-sm">— Ben Palmer, Founder</span>
                </blockquote>
              </div>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={aboutStory}
                  alt="Ben Palmer coaching at a Bororunners session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-brand-gray-50">
        <div className="container-wide mx-auto">
          <SectionHeading title="What Makes Us Different" subtitle="More than a running club — we're a community." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-md text-center h-full">
                  <div className="w-16 h-16 bg-brand-red-light text-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase text-brand-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-brand-gray-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <SectionHeading title="Our Journey" subtitle="Key milestones in the Bororunners story." />

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-gray-200 -translate-x-1/2" />

            {milestones.map((milestone, i) => (
              <AnimatedSection key={milestone.date} delay={i * 0.1}>
                <div className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-brand-red rounded-full -translate-x-1/2 mt-1.5 ring-4 ring-white" />
                  <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                    <span className="inline-block bg-brand-red text-white px-3 py-1 rounded-full text-xs font-display font-bold uppercase mb-2">
                      {milestone.date}
                    </span>
                    <h3 className="font-display text-xl font-bold uppercase text-brand-black mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-brand-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-red text-center">
        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-white mb-4">
            Be Part of the Story
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
            Join 272 members who&apos;ve found their running home. All abilities, all welcome.
          </p>
          <Button href="/join" variant="white">
            Join Bororunners
          </Button>
        </AnimatedSection>
      </section>
    </>
  );
}
