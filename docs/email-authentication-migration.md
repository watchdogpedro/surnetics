# Surnetics email authentication migration — in progress

**Started:** 2026-08-28 · **Status:** paused mid-migration, safe to leave as-is
**Nothing is broken right now.** Surnetics mail still flows through ImprovMX exactly as before.

## Why this work exists

Mail sent as `pdenman@surnetics.com` goes out through consumer Gmail's servers
(`smtp.gmail.com`). Consumer Gmail can only sign mail as `gmail.com` — it has no way
to sign as `surnetics.com`. The From line says Surnetics while the cryptographic
signature says Google, so receivers see a mismatch and treat it as possible forgery.

Proof, from the headers of a test message delivered 2026-08-28 15:37 to a Google
Workspace recipient:

| Check | Result |
|---|---|
| From | `pdenman@surnetics.com` |
| Gmail's own label | "via **gmail.com**" |
| SPF | PASS — but for gmail.com, not surnetics.com |
| **DMARC** | **FAIL** |

Two test messages sent this way landed in the recipient's **Spam** folder. A third,
sent from `watchdogpedro@gmail.com` after the Send-As default was corrected, landed
in the **Inbox** on the first try.

This affects every email ever sent from `pdenman@surnetics.com`, including the
153-message YAMM outreach campaign in April 2026.

## The fix being applied

Add `surnetics.com` to the existing winfieldtech.com Google Workspace as a **user
alias domain** (free — no per-user license). Mail then flows through Google, which
DKIM-signs as `surnetics.com`, and everything aligns.

Chosen over the alternative (ImprovMX paid plan, $9/mo, no MX change) because it
costs nothing and is architecturally correct.

## Done so far

1. **Gmail Send-As default fixed** on `watchdogpedro@gmail.com` — was
   `pdenman@surnetics.com` (April outreach leftover), now `watchdogpedro@gmail.com`.
   Also set "When replying to a message" → *Reply from the same address the message
   was sent to*.
2. **surnetics.com added to Google Workspace** as a user alias domain for
   winfieldtech.com.
3. **Verification TXT added at Porkbun** and confirmed live:
   `google-site-verification=JYrt2rWmLKa3Mn1_sqPTuPwpOh1j6gYE5B-xH0bVJMA`
   (Note: an older, unrelated `google-site-verification=mLtZ51jh...` record already
   existed. Both are present. Leave the old one alone.)
4. **Domain verified by Google.** Admin console shows surnetics.com as
   "User alias domain for winfieldtech.com", verified.

## Next step — stopped here deliberately

Google is showing an **Activate Gmail** button. Clicking it switches the MX records
for surnetics.com from ImprovMX to Google. That reroutes live mail, so it was not
done unattended.

Remaining work, in order:

1. **Activate Gmail / switch MX** — surnetics.com MX moves from
   `mx1.improvmx.com` / `mx2.improvmx.com` to Google's five `aspmx` hosts.
2. **Update SPF** on surnetics.com. Current record only authorises ImprovMX:
   `v=spf1 include:spf.improvmx.com ~all`
   After the MX move it should become:
   `v=spf1 include:_spf.google.com ~all`
3. **Turn on DKIM** for surnetics.com — Admin console → Apps → Google Workspace →
   Gmail → Authenticate email → generate key → add the TXT record at Porkbun.
4. **Add DMARC** — `_dmarc.surnetics.com` TXT, start at `v=DMARC1; p=none; rua=...`
   and tighten later.
5. **Remove the old Send-As entry** for `pdenman@surnetics.com` from
   `watchdogpedro@gmail.com`, since the address becomes a real Workspace alias.
6. **Re-test**: send from an outside account to `pdenman@surnetics.com`, open
   *Show original*, confirm SPF pass, DKIM pass, DMARC **pass**.

## Consequences of finishing the MX switch

- Incoming Surnetics mail stops going to `watchdogpedro@gmail.com` via ImprovMX and
  lands in the `pdenman@winfieldtech.com` Workspace inbox instead.
- ImprovMX forwarding for surnetics.com is retired. **Before flipping MX, check the
  ImprovMX dashboard for any other forwarded addresses** (info@, sales@, etc.) and
  recreate them as Workspace aliases or groups. Only `pdenman@` is known to be in use.
- YAMM outreach would run from the Workspace account rather than watchdogpedro.
- A user alias domain applies to every user in the Workspace, so the second user
  (Dianna) also gets an `@surnetics.com` alias. Harmless, worth knowing.
- Expect a few minutes of mail queueing during the MX change. Nothing is lost.

## Also found, not yet fixed

**winfieldtech.com has no SPF record and no DMARC record at all.** Its mail runs on
Google Workspace, so outbound mail is unprotected. Independent of the Surnetics work,
and worth doing at the same time:

- SPF: `v=spf1 include:_spf.google.com ~all`
- DMARC: `_dmarc.winfieldtech.com` → `v=DMARC1; p=none; rua=mailto:...`

## Gotchas hit along the way

- **Porkbun's DNS page is a bulk editor.** Records staged with "Add Record" are not
  saved until **Submit Records** is clicked at the bottom. There is a checkbox,
  "Do not delete existing records" — it must stay **checked**, or submitting wipes
  every existing record and replaces them with only what is staged.
- Porkbun's page froze repeatedly when driven by script clicks. A fresh tab and
  native clicks worked.
- Selecting record type TXT swaps the Answer field from an `<input>` to a
  `<textarea>`, clearing anything typed before the type was set. Set the type first.
- The Chrome extension needs separate site permission for `admin.google.com` and
  `workspace.google.com`; the flow crosses both plus `porkbun.com`.

## Related

Contact-address work on winfieldtech.com finished the same day —
`contactwinfield@winfieldtech.com` is live, bot-protected, and verified working.
See that repo's README.
