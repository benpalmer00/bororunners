import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import SponsorCard from "@/components/sponsors/SponsorCard";

export const metadata: Metadata = {
  title: "Sponsors & Partners",
  description:
    "Bororunners Running Club sponsors and partners. Supporting Teesside's fastest growing running club.",
};

const sponsors = [
  {
    name: "Sprinters Sportswear",
    logo: "/images/sponsors/sprinters-sportswear.png",
    description: "Our official kit supplier. Sprinters Sportswear provide all Bororunners club merchandise, from race vests to hoodies.",
    memberDiscount: "Bororunners member discounts available — ask at any session for details.",
    websiteUrl: "https://www.sprinterssportswear.co.uk",
  },
  {
    name: "Let's Run",
    logo: "/images/sponsors/lets-run.jpeg",
    description: "Local running shop supporting the North East running community with expert advice, gait analysis, and a great range of running shoes and gear.",
    memberDiscount: "Bororunners member discount available in store.",
    websiteUrl: "#",
  },
  {
    name: "HIGH5 Sports Nutrition",
    logo: "/images/sponsors/high5.webp",
    description: "Sports nutrition partner providing energy gels, drinks, and recovery products. Trusted by runners and athletes worldwide.",
    websiteUrl: "https://highfive.co.uk",
  },
  {
    name: "Bimble & Bolt",
    logo: "/images/sponsors/bimble-and-bolt.avif",
    description: "Local Teesside business supporting the Bororunners community. A proud partner of the club.",
    websiteUrl: "#",
  },
  {
    name: "SportsShoes.com",
    logo: "/images/sponsors/sportsshoes.png",
    description: "Online retailer for running shoes and sportswear. Wide range of trail and road shoes from all major brands at competitive prices.",
    memberDiscount: "Exclusive Bororunners discount code — ask a committee member.",
    websiteUrl: "https://www.sportsshoes.com",
  },
];

export default function SponsorsPage() {
  return (
    <>
      <section className="section-padding pt-24 md:pt-32">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Sponsors & Partners"
              subtitle="These brilliant businesses support Bororunners and the running community in Teesside."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor, i) => (
              <AnimatedSection key={sponsor.name} delay={i * 0.1}>
                <SponsorCard {...sponsor} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="container-narrow mx-auto text-center">
          <AnimatedSection>
            <div className="relative w-48 h-48 mx-auto mb-6">
              <Image
                src="/images/sponsors/england-athletics.jpeg"
                alt="England Athletics Certificate of Affiliation — Boro Runners (7693694)"
                fill
                className="object-contain"
                sizes="192px"
              />
            </div>
            <h3 className="font-display text-2xl font-bold uppercase text-brand-black mb-2">
              England Athletics Affiliated
            </h3>
            <p className="text-brand-gray-600 max-w-xl mx-auto">
              Bororunners is an England Athletics affiliated club (No. 7693694). This ensures all members
              have insurance cover, access to affiliated race discounts, and the highest coaching and
              welfare standards.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto text-center">
          <AnimatedSection>
            <SectionHeading
              title="Become a Sponsor"
              subtitle="Interested in sponsoring Teesside's fastest growing running club?"
            />
            <p className="text-brand-gray-600 max-w-xl mx-auto mb-8">
              We&apos;re always looking for local businesses and brands who share our values. Get in touch
              to discuss partnership opportunities.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-brand-red text-white font-display font-bold uppercase px-6 py-3 rounded-md hover:bg-brand-red-dark transition-colors"
            >
              Contact Us About Sponsorship
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
