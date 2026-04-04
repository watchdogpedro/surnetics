# Surnetics Email Infrastructure

## How It Works

All surnetics.com email runs through **Porkbun email forwarding** + **Gmail SMTP**. There is no dedicated mail server.

1. Someone sends email to `name@surnetics.com`
2. **Porkbun** forwards it to the persons personal Gmail
3. Gmail **"Send As"** feature lets them reply as `name@surnetics.com`
4. Outbound mail goes through `smtp.gmail.com`

---

## Email Addresses

| Surnetics Address | Forwards To | Status | Send As Configured? |
|---|---|---|---|
| bbabcock@surnetics.com | brian.d.babcock@gmail.com | Forwarding active | Brian needs to complete Gmail/Outlook setup |
| pdenman@surnetics.com | *(Paul personal Gmail)* | Forwarding active (confirmed April 2026) | TBD |
| info@surnetics.com | *(check Porkbun)* | Used on contact page | TBD |

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

## Gmail "Send As" Setup (For Any Surnetics Address)

### Prerequisites
1. **Porkbun forwarding** must be active for the address
2. **Google 2-Step Verification** must be ON
3. **Google App Password** created at myaccount.google.com/apppasswords

### Gmail Setup
1. Gmail → Settings → Accounts and Import → "Send mail as" → Add another email address
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

## Outreach Email

- **HTML template:** `public/email-template.html` — professional outreach email for patent portfolio
- **Contacts list:** `outreach/contacts.csv` — ~50+ target companies (email addresses need to be filled in)
- **Outreach method:** Gmail mail merge using YAMM (Yet Another Mail Merge) add-on
- **Sender:** pdenman@surnetics.com (Paul) — Brian email not yet operational

---

## Brian Setup Guide

Full step-by-step guide for Brian sent March 2026. Also saved in repo as `brian-email-setup-guide.md`.
Brian has **not completed** the setup as of April 2026.

---

*Last updated: April 2026*

