import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ROTMBrowser from "@/components/rotm/ROTMBrowser";
import { getFeaturedMonth, getROTMMonths } from "@/lib/rotm";

export const metadata: Metadata = {
  title: "Runner of the Month",
  description:
    "Celebrating the Bororunners Running Club Runner of the Month. Each month we recognise a member who embodies the club spirit.",
};

export default function RunnerOfTheMonthPage() {
  const months = getROTMMonths();
  const featured = getFeaturedMonth();

  return (
    <section className="section-padding pt-24 md:pt-32 bg-brand-gray-50">
      <div className="container-wide mx-auto">
        <AnimatedSection>
          <h1 className="sr-only">Bororunners Runner of the Month</h1>
          <SectionHeading
            title="Runner of the Month"
            subtitle="Every month we celebrate a member who embodies the Bororunners spirit — then keep the nominations to look back on."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <ROTMBrowser months={months} initialMonthId={featured?.id} />
        </AnimatedSection>
      </div>
    </section>
  );
}
