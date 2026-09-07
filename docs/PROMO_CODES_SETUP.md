# Promo Codes — Setup Guide

This explains how to turn on the promo-code feature (customers who type a
valid code get their reading, quiz result, or group reading for free,
skipping Square entirely) and how to create/manage codes afterward. No
coding knowledge is needed for either step below — everything happens in
the Supabase dashboard's SQL Editor.

## 1. Run the setup SQL once

1. Go to your Supabase project dashboard.
2. Open **SQL Editor** in the left sidebar → **New query**.
3. Open [`supabase/promo_codes_schema.sql`](../supabase/promo_codes_schema.sql)
   in this repo, copy the **entire file**, and paste it into the query
   editor.
4. Click **Run**.

That's it — this creates the `promo_codes` table and a secure function
(`redeem_promo_code`) the website uses to check codes. You only need to do
this once per Supabase project.

## 2. Creating a new promo code

Back in the SQL Editor, run an `insert` statement like this:

```sql
insert into public.promo_codes (code, applies_to, max_uses)
values ('FAMILY2025', 'group5', 1);
```

Here's what each part means:

| Field | Meaning |
|---|---|
| `code` | The word/phrase the customer types (e.g. `FAMILY2025`). Case doesn't matter — `family2025` and `FAMILY2025` both work, it's stored uppercase automatically. |
| `applies_to` | Which reading the code works for. Use the tier's slug — see the table below. |
| `max_uses` | How many times the code can be used in total, across everyone. |

### Making a code work for one specific tier vs. any tier

- **One specific tier**: set `applies_to` to that tier's slug, e.g. `'blueprint'`, `'archetype-quiz'`, `'group5'`, `'initiation'`, `'unveiling'`, `'partnership'`. (Group Reading slugs are `group3` through `group25`, one per headcount.)
- **Any tier at all**: set `applies_to` to `'all'`, or leave it out entirely (`null`) — both mean "works for any reading on the site."

### Single-use vs. multi-use vs. unlimited

- **Single-use** (works exactly once, for anyone): `max_uses` → `1`
- **Multi-use** (works up to N times total): `max_uses` → any number, e.g. `10`
- **Unlimited** (no cap — works forever, for anyone, any number of times): leave `max_uses` out, or set it to `null`

Example — a code good for 5 free Blueprints total:

```sql
insert into public.promo_codes (code, applies_to, max_uses)
values ('LAUNCH5', 'blueprint', 5);
```

Example — an unlimited code that works on any reading (use sparingly!):

```sql
insert into public.promo_codes (code, applies_to)
values ('FRIENDSANDFAMILY', 'all');
```

### Making a code expire on a certain date

Add `expires_at`:

```sql
insert into public.promo_codes (code, applies_to, max_uses, expires_at)
values ('SUMMER2026', 'all', 50, '2026-09-01 00:00:00-00');
```

After that date/time, the code stops working automatically — you don't
need to do anything else.

### Turning a code off without deleting it

If you want to shut a code down but keep its history (how many times it
was used, etc.), don't delete the row — just deactivate it:

```sql
update public.promo_codes set active = false where code = 'FAMILY2025';
```

To turn it back on later:

```sql
update public.promo_codes set active = true where code = 'FAMILY2025';
```

### Checking how a code has been used

```sql
select code, applies_to, max_uses, times_used, active, expires_at
from public.promo_codes
order by created_at desc;
```

## 3. Codes are never visible to customers

This is important, so it's worth stating plainly:

- The website's public code has **no list of valid promo codes anywhere in
  it** — nothing to find by viewing the page source.
- The only thing the website can ever ask Supabase is "is *this one exact
  code the customer just typed* valid for *this one tier*?" — never "give
  me the list of codes."
- A wrong guess always gets back the same generic-sounding failure (e.g.
  "not recognized") — the website never hints at what a real code looks
  like, how many codes exist, or which ones are close.
- This is enforced at the database level, not just by how the website
  happens to be written: the `promo_codes` table has Row Level Security
  turned on with **no** direct read/write access granted to the public key
  the website uses. The only door in is the `redeem_promo_code` function,
  which only ever answers that one yes/no question and — on a valid,
  unused code — safely marks it as used one more time in the same step (so
  two people can't both grab the "last" use of a single-use code at the
  same moment).

## Where redemptions show up

Every time someone redeems a promo code, it's recorded the same way a real
Square purchase is — in the **Admin Panel**'s purchase list, tagged with a
"✦ PROMO" badge and a price of `$0 (promo: CODE)` so it's obviously a comp,
not a real charge or a bug. It's included in the order count, but excluded
from the "average order value" figure so free codes don't make your real
average sale look artificially low.
