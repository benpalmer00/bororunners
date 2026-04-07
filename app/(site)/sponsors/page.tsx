import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SponsorCard from "@/components/sponsors/SponsorCard";

export const metadata: Metadata = {
  title: "Sponsors & Partners",
  description:
    "Bororunners Running Club sponsors and partners. Proudly supported by Let's Run, Sprinters Sportswear, HIGH5, Bimble & Bolt, and SportsShoes.com.",
};

const providers = [
  {
    name: "Let's Run",
    logo: "/images/sponsors/lets-run.jpeg",
    description: "Local running shop supporting the North East running community with expert advice, gait analysis, and a great range of running shoes and gear.",
    memberDiscount: "Bororunners member discount available in store.",
    websiteUrl: "#",
  },
  {
    name: "Sprinters Sportswear",
    logo: "/images/sponsors/sprinters-sportswear.png",
    description: "Our official kit supplier. Sprinters Sportswear provide all Bororunners club merchandise, from race vests to hoodies.",
    memberDiscount: "Bororunners member discounts available — ask at any session for details.",
    websiteUrl: "https://www.sprinterssportswear.co.uk",
  },
];

const discountProviders = [
  {
    name: "HIGH5 Sports Nutrition",
    logo: "/images/sponsors/high5.webp",
    description: "Sports nutrition partner providing energy gels, drinks, and recovery products. Trusted by runners and athletes worldwide.",
    memberDiscount: "Exclusive Bororunners discount available — ask a committee member for your code.",
    websiteUrl: "https://highfive.co.uk",
  },
  {
    name: "Bimble & Bolt",
    logo: "/images/sponsors/bimble-and-bolt.avif",
    description: "Local Teesside business proudly supporting the Bororunners community.",
    memberDiscount: "Exclusive Bororunners discount available — ask a committee member for your code.",
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
      {/* Hero */}
      <section className="section-padding pt-24 md:pt-32 pb-12">
        <div className="container-wide mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block bg-brand-red-light text-brand-red px-3 py-1 rounded-full text-sm font-display font-bold uppercase tracking-wider mb-4">
              Our Partners
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold uppercase text-brand-black mb-4">
              Sponsors & Partners
            </h1>
            <p className="text-brand-gray-600 text-lg max-w-2xl mx-auto">
              These brilliant businesses support Bororunners and help keep Teesside running. We&apos;re proud to work with every one of them.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Providers */}
      <section className="section-padding bg-brand-gray-50">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-brand-gray-200" />
              <div className="text-center">
                <span className="inline-block bg-brand-black text-white px-6 py-2 rounded-full font-display font-bold uppercase tracking-wider text-sm">
                  Providers
                </span>
              </div>
              <div className="flex-1 h-px bg-brand-gray-200" />
            </div>
          </AnimatedSection>

          <p className="text-center text-brand-gray-500 mb-8 max-w-xl mx-auto">
            Our official kit and retail partners — the businesses that equip and support Bororunners.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {providers.map((sponsor, i) => (
              <AnimatedSection key={sponsor.name} delay={i * 0.1}>
                <SponsorCard {...sponsor} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Discount Providers */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-brand-gray-200" />
              <div className="text-center">
                <span className="inline-block bg-brand-red text-white px-6 py-2 rounded-full font-display font-bold uppercase tracking-wider text-sm">
                  Discount Providers
                </span>
              </div>
              <div className="flex-1 h-px bg-brand-gray-200" />
            </div>
          </AnimatedSection>

          <p className="text-center text-brand-gray-500 mb-8 max-w-xl mx-auto">
            Exclusive discounts for Bororunners members. Ask a committee member for your discount code at any session.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {discountProviders.map((sponsor, i) => (
              <AnimatedSection key={sponsor.name} delay={i * 0.1}>
                <SponsorCard {...sponsor} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Become a sponsor */}
      <section className="section-padding bg-brand-black text-center">
        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-white mb-4">
            Become a Partner
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            Interested in sponsoring Teesside&apos;s fastest growing running club? We&apos;d love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-brand-red text-white font-display font-bold uppercase px-6 py-3 rounded-md hover:bg-red-700 transition-colors"
          >
            Get in Touch
          </a>
        </AnimatedSection>
      </section>
    </>
  );
}
