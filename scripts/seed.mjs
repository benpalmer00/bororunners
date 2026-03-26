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
    { _id: "session-monday", title: "Monday Evening Session", day: "Monday", time: "6:10pm", location: "Rotating locations across Teesside", meetingPoint: "Varies weekly — check WhatsApp group", abilityLevel: "All Abilities", description: "Interval and tempo training with multiple pace groups. Sessions include 600m-1200m reps, hill sprints, and progressive tempo runs. Every session has dedicated run leaders to guide pace and keep things sociable.", isActive: true, order: 1, hasWaitingList: false },
    { _id: "session-wednesday", title: "Wednesday Track Session", day: "Wednesday", time: "6:00pm", location: "Track venues (LJ Track, Guisborough, Nunthorpe)", meetingPoint: "At the track entrance", abilityLevel: "All Abilities", description: "Track-based speed work including 400m reps, 800m intervals, and speed endurance sets. Multiple ability groups with tailored distances and recovery times. Great for building speed and confidence.", isActive: true, order: 2, hasWaitingList: false },
    { _id: "session-thursday", title: "Thursday Evening Session", day: "Thursday", time: "6:10pm", location: "Rotating locations (TIE, Coulby Manor Way, Southern Cross)", meetingPoint: "Varies weekly — check WhatsApp group", abilityLevel: "All Abilities", description: "Structured training covering tempo runs, intervals, and endurance work. This session is extremely popular and currently operates a waiting list due to high demand.", isActive: true, order: 3, hasWaitingList: true },
    { _id: "session-friday", title: "Friday Morning Session", day: "Friday", time: "9:15am", location: "Parks and trails (Stewart Park, Pinchinthorpe, Flatts Lane, Great Ayton)", meetingPoint: "Car park at the session location", abilityLevel: "All Abilities", description: "Morning sessions at scenic locations across Teesside. A mix of tempo runs, hill sprints, and 1k repeats. A brilliant way to start the weekend surrounded by beautiful countryside.", isActive: true, order: 4, hasWaitingList: false },
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

  // 5. Team Members
  console.log("Creating Team Members...");
  const teamMembers = [
    // Chairman
    { _id: "team-ben-palmer", name: "Ben Palmer", role: "Chairman & Head Coach", category: "chairman", order: 1 },
    // Officers
    { _id: "team-jack-mcgarrity", name: "Jack McGarrity", role: "Club Coach", category: "officer", order: 2 },
    { _id: "team-lindsey-scott", name: "Lindsey Scott", role: "Club Secretary", category: "officer", order: 3 },
    { _id: "team-adelle-almond", name: "Adelle Almond", role: "Club Treasurer", category: "officer", order: 4 },
    { _id: "team-katie-lomas", name: "Katie Lomas", role: "Club Ambassador", category: "officer", order: 5 },
    { _id: "team-rachel-cowperthwaite", name: "Rachel Cowperthwaite", role: "Membership Secretary", category: "officer", order: 6 },
    // Welfare & Support
    { _id: "team-elaine-watson", name: "Elaine Watson", role: "Welfare Officer & DBS Verifier", category: "support", order: 7 },
    { _id: "team-robyn-cairney", name: "Robyn Cairney", role: "Mental Health Champion", category: "support", order: 8 },
    { _id: "team-kirsty-beattie", name: "Kirsty Beattie", role: "Mental Health Champion", category: "support", order: 9 },
    { _id: "team-daniel-kelly", name: "Daniel Kelly", role: "Welfare Officer", category: "support", order: 10 },
    { _id: "team-mike-mccann", name: "Mike McCann", role: "Welfare Officer", category: "support", order: 11 },
    { _id: "team-karen-lavender", name: "Karen Lavender", role: "Welfare Officer", category: "support", order: 12 },
    { _id: "team-david-jukes", name: "David Jukes", role: "Events & Charity", category: "support", order: 13 },
    { _id: "team-badger", name: "Badger", role: "Club Mascot", category: "support", order: 14 },
    // Run Leaders
    { _id: "team-rl-ben", name: "Ben Palmer", role: "Run Leader", category: "runLeader", order: 15 },
    { _id: "team-rl-lindsey", name: "Lindsey Scott", role: "Run Leader", category: "runLeader", order: 16 },
    { _id: "team-rl-mandy", name: "Mandy Lorraine", role: "Run Leader", category: "runLeader", order: 17 },
    { _id: "team-rl-katie", name: "Katie Lomas", role: "Run Leader", category: "runLeader", order: 18 },
    { _id: "team-rl-paul", name: "Paul Bowman", role: "Run Leader", category: "runLeader", order: 19 },
    { _id: "team-rl-kirk", name: "Kirk Sansom", role: "Run Leader", category: "runLeader", order: 20 },
    { _id: "team-rl-robyn", name: "Robyn Cairney", role: "Run Leader", category: "runLeader", order: 21 },
    { _id: "team-rl-kirsty", name: "Kirsty Beattie", role: "Run Leader", category: "runLeader", order: 22 },
    { _id: "team-rl-danielle", name: "Danielle Laverick", role: "Run Leader", category: "runLeader", order: 23 },
  ];
  for (const member of teamMembers) {
    await client.createOrReplace({ _type: "teamMember", ...member });
  }
  console.log(`  ✓ ${teamMembers.length} Team Members\n`);

  // 6. Sponsors
  console.log("Creating Sponsors...");
  const sponsors = [
    { _id: "sponsor-sprinters", name: "Sprinters Sportswear", description: "Our official kit supplier. Sprinters Sportswear provide all Bororunners club merchandise, from race vests to hoodies.", memberDiscount: "Bororunners member discounts available — ask at any session for details.", websiteUrl: "https://www.sprinterssportswear.co.uk", order: 1 },
    { _id: "sponsor-lets-run", name: "Let's Run", description: "Local running shop supporting the North East running community with expert advice, gait analysis, and a great range of running shoes and gear.", memberDiscount: "Bororunners member discount available in store.", order: 2 },
    { _id: "sponsor-high5", name: "HIGH5 Sports Nutrition", description: "Sports nutrition partner providing energy gels, drinks, and recovery products. Trusted by runners and athletes worldwide.", websiteUrl: "https://highfive.co.uk", order: 3 },
    { _id: "sponsor-bimble-bolt", name: "Bimble & Bolt", description: "Local Teesside business supporting the Bororunners community. A proud partner of the club.", order: 4 },
    { _id: "sponsor-sportsshoes", name: "SportsShoes.com", description: "Online retailer for running shoes and sportswear. Wide range of trail and road shoes from all major brands at competitive prices.", memberDiscount: "Exclusive Bororunners discount code — ask a committee member.", websiteUrl: "https://www.sportsshoes.com", order: 5 },
  ];
  for (const sponsor of sponsors) {
    await client.createOrReplace({ _type: "sponsor", ...sponsor });
  }
  console.log(`  ✓ ${sponsors.length} Sponsors\n`);

  // 7. Merchandise
  console.log("Creating Merchandise...");
  const merchandise = [
    { _id: "merch-1", name: "Boro Runners Boro Drinkers T-Shirt (Unisex)", price: 13.00, url: "https://www.sprinterssportswear.co.uk/product/boro-runners-boro-drinkers-t-shirt-unisex/", isAvailable: true },
    { _id: "merch-2", name: "Boro Runners Boro Drinkers T-Shirt (Female Fit)", price: 13.00, url: "https://www.sprinterssportswear.co.uk/product/boro-runners-boro-drinkers-t-shirt-female-fit/", isAvailable: true },
    { _id: "merch-3", name: "Boro Runners Snow Star Beanie", price: 7.50, url: "https://www.sprinterssportswear.co.uk/product/boro-runners-snow-star-beanie/", isAvailable: true },
    { _id: "merch-4", name: "Boro Runners Thinsulate Bobble Hat", price: 8.50, url: "https://www.sprinterssportswear.co.uk/product/boro-runners-thinsulate-bobble-hat/", isAvailable: true },
    { _id: "merch-5", name: "Boro Runners Tracksuit Hoodless Top", price: 23.00, url: "https://www.sprinterssportswear.co.uk/product/boro-runners-tracksuit-hoodless-top/", isAvailable: true },
    { _id: "merch-6", name: "Boro Runners Tracksuit Pants", price: 23.00, url: "https://www.sprinterssportswear.co.uk/product/boro-runners-tracksuit-pants/", isAvailable: true },
    { _id: "merch-7", name: "Boro Runners Zipped Hoodie", price: 25.00, url: "https://www.sprinterssportswear.co.uk/product/boro-runners-zipped-hoodie/", isAvailable: true },
    { _id: "merch-8", name: "Boro Runners Unisex Vest", price: 13.00, url: "https://www.sprinterssportswear.co.uk/product/boro-runners-unisex-vest/", isAvailable: true },
    { _id: "merch-9", name: "Boro Runners Backpack", price: 17.50, url: "https://www.sprinterssportswear.co.uk/product/boro-runners-backpack/", isAvailable: true },
    { _id: "merch-10", name: "Boro Runners Core DWL Jacket", price: 30.00, url: "https://www.sprinterssportswear.co.uk/product/boro-runners-core-dwl-dri-warm-lite-jacket/", isAvailable: true },
    { _id: "merch-11", name: "Boro Runners Ladies Fit T-Shirt", price: 13.00, url: "https://www.sprinterssportswear.co.uk/product/boro-runners-ladies-fit-t-shirt/", isAvailable: true },
    { _id: "merch-12", name: "Boro Runners Ladies Fit Vest", price: 13.00, url: "https://www.sprinterssportswear.co.uk/product/boro-runners-ladies-fit-vest/", isAvailable: true },
    { _id: "merch-13", name: "Boro Runners Long Sleeve Reflective (Ladies Fit)", price: 16.50, url: "https://www.sprinterssportswear.co.uk/product/boro-runners-long-sleeve-top-reflective-ladies-fit/", isAvailable: true },
    { _id: "merch-14", name: "Boro Runners Long Sleeve Reflective (Unisex)", price: 16.50, url: "https://www.sprinterssportswear.co.uk/product/boro-runners-long-sleeved-top-reflective-unisex/", isAvailable: true },
    { _id: "merch-15", name: "Boro Runners Long Sleeve Top (Unisex)", price: 15.50, url: "https://www.sprinterssportswear.co.uk/product/boro-runners-long-sleeved-top-unisex/", isAvailable: true },
    { _id: "merch-16", name: "Boro Runners Reflective T-Shirt (Ladies Fit)", price: 14.00, url: "https://www.sprinterssportswear.co.uk/product/boro-runners-reflective-t-shirt-ladies-fit/", isAvailable: true },
    { _id: "merch-17", name: "Boro Runners Reflective T-Shirt (Unisex)", price: 14.00, url: "https://www.sprinterssportswear.co.uk/product/bororunners-reflective-t-shirt-unisex/", isAvailable: true },
    { _id: "merch-18", name: "Boro Runners Unisex Hoodie", price: 23.00, url: "https://www.sprinterssportswear.co.uk/product/boro-runners-unisex-hoodie/", isAvailable: true },
    { _id: "merch-19", name: "Boro Runners Unisex T-Shirt", price: 13.00, url: "https://www.sprinterssportswear.co.uk/product/boro-runners-unisex-t-shirt/", isAvailable: true },
  ];
  for (const item of merchandise) {
    await client.createOrReplace({ _type: "merchandiseItem", ...item });
  }
  console.log(`  ✓ ${merchandise.length} Merchandise Items\n`);

  console.log("Done! Refresh your Studio to see the data.");
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
