"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      <Image
        src="/images/photos/hero-1.jpg"
        alt="Bororunners Running Club members running together in Teesside"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/50 to-transparent" />

      <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block bg-brand-red text-white px-4 py-1 rounded-full text-sm font-display font-bold uppercase tracking-wider mb-4"
          >
            England Athletics Club of the Year 2024
          </motion.span>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-white leading-none mb-4">
            Boro
            <br />
            <span className="text-brand-red">Runners</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
            Teesside&apos;s fastest growing running club. 272 members, four weekly sessions, all abilities welcome.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/join" size="lg">
              Join the Club
            </Button>
            <Button href="/sessions" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-black">
              View Sessions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
