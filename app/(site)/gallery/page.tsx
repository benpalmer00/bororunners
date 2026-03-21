import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and videos from Bororunners Running Club — race days, parkruns, club nights, social events, and more from Teesside's fastest growing running club.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="section-padding pt-24 md:pt-32">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <SectionHeading
              title="Gallery"
              subtitle="From parkruns to race days, club nights to celebrations — we capture it all."
            />
          </AnimatedSection>

          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
