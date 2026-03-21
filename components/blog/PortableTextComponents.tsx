"use client";

import Image from "next/image";
import type { PortableTextComponents as PTComponents } from "@portabletext/react";

export const portableTextComponents: PTComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-display text-3xl font-bold uppercase text-brand-black mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-2xl font-bold uppercase text-brand-black mt-6 mb-3">{children}</h3>
    ),
    normal: ({ children }) => <p className="text-brand-gray-600 leading-relaxed mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-red pl-4 italic text-brand-gray-500 my-6">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-brand-black">{children}</strong>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-red hover:underline"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure className="my-8">
        <Image
          src={value.asset?.url || ""}
          alt={value.alt || "Blog image"}
          width={800}
          height={500}
          className="rounded-lg w-full"
        />
        {value.caption && (
          <figcaption className="text-center text-sm text-brand-gray-400 mt-2">{value.caption}</figcaption>
        )}
      </figure>
    ),
  },
};
