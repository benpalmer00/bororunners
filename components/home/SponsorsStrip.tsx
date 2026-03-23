"use client";

import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";

type Sponsor = {
  name: string;
  logo: string;
  url: string;
  darkBg?: boolean;
};

const fallbackSponsors: Sponsor[] = [
  { name: "Sprinters Sportswear", logo: "/images/sponsors/sprinters-sportswear.png", url: "https://www.sprinterssportswear.co.uk", darkBg: false },
  { name: "Let's Run", logo: "/images/sponsors/lets-run.jpeg", url: "#", darkBg: false },
  { name: "HIGH5 Sports Nutrition", logo: "/images/sponsors/high5.webp", url: "https://highfive.co.uk", darkBg: false },
  { name: "Bimble & Bolt", logo: "/images/sponsors/bimble-and-bolt.avif", url: "#", darkBg: false },
  { name: "SportsShoes.com", logo: "/images/sponsors/sportsshoes.webp", url: "https://www.sportsshoes.com", darkBg: true },
];

type SponsorsStripProps = {
  sponsors?: Sponsor[];
};

export default function SponsorsStrip({ sponsors }: SponsorsStripProps) {
  const data = sponsors && sponsors.length > 0 ? sponsors : fallbackSponsors;

  return (
    <section className="py-16 bg-white">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-sm font-display font-bold uppercase tracking-wider text-brand-gray-400 mb-12">
            Our Sponsors &amp; Partners
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-8 items-center">
          {data.map((sponsor, i) => (
            <AnimatedSection key={sponsor.name} delay={i * 0.08} className="w-[calc(50%-1rem)] sm:w-[calc(33.333%-1.5rem)] lg:w-[calc(20%-1.6rem)]">
              <a
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center p-4 rounded-xl hover:shadow-md transition-all duration-300 aspect-[3/2] ${
                  sponsor.darkBg
                    ? "bg-brand-black hover:bg-brand-gray-800"
                    : "bg-brand-gray-50 hover:bg-brand-gray-100"
                }`}
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={160}
                  height={80}
                  className="object-contain max-h-16 w-auto group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
