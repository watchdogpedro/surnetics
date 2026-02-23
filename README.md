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

## Contact Form Setup (Formspree)

The contact form uses Formspree. To activate:

1. Go to formspree.io and create a free account
2. Create a new form — copy the Form ID (e.g. `xabcdefg`)
3. Open `src/app/contact/page.tsx`
4. Replace `YOUR_FORM_ID` with your actual form ID:
   ```
   const FORMSPREE_ACTION = "https://formspree.io/f/xabcdefg";
   ```
5. Commit and push — form is live immediately

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
