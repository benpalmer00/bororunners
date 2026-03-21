"use client";

import Image from "next/image";
import Card from "../ui/Card";

type SponsorCardProps = {
  name: string;
  logo: string;
  description: string;
  memberDiscount?: string;
  websiteUrl: string;
};

export default function SponsorCard({ name, logo, description, memberDiscount, websiteUrl }: SponsorCardProps) {
  return (
    <Card className="h-full">
      <div className="p-8">
        <div className="h-20 flex items-center justify-center mb-6">
          <Image
            src={logo}
            alt={name}
            width={160}
            height={80}
            className="object-contain max-h-20 w-auto"
          />
        </div>
        <h3 className="font-display text-xl font-bold uppercase text-brand-black mb-2 text-center">
          {name}
        </h3>
        <p className="text-brand-gray-600 text-sm mb-4 text-center">{description}</p>
        {memberDiscount && (
          <div className="bg-brand-red-light rounded-lg p-3 mb-4">
            <p className="text-brand-red text-sm font-bold text-center">Member Discount</p>
            <p className="text-brand-red-dark text-sm text-center">{memberDiscount}</p>
          </div>
        )}
        <div className="text-center">
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-brand-red font-bold text-sm hover:underline"
          >
            Visit Website
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </Card>
  );
}
