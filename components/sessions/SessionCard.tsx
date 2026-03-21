"use client";

import Card from "../ui/Card";

type SessionCardProps = {
  title: string;
  day: string;
  time: string;
  location: string;
  meetingPoint?: string;
  abilityLevel: string;
  description: string;
  hasWaitingList?: boolean;
  waitingListUrl?: string;
};

export default function SessionCard({
  title,
  day,
  time,
  location,
  meetingPoint,
  abilityLevel,
  description,
  hasWaitingList,
  waitingListUrl,
}: SessionCardProps) {
  return (
    <Card className={`h-full ${hasWaitingList ? "ring-2 ring-yellow-400" : ""}`}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-display text-2xl font-bold uppercase text-brand-black">{day}</h3>
            <p className="font-display text-lg font-semibold text-brand-red">{time}</p>
          </div>
          <span className="inline-block bg-brand-red-light text-brand-red text-xs font-bold px-3 py-1 rounded-full">
            {abilityLevel}
          </span>
        </div>

        <h4 className="font-bold text-brand-black mb-2">{title}</h4>

        <div className="space-y-1 mb-4">
          <p className="text-sm text-brand-gray-500 flex items-center gap-2">
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </p>
          {meetingPoint && (
            <p className="text-sm text-brand-gray-400">Meeting point: {meetingPoint}</p>
          )}
        </div>

        <p className="text-sm text-brand-gray-600 mb-4">{description}</p>

        {hasWaitingList && (
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
            <p className="text-sm font-bold text-yellow-800 uppercase flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Waiting List Active
            </p>
            <p className="text-sm text-yellow-700 mt-2">
              This session is currently at capacity. Join the waiting list to secure your spot.
            </p>
            {waitingListUrl && (
              <a
                href={waitingListUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 bg-yellow-500 text-white font-bold text-sm px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
              >
                Join Waiting List
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
