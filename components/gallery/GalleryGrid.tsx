"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GalleryLightbox from "./GalleryLightbox";

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

const categories = ["All", "Parkrun", "Race Day", "Club Night", "Social", "Training"];

const images: GalleryImage[] = [
  { src: "/images/photos/hero-1.jpg", alt: "Bororunners group run", category: "Club Night" },
  { src: "/images/photos/hero-2.jpg", alt: "Bororunners running together", category: "Club Night" },
  { src: "/images/photos/hero-3.jpg", alt: "Bororunners group photo", category: "Social" },
  { src: "/images/photos/race-day-1.jpg", alt: "Race day at Bororunners", category: "Race Day" },
  { src: "/images/photos/race-day-2.jpg", alt: "Bororunners at a race event", category: "Race Day" },
  { src: "/images/photos/group-1.jpg", alt: "Bororunners group", category: "Social" },
  { src: "/images/photos/group-2.jpg", alt: "Bororunners celebration", category: "Social" },
  { src: "/images/photos/parkrun-1.jpg", alt: "Bororunners at parkrun", category: "Parkrun" },
  { src: "/images/photos/parkrun-2.jpg", alt: "Parkrun morning with Bororunners", category: "Parkrun" },
  { src: "/images/photos/training-1.jpg", alt: "Bororunners training session", category: "Training" },
  { src: "/images/photos/social-1.jpg", alt: "Social event with Bororunners", category: "Social" },
  { src: "/images/photos/social-2.jpg", alt: "Bororunners social gathering", category: "Social" },
  { src: "/images/photos/club-night-1.jpg", alt: "Club night at Bororunners", category: "Club Night" },
  { src: "/images/photos/celebration-1.jpg", alt: "Celebration at Bororunners", category: "Social" },
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered = activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-display font-bold uppercase tracking-wider transition-all ${
              activeCategory === cat
                ? "bg-brand-red text-white"
                : "bg-brand-gray-100 text-brand-gray-600 hover:bg-brand-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-2 md:columns-3 gap-3 md:gap-4">
        {filtered.map((img, i) => (
          <motion.div
            key={img.src}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mb-3 md:mb-4 break-inside-avoid cursor-pointer group"
            onClick={() => setLightboxIndex(i)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
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
            </div>
          </motion.div>
        ))}
      </div>

      <GalleryLightbox
        images={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(-1)}
      />
    </>
  );
}
