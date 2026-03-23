"use client";

import Image from "next/image";
import Card from "../ui/Card";

type MerchandiseCardProps = {
  name: string;
  photo: string;
  description?: string;
  price: string;
  sizes?: string[];
  url?: string;
};

export default function MerchandiseCard({ name, photo, price, sizes, url }: MerchandiseCardProps) {
  const shopUrl = url || "https://www.sprinterssportswear.co.uk/product-category/clubs/boro_runners/";

  return (
    <Card className="h-full">
      <div className="relative aspect-square overflow-hidden bg-white">
        <Image
          src={photo}
          alt={name}
          fill
          className="object-contain p-2"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          unoptimized
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-base font-bold uppercase text-brand-black mb-1 leading-tight">{name}</h3>
        <p className="text-brand-red font-bold text-lg mb-3">{price}</p>
        {sizes && sizes.length > 0 && (
          <p className="text-brand-gray-400 text-xs mb-3">Sizes: {sizes.join(", ")}</p>
        )}
        <a
          href={shopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-brand-red text-white font-display font-bold uppercase text-sm px-4 py-2 rounded-md hover:bg-brand-red-dark transition-colors"
        >
          Order Now
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </Card>
  );
}
