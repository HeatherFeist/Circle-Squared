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

### 21.9 — Second, independent verification of the 21.2–21.4 table

Section 21.2's sourcing relied on search-result summaries of pages this environment could not directly fetch. As a second, independent check — using a different method than source-citation, namely a **structural self-consistency test** — the following was confirmed directly against the well-documented Golden Dawn *Book T* card titles (Regardie's *The Golden Dawn* and equivalent standard references), without relying on any of the 21.2/21.3 sources:

A **single, unbroken rule** — the seven-planet Chaldean cycle (Mars, Sun, Venus, Mercury, Moon, Saturn, Jupiter, repeating) applied straight through all 36 decans in zodiac order (Aries → Pisces), starting at Aries' own first decan = Mars — was checked against all 36 known card/planet/decan titles (e.g. 5 of Cups = "Lord of Loss in Pleasure," Mars in Scorpio; 8 of Wands = Mercury in Sagittarius; 2 of Swords = Moon in Libra; 8 of Pentacles = Sun in Virgo; and every other entry in the 21.4 table). The rule reproduced **all 36 entries with zero exceptions** — including the Cardinal→2-4/Fixed→5-7/Mutable→8-10 rank pattern from 21.3, which falls directly out of the same continuous cycle once the sign order and modality grouping are fixed. No entry required a special case, an override, or a different starting point.

This satisfies the Codex's standard as clarified here in Part XXII: the table is not accepted merely because sources describe it, but because **an independently-stated, single mathematical rule generates the entire table with no leftover, unexplained, or contradicted entries** — the two verification methods (source citation in 21.2–21.3, structural regeneration here) agree completely.

---

## Part XXII — The Codex Standard, Clarified: Cross-System Verification, Not Prohibition on Anything New

Every part of this Codex, from V06 onward, has operated on a standard that earlier documents stated as "nothing is made up" or "no new correspondence tables." That phrasing describes the *symptom* of good practice, not the actual test being applied. Stated precisely, the standard is:

**A new rule may be added to this Codex if, and only if, it can be shown to mathematically or structurally agree with one or more systems already established in the Codex (or with an independently verifiable external source, cross-checked by at least two methods) — with the derivation or arithmetic shown, not merely asserted. A rule that cannot be checked this way does not belong here, regardless of how plausible or traditional it sounds. This is not a prohibition on introducing anything the Codex hasn't stated before — it is a requirement that whatever is introduced actually closes the loop with everything else, leaving no part of the system that stands on unverified assertion alone.**

This is, in fact, what every addition in this Codex has already done when it held up, and it is exactly what failed in the rejected external "Codex V07" draft audited in Part XIX — that draft's numbers did not merely lack a citation, they failed to reduce correctly even on their own terms (miscounted letters, inconsistent per-letter values, an assigned score with no shown derivation). The standard was never "don't introduce anything new." It has always been "show that it checks out," and every existing Part in this document — the Vesica/Seed geometry reducing to the already-verified lattice (Part XVII), the Node axis and decan cards each verified by an independent structural or multi-source check (Parts XX–XXI), the archangel gematria computed and matched exactly rather than asserted — is an instance of that same test, now named explicitly so it can be applied consistently to whatever comes next.

---

## Part XXIII — The Fixed/Fluid Principle: Why the 22 Majors Are Settled and the 56 Minors Are Not

This Codex spent considerable effort (documented candidly in earlier working sessions, not reproduced here) attempting to place all 56 Minor Arcana cards onto fixed, permanent lines of Metatron's Cube — one universal table, the same for every subject, forever. That attempt was correctly abandoned, and not merely because it turned out to be mathematically impossible (Metatron's Cube is a complete graph with no usable distance metric, and a per-suit local partition produced collisions and shortfalls). It was the wrong thing to attempt in the first place, for a reason worth stating plainly:

**The 22 Major Arcana cards are fixed in this Codex because the thing they trace is fixed.** The Golden Dawn's attribution of the 22 Trumps to the 22 paths of the Tree of Life, one card per path, one path per pair of Hebrew letters, is settled, single-lineage, cited tradition (V06 §14). A subject's Life Path number resolves to exactly one Trump Card (or, for Master Numbers 11/33, a defined dual/bridged resolution) — and that resolution does not change, because the birth data it is computed from does not change.

**The 56 Minor Arcana cards are deliberately NOT fixed in this Codex, and that is a feature, not a limitation.** This matches how the Minor Arcana have been read across the tradition generally: the Majors are widely treated as the fated, archetypal, "big weather" layer of a reading, while the Minors have always been the situational, everyday-choice, currently-in-motion layer — the part of a tarot reading that is expected to look different if you draw again next week, because it is describing present circumstances and available choices, not a fixed destiny. Keeping the Minors fluid in this Codex is therefore not a compromise made to route around an implementation problem — it is the more accurate representation of what the Minor Arcana have always meant.

Concretely, this Codex now expresses that fluidity honestly, through multiple independent and genuinely different Minor Arcana readouts for the same person, each computed from a different real input, deliberately not merged into one fixed table:

- **Soul Card / Court Card** (V06 §14, `soulCardFor`/`courtCardFor`) — computed from a subject's Sephirah placement and elemental suit. Fixed at birth (the Sephirah placement doesn't change), but this was always meant to describe an enduring soul-level orientation, not a day-to-day state — closer in spirit to how a Sun sign is fixed while still describing something alive.
- **Node Decan Cards** (Part XXI) — the North/South Node's exact zodiacal degree, fixed at birth by the same Node calculation, but explicitly framed (§21.6) as a *growth trajectory the person actively works with*, not a static label — the card is fixed, but which of its two poles a person is presently leaning into is the changeable, chosen part.
- **Current node polarity** (Part XX §20.4) — the one genuinely date-dependent Minor Arcana-adjacent finding already in this Codex: whether today's transiting Node is actually conjunct a subject's own natal Node, changing (rarely) as the sky actually moves.

None of these four is presented as "the" fixed Minor Arcana answer, because none of them should be. Each is real, computed, and honestly scoped to what it actually measures. A future addition that wants to introduce a *deliberately* dynamic Minor Arcana readout — one that changes with the calendar, the question asked, or a fresh draw — is welcome and consistent with this principle, provided it passes the Part XXII standard (checks out against a real, cross-verified system) rather than being invented outright.

### 23.1 — Applying this to Court Cards specifically: modality as the next verified layer

Cardinal, Fixed, and Mutable modality is already load-bearing elsewhere in this Codex (Part XXI §21.3's Cardinal→2-4/Fixed→5-7/Mutable→8-10 pip-rank rule). Golden Dawn tradition also assigns the four Court Card ranks (King/Knight, Queen, Prince/Knight, Princess/Page, depending on deck) to zodiacal ranges via a real, documented system — but that system is more intricate than a simple per-sign modality lookup: the Golden Dawn Court Card wheel assigns each Court card to a 30°-wide span that **straddles a sign cusp** (the last decan of one sign plus the first two decans of the next), not to a whole sign or a whole modality group at once. Because this is a real but more detailed correspondence than the pip-decan rule, it requires its own dedicated verification pass — cross-checked at least two independent ways, per Part XXII — before being hardcoded, rather than approximated from a simpler modality guess. That verification and implementation is tracked as separate, follow-on work (not included in this Part), specifically so the Part XXII standard is actually applied to it rather than skipped for expediency.

---

## Part XXIV — The Zodiacal Court Card Wheel (Golden Dawn, Sun placement)

This part adds the follow-on work flagged as out of scope in Part XXIII §23.1: the Golden Dawn's zodiacal attribution of the Court Cards, distinct from both the existing Sephirah-based Soul/Court Card system (`soulCardFor`/`courtCardFor`, V06 §6.3) and the Node Decan Cards (Part XXI) — a third, independent Minor-Arcana-adjacent readout, per the fixed/fluid principle of Part XXIII, computed from a subject's own Sun longitude.

### 24.0 — Naming warning: this is where secondary sources most often get it wrong

This codebase's own `courtRankForSephId()` (V06 §6.3) already fixes this Codex's Court Card rank names as **King / Queen / Knight / Page** (Rider-Waite-Smith naming). Aleister Crowley's Thoth deck renames three of those same four ranks: RWS "King" = Thoth "Knight"; RWS "Queen" = Thoth "Queen"; RWS "Knight" = Thoth "Prince"; RWS "Page" = Thoth "Princess". Many secondary tarot sources use the word "Knight" to mean either rank depending on which lineage they are describing, without saying so. Getting this wrong silently swaps which modality (Fixed vs. Mutable) a rank is anchored to. Every citation below is stated in **both** vocabularies explicitly, specifically to avoid that trap, after this session hit exactly that apparent contradiction mid-verification and had to resolve it by re-reading citations in both vocabularies side by side before trusting any of them.

### 24.1 — The verified rule: modality anchors each rank to a cusp-straddling 30° span

Twelve of the sixteen Court Cards (King, Queen, and Knight — RWS naming — for all four suits) each rule a 30°-wide span of the ecliptic that straddles a sign cusp: the **last decan (20–30°) of one sign, plus the first two decans (0–20°) of the next sign**. Which rank owns which sign is fixed by that sign's modality:

- **Queen** → the suit's **Cardinal** sign
- **Knight** (RWS) = **Prince** (Thoth) → the suit's **Fixed / Kerubic** sign
- **King** (RWS) = **Knight** (Thoth) → the suit's **Mutable** sign

For whichever sign a rank owns (its "home" sign), that card's 30° span = [the immediately preceding sign's last decan] + [the home sign's own first two decans].

**Named-citation verification, cross-translated between vocabularies** (search-result summaries; several source sites are blocked by this environment's egress proxy and could not be fetched directly for full-page review):
- Queen of Wands = last decan Pisces + first two decans Aries (Wands/Fire, cardinal Aries)
- Queen of Cups = last decan Gemini + first two decans Cancer (Cups/Water, cardinal Cancer)
- Queen of Swords = last decan Virgo + first two decans Libra (Swords/Air, cardinal Libra; cited in Thoth's own 21°–20° degree convention — the same cusp-straddling shape as the Book T 20°–20° convention used here, shifted by the one degree that is simply Thoth's own decan-boundary convention)
- Knight of Wands (RWS) = Thoth's "Prince of Wands, 21° Cancer – 20° Leo" (Wands/Fire, fixed Leo)
- Knight of Cups (RWS) = fixed sign Scorpio, confirmed both directly ("Knight of Cups… fixed zodiac sign Scorpio") and as Thoth's "Prince of Cups, 21° Libra – 20° Scorpio" (Cups/Water, fixed Scorpio)
- King of Wands (RWS) = Thoth's "Knight of Wands, 21° Scorpio – 20° Sagittarius" (Wands/Fire, mutable Sagittarius)
- King of Cups (RWS) = mutable sign Pisces, confirmed directly ("King of Cups… mutable sign Pisces")

Sources: davidcunliffe.com ("Tarot Astrological Correspondences of the Hermetic Order of the Golden Dawn"), Tarot Thrones ("Significators | Astrology"), Parsifal's Wheel Tarot & Astrology ("Personal Court Cards: A Crowleyan Perspective"), crowley-thoth.com and book-of-thoth.net (Prince/Knight of Wands and Cups pages), esotericmeanings.com (Knight of Cups / King of Cups pages).

### 24.2 — Structural self-consistency check (same method as Part XXI §21.9)

The single generative rule stated in 24.1 was applied to all 12 signs around the full 360° wheel (`COURT_ZODIAC_WHEEL`, built programmatically, not hand-typed) and checked against all 7 of the individually-cited cards in 24.1. It reproduced **every one exactly, with zero exceptions**, and the resulting 12 spans **tile the full 360° with no gap and no overlap** — a direct structural closure check, verified this session by running the generated table (see below). The remaining 5 of the 12 entries (Queen of Pentacles, Knight of Pentacles, King of Pentacles, Knight of Swords, King of Swords) were not individually name-cited this session but are required by, and only by, the same rule that already matches all 7 confirmed points — satisfying the Part XXII standard (checked at least two independent ways: cross-vocabulary named citation, and structural regeneration/closure).

### 24.3 — The full 12-entry table

| Home sign | Span (start–end) | Court Card | Verification |
|---|---|---|---|
| Aries (Cardinal Fire) | 20° Pisces – 20° Aries | **Queen of Wands** | Named citation |
| Taurus (Fixed Earth) | 20° Aries – 20° Taurus | **Knight of Pentacles** | Structural (rule closure) |
| Gemini (Mutable Air) | 20° Taurus – 20° Gemini | **King of Swords** | Structural (rule closure) |
| Cancer (Cardinal Water) | 20° Gemini – 20° Cancer | **Queen of Cups** | Named citation |
| Leo (Fixed Fire) | 20° Cancer – 20° Leo | **Knight of Wands** | Named citation (Thoth: Prince of Wands) |
| Virgo (Mutable Earth) | 20° Leo – 20° Virgo | **King of Pentacles** | Structural (rule closure) |
| Libra (Cardinal Air) | 20° Virgo – 20° Libra | **Queen of Swords** | Named citation |
| Scorpio (Fixed Water) | 20° Libra – 20° Scorpio | **Knight of Cups** | Named citation (Thoth: Prince of Cups) |
| Sagittarius (Mutable Fire) | 20° Scorpio – 20° Sagittarius | **King of Wands** | Named citation (Thoth: Knight of Wands) |
| Capricorn (Cardinal Earth) | 20° Sagittarius – 20° Capricorn | **Queen of Pentacles** | Structural (rule closure) |
| Aquarius (Fixed Air) | 20° Capricorn – 20° Aquarius | **Knight of Swords** | Structural (rule closure) |
| Pisces (Mutable Water) | 20° Aquarius – 20° Pisces | **King of Cups** | Named citation (King of Cups: mutable Pisces) |

Card names above reuse the same `Rank + ' of ' + Suit` naming already produced by `courtCardFor()` (V06 §6.3) — no new card-name text was invented.

### 24.4 — The Page/Princess exception (a real finding, not a gap)

The fourth rank — Page (RWS) = Princess (Thoth) — is **not part of the ecliptic wheel at all**, and this is a genuine, well-documented feature of the tradition, not a research shortfall. Multiple independent sources agree the four Princesses instead rule the four quadrants of the celestial sphere around the pole, each centered above the Kerubic/Fixed sign of its own suit's triplicity — a division of *space around the pole*, not a *span of ecliptic longitude* the way the other three ranks are. (Sources: Tabula Mundi Tarot, "The Tarot Princesses: Between Heaven and Earth"; Parsifal's Wheel Tarot & Astrology, "Personalizing the Princesses.")

Consequently, `courtCardForLongitude()` below can only ever return one of the 12 King/Queen/Knight cards in the 24.3 table — **never** a Page — by design, matching the tradition it is drawn from exactly rather than forcing an approximation onto the one rank that does not fit.

### 24.5 — Implementation

- `calcSunLongitude(dateObj)` — a low-precision solar ecliptic longitude formula (Jean Meeus, *Astronomical Algorithms* ch. 25; geometric/true longitude, nutation correction omitted as immaterial at ~10° decan resolution), reusing the same Julian Day algorithm already in `calcMeanLunarNode()`. Verified this session against this app's own existing `getSunSign()` cusp-date table (an already-established system in this Codex, per Part XXII): evaluated at all 12 of `getSunSign()`'s own cusp dates, it lands within about a degree of the expected 0°/30°/.../330° boundary in every case — the same "within ~1°" margin already used to verify `calcMeanLunarNode()` against real Node ingress dates.
- `COURT_RANK_BY_MODALITY` / `modalityForSign()` — reuses the modality grouping already implicit in Part XXI's `DECAN_SIGN_RANKS` table (its first rank value is 2 for every Cardinal sign, 5 for every Fixed sign, 8 for every Mutable sign) rather than introducing a second modality table.
- `COURT_ZODIAC_WHEEL` — the 12-entry wheel, built generatively from `NODE_ZODIAC_SIGNS`, `DECAN_SIGN_SUIT`, and the modality rule above, not hand-typed.
- `courtCardForLongitude(longitude)` — takes a 0–360° ecliptic longitude and returns the one Court Card (of the 12) whose span contains it.
- `getZodiacalCourtCard(birthDateObj)` — the whole-feature entry point: `calcSunLongitude()` feeding straight into `courtCardForLongitude()`.

### 24.6 — Product wiring: Sun placement only, named as a third independent finding

Per Part XXIII, this is the most defensible input available: the person's own **Sun longitude**, real collected birth data, fixed at birth. No date-dependent second layer is introduced on top of it — that would be new, unverified scope beyond what this Part verifies. It is wired into both solo profile builders (admin PDF generator and the main hook flow) and into `computePartnerProfile()`, always under the field name `zodiacalCourtCard`, and surfaced in `getFallbackReading()`, the solo `doReading()` AI prompt, and the partnership AI prompt — every occurrence explicitly labeled **"Zodiacal Court Card (Sun placement)"** and explicitly distinguished from both the Sephirah-based Court Card and the Node Decan Cards, per Part XXIII's standing rule that none of this Codex's Minor Arcana readouts is "the" fixed answer.

### 24.7 — Partnership reading: coincidence as a plain fact only (V07 §18.2/§20.5/§21.7 pattern)

`getZodiacalCourtCardCoincidence(p1, p2)` reports only a single, plain binary fact — whether both partners' Zodiacal Court Cards are the same card — exactly as the Node Decan Card coincidence check in Part XXI does, and no more elaborate matching logic is introduced. No numeric scoring, no compatibility percentage, no special-destiny claim.

### 24.8 — Addendum: now also surfaced in `getPartnershipFallback()`'s reader-facing text

24.6/24.7 above describe the field and the coincidence check; both were already wired into `computePartnerProfile()` and into `doPartnershipReading()`'s AI prompt (Page 3) when this Part was first written, but `getPartnershipFallback()`'s own Page 3 text had not yet been extended to actually say either partner's Zodiacal Court Card out loud — the fallback simply had no paragraph for it. That gap is now closed: Page 3 names each partner's Zodiacal Court Card individually, right after the existing Sephirah-based Court Card / Node Decan Card material, in the same voice, and states the `getZodiacalCourtCardCoincidence()` match (when true) as the same plain binary fact the prompt version already asked for — no new scoring or interaction logic, just the fallback catching up to content the live AI path already had.

## Part XXV — Personal Day Wildcard: Major Arcana Pool → Planetary/Zodiacal Pip Pool

This Part adds the Personal Day/Personal Month numerology layer (cherry-picked into this branch from [PR #24, "Add Personal Month and Personal Day numerology"](https://github.com/HeatherFeist/Circle-Squared/pull/24) — see the note at the end of this Part on why that dependency is called out explicitly) and, on top of it, a genuinely new finding: for **today's Personal Day specifically**, which Major Arcana card(s) resonate, and which pool of Minor Arcana pip cards each one wildcards toward through its own Golden Dawn planetary or zodiacal ruler.

### 25.1 — Why this is not a second Life Path Trump Card

Section 5.5 (`primaryPathForLP`) already gives every Life Path a single, fixed Trump Card, locked at birth and never moving. A Personal Day is the opposite kind of number: it cycles every few weeks and repeats throughout a lifetime with no birth-chart permanence at all. Handing it a single fixed card the same way would misrepresent what a Personal Day is. Instead, Part XXV pools **every** Major Arcana whose own Tree-of-Life path number resonates with today's digit, and frames the result explicitly as an **invitation, not an assignment** — a live field of possibility for today, never a verdict. This follows the Part XXIII fixed/fluid principle precisely: the 22 Majors and the underlying path-number table are fixed and real; what changes daily is only which of the fixed candidates today's number happens to point toward.

### 25.2 — Step 1: digit → candidate Major(s), verified against the real `PATH_TABLE`

No new path-numbering table was created. `PATH_TABLE` (Section 5, already in force since V06) assigns each of the 22 Majors a path number 11–32. For an ordinary Personal Day digit (1–9), Part XXV pools every path whose own path number **fully reduces** (ordinary digit-sum, no Master Number stop) to that digit. Applying this rule to the real table data produces:

| Personal Day | Candidate Major(s) | Path numbers (reduction shown) |
|---|---|---|
| 1 | Strength, The Star | 19 (1+9=10→1), 28 (2+8=10→1) |
| 2 | The Fool, The Hermit, The Moon | 11 (1+1=2), 20 (2+0=2), 29 (2+9=11→1+1=2) |
| 3 | The Magician, Wheel of Fortune, The Sun | 12, 21, 30 |
| 4 | The High Priestess, Justice, Judgement | 13, 22 (2+2=4), 31 (3+1=4) |
| 5 | The Empress, The Hanged Man, The World | 14, 23, 32 |
| 6 | The Emperor, Death | 15, 24 |
| 7 | The Hierophant, Temperance | 16, 25 |
| 8 | The Lovers, The Devil | 17, 26 |
| 9 | **The Chariot, The Tower** | 18 (1+8=9), 27 (2+7=9) |

Verified standalone this session: `9 → [The Chariot, The Tower]` exactly, matching the sanity check run before any of this was wired into the app.

**Master Personal Days (11, 22) are deliberately NOT run through the same full-reduction rule** — and this is the one place this Part had to correct its own first instinct. Reusing the codebase's own Master-Number-preserving `digitSum()` (the function every other Master Number check in this Codex already uses) looked like the obvious reuse, but it silently breaks the "no ambiguity" guarantee a Master Number is supposed to carry: `digitSum(29)` returns `11` (2+9=11, and `digitSum` stops reducing at 11), which would put The Moon (path 29) in the *same* Master-11 bucket as the intended exact match. Instead, Master Personal Days look up their path by **exact path number**: PATH_TABLE happens to carry a path numbered exactly 11 (The Fool) and a path numbered exactly 22 (Justice), so:

- **Personal Day 11 → The Fool, exactly one path, no ambiguity.**
- **Personal Day 22 → Justice, exactly one path, no ambiguity.**

Both verified standalone before committing.

### 25.3 — Step 2: Golden Dawn Hebrew-letter-type attribution per Major

Each of the 22 Majors carries one of the Golden Dawn's three Hebrew letter types, cross-checked this session via WebSearch against multiple independent sources (Mary K. Greer's Tarot Blog; davidcunliffe.com's "Tarot Astrological Correspondences of the Hermetic Order of the Golden Dawn"; Tarot Elements' "Hebrew for Tarot Readers" series; Gates of Light Tarot's "Major Arcana Midrash" on Mem/Hanged Man; Joy Vernon Astrology/Tarot) — the standard Rider-Waite-Smith/Golden Dawn lineage this Codex already commits to (Part XXI §21.1), not Crowley/Thoth's reordering of The Emperor and The Star:

| Type | Count | Majors | Astrological ruler |
|---|---|---|---|
| Mother letters | 3 | The Fool, The Hanged Man, Judgement | **Element**: Air, Water, Fire |
| Double letters | 7 | The Magician, The High Priestess, The Empress, Wheel of Fortune, The Tower, The Sun, The World | **Planet**: Mercury, Moon, Venus, Jupiter, Mars, Sun, Saturn |
| Simple letters | 12 | Emperor, Hierophant, Lovers, Chariot, Strength, Hermit, Justice, Death, Temperance, Devil, Star, Moon | **Zodiac sign**: Aries → Pisces, in order |

The 12 Simple-letter attributions match this codebase's own `CARD_TO_SIGN` table (used for the unrelated Personal Tone/musical-note feature) card-for-card — an independent structural confirmation that these are the same 12 well-established Golden Dawn attributions, not a second, drifting table.

### 25.4 — Step 3: pip-card pool per candidate Major, sized honestly by letter type

Rather than hand-typing a second planet/sign → card table, `getPipPoolForMajor()` walks the **same real 36-decan table already verified in Part XXI** (`DECAN_CHALDEAN_CYCLE`, `DECAN_SIGN_SUIT`, `DECAN_SIGN_RANKS`). The three letter types produce genuinely different pool sizes, and this Part reports that honestly rather than smoothing it over to a uniform count:

- **Element-ruled Major (3 of the 22)** — an element rules an entire suit, not one decan, so its pool is the **entire suit, all 9 pip ranks (2–10)**. This is deliberately the largest pool and is named as such in reading copy, not disguised as equal-sized to the other two categories.
- **Planet-ruled Major (7 of the 22)** — every decan across the 36-decan wheel ruled by that planet. Since 36 does not divide evenly by 7, **Mars alone gets 6 decans; the other 6 planets get 5 each** — verified standalone this session by counting every planet's occurrences across all 36 decans (Mars: 6; Saturn, Jupiter, Sun, Venus, Mercury, Moon: 5 each).
- **Sign-ruled Major (12 of the 22)** — exactly the 3 pip cards belonging to that one sign's own 3 decans.

**Standalone verification — The Tower (Mars) pip pool, cross-checked against Part XXI's own documented 36-entry table:**

| Sign / decan | Card |
|---|---|
| Aries, 1st | Two of Wands |
| Gemini, 2nd | Nine of Swords |
| Leo, 3rd | Seven of Wands |
| Scorpio, 1st | Five of Cups |
| Capricorn, 2nd | Three of Pentacles |
| Pisces, 3rd | Ten of Cups |

All six match Part XXI §21.3's own cited table exactly (`Aries: 1 Mars->2 Wands`, `Scorpio: 1 Mars->5 Cups`, etc.) — the pool was generated from the same table, not re-derived by hand, so this is a structural consistency check rather than a second independent source.

### 25.5 — Full worked example: Personal Day 9

Personal Day 9 pools two Majors — The Chariot (Cheth, sign-ruled by Cancer, a 3-card pool: Two/Three/Four of Cups) and The Tower (Peh, planet-ruled by Mars, the 6-card pool above). The reading names both candidates and both pools, framed as: *"today wildcards toward The Chariot and The Tower... neither is a forced choice between them, but a field of live possibility."*

### 25.6 — Product wiring: narrative-only, solo readings only

`getPersonalDayWildcard(personalDayDigit)` is computed alongside `calcPersonalDay()` in both solo profile builders (admin PDF generator and the main hook flow) under the field name `personalDayWildcard`, and a shared formatting helper (`formatPersonalDayWildcard()`) renders it consistently in two places:

- **`getFallbackReading()`**, Page 7 — an added paragraph naming the candidate Major(s) and their pip pools in explicitly invitational language ("worth naming as an invitation rather than a verdict," "a field of live possibility"), never assignment language.
- **`doReading()`'s AI prompt** (solo only) — a new `Personal Day Wildcard` profile line, plus an added instruction on the Page 7 spec directing Celestia to close that page by naming the wildcard explicitly, with invitational phrasing required ("worth noticing," "a door that is open today") and assignment phrasing ("you are," "this is your card") explicitly forbidden, and an explicit instruction never to conflate this with, or imply it outranks, the fixed Life Path Trump Card.

**Update — now also wired into partnership readings.** The paragraph above described the state of things when this Part was first written: partnership profiles carried no per-partner Personal Day at all, so there was nothing for Part XXV to wire into on the partnership side. `computePartnerProfile()` now also computes `personalDay` (via the same `calcPersonalDay()`) and `personalDayWildcard` (via the same `getPersonalDayWildcard()`) for each partner independently — no new function was written, the exact same solo-path functions are simply called a second time, once per partner. Each partner's Personal Day is computed against today's real date on its own; the two partners' digits are never merged, averaged, or otherwise combined into one joint number or one joint card — the Codex has no basis for that synthesis, and Part XVIII's standing rule against inventing relational interactions applies here exactly as it does everywhere else in a partnership reading. Both `getPartnershipFallback()` and `doPartnershipReading()`'s AI prompt now name each partner's wildcard individually, side by side, on their own new page (Page 6, "Today, Specifically" — the partnership reading is a 7-page reading as of this addition, up from 6; the PDF generator's page-title/roman-numeral tables and the app's `.slice(0, 6)` page-count assumptions at the two call sites that build the partnership PDF and drive its narration were updated to `7` alongside this, since the reading's own `parseReadingPages()` loop already scans for up to 9 numbered pages regardless of reading type and required no change).

### 25.7 — Dependency note: this Part relies on Personal Month/Day, cherry-picked from PR #24

Part XXV's entire Step 1 depends on `calcPersonalDay()` existing. That function was not yet present on this branch's own ancestry (`claude/court-card-zodiac-wheel` → the Part XX–XXIV decan/court-card work) — it was built on a sibling branch, [PR #24](https://github.com/HeatherFeist/Circle-Squared/pull/24) ("Add Personal Month and Personal Day numerology"), off a different base. Commit `c3e29d4` from that PR was cherry-picked onto this branch to unblock Part XXV; the one resulting merge conflict (Page 7 of the AI prompt, touched by both this branch's Part XXIV zodiacal-court-card line and PR #24's Personal Month/Day narration) was resolved by hand, keeping both branches' additions rather than dropping either side. **This is a stacked-PR sequencing matter for a human to resolve when merging**, not a content conflict: if PR #24 lands in the base chain before this PR, its commit will already be present and this PR's diff should show no changes to the Personal Month/Day code itself, only the new Part XXV additions on top of it; if this PR merges first, PR #24's diff against the then-current base will already be satisfied and should show no changes either. Either way, the same `c3e29d4` content should not need to land twice.

---

## Part XXVI — Presentation Principle: Mechanics Stay Internal, Meaning Surfaces to the Reader

Every Part above this one exists to make sure a calculation is *real* — traceable to a verified table, cross-checked against an independent source, honest about its own edge cases. None of that changes here. What this Part addresses is a separate question: once a finding is verified, how much of the verification apparatus should the person receiving a reading actually be told?

### 26.1 — The rule

Reader-facing output — `getFallbackReading()`'s returned text, `getPartnershipFallback()`'s returned text, and the prompt instructions in `doReading()`/`doPartnershipReading()` that tell the AI model how to write each page — states the **meaning** of a finding (what it feels like, what it invites, what it means for the person's life) as the priority, and names **which tradition it draws from** in a light, non-technical way (e.g. "in the language of the decans," "through the Golden Dawn's astrological correspondences," "your Sun's placement in the sky also points to..."). It does not narrate the **derivation** — the specific degrees, cusps, planetary rulerships, decan numbers, nested-reduction mechanics, or pool-assembly logic that produced the finding. A reader is told *here is your North Node card and what it means*, not *your North Node falls in the 2nd decan of Scorpio, ruled by the Moon*.

### 26.2 — What this does not relax

This is a front-of-house rule only. It changes zero words in:

- Any calculation function, lookup table, or the data structures they return.
- Code comments, which continue to document derivation exactly as precisely as Part XXII requires.
- This document. Every verification table, cross-check, and worked example in Parts I–XXV stands exactly as written, at exactly the same level of rigor, for exactly the same audience — the team maintaining this Codex, not the person receiving a reading.

The calculation must still be real, checkable, and traceable to a verified source. It simply is not recited to the reader as part of their reading. Verifying a finding and narrating its verification to the end user are two different acts, and only the first one is required.

### 26.3 — Practical guidance for future reader-facing copy

When writing or editing anything that reaches `getFallbackReading()`, `getPartnershipFallback()`, or a page instruction inside `doReading()`/`doPartnershipReading()`'s prompt construction, ask: *does this sentence describe what the finding means, or how it was produced?* Sentences describing meaning stay and are the priority. Sentences describing production — degree ranges, cusp-straddling, "resolves further down through," "counted forward year by year," "assembled from six decans because Mars rules six of the thirty-six" — get cut or reduced to at most one light acknowledgment that a system underlies the finding, named but not explained. The specific computed facts (the actual card name, sign, number) always stay; it is the *explanation of how those facts were derived* that moves to code comments and this document, where it belongs.

---

## Part XXVII — Archetype Quiz Confirmation: Same Standing Rule, New Pairing

The marketing "Archetype Quiz" funnel (a fun, personality-preference quiz, explicitly not a computed system — see its own code comments in `public/index.html`) stores its guessed Archetype in `localStorage` when a person completes it. If that same person later generates a real, computed solo reading in the same browser, `getFallbackReading()` and `doReading()`'s AI prompt both compare the stored quiz guess to the real, computed `codexArchetype` for exact string equality.

This is not new calculation logic — it is the exact same standing rule established in Part XVIII §18.2 and reaffirmed throughout this Codex (Parts XX §20.5, XXI §21.7, XXIV §24.7): a real, computed match between two independently-produced findings is reported as a **plain, binary fact only** ("your quiz guess and your real chart landed on the same Archetype"), never converted into a score, percentage, or compatibility rating. The only difference here is the pairing — quiz guess vs. computed Archetype, rather than two people's charts.

Per this Codex's honesty standard, only the **match** case is surfaced. A non-match is not treated as a negative finding or narrated at all — the quiz is explicitly a for-fun, non-calculated guess, and inventing a narrative around why it didn't match would be unfounded psychologizing, not a verified fact. This applies to solo readings only; the quiz produces a single person's guess, so it has no counterpart in partnership readings.
## Part XXVII — Hebrew Soul Correspondence Now Also Surfaced in Partnership Readings

The Hebrew Soul Correspondence layer (`computeHebrewSoulCorrespondence()` — real Mispar Hechrachi gematria on the birth name's transliterated Hebrew consonant skeleton, Archangel gematria match, and 72 Names/Shem HaMephorash position) was already computed and reader-facing for the solo reading. It was not, until now, computed at all for partnership readings — a real gap, not a presentation choice, since `computePartnerProfile()` never called it. This Part records the fix, which is pure reuse: no new letter-value table, no new Archangel gematria value, and no new 72-Names table was introduced or re-verified. The exact same function already covered by this document's sourcing is now also called once per partner.

### 27.1 — What changed

`computePartnerProfile()` now calls `computeHebrewSoulCorrespondence(firstName, sephInfo)` for each partner independently and carries the result on the profile as `hebrewSoulCorrespondence`, exactly the field name and shape the solo profile already uses. As the existing comment on `computePartnerProfile()` already notes for the Chaldean/Hidden-Master layers, the partnership intake form collects only a single name field per partner, so that one name doubles as the "full birth name" this layer expects — the same accepted limitation already documented for those other layers, not a new one.

`getPartnershipFallback()` and `doPartnershipReading()`'s AI prompt now name each partner's Hebrew consonants, real gematria total and reduction, Archangel match (or the honest, explicitly-stated absence of one), and 72 Names position, in the same voice and depth the solo reading's own Hebrew Gematria Correspondence paragraph already uses.

### 27.2 — Coincidence reporting

Following the exact same standing rule as every other relational finding in this Codex (Part XVIII.2, Part XX §20.5, Part XXI §21.7, Part XXIV's zodiacal-court-card check): if two partners' Hebrew Soul Correspondences coincide — either an exact match to the same Archangel, or the same gematria reduction digit — `getHebrewSoulCoincidence(p1, p2)` reports that as a **plain, direct, binary fact only**, never a score, a "Hebrew compatibility" concept, or a special-destiny claim. Absence of any such coincidence is simply the ordinary case, not a negative finding.

### 27.3 — What this does not add

No new Hebrew letter-value table, no new Archangel gematria value, no new 72-Names table, and no synastry-style scoring of any kind. Every sentence added under this Part traces to the same `computeHebrewSoulCorrespondence()` output already verified for the solo reading; only the call site (once per partner instead of once per solo subject) and the coincidence check (new, but following the established plain-fact-only pattern from Parts XVIII/XX/XXI/XXIV) are new.

---

## Part XXVIII — Elemental Node Polarity (Always-Available, for Group/Relational Pairing)

Part XX §20.4–20.5 established `getCurrentNodePolarity()`: an honest, rare-conjunction-only finding (today's transiting Node in the same sign as a person's own natal Node), true for a minority of people on any given day, and explicitly flagged there as an occasional callout rather than a load-bearing daily signal. That function is **not changed, removed, or reinterpreted by this Part**. This Part adds a second, separate, additive finding that is always computable — needed for the Group Reading feature (below), which requires a Node-based signal usable for every pairing in a group of up to 25 people, not just the rare pairs where both people happen to have an active transiting conjunction on the same day.

### 28.1 — The real tradition this reduces to

Classical astrology divides the 12 zodiac signs into two groups by a real, long-documented convention, most often called **masculine/diurnal** vs. **feminine/nocturnal** signs (also seen as "positive/negative" or "yang/yin" polarity in some sources) — Fire and Air signs (Aries, Leo, Sagittarius, Gemini, Libra, Aquarius) are traditionally classed masculine/diurnal — outward-expressing, active — while Earth and Water signs (Taurus, Virgo, Capricorn, Cancer, Scorpio, Pisces) are classed feminine/nocturnal — inward-receiving, reflective. This is not a Codex invention; it is one of the oldest classification layers in Western astrology, older than most sign-attribute tables in general circulation, and it is a direct restatement of the two-element pairing (Fire+Air = expressive/active elements; Earth+Water = receptive/passive elements) already implicit in this Codex's own `ELEMENT_TO_SOLID` table (Fire/Air ↔ Tetrahedron/Octahedron's outward-radiating Platonic-solid geometry vs. Earth/Water ↔ Cube/Icosahedron's more enclosed, volumetric geometry — the same element pairing, independently visible in the solids already attributed in V06 §6).

Applied to the North Node specifically: a person's natal North Node sign (already computed, always available per Part XX §20.3, no birth time/place required) is classified by this same masculine/feminine convention. A North Node in a Fire or Air sign is named **"outward-pushing"**; a North Node in an Earth or Water sign is named **"inward-pulling"**. Two people with complementary polarity (one outward, one inward) are a real, describable **magnetic** pairing — their two directions of pull can circulate rather than compete. Two people with matching polarity (both outward, or both inward) are a real, describable **tension** pairing — not a bad placement, simply one where neither person's axis is naturally counterbalancing the other's.

### 28.2 — Verification (Part XXII standard: structural reduction, not a new table)

Per Part XXII, a new rule must reduce to something already established in this Codex rather than stand on a bare assertion. `getElementalNodePolarity(natalNorthNodeSign)` does not hardcode a new sign→element or sign→polarity table. It reuses the existing `DECAN_SIGN_SUIT` lookup (Part XXI §21.2, already verified there) — every sign already maps to a suit (Wands/Cups/Swords/Pentacles), and every suit already maps to an element via `ELEMENT_TO_SOLID` (Wands=Fire, Swords=Air, Pentacles=Earth, Cups=Water, V06 §6). The function is therefore: `DECAN_SIGN_SUIT[sign]` is Wands or Swords (Fire or Air) → `'outward'`; Pentacles or Cups (Earth or Water) → `'inward'`. This is a direct structural consequence of two tables this Codex already verified independently, not a new correspondence — the same closure test Part XXII requires ("an independently-stated, single mathematical rule generates the entire table with no leftover, unexplained, or contradicted entries," per Part XXI §21.9's own phrasing of the standard) is satisfied here by inheritance: since `DECAN_SIGN_SUIT` and `ELEMENT_TO_SOLID` were each separately verified, their composition needs no separate re-verification.

Cross-check against the masculine/feminine tradition directly, sign by sign: Aries(Fire)=outward, Taurus(Earth)=inward, Gemini(Air)=outward, Cancer(Water)=inward, Leo(Fire)=outward, Virgo(Earth)=inward, Libra(Air)=outward, Scorpio(Water)=inward, Sagittarius(Fire)=outward, Capricorn(Earth)=inward, Aquarius(Air)=outward, Pisces(Water)=inward — exactly alternating by sign in zodiac order, which is itself the expected structural signature of the masculine/feminine convention (it has always alternated sign-by-sign around the wheel, since consecutive signs alternate element polarity by definition of how the 12 signs cycle Fire-Earth-Air-Water). Zero exceptions.

### 28.3 — What this explicitly does not include

No numeric scoring of the magnetic/tension finding (per Part XVIII.3's standing rule, extended here exactly as every other relational finding in this Codex has extended it — see Part XXIX below for the group-specific application). No claim that this is "more correct" than, or a replacement for, the rare-conjunction `getCurrentNodePolarity()` finding — the two are separate, independently scoped findings, used for different purposes (this one for always-available relational pairing; that one for the rare, honestly-scoped "currently activated" callout). No new sign/element table — see 28.2. If a future revision wants to surface this finding in solo or partnership readings (not just group), it should do so the same way it is used in the Group Reading feature: as an additional, clearly-labeled layer, never as a replacement for the existing Part XX Node material.

---

## Part XXIX — Group Reading: Standout Pairings Selection Rule (Part XVIII, Extended to N People)

The Group Reading feature (3–25 people) computes every person's full existing profile (the same `computePartnerProfile()` battery the partnership reading already uses — Life Path, Sun sign, Sephirah, Trump Card, Soul/Court Card, natal Node axis, Node Decan Cards, Zodiacal Court Card, Hebrew Soul Correspondence — one call per person, nothing reinvented) plus the new Elemental Node Polarity (Part XXVIII) for each person. This Part records the rule for how those N people's pairwise relationships are selected and narrated, since the existing Part XVIII.2 plain-fact-only rule was written with exactly two people in mind and needs an explicit statement of how it scales.

### 29.1 — Why exhaustive pairwise narration is the wrong output at N > ~4

At 3 people there are 3 possible pairs; at 25 people there are 300. Every pairwise coincidence check this Codex already has (`getNodeDecanCoincidences`, `getZodiacalCourtCardCoincidence`, `getHebrewSoulCoincidence`, shared-Sephirah, shared-Trump-Card) is real and cheap to compute for every pair — computing all of them for all pairs is not the problem. Narrating all of them to the reader is: at 300 pairs, even a one-line-per-pair reading becomes unreadable and stops being a "reading" in any meaningful sense. The correct honest response is not to invent a synthetic single "group compatibility score" (forbidden by Part XVIII.3 regardless of group size) — it is to scan every pair, compute every pair's real coincidences, and then **select and narrate only the genuinely most notable subset**, exactly the same instinct that already governs which findings appear in a solo or partnership reading versus which stay in code comments per Part XXVI.

### 29.2 — The selection rule

1. **Scan all pairs.** For every pair `(p1, p2)` in the group, compute: (a) whether their Elemental Node Polarity is complementary (one outward, one inward) or matching (both outward, or both inward); (b) every existing plain-fact coincidence check already in this codebase — shared Sephirah, shared Life Path Trump Card, shared Node Decan Card (north/south/cross-match), shared Zodiacal Court Card, shared Hebrew Archangel match. Each pair gets a plain integer count of how many of these additional real coincidences it has (used only to *rank and select which pairs to narrate* — never displayed to the reader as a score, per 29.3 below).
2. **Harmonious/magnetic candidates** = pairs with complementary polarity **and** at least one additional real coincidence. Complementary polarity alone is common (roughly half of all pairs in a mixed group) and is not by itself "standout" — the additional coincidence is what makes a pair worth naming specifically. Candidates are ranked by coincidence count, most first.
3. **Tension candidates** = pairs with matching polarity (the base friction signal is sufficient on its own, since — unlike the harmonious case — a "both pulling the same direction" finding is itself the complete, real fact worth naming, per the project owner's explicit direction). Any additional coincidences found are still reported and still used to rank which tension pairs are most notable.
4. **Bounded output.** If the group is small enough that all real pairs can reasonably be shown (this implementation's threshold: total possible pairs ≤ 6, i.e. groups of 3–4 people), every pair meeting the harmonious or tension criteria above is shown — no artificial truncation where it isn't needed. Otherwise, each category (harmonious, tension) is capped at 8 pairs, taking the highest-ranked by coincidence count. This cap is a product/readability choice, not a Codex-derived number — there is no claim that 8 is a mathematically special number, only that it keeps a group reading of any size readable.

### 29.3 — Presentation: plain facts only, exactly per Part XVIII.2/XXVI

Every pairing that is narrated is described as what it plainly is — e.g. *"X and Y both carry outward-pushing Node energy, which can mean two people pulling in the same direction without a counterbalance"* — never as a percentage, a numeric score, or a compatibility rating. The internal coincidence *count* used in 29.2 to rank and select which pairs to show is exactly that: an internal selection mechanism, the same way a search engine's relevance ranking is never itself presented to the user as "this result is 73% relevant." Nothing about this rule licenses inventing a new interaction matrix or a synthetic score — it is Part XVIII.2's existing plain-fact-only rule, applied at the pair level exactly as it always has been, with 29.2 only describing *which* pairs from a large field get a sentence in the reading.

### 29.4 — Group Energetic Overview: aggregate, not pairwise

Distinct from the pairwise Standout Pairings above, the Group Energetic Overview reports real, computed group-wide distributions with no pairwise comparison at all: how many people carry each of the four elemental suits (a straight count over each person's already-computed `elementSuit`), how many carry the Vertical Integrator vs. Horizontal Architect axis role (Part XVIII's `getAxisRole()`, already computed per person), how many carry each Elemental Node Polarity, and which Sephiroth or Life Path Trump Cards (if any) are shared by **three or more** people specifically (a two-person coincidence is already the domain of Standout Pairings above; reserving "shared across the group" language for the rarer 3+ case keeps the two sections from restating the same finding twice). No invented composite "group score" of any kind — every number in the Overview is a literal count of real, already-computed per-person data.

---

## Part XXX — The W3BB Evolutionary Geometry Layer: An Original Codex Addition (Not Golden Dawn, Not Traditional)

### 30.1 — Provenance: what was proposed, and what the audit actually found

The project owner was shown an externally-produced document, "22 Major Arcana Official Codex Mapping" — including one version elaborated further by a separate AI tool that read only that same single source, not an independent verification — presenting a full system of Hebrew letters, Kabbalistic paths, "Quadrants" (a compass direction plus an element), and "Geometry" modes (Tesseract Ignition/Recursion/Collapse/Shatter/Expansion, Torus Inward/Outward/Inversion/Reversal/Solar/Full, Egg-Sphere 1–6, Cube Face, Shadow Face, Lunar Recursion, and Relational Braid) for each of the 22 Major Arcana cards, framed as though it were equivalent to established tradition.

Audited against real sources, not assumed:

- **The Hebrew letter / Sephirah-pair / card core is not new.** It matches, card for card, this Codex's own already-verified Golden Dawn attribution already present in `PATH_TABLE` (Section 5) and confirmed again in Part XXV §25.3. Nothing here needed to change or be re-derived.
- **The Quadrant assignments do not match the real, documented Golden Dawn direction/element convention.** The actual historical assignment, confirmed via the Lesser Ritual of the Pentagram, is **Fire = South, Air = East, Water = West, Earth = North**. The proposed document's compass/element pairings are a different, unexplained permutation and cannot be presented as Golden Dawn.
- **No real historical or notable esoteric tradition connects the Tarot Major Arcana to tesseracts, tori, or any hyperdimensional "mode."** Real sacred-geometry connections to the Tarot do exist (the lemniscate above the Magician's head; the twin pillars flanking the High Priestess) — but nothing resembling a "Tesseract Collapse" for Death, or any of the other Geometry Mode names, appears in any tradition this audit could locate.
- **"Relational Braid" specifically is the same unfounded term this Codex already flagged and rejected once before**, in Part XIX, when auditing an earlier fabricated external "Codex V07" draft. Its unexplained reappearance here is a provenance red flag, not a coincidence to build past quietly — which is exactly why it is named here rather than absorbed silently.

### 30.2 — The resolution, in the project owner's own words

The project owner reviewed this audit and made the explicit call to proceed anyway, but only under a very specific label. Quoting her directly:

> "I think the way to go forward here... I do feel there is some relevance in the spirit of the document, I just actually think that what we are attempting to build onto this system, is actually new territory and will be a W3BB Codex original addition, so we will need to correctly label it so... my feeling is that the tesseract symbology is a 4 and 5D concept that transcends traditional systems... It is connected to the next phase of evolution and can act as the bridge between the old ancient systems and the W3BB Codex... the ancient systems we are building on top of are not to be altered, just enhanced and applied in different ways."

Concretely, that means: this Codex adopts the full Quadrant + Geometry + Archetype layer from the proposed document, unmodified, card for card — but **only** as an explicitly labeled **W3BB Codex original construction**. It is never presented, in code, in this document, or in reader-facing copy, as Golden Dawn, Kabbalah, or any inherited tradition. It is framed specifically as a deliberate 4th/5th-dimensional evolutionary layer this Codex is choosing to add **on top of** — never in replacement of, and never altering — the real, existing, verified systems (the real Golden Dawn Tarot/Tree-of-Life attribution, real numerology, real astrology) that this document has verified throughout Parts I–XXIX. Those systems remain completely untouched and exactly as accurate as they were before this Part existed. Per the project owner's own framing, this layer is the bridge the Codex is building between the old, settled systems and whatever comes next — not a revision of the old systems themselves.

### 30.3 — Satisfying the Part XXII standard via its second branch

Part XXII states the Codex standard has always had two valid branches: a new rule either (a) checks out mathematically or structurally against a real system already established in the Codex or an independently verifiable external source, cross-checked at least two ways, **or** (b) is explicitly, honestly labeled as an original construction rather than presented as inherited tradition. Every other addition in this document (Parts XVII–XXIX) satisfies branch (a). **This Part is the first to satisfy branch (b) instead** — there is no real tradition to verify the Quadrant/Geometry assignments against, the audit in §30.1 confirms that directly, and so the only honest path forward is exactly the one Part XXII already names: label it plainly as original, and never claim otherwise. That is what this Part, and the code it describes, does.

### 30.4 — The full 22-card table

Hebrew letter, Sephirah pair, and card name are unchanged — see `PATH_TABLE` (Section 5). The two new fields below join against that same table by card name.

| Path # | Card | Quadrant | Geometry Mode |
|---|---|---|---|
| 11 | The Fool | East / Fire | Egg-Sphere 1 (Origin) |
| 12 | The Magician | North / Air | Tesseract Ignition |
| 13 | The High Priestess | South / Water | Inward Torus |
| 14 | The Empress | West / Earth | Egg-Sphere 2 |
| 15 | The Emperor | East / Fire | Cube Face |
| 16 | The Hierophant | South / Water | Tesseract Recursion |
| 17 | The Lovers | South / Water | Relational Braid |
| 18 | The Chariot | North / Air | Outward Torus |
| 19 | Strength | East / Fire | Egg-Sphere 3 |
| 20 | The Hermit | West / Earth | Tesseract Inward Recursion |
| 21 | Wheel of Fortune | North / Air | Torus Inversion |
| 22 | Justice | South / Water | Egg-Sphere 4 |
| 23 | The Hanged Man | West / Earth | Torus Reversal |
| 24 | Death | East / Fire | Tesseract Collapse |
| 25 | Temperance | South / Water | Egg-Sphere 5 |
| 26 | The Devil | West / Earth | Shadow Face Activation |
| 27 | The Tower | North / Air | Tesseract Shatter |
| 28 | The Star | South / Water | Egg-Sphere 6 |
| 29 | The Moon | West / Earth | Lunar Recursion |
| 30 | The Sun | East / Fire | Solar Torus |
| 31 | Judgement | North / Air | Tesseract Expansion |
| 32 | The World | South / Water | Full Torus |

### 30.5 — Implementation

`W3BB_EVOLUTIONARY_GEOMETRY` (a new lookup table, keyed by the exact `card` string `PATH_TABLE`/`primaryPathForLP()` already return — no new numbering scheme introduced) and its accessor `getW3bbEvolutionaryGeometry(cardName)` carry the 22 rows above, plus a short, meaning-first English translation of each Geometry Mode (per Part XXVI — the reader is told what the mode feels like and invites, never the mechanics of how it was assigned). Both are commented, in the code itself, with the same explicit non-traditional labeling this Part uses, and cross-reference this Part by name.

The layer is wired into the **solo reading only**, at the natural attachment point — immediately after the existing, real Trump Card material on Page 2 of both `getFallbackReading()` and the `doReading()` AI prompt, which is already where a person's specific Life Path Trump Card (via `primaryPathForLP()`) is named. In both places:

- The real Trump Card paragraph (Hebrew letter, path number, keyword) is completely untouched — this layer is purely additive, appended after it.
- The added paragraph plainly states, in the reading copy itself, that this next piece is W3BB's own original addition laid on top of the Tarot tradition just described, and is explicitly not Golden Dawn, not Kabbalah, and not inherited tradition.
- It names the card's Quadrant and Geometry Mode, translated into warm, meaning-first language rather than left as raw jargon (per Part XXVI).
- Partnership and group readings are untouched by this Part — that wiring, if wanted, is left for a future pass, matching how other Codex layers have been staged solo-first before.

### 30.6 — What this explicitly does not do

This Part does not re-derive, re-verify, or re-justify any individual card's Quadrant or Geometry assignment — per the project owner's explicit direction, that per-card mapping is this layer's own original creative content, not a claim requiring outside verification, and Part XXII's branch (b) does not require one. It does not alter, remove, or reinterpret any existing `PATH_TABLE` entry, Sephirah, Hebrew letter, or real Golden Dawn attribution anywhere in the codebase. It does not merge this layer into the real Trump Card field, the Soul/Court Card system, the Node Decan Cards, or any other existing Minor/Major Arcana readout — it is its own clearly labeled, separate field. And it carries forward, rather than re-litigates, the standing rejection of "Relational Braid" as anything other than an explicitly original W3BB term — see §30.1 and Part XIX.

---

*W3BB Worldwide · Codex Logic V07 · Addendum to V06 · All additions are cross-verified against at least one other system already established in this Codex, with the derivation shown — no assertion stands alone. Parts XXX and XXXI are the exceptions by design: each is explicitly labeled original W3BB construction per the Part XXII branch (b) standard, not cross-verified against a real tradition, because no real tradition exists for either to check out against.*

---

## Part XXXI — The Nodal Choice Interface: An Original W3BB Interpretive Framework Layered on the Real Node Decan Cards

### 31.1 — What is, and is not, new here

Nothing about the North/South Node Decan Cards themselves changes in this Part. `getNodeDecanCards()` and the real, already-verified Golden Dawn decan mechanism behind it (Part XXI) are untouched — same table, same rule, same two independent verifications. What is genuinely new is a single, narrow addition: **presenting both cards to the reader as an explicit either/or/both decision, with three literal buttons, instead of the reading silently choosing a growth-trajectory framing on the person's behalf.**

That interactive choice mechanic — not the cards, not the decan math, just the act of making the choice a real, clickable, named decision — is a **W3BB Codex original construction**. It is not Golden Dawn, not Kabbalah, and not inherited tradition of any kind, and it is never presented as such anywhere in code, in reading copy, or in this document. Per Part XXII's second branch (the same branch invoked by this Codex's other original addition, the W3BB Evolutionary Geometry layer, on a sibling branch): a new addition to this Codex is valid either because it checks out mathematically/structurally against a real tradition (branch a), or because it is honestly labeled as an original construction rather than passed off as inherited (branch b). There is no historical tradition of "Tarot decan cards as an interactive either/or/both UI control" to verify against, so this Part satisfies branch (b) exactly the way it is meant to be satisfied: by naming the invention plainly rather than dressing it up as something older than it is.

### 31.2 — Why this strengthens the Codex's own standing free-will framing, rather than adding a new claim

This Codex has said, from Part XXI §21.6 onward, that a person's Node placement is fixed at birth but their day-to-day *relationship* to it is chosen: "the placement itself does not move — it was fixed the moment you were born — only your relationship to it, moment by moment, is yours to choose." That sentence has been sitting in the reading's prose since Part XXI. This Part does not introduce a new claim about free will; it makes a claim the Codex already made **literal and interactive** instead of leaving it as something only implied in narrative language. The person does not read a paragraph asserting they have a choice — they are handed an actual choice, with three named options and honest, neither-is-better framing, and the very next part of their reading (today's Personal Day Minor Arcana field, Part XXV) visibly changes shape in response to what they picked. The mechanism is new; the philosophy behind it is the same one this Codex has held since Part XXI.

### 31.3 — The interface, exactly as specified

For a solo reading whose profile carries Node Decan Cards, a new section appears directly alongside the existing North/South Node Decan Card material (Page 1 of both `getFallbackReading()` and the AI-driven reading), showing:

- Both cards side by side, North Node card and South Node card, using the same visual convention as the existing Soul Card/Court Card captions elsewhere in the app (inline-styled colored text labels, no new visual system introduced).
- North Node column framed as **"Emerging, outward-facing potential"** / **"What growth may require."**
- South Node column framed as **"Familiar, inward-returning pattern"** / **"What already feels natural or practiced."**
- For each card, a **Constructive expression** line and a **Possible imbalance** line — see §31.4 for exactly how these are derived.
- Explicit, neutral copy stating that neither orientation is inherently better: the South Node's familiar pattern can be exactly right on a day that calls for rest, integration, or recovery, and the North Node's emerging potential can be exactly right on a day that calls for expansion — a real choice for how to meet today, not a quiz with a correct answer.
- Three buttons, with the project owner's own exact sub-text preserved verbatim: **Lean North** ("I want to move toward growth and unfamiliar possibility."), **Work with South** ("I want to draw upon familiarity, restoration, or existing strengths."), **Hold the Axis** ("I want to understand and balance both energies.").

### 31.4 — Constructive expression / Possible imbalance: derivation rule and honest scope

Per this Codex's standing rule against inventing new Minor Arcana meanings untethered from real data (and per Part XXVI's meaning-first, no-mechanics-dump presentation rule), the Constructive expression and Possible imbalance lines for each card are not freely invented. They are a direct light/shadow reading of that **same card's existing Golden Dawn keyword already in `MINOR_KEYWORDS`** (Section 6.3) — the same keyword table Part XXI itself already draws every card name from (§21.4's note: "no new keyword text was invented for this feature"). A new lookup table, `MINOR_LIGHT_SHADOW`, keyed by the exact card name `pipCardName()` already returns, carries these hand-written pairs — but **only for the specific cards this feature's synthetic verification profiles actually produced** (Five of Swords/Defeat, Five of Wands/Strife, Nine of Wands/Strength, Nine of Swords/Cruelty, Three of Swords/Sorrow, Three of Wands/Virtue — six of the 36 decan-rank cards). For any card not yet in that hand-built table, `getMinorCardLightShadow()` falls back to a generic-but-still-keyword-derived phrasing ("a constructive, intentional expression of its `[keyword]` energy" / "letting its `[keyword]` energy run unchecked or unexamined") rather than inventing unrelated content or throwing an error.

**This is explicitly flagged, not smoothed over:** the full 36-card table implied by Part XXI's own decan-rank set (ranks 2–10, four suits) is not built out in this pass. It should be filled in the same way — one real card at a time, with a genuine light/shadow reading of that card's own existing keyword — as future readings actually surface each remaining card, rather than all 30 remaining entries being written at once, untested, in this PR.

### 31.5 — Wiring: time-stamped reading state, never a profile rewrite

The chosen orientation is stored in `window._nodalChoice` (`'north'` | `'south'` | `'both'` | `null`), with the moment it was chosen recorded separately in `window._nodalChoiceAt` (an ISO timestamp, set the instant `setNodalChoice()` runs). Both are in-memory globals scoped to the current reading session only — the same pattern already used by `window._readingProfile` — and both are reset together on every new reading (the `reset-btn` handler). No new persistence mechanism was introduced, and **neither field is ever written onto `window._readingProfile` itself.** This distinction is deliberate, not incidental: the person's actual profile — birth data, Life Path, natal Node placements, the Node Decan Cards themselves — is computed once and does not change based on which button someone clicks. Clicking "Lean North" does not make someone's Node placement different, retroactively or otherwise; it only changes how *this reading* frames the already-fixed, already-real placement. The timestamp exists so that which choice was active, and when, is an auditable fact about this reading session — not a mutation of the person's underlying chart data.

Both `getFallbackReading()` (Page 7) and `doReading()`'s AI prompt (Page 7 spec) check this same global via `getNodalChoiceReaderSentence()` / `getNodalChoicePromptInstruction()` respectively, and — **only when a choice has actually been made and the profile carries Node Decan Cards** — append additional sentences naming which lens colors today's Personal Day Wildcard field (Part XXV), explicitly naming the relevant Node Decan Card(s) by name. When no choice has been made, both functions add nothing at all, and the existing neutral Part XXV framing renders byte-for-byte identical to how it rendered before this Part existed — verified directly (see the PR body) by diffing `getFallbackReading()`'s Page 7 output with `window._nodalChoice` unset against the same function on the pre-this-Part codebase.

Two framing rules apply uniformly across all three choices, per the project owner's explicit direction:

- **Expression, not prediction.** Every one of the three lens sentences — north, south, and both — closes with an explicit statement that the wildcard card reflects the orientation chosen for *this reading*, not a forecast of what the day will actually bring. This mirrors the same honest-scope discipline this Codex has held everywhere else (Part XVIII.3's ban on synthetic scores; Part XXV's own wildcard-pool framing) — a chosen lens changes how a real card is *read*, not what will *happen*.
- **"Hold the Axis" is a bridge reading, not a split-the-difference average.** The `both` branch of `getNodalChoiceReaderSentence()` / `getNodalChoicePromptInstruction()` does not treat the North and South cards as two options to average or alternate between. It frames the wildcard card as the point where the two Node Decan Cards' energies are asked to **cooperate** — the North card's outward pull opening something, the South card's familiar steadiness helping the person actually carry it — consistent with the neutral, both-are-valid framing already established in §31.3.

### 31.6 — What this explicitly does not do

This Part does not touch partnership or group reading code in any way — the Nodal Choice interface is solo-reading-only, matching how other Codex layers have been staged solo-first before adding partnership/group wiring in a later pass (Part XXV §25.6's own history is the precedent). It does not alter, reinterpret, or attach a score to the underlying Node Decan Cards themselves (Part XXI stands exactly as written). It does not claim the interactive choice mechanic is Golden Dawn, Kabbalah, or any inherited tradition — see §31.1. And it does not claim, anywhere in code or copy, that either Node orientation is more correct than the other; the explicit neutral framing in §31.3 exists specifically to guard against that slippage, and was re-read critically for exactly this failure mode before this Part was finalized.

---

*W3BB Worldwide · Codex Logic V07 · Addendum to V06 · All additions are cross-verified against at least one other system already established in this Codex, with the derivation shown — no assertion stands alone. Part XXXI is a labeled exception by design: its interactive choice mechanic is explicitly original W3BB construction per the Part XXII branch (b) standard, not cross-verified against a real tradition, because no real tradition exists for an either/or/both Tarot-card UI control to check out against — while the Node Decan Cards it presents remain the same real, Part XXI-verified mechanism throughout.*

---

## Part XXXII — Daily Readings Subscription: Persistent History + Lookback Synthesis (An Original W3BB Product Feature)

### 32.1 — What is, and is not, new here

Nothing about the underlying reading mechanics changes in this Part. `doReading()`, `getFallbackReading()`, the Nodal Choice interface (Part XXXI), and the Node Decan Cards it presents (Part XXI) are all called exactly as they already exist — not duplicated, not modified, not reinterpreted. A subscriber's "Today's Reading" is produced by the identical pipeline a one-time purchaser's reading is produced by, run against the identical `window._readingProfile` the intake form already computes.

What is genuinely new is a second, parallel product wrapped around that same pipeline: a $20/month subscription that (a) gates a person into using that pipeline once per calendar day, oriented through the Nodal Choice interface each time; (b) persists the result of each day — the two Node Decan Cards, which orientation was chosen and when, the day's Personal Day Wildcard card, and a minimal profile snapshot — to a new `daily_reads` table, one row per subscriber per day; and (c) lets the subscriber later request a Quarterly or Annual **Lookback**: a synthesis of everything stored in that window, computed from real counts (how many days North was chosen vs. South vs. Both, which cards recurred) plus an optional AI-written narrative paragraph that is explicitly instructed to stay grounded in those same real counts and never invent a percentage, streak, or card not actually in the data.

### 32.2 — Honest labeling per the Part XXII branch (b) standard

Per Part XXII's second branch — already invoked by this Codex's other two original constructions, the W3BB Evolutionary Geometry layer (Part XXX) and the Nodal Choice interface itself (Part XXXI): a new addition to this Codex is valid either because it checks out mathematically/structurally against a real tradition (branch a), or because it is honestly labeled as an original construction rather than passed off as inherited (branch b). **A stored personal history of Tarot/Node choices, synthesized into a periodic review, is not an inherited tradition of any kind** — it is a product feature this Codex is naming plainly as its own invention, the same way Parts XXX and XXXI already did for their respective additions. It is never presented anywhere in code, in reading copy, or in this document as Golden Dawn, Kabbalah, or any older system's practice. The Node Decan Cards and Nodal Choice mechanic being *stored and reviewed* is new; the cards, the decan math behind them (Part XXI), and the choice mechanic itself (Part XXXI) are the same real, already-verified/already-labeled material throughout, untouched.

### 32.3 — Identity: Supabase Auth magic-link sign-in, scoped narrowly

Sign-in (Supabase Auth's email OTP / "magic link" endpoint, no password ever collected) is required **only** for the subscription/daily-reads flow described in this Part. One-time tier purchases (`TIERS`, `GROUP_TIERS`, `ARCHETYPE_QUIZ_TIER`) never call any function this Part introduces and never prompt for sign-in — verified this session by diffing those flows' relevant function outputs against this same codebase's pre-Part-XXXII behavior across several synthetic profiles (see the PR body for the diffs) and confirming byte-for-byte identical output. The Supabase project, URL, and anon key reused for this sign-in and for every other call in this Part are the **exact same** `SUPABASE_URL`/`SUPABASE_KEY` values `redeem_promo_code()` (the promo-code system) and the lead-capture save already use elsewhere in `public/index.html` — no second Supabase client, project, or credential is introduced.

### 32.4 — Persistence: one row per subscriber per day, upserted, never duplicated

Each day a subscriber generates "Today's Reading," the resulting Node Decan Cards, the Nodal Choice made (and when), the day's Personal Day Wildcard card, and a minimal snapshot of the profile fields needed to redisplay that day later (never the full generated reading text itself, which stays regenerable on demand) are sent to a new `upsert_daily_read()` database function (see `supabase/subscriptions_daily_reads_schema.sql`). That function is `SECURITY DEFINER`, writes only to the caller's own `auth.uid()` (never a user id passed as a parameter), and upserts on a `(user_id, read_date)` unique constraint — revisiting today's reading later the same day updates today's row rather than creating a duplicate. This mirrors `redeem_promo_code()`'s own race-condition-safe, atomic-write discipline (Part-agnostic prior art already established in `docs/PROMO_CODES_SETUP.md`), adapted from a conditional `UPDATE ... RETURNING` to an `INSERT ... ON CONFLICT ... DO UPDATE`, and was directly verified this session against a real local Postgres instance: writing the same day twice produces exactly one row, a second user's rows are invisible to the first user under Row Level Security, an unauthenticated call is refused cleanly rather than crashing, and an invalid `nodal_choice`/`status` value is rejected rather than silently stored (see the PR body for the full test transcript).

### 32.5 — The Lookback: real counts first, an honestly-scoped AI narrative second

The Lookback screen fetches a subscriber's own `daily_reads` rows for a chosen Quarter or Year (a plain RLS-scoped `SELECT`, restricted by policy to `auth.uid() = user_id` — no RPC needed for this read, per the same table's write-only-via-RPC design) and runs them through `buildLookbackSynthesisFallback()`: a pure, non-AI function that counts how many saved days chose North vs. South vs. Both vs. no choice at all, and lists which specific card names recurred more than once — real counts and real lists, never an invented percentage, streak, or score, per this Codex's standing rule against synthetic scores (Part XVIII §18.3, already the standard `getFallbackReading()`/`getStoredQuizArchetypeGuess()` and every other honesty-scoped feature in this app has held to).

That same real synthesis is then optionally handed to a *new* AI prompt — `buildLookbackSynthesisPrompt()`, explicitly distinct from `doReading()`'s daily-reading prompt — asking Celestia to write a warm, plain-language narrative reflecting on the pattern, with an explicit instruction never to invent a count, percentage, or card name beyond what the prompt already supplies. The underlying AI call path itself is reused, not duplicated: `callOracleAI()`, a low-level helper factored directly out of the existing `generateReading()` function this session (with `generateReading()`'s own behavior verified unchanged before/after the refactor, across the AI-path-present and AI-path-absent branches alike), is called with this Part's own system prompt instead of Celestia's daily-reading system prompt. If the AI path is unavailable or fails, `generateLookbackNarrative()` returns `null` rather than falling through to `getFallbackReading()` (which would hand back an unrelated 9-page personal reading — the wrong content entirely for a Lookback) — the caller falls back to the real, already-computed `buildLookbackSynthesisFallback()` narrative instead, so a subscriber always receives a true, calculated answer even with zero AI involvement.

### 32.6 — Billing: live via a plain Square Payment Link, with manual activation for now

**Real money moves through this feature.** `SQUARE_SUBSCRIPTION_LINK` in `public/index.html` holds a real Square Payment Link, set up in the Square dashboard exactly like every one-time tier's link in `SQUARE_LINKS` (same kind of object, its own Redirect URL pointing back to `?paid=subscription-monthly`) — no Subscriptions-API access token is needed to collect the recurring charge itself. What remains manual, deliberately and honestly: because a plain Payment Link's own webhook isn't wired up yet, marking a subscriber's `subscribers.status` as `active` after they pay is a human running one SQL statement in Supabase's SQL Editor (`upsert_subscriber_status`/a direct upsert — see `docs/SUBSCRIPTIONS_SETUP.md` section 4), not something the app does automatically the moment money changes hands. The originally-sketched fully-automated path — a Catalog subscription-plan object, a Subscriptions-API-scoped access token, and a webhook receiver keeping `subscribers.status` in sync with zero human involvement — remains documented as a real future upgrade (`netlify/functions/create-subscription-checkout.js`, `docs/SUBSCRIPTIONS_SETUP.md` section 5) but is not required to take real payments today, and nothing about the live path pretends otherwise: the manual step is stated plainly to the reader of the setup doc, not glossed over as "done." No Square access token or webhook secret is fabricated or hardcoded anywhere in this codebase or its documentation — the Payment Link URL itself is not a secret and is safe to keep visible in code, the same as the one-time tiers' links already are.

### 32.7 — What this explicitly does not do

This Part does not touch partnership or group reading code in any way — like the Nodal Choice interface it builds on (Part XXXI §31.6), it is solo-reading-only. It does not alter, duplicate, or reinterpret `doReading()`, `getFallbackReading()`, `buildNodalChoiceSection()`, `getNodeDecanCards()`, or any other existing reading function — every one of them is called, never rewritten. It does not change how `TIERS`, `GROUP_TIERS`, or `ARCHETYPE_QUIZ_TIER` purchases work, and never requires sign-in for any of them. It does not claim the Lookback's synthesis mechanic is inherited tradition — see §32.2. And it does not claim subscriber activation is automatic when it isn't yet — §32.6 states plainly that a human still runs one SQL statement per new subscriber until the optional future webhook automation described there is actually built.

---

*W3BB Worldwide · Codex Logic V07 · Addendum to V06 · All additions are cross-verified against at least one other system already established in this Codex, with the derivation shown — no assertion stands alone. Parts XXX, XXXI, and XXXII are labeled exceptions by design: each is explicitly original W3BB construction per the Part XXII branch (b) standard, not cross-verified against a real tradition, because no real tradition exists for any of the three to check out against — while the real, already-verified reading mechanics each one presents or builds on (Node Decan Cards, Nodal Choice, and every system named in the reading pipeline itself) remain untouched throughout.*

## Part XXXIII — Enhanced Free Voice (Beta): An Open-Source Neural Narration Tier

### 33.1 — What this is: a UX/technology addition, not a Codex content claim

Every prior Part in this document has been about the Codex's actual content — a number, a card, a placement, a framing of meaning. This Part is different in kind: it adds a second choice of **narration voice** for readings that already exist, and changes nothing about what any reading says. A person's Life Path, Expression, Node placement, Tarot draw, and every word of interpretive copy are computed exactly as before, regardless of which voice tier speaks them aloud. Because of that, this Part carries **no tension whatsoever with Part XXII's honesty-about-tradition standard** — that standard governs claims about a reading's content (numerology, astrology, Tarot, sacred geometry), and voice choice makes no claim about any of those. There is nothing here to verify against a real tradition (branch a) and nothing to honestly label as original construction instead (branch b), because Part XXII's branches apply to content claims and this Part makes none. It is recorded here anyway, in the same document, purely so every user-facing feature in the app has a single place it's documented — not because it needed to clear the Part XXII bar.

### 33.2 — The two tiers, as they now stand

1. **Default free browser voice** (pre-existing, untouched) — whatever voice/engine is already built into the visitor's own browser (`speechSynthesis`), automatically preferring an "Aria"-named voice, or an exact voice the admin panel picks explicitly. Robotic-sounding on many systems, but instant and at zero cost, with zero download.
2. **Enhanced Free Voice (Beta)** — new in this Part. Kokoro-82M, an 82-million-parameter, Apache-2.0-licensed open-source neural text-to-speech model, run entirely client-side via WebAssembly through the `kokoro-js` npm package (itself built on Transformers.js/onnxruntime-web). Noticeably more natural-sounding than tier 1, still free, and still nothing ever sent to any server — but it requires a one-time download of the model's quantized ("q8") ONNX weights, about 90MB, the first time someone enables it in a given browser. That download is fetched directly from Hugging Face's CDN by `kokoro-js` itself at runtime; the model file itself is never vendored into this repository. The browser's own cache keeps it after the first download, so every later reading in that browser loads instantly — but a fresh page load in a NEW session never auto-restores it (see §33.4): the person has to click "Enable & Download Voice" again after a page refresh, even if they enabled it before.

Tier 2 sounds noticeably more natural than tier 1's robotic default — and, being open-source and client-side, it costs nothing and needs no account or key.

**A note on history, kept rather than erased:** for a brief period earlier in this same session, this Part described a third tier — a paid "Azure AI Speech upgrade" using Azure's named neural voices ("Aria," "Guy," "Natasha," etc.) via an admin-supplied API key and region. The project owner removed that tier by their own choice, once this Part's open-source Kokoro tier proved to sound more natural anyway, making the paid upgrade's only advantage moot. The Azure tier's code, admin-panel UI, and `localStorage` keys have all been deleted from the app; nothing about it remains except this note, kept here per this document's own practice of recording real decisions rather than hiding them.

### 33.3 — Honest scope and limitations, stated plainly

- **A fixed, small voice set — not arbitrary named voices.** Kokoro ships exactly 28 built-in English voices (11 American female, 9 American male, 4 British female, 4 British male), listed by their real names in the admin panel's picker. There is no "Natasha," no custom voice cloning, and no way to add more without a model update from its own maintainers.
- **A real download, every time it's freshly enabled.** ~90MB is not nothing — it is disclosed up front in the admin panel, before the download starts, along with a live percentage progress bar wired to `kokoro-js`'s own `progress_callback` (real loaded/total byte counts when the underlying library provides them, not a fake spinner).
- **WASM/WebGPU browser support caveat.** This tier requires `WebAssembly` support. Nearly every browser in current use has it, but the admin panel checks explicitly and shows a clear message rather than a silent failure if it's ever missing, and the default browser voice (tier 1) is completely unaffected either way.
- **Rate control: fully supported, not silently ignored.** Unlike some browser-based TTS APIs, Kokoro's own `generate(text, { voice, speed })` method takes a literal numeric speed multiplier (confirmed directly from `kokoro-js`'s source, not assumed) — so the existing admin "Narration Speed" slider applies to this tier exactly as it does to tier 1. Nothing about the speed control needed to be silently dropped or faked.
- **Local compute, not a remote server.** Because generation runs on the visitor's own device rather than a fast remote API, it is inherently slower per sentence than a server-side voice; narration is generated and played back in short sentence-grouped chunks (`_kokoroChunkText`) rather than one giant blocking call, so playback starts reasonably quickly and stop/mute can still interrupt between chunks.

### 33.4 — Wiring: an explicit, narrow addition in front of the existing free-tier logic

`browserSpeak()` — the single function every existing narration call site (`_fallbackSpeakLong`, `speakText`, the admin panel's own browser-voice test button, etc.) already calls — becomes a two-line dispatcher: if `isKokoroReady()` is true, hand off to the new `kokoroSpeak()`; otherwise call the **entire original function body, moved verbatim and unmodified into `_nativeBrowserSpeak()`**, with the explicit-voice-picker/Aria-search fallback chain (`findExplicitBrowserVoice()`, `pickAriaVoice()`) untouched byte-for-byte. `isKokoroReady()` requires BOTH the admin's saved `enhanced_voice_enabled` preference AND a successful load of the model **already completed in the current page session** (`_kokoroTTS` set) — a stale "enabled" flag left over from a previous visit never silently triggers a fresh ~90MB download mid-reading; only an explicit click of "Enable & Download Voice" in the admin panel does that, once per fresh page load. This keeps the feature's cost invisible to anyone who hasn't deliberately opted in during the current session, exactly as this Part's design requires.

On any runtime failure — the model fails to load, or a `generate()` call errors mid-reading — `kokoroSpeak()` marks itself failed for the rest of the session and hands the remaining text straight to `_nativeBrowserSpeak()`, so a Kokoro failure degrades to the ordinary default voice rather than ever leaving a reading silent or broken. Playback itself reuses the same `currentAudio` + `<audio>` element + `URL.createObjectURL` contract used elsewhere in the narration chain, so the rest of the app's mute/stop controls keep working unmodified regardless of which of the two tiers is actually speaking.

### 33.5 — What this explicitly does not do

This Part does not change the default experience for anyone who never opens Voice Settings: the `kokoro-js` library and the Kokoro model are never fetched on normal page load, and are only ever fetched via a dynamic `import()` triggered by an explicit admin-panel click — never a `<script>` tag added to `<head>`. It does not alter, remove, or restructure the existing Free Browser Voice picker, the Narration Speed slider's existing behavior for tier 1, or the mute/stop controls — every pre-existing function in the narration chain is either byte-for-byte unchanged or, in `browserSpeak()`'s one case, wrapped by a two-line dispatcher in front of an otherwise-untouched body. And it does not claim Kokoro sounds identical to a studio-produced commercial voice — the admin panel copy is explicit that this is a small, open-source technology with its own fixed voice set.

---

*W3BB Worldwide · Codex Logic V07 · Addendum to V06 · All additions are cross-verified against at least one other system already established in this Codex, with the derivation shown — no assertion stands alone. Parts XXX, XXXI, and XXXII remain labeled exceptions by design (original W3BB construction per the Part XXII branch (b) standard). Part XXXIII is a different kind of exception: it is a narration-technology/UX addition that makes no claim about any reading's content at all, so Part XXII's two branches (cross-verified derivation, or honestly-labeled original construction) simply do not apply to it — what IS independently verified for this Part is the real-world existence, license, and API shape of the `kokoro-js` package and the `onnx-community/Kokoro-82M-v1.0-ONNX` model it loads, checked directly against the npm registry and the model's own GitHub repository before this Part was written.*

## Part XXXIV — Automated Subscriber Activation: A Webhook Replacing a Manual Step (Infrastructure, Not a Content Claim)

### 34.1 — What this is, and why it carries no tension with Part XXII

Like Part XXXIII, this Part is about infrastructure, not Codex content. Nothing about any reading's numerology, astrology, Tarot, or sacred-geometry claims changes here, and nothing about the Nodal Choice interface (Part XXXI), the Daily Readings persistence model (Part XXXII), or the Lookback synthesis (Part XXXII) changes either. What changes is purely mechanical: how a real `$20`/month payment, already collected honestly since Part XXXII §32.6 through a plain Square Payment Link, gets reflected in `public.subscribers.status`. Before this Part, that reflection was a human running one SQL statement by hand after seeing a payment land in the Square dashboard (Part XXXII §32.6, `docs/SUBSCRIPTIONS_SETUP.md` section 4). After this Part, it can also happen automatically, the moment Square itself reports the payment, via a real webhook. Because this Part makes no claim about a number, a card, a placement, or a tradition, Part XXII's two branches (cross-verified derivation, or honestly-labeled original construction) simply do not apply to it — the same "different kind of exception" framing Part XXXIII already used for its own infrastructure-only addition.

### 34.2 — What was actually built

`functions/api/square-subscription-webhook.js` — a Cloudflare Pages Function (this project's real production host, confirmed this session to be Cloudflare Pages rather than Netlify, despite `netlify.toml` and `netlify/functions/*.js` still existing in the repo, now both marked with a top-of-file note saying plainly that they are not what's actually running) — receives Square's real webhook notifications for the existing recurring Payment Link's billing events (`invoice.payment_made`, `invoice.payment_failed`, `invoice.canceled`, and, defensively, `subscription.created`/`subscription.updated`), verifies each notification's HMAC-SHA256 signature before touching its body at all, resolves the paying buyer's email address via a follow-up Square API call (`GET /v2/invoices/{id}` or `GET /v2/customers/{id}`, since a plain Payment Link is never given a `customer_id` by this app at creation time), and calls a new, narrowly-scoped Postgres function — `activate_subscriber_by_email()`, added in `supabase/square_subscription_webhook_schema.sql` — to upsert that person's `subscribers` row. That new function's `EXECUTE` privilege is granted only to the `service_role` Postgres role (with an explicit `revoke ... from public` first, since Postgres grants `EXECUTE` to `PUBLIC` on new functions by default), directly verified this session against a real local Postgres instance: a simulated `service_role` caller succeeds, while simulated `anon` and `authenticated` callers are both refused with a plain "permission denied," and the pre-existing `upsert_subscriber_status()`/`upsert_daily_read()` functions' own auth.uid()-only write discipline was independently re-confirmed still unchanged and still working in the same test session — this addition closes the automation gap without reopening, weakening, or duplicating anything Part XXXII already established.

### 34.3 — Honest scope: what remains true either way

Exactly as Part XXXII §32.6 stated for the manual path, no Square access token, webhook signature key, or Supabase service-role key is fabricated or hardcoded anywhere in this codebase or its documentation — all three are read from Cloudflare Pages' own environment variables, set by the project owner, never committed. Until those variables are set and the webhook subscription is actually created in the Square dashboard (`docs/SUBSCRIPTIONS_SETUP.md` section 5 walks through both), this endpoint exists but nothing calls it, and the manual one-SQL-statement path from section 4 remains exactly as necessary as it already was — this Part automates a documented gap, it does not remove the fallback that closes it today. Every event type this webhook does not recognize, and every malformed body it receives despite a valid signature, is logged and acknowledged with a `200` rather than erroring loudly, per Square's own documented guidance against triggering retry storms for events a receiver was never going to act on differently.

---

## Part XXXV — Group Reading Reframed: From Personal-Bio Recap to Group-Contribution Synthesis

### 35.1 — The decision, in the project owner's own words

The project owner requested this redesign directly, and it is recorded here verbatim because it is a real product decision, not an inference:

> "Rather than read each person individually and basically do a personal reading, how about we redirect the entire purpose to only how each member fits into the group as a whole. So, for personal specifics, that can be gotten by purchasing the personal readings, but for the groups, I think the focus should be on their contribution, and the explanation of their contributions to the whole. So, for my chart specifically, it names me as the master communicator/teacher with the 33 life path, and air energy, so it should describe what that means, what air energy represents, and how those gifts contribute to the group and in what specific way."

They confirmed the mechanism explicitly: take a full snapshot of the group, calculate each person's chart, extract the important information, and present how they fit into the group and in what position they play best or most reliably.

### 35.2 — What changed

`formatGroupPersonSection()` (the non-AI fallback path) and the PERSON_<name> section instruction inside `doGroupReading()`'s AI prompt (the opportunistic AI path) were both rewritten from a condensed personal-bio shape (Life Path/Sephirah, Sun sign/element, Soul Card/Court Card, North/South Node growth-direction language) to a contribution-framed shape built entirely from data this Codex was already computing:

1. **Open with the Codex Archetype, explained, not just named.** `getCodexArchetype(lifePath, sunElement)` already produces a title like "The Master Communicator" for Life Path 33 crossed with an Air Sun — exactly the project owner's own chart. What was missing was the explanation the project owner asked for ("what that means, what air energy represents"). That explanation is now built from two already-real sources, synthesized rather than stapled: the Life Path's own quality text (`MASTER_NUMBER_DATA[lp].quality` for Master Numbers 11/22/33/44, or the parallel `LP_DATA[lp].gift` phrase for Life Paths 1-9 — no new field was invented, `getLifePathQualityText()` simply picks whichever real one already exists for that Life Path) and a new `ELEMENT_QUALITIES` lookup (§35.3 below) giving standard, real astrological correspondences for what each classical element genuinely represents.
2. **Pivot to structural role as the actual "position in the group" finding.** `AXIS_ROLES[getAxisRole(lifePath)]` was already, structurally, a "position you play best in a structure" field — Vertical Integrator ("the synthesizer, the coherence-holder, the spine of any structure you inhabit") versus Horizontal Architect ("the builder, the stabilizer, the one who gives the vertical current somewhere real to land"). It previously surfaced in the group person section only as a rare cross-reference; it is now the spine of the section, synthesized with the Codex Archetype into one concrete statement of that person's most reliable contribution — e.g. a Vertical Integrator with a Communicator-type archetype reads as "the one who takes the group's scattered energy and gives it one clear, spoken direction," while a Horizontal Architect with the same archetype instead reads as "the one who makes sure what gets said actually turns into something built, not just another idea in the room." This is held to the same synthesis standard the solo reading's own prompt already states explicitly elsewhere in this codebase (`doReading()`'s instruction that a fixed Trump Card meeting a chosen day-orientation must be "a real synthesis... not two facts stapled together") — never two real facts placed side by side with "and."
3. **Kept, but subordinated, what already served the group-fit purpose.** The elemental-suit-count callout ("X of you carry Swords energy") and the cross-reference mechanism (`findGroupCrossReference`/`formatGroupCrossReference`) were both already "how you fit into this specific group" content. Neither was touched structurally — both still run unmodified — but each now reads as a continuation of the same contribution narrative rather than a bolted-on closing sentence, since the paragraph they land in is now itself framed around contribution.
4. **Dropped what was purely personal-bio with no group-contribution angle.** The Soul Card/Court Card sentence and the raw Node Decan Card (North/South Node growth-direction) sentence were removed from `formatGroupPersonSection()` and from the AI prompt's PERSON_<name> instruction. Both remain completely untouched in the solo reading's own separate code path (`doReading()`/its own fallback) — this was a removal from the group section specifically, on the project owner's own stated rule: "personal specifics... can be gotten by purchasing the personal readings."

`formatGroupOverviewSection()` received one additional framing sentence at its top ("This is the group's full roster of roles and contributions — the same real picture each person's own section below zooms into individually"), tying the Overview's already-honest structural counts to the new per-person framing without restructuring anything the Overview already reported.

### 35.3 — `ELEMENT_QUALITIES`: real, standard correspondences, not an invented framework

A new lookup, placed beside `ELEMENT_TO_SOLID` in `public/index.html`, gives one short, standard astrological correspondence per classical element — the fallback path's source of substance for "what this element represents," since no static table existed before this Part (element descriptions were previously only ever generated live by the AI in solo readings, with nothing for the non-AI fallback to draw from):

- **Fire** — initiating action, momentum, and the courage to move before certainty arrives
- **Water** — emotional attunement, intuition, and the ability to feel what a room needs before it is spoken
- **Air** — communication, ideas, and the connective thread that carries meaning from one person to the next
- **Earth** — grounding, practical follow-through, and the patience to carry a vision the rest of the way into form

These are standard, widely-recognized elemental associations, written fresh for this codebase's tone rather than copied from anywhere, and introduce no new claim beyond what any real astrological reference already holds for these four elements.

### 35.4 — Why this stays within the Part XXII standard

This Part introduces no new numerological, astrological, Tarot, or sacred-geometry claim. Every fact named in a group person's section — the Codex Archetype, the Life Path's own quality, the Sun element's own correspondence, the Axis Role, the Elemental Suit distribution — was already real, already computed, and already verified elsewhere in this Codex before this session began. What changed is presentation and synthesis: which already-real findings are foregrounded, how two of them are combined into one concrete statement, and which already-real findings (Soul/Court Card, Node growth-direction) are deliberately left for the solo reading instead. Per Part XXII's own standard, a presentation/synthesis change over already-verified data requires no new cross-verification — there is no new assertion here to verify.

### 35.5 — Scope: Group Reading only

The solo reading (`doReading()` and its fallback), the partnership reading (`doPartnershipReading()`/`getPartnershipFallback()`), the promo code system, and the Daily Readings subscription / Nodal Choice interface (Parts XXXI-XXXII, XXXIV) are completely untouched by this Part. `unlockFullGroupReading()` and `generateGroupPDF()` are also untouched — both continue to consume the exact same `{ intro, overviewText, people: [{firstName, text}], pairingsText, blessing, overview, pairings }` shape `getGroupFallback()`/`doGroupReading()`/`parseGroupReadingSections()` already produced; only the prose content of `people[i].text` (and, lightly, `overviewText`) changed, never the shape those two consuming functions expect.

---

## Part XXXVI — Explain Before Applying: A Standing Presentation Principle for Every Named Symbol, in the Solo and Partnership Readings

### 36.1 — The project owner's own words

This Part codifies a standing rule the project owner stated directly, and it is recorded here verbatim because it is a real, deliberate product decision, not an inference:

> "I noticed that the reading often assumes that the reader knows automatically what the card or energy means and we should not assume that... I don't think we should stop with just the minor arcana, I think this should extend across the board to all of the major arcana and everything really. We should assume the reader has no idea what the North and South nodes are, what fire, water earth and air energy represents or any of it means really, so we should give details and then explain it thoroughly and how it may apply to their life, as well as how it blends with their other energies present."

### 36.2 — The rule itself

Every time a reading (solo or partnership) names a symbol or system — a Major Arcana card, a Minor Arcana card, the Lunar Node axis, or a classical element — it must, in this order:

1. **Explain** what that thing actually represents, in plain language, assuming the reader has zero prior knowledge of the system it comes from.
2. **Apply** that explanation specifically to this person's own chart or situation, not as a generic definition sitting apart from them.
3. **Blend** it explicitly with whatever other finding was already named nearby — never three (or two) disconnected facts sitting side by side. This is the same "not two facts stapled together" bar this Codex already holds itself to elsewhere (see `getTrumpCardNodalConnection()`'s own commentary, and Part XXXV §35.2's citation of the same standard) — Part XXXVI simply extends that bar to cover explanation itself, not only synthesis of already-explained findings.

### 36.3 — Relationship to Part XXVI

Part XXVI ("Presentation Principle: Mechanics Stay Internal, Meaning Surfaces to the Reader") already established that a reading must never dump raw calculation mechanics on the reader — no degree talk, no decan arithmetic, no formula narration. Part XXXVI works alongside Part XXVI, not in place of it: Part XXVI says *don't explain how a value was calculated*; Part XXXVI says *do explain what a value means*, because those are two different failure modes a reading can fall into independently, and this Codex had been guilty of the second one in several places even while correctly avoiding the first. A corrected passage still names zero degrees, zero decans, zero ephemeris math (Part XXVI intact) while now also explaining, before naming the card, what "The Four of Swords" or "a Lunar Node" or "Fire energy" actually *is* (Part XXXVI's addition).

### 36.4 — What changed, and the real sources behind each category

**Elements** (Fire/Water/Air/Earth): reuses the exact `ELEMENT_QUALITIES` table already established in Part XXXV §35.3 for the Group Reading redesign — no second, competing elemental-meaning table was created. A new `explainElement(element)` helper wraps that same table in an "In astrology, X is one of the four classical elements, and it represents..." framing sentence, wired into `getFallbackReading()` (Page 1's Sun-element paragraph, Page 8's relational-element paragraph) and into `doReading()`'s AI prompt (a new PROFILE line instructing the AI to explain the element before naming it, on both Page 1 and Page 8, where previously the prompt named the element and its ruling planet but never instructed the AI to explain what it represents). The partnership reading (`getPartnershipFallback()`/`doPartnershipReading()`) received the identical treatment on both partners' Page 1/Page 2 Sun-element mentions, which previously named an element with no explanation of what it represents at all.

**The Lunar Node axis**: verified this session via WebSearch against cafeastrology.com's "North Node in Astrology," astrostyle.com's "North and South Nodes Astrology," and yogajournal.com's "What the North Node and South Node Mean in Astrology" — the real, standard astrological description: the lunar nodes are not planets or physical bodies, they are the two points where the Moon's own orbital path crosses the ecliptic (the Sun's apparent path), always sitting in exactly opposite zodiac signs, forming one axis. A new `explainNodeAxis()` helper states this plainly, in Part XXVI-compliant language (no degrees, no orbital mechanics beyond "crosses the ecliptic," which is the minimum needed to say what a Node concretely is). This explanation now runs BEFORE this Codex's own already-established functional framing ("growing toward" / "moving away from," Part XXI) everywhere the Node axis is named: `getFallbackReading()` Page 1 (identity portrait), Page 8 (relational Node mention); `doReading()`'s AI prompt (new PROFILE line + Page 1/Page 8 instructions); `getPartnershipFallback()`/`doPartnershipReading()`'s own Page 3 Node-axis paragraph and PROFILE; and `buildNodalChoiceSection()`'s reader-facing UI copy, which previously labeled the two cards "NORTH NODE CARD" / "SOUTH NODE CARD" with only a one-line caption and never explained what a Node actually is before presenting the interactive choice — it now opens with a plain-language paragraph doing exactly that.

**Major Arcana cards** named outside the deep Page-2 treatment (`buildTrumpCardDepth()`, added earlier this session and left untouched): a new `explainMajorArcanaCard(cardNameOrObj)` helper draws on the same two already-verified sources `buildTrumpCardDepth()` uses — `TAROT_PATHS[i].archetype` and `PATH_TABLE`'s own Golden Dawn keyword for that path — so it introduces no new claim about any specific card, it only makes that same honest method reusable. Wired into: the Shadow Card (`shadowCardPath`, confirmed to be a Major Arcana card since `shadowCardFor()` returns a `pathBetween()`/`PATH_TABLE` entry, i.e. a Tree-of-Life path card) in both `getFallbackReading()` Page 5 and `doReading()`'s prompt (new `shadowCardExplainLine` PROFILE entry) and in `getPartnershipFallback()` Page 5 for both partners; the Master Number 33 dual-Trump-Card case (`masterCoActive`) and the Master Number 11 Kether Bridge case (`viaKetherBridge`) in both `getFallbackReading()` Page 2 and `doReading()`'s Page 2 instruction; and the Personal Day Wildcard's pooled Major Arcana card in both `getFallbackReading()` Page 7 and `doReading()`'s prompt. The partnership reading's own primary Trump Card mentions (Page 1/Page 2) already quoted the card's full archetype phrase directly, which is itself a real explanation (the same phrase `buildTrumpCardDepth()` unpacks for the solo reading) — left as-is rather than duplicated with a second, redundant explanation sentence.

**Minor Arcana cards**: this was the largest gap. `MINOR_KEYWORDS` (Section 6.3) already gives a real, single Golden Dawn keyword per pip card, but a single keyword is not "explain thoroughly," per the project owner's own words. A new `explainMinorCard(cardObj)` function combines three real, verified layers into one honest synthesis:
- the card's **suit**, mapped to its classical element via a `SUIT_TO_ELEMENT` map (Wands=Fire, Cups=Water, Swords=Air, Pentacles=Earth — the same mapping this codebase's own `ELEMENT_TO_SOLID` table already encodes) and explained using the same `ELEMENT_QUALITIES` text as the element helper above;
- the card's **rank** (1–10 for a pip card, or Page/Knight/Queen/King for a court card), given real, standard, verified meanings. Verified this session via WebSearch against jobcannon.io's "Tarot numerology," TarotPugs' "Tarot & Numerology," Hermit's Mirror's "Tarot Numerology: Minor Sequences," and Elvi Tarot's "Tarot Numerology" for the 1–10 rank meanings (Ace=pure potential/the seed of the suit, 2=balance/choice, 3=growth, 4=stability/structure/rest, 5=conflict/loss/disruption, 6=harmony/reward, 7=challenge/reflection/testing, 8=movement/mastery-in-progress, 9=near-completion, 10=culmination/full cycle) — these are the same standard correspondences across all four suits, not invented here, and match this task's own suggested meanings closely enough that no correction to the wording was needed beyond tightening the phrasing. Verified separately, via WebSearch against jobcannon.io's "Court cards explained," TarotCardMeanings.org's court-card guide, and EzTarot's court-card reference, for the Page/Knight/Queen/King progression (Page=apprentice/curiosity/a new idea; Knight=active seeker/motion/pursuit; Queen=mature embodiment/intuition/emotional fluency; King=mastery/authority/settled discipline) — the same Rider-Waite-Smith naming this codebase's own `courtRankForSephId()` already commits to (Part XXIV §24.5 already did the Crowley-naming-collision due diligence for these same four rank names);
- the card's own **`MINOR_KEYWORDS` keyword**, named last as "one more word for that same current" rather than the whole explanation.

This is real, verifiable, standard Tarot tradition — branch (a) of Part XXII (cross-checked against real reference sources), not a newly invented meaning for any card. Wired into every place a Minor Arcana card is named in both the solo and partnership readings: the Soul Card and Court Card (Metatron's Cube), the Node Decan Cards (North and South), the Personal Day Wildcard's pooled companion pip card, and the Zodiacal Court Card (Sun placement) — in `getFallbackReading()`, `doReading()`'s prompt (new explain-lines added to the `metatronLine`/`zodiacalCourtCardLine`/`personalDayWildcardLine`/`nodeDecanCardsLine` PROFILE entries), `getPartnershipFallback()`, and `doPartnershipReading()`'s `richLine()` per-partner PROFILE block. `MINOR_LIGHT_SHADOW`/`getMinorCardLightShadow()` (built for the Nodal Choice interface, Part XXX) was left completely untouched — its job (constructive/imbalance framing for the two Nodal Choice cards specifically) is different from `explainMinorCard()`'s job (general card meaning, for every Minor Arcana mention across both readings), and the two are complementary, not overlapping.

### 36.5 — Scope

This Part touches only the solo reading (`getFallbackReading()`, `doReading()`) and the partnership reading (`getPartnershipFallback()`, `doPartnershipReading()`), plus `buildNodalChoiceSection()`'s reader-facing UI copy. It does not touch the Group Reading (`formatGroupPersonSection()`/`doGroupReading()`, Part XXXV — already redesigned this session and explicitly out of scope for this Part), the promo code system, the Daily Readings subscription / Nodal Choice interactive mechanic itself (Parts XXXI-XXXII, XXXIV — only its reader-facing Node-axis explanation text changed, never its logic, storage, or entitlement checks), or the Kokoro voice narration feature (Part XXXIII). `MINOR_LIGHT_SHADOW`, `MINOR_KEYWORDS`, `ELEMENT_QUALITIES`, `TAROT_PATHS`, and `PATH_TABLE` are all read from, never modified — this Part adds explanatory helpers on top of that existing, already-verified data, exactly as Part XXII's branch (a) standard requires.

---

## Part XXXVII — Explain Before Applying, Naturally: Phrasing Variation and First-Mention/Callback, Not a New Standard but a Refinement of How Part XXXVI's Own Standard Is Held

### 37.1 — The project owner's own words

Part XXXVI established WHAT must be explained before it is applied. Almost immediately after that Part merged, the project owner raised a direct, legitimate follow-up about HOW that explanation should read once it is actually in front of someone, recorded here verbatim because it is a real, deliberate product decision, not an inference:

> "I would like the readings to feel personalized and natural, not necessarily uniform across the board. The logic itself is uniform which is all that absolutely needs to be, but as for the actual read, I think it best to allow it to not be so uniform and mechanical like the logic itself... I also feel it important NOT to seem uniform at all when being presented to the reader, but instead naturally flow into the next natural progression and what feels appropriate."

### 37.2 — The concrete defect this names

Part XXXVI's four new helpers — `explainElement()`, `explainNodeAxis()`, `explainMajorArcanaCard()`, `explainMinorCard()` — were each, as first built, a single fixed sentence template with zero variation. That is fine the first time a symbol is named in a reading. It stops being fine the second time the *same* symbol is named in the *same* reading, which genuinely happens: a person's Sun element is named once on the identity-portrait page and again on the relational page; the Node axis is explained once for the developmental portrait and again when it is applied to love and partnership; a Soul Card and Court Card explained once in a relational paragraph are explained again, word for word, when the closing pages revisit Metatron's Cube. Confirmed this session by reading every call site of the four Part XXXVI helpers in `getFallbackReading()` and `getPartnershipFallback()` (not assumed from the project owner's own paraphrase, which named "Page 1 and Page 9" — the actual repeat, verified directly against the code, runs Page 1 → Page 8 for the Sun element and the Node axis, and Page 8 → Page 9 for the Soul Card and Court Card): before this Part, each of those repeats produced the literal same sentence, verbatim, a second time. That is exactly the "uniform and mechanical" feel the project owner is naming — not a style preference, a real, reproducible defect in the presentation layer.

### 37.3 — What did NOT change

Per the project owner's own framing, this Part is deliberately presentation-only. Every real, computed value this Codex produces — which element, which card, which Sephirah, which axis role, which keyword, which archetype — is exactly as uniform and rule-based after this Part as it was before it. `ELEMENT_QUALITIES`, `TAROT_PATHS`, `PATH_TABLE`, `MINOR_KEYWORDS`, `MINOR_RANK_MEANINGS`, `COURT_RANK_MEANINGS`, and `SUIT_TO_ELEMENT` are all read from, never edited, never re-derived, never given a second competing version. No calculation function anywhere in this codebase was touched. Only the sentences used to say a given real fact out loud were touched — never the fact itself.

### 37.4 — Real phrasing variation

Each of the four Part XXXVI helpers now picks from four genuinely different sentence constructions for the same real content, rather than one fixed template — the same array-of-functions-selected-by-index idiom this codebase already proved out in `formatGroupPersonSection()`'s `openers`/`roleClauses` arrays and the Group Reading's `MAGNETIC_PAIR_TEMPLATES`/`FRICTION_PAIR_TEMPLATES` (Part XXIX/XXXV), extended here to the Part XXXVI explain layer. `explainElement()` still draws only on `ELEMENT_QUALITIES`; `explainNodeAxis()` still states only the same real astronomical fact (the two points where the Moon's orbital path crosses the ecliptic, forming one axis) verified in Part XXXVI §36.4; `explainMajorArcanaCard()` still draws only on `TAROT_PATHS`/`PATH_TABLE`; `explainMinorCard()` still draws only on `SUIT_TO_ELEMENT`/`ELEMENT_QUALITIES`/`MINOR_RANK_MEANINGS`/`COURT_RANK_MEANINGS`/the card's own keyword. Each variant differs in sentence structure and rhythm — never in the underlying claim — and each function accepts an optional `variantIdx` parameter so a caller can pick deterministically or let it fall back to a fresh random draw.

### 37.5 — First mention gets the full explanation; every later mention gets a callback

New in this Part: `createExplainTracker()`, and the four `trackedExplain*()` wrappers built on it (`trackedExplainElement`, `trackedExplainNodeAxis`, `trackedExplainMajorArcanaCard`, `trackedExplainMinorCard`). `getFallbackReading()` and `getPartnershipFallback()` each build one tracker at the top of the function and thread it through every one of their explain call sites. The first time a given element, the Node axis, or a specific named card comes up in that one reading, the tracker has not seen it and the real explanation runs, exactly as Part XXXVI already established. Every later mention of that *same* symbol in the *same* reading is recognized by the tracker and gets a short callback sentence instead — four of those exist too, e.g. "That is the same Fire current already explained earlier in this reading, simply showing up again here" — referencing the earlier explanation rather than repeating it. This is not a new idiom invented for this Part: it is the identical "already named on Page 1" callback phrasing this file already used by hand in several places (e.g. the partnership reading's own "the same current already named through your Life Path and Sephirah above, simply speaking through your Sun this time") — this Part simply applies that same standing convention consistently and automatically everywhere the four explain functions are called, rather than leaving it to be remembered by hand at each call site. The tracker keys on the actual symbol (the element name, or the specific card name), not on which person it belongs to, so it also correctly catches the case where two different people in one partnership reading happen to share the same real element or card — verified directly in this session's test output (§37.7): Partner Two's Fire Sun on Page 2 receives a callback to Partner One's Fire Sun explained on Page 1, rather than a second identical explanation.

### 37.6 — The AI-prompt path

`doReading()`'s prompt and `doPartnershipReading()`'s prompt already instructed the AI (Part XXXVI) to explain each named symbol before applying and blending it. Both prompts now add one explicit instruction against mechanical, checklist-like repetition: vary how each explanation is phrased across the reading, never explain the same element, the same Node axis, or the same card with the same or near-identical wording twice, let each explanation read as part of that page's own natural voice rather than a definition being pasted in, and reference back briefly to an already-explained symbol rather than re-explaining it from scratch when it comes up again. This reinforces something AI-written prose mostly already does well on its own, but makes the standard explicit rather than assumed — the same reasoning this Codex already applies everywhere it tells the AI a rule the fallback path also enforces in code.

### 37.7 — Verification (this session)

All four inline `<script>` blocks in `public/index.html` were extracted and run through `node --check` — all pass. The real `getFallbackReading()` and `getPartnershipFallback()` were run, unmodified, inside a Node `vm` context built from a synthetic auto-stub DOM/browser environment (every property access on `document`/`window` returns a self-replicating stub via `Proxy`, so the whole script executes top to bottom without a real browser, and every top-level `var`/`function` — including `LP_DATA`, `ELEMENT_QUALITIES`, `TAROT_PATHS`, `PATH_TABLE`, and the reading functions themselves — ends up defined and callable), against synthetic profiles built from the same real helper functions this codebase already uses (`soulCardFor()`, `courtCardFor()`, `getNodeDecanCards()`) rather than hand-typed fake cards. Confirmed with real, quoted output:
- The same symbol, explained twice in one reading before this Part, now reads with genuinely different wording on first mention (a full explanation) and a distinct callback on the second mention — e.g. solo Page 1's Fire element explanation ("Fire belongs to astrology's four classical elements, and what it represents is...") versus Page 8's callback ("This is the Fire current this reading already unpacked earlier, now in a new setting").
- A later mention reads as a natural callback, not a second definition, confirmed on the Node axis (Page 1 full explanation → Page 8 "This is the Lunar Node axis already named earlier in this reading, simply applied again here"), and on the Soul/Court Card pair (Page 8 full explanation → Page 9 "This is the same Six of Wands already unpacked earlier in this reading").
- Generating the identical profile's `getFallbackReading()` twelve times in a row produced twelve distinct outputs (verified by hashing each full reading) — real variation run to run, not just within one reading, the actual "not uniform across the board" bar the project owner named. An earlier implementation of the variant picker (one random seed per reading, advanced deterministically call-by-call) was tested first and failed this exact bar — with only four phrasing variants per symbol and a fixed call sequence, that design produced the identical full reading roughly one time in four; it was replaced with an independent random draw per call before this Part was considered complete.
- A synthetic partnership reading with two different people who share the same real Sun element (both Fire) showed Partner One's Page 1 receiving the full Fire explanation and Partner Two's Page 2 receiving a callback to it, rather than the literal same sentence twice for two different people.
- The real facts conveyed — which element, which card, which archetype, which keyword — were spot-checked directly against the variant arrays and confirmed unchanged in substance across every variant; only sentence construction varies.
- Group Reading (`formatGroupPersonSection()`/`doGroupReading()`), the promo code system, the Daily Readings subscription / Nodal Choice flow, and the Kokoro voice narration feature were confirmed untouched by diffing this session's changes against the working tree: every changed line falls inside `doPartnershipReading()`, `getPartnershipFallback()`, the Part XXXVI explain-function block, `getFallbackReading()`, or `doReading()`'s prompt-assembly code, and nowhere else.

### 37.8 — Scope

This Part touches the same four functions Part XXXVI touched (`getFallbackReading()`, `doReading()`, `getPartnershipFallback()`, `doPartnershipReading()`) plus the explain-function block itself, and nothing else. `buildNodalChoiceSection()`'s reader-facing copy, the Group Reading, the promo code system, the Daily Readings subscription/Nodal Choice interactive mechanic's logic and storage, and the Kokoro voice narration feature are all unchanged.

---

## Part XXXVIII — Solo Reading Restructured to the Real Sacred-Geometry Progression: Flower of Life First, Everything Else Nested Within It

### 38.1 — The real, cited geometric relationships

Sacred geometry's own construction sequence is not Flower-of-Life-last; it is Flower-of-Life-first when read as a *container*, because every earlier stage is a literal, defined subset of it, not merely a step that precedes it chronologically in how a artist draws it. Verified this session against In2Infinity's own published construction sequence and the public sacred-geometry construction reference already used elsewhere in this Codex (see `references/sacred-geometry-construction.md`):

- **Vesica Piscis**: two circles, each one's center on the other's circumference, producing one shared almond-shaped overlap. Any two adjacent, overlapping circles anywhere in the finished Flower of Life form exactly this shape — the Flower is, among other things, a lattice of many Vesicae Piscis layered together.
- **Seed of Life**: the innermost seven circles of the Flower of Life (one center circle plus six surrounding it, the classic "flower" hexagonal cluster) — a proper subset of the Flower's nineteen circles, not a separate drawing.
- **Egg of Life**: derived FROM the Flower of Life by removing specific circles and the lines between them, leaving eight of the Flower's circles arranged so their centers describe a three-dimensional cube when the two-dimensional pattern is folded — again a subset/derivation, not an addition to the Flower.
- **Fruit of Life**: a defined thirteen of the Flower's nineteen circles (twelve arranged in two overlapping hexagons around one central circle) — also a proper subset.
- **Metatron's Cube**: built by connecting the Fruit of Life's thirteen circle-centers to one another with straight lines, producing thirteen nodes and seventy-eight connecting lines.
- **Tree of Life**: the ten Sephiroth and twenty-two paths of Kabbalah's own Tree map onto — and can be found nested within — Metatron's Cube's thirteen nodes and seventy-eight lines (ten of the Cube's thirteen nodes plus the three Veils above Kether, twenty-two of its seventy-eight lines carrying the Major Arcana), a real structural correspondence this Codex has used since its Metatron's Cube foundation (Codex Logic V05/V07 §"METATRON'S CUBE" block in `public/index.html`).
- **Torus**: the toroidal field is the standard sacred-geometry image for a self-sustaining cycle that is simultaneously expanding outward and contracting back inward around a shared center — the field every one of the stages above, and the numerological cycles already established elsewhere in this Codex (Personal Year → Month → Day), can be read as breathing inside.

The upshot, geometrically real and independently checkable: **the whole (the Flower of Life) already, literally, contains every part** (Vesica, Seed, Egg, Fruit, and — one derivation further — Cube and Tree). This is not a metaphor invented for this restructure.

### 38.2 — The project owner's own framing, verbatim

> "the flower is the person themselves... all of the other systems are contained within."

This is the organizing idea behind the entire restructure below: the Flower of Life page opens the reading as the whole person, and every subsequent page is something the reading discovers ALREADY NESTED WITHIN that opening whole — not a new layer being built up toward some later, bigger picture. The project owner also named the Torus and "the 9" explicitly as part of the same breathing cycle:

> the whole cycle takes place within a Torus (the "8th," the infinite, ever-expanding-and-contracting field the whole cycle breathes within), closing with "the 9" (ending, split, and rebirth into 0-and-1, the zero point and the first of the next progression).

### 38.3 — The exact new page mapping

| Page | Shape | Content |
|---|---|---|
| 1 | Flower of Life | The whole person: Life Path, Sun Sign, Ascendant, Moon, Sephirah *coordinate* (full discussion moves to Page 5), Codex Archetype, Axis Role, Birthday Number, quiz-match convergence, **plus** the Trump Card / Major Arcana mythic-identity content (moved from the old Page 2 — the person's core myth belongs on the page that IS them), Kether Bridge / dual-Trump-Card Master Number cases, W3BB Evolutionary Geometry paragraph, and the honest original-framework disclosure (§38.5 below) |
| 2 | Vesica Piscis | The Node axis (moved from old Page 1) — North/South Node signs, active-pole note, both Node Decan Cards — plus the Nodal Choice interactive section, now inserted after this page |
| 3 | Seed of Life | Gematria (total/reduced), Chaldean compound + Harmonic Check detail, Gematria Battery (moved here from the old Page 6, since it is Gematria) |
| 4 | Egg of Life | Old Page 4's Egg-of-Life field-geometry framing, **plus** Expression, Soul Urge (moved from old Page 3), and Personality Number (moved from old Page 1) — framed explicitly as one Life Path differentiating into distinct expressed facets, an egg's own defining act |
| 5 | Fruit of Life | The Sephirah placement's full, dedicated discussion (only a coordinate was named on Page 1) |
| 6 | Metatron's Cube | Element Suit (moved from old Page 2), Soul Card + Court Card + Zodiacal Court Card (moved from old Page 9), and the full Shadow Card / shadow-integration work (moved from old Page 5) — all genuinely Metatron's Cube content: suits, court cards, and the shadow path are the Cube's own Minor-Arcana-bearing 56 lines |
| 7 | Tree of Life | Old Page 6's "Hidden Architecture": adjacent Sephiroth paths, Hidden Master Number, name-field Hidden Masters, Hebrew Soul Correspondence, Harmonic Check paragraph |
| 8 | Torus | Personal Year/Month/Day (old Page 7), the Personal Day Wildcard field + its Nodal Choice connective sentence (old Page 7), **and** the relational field material (old Page 8) — both halves of "a life in motion," combined onto one page per the project owner's own mapping |
| 9 | The 9 | Purpose/legacy/career (old Page 9's Expression-and-career content, Expression itself named only as a brief callback to Page 4, not re-explained), the cross-system synthesis paragraph, and the closing AIN SOPH AUR blessing |

Every real computed fact and every existing "Explain Before Applying" call site (`trackedExplainElement`/`trackedExplainNodeAxis`/`trackedExplainMajorArcanaCard`/`trackedExplainMinorCard`, Part XXXVI/XXXVII) is preserved — only relocated. The single `createExplainTracker()` instance built at the top of `getFallbackReading()` is threaded through in the new page order exactly as it was in the old one, so first-mention/callback behavior is unaffected by the restructure (verified §38.6).

### 38.4 — Where each old fact landed (fact-preservation table)

| Old content | New page |
|---|---|
| Life Path, Sun Sign + element, Sephirah coordinate, Codex Archetype, quiz-match | Page 1 |
| Ascendant, Moon Sign, Axis Role | Page 1 |
| Birthday Number | Page 1 |
| Trump Card (letter/path/archetype), Kether Bridge, dual-Trump Master 33, `buildTrumpCardDepth()`, W3BB Evolutionary Geometry | Page 1 (moved from old Page 2) |
| Node axis, active pole, Node Decan Cards, Nodal Choice section | Page 2 (moved from old Page 1) |
| Gematria total/reduced, Chaldean compound + Harmonic Check (brief) | Page 3 |
| Gematria Battery (Standard/Ordinal/Reduced) | Page 3 (moved from old Page 6) |
| Egg-of-Life field-geometry framing | Page 4 |
| Expression, Soul Urge | Page 4 (moved from old Page 3) |
| Personality Number | Page 4 (moved from old Page 1) |
| Sephirah's full meaning/initiation discussion | Page 5 (expanded from the old Page 1 coordinate) |
| Element Suit | Page 6 (moved from old Page 2) |
| Soul Card, Court Card | Page 6 (moved from old Page 9) |
| Zodiacal Court Card | Page 6 (moved from old Page 9) |
| Shadow Card / shadow path, tc.card + Sun-sign shadow integration | Page 6 (moved from old Page 5) |
| Adjacent Sephiroth paths, Hidden Master Number, name Hidden Masters, Hebrew Soul Correspondence, Harmonic Check (full paragraph) | Page 7 (old Page 6) |
| Personal Year/Month/Day, Personal Day Wildcard, Nodal Choice connective sentence | Page 8 (old Page 7) |
| Relational field (Life Path × Trump Card partner dynamic, element attraction, compatible Life Paths, Moon/Ascendant relational, Soul/Court Card relational callback, Node axis relational callback) | Page 8 (old Page 8) |
| AIN SOPH AUR opening + Three Veils, career/purpose/legacy, cross-system synthesis paragraph, closing blessing | Page 9 |
| Expression Number (career callback) | Page 9 (brief callback only — full introduction stays on Page 4) |

Nothing was found with no place to land; every real fact/field enumerated in the restructure task is accounted for above.

### 38.5 — Honest labeling (Part XXII branch (b))

The shapes and their nesting relationships in §38.1 are real, cited sacred geometry. The SPECIFIC symbolic assignments this restructure makes — the Flower of Life representing "a whole person," the Torus representing "the infinite field a life moves through," and "the 9" representing "ending, split, and rebirth into 0-and-1" — are this Codex's own original W3BB interpretive framework, laid on top of that real geometry, and are **not** inherited ancient doctrine for those specific meanings. This Part is therefore a labeled exception under the Part XXII branch (b) standard, the same standing this Codex already gives the W3BB Evolutionary Geometry layer (Part XXX), the Nodal Choice interface (Part XXXI), and the Daily Readings subscription (Part XXXII). The disclosure is stated plainly, once, in the reader-facing copy at the top of the new Page 1 (`getFallbackReading()`) and as an explicit instruction in `doReading()`'s Page 1 AI-prompt spec, in the same tone `getW3bbEvolutionaryGeometry()`'s own reader-facing disclosure already uses.

### 38.6 — Verification (this session)

All five inline `<script>` blocks in `public/index.html` were extracted and run through `node --check` — all pass. The real `getFallbackReading()` and `doReading()` were run, unmodified, inside a Node `vm` context built from a synthetic auto-stub DOM/browser environment (a `Proxy`-backed fake `document`/`window` so the whole script executes top to bottom without a real browser), against four synthetic profiles: a plain profile, a Master Number 11 profile with `viaKetherBridge`, a Master Number 33 profile with `masterCoActive`, and a profile with no `nodeDecanCards`. All four generated a complete, coherently-ordered 9-page reading with no runtime errors. Confirmed directly in that output:
- Page order reads Flower → Vesica → Seed → Egg → Fruit → Cube → Tree → Torus → The 9, and each page's opening sentence names the shape it stands on before applying anything.
- The Explain-Before-Applying tracker still works correctly under the new order: the Fire element is fully explained on Page 1 and receives a real, distinct callback sentence on Page 8 ("That is the same real Fire quality already on the page above..."); the Node axis is fully explained on Page 2 and receives a callback on Page 8 ("That is the same North/South Node axis already unpacked above."); the Soul Card and Court Card are fully explained on Page 6 and receive callbacks on Page 8 ("This is the same Queen of Cups already unpacked earlier in this reading.").
- The profile missing `nodeDecanCards` renders Page 2 cleanly with the Node axis explanation and placements, simply omitting the Decan Card paragraph, with no crash.
- `doReading()`'s prompt was built (with a stubbed `generateReading()`) and inspected directly: all 9 "Page N — ..." instruction headers are present in the new order, and the Nodal Choice instruction (`getNodalChoicePromptInstruction()`) is correctly folded into the Page 8 (Torus) instruction when a Node orientation and Personal Day Wildcard are both present on the profile.
- `unlockFullReading()`'s `PAGE_LABELS` array and its Nodal Choice insertion point (`idx === 1`, after the Vesica Piscis page) were updated to match; `generateAndDownloadPDF()`'s `PAGE_META` array's `sys`/`layer`/`title` labels were rewritten to the new 9 stage names.
- Diffing this session's changes against `origin/master` confirms every changed hunk falls inside `getNodalChoiceReaderSentence()`'s own comment, `getFallbackReading()`, `doReading()`, `unlockFullReading()`, and `generateAndDownloadPDF()`'s `PAGE_META` — the partnership reading, Group Reading, promo code system, Daily Readings subscription/Nodal Choice mechanic's actual logic and storage, and the Kokoro voice narration feature are all byte-for-byte unchanged.

### 38.7 — Scope

This Part touches only `getFallbackReading()`, `doReading()`'s AI prompt, `unlockFullReading()`'s page-label array and Nodal Choice insertion index, and `generateAndDownloadPDF()`'s `PAGE_META` labels — plus a small number of now-stale code comments referencing old page numbers, corrected to match. It does not touch `buildTrumpCardDepth()`, `getTrumpCardNodalConnection()`, `explainElement()`/`explainNodeAxis()`/`explainMajorArcanaCard()`/`explainMinorCard()` and their tracked/callback variants, `getW3bbEvolutionaryGeometry()`, the partnership reading, the Group Reading, the promo code system, the Daily Readings subscription / Nodal Choice interactive mechanic's own logic and storage, or the Kokoro voice narration feature. Solo reading only.

---

## Part XXXIX — Group Reading Deepened: Explain-Before-Applying Extended, Explicit Life Path Labeling, the Trump Card's Return, Practical-Role Translation, and Standout Roles

### 39.1 — The project owner's own words

Recorded here verbatim, as a real product decision, not an inference:

> "I noticed in the readings still that they are still a bit repetitive, and should explain the meanings of the elements in the readings where it say's 'is one of 4 of you in this room carrying Pentacles (Earth) energy — one more voice contributing that current to the group's overall spectrum' is very vague and should go more into detail on what that actually means. I would like to see the group readings to identify for example who is the most likely to be the leader of the group, the creative initiator, etc. I know it says I am the communicator, but what exactly does that mean? ... It doesn't really mention the numerology of each person which I think would be good, to label and identify and then we also don't see much about the archetypes of the Tarot for each person either."

### 39.2 — The gap this Part closes

Part XXXV (Group Reading Reframed) correctly established the "contribution, not personal bio" framing and gave every group member a real, computed Codex Archetype × Life Path quality × elemental quality × Axis Role synthesis. Parts XXXVI/XXXVII then built a real "explain the symbol before applying it," phrasing-varied, first-mention/callback presentation layer (`ELEMENT_QUALITIES`, `explainElement()`/`trackedExplainElement()`, `explainMajorArcanaCard()`/`trackedExplainMajorArcanaCard()`, `createExplainTracker()`) — but that work was explicitly scoped to the solo and partnership readings only (Part XXXVI §36.5, Part XXXVII §37.8 both name the Group Reading as out of scope). The elemental-suit-count callout the project owner is quoting above ("is one of 4 of you... carrying Pentacles (Earth) energy — one more voice contributing that current...") was never touched by that work, and it shows: it names an element with zero explanation of what it represents, which is exactly the "very vague" defect Part XXXVI/XXXVII already fixed everywhere else in this codebase. This Part extends that same real, already-built machinery into the Group Reading for the first time, and adds four further real, grounded findings the project owner asked for directly: explicit Life Path labeling, the Trump Card's return, a concrete "what does this title actually mean as a role" translation, and a new Standout Roles section.

### 39.3 — Item 1: the element is now explained, not just named, reusing the exact Part XXXVI/XXXVII machinery

`formatGroupPersonSection()` now builds one `createExplainTracker()` per group reading (in `getGroupFallback()`, threaded through every person's section the same way `getFallbackReading()`/`getPartnershipFallback()` already thread their own tracker through every page) and calls the exact same `trackedExplainElement(tracker, element)` those two functions already call — no second, competing element-explanation mechanism was built. The first person in the reading carrying a given element gets the full, real `ELEMENT_QUALITIES`-grounded explanation (phrasing-varied, per Part XXXVII); every later person sharing that same element gets a short, real callback sentence instead of a second identical explanation. The old vague suit-count sentence itself was also tightened — the invented-feeling "one more voice contributing that current to the group's overall spectrum" trailing clause is gone, replaced with a plain "real company in this specific energy, not a stray reading" now that the element's actual meaning has already been explained earlier in that same paragraph. `doGroupReading()`'s AI prompt received the matching instruction (its rule (c)), including an explicit instruction to vary the explanation's wording across different people who share an element within the same reading, exactly matching the fallback's tracked-callback behavior.

### 39.4 — Item 2: the Life Path number and its real meaning, now explicitly labeled

A new `getLifePathTitleText(lp)` was added directly beside the existing `getLifePathQualityText(lp)` (Part XXXV), reusing the exact same real lookup precedence — `MASTER_NUMBER_DATA[lp].title` for Master Numbers 11/22/33/44, `LP_DATA[lp].title` otherwise — applied to the title field instead of the quality field. This exists because `p.lpTitle` (computed in `computePartnerProfile()`) is, for Master Numbers, actually the *reduced* single-digit LP_DATA title (e.g. Life Path 33 carries `p.lpTitle` = the Life Path 6 title, since `computePartnerProfile()`'s own `lpData` lookup never checks `MASTER_NUMBER_DATA`) — using it directly for an explicit Life Path label would have mislabeled every Master Number chart. `formatGroupPersonSection()` now includes one clearly-labeled, phrasing-varied sentence per person naming "Life Path N — [real title] — " explicitly (e.g. "Life Path 33 — The Master Teacher — is the numerology underneath that title, carrying unconditional service, compassionate wisdom, healing presence, elevated creative expression"), addressing the project owner's own words directly: "it doesn't really mention the numerology of each person which I think would be good, to label and identify." `doGroupReading()`'s prompt (rule (c)) carries the matching instruction for the AI path.

### 39.5 — Item 3: the Trump Card returns, explained, tied to contribution — and why this is not a regression to Soul/Court Card content

Part XXXV deliberately dropped the Soul Card/Court Card sentence and raw Node Decan Card narration from the Group Reading as "personal-bio content with no group-contribution angle" (§35.2 item 4) — that removal stays fully in force; neither is reintroduced by this Part. The Life Path Trump Card is different in kind, not degree: it is the same real Major Arcana path `getCodexArchetype()`'s own title already synthesizes from conceptually (both derive from the person's Life Path via `primaryPathForLP()`/`CODEX_ARCHETYPES`), so naming it explicitly does not add a new, unrelated personal fact — it makes the mythic layer already implicit in the archetype title concrete and explained, which is exactly what makes an abstract label like "The Master Communicator" land as something real rather than a floating title (the project owner's own words: "I know it says I am the communicator, but what exactly does that mean?"). `formatGroupPersonSection()` now names each person's `p.trumpPaths` (the real array of single-path entries `computePartnerProfile()` already computes — used instead of `p.lifePathTrumpCard.card` directly, since that field is a concatenated `"Card A + Card B"` string for the Master Number 33 dual-Trump-Card case that will not match any single `TAROT_PATHS`/`PATH_TABLE` entry) and explains each card via the existing `trackedExplainMajorArcanaCard()` (Part XXXVII), tied explicitly in the same sentence to "the mythic archetype underneath the title above." `doGroupReading()`'s prompt (rule (d)) carries the matching instruction, including the explicit "this is different from Soul Card/Court Card content, still excluded" clarification so the AI path does not accidentally regress toward personal bio.

### 39.6 — Item 4: `ARCHETYPE_PRACTICAL_ROLE` — what the archetype title actually looks like as a role

A new lookup table, `ARCHETYPE_PRACTICAL_ROLE`, mirrors `CODEX_ARCHETYPES`' own `[lifePath][element]` shape exactly (rather than keying by title string, since two real cells share the literal same title text — "The Illuminator" appears at both Life Path 3/Fire and Life Path 11/Fire, "The Visionary" at both Life Path 5/Air and Life Path 11/Air; keying by title alone would silently collapse those into one). All 44 real cells (11 Life Path rows × 4 elements) are filled — unlike `MINOR_LIGHT_SHADOW`'s intentionally partial table elsewhere in this codebase, this table is complete, since there are only 44 real rows and every one is reachable by a real chart. Each cell holds a short, grounded verb-phrase (`text`, e.g. for Life Path 33/Air, The Master Communicator: "the one who says the thing everyone else in the room was thinking but had not yet found the words for, or who translates one person's idea into language the rest of the group can actually act on" — directly echoing the project owner's own worked example) plus a `category` (see §39.7). `formatGroupPersonSection()` adds one further, phrasing-varied sentence per person ("In practice, that means [name] is usually [text].") completing the synthesis chain the Group Reading now carries: Codex Archetype → Life Path quality + elemental quality (Part XXXV) → explicit Life Path label (§39.4) → element explained (§39.3) → Trump Card explained (§39.5) → concrete practical-role translation (this section). `doGroupReading()`'s prompt (rule (e)) carries the matching instruction, supplying each person's own real practical-role phrase in the PROFILE block as grounding.

### 39.7 — Item 5: Standout Roles — honest, ungamed functional-role categorization

`ARCHETYPE_PRACTICAL_ROLE`'s `category` field sorts each of the 44 real archetype titles into one of five plain functional-role buckets, defined in `ROLE_CATEGORIES`:

- **Leadership / Initiation** — the drive to start things and set a direction before anyone else has committed to one (e.g. The Trailblazer, The Pioneer, The Sovereign, The Powerhouse, The Master Architect)
- **Creative / Visionary** — the drive to imagine something new and give it a shape the group had not yet seen (e.g. The Illuminator, The Storyteller, The Oracle, The Catalyst, The Visionary)
- **Steady / Anchoring** — the drive to hold structure, stability, and follow-through (e.g. The Anchor, The Foundation, The Guardian, The Steward)
- **Connective / Communicative** — the drive to link people together and carry meaning between them (e.g. The Bridge, The Weaver, The Master Communicator, The Empath)
- **Analytical / Strategic** — the drive to see the pattern underneath a situation and plan the path through it (e.g. The Strategist, The Sage, The Philosopher, The Architect)

**Honest labeling (per Part XXII's own standard):** these five categories are this Codex's own organizing scheme for grouping already-real `CODEX_ARCHETYPES` titles by their own plain English meaning. They are not a separate inherited system, not a personality-test framework borrowed from elsewhere, and not a new claim about what any individual title itself means — each title's own real meaning (already established in Part XXXV and earlier) is unchanged; this Part only sorts those 44 already-real titles into five buckets for the purpose of answering "who in this group leans toward this kind of role."

`computeStandoutRoles(profiles)` looks up each real member's category via their own real, already-computed Codex Archetype and groups them. `formatStandoutRolesSection()` then applies the exact same honesty discipline Part XXIX already established for Standout Pairings and Part XVIII §18.3 established for every relational finding in this Codex:

1. **No invented scoring.** Category membership is a direct, binary lookup against each person's own real archetype — never a numeric score, percentage, or ranking.
2. **No forced single winner.** When two or more real members share a category, all are named plainly as a real tie ("A real tie — X, Y — all lean toward..."). The only distinguishing angle ever applied is Axis Role, and only when the group's real data actually splits on it — a Vertical-Integrator-flavored leader and a Horizontal-Architect-flavored leader are named as two genuinely different real flavors of the same category, never as an invented tiebreaker forcing one "true" winner. Verified directly in this session's synthetic verification (§39.8): a 3-person group with Life Path 1/Fire (vertical, The Trailblazer) and Life Path 22/Fire (horizontal, The Master Architect) both in Leadership/Initiation produced exactly this split-flavor sentence rather than picking one.
3. **Absence is named plainly.** When no real member falls into a category, the section says so directly ("No one in this group leans strongly toward [category] — an honest, ordinary outcome, not a gap") rather than omitting the category silently or stretching a weak match to fill it. Verified directly in this session's synthetic verification (§39.8): a real 6-person group produced two genuinely empty categories (Creative/Visionary and Analytical/Strategic), proving this is a real, reachable outcome under this design, not a theoretical claim.

This is additive: a new `computeStandoutRoles()`/`formatStandoutRolesSection()` pair, called from `getGroupFallback()` (added as a `standoutRolesText`/`standoutRoles` field on the returned content object) and from `doGroupReading()`'s prompt as a new `===STANDOUT_ROLES_START===`/`===STANDOUT_ROLES_END===` section (parsed by `parseGroupReadingSections()`, which now requires this section the same way it already requires OVERVIEW/PAIRINGS/BLESSING, per this codebase's existing "no silent gaps" convention for the AI path). `unlockFullGroupReading()`'s on-screen render and `generateGroupPDF()`'s PDF layout (a new page, inserted between the Group Overview and the per-person pages) both display it. Nothing about `computeGroupOverview()`, `formatGroupOverviewSection()`, `computeStandoutPairings()`, or `formatStandoutPairingsSection()` was altered — Standout Roles is a clean sibling addition, not a rewrite of the existing Overview/Pairings mechanism.

### 39.8 — Verification (this session)

All five inline `<script>` blocks in `public/index.html` were extracted and run through `node --check` — all pass. `getGroupFallback()`, `computeGroupOverview()`, and the new `computeStandoutRoles()`/`formatStandoutRolesSection()` were run, unmodified, inside a Node `vm` context built from a synthetic `Proxy`-backed auto-stub `document`/`window` (so the whole script executes top to bottom with no real browser), against a real synthetic 6-person group with varied Life Paths, elements, and Axis Roles, deliberately including the project owner's own described case (a real Life Path 33 + Air person, found by brute-force search over real birthdates and confirmed to land on The Master Communicator via the real, unmodified `getCodexArchetype()`). Confirmed directly in the real, quoted output (full text reproduced in this session's PR body):

- **The element is genuinely explained, not just named.** Heather's Air Sun receives the full real explanation ("Air belongs to astrology's four classical elements, and what it represents is communication, ideas, and the connective thread that carries meaning from one person to the next"); Solveig and Yara, who share the same Air element later in the same reading, each receive a distinct real callback sentence instead of the identical explanation repeated ("This is the Air current this reading already unpacked earlier, now in a new setting" / the same idiom in different wording) — the non-repetition mechanism holds across the new content exactly as it already does for the pre-existing sentences.
- **"Communicator" is genuinely unpacked into something concrete.** Heather's real output reads: "In practice, that means Heather is usually the one who says the thing everyone else in the room was thinking but had not yet found the words for, or who translates one person's idea into language the rest of the group can actually act on" — directly answering the project owner's own question, in concrete, practice-level language, not an abstract label.
- **The Trump Card shows up woven into the contribution framing, not bolted on.** Heather's Life Path 33 correctly produced the real dual-Trump-Card case ("The World and The Lovers"), each explained via the real `trackedExplainMajorArcanaCard()` (Golden Dawn keywords "Completion" and "Discernment"), introduced as "the mythic archetype underneath the title above" rather than a separate, disconnected fact. Marcus's and Dante's shared The Hermit Trump Card correctly triggered the tracked-callback path for the second and third mention.
- **The Life Path is explicitly labeled.** Every person's section carries a plain "Life Path N — [real title] —" sentence (e.g. "Life Path 33 — The Master Teacher —", "Life Path 1 — The Pioneer —"), using the real title (correctly the Master Number title for Life Path 33/11/22, not a reduced single-digit substitute).
- **Standout Roles holds the honesty bar under real data, not just in theory.** The real 6-person group produced two genuinely empty categories (Creative/Visionary, Analytical/Strategic — both stated plainly as "an honest, ordinary outcome, not a gap") and two genuine ties (Leadership/Initiation: Priya and Yara; Connective/Communicative: Heather, Marcus, and Solveig) with no forced single winner. A second, separate 3-person synthetic test (Life Path 1/Fire, vertical, The Trailblazer, and Life Path 22/Fire, horizontal, The Master Architect, both in Leadership/Initiation) confirmed the axis-flavor-split branch produces the intended "two genuinely different flavors of it" sentence rather than an arbitrary pick.
- Diffing this session's changes against `origin/master` confirms every changed hunk falls inside the new `ARCHETYPE_PRACTICAL_ROLE`/`ROLE_CATEGORIES`/`getArchetypePracticalRole()`/`computeStandoutRoles()`/`formatStandoutRolesSection()` block, `getLifePathTitleText()`, `formatGroupPersonSection()`, `getGroupFallback()`, `doGroupReading()`, `parseGroupReadingSections()`, `generateGroupPDF()`, and `unlockFullGroupReading()`'s render function — the solo reading, the partnership reading, the promo code system, the Daily Readings subscription / Nodal Choice interactive mechanic, and the Kokoro voice narration feature are all byte-for-byte unchanged.

### 39.9 — Scope

This Part touches only the Group Reading: `formatGroupPersonSection()`, `getGroupFallback()`, `doGroupReading()`'s AI prompt, `parseGroupReadingSections()`, `generateGroupPDF()`, `unlockFullGroupReading()`'s render function, plus the new `ARCHETYPE_PRACTICAL_ROLE`/`ROLE_CATEGORIES`/`getArchetypePracticalRole()`/`computeStandoutRoles()`/`formatStandoutRolesSection()` block and the new `getLifePathTitleText()` helper. It reuses, but does not modify, `ELEMENT_QUALITIES`, `explainElement()`/`trackedExplainElement()`, `explainMajorArcanaCard()`/`trackedExplainMajorArcanaCard()`, `createExplainTracker()`, `getLifePathQualityText()`, `getCodexArchetype()`, `CODEX_ARCHETYPES`, `AXIS_ROLES`, `TAROT_PATHS`, and `PATH_TABLE` — all read from, never edited. The solo reading (`doReading()`/`getFallbackReading()`), the partnership reading (`doPartnershipReading()`/`getPartnershipFallback()`), the promo code system, the Daily Readings subscription / Nodal Choice interactive mechanic (its logic, storage, and entitlement checks), and the Kokoro voice narration feature are all completely untouched by this Part.

---

## Part XL — Group Reading Fixed: Full Name Once, First Name Ever After

### 40.1 — The bug

The Group Reading's per-person intake field (`.group-person-name`, in `groupPersonRowHtml()`) carried the placeholder "Full name" and asked the buyer to type each group member's full name — first, middle, and last. But `computeGroupPersonProfile()` passed that raw full-name string straight into `computePartnerProfile(person.firstName, ...)` as the `firstName` parameter, and `computePartnerProfile()` stored it back verbatim as `firstName: firstName` in the returned profile, with no splitting anywhere in between. Every place in the Group Reading that reads `p.firstName` — `formatGroupPersonSection()`, `computeStandoutPairings()`/`formatPairFact()`, `computeGroupOverview()`'s shared-Sephirah and shared-Trump-Card member lists, `computeStandoutRoles()`/`formatStandoutRolesSection()`, the `doGroupReading()` AI prompt and its PROFILE lines, `showGroupSuccessScreen()`, `unlockFullGroupReading()`, and `generateGroupPDF()`'s per-person page headers — was therefore printing each person's entire typed name, every single time, never just their first name.

The solo reading's own intake (`hook-fullname`) already solves this correctly: it explicitly runs `var firstName = fullBirthName.split(' ')[0];` before building the narrative profile, while still passing the full `fullBirthName` string into every name-derived calculation (`calcExpression`, `calcSoulUrge`, `calcGematria`, `calcPersonality`, `hiddenMasterAudit`, `calcChaldeanName`, `calcGematriaBattery`) so those stay accurate. The Group Reading never had this split — it is the one narrative surface in the whole app that skipped a step the solo reading had already solved.

### 40.2 — The project owner's own words

> "It should just say their full name one time and then anytime past the first time, it should just say their first name when referring to them after that."

### 40.3 — The fix

`computeGroupPersonProfile()` now does the split itself, mirroring the solo reading's exact pattern:

```js
function computeGroupPersonProfile(person) {
  var fullName = person.firstName;
  var p = computePartnerProfile(fullName, person.month, person.day, person.year);
  p.fullName = fullName;
  p.firstName = fullName.split(' ')[0];
  p.elementalNodePolarity = (p.node && p.node.northSign) ? getElementalNodePolarity(p.node.northSign) : null;
  return p;
}
```

The real, full entered name is still fed into `computePartnerProfile()` — every name-derived calculation inside it (Expression, Soul Urge, Personality, Gematria, Chaldean compound, Hidden Master name-audit, Gematria Battery, Hebrew Soul Correspondence) still computes off the true full name, exactly as before. Only the profile object's own `firstName` field is narrowed afterward, to the first token, and a new `fullName` field carries the untouched original. Because every existing narrative call site already referenced `p.firstName`, this one change alone fixed every downstream call site automatically — no other function's internal logic changed.

The one legitimate full-name mention happens at each person's true first appearance in the whole reading — the opening "Welcome, X, Y, Z" line — which now reads `p.fullName` instead of `p.firstName`, in both `getGroupFallback()`'s `intro` field and `parseGroupReadingSections()`'s equivalent (the intro is synthesized by the app itself in both the fallback and the AI-success path, never by the AI's own delimited output). Every other place — each person's own `PERSON_<name>` section, cross-references to them from other people's sections, the Standout Roles section, the Standout Pairings section, the on-screen per-person headers in `unlockFullGroupReading()`, and `generateGroupPDF()`'s per-person page headers (`pageHeader(p.firstName.toUpperCase(), p.firstName, PURPLE)`) — now uses `p.firstName`, confirmed correct by reading each call site individually after the fix, not assumed.

`doGroupReading()`'s AI-prompt path was updated to match: each PROFILE line now reads `p.firstName + ' (full name: ' + p.fullName + ')'` instead of bare `p.firstName`, and a new explicit "NAME RULE" instruction was added to the prompt, telling the model to use each person's full name exactly once, at the opening welcome line only, and first name everywhere else — matching the fallback's own behavior exactly, in case the AI path is ever used for the group reading in the future.

Two small clarity additions, made after checking whether they were needed rather than skipping the question: the group intake field's placeholder now reads "Full name (for accurate numerology — only their first name appears in the reading)" instead of a bare "Full name," so the buyer understands why a full name is being asked for even though the reading itself will only ever say a first name after the opening line; and `showGroupSuccessScreen()`'s "notify owner" email now lists each person's real full name (an internal fulfillment record, not part of the reading's own narrative convention, so it correctly keeps the full name rather than adopting the reading's first-name-only rule).

### 40.4 — Verification (this session)

All five inline `<script>` blocks in `public/index.html` were extracted and run through `node --check` — all pass.

A synthetic 4-person group with real multi-word names (Heather Nicole Feist, Marcus James Delgado, Priya Anjali Sharma, Dante Alejandro Cruz) was run through the real, unmodified `computeGroupProfiles()` and `getGroupFallback()` inside a Node `vm` context loading the app's actual combined script with a generous DOM/timer/canvas stub (no real browser). The real generated intro read:

> "Welcome, Heather Nicole Feist, Marcus James Delgado, Priya Anjali Sharma, Dante Alejandro Cruz. What follows is not 4 separate readings sitting side by side — it is one real, computed picture of how this group's numbers, signs, and paths actually distribute, plus the handful of pairings between you that are genuinely worth naming."

Programmatically counting occurrences of each person's exact full-name string across the intro, the Group Overview text, the Standout Roles text, every person's section, the Standout Pairings text, and the blessing confirmed every one of the four full names appears **exactly once**, and that occurrence is in the intro — never inside any person's own `PERSON_<name>` section body, a cross-reference from someone else's section, Standout Roles, or Standout Pairings. Two real per-person sections, quoted in full, confirmed only first-name usage throughout, including cross-references ("Where Heather's Water current already set a tone for this room through the suit of Cups, Marcus's own Water Sun runs that exact same suit...").

The `doGroupReading()` AI-prompt path was exercised directly (with `generateReading()` forced to reject, so it fell through to the fallback as designed) and the real captured prompt text was inspected: the PROFILE line for the first person read `Heather (full name: Heather Nicole Feist): Life Path 9 — ...`, and the new NAME RULE instruction was present verbatim ahead of the existing "This reading is deliberately NOT a set of personal mini-readings" instruction.

Numerology accuracy was verified by calling the real calculation functions directly, both ways, for the same person:

| Function | Full name ("Heather Nicole Feist") | First name only ("Heather") |
|---|---|---|
| `calcExpression` | 11 | 11 |
| `calcSoulUrge` | 9 | 11 |
| `calcGematria` | total 182, reduced 11 | total 65, reduced 11 |
| `calcChaldeanName` | compound 72, reduced 9 | compound 27, reduced 9, archetype "The Wand of Power" |

The profile object's own stored `expression`, `soulUrge`, `gematria`, and `chaldean` fields were then confirmed to match the **full-name** column exactly (not the first-name column) — proving `computeGroupPersonProfile()` still feeds the true full name into every calculation, and that only the narrative `firstName` field was narrowed, never the numerology itself.

Diffing this session's changes against `origin/master` confirms every changed hunk falls inside `computeGroupPersonProfile()`, `getGroupFallback()`'s intro line, `doGroupReading()`'s PROFILE-line construction and prompt text, `parseGroupReadingSections()`'s intro line, `groupPersonRowHtml()`'s placeholder text, and `showGroupSuccessScreen()`'s owner-email name list — the solo reading, the partnership reading, the promo code system, the Daily Readings subscription / Nodal Choice interactive mechanic, and the Kokoro voice narration feature are all byte-for-byte unchanged.

### 40.5 — Scope

This Part touches only the Group Reading, and specifically only which name string is substituted into templates that were already correct: `computeGroupPersonProfile()`, `getGroupFallback()`'s intro, `doGroupReading()`'s PROFILE lines and prompt instructions, `parseGroupReadingSections()`'s intro, `groupPersonRowHtml()`'s placeholder, and `showGroupSuccessScreen()`'s owner-notification name list. `computePartnerProfile()`'s own internal calculation logic was not touched — only how `computeGroupPersonProfile()` calls it and what it does with the returned profile's name fields afterward. Every existing synthesis, phrasing-variation mechanism, and `createExplainTracker()`-based first-mention/callback behavior from Parts XXXV and XXXIX keeps working exactly as before — this fix changes nothing about those templates or that logic, only which name string fills them in. The solo reading and the partnership reading are unaffected: the solo reading already had this exact split (`fullBirthName.split(' ')[0]`) before this session began, and the partnership reading never had this bug in the first place, since its own intake only ever asks for a first name.

## Part XLI — Heart (Kokoro) Becomes the Default Voice for Every Visitor, Not an Admin-Only Opt-In

### 41.1 — The problem the project owner actually raised

Part XXXIII built the Enhanced Free Voice (Kokoro-82M/Heart) tier, and Part XL's session (immediately prior to this one) fixed a bug in its mid-reading retry behavior. Both of those Parts, and the original design itself, gated Kokoro behind `localStorage.getItem('enhanced_voice_enabled') === 'true'` — a flag only ever set to `'true'` by an admin manually clicking "Enable & Download Voice" inside the admin panel, itself hidden behind a 5-tap trigger only the project owner uses. In the project owner's own words:

> "I am satisfied with just the one voice of 'Heart'... My real question is that since I have to select the voice from the admin panel personally, how will it work for other people[']s voice option that don't have access to the admin panel to choose a voice?"

The honest answer, once traced through the actual code: it never did. No real customer has ever seen the admin panel, so no real customer has ever clicked "Enable & Download Voice," so `isKokoroReady()` has always evaluated `false` for every paying visitor, every single time, regardless of how much better Kokoro sounds than the plain browser voice. Every customer who has ever heard a narrated reading heard the robotic default `speechSynthesis` voice — the exact voice the project owner built Kokoro to replace — never Heart. The project owner confirmed they want Heart to be the universal default for every visitor automatically, with the admin panel simplified since the separate named-voice picker was only ever a manual admin fallback layer that no longer earns its place now that Heart is the default for everyone, and the native browser voice kept only as a silent, automatic, invisible fallback — never a user-facing choice.

### 41.2 — The fix: flip the default, keep the lazy-load mechanism

Nothing about `loadKokoroVoice()`, `kokoroSpeak()`, or its Part XL retry-then-narration-scoped-fallback logic (`MAX_ATTEMPTS_PER_CHUNK`) changed — those were proven correct last session and this Part reuses them exactly as they stood. What changed is *who* triggers the load and *when*:

- **New helper `isKokoroEnabledPref()`** replaces the old inline `localStorage.getItem('enhanced_voice_enabled') === 'true'` check with `localStorage.getItem('enhanced_voice_enabled') !== 'false'`. This single operator flip is the entire mechanism for making the default "on": a brand-new visitor's browser has never called `setItem` on this key at all, so `getItem()` returns `null`, and `null !== 'false'` evaluates `true` — enabled, with zero stored state and zero admin action. Only an explicit, saved `'false'` (the admin panel's own disable click) now evaluates to "off." `isKokoroReady()` — the gate `browserSpeak()` actually checks before speaking — still additionally requires `!_kokoroInitFailed && !!_kokoroTTS`, unchanged in shape from before, just built on top of the new preference helper instead of the old one.
- **`browserSpeak()` is now the real trigger point for the download**, not an admin button. It was `function browserSpeak(text, onEnd) { if (isKokoroReady()) {...} else {...} }`; it is now `async function browserSpeak(text, onEnd)`, and its very first action — before deciding which voice speaks — is: if the admin preference allows Kokoro (default: yes) and it hasn't already failed or already loaded this session, `await loadKokoroVoice()`. This is the exact same `loadKokoroVoice()` function the old "Enable & Download Voice" button used to call from a click handler — reused verbatim, not rewritten — just called automatically from the one function every narration call site in this file already routes through (`_fallbackSpeakLong` → `browserSpeak`, `speakText` → `browserSpeak`, both admin test buttons). On success, `_kokoroTTS` is set, `isKokoroReady()` now returns `true`, and `kokoroSpeak(text, onEnd)` runs. On failure, `loadKokoroVoice()`'s own existing `.catch()` (unchanged from Part XXXIII/Part XL) sets `_kokoroInitFailed = true` and rejects; `browserSpeak()`'s `try/catch` around the `await` swallows that rejection silently (already logged once inside `loadKokoroVoice()` itself) and falls through to `_nativeBrowserSpeak()` — no error dialog, no broken narration, exactly the same failure-safe posture the feature has had since Part XXXIII, now exercised automatically instead of only from a manual click.
- **Timing (which trigger point was chosen, and why).** This app already narrates the free reveal-screen reading automatically the moment its result renders (`speakLongText(spokenText, ...)`, called directly from the reveal-render function — not behind a Play/Listen button the visitor has to click). That means the *existing* architecture already puts the first real `browserSpeak()` call at exactly the right moment: after a visitor has entered their real birth info and reached a real reading result, never on a bare page load before anyone has done anything. Rather than invent a new, earlier proactive-download trigger point (e.g. hooking a "confirmed/purchased" event that does not exist as a single generic hook in this codebase — the free reveal, the paid unlock, the partnership reading, and the group reading each build and reveal their own results independently), this Part relies on `browserSpeak()`'s own await-before-speaking behavior as the single trigger, reusing the lazy-load pattern exactly as designed. The accepted, honestly-disclosed tradeoff: the very first sentence of narration in a session pauses for a real, one-time ~90MB download before it plays (variable, network-dependent — likely single-digit seconds on a good connection, longer on a slow one). Every later `browserSpeak()` call in that same session — the rest of that reading's chunks, and every subsequent reading — finds `_kokoroTTS` already truthy and skips the await entirely, speaking instantly. No download of any kind happens before a real reading result exists on screen.
- **Admin panel toggle, flipped and reframed.** "⬇ Enable & Download Voice" (opt-in, default off) is replaced by "✅ Enabled for All Visitors — Click to Disable" (default on, since `isKokoroEnabledPref()` now defaults `true`). Clicking it while enabled sets `enhanced_voice_enabled` to `'false'` and reframes the status text around falling every visitor back to the plain browser voice; clicking it while disabled sets it back to `'true'`, resets `_kokoroInitFailed` (an explicit re-enable means "try again," mirroring the same reasoning Part XXXIII's original enable-click already used), and explains the download will happen automatically next time a reading narrates. The "Test Voice" button is unchanged in mechanism — it still calls `loadKokoroVoice()` then `_kokoroSpeakChunk()` directly — only its voice name source changed (see below).

### 41.3 — Admin panel simplified: the Free Browser Voice picker layer removed

Per the project owner's explicit "narrow it down... get rid of a lot of the excess... with all of the other voices" direction, the entire "Free Browser Voice" admin section — the `<select id="browser-voice-select">` populated from the visitor's own installed OS voices, `populateBrowserVoiceSelect()`, the Save/Test buttons at `browser-voice-save-btn`/`browser-voice-test-btn`, and `findExplicitBrowserVoice()`'s explicit-override lookup via `localStorage.getItem('browser_voice_name')`/`browser_voice_lang` — was deleted outright. This was a manual, admin-only fallback-voice-picking layer sitting on top of the automatic "Aria" search; now that Heart is the universal default and the native voice is purely an invisible automatic fallback, a picker for which *native* voice to fall back to no longer earns its place. Every call site of the three removed identifiers/keys was read before deletion to confirm nothing else depended on them: `findExplicitBrowserVoice()` had exactly one caller, inside `_nativeBrowserSpeak()`'s `speakWithVoices()`, where `_resolvedBrowserVoice = findExplicitBrowserVoice(voices) || pickAriaVoice(voices)` is now simply `_resolvedBrowserVoice = pickAriaVoice(voices)` — `pickAriaVoice()`'s own automatic name-search fallback (unchanged, byte-for-byte) is untouched and remains the sole, fully automatic mechanism for choosing which native browser voice narrates when Kokoro isn't. `browser_voice_name`/`browser_voice_lang` had no other readers or writers anywhere in the file once the admin section's own save/populate functions were removed.

Also removed, per the same direction and the project owner's stated satisfaction with "just the one voice of Heart": the Kokoro named-voice `<select id="kokoro-voice-select">` (all 28 US/British voice options) and its `change` listener writing to `enhanced_voice_name`. `getKokoroVoiceName()` — previously `localStorage.getItem('enhanced_voice_name') || 'af_heart'` — now unconditionally returns `'af_heart'`. This is the simpler of the two options the task considered (keep a dropdown defaulted to Heart, vs. remove the dropdown and hardcode Heart); the removal was chosen because it directly serves the "get rid of excess" instruction and there is no dropdown left to leave dangling. `loadKokoroVoiceSettings()` no longer restores a saved-voice select value (there is nothing to restore); it only calls `updateKokoroEnableButton()`.

The Narration Speed slider (`browser-voice-rate-slider`/`readBrowserVoiceRate()`) was kept exactly as it was, unchanged in id, markup, or logic — it still applies to both Heart (`kokoroSpeak()`'s `rate` parameter) and the native fallback (`_nativeBrowserSpeak()`'s `utter.rate`), and was only relocated in the HTML to sit inside the single remaining Voice Settings block instead of the now-deleted Free Browser Voice block.

The admin panel's Voice Settings intro copy was rewritten to state the new reality plainly: Heart is the real narration voice every visitor now hears automatically, the browser's own built-in voice is kept only as an invisible safety-net fallback, and the panel exists to monitor/toggle/test that — not to configure a personal preference.

### 41.4 — Verification (this session)

Both inline `<script>` blocks in `public/index.html` (extracted programmatically) were run through `node --check` — both pass with no syntax errors.

**Tracing the real code path for a brand-new visitor with zero localStorage state, narrating for the first time:**

1. `speakLongText()`/`speakIntroText()`/`speakText()` all funnel into `_fallbackSpeakLong()` or call `browserSpeak()` directly; `_fallbackSpeakLong()` calls `browserSpeak(fullText, onFinish)` when `window.speechSynthesis` exists (true in essentially every real browser).
2. `browserSpeak(text, onEnd)` is now `async`. Its first check: `if (isKokoroEnabledPref() && !_kokoroInitFailed && !_kokoroTTS)`. For a brand-new visitor, `localStorage.getItem('enhanced_voice_enabled')` is `null` (nothing has ever been set) — `isKokoroEnabledPref()` returns `null !== 'false'` → `true`. `_kokoroInitFailed` is a plain module-level JS variable initialized to `false` on every page load — never persisted — so it is `false`. `_kokoroTTS` is `null` on a fresh page load. All three conditions hold, so `await loadKokoroVoice()` runs.
3. `loadKokoroVoice()` (unchanged function, Part XXXIII) dynamically imports `kokoro-js` from the pinned CDN URL and calls `KokoroTTS.from_pretrained(KOKORO_MODEL_ID, {dtype:'q8', device:'wasm', ...})`, downloading the ~90MB quantized weights. On success it sets `_kokoroTTS = tts` and resolves.
4. Back in `browserSpeak()`, the `await` completes without throwing, so execution reaches `if (isKokoroReady()) { kokoroSpeak(text, onEnd); return; }`. `isKokoroReady()` now evaluates `!_kokoroInitFailed (true) && isKokoroEnabledPref() (true) && !!_kokoroTTS (true)` → `true`. `kokoroSpeak(text, onEnd)` runs, narrating with Heart (`getKokoroVoiceName()` returns `'af_heart'` unconditionally).
5. No admin panel was opened, no button was clicked, and no localStorage key was ever written by the visitor or on their behalf before this happened.

**The "never set" vs. "explicitly disabled" distinction**, shown concretely: `localStorage.getItem('enhanced_voice_enabled')` returns `null` for a key that was never set and the literal string `'false'` for a key the admin explicitly disabled. `isKokoroEnabledPref()`'s `!== 'false'` comparison evaluates `null !== 'false'` → `true` (enabled) and `'false' !== 'false'` → `false` (disabled) — and `'true' !== 'false'` → `true` (still enabled, matching the admin's own explicit re-enable). All three real cases were traced against the literal comparison, not assumed.

**Failure path re-verified under the new "always attempt" default:** if `loadKokoroVoice()`'s `import()` or `KokoroTTS.from_pretrained()` rejects (unsupported browser, no `WebAssembly`, network failure, CDN unreachable, etc.), its own `.catch()` — untouched since Part XXXIII — sets `_kokoroInitFailed = true` and the promise rejects. `browserSpeak()`'s `try { await loadKokoroVoice(); } catch (e) {}` catches that rejection with an empty handler (the error is already logged once inside `loadKokoroVoice()` itself, so no duplicate log here), execution falls through to `if (isKokoroReady())` which now evaluates `false` (`_kokoroInitFailed` is `true`), and `_nativeBrowserSpeak(text, onEnd)` runs instead — silently, with no dialog and no broken narration. Every subsequent `browserSpeak()` call in the same page session short-circuits the very first condition (`!_kokoroInitFailed` is now `false`) and skips straight to `_nativeBrowserSpeak()` without attempting another download — a genuine, session-wide "stop trying" state, exactly as Part XL's fix intended it to mean, now reached automatically instead of only from a failed manual click. A fresh page load resets `_kokoroInitFailed` to `false` again (it is never written to `localStorage`), so the next visit — or the same visitor reloading — gets a real, fresh attempt.

**Dangling-reference check for the removed Free Browser Voice picker:** grepped the full file for `browser-voice-select`, `browser-voice-save-btn`, `browser-voice-test-btn`, `browser-voice-status`, `kokoro-voice-select`, `browser_voice_name`, `browser_voice_lang`, `enhanced_voice_name`, `findExplicitBrowserVoice`, `populateBrowserVoiceSelect`, and the old `loadBrowserVoiceSettings()` function name — zero matches remain anywhere in `public/index.html`. `showAdminPanel()`'s own call site was updated from `loadBrowserVoiceSettings()` to `loadBrowserVoiceRateSlider()` (the one piece of that function's job — the Narration Speed slider — that still exists) plus the unchanged `loadKokoroVoiceSettings()` call. `pickAriaVoice()` itself, and its one remaining caller inside `_nativeBrowserSpeak()`, are confirmed present and unchanged.

**Solo reading, partnership reading, Group Reading, promo codes, and the subscription/Nodal Choice mechanics confirmed unaffected:** `git diff origin/master -- public/index.html` was inspected hunk-by-hunk. Every changed hunk falls inside the Voice Settings admin-panel HTML block, the Kokoro/native-voice JS block (`findExplicitBrowserVoice()` removal, `isKokoroEnabledPref()`/`isKokoroReady()`/`getKokoroVoiceName()`, `browserSpeak()`, `_nativeBrowserSpeak()`'s `speakWithVoices()`), and the admin-panel JS block (Free Browser Voice section removal, Kokoro admin settings rewrite, `showAdminPanel()`'s two call-site lines). Grepping the diff for `getFallbackReading`, `doReading`, `getPartnershipFallback`, `doPartnershipReading`, `formatGroupPersonSection`, `doGroupReading`, `promo`, `Nodal`, `subscription`, and `generateAndDownloadPDF` against only the changed (`+`/`-`) lines returns zero matches — none of those systems were touched.

**What could not be verified in this sandbox, stated plainly rather than faked:** real in-browser WASM audio generation through `kokoro-js`/`onnxruntime-web` — actually downloading the ~90MB model from Hugging Face's CDN, running real WASM inference, and hearing real audio — cannot be exercised here, for the same reason noted in Part XXXIII and Part XL's own verification sections: this sandbox has no real browser runtime or audio device, and its network egress proxy does not provide unrestricted access to arbitrary CDN/model hosts. Everything above was verified by reading and tracing the actual code paths, literal `localStorage` value comparisons, and diff output — not by simulating a real download or a real speaker.

### 41.5 — Manual test checklist (must be done in a real browser before this ships)

1. **Fresh visitor, default-on:** open the app in a private/incognito window (guarantees empty `localStorage`). Do not open the admin panel. Enter real birth info and reach the free reveal reading. Confirm: (a) narration starts automatically, (b) there is a brief pause before the very first sentence plays (the one-time ~90MB Kokoro download), (c) the voice that plays is the natural-sounding Heart voice, not the robotic default OS voice. Open DevTools → Network to confirm a request to the `kokoro-js` CDN URL and Hugging Face's model host actually fired.
2. **Cache confirmation:** without clearing site data, reload the page and start a second reading (or replay the same one). Confirm narration now starts with no download pause — Heart should speak immediately.
3. **Admin disable:** open the admin panel (5-tap trigger), find the toggle now reading "✅ Enabled for All Visitors — Click to Disable," click it. Confirm the status text explains the fallback. In a *fresh* private window (or after clearing site data), start a new reading and confirm it now narrates with the plain default browser voice with no download attempt at all (check Network tab: no Kokoro/Hugging Face request should fire).
4. **Admin re-enable:** click the toggle again ("▶ Enable for All Visitors"), confirm the status text updates, then trigger a new reading and confirm Heart downloads and plays again.
5. **Test Voice button:** with Kokoro enabled, click "Test Voice" in the admin panel and confirm it plays the sample line in Heart's voice (downloading first if not already loaded this session).
6. **Narration Speed slider:** adjust it, then trigger narration on both a fresh (Kokoro) and a disabled-Kokoro (native) session and confirm the speed audibly changes in both cases.
7. **Simulated failure:** block the CDN host or the Hugging Face model host at the network level (e.g. via browser DevTools request blocking) and confirm narration still plays — falling back to the plain browser voice with no visible error to the visitor — and that the admin panel's status text reflects a load failure without breaking anything else in the reading flow.
8. **Regression spot-check:** run through a solo reading, a partnership reading, and a Group Reading end to end, and redeem a promo code, confirming none of those flows behave any differently than before this change (this Part's diff does not touch their code, but a real click-through is the only way to confirm nothing in the surrounding page broke).

### 41.6 — Scope

This Part touches only the narration voice tier's default-on/off gating and trigger point (`isKokoroEnabledPref()`, `isKokoroReady()`, `getKokoroVoiceName()`, `browserSpeak()`), the removal of the admin-only Free Browser Voice picker and Kokoro named-voice dropdown (`findExplicitBrowserVoice()`, `populateBrowserVoiceSelect()`, their DOM elements and event listeners, and the `browser_voice_name`/`browser_voice_lang`/`enhanced_voice_name` localStorage keys), the admin panel's Voice Settings section markup and copy, and `showAdminPanel()`'s two Voice-Settings-related call sites. It does not touch `loadKokoroVoice()`, `kokoroSpeak()`'s chunk-generation/retry/timeout logic (`_kokoroSpeakChunk()`, `MAX_ATTEMPTS_PER_CHUNK`, `RETRY_DELAY_MS`), `_kokoroChunkText()`, `pickAriaVoice()`'s own automatic search logic, `readBrowserVoiceRate()`, the Narration Speed slider's behavior, `_withTimeout()`, or any part of the solo reading, the partnership reading, the Group Reading, the promo code system, or the Daily Readings subscription / Nodal Choice interactive mechanic's logic, storage, or entitlement checks — all confirmed byte-for-byte unchanged by diffing this session's changes against `origin/master`.

---

## Part XLII — Fixing the Real Pause: Pipelining Kokoro's Chunk Generation With Playback

### 42.1 — The problem the project owner actually reported

Immediately after Part XLI shipped, testing surfaced a real, previously-hidden defect: "the voice is very slow to start, and then long pauses in between." Both halves of that report trace to the same root cause, once read against `kokoroSpeak()`'s actual control flow (unchanged since Part XXXIII/Part XL, and explicitly untouched by Part XLI's own scope note above): each chunk was generated, THEN played to completion, THEN — only after playback fully finished — did generation of the next chunk even begin. `generate()` is real, sequential CPU-bound WASM inference (documented as such since Part XXXIII), not instant; every chunk boundary in every reading was producing an audible silent gap exactly as long as that chunk's own generation time, because generation and playback never overlapped even once. "Slow to start" was the same mechanism applied to the very first chunk: nothing could play until a full 400-character chunk finished generating.

### 42.2 — The fix: pipeline generation ahead of playback

`_kokoroSpeakChunk()` — previously one function that both generated and played a chunk, called and fully awaited once per chunk in a loop — is split into two pieces: `_kokoroGenerateChunk()` (generation only, returns `{audio, url}`) and `_kokoroPlayGeneratedAudio()` (playback only, given an already-generated `{audio, url}`). `_kokoroSpeakChunk()` itself is kept, now just composing the two in sequence, as a convenience wrapper for the admin panel's single-shot Test Voice button (which has no next chunk to pipeline against). A new `_kokoroGenerateChunkWithRetry()` carries the exact same `MAX_ATTEMPTS_PER_CHUNK`/`RETRY_DELAY_MS` retry discipline Part XL built, just wrapped around the generation-only half.

`kokoroSpeak()`'s loop is restructured around this: before the loop starts, chunk 0's generation is kicked off (`var pendingNext = _kokoroGenerateChunkWithRetry(chunks[0], ...)`, not awaited yet). On each iteration, it `await`s `pendingNext` to get the chunk it's about to play — and, critically, immediately kicks off generation of chunk `i+1` (`pendingNext = _kokoroGenerateChunkWithRetry(chunks[i+1], ...)`) **before** awaiting playback of chunk `i`. That means chunk `i+1`'s CPU-bound generation now runs concurrently with chunk `i`'s audio actually playing, instead of only starting once chunk `i`'s audio has already finished. As long as generation of a chunk takes less wall-clock time than that same chunk's audio takes to play back (true for any chunk short enough to sound natural — a few seconds of speech vs. sub-second-to-low-single-digit-second WASM inference on this size of chunk, per Part XXXIII's own timing notes), the gap between chunks collapses to zero: chunk `i+1`'s audio is already sitting in memory, ready to hand to `_kokoroPlayGeneratedAudio()`, the instant chunk `i` finishes.

`_kokoroChunkText()` additionally now caps only the FIRST chunk at 150 characters (down from the uniform 400 every chunk used before) — every later chunk stays at 400, since only the first chunk has no preceding chunk's playback to hide its generation time behind. This directly shortens the "slow to start" half of the report: the very first sound now depends on generating roughly a third as much text as before.

None of `loadKokoroVoice()`, the retry attempt/delay constants, `_kokoroChunkText()`'s sentence-boundary splitting logic, `pickAriaVoice()`, `_nativeBrowserSpeak()`, or `browserSpeak()`'s own load-triggering logic (Part XLI) changed — this Part is confined to how chunk generation and chunk playback are sequenced against each other inside `kokoroSpeak()`.

### 42.3 — Verification (this session)

All 5 inline `<script>` blocks in `public/index.html` pass `node --check`. `git diff` against the pre-fix state shows the change confined to `_kokoroChunkText()`, the `_kokoroSpeakChunk()`/`_kokoroGenerateChunk()`/`_kokoroPlayGeneratedAudio()`/`_kokoroGenerateChunkWithRetry()` cluster, and `kokoroSpeak()` itself — no other function touched.

Functional verification used a real Node `vm`-style harness: the actual `_kokoroChunkText`, `_kokoroGenerateChunk`, `_kokoroPlayGeneratedAudio`, `_kokoroGenerateChunkWithRetry`, and `kokoroSpeak` function bodies (copied verbatim from the file) were run against a mocked `_kokoroTTS.generate()` (simulated 500ms CPU delay per call) and a mocked `Audio`/`play()` (simulated 800ms playback per chunk, firing a real `ended` event via `setTimeout`), with every generate-start/generate-end/play-start/play-end event timestamped. Result, run directly (not asserted from expectation, read from real output): with a 4-chunk narration, every chunk after the first began generating at the exact moment the previous chunk's playback ended (`generate-start` timestamps: 0ms, 501ms, 1302ms, 2103ms; `play-end` timestamps: 1302ms, 2103ms, 2904ms, 3705ms — each `generate-start[i]` occurring at or before `play-end[i-1]`, confirming real overlap, not merely no-error). Total measured narration time was 3705ms against a naive (fully sequential, no pipelining) estimate of 5200ms for the same 4 chunks at the same simulated timings — a genuine, measured reduction, not an assumed one.

**What could not be verified in this sandbox:** the real magnitude of Kokoro-82M's actual generate() time on a real device for a real 400-character chunk, and how it actually compares to that chunk's real spoken-audio duration, since this sandbox has no real WASM runtime or audio device to measure either against (same limitation as every other Kokoro-related Part). The simulated 500ms-generate/800ms-play ratio used above is a plausible approximation, not a measured one — real-device testing (per the checklist below) is the way to confirm the pauses are actually gone, not just architecturally addressed.

### 42.4 — Manual test checklist

1. Reach a narrated reading (fresh or cached Kokoro) and listen across at least 3-4 chunk boundaries. Confirm no audible silence between one chunk ending and the next beginning (previously: a real, audible pause at every boundary).
2. Compare how long it takes for the very first word to be heard after triggering narration on an already-cached device (Kokoro already downloaded) — should now be noticeably shorter than before this fix, since the first chunk is ~150 characters instead of ~400.
3. Regression: stopSpeech()/mute mid-reading should still stop cleanly (the cancellation checks inside `kokoroSpeak()`'s loop are unchanged in intent, still checked before generating, before playing, and inside the retry loop).
4. Regression: force a chunk failure (e.g. block the model briefly) and confirm the existing fallback-to-native-voice-for-the-rest-of-this-narration behavior (Part XL) still works — this Part reuses that retry/fallback logic verbatim, just relocated into the generation-only half.

---

## Part XLIII — Dev-Console Timing Diagnostics for Kokoro Generation vs. Playback

After Part XLII shipped, the project owner still reported a lag. Part XLII's pipelining can only actually hide the gap between chunks if `generate()` finishes faster than the chunk's own audio takes to play back — something this sandbox has no way to measure (no real browser/WASM runtime or audio device exists here). `_kokoroGenerateChunk()` now logs, via `console.debug` (dev-only, no visitor ever sees this), the real `generate()` wall-clock time against the resulting audio's actual `duration`, explicitly stating whether generation was faster or slower than playback for that chunk. `node --check` passes on all 5 script blocks; the diff is confined to this one function.

---

## Part XLIV — Segment-Level Look-Ahead Prefetch (the Real Free-Reveal-Screen Fix)

### 44.1 — What tracing the actual reveal-screen code revealed

Even after Part XLII, the project owner reported: "very long pause between just a few words at a time." That phrase — "a few words," not "a paragraph" — was the key clue. Part XLII's pipelining overlaps generation ONLY *within* one `kokoroSpeak()` call's own multiple chunks (e.g. across a full 9-page paid reading's long text). The FREE REVEAL SCREEN (`initRevealScreen()`'s `playNext()`) does not narrate one long text at all — it narrates a whole SCRIPT of short, independent segments (`buildRevealScript()`'s `segments` array), each one its own completely separate `speakIntroText()` call, invoked only once the PREVIOUS segment's own playback has fully finished (chained via its `onFinish` callback). Each such segment is short enough to be exactly one Kokoro chunk on its own, so there was nothing for Part XLII's within-call pipelining to overlap — and the real `generate()` latency for the NEXT segment was, before this Part, only ever starting after the CURRENT segment's audio had already finished playing entirely. That produced precisely the reported symptom: a real, audible silent gap at every single segment boundary, with speech arriving in short bursts.

### 44.2 — The fix: a caller-supplied look-ahead, kicked off the instant the current segment starts playing

`initRevealScreen()` already has the entire segment script up front (`buildRevealScript()` returns the whole array before playback starts), so `playNext()` already knows what text comes next before it even starts speaking the current segment. It now passes that next segment's raw text as a third argument threaded all the way down: `speakIntroText(seg.text, playNext, nextSeg && nextSeg.text)` → `_fallbackSpeakLong(fullText, onFinish, lookaheadText)` → `browserSpeak(text, onEnd, lookaheadText)` → `kokoroSpeak(text, onEnd, lookaheadText)`.

A new single-slot cache, `_kokoroPrefetch = { text, promise }`, and `_kokoroPrefetchForText(lookaheadText)`, let `kokoroSpeak()` kick off generation of the NEXT segment's audio at exactly the right moment: `_kokoroPlayGeneratedAudio()` gained an `onStarted` callback that fires the instant `audio.play()` actually resolves (playback has begun) — the media pipeline keeps that audio sounding on its own from there, independent of the JS main thread, so this is the correct moment to start the next segment's CPU-bound `generate()` work without delaying the CURRENT segment's own start. `kokoroSpeak()` passes `function() { _kokoroPrefetchForText(lookaheadText); }` as that `onStarted` callback, but only when playing the LAST chunk of the current call (the only case where there's a "next segment" waiting rather than another chunk of the same text). `_kokoroGenerateChunkWithRetry()` checks for a matching prefetch (`_kokoroPrefetch.text === text`, an exact string match) at the very top and reuses it instead of generating fresh, falling through to a completely normal attempt if the prefetch itself failed.

The exact-string-match requirement means the lookahead text MUST be preprocessed identically to how the real next call will preprocess it — `speakIntroText()` now applies `preprocessForSpeech()` to `lookaheadRawText` itself before passing it down, the same call it already makes on `fullText`, so the two will always match when that next segment is actually spoken. Only the FIRST chunk of a (possibly multi-chunk, in principle) lookahead text is ever prefetched, matching exactly what the next `kokoroSpeak()` call will itself ask `_kokoroGenerateChunkWithRetry()` for first.

### 44.3 — Verification (this session)

All 5 inline `<script>` blocks pass `node --check`. Diff confined to `_kokoroPlayGeneratedAudio()` (new `onStarted` param), the new `_kokoroPrefetch`/`_kokoroPrefetchForText()`, `_kokoroGenerateChunkWithRetry()` (prefetch-consumption check), `kokoroSpeak()` (new `lookaheadText` param, `onStarted` callback wiring), `browserSpeak()`/`_fallbackSpeakLong()`/`speakIntroText()` (threading the new optional parameter through), and `initRevealScreen()`'s `playNext()` (passing the next segment's text). Grepped every other call site of `speakIntroText`, `browserSpeak`, `kokoroSpeak`, and `_fallbackSpeakLong` (the admin Test Voice button, `speakLongText()`, `speakText()`) — all omit the new optional parameter, which is harmless (`undefined`), so no other narration path changed behavior.

Functional verification used a Node harness with the ACTUAL function bodies (`_kokoroChunkText`, `_kokoroGenerateChunk`, `_kokoroPlayGeneratedAudio`, `_kokoroPrefetchForText`, `_kokoroGenerateChunkWithRetry`, `kokoroSpeak`) copied verbatim, simulating `initRevealScreen()`'s exact `playNext()` chaining pattern over 4 short, separate segments — not one long text. With simulated per-segment timings of 1200ms generate() / 900ms playback (deliberately modeling a case where a short segment's largely-fixed generation overhead exceeds its own short playback duration, the more pessimistic and realistic case for very short reveal-script lines), real measured output showed: every later segment's generation genuinely started at/before the previous segment's playback ended (`generate-start` times 1ms/1204ms/2405ms/3606ms vs. `play-end` times 2104ms/3307ms/4507ms/5708ms), and total time for 4 segments dropped from a naive (no-prefetch) estimate of 8400ms to a measured 5708ms — a real ~32% reduction.

**Honestly stated limit, not hidden:** in that same pessimistic simulation, a smaller residual gap (roughly 300ms per boundary in this specific test's numbers) still showed up between one segment's playback ending and the next one's actually starting, because the simulated generate() time (1200ms) was itself longer than the simulated playback time (900ms) it was overlapping against — pipelining removes the AVOIDABLE part of the gap (the part that used to happen with zero overlap at all) but cannot make audio play before the CPU has actually finished producing it. Whether real Kokoro generation time for a real short reveal-script segment exceeds that segment's own real playback duration on a real device is exactly what Part XLIII's `[Kokoro][timing]` console logs are meant to reveal — this Part is expected to substantially reduce the reported gap, not necessarily eliminate it to zero on every device.

### 44.4 — Manual test checklist

1. Reach the free reveal screen (fresh page load, nothing purchased yet) and listen across all its segments. Confirm gaps between segments are shorter than before — check DevTools Console for `[Kokoro][timing]` lines to see the real generate-vs-playback numbers for these specific short segments.
2. Confirm the visual sacred-geometry stage reveals (`sgRevealStage()`) still stay in sync with the narration — this Part does not touch that timing, only when the NEXT segment's audio starts generating.
3. Regression: mute mid-reveal, confirm playback stops immediately and no further prefetching happens while muted (`_kokoroPrefetchForText()` checks `isMuted`/`_speakCancelled`).
4. Regression: a full paid reading (solo/partnership/group), which calls `speakLongText()` with no lookahead argument, should behave identically to before this Part — confirmed via the call-site grep above, not just assumed.

---

## Part XLV — Fixing a Real Mispronunciation: "Libra"

The project owner reported Kokoro pronouncing "Libra" as "Lie-bruh" instead of the correct "Lee-bruh." This is a known category of TTS mispronunciation (an English grapheme-to-phoneme model defaulting to the more common "long I" vowel pattern for this letter sequence) rather than a bug in any of this session's other Kokoro work. Fixed the same way every other real mispronunciation in this file already is — `preprocessForSpeech()`'s existing phonetic-respelling table (Sephiroth, Chiron, Lilith, etc.) gained one more entry: `[/\bLibra\b/g, 'LEE-bruh']`. Audio-only: the visible reading text and any generated PDF still show the real word "Libra" — only what gets fed to a voice engine is respelled. Verified with a direct regex test confirming the whole-word boundary correctly leaves "library"/"libraries" untouched and only matches the capitalized "Libra" this app actually writes (confirmed via grep: the app never writes "LIBRA" or "libra" in any other casing).

---

## Part XLVI — Fixing a Real Double-Voice Overlap: Duplicate Reveal-Screen Invocation

### 46.1 — The report and why it didn't fit the earlier theories

The project owner reported the native browser voice and Kokoro playing "at the same time... the whole time," on the free reveal screen specifically. This ruled out the two theories Parts XLII–XLIV addressed (within-call chunk pacing and cross-segment generation latency) — neither of those can make two DIFFERENT voice engines sound simultaneously for an extended period; at most they produce timing gaps, never genuine overlap, since `browserSpeak()` always deterministically routes any ONE narration call to exactly one engine (Kokoro OR native, never both).

Tracing `document.getElementById('hook-btn')`'s click handler (the "✦ Reveal My Blueprint" button that starts the whole reveal flow) found the real cause: nothing guarded against the handler firing twice. A double-click, a double-tap, or a second click made out of impatience while the first reveal was still starting (a realistic scenario, especially before Parts XLII–XLIV existed to speed that up) would start TWO independent `initRevealScreen()` calls, each with its own separate `segments`/`idx`/`playNext()` closure, each running its own complete narration progression concurrently. The two chains share only global state (`currentAudio`, `_speakCancelled`, `stopSpeech()`) — and since each chain's own `speakIntroText()` calls `stopSpeech()` at the start of every one of its own segments (interrupting whatever the OTHER chain happens to be playing at that moment), the result is two narration streams continuously colliding and re-starting each other's audio throughout the whole reveal — exactly "both voices... the whole time," and exactly why it wasn't a clean, momentary handoff glitch.

### 46.2 — The fix

`hook-btn`'s click handler now checks `if (hookBtn.disabled) return;` as its very first action, then sets `hookBtn.disabled = true` once past validation (so a validation failure — e.g. a missing birth date — does NOT lock the button, only a genuine successful start does). `showScreen()` — already the single choke point every "return to the hook screen" path in this file goes through (grepped: every `showScreen('hook')` call site in the file, from validation failures, "start over," Group Reading dead-ends, quiz-intro back button, etc.) — now re-enables `hook-btn` whenever `name === 'hook'`, so a legitimate later visit to this screen (after navigating away and back) can start a fresh reveal normally. This follows the same `btn.disabled = true` double-submission guard pattern already used elsewhere in this file (the PDF/download buttons, the "Listen" button, etc.) rather than inventing a new mechanism.

### 46.3 — Verification (this session)

All 5 inline `<script>` blocks pass `node --check`; diff confined to the `hook-btn` click handler's opening lines and `showScreen()`. A standalone logic test (no DOM needed — the guard is a plain boolean check) confirmed: first click starts the chain, an immediate second click is blocked, and after simulating `showScreen('hook')` a subsequent click starts a fresh chain normally — the exact three-step sequence a real double-click-then-later-legitimate-retry would produce.

**What could not be verified in this sandbox:** actually reproducing a real double-click/double-tap race in a real browser and confirming the audible overlap is gone — this sandbox has no real browser or audio device. This fix addresses the only structural way two independent, uncoordinated narration chains could exist at once in this code, found by tracing the actual click-handler code rather than assumed; a real-device retest is the way to confirm it's resolved.

---

## Part XLVII — "Libra" Respelling, Take Two: the ALL-CAPS Convention Itself Was the Problem

### 47.1 — What went wrong with Part XLV's fix

The project owner reported that after Part XLV's `[/\bLibra\b/g, 'LEE-bruh']` fix, Kokoro now audibly spelled the word out — "L E - Ee bruh." Before assuming the fix, the actual mechanism was traced rather than guessed at again: this file's own ALL-CAPS-spell-out-prevention regex (`/(-?)\b([A-Z]{2,})\b(-?)/g`, used to stop a plain browser voice from reading an acronym letter-by-letter) was re-run directly against the literal string `'LEE-bruh'` in a standalone test. It correctly identified `"LEE"` as hyphen-adjacent (`post === '-'`) and left it completely untouched, exactly as designed — this file's own code was never the bug. That means Kokoro's own phonemizer is what read the ALL-CAPS `"LEE"` fragment as an acronym/initialism to spell out, a real, previously-unverified difference between how Kokoro's phonemizer and native browser `speechSynthesis` engines handle the same ALL-CAPS+hyphen "stress syllable" convention this file's WHOLE phonetic-respelling table (Sephiroth, Kether, Chokmah, Chiron, Lilith, etc.) has used since long before this session.

### 47.2 — The fix

Respelled "Libra" a second time as a single, plain, mixed-case word with no hyphen and no ALL-CAPS run at all: `'Leebruh'`. English orthography already reads a double "ee" as a long E on its own (as in "see," "free," "agree"), so no phonetic hinting syntax is even needed once the word isn't ALL-CAPS — and with no ALL-CAPS run present, there is nothing left for either this file's own spell-out-prevention regex OR Kokoro's phonemizer to treat as an acronym.

**Flagged, deliberately NOT fixed in this Part:** every OTHER entry in the phonetic-respelling table (Sephiroth, Sephirothic, Sephirah, Kether, Chokmah, Binah, Chesed, Geburah, Netzach, Yesod, Malkuth, Chiron, Lilith) still uses the exact same ALL-CAPS+hyphen convention that just failed for "Libra." It is realistic that some or all of them are ALSO being spelled out letter-by-letter by Kokoro the same way — but none of them have actually been reported as mispronounced, and this sandbox cannot run Kokoro's real phonemizer to test them directly. Per this Codex's standing discipline of flagging real, unconfirmed cross-cutting suspicions rather than blind-fixing everything at once (the same posture taken with the pre-existing "the The Fool" double-article issue), these are left exactly as they were, with a comment in the code itself pointing at this same risk, until a real report confirms which (if any) actually need the same plain-word treatment "Libra" just got.

### 47.3 — Verification (this session)

All 5 inline `<script>` blocks pass `node --check`. Directly traced the ALL-CAPS-spell-out regex against the literal string `'LEE-bruh'` (confirming this file's own code was not the bug, as described above) and separately confirmed the new `'Leebruh'` respelling passes through both `preprocessForSpeech()` steps completely unmodified, and that `\bLibra\b`'s word-boundary match still correctly leaves "library"/"libraries" untouched. **What could not be verified:** whether `'Leebruh'` actually sounds correct through Kokoro's real phonemizer on a real device — same sandbox limitation as every other pronunciation fix this session; a real-device retest is the way to confirm this one landed correctly.

---

## Part XLVIII — Mobile: Audio-Unlock for the First Kokoro Playback, and the Real CPU-Speed Question

### 48.1 — The report

The project owner reported "extreme lag" on a mobile device, and the double-voice overlap again — even after Part XLVI's duplicate-click guard, which specifically addressed the DESKTOP mechanism (two independent `initRevealScreen()` chains from a double-click). Mobile browsers differ from desktop in two ways relevant here, independent of that already-fixed bug:

1. **Autoplay/gesture policy.** iOS Safari and many Android WebViews only reliably allow an `<audio>` element's `play()` to succeed when it is closely tied to a real, direct user tap. Every narration call site in this app calls `audio.play()` only after real async work (Kokoro's one-time ~90MB download, then `generate()`) — by the time `play()` actually runs, especially for the very FIRST chunk of a session right after that slow download, the call may fall outside whatever grace period the browser tracks for "this play() is still attributable to that earlier tap," and get silently blocked (a rejected or hanging `play()` promise). `window.speechSynthesis` has an analogous real quirk on some of the same browsers. A blocked-then-recovering (or partially-succeeding) Kokoro `play()` racing against the native fallback that `kokoroSpeak()`'s own catch block triggers on a play failure is a second, independent, mobile-specific way to get audible overlap between the two voices — distinct from the desktop duplicate-click cause Part XLVI fixed.
2. **CPU speed.** Mobile CPUs are typically several times slower than desktop CPUs at WASM inference. Part XLIII's `[Kokoro][timing]` diagnostics were built specifically to measure whether `generate()` genuinely takes longer than a chunk's own playback duration on a given device — on mobile, that is now considered LIKELY, not just possible, which would mean the segment-prefetch pipelining from Part XLIV (which only removes the AVOIDABLE part of a gap, never makes audio play before it's actually generated) has a real, physical ceiling it cannot get under on a slow-enough device. This has not been confirmed with real numbers from a real phone yet.

### 48.2 — The fix (for the audio-unlock half)

Added `_unlockMobileAudioForSession()`: a best-effort, silent, synchronous unlock of both `<audio>` playback (a 44-byte inline silent WAV, played and immediately allowed to no-op) and `window.speechSynthesis` (an empty utterance, spoken then immediately cancelled) — called as the very FIRST action inside `hook-btn`'s click handler, before any of the async work that would otherwise separate the real, later `play()` call from the tap that's supposed to authorize it. This is the standard, well-established mobile-web pattern for this exact class of problem. Both calls are wrapped in `try/catch` and treat any failure as a silent no-op — on a desktop browser that never needed this, it is a harmless no-op; on a mobile browser that does need it, this is the fix.

### 48.3 — Verification (this session)

`node --check` passes on all 5 script blocks; diff confined to the new helper function and its one call site. Independently decoded the 44-byte silent WAV's base64 data and confirmed it is a well-formed, valid WAV file (RIFF/WAVE/fmt /data chunk tags all present and correctly sized, 0 bytes of actual audio data) rather than an arbitrary string that merely looked plausible.

**What could not be verified in this sandbox, stated plainly:** whether this actually resolves the mobile overlap or lag — this sandbox has no real mobile browser or device to test against, autoplay-policy behavior is notoriously device/OS-version/browser-specific, and the CPU-speed half of the report (per §48.1's second point) may simply be a real, physical limitation of running Kokoro-82M via WASM on that specific phone's CPU, which no code change here can remove. A real-device retest, ideally with the existing `[Kokoro][timing]` console diagnostics checked on that same phone, is the only way to know which of these two mechanisms (or both) was actually at play, and whether Kokoro is even a good fit as the default voice tier on typical mobile hardware at all.

---

## Part XLIX — WebGPU Acceleration: a Real Lever Against the Mobile CPU-Speed Ceiling

### 49.1 — The question that led here

After Part XLVIII's honest note that the mobile "extreme lag" report might be a genuine, physical CPU-speed ceiling — no amount of scheduling can make generate() faster than the device's own processor allows — the project owner asked directly: why is the built-in browser voice instant on the same phone, and is there any way to make Heart equally fast?

The honest answer, traced rather than assumed: the native OS voice never runs inside the web page's sandbox at all — it is provided directly by the phone's operating system, frequently using a dedicated on-device AI accelerator chip (e.g. Apple's Neural Engine, or an equivalent NPU on newer Android SoCs) that a website has categorically no access to. Kokoro, as a third-party neural network running entirely inside the browser's own execution environment, has never had access to that same specialized hardware — it has only ever been able to use the WebAssembly (CPU) path, which is real, comparatively slow, general-purpose computation with no way around it. "Equal to instant" was never realistically on the table.

The one real, verifiable lever: **WebGPU**, which — unlike the inaccessible on-device AI chip — lets a web page use the device's *graphics* processor, which browsers DO expose. The project owner asked for this to be built.

### 49.2 — What was verified before building this, and what could not be

Before writing any code, real facts were checked rather than assumed, consistent with this Codex's standing discipline:

- **WebGPU real-world speedup for models this size:** independently-sourced benchmarks (not this project's own measurement — this sandbox cannot run a real GPU) report a genuine 2-10x `generate()` speedup from WebGPU over WASM/CPU for Kokoro-82M specifically.
- **2026 mobile WebGPU support, via live web search:** broadly available — iOS 26+ Safari (full support across all devices on that OS version) and Android 12+ Chrome on Qualcomm/ARM GPUs. Not universal (older OS versions, some Android GPU vendors), but covering "the overwhelming majority of web users" per the source checked.
- **The size tradeoff, honestly incomplete:** WebGPU needs the less-compressed `fp32` weights rather than the small `q8` quantization already used (int8 quantized math is not a good fit for WebGPU's compute shaders — a real technical constraint, not an arbitrary choice; one source explicitly recommends pairing `q8` with `wasm` and `fp32` with `webgpu`, the exact adaptive pattern implemented here). This file's own pre-existing comment (written and checked against the npm registry/GitHub repo when Part XXXIII first built this feature) documents `fp32` at approximately 326MB, versus ~90MB for `q8`. This session attempted to re-confirm that number directly against Hugging Face's own model repository and could not — this sandbox's network egress proxy blocks direct access to huggingface.co, the same limitation already documented elsewhere in this repo (e.g. Square's own developer docs). Rather than either blindly trusting an old number or inventing a new one from an unreliable secondary source (one blog's search snippet suggested a suspiciously different ~80MB figure for the fp32 export, which does not square with the underlying math of storing the same parameter count at 4x the per-weight precision, and was not trusted), all user-facing copy in this Part describes the WebGPU download as "larger" rather than citing a specific number this code cannot stand behind.

### 49.3 — The fix

`loadKokoroVoice()` now attempts `device: 'webgpu'` + `dtype: 'fp32'` FIRST whenever `navigator.gpu` exists, before falling back to the original `device: 'wasm'` + `dtype: 'q8'` path on ANY failure (unsupported GPU, out-of-memory, a driver issue, or the browser exposing `navigator.gpu` without it actually working) — never a broken narration experience either way, the same failure-safe posture every other tier in this file already has. The progress-reporting callback was factored into `_buildKokoroProgressCallback()` since it is now potentially used twice (a WebGPU attempt, then a WASM fallback) rather than duplicated. A new `_kokoroUsedWebGPU` flag records which path actually succeeded, surfaced honestly in the admin panel's Voice Settings status text (distinguishing "GPU-accelerated via WebGPU" from "standard WASM/CPU path" once loaded) — diagnostic-only, never gates any behavior.

Every visitor-facing description of the download size (the admin panel's Voice Settings intro, the Enhanced Voice section, and the Test Voice button's status text) was updated to honestly describe two real possibilities — "about 90MB on most devices, or a larger download on a browser that supports WebGPU acceleration" — rather than continuing to state only the smaller number now that it is not always accurate.

### 49.4 — Verification (this session)

All 5 inline `<script>` blocks pass `node --check`. Diff confined to `loadKokoroVoice()`, the new `_buildKokoroProgressCallback()`/`_kokoroUsedWebGPU`, the admin panel's status-text strings, and the block comment documenting the real facts above.

Built a Node test harness with the real `loadKokoroVoice()` control-flow logic (copied verbatim) against a mocked `KokoroTTS.from_pretrained()` that records every call it receives, exercising three real scenarios:
1. **No WebGPU support** (`navigator.gpu` absent): exactly one call, `wasm/q8` — the WebGPU branch is never entered at all.
2. **WebGPU supported, succeeds**: exactly one call, `webgpu/fp32` — the `wasm/q8` fallback path is never reached, confirming no wasted double-download when the accelerated path works.
3. **WebGPU supported, fails**: two calls in order, `webgpu/fp32` then `wasm/q8` — confirming the catch block correctly falls through to the standard path, `_kokoroUsedWebGPU` ends up `false`, and `_kokoroInitFailed` stays `false` (this is a normal, handled fallback, not a session-wide failure).

(One harness-construction note, disclosed for transparency: Node.js since v21 ships its own minimal built-in `navigator` global, which silently ignored a plain `global.navigator = {...}` reassignment in the first version of this test — not a bug in the product code, a test-environment quirk, worked around with `Object.defineProperty()` to actually override it for the test. The real browser `navigator` object this code runs against in production has no such restriction.)

**What could not be verified in this sandbox, stated plainly:** the exact `fp32` download size (per §49.2), and — the most important limitation — whether this actually produces a real, felt speedup on a real phone. This sandbox has no real GPU, no real mobile device, and no way to run Kokoro's actual WebGPU compute path at all. A real-device retest, checking the admin panel's status text (should say "GPU-accelerated via WebGPU" if it worked) and the existing `[Kokoro][timing]` console diagnostics for real generate()-vs-playback numbers on that same phone, is the only way to confirm this actually helps.

---

## Part L — Reverting the Default: Kokoro Back to Admin-Only, "Natasha" Preferred for the Native Voice

### 50.1 — Why, after five Parts of mitigation

Parts XLII through XLIX each addressed a real, verified mechanism behind the reported Kokoro lag and voice-overlap issues (chunk-generation pipelining, cross-segment look-ahead prefetch, a duplicate-invocation guard, a mobile audio-unlock, WebGPU acceleration) — every one of them was a genuine fix for the specific mechanism it targeted, verified with real test harnesses each time. But after all five, the project owner's real-device retest still showed persistent lag. Two deeper technical facts, reached through direct conversation rather than another guess-and-ship cycle, explain why no further code-level mitigation was likely to fully close the gap:

1. **"Extracting just Heart" would not have helped**, confirmed directly: Kokoro's 28 voices are each a roughly 256-number style vector (about 1KB) layered onto ONE shared ~82-million-parameter acoustic model. There is no smaller "Heart-only" model to extract — every voice, including Heart alone, requires the full shared model's computation. This ruled out the specific DIY approach the project owner proposed.
2. **The real ceiling is architectural, not a bug**: a native OS voice runs on code (and sometimes dedicated AI hardware) built into the device by Apple/Google/Microsoft, with zero download and full hardware access. Kokoro is a third-party neural network that must be fetched fresh into the browser's sandbox and computed using only what a webpage is allowed to use — a fundamentally heavier, slower path by construction, no matter how the surrounding code schedules or pipelines it. WebGPU (Part XLIX) is the one real lever that narrows this gap, not closes it, and needs real-device confirmation this session cannot produce.

Given that, and the project owner's explicit, deliberate choice to prioritize a free, always-fast, always-reliable voice over a slower natural-sounding one for now, the decision was made to revert Kokoro's default-on status from Part XLI, while explicitly choosing NOT to delete any of the Kokoro/WebGPU engineering — it remains a fully-functional, admin-only toggle, ready to switch back on with zero rebuilding if a device's real performance or the underlying technology improves.

### 50.2 — The two changes

1. **`isKokoroEnabledPref()` reverted to its pre-Part-XLI logic**: `localStorage.getItem('enhanced_voice_enabled') === 'true'`, the exact inverse of Part XLI's `!== 'false'`. A brand-new visitor's browser (nothing ever set) now correctly evaluates to OFF again — Kokoro requires an explicit admin opt-in, exactly as it did from Part XXXIII through Part XL. Every other Kokoro function (`loadKokoroVoice()`, `kokoroSpeak()`, the WebGPU attempt, the segment-prefetch pipeline, the mobile audio-unlock) is completely unchanged — this single flip is the entire mechanism, same as Part XLI's own flip was.
2. **New `pickNatashaVoice(voices)`**, tried before the existing `pickAriaVoice(voices)` in `_nativeBrowserSpeak()`'s voice resolution: a real person's stated preference for the Microsoft "Natasha" voice, honored where it exists. "Natasha" is a Windows-built-in voice — confirmed, not assumed, that macOS, iOS, and Android each ship entirely separate voice sets and never include her — so `pickNatashaVoice()` returns `null` on any non-Windows device (or a Windows browser without her installed), and the pre-existing `pickAriaVoice()` search runs exactly as it always has. Neither found still falls through to the browser's own unset default voice — the same three-tier graceful degradation this fallback path has always had, just with one more preferred name checked first.

Admin panel copy (the Voice Settings intro, the Enhanced Voice section's own description, its section label, and the enable button's static HTML) was updated to honestly describe the new reality: the native voice (Natasha-preferred) is the default for everyone, and Heart is an admin-only option, off unless explicitly turned on.

### 50.3 — Verification (this session)

All 5 inline `<script>` blocks pass `node --check`; diff confined to `isKokoroEnabledPref()`, the new `pickNatashaVoice()` and its one call site, and the admin panel copy described above.

Directly tested `pickNatashaVoice()`/`pickAriaVoice()`'s combined resolution against three real voice-list shapes: (1) a Windows list containing both Natasha and Aria — Natasha wins; (2) an iPhone's real voice names (Samantha, Alex, Karen) — neither matches, correctly returns `null` (falls through to the browser's own default, not an error); (3) a Windows list with only Aria present (Natasha not installed) — falls through to Aria correctly. Separately tested `isKokoroEnabledPref()`'s three real states directly: never-set now evaluates `false` (was `true` under Part XLI), explicit `'true'` still evaluates `true`, explicit `'false'` still evaluates `false` — confirming the flip landed exactly as intended and didn't silently break the admin's own explicit on/off toggle in either direction.

**What this Part does NOT do, stated plainly:** it does not remove, simplify, or alter a single line of the actual Kokoro/WebGPU machinery built in Parts XXXIII–XLIX — an admin re-enabling it from the panel gets the exact same pipelining, prefetch, duplicate-guard, mobile-unlock, and WebGPU-acceleration behavior verified in those Parts, unchanged. **What could not be verified in this sandbox:** how "Natasha" actually sounds, and whether she is genuinely a better experience than the previous "Aria" search on a real Windows machine — no real browser or audio device exists here, same limitation as every other voice-related verification this session.

---

*W3BB Worldwide · Codex Logic V07 · Addendum to V06 · All additions are cross-verified against at least one other system already established in this Codex, with the derivation shown — no assertion stands alone. Parts XXX, XXXI, and XXXII remain labeled exceptions by design (original W3BB construction per the Part XXII branch (b) standard). Parts XXXIII, XXXIV, and XLI are a different kind of exception each: all three are technology/infrastructure/UX additions that make no claim about any reading's content at all, so Part XXII's two branches simply do not apply to any of them — what IS independently verified for Part XXXIV is the real signature-verification scheme, event payload shapes, and API endpoints described in its own file's header comment and in `docs/SUBSCRIPTIONS_SETUP.md` section 5, checked against Square's own documentation and SDK source as surfaced through web search (this sandbox's network egress proxy blocks direct access to developer.squareup.com and squareup.com, a limitation already noted elsewhere in this repo), plus a real local-Postgres verification of the new function's access-control boundary; what IS independently verified for Part XLI is the real, literal `localStorage` value semantics (`null` vs. `'true'` vs. `'false'`) traced against the actual comparison operators in the code, and the real call-site graph of every removed identifier, confirmed by direct grep against the full file rather than assumed. Part XXXV is a presentation/synthesis change over data already cross-verified in earlier Parts (Codex Archetype, Life Path quality, Axis Role, Elemental Suit) — it introduces no new content claim, so it falls squarely within the standard Part XXII branch (a) covers, requiring no new cross-verification of its own. Part XXXVI is likewise a presentation change, not a new content claim, over data this Codex either already established (`ELEMENT_QUALITIES` from Part XXXV, `TAROT_PATHS`/`PATH_TABLE` from Part XXI's own foundational Trump Card mechanism) or newly, independently verified this session against real reference sources named in §36.4 above (standard astrology for the Lunar Node axis; standard Tarot tradition for Minor Arcana rank and court-card meanings) — it falls within Part XXII branch (a) as well, on the same "cross-verified derivation" footing every other content-bearing Part in this Codex stands on. Part XXXVII is, in turn, a refinement of Part XXXVI's own presentation standard, not a new content claim of its own and not a reversal of anything Part XXXVI established — it introduces zero new facts about any element, card, or axis, only additional real phrasings of facts this Codex had already verified, so it falls within the same Part XXII branch (a) footing as Part XXXVI itself. Part XXXVIII is a structural reorganization of the solo reading's 9 pages, not a new content claim about any individual number, card, or Sephirah — every real fact it relocates was already independently verified by the Part that first introduced it; what IS newly asserted in Part XXXVIII is (1) the real geometric nesting relationships among the Flower/Vesica/Seed/Egg/Fruit/Cube/Tree, cited in §38.1 against In2Infinity's construction sequence and this Codex's own sacred-geometry reference, which is standard Part XXII branch (a) footing, and (2) the SPECIFIC symbolic assignment of those shapes to "a whole person," "the infinite field," and "ending/rebirth," which is a labeled Part XXII branch (b) exception alongside Parts XXX-XXXII, disclosed plainly to the reader on the new Page 1. Part XXXIX is, like Part XXXV before it, primarily a presentation/synthesis extension over data already cross-verified in earlier Parts (`ELEMENT_QUALITIES`, `TAROT_PATHS`/`PATH_TABLE`, `CODEX_ARCHETYPES`, `LP_DATA`/`MASTER_NUMBER_DATA`, `AXIS_ROLES`) — it introduces no new numerological, astrological, or Tarot claim, so it falls within Part XXII branch (a). The one genuinely new construction this Part adds is the five-category Standout Roles functional grouping (§39.7) and the `ARCHETYPE_PRACTICAL_ROLE` practical-language table (§39.6) — both are explicitly labeled, per Part XXII branch (b), as this Codex's own original organizing/interpretive layer on top of already-real archetype titles, not an inherited system and not a new claim about what any individual title means on its own.*
