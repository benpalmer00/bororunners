import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Runner of the Month",
  description:
    "Celebrating the Bororunners Running Club Runner of the Month. Each month we recognise a member who embodies the club spirit.",
};

export default function RunnerOfTheMonthPage() {
  return (
    <>
      <section className="section-padding pt-24 md:pt-32">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Runner of the Month"
              subtitle="Every month we celebrate a member who embodies the Bororunners spirit."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto">
                  <Image
                    src="/images/photos/social-2.jpg"
                    alt="Bororunners Runner of the Month"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-brand-red text-white px-4 py-2 rounded-lg">
                    <p className="font-display font-bold text-sm uppercase">Runner of the Month</p>
                    <p className="text-xs text-red-100">March 2026</p>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="inline-block bg-brand-red-light text-brand-red px-3 py-1 rounded-full text-xs font-display font-bold uppercase tracking-wider mb-4 w-fit">
                    Current Winner
                  </span>
                  <h2 className="font-display text-3xl font-bold uppercase text-brand-black mb-4">
                    Coming Soon
                  </h2>
                  <p className="text-brand-gray-600 leading-relaxed mb-4">
                    The Runner of the Month feature celebrates a member who goes above and beyond —
                    someone who supports fellow runners, shows incredible dedication, and embodies
                    the community spirit that makes Bororunners special.
                  </p>
                  <p className="text-brand-gray-500 text-sm">
                    Check back soon for this month&apos;s winner, or manage Runner of the Month content
                    through the Sanity CMS.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mt-16">
              <h3 className="font-display text-2xl font-bold uppercase text-brand-black text-center mb-8">
                Previous Winners
              </h3>
              <p className="text-center text-brand-gray-500">
                Previous Runner of the Month winners will appear here once content is added via the CMS.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
