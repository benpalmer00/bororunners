import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import OptimiseHero from "@/components/optimise/OptimiseHero";
import OptimiseGallery from "@/components/optimise/OptimiseGallery";
import type { OptimiseMediaItem } from "@/components/optimise/OptimiseGallery";
import { sanityFetch, urlFor } from "@/sanity/lib/client";
import { optimiseHeroVideoQuery, optimiseMediaQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Optimise",
  description:
    "Optimise your running with Bororunners — training videos and photos covering technique, strength, recovery and race-day preparation from Teesside's fastest growing running club.",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityOptimiseMedia = any;

export default async function OptimisePage() {
  const [heroVideo, mediaItems] = await Promise.all([
    sanityFetch<SanityOptimiseMedia>(optimiseHeroVideoQuery),
    sanityFetch<SanityOptimiseMedia[]>(optimiseMediaQuery),
  ]);

  let media: OptimiseMediaItem[] | undefined;

  if (mediaItems && mediaItems.length > 0) {
    media = mediaItems
      .map((item: SanityOptimiseMedia): OptimiseMediaItem => {
        if (item.mediaType === "Video") {
          return {
            type: "video",
            src: item.videoUrl || "",
            alt: item.title || "Bororunners video",
            poster: item.poster ? urlFor(item.poster).width(1200).url() : undefined,
          };
        }
        return {
          type: "image",
          src: item.image ? urlFor(item.image).width(1200).url() : "",
          alt: item.image?.alt || item.title || "Bororunners photo",
        };
      })
      .filter((item: OptimiseMediaItem) => item.src);
  }

  return (
    <>
      <OptimiseHero
        videoUrl={heroVideo?.videoUrl || undefined}
        poster={heroVideo?.poster ? urlFor(heroVideo.poster).width(1920).url() : undefined}
      />

      <section
        id="optimise-gallery"
        className="section-padding bg-gradient-to-b from-brand-pink-light/60 via-white to-brand-pink-light/40"
      >
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-brand-black">
                Photo &amp; Video Gallery
              </h2>
              <p className="mt-4 text-lg max-w-2xl mx-auto text-brand-gray-500">
                Watch the club in action — training clips, technique sessions and
                the moments that make us faster.
              </p>
              <div className="mt-4 h-1 w-16 bg-brand-pink rounded-full mx-auto" />
            </div>
          </AnimatedSection>

          <OptimiseGallery media={media} />
        </div>
      </section>
    </>
  );
}
