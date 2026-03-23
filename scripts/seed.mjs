import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "oihlvhmn",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function seed() {
  console.log("Seeding Sanity...\n");

  // 1. Site Settings
  console.log("Creating Site Settings...");
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    signUpPin: "2026",
  });
  console.log("  ✓ Site Settings (PIN: 2026)\n");

  // 2. Weekly Sessions
  console.log("Creating Weekly Sessions...");
  const sessions = [
    { _id: "session-monday", day: "Monday", time: "6:10pm", location: "Various (see timetable)", level: "All abilities", description: "Structured interval and speed sessions across Middlesbrough. Locations rotate weekly — check the monthly timetable for details.", isActive: true, order: 1, hasWaitingList: false },
    { _id: "session-wednesday", day: "Wednesday", time: "6:10pm", location: "Various (see timetable)", level: "All abilities", description: "Midweek sessions including track nights at LJ Track, hill reps, and tempo runs. A great way to build speed and strength.", isActive: true, order: 2, hasWaitingList: false },
    { _id: "session-thursday", day: "Thursday", time: "6:10pm", location: "TIE / Various", level: "All abilities", description: "Popular structured session — intervals, tempo, and speed work. This session has a waiting list due to high demand.", isActive: true, order: 3, hasWaitingList: true },
    { _id: "session-friday", day: "Friday", time: "9:15am", location: "Various (see timetable)", level: "All abilities", description: "Morning sessions at scenic locations across Teesside. A mix of tempo runs, hill sprints, and 1k repeats.", isActive: true, order: 4, hasWaitingList: false },
  ];
  for (const session of sessions) {
    await client.createOrReplace({ _type: "session", ...session });
  }
  console.log("  ✓ 4 Weekly Sessions\n");

  // 3. March 2026 Timetable
  console.log("Creating March 2026 Timetable...");
  const timetable = [
    { date: "Mon 2nd March", sortDate: "2026-03-02", location: "Club Meal", time: "6:30pm", workout: "Social — Club Meal" },
    { date: "Wed 4th March", sortDate: "2026-03-04", location: "TIE", time: "6:10pm", workout: "4,4,3,3,2,2, 4 x 1 minute @ progressive 10k" },
    { date: "Thu 5th March", sortDate: "2026-03-05", location: "TIE", time: "6:10pm", workout: "4,4,3,3,2,2, 4 x 1 minute @ progressive 10k" },
    { date: "Fri 6th March", sortDate: "2026-03-06", location: "Flatts Lane", time: "9:15am", workout: "4 x 1k @ 5k effort & 4 x 80m Hill Sprints" },
    { date: "Mon 9th March", sortDate: "2026-03-09", location: "St Mary's Church", time: "6:10pm", workout: "2-5 x 1200's @ 10k pace w/ 3 mins rest" },
    { date: "Wed 11th March", sortDate: "2026-03-11", location: "LJ Track", time: "6:00pm", workout: "6-14 x 400's @ MP w/ 90s recovery" },
    { date: "Thu 12th March", sortDate: "2026-03-12", location: "TIE", time: "6:10pm", workout: "6-14 x 400's @ MP w/ 90s recovery" },
    { date: "Fri 13th March", sortDate: "2026-03-13", location: "Stewart Park", time: "9:15am", workout: "2-5 mile Tempo" },
    { date: "Mon 16th March", sortDate: "2026-03-16", location: "TIE", time: "6:10pm", workout: "4-10 x 600's @ slightly faster than 5k pace w/ floats recovery" },
    { date: "Wed 18th March", sortDate: "2026-03-18", location: "Nunthorpe Academy", time: "6:10pm", workout: "2-5 sets x 400,200,100m Hill Efforts w/ floats" },
    { date: "Thu 19th March", sortDate: "2026-03-19", location: "Coulby Manor Way", time: "6:10pm", workout: "2-6 mile Tempo Run" },
    { date: "Fri 20th March", sortDate: "2026-03-20", location: "Pinchinthorpe", time: "9:15am", workout: "2-5 x 1k's @ 5k effort THEN 2-6 x 60m Hill Sprints" },
    { date: "Mon 23rd March", sortDate: "2026-03-23", location: "Coulby Manor Way", time: "6:10pm", workout: "4-7 x 1k @ 5k pace w/ 2 minutes rest" },
    { date: "Wed 25th March", sortDate: "2026-03-25", location: "LJ Track", time: "6:00pm", workout: "2-3 x 1k @ 5k pace, 2-3 x 600's, 2-4 x 400's" },
    { date: "Thu 26th March", sortDate: "2026-03-26", location: "TIE", time: "6:10pm", workout: "8,8,4,4,2,2,1,1 mins w/ float recoveries" },
    { date: "Fri 27th March", sortDate: "2026-03-27", location: "Great Ayton", time: "9:15am", workout: "2-5 mile Tempo Run" },
    { date: "Sat 28th March", sortDate: "2026-03-28", location: "Superhero Run", time: "TBC", workout: "Superhero Run — Special Event!", isHighlight: true },
  ];
  for (let i = 0; i < timetable.length; i++) {
    const t = timetable[i];
    await client.createOrReplace({
      _id: `timetable-march-${i + 1}`,
      _type: "timetableEvent",
      date: t.date,
      sortDate: t.sortDate,
      location: t.location,
      time: t.time,
      workout: t.workout,
      month: "March 2026",
      isHighlight: t.isHighlight || false,
    });
  }
  console.log("  ✓ 17 Timetable Events (March 2026)\n");

  // 4. Racing Calendar Events
  console.log("Creating Racing Calendar Events...");
  const events = [
    // Past
    { title: "Nightmare on 6.66 Street", date: "2025-11-02T09:00:00Z", location: "TBC", isPast: true, signUpEnabled: false },
    { title: "Marton Willy Relays", date: "2025-11-09T09:00:00Z", location: "Marton", isPast: true, signUpEnabled: false },
    { title: "Leeds Abbey Dash", date: "2025-11-30T09:00:00Z", location: "Leeds", isPast: true, signUpEnabled: false },
    { title: "Aintree Half Marathon", date: "2025-12-14T09:00:00Z", location: "Aintree", isPast: true, signUpEnabled: false },
    { title: "HMP Kirklevington 5k", date: "2025-12-14T09:00:00Z", location: "Kirklevington", isPast: true, signUpEnabled: false },
    { title: "Hardmoors 15/30", date: "2026-01-03T09:00:00Z", location: "North York Moors", isPast: true, signUpEnabled: false },
    { title: "Brass Monkey Half Marathon", date: "2026-01-18T09:00:00Z", location: "York", isPast: true, signUpEnabled: false },
    { title: "Boro Brassic Half Marathon", date: "2026-01-18T09:00:00Z", location: "Middlesbrough", isPast: true, signUpEnabled: false },
    { title: "Hardmoors 26.2 / Saltburn 10K", date: "2026-02-01T09:00:00Z", location: "Saltburn", isPast: true, signUpEnabled: false },
    { title: "DB Foodbank Run", date: "2026-02-07T09:00:00Z", location: "TBC", isPast: true, signUpEnabled: false },
    { title: "Boro Half Marathon", date: "2026-03-01T09:00:00Z", location: "Middlesbrough", isPast: true, signUpEnabled: false },
    // Upcoming
    { title: "Superhero Run", date: "2026-03-28T09:00:00Z", location: "Middlesbrough", isPast: false, signUpEnabled: true },
    { title: "London Landmarks", date: "2026-04-12T09:00:00Z", location: "London", isPast: false, signUpEnabled: true },
    { title: "Teesside Landmarks", date: "2026-04-12T09:00:00Z", location: "Teesside", isPast: false, signUpEnabled: true },
    { title: "Manchester Marathon", date: "2026-04-19T09:00:00Z", location: "Manchester", isPast: false, signUpEnabled: true },
    { title: "Spring Coast 5k", date: "2026-04-22T18:00:00Z", location: "TBC", isPast: false, signUpEnabled: true },
    { title: "London Marathon", date: "2026-04-26T09:00:00Z", location: "London", isPast: false, signUpEnabled: true },
    { title: "Boro Runners Sports Day", date: "2026-05-15T09:00:00Z", location: "TBC", isPast: false, signUpEnabled: true },
    { title: "Edinburgh Half Marathon", date: "2026-05-24T09:00:00Z", location: "Edinburgh", isPast: false, signUpEnabled: true },
    { title: "Edinburgh Marathon", date: "2026-05-24T09:00:00Z", location: "Edinburgh", isPast: false, signUpEnabled: true },
    { title: "NYMAC Relays", date: "2026-05-28T18:00:00Z", location: "North Yorkshire", isPast: false, signUpEnabled: true },
    { title: "Parkrunathon", date: "2026-06-15T09:00:00Z", location: "Various Parkruns", isPast: false, signUpEnabled: true },
    { title: "Summer Coast 5k", date: "2026-07-15T18:00:00Z", location: "TBC", isPast: false, signUpEnabled: true },
    { title: "Planned Club Event", date: "2026-07-20T09:00:00Z", location: "TBC", isPast: false, signUpEnabled: true },
    { title: "Newcastle Frontrunners LGBTQ 5k", date: "2026-07-25T09:00:00Z", location: "Newcastle", isPast: false, signUpEnabled: true },
    { title: "York 10K", date: "2026-08-02T09:00:00Z", location: "York", isPast: false, signUpEnabled: true },
    { title: "NYMAC Relays (August)", date: "2026-08-27T18:00:00Z", location: "North Yorkshire", isPast: false, signUpEnabled: true },
    { title: "Boro 5k", date: "2026-08-30T09:00:00Z", location: "Middlesbrough", isPast: false, signUpEnabled: true },
    { title: "Boro 10k", date: "2026-08-30T09:00:00Z", location: "Middlesbrough", isPast: false, signUpEnabled: true },
    { title: "Great North Run", date: "2026-09-13T10:00:00Z", location: "Newcastle to South Shields", isPast: false, signUpEnabled: true },
    { title: "Berlin Marathon", date: "2026-09-27T09:00:00Z", location: "Berlin", isPast: false, signUpEnabled: true },
    { title: "Manchester Half Marathon", date: "2026-10-04T09:00:00Z", location: "Manchester", isPast: false, signUpEnabled: true },
    { title: "York 10 Mile", date: "2026-10-18T09:00:00Z", location: "York", isPast: false, signUpEnabled: true },
  ];
  for (let i = 0; i < events.length; i++) {
    const e = events[i];
    await client.createOrReplace({
      _id: `event-${i + 1}`,
      _type: "event",
      title: e.title,
      date: e.date,
      location: e.location,
      isPast: e.isPast,
      signUpEnabled: e.signUpEnabled,
    });
  }
  console.log(`  ✓ ${events.length} Racing Calendar Events\n`);

  console.log("Done! Refresh your Studio to see the data.");
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
