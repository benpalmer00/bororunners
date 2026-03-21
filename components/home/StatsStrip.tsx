"use client";

import AnimatedSection from "../ui/AnimatedSection";

const stats = [
  { number: "272", label: "Members" },
  { number: "2022", label: "Established" },
  { number: "2024", label: "EA Club of the Year" },
  { number: "4", label: "Weekly Sessions" },
];

export default function StatsStrip() {
  return (
    <section className="bg-brand-red py-8">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="text-white">
                <p className="font-display text-4xl md:text-5xl font-bold">{stat.number}</p>
                <p className="text-sm md:text-base font-medium uppercase tracking-wider mt-1 text-red-100">
                  {stat.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
