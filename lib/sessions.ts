import data from "@/data/sessions.json";

export type ClubSession = {
  day: string;
  title: string;
  time: string;
  location: string;
  date?: string;
  meetingPoint?: string;
  abilityLevel?: string;
  description?: string;
  workout?: string;
  hasWaitingList?: boolean;
  waitingListUrl?: string;
  isHighlight?: boolean;
};

const DAY_ORDER: Record<string, number> = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7,
};

function dayRank(day: string): number {
  return DAY_ORDER[day.toLowerCase()] ?? 99;
}

export function getWeekLabel(): string {
  return data.week;
}

export function getWeeklySessions(): ClubSession[] {
  return [...data.sessions].sort((a, b) => {
    const dayDiff = dayRank(a.day) - dayRank(b.day);
    if (dayDiff !== 0) return dayDiff;
    return a.time.localeCompare(b.time);
  });
}
