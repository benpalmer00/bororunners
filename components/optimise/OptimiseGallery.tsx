"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

export type OptimiseMediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
};

const filters = ["All", "Photos", "Videos"];

const fallbackMedia: OptimiseMediaItem[] = [
  { type: "image", src: "/images/photos/training-1.jpg", alt: "Bororunners training session" },
  { type: "image", src: "/images/photos/hero-1.jpg", alt: "Bororunners group run" },
  { type: "image", src: "/images/photos/race-day-1.jpg", alt: "Race day at Bororunners" },
  { type: "image", src: "/images/photos/parkrun-1.jpg", alt: "Bororunners at parkrun" },
  { type: "image", src: "/images/photos/hero-2.jpg", alt: "Bororunners running together" },
  { type: "image", src: "/images/photos/race-day-2.jpg", alt: "Bororunners at a race event" },
];

type OptimiseGalleryProps = {
  media?: OptimiseMediaItem[];
};

export default function OptimiseGallery({ media }: OptimiseGalleryProps) {
  const data = media && media.length > 0 ? media : fallbackMedia;
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered =
    activeFilter === "All"
      ? data
      : data.filter((item) => (activeFilter === "Videos" ? item.type === "video" : item.type === "image"));

  const slides = filtered.map((item) =>
    item.type === "video"
      ? {
          type: "video" as const,
          sources: [{ src: item.src, type: "video/mp4" }],
          poster: item.poster,
        }
      : { src: item.src, alt: item.alt }
  );

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-display font-bold uppercase tracking-wider transition-all ${
              activeFilter === filter
                ? "bg-brand-pink text-white"
                : "bg-brand-pink-light text-brand-pink-dark hover:bg-brand-pink hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-brand-gray-500">
          No {activeFilter.toLowerCase()} here yet — check back soon.
        </p>
      ) : (
        <div className="columns-2 md:columns-3 gap-3 md:gap-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.src}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-3 md:mb-4 break-inside-avoid cursor-pointer group"
              onClick={() => setLightboxIndex(i)}
            >
              <div className="relative overflow-hidden rounded-lg">
                {item.type === "video" ? (
                  item.poster ? (
                    <Image
                      src={item.poster}
                      alt={item.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  ) : (
                    <video
                      src={item.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                )}

                {item.type === "video" ? (
                  <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="w-14 h-14 rounded-full bg-brand-pink/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors duration-300 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Video]}
      />
    </>
  );
}
