# Surnetics Email & Outreach Setup

## Email Addresses

| Address | Owner | Purpose |
|---------|-------|---------|
| pdenman@surnetics.com | Paul Denman | Business development, outreach |
| bbabcock@surnetics.com | Brian Babcock | (setup guide sent) |

## Paul's Email Setup

- **Domain registrar:** Porkbun (surnetics.com)
- **Inbound:** Porkbun email forwarding → watchdogpedro@gmail.com
- **Outbound (Gmail):** "Send mail as" pdenman@surnetics.com via smtp.gmail.com
- **Outbound (Outlook):** Legacy Outlook for Mac, IMAP manual setup
  - Incoming: imap.gmail.com, port 993, SSL
  - Outgoing: smtp.gmail.com, port 465, SSL
  - Username: watchdogpedro@gmail.com
  - Password: Google App Password ("Surnetics Email")
- **App Passwords:** "Surnetics Email" (Outlook), "Gmail Send As" (Gmail Send As feature)

## DNS Records (Porkbun)

- MX records: Porkbun email forwarding defaults
- No custom DKIM/SPF (using Gmail's SMTP relay)

## Outreach Campaign — April 4, 2026

### Tool Stack
- **YAMM (Yet Another Mail Merge):** Pro plan ($36/year), installed in Google Sheets
- **Google Sheet:** "surnetics_outreach_clean" in Google Drive
- **Gmail draft:** Plain text template with {{First}} and {{Company}} merge tags
- **Send from:** pdenman@surnetics.com (set via YAMM alias each time)

### Contact List
- **153 contacts** across diagnostics, diabetes tech, life science, food testing, pharma
- Clean CSV also saved at: outreach/surnetics_outreach_clean.csv
- Key companies: Roche, Abbott, Danaher, Thermo Fisher, Medtronic, Pfizer, J&J, Illumina, etc.

### Email Template
- **Subject:** Microfluidics Patent Portfolio — Licensing Opportunity
- **Format:** Plain text (personal feel for executive outreach)
- **Content:** 5 US patents, passive microfluidic flow, available for acquisition/license through 2041
- **CTA:** Link to https://surnetics.com/ip-portfolio/
- **Signature:** Paul Denman, Co-Founder & Director of Business Development

### First Send Results (April 4, 2026)
- 153 emails sent via YAMM
- Tracking enabled (opens, clicks, bounces)
- Some EMAIL_CLICKED responses within minutes of sending

### YAMM Tips for Next Time
- IMPORTANT: Always set the alias to pdenman@surnetics.com in "Alias, filters, personalized attachments" before sending
- YAMM Pro allows 400 recipients/day
- Merge status column auto-added to spreadsheet (EMAIL_SENT, EMAIL_CLICKED, BOUNCED)
- pdenman@surnetics.com is currently set as default "Send mail as" in Gmail — change back to watchdogpedro@gmail.com when done with outreach campaigns

