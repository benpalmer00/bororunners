"use client";

import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import Button from "../ui/Button";

export default function ROTMTeaser() {
  return (
    <section className="section-padding bg-brand-gray-50">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.1} className="order-2 lg:order-1">
            <span className="inline-block bg-brand-red-light text-brand-red px-3 py-1 rounded-full text-sm font-display font-bold uppercase tracking-wider mb-4">
              Runner of the Month
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-brand-black mb-4">
              Celebrating Our Members
            </h2>
            <p className="text-brand-gray-600 mb-6 leading-relaxed">
              Every month we celebrate a member who embodies the Bororunners spirit — someone who gives
              their all, supports the community, and inspires the rest of us to keep going.
            </p>
            <Button href="/runner-of-the-month" variant="outline">
              See This Month&apos;s Winner
            </Button>
          </AnimatedSection>

          <AnimatedSection className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/photos/social-2.jpg"
                alt="Bororunners Runner of the Month celebration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
