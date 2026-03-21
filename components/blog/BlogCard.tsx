"use client";

import Image from "next/image";
import Link from "next/link";
import Card from "../ui/Card";

type BlogCardProps = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  image: string;
  imageAlt: string;
};

export default function BlogCard({ title, slug, excerpt, date, image, imageAlt }: BlogCardProps) {
  return (
    <Card className="h-full">
      <Link href={`/blog/${slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <p className="text-brand-red text-sm font-medium mb-2">{date}</p>
          <h3 className="font-display text-xl font-bold uppercase text-brand-black mb-2 group-hover:text-brand-red transition-colors">
            {title}
          </h3>
          <p className="text-brand-gray-600 text-sm line-clamp-3">{excerpt}</p>
          <span className="inline-flex items-center text-brand-red font-bold text-sm mt-4">
            Read More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </Card>
  );
}
