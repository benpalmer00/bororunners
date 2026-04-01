"use client";

import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import Button from "../ui/Button";

export default function AboutTeaser({ aboutImage }: { aboutImage?: string }) {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative">
              <Image
                src={aboutImage || "/images/photos/group-2.jpg"}
                alt="Bororunners members celebrating together after a run"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl object-cover w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-brand-red text-white p-4 rounded-xl shadow-lg hidden md:block">
                <p className="font-display text-2xl font-bold">272+</p>
                <p className="text-sm text-red-100">Members & Growing</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <span className="inline-block bg-brand-red-light text-brand-red px-3 py-1 rounded-full text-sm font-display font-bold uppercase tracking-wider mb-4">
              Our Story
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-brand-black mb-6">
              From 8 Runners to Award-Winning Club
            </h2>
            <p className="text-brand-gray-600 mb-4 leading-relaxed">
              Bororunners started with eight people and a simple idea — that running should be for everyone.
              Founded in 2022 by Ben Palmer, the club has grown to over 272 members and won England Athletics
              Club Committee of the Year, all by putting community first.
            </p>
            <p className="text-brand-gray-600 mb-6 leading-relaxed">
              We welcome runners of all abilities. Every session has dedicated run leaders, and at every race,
              our members stay to cheer the last runner home. That&apos;s what makes us different.
            </p>
            <Button href="/about" variant="outline">
              Read Our Story
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
