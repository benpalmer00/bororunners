import type { ClubEvent } from "@/lib/events";

type PastEventsTableProps = {
  events: ClubEvent[];
};

function tableDate(event: ClubEvent): string {
  if (/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)/i.test(event.dateLabel)) {
    return new Date(`${event.date}T12:00:00`).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }
  return event.dateLabel;
}

export default function PastEventsTable({ events }: PastEventsTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-brand-gray-200 bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-brand-gray-200 bg-brand-gray-50">
            <th className="py-3 px-4 font-display uppercase text-brand-red text-xs tracking-wider">Date</th>
            <th className="py-3 px-4 font-display uppercase text-brand-red text-xs tracking-wider">Event</th>
            <th className="py-3 px-4 font-display uppercase text-brand-red text-xs tracking-wider">Location</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, i) => (
            <tr
              key={event.id}
              className={`border-b border-brand-gray-100 last:border-b-0 ${
                i % 2 === 0 ? "bg-white" : "bg-brand-gray-50/60"
              }`}
            >
              <td className="py-3 px-4 text-brand-gray-600 whitespace-nowrap">{tableDate(event)}</td>
              <td className="py-3 px-4 font-display font-bold uppercase text-brand-black">{event.title}</td>
              <td className="py-3 px-4 text-brand-gray-500">{event.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
