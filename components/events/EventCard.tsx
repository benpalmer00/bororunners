"use client";

import Card from "../ui/Card";

type EventCardProps = {
  title: string;
  date: string;
  location: string;
  description?: string;
  entryUrl?: string;
};

export default function EventCard({ title, date, location, description, entryUrl }: EventCardProps) {
  return (
    <Card className="h-full">
      <div className="p-6">
        <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-bold uppercase text-brand-black mb-2">{title}</h3>
        <p className="text-brand-red font-medium text-sm mb-1">{date}</p>
        <p className="text-brand-gray-500 text-sm mb-3">{location}</p>
        {description && <p className="text-brand-gray-600 text-sm mb-4">{description}</p>}
        {entryUrl && (
          <a
            href={entryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-brand-red font-bold text-sm hover:underline"
          >
            Entry Details
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </Card>
  );
}
