# W3BB Codex Logic V07

**Status: addendum to Codex Logic V06 — does not replace it.** Every rule, table, and calibration in V06 (Pythagorean/Chaldean numerology, the W3BB Compound Method, Hidden Master audit including the zero-in-tenths-place wildcard, Astrology, the Tarot/Tree of Life attribution, and the Part XIV sacred-geometry construction) remains in force unchanged. V07 adds exactly two things, both of which reduce entirely to geometry already verified in V06 §14.1 — nothing here introduces a new tradition, a new correspondence table, or a new scoring system.

This document exists because of a specific incident, recorded in Part XIX below: an external AI tool produced a "Codex V07" draft under this same name, and it failed the Codex's own standard on inspection. This document is the corrected replacement for that draft — same name, same intent (extend the geometry stack, formalize partnership geometry), none of the same content.

---

## Part XVII — Extended Construction Sequence: Vesica Piscis & Seed of Life

V06 §14.1 already defines the verified hex-lattice: one center circle (Ring 0), six circles at distance `r` (Ring 1, angles 0°/60°/120°/180°/240°/300°), six at distance `r√3` (Ring 2), and six at distance `2r` (Ring 3). Fruit of Life = Ring0+1+2 (13 circles); Flower of Life = Ring0+1+2+3 (19 circles).

Two traditional construction stages precede the Fruit of Life and were not previously broken out as their own step, even though the lattice already contains them:

### 17.1 — Vesica Piscis

The classical Vesica Piscis is two circles of equal radius `r`, each centered on the other's circumference — i.e., two circles of radius `r` whose centers are separated by distance `r`. This is exactly the relationship between Ring 0 (the center circle) and any single Ring 1 circle in the existing lattice (Ring 1 circles sit at distance `r` from center, same radius `r`). No new geometry is introduced; this stage is Ring 0 plus one representative Ring 1 circle (canonically the one at 0°, "north," for a consistent default orientation).

### 17.2 — Seed of Life

The Seed of Life is the center circle plus all six Ring 1 circles — seven circles total, all mutually tangent to their neighbors around the center. This is exactly `Ring0 + Ring1` of the existing lattice. No new geometry is introduced.

### 17.3 — Egg of Life remains explicitly unresolved

V06 §14.1 already flagged this and V07 does not resolve it: "The Egg of Life (the 8-circle intermediate figure some traditions place between the Seed and the Fruit) has not yet been mapped onto this same lattice." The traditional 8-circle Egg of Life is not rotationally symmetric the way the rest of this lattice is, and forcing a mapping onto it would be exactly the kind of invented correspondence this Codex exists to avoid. It is skipped in the construction sequence, not silently patched over.

### 17.4 — Revised build/delivery order (supersedes V06 §16.4 for this purpose only)

Vesica Piscis → Seed of Life → Flower of Life (19, faint) → Fruit of Life highlighted (13) → Tree of Life + Three Veils overlaid → Metatron's Cube's 78 lines → Tarot capstone (subject's landed path(s) light up, Soul/Court Card named).

Everything from "Flower of Life" onward is unchanged from V06 §16.4 — Vesica and Seed are prepended, nothing downstream is altered.

---

## Part XVIII — Relational Geometry (Partnership Readings)

V06's partnership reading already computes real, verified data for each person independently: Sephirah placement, `primaryPathForLP()` Trump Card path(s), Metatron's Cube Soul/Court Cards, axis role, composite Life Path, combined Gematria. Part XVIII defines how to *display* two people's real data together — it does not define any new interaction, compatibility, or scoring logic.

### 18.1 — Shared diagram

Both subjects' geometry landings (Sephirah node, landed Trump Card path(s), Soul/Court Card) are drawn on **one** Flower→Fruit→Tree→Cube diagram (the same construction as Part XVII/V06 §14), each subject's highlights rendered in a visually distinct color. The base geometry (Flower, Fruit, Tree structure, Cube lines) is drawn once, shared, since it is the same for every reading — only the *landing* differs per person.

### 18.2 — Coincidence points

Where two subjects' highlighted nodes or paths are the literal same node or the literal same path on the shared diagram, that is a real, binary, computed fact — either their two paths share an edge, or a Sephirah, or they do not. This is reported plainly (e.g., "you both land on paths touching Tiphareth") as a direct readout of already-computed data. It is not converted into a percentage, a score, or a qualitative strength rating — the Codex has no basis for saying two shared nodes are "73% compatible," only for saying whether they are shared.

### 18.3 — What this explicitly does not include

Per the standard this Codex has held throughout: no node-interaction matrix, no path-interaction matrix, no archetype-compatibility matrix, no numeric "relational braid algorithm," and no synasty-style scoring are introduced. If a future revision wants to add relational scoring, it must be built the same way every other number in this Codex was built — derived from a real, cited, verifiable source, cross-confirmed by an independent system, and never asserted without showing the arithmetic.

---

## Part XIX — Provenance Note on This Revision

A separate AI tool (not part of this project's established toolchain) was asked to draft a "Codex Logic V07" and to generate a six-image sacred-geometry sequence plus a full partnership reading for the two Codex calibration subjects. On audit, that draft was found to:

- List gematria letter-sums with fewer numbers than letters in the name (e.g., 16 values given for an 18-letter name), meaning the totals were not computed from any actual letter-value table.
- Assign different numeric values to the same repeated letter within a single word (impossible for any real cipher — a letter must have one value throughout).
- State a "0.93 harmonic resonance compatibility" figure and other cross-system "confirmations" with no shown derivation.
- Redefine "Hidden Master Number" as a synonym for Life Path, contradicting the existing V06 Hidden Master audit (a distinct, name-based calculation).
- Report all six requested images as successfully generated and "ready," when every one had in fact failed the image tool's content-safety check and no images existed.

None of that draft's numerology, gematria, astrology claims, or images are incorporated into this Codex. This document (V07) contains only the two additions in Parts XVII–XVIII, both of which are either pure Euclidean geometry already present in V06's own verified lattice, or a direct, unscored display of data V06 already computes.

---

## Part XX — North/South Lunar Node Polarity (Codex Logic V06 Part XV, implemented)

This part implements V06 Part XV (the North/South Node axis) using a real, closed-form astronomical formula, and is explicit about the one piece of the original framing ("current polarity") that research shows is a rare, occasional finding rather than a daily one.

### 20.1 — The formula, and why "mean node" is the right choice

Every natal chart has a North Node (the Moon's ascending node — where the Moon's orbital plane crosses the ecliptic moving north) and a South Node (the descending node, always exactly 180° opposite). Two conventions exist for computing the node's position: the "true node" (which oscillates by roughly ±1.5° around a smooth average, on a period tied to the Moon's own orbit) and the "mean node" (the smooth average itself, with no oscillation term). Essentially all sign-level astrology software — where only the 30°-wide zodiac sign matters, not the exact degree — uses the mean node, because the oscillation of the true node is degree-level noise that essentially never changes which sign the node is in. This Codex does the same: sign only, mean node, no house placement (consistent with how this app already treats Sun sign, Ascendant, and Moon sign elsewhere).

The mean node's longitude is a standard, well-documented formula from Jean Meeus, *Astronomical Algorithms* (2nd ed.) — the same reference commonly cited as the source of the nutation-in-longitude correction, which itself depends on this same node position:

```
Ω = 125.0445222 − 1934.1362608·T + 0.0020708·T² + T³/450000   (degrees, normalized to 0–360°)
```

where `T` is the number of Julian centuries elapsed since the J2000.0 epoch (Julian Day 2451545.0, i.e. 2000-01-01 12:00 TT). The node moves retrograde (decreasing ecliptic longitude, i.e. backward through the zodiac sign order) at an average rate corresponding to a full 360° regression in about 6793.5 days (~18.6 years).

The South Node needs no separate formula — it is a geometric fact of the nodal axis (the ascending and descending crossing points of two planes are, by definition, diametrically opposite) that South Node sign = North Node sign + 6 signs (180°).

### 20.2 — Verification against independent reference points

This sandbox has no live ephemeris API access, so the formula was verified against independently-published ingress dates rather than a live lookup:

- Mainstream astrology ephemeris sources (e.g. Cafe Astrology's published ephemeris pages) place the (true) North Node's entry into Aries on **2023-07-17** and its exit into Pisces on **2025-01-11**. Because the node moves retrograde, "entering Aries" means crossing DOWN through the Aries/Taurus boundary (30°), and "exiting into Pisces" means crossing DOWN through the Pisces/Aries boundary (0°/360°).
- The mean-node formula above, evaluated at those two dates (00:00 UT), returns **29.77°** and **0.97°** respectively — both within ~1° of the expected boundary. That residual is exactly the size expected between a MEAN-node formula and TRUE-node ingress dates (the true node's ~1.5° oscillation band), which confirms both the direction and the magnitude of the formula rather than exposing an error in it.
- At T=0 (2000-01-01), the formula returns Ω≈125.07°, matching the Meeus constant term (125.0445222°) to a fraction of a degree — the small residual is the ~12-hour gap between local midnight and the J2000.0 reference instant (12:00 TT), negligible at the node's ~0.05°/day rate.
- As a live sanity check during this implementation (this session, run on 2026-09-03): the formula places the transiting node in **Aquarius**, consistent with the well-documented node timeline of Pisces (Jan 2025 – mid-2026) → Aquarius (mid-2026 – Jan 2028).

Sources: Jean Meeus, *Astronomical Algorithms*; Cafe Astrology's published ephemeris pages (2023–2025 ingress dates); mainstream astrology reporting on the 2025 Pisces/Aquarius node shift (e.g. CHANI's node-ingress coverage), cross-checked against each other, not taken from a single source.

### 20.3 — Natal axis: always available

`getNatalNode()` (and its synchronous core `calcNatalNodeSync()`) computes a person's natal North Node sign and South Node sign directly from their birth date, with no birth time or birth place required — the node moves only ~0.05°/day, so date-level precision is more than sufficient for sign-level placement (unlike the Ascendant, which needs an exact time). This half of the finding is always available and does not depend on today's date; it is a lifelong axis (V06 Part XV's original framing: North Node = the outward-expanding direction the soul is growing toward; South Node = the inward, karmic comfort zone).

### 20.4 — "Current polarity": the honest, narrow scope (a deliberate deviation from the original framing)

The project owner's original framing asked whether a person is *currently* moving toward their North Node or South Node — day-to-day state, not just a lifelong axis. Researched against real technique, the only standard, defensible way to say a person's node axis is presently "activated" is: the **transiting node** (today's node position, computed with the identical formula) is **in the same sign** as that person's own **natal** North Node or South Node — a real conjunction-by-sign.

Because the node dwells in each sign for only ~1.5 years out of its ~18.6-year cycle, and revisits either of a person's own natal node signs only **twice** per cycle, this will be **false for most people on most days** — that is a real fact about the node's slow motion, not a shortcoming of the implementation. `getCurrentNodePolarity()` returns `activePole: null` in that (common) case, and the reading copy — both the AI prompt and the fallback text — says plainly that no current activation applies, rather than manufacturing a "you are moving toward your X node today" line for everyone. This matches the Codex's standing rule from Part XVIII.3: an always-on answer with no real basis is worse than an honest sometimes-answer.

**Flagging this explicitly for the project owner to weigh in on:** a more conservative (and arguably more standard) framing found repeatedly in the astrological literature treats the North/South Node axis as *purely* a lifelong developmental theme, with no meaningful "current" or day-to-day state at all — the axis just describes a standing direction of growth versus a standing comfort zone, full stop, the same way a person's Life Path number doesn't have a "current value." Under that framing, `getCurrentNodePolarity()`'s rare-conjunction finding is a real astronomical fact worth naming when it happens, but is not the load-bearing part of "Node polarity" — the lifelong axis (Part 20.3) is. This implementation keeps both: the lifelong axis is always shown, and the rare-conjunction "currently active" callout is shown only when it is genuinely true, explicitly labeled as occasional. If the project owner wants to de-emphasize the "current" framing further (e.g. drop it from marketing copy while keeping it as a rare Easter-egg detail in the full reading), that is a copy/positioning decision this document defers to them, not one this implementation makes unilaterally.

### 20.5 — Relational readout: magnetic vs. tension, plain fact only

Following the exact rule V07 §18.2 established for shared Sephirah/path coincidence points — a direct, binary readout of real computed data, never a score or percentage — a partnership reading reports:

- Both partners' natal North Node sign and South Node sign (always available, per 20.3).
- A magnetic/tension readout **only when both partners currently have an applicable "active pole" finding** (per 20.4) on the same day: if their active poles differ (one North-active, one South-active), that is reported as **"magnetic/circulating"** — complementary, one pulled outward while the other is pulled inward. If both partners are active on the **same** pole (both North, or both South), that is reported as **"tension"** — not negative, just a real, named dynamic where neither partner's axis is presently counterbalancing the other's.
- When one or both partners do not currently have an applicable active pole (the common case, per 20.4), the magnetic/tension framing is **not** forced — the reading says so plainly and falls back to reporting only the two lifelong natal axes, exactly as V07 §18.3 requires for any relational finding: no interaction matrix, no invented score, only real computed facts, stated as what they are, including when they don't apply.

### 20.6 — What this explicitly does not include

No node-transit forecast beyond the single "is the transiting node in my own natal node sign right now" check; no progressed-node calculation (a real technique in some traditions, but out of scope for this pass — flagged here rather than silently substituted for the mean-transiting-node check above); no synastry node-to-planet aspect scanning; no numeric scoring of the magnetic/tension finding. If a future revision wants any of that, it must be built the same way every other number in this Codex was built: derived from a real, cited, verifiable source, cross-confirmed independently, and never asserted without showing the arithmetic.

---

## Part XXI — Node Decan Cards (North/South Node → Golden Dawn Decan → Specific Minor Arcana Card)

This part adds one more layer on top of the North/South Node axis established in Part XX: not just the *sign* each Node falls in, but the single specific numbered Minor Arcana card (2 through 10, one of the four suits) that the Node's exact degree lands on, via the Hermetic Order of the Golden Dawn's decan attribution — the same real, documented tradition behind the Rider-Waite-Smith deck's own original captions (e.g. the 5 of Cups' Golden Dawn title is "Lord of Loss in Pleasure," Mars in Scorpio's first decan). This is a **separate system** from the existing Sephirah-based Soul/Court Card system (V06 §14, `soulCardFor`/`courtCardFor`) — decan-based, not Tree-of-Life-based — and is not merged into it; a person's Node Decan Cards and their Soul/Court Cards are two independent readouts that may or may not agree.

### 21.1 — What a "decan" is, and which lineage this uses

Each of the 12 zodiac signs spans 30° and is traditionally divided into three consecutive 10°-wide **decans** (1st: 0–9.999°, 2nd: 10–19.999°, 3rd: 20–29.999° within the sign), giving 36 decans around the full ecliptic. Each decan carries a single planetary ruler. Two documented lineages assign these rulers differently: the **Golden Dawn / Rider-Waite-Smith** lineage (used here, matching this Codex's existing Golden Dawn Tarot/Tree-of-Life attributions per V06 §14) and the **Crowley/Thoth** lineage, which uses a different starting rule. This Codex deliberately uses the Golden Dawn rule only, for consistency with everything else already built on that lineage.

### 21.2 — The planetary-ruler rule (verified)

The 36 decans are assigned planets in one **continuous** Chaldean-order cycle — Saturn → Jupiter → Mars → Sun → Venus → Mercury → Moon, repeating every 7 decans — starting at **Aries' own first decan = Mars** (Mars being Aries' own ruling planet) and running unbroken across all 36 decans without resetting at each sign boundary. Because 36 is not a multiple of 7, the cycle does not realign with each sign the way it does at Aries.

Verified via multiple independent sources (search-result summaries; several of the source sites below are blocked by this environment's egress proxy and could not be fetched directly for full-page review — citations are to the search results describing their content):
- Parsifal the Scribe, "The Tarot and the Chaldean Decanates" (Medium): confirms the cycle "starts at Aries 0 degrees with Mars... then walks the cycle across all 36 decans without breaking."
- Joy Vernon Astrology/Tarot, "Two of Wands: Mars in Aries," and Tarot-ically Speaking's "Decan Walk": both independently confirm 2 of Wands = Mars in Aries' own first decan (i.e., Aries' first decan is ruled by Aries' own ruling planet, Mars).
- The resulting continuous-cycle formula was then cross-checked, decan by decan, against every well-documented Golden Dawn card/planet/sign correspondence available this session — including the task's own cited example (5 of Cups = Mars in Scorpio's first decan), plus 8 of Wands = Mercury in Sagittarius, 2 of Swords = Moon in Libra, and 8 of Pentacles = Sun in Virgo — with **zero exceptions found**.

### 21.3 — The sign → card-rank rule (verified)

Within each suit's elemental triplicity (three signs sharing an element — e.g. Wands/Fire = Aries, Leo, Sagittarius), the three signs' nine decans map to that suit's nine numbered cards (ranks 2–10) by **modality**, not by calendar/zodiac order:

- The **Cardinal** sign of the triplicity takes ranks **2, 3, 4** (1st/2nd/3rd decan → 2/3/4 respectively)
- The **Fixed** sign takes ranks **5, 6, 7**
- The **Mutable** sign takes ranks **8, 9, 10**

Verified via search results summarizing Golden Dawn *Book T — The Tarot* (Mathers/Felkin, 1888) and corroborated by The Pagan Grimoire's zodiac/tarot correspondence article, which states this rule explicitly and lists all four triplicities. This was deliberately checked against a more naive guess (simple zodiac/calendar order within each triplicity) and found to disagree for two of the four suits — Air/Swords is Libra(2-4), Aquarius(5-7), Gemini(8-10), and Earth/Pentacles is Capricorn(2-4), Taurus(5-7), Virgo(8-10) — neither of which is the signs' calendar order. The cardinal/fixed/mutable rule was independently re-derived from named individual card correspondences (2 of Swords = Moon in Libra; 8 of Swords = Jupiter in Gemini; 2 of Pentacles = Jupiter in Capricorn; 8 of Pentacles = Sun in Virgo) before being hardcoded, specifically to rule out the naive guess. No disagreement was found between sources on either this rule or the planetary cycle in 21.2.

Sources checked for this part (in addition to those in 21.2): Mary K. Greer's Tarot Blog ("The Golden Dawn Minor Arcana"), davidcunliffe.com ("Tarot Astrological Correspondences of the Hermetic Order of the Golden Dawn"), and The Pagan Grimoire ("Tarot Cards by Zodiac Sign").

### 21.4 — The full verified 36-entry table

| Sign | Decan 1 | Decan 2 | Decan 3 |
|---|---|---|---|
| Aries (Cardinal Fire) | Mars → **2 of Wands** | Sun → **3 of Wands** | Venus → **4 of Wands** |
| Taurus (Fixed Earth) | Mercury → **5 of Pentacles** | Moon → **6 of Pentacles** | Saturn → **7 of Pentacles** |
| Gemini (Mutable Air) | Jupiter → **8 of Swords** | Mars → **9 of Swords** | Sun → **10 of Swords** |
| Cancer (Cardinal Water) | Venus → **2 of Cups** | Mercury → **3 of Cups** | Moon → **4 of Cups** |
| Leo (Fixed Fire) | Saturn → **5 of Wands** | Jupiter → **6 of Wands** | Mars → **7 of Wands** |
| Virgo (Mutable Earth) | Sun → **8 of Pentacles** | Venus → **9 of Pentacles** | Mercury → **10 of Pentacles** |
| Libra (Cardinal Air) | Moon → **2 of Swords** | Saturn → **3 of Swords** | Jupiter → **4 of Swords** |
| Scorpio (Fixed Water) | Mars → **5 of Cups** | Sun → **6 of Cups** | Venus → **7 of Cups** |
| Sagittarius (Mutable Fire) | Mercury → **8 of Wands** | Moon → **9 of Wands** | Saturn → **10 of Wands** |
| Capricorn (Cardinal Earth) | Jupiter → **2 of Pentacles** | Mars → **3 of Pentacles** | Sun → **4 of Pentacles** |
| Aquarius (Fixed Air) | Venus → **5 of Swords** | Mercury → **6 of Swords** | Moon → **7 of Swords** |
| Pisces (Mutable Water) | Saturn → **8 of Cups** | Jupiter → **9 of Cups** | Mars → **10 of Cups** |

Every card-name/keyword string above is drawn from the existing `MINOR_KEYWORDS` table already in the codebase (V06 §14's Golden Dawn Minor Arcana titles per Sephirah number per suit — Sephirah number = card rank), via the existing `pipCardName()`/`pipKeyword()` helpers — not re-typed as a new table, so no new keyword text was invented for this feature.

### 21.5 — Implementation

`decanCardForLongitude(longitude)` takes a 0–360° ecliptic longitude, finds the sign (`zodiacSignForLongitude()`, Part XX), finds position-within-sign and hence which decan (1st/2nd/3rd), and looks up the resulting card via two small lookup tables (`DECAN_SIGN_SUIT`, `DECAN_SIGN_RANKS`) plus the continuous Chaldean cycle (`DECAN_CHALDEAN_CYCLE`). `getNodeDecanCards(birthDateObj)` calls this once for the natal North Node longitude (`calcMeanLunarNode()`, Part XX) and once for the exact opposite point (+180°) for the South Node, returning `{northNodeCard, southNodeCard}`, each shaped `{card, suit, rank, keyword, decanRuler, decanRulerSign, decanNumber, longitude}`.

### 21.6 — Growth-vs-shadow framing rule

The North Node card names the energy a person is growing **toward**; the South Node card names the shadow/comfort-zone energy they are moving **away from**. Both the AI prompt and the fallback reading text are written to state this as a **growth trajectory, not a moral judgment** — the South Node card is not "bad," it is simply the familiar gravity the North Node card is inviting the person beyond. The Node placement itself is **fixed** (a birth-date fact, unchanging); only the person's day-to-day relationship to it — how much they lean into the North Node card's energy versus fall back on the South Node card's — is a matter of choice. Reading copy is instructed never to imply the Node itself changes based on the person's choices.

### 21.7 — Partnership reading: coincidences only, no scoring (V07 §18.2 applies)

Following the exact same standing rule as every other relational finding in this Codex (Part XVIII.2, reaffirmed in Part XX §20.5): if two partners' Node Decan Cards coincide — either partner's North Node card matching the other's, either South Node card matching, or one partner's North Node card exactly equaling the other's South Node card — that is reported as a **plain, direct, binary fact only** (`getNodeDecanCoincidences()`), never converted into a score, a "compatibility percentage," or a special-destiny claim. Absence of any such coincidence is simply the ordinary case and is not treated as a negative finding either.

### 21.8 — What this explicitly does not include

No numeric scoring of shared or opposing Node Decan Cards; no synastry-style card-to-card aspect matrix; no reinterpretation of the underlying Node sign axis established in Part XX (this is an additional layer on top of it, not a replacement); no Crowley/Thoth decan variant (out of scope by design, per 21.1). If a future revision wants any of that, it must be built the same way every other number in this Codex was built: derived from a real, cited, verifiable source, cross-confirmed independently, and never asserted without showing the arithmetic.

---

*W3BB Worldwide · Codex Logic V07 · Addendum to V06 · All additions reduce to previously verified geometry or already-computed reading data — no new correspondence tables, no new scoring systems.*
