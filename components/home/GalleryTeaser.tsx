"use client";

import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

type GalleryImage = {
  src: string;
  alt: string;
};

const fallbackImages: GalleryImage[] = [
  { src: "/images/photos/race-day-1.jpg", alt: "Bororunners at a race day event" },
  { src: "/images/photos/group-1.jpg", alt: "Bororunners group photo" },
  { src: "/images/photos/parkrun-1.jpg", alt: "Bororunners at parkrun" },
  { src: "/images/photos/training-1.jpg", alt: "Bororunners training session" },
  { src: "/images/photos/social-1.jpg", alt: "Bororunners social event" },
  { src: "/images/photos/celebration-1.jpg", alt: "Bororunners celebrating together" },
];

type GalleryTeaserProps = {
  images?: GalleryImage[];
};

export default function GalleryTeaser({ images }: GalleryTeaserProps) {
  const data = images && images.length > 0 ? images : fallbackImages;

  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <SectionHeading
          title="Gallery"
          subtitle="From parkruns to race days, club nights to celebrations — we capture it all."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {data.slice(0, 6).map((img, i) => (
            <AnimatedSection key={img.src} delay={i * 0.08}>
              <div className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/30 transition-colors duration-300" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button href="/gallery" variant="outline">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}
