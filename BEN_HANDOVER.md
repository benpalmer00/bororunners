# Bororunners Website — Ben's Handover Guide

## Your CMS
Go to: https://bororunners.co.uk/studio
Log in with your Sanity account.

You can update:
- Sessions (times, locations, ability levels)
- Monthly timetable (the dated session schedule with locations and workouts)
- Events and races (with sign-up enabled/disabled per event)
- Blog posts and news
- Gallery photos
- Runner of the Month
- Team members
- Merchandise

## Monthly Timetable
Each month, add the new session schedule via the CMS:
1. Go to **Timetable Events** in the Studio sidebar
2. Click **+ Create** for each session
3. Fill in: Date (e.g. "Mon 2nd March"), Sort Date (pick the calendar date), Location, Time, Workout, Month (e.g. "March 2026")
4. Toggle **Special Event** on for highlighted events like Superhero Run
5. Click **Publish**
6. The sessions page will automatically show the latest month's timetable

## Event Sign-Ups
When you add an event in the CMS with **Enable Sign-Up** toggled on, runners can sign up directly from the website. Their details are automatically added to your Google Spreadsheet.

### Sign-Up PIN
There is a single 4-digit PIN that protects all event sign-ups from the public.

1. In the Studio, go to **Site Settings**
2. Set your **Event Sign-Up PIN** (e.g. `2026`)
3. Share the PIN with club members via WhatsApp
4. Members enter the PIN before they can sign up for any event
5. You can change the PIN at any time — it updates instantly across all events

### Checking sign-ups
1. Open your **Bororunners Event Sign-Ups** Google Spreadsheet
2. Each event has its own tab along the bottom
3. Tabs are created automatically when the first person signs up

## Google Analytics (Set up after launch)
1. Go to analytics.google.com and sign in with a Google account
2. Create a new GA4 property for bororunners.co.uk
3. Copy your Measurement ID (format: G-XXXXXXXXXX)
4. Add it to your Netlify environment variables as: NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
5. Redeploy the site

## Social Media Links Still Needed
Please send your Instagram, Strava, and TikTok profile URLs to george@seahorseltd.co.uk
so we can update those links on the site.

## Domain Email
When you're ready, set up an email address at bororunners.co.uk through your domain registrar.
Let us know and we'll update the contact form sender address accordingly.

## Bug Reports
Any issues within 30 days of launch — email george@seahorseltd.co.uk or samuel@seahorseltd.co.uk
