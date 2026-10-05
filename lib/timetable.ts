import timetable from "@/data/timetable.json";

export type TimetableRow = {
  date: string;
  location: string;
  time: string;
  workout: string;
  isHighlight?: boolean;
};

export type Timetable = {
  month: string;
  sessions: TimetableRow[];
};

export function getTimetable(): Timetable {
  return timetable;
}
