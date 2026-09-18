import data from "@/data/events.json";

export type ClubEvent = {
  id: string;
  title: string;
  date: string;
  dateLabel: string;
  location: string;
  description?: string;
  entryUrl?: string;
  signUpEnabled?: boolean;
};

function eventEnd(date: string): Date {
  return new Date(`${date}T23:59:59`);
}

function bySoonest(a: ClubEvent, b: ClubEvent): number {
  return a.date.localeCompare(b.date) || a.title.localeCompare(b.title);
}

function byNewest(a: ClubEvent, b: ClubEvent): number {
  return b.date.localeCompare(a.date) || a.title.localeCompare(b.title);
}

export function isClubEventPast(event: ClubEvent, now = new Date()): boolean {
  return eventEnd(event.date) < now;
}

export function getEvents(): ClubEvent[] {
  return [...data.events];
}

export function getUpcomingEvents(now = new Date()): ClubEvent[] {
  return getEvents().filter((event) => !isClubEventPast(event, now)).sort(bySoonest);
}

export function getPastEvents(now = new Date()): ClubEvent[] {
  return getEvents().filter((event) => isClubEventPast(event, now)).sort(byNewest);
}
