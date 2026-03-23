import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import type { GalleryImage } from "@/components/gallery/GalleryGrid";
import { sanityFetch, urlFor } from "@/sanity/lib/client";
import { galleryImagesQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and videos from Bororunners Running Club — race days, parkruns, club nights, social events, and more from Teesside's fastest growing running club.",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityGalleryImage = any;

export default async function GalleryPage() {
  const sanityImages = await sanityFetch<SanityGalleryImage[]>(galleryImagesQuery);

  let images: GalleryImage[] | undefined;

  if (sanityImages && sanityImages.length > 0) {
    images = sanityImages.map((img: SanityGalleryImage) => ({
      src: img.image ? urlFor(img.image).width(1200).url() : "",
      alt: img.image?.alt || img.caption || "Bororunners photo",
      category: img.category || "Other",
    }));
  }

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

          <GalleryGrid images={images} />
        </div>
      </section>
    </>
  );
}
