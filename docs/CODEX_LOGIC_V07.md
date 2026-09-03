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

*W3BB Worldwide · Codex Logic V07 · Addendum to V06 · All additions reduce to previously verified geometry or already-computed reading data — no new correspondence tables, no new scoring systems.*
