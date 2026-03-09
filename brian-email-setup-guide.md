# Brian's Email Setup Guide
## Setting Up bbabcock@surnetics.com

**What this does:** You'll be able to receive AND send email using bbabcock@surnetics.com — from both Gmail and Outlook on your Mac.

**Time needed:** About 15 minutes

---

## How It Works (Quick Overview)

- Emails sent to bbabcock@surnetics.com automatically forward to your Gmail (brian.d.babcock@gmail.com) — this is already set up
- You'll configure Gmail and Outlook to also SEND emails as bbabcock@surnetics.com
- This means people will see bbabcock@surnetics.com, not your Gmail address

---

## PART 1: Gmail Setup (Send as bbabcock@surnetics.com)

### Step 1 — Turn On 2-Step Verification

Before anything else, Google requires 2-Step Verification to be ON.

1. Go to: **myaccount.google.com**
2. Click **Security** in the left menu
3. Under "How you sign in to Google," click **2-Step Verification**
4. Follow the steps to turn it on (usually just confirming your phone number)

> **Skip this step if 2-Step Verification is already ON on your Google account.**

---

### Step 2 — Create a Google App Password

This is a special one-time password Google creates so Outlook and Gmail can send email securely.

1. Go to: **myaccount.google.com/apppasswords**
   - (If you can't find it, go to Google Account → Security → scroll down to "App passwords")
2. You may be asked to sign in again — go ahead
3. In the **App name** box, type: `Surnetics Send As`
4. Click **Create**
5. Google will show you a **16-character password** — it looks like: `abcd efgh ijkl mnop`

> **IMPORTANT: Write this password down right now. Google will never show it again.**
> You'll need it in Step 3 and again in Part 2 (Outlook setup).

---

### Step 3 — Add bbabcock@surnetics.com to Gmail

1. Open **Gmail** (mail.google.com) — sign in as brian.d.babcock@gmail.com
2. Click the **gear icon** (top right) → click **See all settings**
3. Click the **Accounts and Import** tab
4. Find the section called **"Send mail as"**
5. Click **"Add another email address"**
6. A small window will pop up — fill it in:
   - **Name:** Brian Babcock
   - **Email address:** bbabcock@surnetics.com
   - Uncheck "Treat as an alias" if checked
   - Click **Next Step**
7. On the next screen, fill in exactly:
   - **SMTP Server:** smtp.gmail.com
   - **Port:** 587
   - **Username:** brian.d.babcock@gmail.com
   - **Password:** *(paste your 16-character App Password from Step 2 — no spaces)*
   - Select **TLS**
   - Click **Add Account**
8. Gmail will send a confirmation email to bbabcock@surnetics.com
   - This automatically forwards to your Gmail inbox (brian.d.babcock@gmail.com)
   - Check your Gmail inbox for an email from Google with subject:
     **"Gmail Confirmation - Send Mail as bbabcock@surnetics.com"**
   - Click the blue confirmation link inside that email
9. Done! bbabcock@surnetics.com now appears in your Gmail "Send mail as" list

---

### Step 4 — How to Send as bbabcock@surnetics.com in Gmail

When composing a new email in Gmail:
1. Click the **From** field (it may say brian.d.babcock@gmail.com)
2. A dropdown will appear — select **bbabcock@surnetics.com**
3. Send as normal — the recipient will see your Surnetics address

---

## PART 2: Mac Outlook Setup

### Step 1 — Open Outlook Account Settings

1. Open **Microsoft Outlook** on your Mac
2. Click **Outlook** in the top menu bar
3. Click **Settings** (or **Preferences**)
4. Click **Accounts**

---

### Step 2 — Add a New Account

1. Click the **+** button in the bottom left corner
2. Choose **New Account**
3. Type your email: **bbabcock@surnetics.com**
4. Press Enter or click Continue

> Outlook will try to find settings automatically and fail — that's expected. Look for a button that says **"Not a valid Microsoft account?"** or **"Set up manually"** or **"Advanced"** — click it.

---

### Step 3 — Choose IMAP

When asked what type of account, select **IMAP/SMTP** or just **IMAP**.

---

### Step 4 — Enter These Settings Exactly

| Setting | Value |
|---------|-------|
| **Email address** | bbabcock@surnetics.com |
| **Display name** | Brian Babcock |
| **IMAP server** | imap.gmail.com |
| **IMAP port** | 993 |
| **IMAP security** | SSL |
| **SMTP server** | smtp.gmail.com |
| **SMTP port** | 587 |
| **SMTP security** | STARTTLS |
| **Username** (incoming) | brian.d.babcock@gmail.com |
| **Username** (outgoing) | brian.d.babcock@gmail.com |
| **Password** (both) | *(your 16-character App Password from Part 1, Step 2)* |

> **Note:** Even though the username is your Gmail address, Outlook will display and send as bbabcock@surnetics.com.

---

### Step 5 — Save and Finish

1. Click **Add Account** or **Save**
2. Outlook will verify the connection — this may take 30 seconds
3. Once connected, you'll see **bbabcock@surnetics.com** appear as a separate account in your Outlook left sidebar
4. Click on it to see your inbox (which mirrors your Gmail inbox)

---

### Step 6 — Sending Email from Outlook

When composing a new email in Outlook:
1. In the **From** field, make sure it shows **bbabcock@surnetics.com**
   - If it shows your Gmail, click the From field and switch it
2. Type your email and send as normal
3. Recipients will see bbabcock@surnetics.com as the sender

---

## Troubleshooting

**Q: Outlook says my password is wrong**
- Make sure you're using the **App Password** (16 characters), NOT your regular Gmail password
- The App Password should have no spaces when you type it in

**Q: I can't find "App passwords" in my Google account**
- 2-Step Verification must be ON first — go back to Step 1
- Try going directly to: myaccount.google.com/apppasswords

**Q: The Gmail confirmation email never arrived**
- Check your spam/junk folder in Gmail
- Make sure you entered bbabcock@surnetics.com correctly in the Gmail settings
- Wait 5 minutes and check again

**Q: Outlook shows all my Gmail emails, not just Surnetics emails**
- That's normal — the inbox shows everything. The key benefit is you can now SEND as bbabcock@surnetics.com

**Q: I get a security error when Outlook tries to connect**
- Double-check IMAP port is 993 with SSL
- Double-check SMTP port is 587 with STARTTLS
- Make sure username is brian.d.babcock@gmail.com (not bbabcock@surnetics.com)

---

## Summary of What You Set Up

| Feature | Status |
|---------|--------|
| Receive emails at bbabcock@surnetics.com | ✅ Already working (forwards to Gmail) |
| Send as bbabcock@surnetics.com from Gmail | ✅ Set up in Part 1 |
| Send as bbabcock@surnetics.com from Outlook | ✅ Set up in Part 2 |

---

*Setup guide prepared by Surnetics — March 2026*
