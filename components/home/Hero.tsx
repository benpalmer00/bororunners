"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero({ heroImage }: { heroImage?: string }) {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      <Image
        src={heroImage || "/images/photos/Hero.jpg"}
        alt="Bororunners Running Club members running together in Teesside"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/50 to-transparent" />

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
            className="inline-block bg-brand-red text-white px-4 py-1 rounded-full text-sm font-display font-bold uppercase tracking-wider mb-4"
          >
            England Athletics Club Committee of the Year 2024
          </motion.span>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-white leading-none mb-4">
            <span className="sr-only">Bororunners Running Club</span>
            <span aria-hidden="true">
              Boro
              <br />
              <span className="text-brand-red">Runners</span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
            Teesside&apos;s fastest growing running club. 272 members, four weekly sessions, all abilities welcome.
          </p>

          <div className="flex flex-row gap-3">
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
