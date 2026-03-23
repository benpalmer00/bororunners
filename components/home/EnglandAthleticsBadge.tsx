"use client";

import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";

export default function EnglandAthleticsBadge() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            <div className="relative w-28 h-28 md:w-36 md:h-36 shrink-0">
              <Image
                src="/images/sponsors/england-athletics.jpeg"
                alt="England Athletics"
                fill
                className="object-contain"
                sizes="144px"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="font-display text-lg md:text-xl font-bold uppercase text-brand-black">
                England Athletics Affiliated Club
              </p>
              <p className="text-brand-gray-500 text-sm mt-1">
                Registration Number: <span className="font-bold text-brand-black">7693694</span>
              </p>
              <p className="text-brand-gray-400 text-xs mt-1">
                Affiliated &amp; insured through England Athletics
              </p>
            </div>
            <div className="relative w-40 h-56 md:w-48 md:h-64 shrink-0 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/sponsors/england-athletics-cert.jpeg"
                alt="England Athletics Certificate of Affiliation — Boro Runners (7693694)"
                fill
                className="object-cover"
                sizes="192px"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
