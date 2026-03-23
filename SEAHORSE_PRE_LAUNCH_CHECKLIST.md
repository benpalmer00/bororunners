# Bororunners — Seahorse Pre-Launch Checklist

**Project:** SI-2026-002 | Bororunners Running Club
**Review this document before the site goes live.**

---

## 1. Google Sheets — Event Sign-Up Setup

The website has a built-in event sign-up system. When a runner clicks "Sign Up" on an event, their name is written to a Google Spreadsheet. This requires a one-time Google Cloud setup.

### Step 1: Create a Google Cloud Project
1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Sign in with a Google account (can be Seahorse's or Ben's)
3. Click **Select a project** → **New Project**
4. Name it `Bororunners` → **Create**

### Step 2: Enable the Google Sheets API
1. In the project, go to **APIs & Services** → **Library**
2. Search for **Google Sheets API**
3. Click **Enable**

### Step 3: Create a Service Account
1. Go to **APIs & Services** → **Credentials**
2. Click **+ Create Credentials** → **Service Account**
3. Name it `bororunners-signups` → **Create and Continue**
4. Skip the optional role/access steps → **Done**
5. Click on the newly created service account
6. Go to the **Keys** tab → **Add Key** → **Create new key** → **JSON**
7. A JSON file will download — keep this safe, you need two values from it:
   - `client_email` (looks like `bororunners-signups@bororunners-xxxxx.iam.gserviceaccount.com`)
   - `private_key` (starts with `-----BEGIN PRIVATE KEY-----`)

### Step 4: Create the Spreadsheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it **Bororunners Event Sign-Ups**
4. Click **Share** → paste the `client_email` from Step 3 → give it **Editor** access
5. Copy the spreadsheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/COPY_THIS_PART/edit
   ```

### Step 5: Pre-populate existing sign-ups
Ben's existing racing list spreadsheet has names against events. Copy these into the new spreadsheet:
1. For each event that already has sign-ups, create a tab named: `{Event Name} - {Date}`
   - e.g. `Boro Half Marathon - Sunday, 1st March 2026`
2. Add headers in row 1: **Name** | **Signed Up At**
3. Paste the existing names from Ben's sheet into column A (leave "Signed Up At" blank for migrated entries)

### Step 6: Add environment variables
Add these to **Netlify** (Site settings → Environment variables) AND to `.env.local` for local dev:

```
GOOGLE_SHEETS_SPREADSHEET_ID=the_id_from_step_4
GOOGLE_SHEETS_CLIENT_EMAIL=the_email_from_step_3
GOOGLE_SHEETS_PRIVATE_KEY=the_full_private_key_from_step_3
```

**Note:** The private key contains `\n` characters. In Netlify, paste the full key as-is including the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` lines.

### Step 7: Test
1. Deploy the site (or run locally with the env vars set)
2. Go to the Events page
3. Click **Sign Up** on any upcoming event
4. Enter a test name and submit
5. Check the Google Spreadsheet — a new tab should appear with the test entry

### Step 8: Share the spreadsheet with Ben
1. Click **Share** on the spreadsheet
2. Add Ben's email (ben.palmer3@hotmail.com) as **Viewer** or **Editor**
3. Send him the link to bookmark

---

## 2. Sanity CMS

- [ ] Sanity project created and `NEXT_PUBLIC_SANITY_PROJECT_ID` set
- [ ] `SANITY_API_TOKEN` generated and set
- [ ] Ben has a Sanity account and can log into `/studio`
- [ ] Initial content seeded (sessions, events, team members, etc.)

---

## 3. Resend (Contact Form)

- [ ] `RESEND_API_KEY` set in Netlify env vars
- [ ] Test the contact form → email arrives at ben.palmer3@hotmail.com

---

## 4. Domain & DNS

- [ ] `bororunners.co.uk` domain configured in Netlify
- [ ] SSL certificate provisioned
- [ ] DNS records pointing to Netlify

---

## 5. Social Media Links

Still waiting from Ben:
- [ ] Instagram URL
- [ ] Strava URL
- [ ] TikTok URL

---

## 6. Final Checks

- [ ] All pages load without errors
- [ ] Contact form sends successfully
- [ ] Event sign-ups write to Google Sheets
- [ ] Sanity Studio accessible at `/studio`
- [ ] Mobile responsive — test on phone
- [ ] Footer shows "Built by Seahorse Integrations" → seahorseltd.co.uk
- [ ] `BEN_HANDOVER.md` reviewed and up to date
- [ ] GA4 setup instructions given to Ben (post-launch)

---

*Seahorse Integrations Ltd | seahorseltd.co.uk*
