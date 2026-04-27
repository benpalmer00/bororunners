# Bororunners Website - Content Management Guide

This guide explains how to update the content on the Bororunners website using the built-in content management system (CMS).

---

## Getting Started

### How to access the CMS

1. Go to **bororunners.co.uk/studio** in your web browser.
2. Log in with your Sanity account (the one set up for the club).
3. You will see a sidebar on the left with different sections you can manage.

### How changes work

- When you make a change and click **Publish**, the update is saved.
- The website will pick up the changes on the next deploy (Netlify rebuild), or in some cases immediately.
- If changes don't appear straight away, go to **Netlify > Deploys > Trigger deploy > Deploy site** to force a rebuild.

---

## The Sidebar Sections

When you open the CMS, the left sidebar has these sections:

| Section | What it manages |
|---------|----------------|
| Sessions & Training | Weekly run sessions + monthly workout timetables |
| Events & Races | The racing calendar on the Events page |
| People | Committee, run leaders, and Runner of the Month |
| Blog & News | Blog posts and articles |
| Photo Gallery | Photos shown on the Gallery page |
| Shop / Merchandise | Products on the Shop page |
| Sponsors & Partners | Club sponsors |
| Site Settings | Hero images across the site + the event sign-up PIN |

---

## Managing Each Section

### 1. Sessions & Training

This section has two parts:

#### Weekly Sessions
These are the regular club run sessions (e.g. Monday Social Run, Thursday Track Session). Each session has:

- **Title** - The name of the session (e.g. "Thursday Track Session")
- **Day** - Which day of the week
- **Time** - What time it starts (e.g. "6:15pm")
- **Location** - Where it takes place
- **Meeting Point** - Where runners should meet
- **Ability Level** - Who it's aimed at (Beginner, All Abilities, Intermediate, or Advanced)
- **Description** - A short description of the session
- **Has Waiting List** - Tick this if the session has limited spaces
- **Active** - Untick this to hide a session from the website without deleting it
- **Display Order** - A number to control the order sessions appear (lower numbers appear first)

#### Timetable
This is the monthly workout schedule. Each entry has:

- **Date** - The date as text (e.g. "Mon 2nd March")
- **Sort Date** - Pick the actual calendar date (this is used to put entries in the right order)
- **Location** - Where the session is (e.g. "LJ Track", "Coulby Manor Way")
- **Time** - What time (e.g. "6:10pm")
- **Workout** - The workout description (e.g. "4-7 x 1k @ 5k pace w/ 2 minutes rest")
- **Month** - Which month this belongs to (e.g. "March 2026"). This groups the entries together.
- **Special Event?** - Tick this for special events like Superhero Run. It highlights the row in red on the website.

**To add a new month:** Simply create new timetable entries with the new month name (e.g. "April 2026"). The website will automatically show the latest month.

---

### 2. Events & Races

This is the racing calendar shown on the Events page. Each event has:

- **Title** - The name of the race (e.g. "Great North Run")
- **Date** - The date and time of the event
- **Location** - Where it takes place (e.g. "Newcastle to South Shields")
- **Description** - Optional extra details about the event
- **Entry URL** - A link to the official entry page for the race
- **Facebook Event URL** - A link to the Facebook event if there is one
- **Featured Image** - An optional photo for the event
- **Past Event** - Tick this to move it to the "Past Events" section. Note: events also move to "Past" automatically once their date has passed.
- **Enable Sign-Up** - Tick this to allow club members to sign up for the event through the website. They will need the club PIN to sign up.
- **Results** - Add results or a summary after the event is done

**To add a new event:** Click the **+** button at the top of the events list, fill in the details, and click **Publish**.

**To remove an event:** Open it and click the three dots menu > Delete.

---

### 3. People

This section has two parts:

#### Committee & Team
These are the people shown on the "Meet the Team" page. Each person has:

- **Name** - Their full name
- **Role** - Their role in the club (e.g. "Club Chairman", "Run Leader")
- **Photo** - A headshot or photo of them
- **Bio** - A short description about them
- **Category** - Which group they belong to: Chairman, Officer, Welfare & Support, or Run Leader. This controls which section they appear in on the page.
- **Display Order** - A number to control the order within their category (lower numbers appear first)

#### Runner of the Month
A monthly spotlight feature. Each entry has:

- **Name** - The runner's name
- **Month** - Which month they won (e.g. "March 2026")
- **Photo** - A photo of the runner
- **Write-Up** - A short piece about why they were chosen
- **Current Winner** - Tick this for the current month's winner. **Important: Only one person should have this ticked at a time.** When you add a new winner, untick the previous one first.

---

### 4. Blog & News

Blog posts appear on the Blog page. Each post has:

- **Title** - The headline of the post
- **Slug** - The URL-friendly version of the title (auto-generated when you type the title). For example, "Great North Run Roundup" becomes `great-north-run-roundup`, and the post will be at `bororunners.co.uk/blog/great-north-run-roundup`.
- **Published At** - The date to show on the post. Set this to when you want it to appear as published.
- **Author** - Who wrote the post
- **Featured Image** - The main image shown at the top of the post and on the blog listing page. Always add alt text (a short description of the image for accessibility).
- **Excerpt** - A short summary shown on the blog listing page (2-3 sentences)
- **Body** - The main content of the post. You can:
  - Write and format text (bold, italic, headings, lists, links)
  - Add images within the text (click the image icon in the toolbar)
- **Tags** - Optional labels like "Race Report", "Club News", etc.

**To create a new blog post:**
1. Click the **+** button
2. Type your title (the slug will auto-fill)
3. Set the published date
4. Add a featured image
5. Write an excerpt (short summary)
6. Write the body content
7. Click **Publish**

---

### 5. Photo Gallery

Photos shown on the Gallery page. Each image has:

- **Image** - Upload the photo. Always add alt text (a short description like "Club members at the Great North Run finish line").
- **Caption** - An optional caption shown under the photo
- **Category** - Choose one: Parkrun, Race Day, Club Night, Social, Training, or Other. Visitors can filter photos by category on the website.
- **Date Taken** - When the photo was taken
- **Featured** - Tick this to highlight the photo. Featured photos appear on the home page.

**To add photos:**
1. Click the **+** button
2. Upload the image
3. Add alt text and a caption
4. Choose a category
5. Tick "Featured" if you want it on the home page (aim for about 6 featured photos)
6. Click **Publish**

**Tip:** You can add multiple photos quickly by creating one, publishing it, then clicking **+** again.

---

### 6. Shop / Merchandise

Products shown on the Shop page. Each item has:

- **Name** - The product name (e.g. "Bororunners Track Top")
- **Photo** - A product image
- **Description** - A short description
- **Price** - The price in pounds (just the number, e.g. `35`)
- **Available Sizes** - Add each size as a tag (e.g. S, M, L, XL)
- **Product URL** - A link to where people can buy it (e.g. the Sprinters Sportswear page)
- **Available** - Untick this to mark something as out of stock without deleting it

---

### 7. Sponsors & Partners

Club sponsors shown on the Sponsors page. Each sponsor has:

- **Name** - The sponsor's name
- **Logo** - Their logo image. Add alt text (e.g. "Sprinters Sportswear logo").
- **Description** - What they do / how they support the club
- **Member Discount** - Any discount they offer club members
- **Website URL** - A link to their website
- **Display Order** - A number to control the order (lower numbers appear first)

---

### 8. Site Settings

This is a single settings page (not a list). It controls images and settings that apply across the whole website.

#### Event Sign-Up PIN
- **Event Sign-Up PIN** - A 4-digit code that club members need to enter before they can sign up for events on the website. Share this with members via WhatsApp. Change it whenever you need to.

#### Hero Images
These are the large banner images at the top of each page. You can change any of them:

| Setting | Where it appears |
|---------|-----------------|
| **Home Hero Image** | The main banner on the home page |
| **About Page Hero Image** | Banner on the About page |
| **About Page Story Image** | The photo next to the "Built on Community" section on the About page |
| **Sessions Page Hero Image** | Banner on the Sessions page |
| **Join Page Hero Image** | Banner on the Join the Club page |
| **Join Page Membership Image** | Photo next to the membership perks on the Join page |
| **Team Page Hero Image** | Banner on the Meet the Team page |
| **Events Page Hero Image** | Banner on the Events page |
| **Home About Teaser Image** | Photo in the "From 8 Runners to Award-Winning Club" section on the home page |
| **Club Mascot Photo** | Photo of Badger shown on the Meet the Team page |

**Recommended image sizes:** Use landscape photos that are at least 1920 pixels wide for hero images. The wider and higher quality, the better.

**To change a hero image:**
1. Go to **Site Settings** in the sidebar
2. Click on the image you want to change
3. Click **Upload** and pick your new image
4. Click **Publish**

---

## Common Tasks - Quick Reference

### "I want to add a new race to the calendar"
1. Go to **Events & Races**
2. Click **+**
3. Fill in the title, date, and location
4. Tick **Enable Sign-Up** if members should be able to sign up
5. Click **Publish**

### "I want to change the Runner of the Month"
1. Go to **People > Runner of the Month**
2. Open the current winner and **untick** "Current Winner", then **Publish**
3. Click **+** to create a new entry
4. Fill in their name, month, photo, and write-up
5. Tick **Current Winner**
6. Click **Publish**

### "I want to add photos from a recent race"
1. Go to **Photo Gallery**
2. Click **+**
3. Upload the photo and add alt text
4. Set the category to "Race Day"
5. Tick "Featured" if it should appear on the home page
6. Click **Publish**
7. Repeat for each photo

### "I want to write a blog post about a race"
1. Go to **Blog & News**
2. Click **+**
3. Type your title, set the date, add a featured image
4. Write a short excerpt (this appears on the blog listing)
5. Write the full article in the body section
6. Click **Publish**

### "I want to change the hero image on a page"
1. Go to **Site Settings**
2. Find the image for the page you want to change
3. Upload a new image (landscape, at least 1920px wide)
4. Click **Publish**

### "I want to change the event sign-up PIN"
1. Go to **Site Settings**
2. Change the **Event Sign-Up PIN** to a new 4-digit code
3. Click **Publish**
4. Share the new PIN with members via WhatsApp

### "An event has finished and I want to add results"
1. Go to **Events & Races**
2. Open the event
3. Add text to the **Results** field
4. The event will automatically move to "Past Events" once its date has passed
5. Click **Publish**

### "I want to add a new team member"
1. Go to **People > Committee & Team**
2. Click **+**
3. Fill in their name, role, and category (Chairman/Officer/Welfare & Support/Run Leader)
4. Add a photo and bio if available
5. Set a display order number
6. Click **Publish**

### "I want to add next month's workout timetable"
1. Go to **Sessions & Training > Timetable**
2. Click **+** to create a new entry
3. Fill in the date, sort date, location, time, and workout
4. Set the **Month** to the new month (e.g. "May 2026")
5. Click **Publish**
6. Repeat for each session in the month

---

## Tips

- **Always click Publish** after making changes. If you see a blue "Publish" button, your changes haven't been saved yet.
- **Don't delete things you might need later.** Instead, use the "Active" or "Available" toggles to hide them.
- **Add alt text to every image.** This helps with accessibility and search engines. Just describe what's in the photo in a few words.
- **Hero images look best as wide landscape photos.** Aim for at least 1920x1080 pixels. Portrait photos will get cropped.
- **The website may need a redeploy** to show your changes. If updates aren't appearing, go to Netlify and trigger a deploy.

---

## Need Help?

If something isn't working or you're unsure about anything, get in touch with your web developer. The CMS is designed to be straightforward, but if you run into any issues, it's better to ask than to guess.
