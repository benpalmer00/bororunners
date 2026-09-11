import data from "@/data/runner-of-the-month.json";

export type ROTMSlide = {
  id: string;
  person: string;
  src: string;
  alt: string;
  isWinner?: boolean;
};

export type ROTMMonth = {
  id: string;
  month: string;
  year: number;
  slides: ROTMSlide[];
};

export function getROTMMonths(): ROTMMonth[] {
  return data.months;
}

export function getMonthLabel(entry: ROTMMonth): string {
  return `${entry.month} ${entry.year}`;
}

export function getWinner(entry: ROTMMonth): ROTMSlide | undefined {
  return entry.slides.find((slide) => slide.isWinner && slide.person);
}

export function getLatestMonthWithSlides(): ROTMMonth | undefined {
  return [...data.months].reverse().find((entry) => entry.slides.length > 0);
}

export function getCalendarMonthId(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

export function getFeaturedMonth(): ROTMMonth | undefined {
  const calendarId = getCalendarMonthId();
  const calendarMonth = data.months.find((entry) => entry.id === calendarId);
  if (calendarMonth?.slides.length) return calendarMonth;
  return getLatestMonthWithSlides();
}

export function getPreviousMonths(featuredId?: string): ROTMMonth[] {
  return data.months.filter((entry) => entry.id !== featuredId && entry.slides.length > 0);
}

export function getHomeROTMTeaser(): {
  name: string;
  month: string;
  photo: string;
  writeUp: string;
} | null {
  const featured = getFeaturedMonth();
  if (!featured) return null;

  const winner = getWinner(featured);
  const firstPerson = featured.slides.find((slide) => slide.person);
  const person = winner || firstPerson;
  const label = getMonthLabel(featured);

  if (winner) {
    return {
      name: winner.person,
      month: label,
      photo: winner.src,
      writeUp: `${winner.person} is the ${label} Runner of the Month.`,
    };
  }

  if (person) {
    return {
      name: `${label} Nominations`,
      month: label,
      photo: featured.slides[0]?.src || person.src,
      writeUp:
        "This month's nominations are in. Browse the cards and celebrate the members who have been putting in the work.",
    };
  }

  return null;
}
