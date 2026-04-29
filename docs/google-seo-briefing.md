# Surnetics — Google SEO & Search Console Briefing

Use this document to brief Claude (or anyone helping) on the Surnetics website so we can work on getting Google to properly index and rank it.

---

## What Is Surnetics?

**Surnetics** (surnetics.com) is a company selling and licensing a portfolio of **5 granted US patents** in microfluidics and lab-on-a-chip technology. The target audience is large life science and medical device companies like Abbott, Thermo Fisher, Danaher, Bio-Rad, and Becton Dickinson.

**Goal of the website**: Get the right people (IP acquisition teams, licensing directors at large medtech/pharma companies) to find the site on Google and reach out.

**Owner**: Paul Denman (watchdogpedro@gmail.com)

---

## Website Tech Stack

- **Framework**: Next.js (React), deployed on **Vercel**
- **Domain**: https://surnetics.com
- **Hosting**: Vercel (auto-deploys from GitHub)
- **Code location**: /Users/pauldenman/surnetics (local Mac)

---

## All Pages on the Site

| Page | URL |
|------|-----|
| Home | https://surnetics.com/ |
| Technology | https://surnetics.com/technology/ |
| IP Portfolio | https://surnetics.com/ip-portfolio/ |
| Markets Overview | https://surnetics.com/markets/ |
| IVD Diagnostics | https://surnetics.com/markets/ivd-diagnostics/ |
| Electronics Cooling | https://surnetics.com/markets/electronics-cooling/ |
| Implantable Devices | https://surnetics.com/markets/implantable-devices/ |
| Drug Delivery | https://surnetics.com/markets/drug-delivery/ |
| Energy Storage | https://surnetics.com/markets/energy-storage/ |
| Aerospace & Defense | https://surnetics.com/markets/aerospace-defense/ |
| Applications | https://surnetics.com/applications/ |
| News | https://surnetics.com/news/ |
| About | https://surnetics.com/about/ |
| Contact | https://surnetics.com/contact/ |
| One-Pager | https://surnetics.com/one-pager/ |

---

## The 5 Patents (IP Portfolio)

1. **US 12,263,480** — Diagnostic Device with Integrated Sampler and Holder
2. **US 12,083,517** — Microfluidic Products with Controlled Fluid Flow
3. **US 11,583,858** — Microfluidic Diagnostics with Controlled Fluid Flow
4. **US 10,821,438** — Microfluidic Diagnostics with Controlled Fluid Flow
5. **US 9,968,930** — Microfluidic Products with Controlled Fluid Flow

---

## Current SEO State (What's Already Done)

The site already has solid technical SEO built in:

- ✅ **Meta title & description** — well written, includes keywords
- ✅ **Keywords** — microfluidics patents for sale, lab-on-a-chip patent licensing, point-of-care diagnostics IP, etc.
- ✅ **OpenGraph tags** — for social sharing previews
- ✅ **Twitter card** — for Twitter/X previews
- ✅ **Schema.org markup** — Organization schema + Patent ItemList schema (helps Google understand the content)
- ✅ **robots.txt** — tells Google to crawl all pages
- ✅ **sitemap.xml** — exists at https://surnetics.com/sitemap.xml
- ✅ **HTTPS** — site is secure

### What's Missing / Needs Work

- ❌ **Google Search Console not set up** (or not confirmed) — this is the #1 priority
- ❌ **Sitemap missing some pages** — news and applications pages are not in sitemap.xml
- ❌ **Google Business Profile** — may or may not be useful (see notes below)
- ❌ **Backlinks** — no other sites linking to surnetics.com yet
- ❌ **Content freshness** — Google rewards sites that update regularly (news articles help this)

---

## Priority 1: Google Search Console Setup

Google Search Console (GSC) is a **free Google tool** that lets you:
- Tell Google your site exists
- Submit your sitemap so Google indexes all pages
- See which Google searches are finding your site
- Find and fix any indexing errors

### Steps to Set Up Google Search Console

1. Go to **https://search.google.com/search-console**
2. Sign in with your Google account (watchdogpedro@gmail.com)
3. Click **"Add property"**
4. Choose **"URL prefix"** and enter `https://surnetics.com`
5. **Verify ownership** — the easiest method for Vercel sites is:
   - Choose **"HTML tag"** verification method
   - Google gives you a meta tag like: `<meta name="google-site-verification" content="XXXXX" />`
   - This tag needs to be added to the `<head>` in `/Users/pauldenman/surnetics/src/app/layout.tsx`
   - Then click "Verify" in Search Console
6. Once verified, go to **Sitemaps** in the left menu
7. Enter `sitemap.xml` and click **Submit**
8. Done — Google will start crawling within a few days

---

## Priority 2: Fix the Sitemap

The current sitemap.xml is missing two pages:
- `/news/`
- `/applications/`
- `/one-pager/`

These should be added so Google indexes them too.

**File to edit**: `/Users/pauldenman/surnetics/public/sitemap.xml`

---

## Priority 3: Google Business Profile (Optional)

Google Business Profile (formerly Google My Business) is mostly for **local businesses** with a physical address customers visit. Since Surnetics is a B2B patent licensing company (not a retail location), this is lower priority — but it can still be useful for brand recognition in Google search results.

If you want to set it up:
1. Go to **https://business.google.com**
2. Search for "Surnetics" — if it doesn't exist, create it
3. Add: company name, website URL, business category ("Patent Services" or "Biotechnology Company"), phone, description
4. Verify (usually via postcard or phone)

---

## Key SEO Keywords We're Targeting

These are the terms potential buyers/licensees would search:

**High priority (buy intent)**:
- "microfluidics patents for sale"
- "lab-on-a-chip patent licensing"
- "microfluidic IP portfolio"
- "microfluidic patent acquisition"
- "point-of-care diagnostics patent"

**Secondary**:
- "microfluidic device patent"
- "biosensor patent licensing"
- "molecular diagnostics patent"
- "passive fluid control technology"
- "pump-free microfluidics patent"

---

## Notes on Backlinks (Future Priority)

Google ranks sites higher when **other websites link to them**. For Surnetics, good backlink sources would be:
- Press release distribution (PRNewswire, BusinessWire)
- LinkedIn company page linking to surnetics.com
- Industry publications or patent databases
- Any news articles or mentions that can include a link

---

## What to Ask Claude for Help With

When working on Google tasks in the browser, Claude can help you:

1. **Write the Google Search Console verification meta tag** — once Google gives you the code, I can add it to layout.tsx
2. **Fix the sitemap** — add missing pages
3. **Write press releases or news articles** — fresh content helps SEO
4. **Write a Google Business Profile description** — if you set that up
5. **Check if the site is showing up in Google** — search `site:surnetics.com` in Google to see what's indexed

---

## Quick Context for New Claude Sessions

If starting a fresh Claude session, paste this summary:

> I'm working on surnetics.com — a Next.js website on Vercel that sells/licenses a portfolio of 5 microfluidics patents. Owner is Paul Denman. I need help with Google Search Console setup and SEO. The site has good on-page SEO already (meta tags, schema markup, sitemap). Main gap is Search Console not yet verified and sitemap missing a few pages. Tech stack: Next.js + Vercel, code is local on Mac at /Users/pauldenman/surnetics. The layout file is at src/app/layout.tsx and sitemap is at public/sitemap.xml.
