"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type OptimiseHeroProps = {
  videoUrl?: string;
  poster?: string;
};

export default function OptimiseHero({ videoUrl, poster }: OptimiseHeroProps) {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-brand-black">
      {videoUrl ? (
        <video
          src={videoUrl}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <Image
          src={poster || "/images/photos/hero-1.jpg"}
          alt="Bororunners members training together"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-pink-dark/40 to-transparent" />

      <div className="absolute inset-0 z-10 flex items-center px-6 sm:pl-40 lg:pl-60">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl w-full"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block bg-brand-pink text-white px-4 py-1 rounded-full text-sm font-display font-bold uppercase tracking-wider mb-4"
          >
            Train Smarter. Run Stronger.
          </motion.span>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-white leading-none mb-4">
            Opti<span className="text-brand-pink">mise</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
            How Bororunners level up — technique, strength, recovery and race-day
            prep, captured in photos and videos from our sessions.
          </p>

          <div className="flex flex-row gap-3">
            <Link
              href="#optimise-gallery"
              className="inline-flex items-center justify-center font-display font-bold uppercase tracking-wider transition-all duration-200 rounded-md px-8 py-4 text-lg bg-brand-pink text-white hover:bg-brand-pink-dark shadow-lg hover:shadow-xl"
            >
              Explore the Gallery
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center justify-center font-display font-bold uppercase tracking-wider transition-all duration-200 rounded-md px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-brand-pink-dark"
            >
              Join the Club
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
