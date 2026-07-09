---
title: QF — France vs Morocco
type: analysis
sport: football
competition: WC2026 QF
tags: [wc2026, qf, france, morocco, prediction]
sources: [fbref-france-5g, opta-france-5g, fbref-morocco-5g, opta-morocco-5g]
last_updated: 2026-07-09
---

# France vs Morocco — WC2026 Quarter-Final

## Pre-Match Context
- France: W5 D0 L0, 14 GF 2 GA
- Morocco: W3 D2 L0, 10 GF 4 GA
- Both teams have perfect defensive SP records (0 goals conceded from SP in 5G)
- Round: QF — benchmarks and GK priors adjusted accordingly

---

## Model Calculations

### SoTA Regression (R8+ benchmark = 3.0)
- France SoTA allowed: 9 SoT / 5G = 1.8/game → regressed: (1.8×5 + 3.0×3)/8 = **2.25/game**
- Morocco SoTA allowed: 12 SoT / 5G = 2.4/game → regressed: (2.4×5 + 3.0×3)/8 = **2.625/game**

### GK Bayesian Regression (QF+ prior = 70%, n=5)
- Maignan: (5×0.778 + 3×0.70)/8 = **74.9%**
- Bounou: (5×0.692 + 3×0.70)/8 = **69.5%**

### France λ (attacking vs Morocco defense)
- Adj SoT = 7.8 × (2.625/5.5) = 3.72 SoT [above 2.5 floor — no uplift]
- λ_SoT = 3.72 × (1 − 0.695) = **1.134**
- λ_xG = **2.13**
- λ_SP = 0.13 × (1 − 0.695) = **0.040**
- **France λ = 0.6×1.134 + 0.4×2.13 + 0.040 = 1.572**

### Morocco λ (attacking vs France defense)
- Adj SoT = 5.0 × (2.25/5.5) = 2.045 [below 2.5 floor → 2.5 → ×1.15 KO uplift = **2.875**]
- λ_SoT = 2.875 × (1 − 0.749) = **0.722**
- λ_xG = **1.66**
- λ_SP = 0.15 × (1 − 0.749) = **0.038**
- **Morocco λ = 0.6×0.722 + 0.4×1.66 + 0.038 = 1.135**

### Total
- **France λ = 1.572 | Morocco λ = 1.135 | Total = 2.707**

### Match Probabilities (Poisson)
| Outcome | Probability |
|---------|------------|
| France win (90 min) | **~47%** |
| Draw (90 min) | **~25%** |
| Morocco win (90 min) | **~27%** |
| France advance (incl. AET/pens) | **~60%** |

### Goals Markets
| Market | Probability |
|--------|------------|
| Over 2.5 goals | **~51%** |
| Under 2.5 goals | **~49%** |
| BTTS Yes | **~54%** |
| BTTS No | **~46%** |

### Cards (referee confirmed: Facundo Tello Figueroa, ARG)
- Referee YC/game: **5.38** (very card-heavy)
- λ_total YC = (0.8 + 1.2 + 5.38) / 2 = **3.69/game**
- P(Under 3.5 YC) ≈ **50%** — coin flip, do NOT back
- P(Over 3.5 YC) ≈ **50%** — coin flip, do NOT back
- Referee RC/game: **0.38** — elevated red card risk
- Best card line: **Over 4.5 YC ≈ 31%** — ⭐⭐ (value only at big odds)

### Corners
- France corners won/game: **7.2** (36 in 5G)
- Morocco corners won/game: **4.8** (24 in 5G)
- Raw match total estimate: 7.2 + 4.8 = **12.0**
- Footystats match totals: France 9.8/match, Morocco 10.0/match → base (9.8+10.0)/2 = 9.9
- Possession adjustment (France ~60%, Morocco PPDA 14.8): +15% uplift → **~11.4 expected**
- France's 7.2 corners/game dominance vs Morocco's deep block strongly supports Over
- **Over 10.5 corners ≈ 63%** → ⭐⭐⭐⭐

### Footystats Rates (5G)
- France FTS: **0%** (scored in all 5 games)
- Morocco FTS: **0%** (scored in all 5 games)
- France BTTS%: 40% | Morocco BTTS%: 60%

---

## Tactical Overview

France will dominate possession (expected 58-60% in this match). Morocco will sit in their characteristic deep block (PPDA 14.8) with 4-4-2 or 4-5-1, absorbing pressure and looking to transition.

The key battleground is Morocco's aerial weakness (46.7%) vs France's aerial dominance (64.7%). France will look to exploit this via corners, set pieces, and high crosses. Morocco has conceded 0 SP goals in 5G, but France's aerial advantage is the most significant mismatch in this fixture.

Morocco's counter-attack (30% fast-break conversion) is their primary equalising mechanism. France's defensive shape is elite (12.8 opponent box touches/game allowed) — Morocco will get few clear looks.

France's 30.2 box touches/game vs Morocco's 20.2 box touches/game allowed is a significant gap. France will create more and better chances.

---

## Match Flow Prediction

- **Likely opening phase:** France slow build, Morocco compact 4-5-1 off the ball. France probe through balls and inverted wide players. Morocco press only in middle third.
- **Key tactical battles:** Mbappé/Olise vs Mazraoui/Noussair in wide channels. France aerial threat at set pieces vs Morocco's block (0 SP goals conceded but 1.05 xGA facing 19 shots). Morocco fast breaks vs France's high defensive line.
- **Momentum triggers:** Early France goal → Morocco forced to open up, France transition becomes devastating. Morocco counter-goal → France press higher, more exposed.
- **Scenarios:**
  - France dominate and win 90 min: ~47% (most likely single outcome)
  - Draw after 90 min → AET/pens: ~25%
  - Morocco win 90 min: ~27%
- **Key indicators to watch:** Morocco fast-break opportunities (each is dangerous at 30% conversion). France aerial duels won in SP situations. Mbappé tracking back defensively.

---

## Picks

### Match Result
**France Win (90 min)** — 47% → ⭐⭐⭐
Most likely single 90-min outcome. France's SoT suppression, aerial dominance, and box presence give them clear structural edge.

**France to Advance (incl. AET/pens)** — ~60% → ⭐⭐⭐⭐
Even if Morocco force extra time (25% chance of draw), France's quality advantage persists through AET and penalty shootouts are ~50/50.

### Goals
**Over 2.5 Goals** — 51% → ⭐⭐⭐
France's λ=1.57 alone makes scoring 2+ goals by France alone plausible (~47% P(France≥2)). Slight lean Over.

**Under 2.5 Goals** — 49% → ⭐⭐⭐ ⚠️
Model flags this — it is essentially a coin flip. Do not take this as a confident pick.

**BTTS Yes** — 54% → ⭐⭐⭐
France P(score)=78%, Morocco P(score)=68% → product ~54%. Morocco's counter threat is real.

**BTTS No** — 46% → ⭐⭐⭐ ⚠️
Caution flag required by model. Not a recommended pick.

### Corners
**Over 10.5 Total Corners** — ~63% → ⭐⭐⭐⭐
France wins 7.2 corners/game (highest in QF bracket). Morocco's deep block forces corner situations. Raw match total estimate = 12.0; possession uplift applied. Strong lean Over.

### Cards — DO NOT BACK Either Side
**Under 3.5 YC** — ~50% (removed from picks)
Referee Tello Figueroa averages **5.38 YC/game**. λ_total = 3.69. Under 3.5 is essentially a coin flip — no edge.

**Referee red card risk: 0.38 RC/game** — notable; Tello Figueroa shows reds frequently in high-intensity matches.

---

## Confirmed Lineups

**France (4-2-3-1):** Maignan — Koundé, Upamecano, Saliba, Digne — Koné, Rabiot — Olise, Doué, Dembélé — Mbappé (c)
*Note: Digne starts at LB (Gusto benched). Doué starts ahead of Barcola. Rabiot partners Koné in double pivot (Tchouaméni out).*

**Morocco (4-2-3-1):** Bono — Hakimi (c), Diop, Mazraoui, Salah-Eddine — El Aynaoui, Bouaddi — Ounahi, Díaz, El Khannouss — Talbi
*Note: Talbi starts as striker (Rahimi benched — loses super-sub threat). Mazraoui shifts to CB, Salah-Eddine starts at LB. Riad dropped.*

## Key Risks
- Morocco's fast-break threat (30% conversion) could steal a result if France push high and leave gaps
- France's xG overperformance (+3.35) means some individual luck has been involved — not all of their 14 goals reflect true quality
- If the match goes to AET/pens, Morocco's physical fitness edge (most distance run per game in the tournament) could matter in the 90-120 min window
