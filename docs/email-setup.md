# Surnetics Email Infrastructure

## How It Works

All surnetics.com email runs through **Porkbun email forwarding** + **Gmail SMTP**. There is no dedicated mail server.

1. Someone sends email to `name@surnetics.com`
2. **Porkbun** forwards it to the persons personal Gmail
3. Gmail **"Send As"** feature lets them reply as `name@surnetics.com`
4. Outbound mail goes through `smtp.gmail.com`

---

## Email Addresses

| Surnetics Address | Forwards To | Forwarding | Send As |
|---|---|---|---|
| pdenman@surnetics.com | watchdogpedro@gmail.com | WORKING | WORKING — Gmail + Outlook Legacy (Apr 4, 2026) |
| bbabcock@surnetics.com | brian.d.babcock@gmail.com | WORKING | NOT SET UP — Brian has guide but has not completed |
| info@surnetics.com | *(check Porkbun)* | Unknown | Not configured |

---

## Paul Denman Setup (pdenman@surnetics.com)

### Porkbun Forwarding
- pdenman@surnetics.com → watchdogpedro@gmail.com

### Gmail "Send As"
- Display name: Paul Denman
- SMTP: smtp.gmail.com, port 587, TLS
- Gmail account: watchdogpedro@gmail.com
- App Password name: "Surnetics Email" (created Apr 4, 2026)
- Status: WORKING
- Tip: In Gmail Settings → Accounts → "When replying" → set to "Reply from the same address the message was sent to"

### Mac Outlook Setup (IMPORTANT: Must use Legacy Outlook)
- **New Outlook (non-legacy) does NOT work** — it forces Google OAuth which locks the From address to Gmail
- **Legacy Outlook works** — use Tools → Accounts → IMAP (not Google) → "Sync directly with IMAP"
- Settings that worked:
  - Email Address: pdenman@surnetics.com
  - IMAP Username: watchdogpedro@gmail.com
  - IMAP Password: Google App Password (no spaces)
  - IMAP Server: imap.gmail.com, Port 993, SSL
  - SMTP Username: watchdogpedro@gmail.com
  - SMTP Password: Google App Password (no spaces)
  - SMTP Server: smtp.gmail.com, **Port 465** (587 failed), SSL
- Status: WORKING (confirmed Apr 4, 2026)

### How to Send as Surnetics
- **Gmail:** Click "From" field when composing → select pdenman@surnetics.com
- **Outlook Legacy:** Make sure From field shows "watchdogpedro@gmail.com (pdenman@surnetics.com)" before sending

---

## Domain & DNS

- **Registrar:** Porkbun
- **Email forwarding:** Porkbun dashboard → surnetics.com → Email Forwarding
- **Website DNS:**

| Type | Host | Value |
|------|------|-------|
| A | @ | 76.76.21.21 (Vercel) |
| CNAME | www | cname.vercel-dns.com |

- MX records managed automatically by Porkbun

---

## Setup Guide for New Surnetics Addresses

### Prerequisites
1. Porkbun forwarding active for the address
2. Google 2-Step Verification ON
3. Google App Password created at myaccount.google.com/apppasswords

### Gmail "Send As"
1. Gmail → Settings → Accounts and Import → "Send mail as" → "Add another email address"
2. Enter name and surnetics.com address
3. SMTP: smtp.gmail.com, Port 587, TLS, Gmail username, App Password
4. Confirm verification email

### Outlook Legacy (Mac)
1. Switch to Legacy Outlook (Help → Revert to Legacy Outlook)
2. Tools → Accounts → + → New Account → enter surnetics address
3. Choose IMAP (NOT Google)
4. Click "Sync directly with IMAP" (NOT Microsoft Cloud)
5. Fill in: Gmail username, App Password, imap.gmail.com:993, smtp.gmail.com:465, SSL on both
6. Add Account

**WARNING:** New (non-legacy) Mac Outlook forces Google OAuth for Gmail servers and will NOT let you send as a custom domain. You MUST use Legacy Outlook.

---

## Outreach Campaign

- **HTML template:** `public/email-template.html`
- **Contacts:** `outreach/contacts.csv` + Google Sheets (Brian Babcock Target List)
- **Method:** Gmail mail merge using YAMM (Yet Another Mail Merge)
- **Sender:** Paul Denman <pdenman@surnetics.com>
- **Links:** surnetics.com/ip-portfolio, surnetics.com/contact
- **One-pager:** surnetics.com/one-pager (print to PDF for attachment)

---

## Brian Setup Status

Guide sent March 2026 (repo: `brian-email-setup-guide.md`). As of April 4, 2026: **not completed.**

---

*Last updated: April 4, 2026*

