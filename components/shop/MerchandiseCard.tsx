"use client";

import Image from "next/image";
import Card from "../ui/Card";

type MerchandiseCardProps = {
  name: string;
  photo: string;
  description: string;
  price: string;
  sizes?: string[];
};

export default function MerchandiseCard({ name, photo, description, price, sizes }: MerchandiseCardProps) {
  return (
    <Card className="h-full">
      <div className="relative aspect-square overflow-hidden">
        <Image src={photo} alt={name} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold uppercase text-brand-black mb-1">{name}</h3>
        <p className="text-brand-red font-bold text-lg mb-2">{price}</p>
        <p className="text-brand-gray-600 text-sm mb-3">{description}</p>
        {sizes && sizes.length > 0 && (
          <p className="text-brand-gray-400 text-xs mb-4">Sizes: {sizes.join(", ")}</p>
        )}
        <a
          href="https://www.sprinterssportswear.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-brand-red text-white font-display font-bold uppercase text-sm px-4 py-2 rounded-md hover:bg-brand-red-dark transition-colors"
        >
          Order via Sprinters
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </Card>
  );
}
