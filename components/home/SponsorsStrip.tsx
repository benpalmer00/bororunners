"use client";

import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";

const sponsors = [
  { name: "Sprinters Sportswear", logo: "/images/sponsors/sprinters-sportswear.png", url: "https://www.sprinterssportswear.co.uk" },
  { name: "Let's Run", logo: "/images/sponsors/lets-run.jpeg", url: "#" },
  { name: "HIGH5 Sports Nutrition", logo: "/images/sponsors/high5.webp", url: "https://highfive.co.uk" },
  { name: "Bimble & Bolt", logo: "/images/sponsors/bimble-and-bolt.avif", url: "#" },
  { name: "SportsShoes.com", logo: "/images/sponsors/sportsshoes.png", url: "https://www.sportsshoes.com" },
  { name: "England Athletics", logo: "/images/sponsors/england-athletics.jpeg", url: "https://www.englandathletics.org" },
];

export default function SponsorsStrip() {
  return (
    <section className="py-12 bg-brand-gray-50 overflow-hidden">
      <AnimatedSection>
        <p className="text-center text-sm font-display font-bold uppercase tracking-wider text-brand-gray-400 mb-8">
          Our Sponsors &amp; Partners
        </p>
      </AnimatedSection>

      <div className="relative">
        <div className="flex animate-scroll-left">
          {[...sponsors, ...sponsors].map((sponsor, i) => (
            <a
              key={`${sponsor.name}-${i}`}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-8 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={120}
                height={60}
                className="object-contain h-12 w-auto"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
