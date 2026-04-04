# Surnetics Email Infrastructure

## How It Works

All surnetics.com email runs through **Porkbun email forwarding** + **Gmail SMTP**. There is no dedicated mail server.

1. Someone sends email to `name@surnetics.com`
2. **Porkbun** forwards it to the persons personal Gmail
3. Gmail **"Send As"** feature lets them reply as `name@surnetics.com`
4. Outbound mail goes through `smtp.gmail.com` on port 587 (TLS)

---

## Email Addresses

| Surnetics Address | Forwards To | Forwarding Status | Send As Status |
|---|---|---|---|
| pdenman@surnetics.com | watchdogpedro@gmail.com | WORKING (confirmed Apr 4, 2026) | WORKING (confirmed Apr 4, 2026) |
| bbabcock@surnetics.com | brian.d.babcock@gmail.com | WORKING | NOT SET UP — Brian has not completed Gmail/Outlook setup |
| info@surnetics.com | *(check Porkbun)* | Unknown | Not configured |

### Paul Gmail "Send As" Details
- **Display name:** Paul Denman
- **Email:** pdenman@surnetics.com
- **SMTP:** smtp.gmail.com, port 587, TLS
- **Gmail account:** watchdogpedro@gmail.com
- **App Password name:** "Surnetics Email" (created Apr 4, 2026)

### Other Send As Addresses in Paul Gmail
- contact@seekon.ai (seekon team)
- info@seekon.ai (SeekON Team)
- paul@seekon.ai (PD)
- sales@seekon.ai (SeekON Team)

---

## Domain & DNS

- **Registrar:** Porkbun
- **Email forwarding:** Configured in Porkbun dashboard (Domain → surnetics.com → Email Forwarding)
- **Website DNS:**

| Type | Host | Value |
|------|------|-------|
| A | @ | 76.76.21.21 (Vercel) |
| CNAME | www | cname.vercel-dns.com |

- MX records are managed automatically by Porkbun when email forwarding is enabled

---

## Gmail "Send As" Setup (For Any New Surnetics Address)

### Prerequisites
1. **Porkbun forwarding** must be active for the address
2. **Google 2-Step Verification** must be ON
3. **Google App Password** created at myaccount.google.com/apppasswords

### Gmail Setup
1. Gmail → Settings → Accounts and Import → "Send mail as" → "Add another email address"
2. Enter name and surnetics.com address
3. SMTP settings:
   - **Server:** smtp.gmail.com
   - **Port:** 587
   - **Encryption:** TLS
   - **Username:** your personal Gmail address
   - **Password:** 16-character Google App Password
4. Click confirmation link in the verification email

### Outlook Setup (Optional)
- **Incoming:** imap.gmail.com, Port 993, SSL/TLS
- **Outgoing:** smtp.gmail.com, Port 587, STARTTLS
- **Username (both):** your personal Gmail address
- **Password (both):** 16-character Google App Password

---

## Outreach Campaign

- **HTML template:** `public/email-template.html` — professional outreach email for patent portfolio
- **Contacts list:** `outreach/contacts.csv` + Google Sheets (Brian Babcock Target List)
- **Outreach method:** Gmail mail merge using YAMM (Yet Another Mail Merge) add-on
- **Sender:** Paul Denman <pdenman@surnetics.com>
- **Key links in template:** surnetics.com/ip-portfolio, surnetics.com/contact
- **One-pager:** surnetics.com/one-pager (can be printed to PDF and attached)

---

## Brian Setup Status

Full step-by-step guide sent to Brian March 2026 (also in repo as `brian-email-setup-guide.md`).
As of April 4, 2026: **Brian has NOT completed the setup.**

---

*Last updated: April 4, 2026*

