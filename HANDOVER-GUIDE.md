# Bororunners Website - Handover Guide for Ben

Welcome to the Bororunners website! This guide covers everything you need to know to manage, update, and maintain the site going forward.

---

## What You're Getting

The Bororunners website is built with:
- **Website:** bororunners.co.uk (hosted on Netlify, deploys automatically from GitHub)
- **Content Management:** Sanity CMS (edit content at bororunners.co.uk/studio)
- **Code Repository:** GitHub (github.com/benpalmer00/bororunners)
- **Waitlist & Event Sign-Ups:** Google Sheets (data saved automatically when people sign up)

---

## Step 1 — Accept the Google Sheets Invite

You should have received an email invite to a Google Sheet (sent to ben.palmer3@hotmail.com). This sheet stores:
- **Waitlist tab** — everyone who joins the waiting list via the website
- **Event tabs** — each event gets its own tab automatically when someone signs up

**What to do:**
1. Open the email invite from Google
2. Click **"Open in Sheets"** or **"Accept"**
3. You now have full access to view all waitlist and event sign-up data
4. Bookmark the sheet so you can check it easily

**Tip:** New rows appear automatically when someone submits the waitlist form or signs up for an event. You don't need to do anything — just check the sheet when you want to see who's signed up.

---

## Step 2 — Log Into the CMS

The CMS (Content Management System) is where you update the website content — events, blog posts, photos, team members, and more.

1. Go to **bororunners.co.uk/studio**
2. Log in with your Sanity account
3. You'll see a sidebar with all the sections you can edit

For a full guide on how to use every section of the CMS, see the separate document: **SANITY-CMS-GUIDE.md** (also in the project files).

---

## Step 3 — Understand What You Can Change

### Things you CAN change through the CMS (no coding needed):
- Racing calendar (add/edit/remove events)
- Weekly training sessions
- Monthly workout timetables
- Blog posts and news articles
- Photo gallery
- Team members and their bios/photos
- Runner of the Month
- Shop items / merchandise
- Sponsors and partners
- Hero images on every page
- The event sign-up PIN (shared with members via WhatsApp)

### Things that are fixed in the code (would need a developer to change):
- About page text (milestones, values, story)
- Join page text (membership perks, onboarding steps)
- Contact page details (email, social links)
- Privacy policy and safeguarding pages
- Overall design, colours, and layout

---

## Step 4 — Know Your Accounts

Here's a summary of the accounts connected to the website:

| Service | What it does | How to access |
|---------|-------------|---------------|
| **Netlify** | Hosts the website and deploys updates | netlify.com (log in with your account) |
| **GitHub** | Stores the website code | github.com/benpalmer00/bororunners |
| **Sanity** | Content management system | bororunners.co.uk/studio |
| **Google Sheets** | Stores waitlist + event sign-up data | Check your email for the shared sheet link |
| **Google Cloud** | Service account that lets the website write to Google Sheets | Managed via console.cloud.google.com (admin account) |

---

## Step 5 — How the Website Updates

### Content changes (CMS):
1. You make a change in the CMS at bororunners.co.uk/studio
2. Click **Publish**
3. The change may appear immediately, or after the next Netlify deploy
4. To force an update: go to **Netlify > Deploys > Trigger deploy > Deploy site**

### Code changes (developer only):
1. A developer pushes code to GitHub
2. Netlify automatically detects the change and rebuilds the site
3. The new version goes live within a couple of minutes

You don't need to worry about code changes — that's only needed if the design or functionality needs updating.

---

## Step 6 — How Events Work

### Adding a new event:
1. Go to **bororunners.co.uk/studio > Events & Races**
2. Click **+** to create a new event
3. Fill in the title, date, location
4. Tick **Enable Sign-Up** if members should be able to register
5. Click **Publish**

### How sign-up works:
1. A club member clicks "Sign Up" on an event
2. They enter the **club PIN** (currently set to "2026" — you can change this in Site Settings)
3. They enter their name
4. Their sign-up is saved to a new tab in the Google Sheet (one tab per event)

### Past events:
Events automatically move to the "Past Events" section once their date has passed. You don't need to manually mark them.

---

## Step 7 — How the Waitlist Works

1. Someone visits bororunners.co.uk/join and fills out the form
2. Their details are saved to the **Waitlist** tab in Google Sheets

The waitlist captures: name, email, phone, preferred sessions, ability level, how they heard about the club, and the submission date/time.

**To check new sign-ups:** Open the Google Sheet and look at the Waitlist tab. New entries appear at the bottom.

---

## Step 8 — How the Contact Page Works

The contact page at bororunners.co.uk/contact has four clickable cards:

- **Joining the Club** — opens an email to you with a pre-filled subject line
- **Events & Races** — opens an email to you about events
- **Sponsorship** — opens an email to you about sponsorship
- **General Enquiry** — opens a general email to you

When someone clicks a card, it opens their email app (Gmail, Outlook, etc.) with a message pre-addressed to ben.palmer3@hotmail.com and a relevant subject line. They type their message and send it directly to your inbox — no middleman service needed.

---

## Step 9 — Changing the Event Sign-Up PIN

The PIN is a 4-digit code that club members need to enter before signing up for events. It stops random people from signing up.

To change it:
1. Go to **bororunners.co.uk/studio**
2. Click **Site Settings** in the sidebar
3. Change the **Event Sign-Up PIN** field
4. Click **Publish**
5. Share the new PIN with members via WhatsApp

---

## Environment Variables Reference

These are the settings stored in Netlify that connect the website to its services. You shouldn't need to change these often, but here's what they are in case you need to check them:

| Variable | What it connects to |
|----------|-------------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project |
| `NEXT_PUBLIC_SANITY_DATASET` | Your Sanity dataset (usually "production") |
| `SANITY_API_TOKEN` | Allows the website to read from Sanity |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | The service account that writes to Google Sheets |
| `GOOGLE_PRIVATE_KEY` | The private key for the service account |
| `WAITLIST_SPREADSHEET_ID` | The Google Sheet for waitlist data |
| `GOOGLE_SHEETS_SPREADSHEET_ID` | The Google Sheet for event sign-up data |

To view or edit these: **Netlify > your site > Site configuration > Environment variables**

---

## Troubleshooting

### "I changed something in the CMS but it's not showing on the website"
- Make sure you clicked **Publish** (blue button in the CMS)
- Go to **Netlify > Deploys > Trigger deploy > Deploy site** to force a rebuild
- Hard-refresh the page in your browser (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)

### "Someone signed up for an event but I can't see it in the sheet"
- Check the tabs at the bottom of the Google Sheet — each event creates its own tab
- The tab name will be the event title and date (e.g. "Great North Run - Sunday, 13th September 2026")

### "The CMS won't load / shows an error"
- Try a hard-refresh (Ctrl+Shift+R / Cmd+Shift+R)
- Check you're logged into the correct Sanity account
- If it still doesn't work, check that `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are set in Netlify, then trigger a redeploy

### "The website is down"
- Go to netlify.com and check your site's deploy status
- If the latest deploy failed, click on it to see the error message
- Most build failures are caused by code issues — contact your developer

---

## Key Contacts

If you need help with anything technical (code changes, bug fixes, new features), contact your web developer.

For account-related issues:
- **Netlify support:** netlify.com/support
- **Sanity support:** sanity.io/contact

---

## Quick Reference Card

| I want to... | Go to... |
|--------------|----------|
| Add or edit events | bororunners.co.uk/studio > Events & Races |
| Write a blog post | bororunners.co.uk/studio > Blog & News |
| Add gallery photos | bororunners.co.uk/studio > Photo Gallery |
| Update team members | bororunners.co.uk/studio > People > Committee & Team |
| Change Runner of the Month | bororunners.co.uk/studio > People > Runner of the Month |
| Update shop items | bororunners.co.uk/studio > Shop / Merchandise |
| Change a hero image | bororunners.co.uk/studio > Site Settings |
| Change the sign-up PIN | bororunners.co.uk/studio > Site Settings |
| Check waitlist sign-ups | Open the Google Sheet > Waitlist tab |
| Check event sign-ups | Open the Google Sheet > look at the event's tab |
| Force a website update | Netlify > Deploys > Trigger deploy |
| Check environment variables | Netlify > Site configuration > Environment variables |
