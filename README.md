# Surnetics — surnetics.com

Patented Surface Energy Gradient Coating Technology — microfluidic flow control without pumps, valves, or controllers.

**Stack:** Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · Static Export
**Hosting:** Vercel
**Domain:** Porkbun → surnetics.com

---

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build
# Static files output to /out
```

---

## Vercel Deployment

### Option A — Vercel Dashboard (recommended)
1. Go to vercel.com/new
2. Import the `watchdogpedro/surnetics` GitHub repository
3. Vercel auto-detects Next.js — no config needed
4. Click **Deploy**
5. Every push to `main` triggers automatic redeployment

### Option B — Vercel CLI
```bash
# Install Vercel CLI (if needed)
npm i -g vercel

# Deploy to production
vercel --prod --yes
```

---

## Contact Form Setup (Google Sheets via Apps Script)

Form submissions go directly into a Google Sheet. Setup takes ~5 minutes.

### Step 1 — Create the Google Sheet
1. Go to sheets.google.com and create a new spreadsheet
2. Name it **Surnetics Contact Forms**
3. In row 1, add these headers in columns A–G:
   ```
   Timestamp | Name | Company | Email | Phone | Inquiry Type | Message
   ```

### Step 2 — Create the Apps Script
1. In the sheet, click **Extensions → Apps Script**
2. Delete the default code and paste this:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var p = e.parameter;
  sheet.appendRow([
    new Date(),
    p.name || '',
    p.company || '',
    p.email || '',
    p.phone || '',
    p.inquiryType || '',
    p.message || ''
  ]);
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Save** (name the project anything, e.g. "Surnetics Form")

### Step 3 — Deploy as Web App
1. Click **Deploy → New deployment**
2. Click the gear icon next to "Type" → select **Web app**
3. Set:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**
5. Authorize the permissions when prompted
6. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/XXXXX/exec`)

### Step 4 — Add the URL to the site
1. Open `src/app/contact/page.tsx`
2. Replace `YOUR_SCRIPT_ID` with your actual URL:
   ```
   const APPS_SCRIPT_URL = "https://script.google.com/macros/s/XXXXX/exec";
   ```
3. Commit and push — form is live

> **Note:** Each time you edit the Apps Script, you must create a **New Deployment** (not update existing) for changes to take effect.

---

## Porkbun DNS Configuration

After deploying to Vercel and adding the custom domain in the Vercel dashboard:

**In Porkbun** → Domains → surnetics.com → DNS:

| Type  | Host | Value                  |
|-------|------|------------------------|
| A     | @    | 76.76.21.21            |
| CNAME | www  | cname.vercel-dns.com   |

- Delete any existing A or CNAME records for `@` and `www` first
- DNS propagation takes 5–60 minutes

**In Vercel** → Project → Settings → Domains:
- Add `surnetics.com`
- Add `www.surnetics.com`
- Vercel verifies DNS automatically

---

## Project Structure

```
surnetics/
├── src/
│   ├── app/
│   │   ├── page.tsx               # Home
│   │   ├── layout.tsx             # Root layout + metadata
│   │   ├── globals.css            # Design system
│   │   ├── technology/page.tsx    # Technology page
│   │   ├── ip-portfolio/page.tsx  # IP Portfolio page
│   │   ├── markets/page.tsx       # Markets page
│   │   ├── about/page.tsx         # About page
│   │   └── contact/page.tsx       # Contact page
│   └── components/
│       ├── NavBar.tsx
│       ├── Footer.tsx
│       ├── SectionWrapper.tsx
│       ├── HeroAnimation.tsx
│       ├── AnimatedCounter.tsx
│       ├── PatentCard.tsx
│       ├── MarketCard.tsx
│       └── TeamCard.tsx
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── next.config.ts                 # output: export, trailingSlash: true
├── vercel.json
└── README.md
```

---

## Core Patent

**US 9,968,930 B2** — "Microfluidic Products with Controlled Fluid Flow"
Inventor: Brian David Babcock · Assignee: Surnetics LLC
Filed: March 26, 2014 · Granted: May 15, 2018 · Active until 2034
20 claims · Cited by 44 subsequent patents

---

© Surnetics LLC. All rights reserved.
