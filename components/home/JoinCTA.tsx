"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function JoinCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-brand-red overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-white mb-4">
            Ready to Run With Us?
          </h2>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a complete beginner or chasing a PB, there&apos;s a place for you at Bororunners.
            Join Teesside&apos;s most inclusive running community.
          </p>
          <Button href="/join" variant="secondary" size="lg" className="bg-white text-brand-red hover:bg-gray-100">
            Join Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
