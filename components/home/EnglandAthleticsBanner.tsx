"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EnglandAthleticsBanner() {
  return (
    <section className="bg-white py-4 border-b border-gray-100">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 sm:gap-6"
        >
          <Image
            src="/images/sponsors/england-athletics-cert.jpeg"
            alt="England Athletics Certificate of Affiliation"
            width={60}
            height={60}
            className="rounded shadow-sm object-contain"
          />
          <div className="text-center sm:text-left">
            <p className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-brand-black">
              England Athletics Affiliated Club
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Registration No. 7693694
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
