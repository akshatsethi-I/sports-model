---
title: QF — Argentina vs Switzerland
type: analysis
sport: football
competition: WC2026 QF
tags: [wc2026, qf, argentina, switzerland, prediction]
sources: [fbref-argentina-5g, opta-argentina-5g, fbref-switzerland-5g, opta-switzerland-5g]
last_updated: 2026-07-11
---

# Argentina vs Switzerland — WC2026 Quarter-Final

## Pre-Match Context
- Argentina: W5 D0 L0, 14 GF 5 GA, PPG 3.00, CS 40%, BTTS 60%, FTS 0%
- Switzerland: W3 D2 L0, 9 GF 3 GA, PPG 2.20, CS 40%, BTTS 60%, FTS 20%
- Round: QF — benchmarks and GK priors adjusted accordingly

---

## Pre-Prediction Checklist

### Step 1 — Qualification stakes
Both teams require a win to advance. Draw leads to AET then penalties. No conservative play — both sides attack to win.

### Step 2 — Opponent-adjusted SoT model ✓ (below)

### Step 3 — Market adjustments
- Win probability gap: Argentina 35%, Switzerland 41% → neither >65% → standard floor and KO uplift apply for Switzerland
- PPDA: both teams 11.1 — moderate press, no passive-block trigger (threshold >14 not met)
- Corner adjustments: none triggered

### Step 4 — Probability-first star ratings ✓

---

## Model Calculations

### SoTA Regression (QF benchmark = 3.0, n_prior = 3)
- Argentina SoTA allowed: 9/5 = 1.8/game → regressed: (1.8×5 + 3.0×3)/8 = **2.25/game**
- Switzerland SoTA allowed: 19/5 = 3.8/game → regressed: (3.8×5 + 3.0×3)/8 = **3.50/game**

### GK Bayesian Regression (QF+ prior = 70%)
- Martínez (5G): (5×0.444 + 3×0.70)/8 = **54.0%**
- Kobel (5G): (5×0.842 + 3×0.70)/8 = **78.9%**

> ⚠️ **Martínez save% anomaly:** 44.4% raw on only 9 SoTA in 5 games — microscopic sample driven by Argentina's extraordinary defensive suppression (1.8 SoTA/game, best in bracket). The 54.0% Bayesian output almost certainly understates Martínez's true ability. This is the single largest model uncertainty in this fixture. The GK gap (Kobel 78.9% vs Martínez 54.0%) may be inflated by 10-15 percentage points.

### Argentina λ (attacking vs Switzerland defense)
| Component | Calculation | Value |
|-----------|------------|-------|
| Adj SoT | 6.4 × (3.50/5.5) | **4.073** |
| λ_SoT | 4.073 × (1−0.789) | **0.859** |
| λ_xG | Argentina xG/game | **2.170** |
| λ_SP | 0.486 × (1−0.789) | **0.103** |
| **Argentina λ** | 0.6×0.859 + 0.4×2.170 + 0.103 | **1.486** |

### Switzerland λ (attacking vs Argentina defense)
| Component | Calculation | Value |
|-----------|------------|-------|
| Adj SoT | 5.0 × (2.25/5.5) = 2.045 → floor 2.5 → ×1.15 KO | **2.875** |
| λ_SoT | 2.875 × (1−0.540) | **1.323** |
| λ_xG | Switzerland xG/game | **1.842** |
| λ_SP | 0.240 × (1−0.540) | **0.110** |
| **Switzerland λ** | 0.6×1.323 + 0.4×1.842 + 0.110 | **1.641** |

**Total λ = 3.127**

### Match Probabilities (Poisson)
| Outcome | Probability |
|---------|------------|
| Argentina win (90 min) | **~35%** |
| Draw (90 min) | **~24%** |
| Switzerland win (90 min) | **~41%** |
| Switzerland advance (incl. AET/pens) | **~53%** |
| Argentina advance (incl. AET/pens) | **~47%** |

> The model has Switzerland as slight favorites. This is mechanically driven by the Kobel (78.9%) vs Martínez (54.0%) GK gap — Kobel is the best GK remaining in the tournament by raw save%, and Argentina's attack (λ_SoT only 0.859) is heavily compressed by both Switzerland's low SoTA allowed and Kobel's elite save rate. Given the Martínez save% anomaly, real-world Argentina win probability may be closer to 40-45%.

### Goals Markets
| Market | Probability |
|--------|------------|
| Over 1.5 | **82%** |
| Over 2.5 | **60%** |
| Under 3.5 | **62%** |
| Under 4.5 | **79%** |
| BTTS Yes | **62%** |
| Argentina to score | **77%** |
| Switzerland to score | **81%** |

### Cards (Referee: Joao Pedro Pinheiro, POR — 4.71 YC/game, 0.20 RC/game)
- λ_total YC = (0.6 + 1.2 + 4.71)/2 = **3.26**
- Argentina team λ_YC = 0.333 × 3.26 = **1.09**
- Switzerland team λ_YC = 0.667 × 3.26 = **2.17**

| Market | Probability |
|--------|------------|
| Over 1.5 YC | **84%** → capped ⭐⭐⭐⭐ |
| Under 4.5 YC | **77%** |
| Under 5.5 YC | **88%** |
| Switzerland O0.5 YC | **89%** |
| Switzerland O1.5 YC | **64%** → capped ⭐⭐⭐⭐ |
| Switzerland U3.5 YC | **83%** |
| Argentina O0.5 YC | **66%** |
| Argentina U2.5 YC | **90%** |

### Corners
- Argentina corners/game: 4.0 (20 in 5G)
- Switzerland corners/game: 5.2 (26 in 5G)
- Match λ = **9.5** (no adjustments triggered)
- Footystats match averages: Argentina 7.8, Switzerland 9.6

| Market | Probability |
|--------|------------|
| Over 7.5 total | **74%** → ⭐⭐⭐⭐ |
| Over 8.5 total | **63%** → ⭐⭐⭐⭐ |
| Under 12.5 total | **84%** |
| Argentina O2.5 | **77%** → ⭐⭐⭐⭐ |
| Argentina O3.5 | **60%** → ⭐⭐⭐⭐ |
| Switzerland O3.5 | **77%** → ⭐⭐⭐⭐ |
| Switzerland O4.5 | **62%** → ⭐⭐⭐⭐ |

---

## Confirmed Lineups

**Argentina (4-3-1-2):** E. Martínez — Montiel, Romero, L. Martínez, Tagliafico — De Paul, Paredes, Mac Allister — Messi — Lautaro
*Note: Messi playing as a #10 behind two strikers. De Paul starts (On-Off −2.51) — a selection risk. Montiel at RB (On-Off +4.73 in small sample).*

**Switzerland (4-2-3-1):** Kobel — Zakaria, Akanji, Elvedi, R. Rodríguez — Xhaka, Freuler — Ndoye, Rieder, Vargas — Embolo
*Note: Embolo starts (On-Off −0.75, improving trend). Rieder starts (On-Off −2.81 — clear drag). Vargas starts (+2.71) ✅. Manzambi (best clinical output in squad) not starting.*

**Referee:** Joao Pedro Pinheiro (POR) — 4.71 YC/game, 0.20 RC/game

---

## Tactical Overview

Argentina's 4-3-1-2 with Messi as the #10 creates a compact central spine. Through balls (7.0/game — highest in tournament) are their primary weapon, and Messi's movement between the lines is designed to thread Lautaro and Julián Álvarez in behind. The key question is whether Switzerland's back four (Akanji, Elvedi, Zakaria, R. Rodríguez) can track Argentina's runners.

Switzerland will try to match Argentina's possession (56.7% vs 60.4%) and use Vargas's pace and R. Rodríguez's crossing to attack Argentina's left channel. Their 4-2-3-1 with Xhaka and Freuler in a double pivot provides defensive stability — both are elite at recycling possession and protecting the back four.

**The Kobel factor is decisive.** With Argentina generating 6.4 SoT/game but Switzerland allowing only 3.8 SoTA/game to opponents, and Kobel's 84.2% save rate, Argentina's expected goals against Kobel are severely compressed. Messi overperforming xG (+3.15 in 5G) is the only credible route to Argentina scoring multiple goals.

**Argentina's under-pressure defence:** xGA 0.596/game (best in bracket) but Goals vs xGA = +2.02 (conceded 2 more than expected). Their defence has been unlucky — not leaky. Switzerland's 1.842 xG/game and fast break potential (1 goal from 2 in 5G) can exploit this.

---

## Match Flow Prediction

- **Likely opening phase:** Argentina patient possession (16.14s sequences, 60.4%), Switzerland absorbing pressure in a 4-2-3-1 mid-block. Xhaka/Freuler patrolling space. Messi dropping deep to receive — Switzerland must decide whether to track him or hold shape.
- **Key tactical battles:** Messi vs Xhaka/Freuler in central space. Argentina through balls vs Switzerland's CB pairing (Akanji + Elvedi — both aerial winners but ground-duels 51.5%). Vargas's pace vs Montiel at RB. Embolo aerial threat vs L. Martínez/Romero.
- **Momentum triggers:** Argentina early goal → Switzerland forced out, Messi/Lautaro on transition. Switzerland goal → Argentina press high, creating space for Switzerland's fast break (42.9% Argentina fast-break conversion also then becomes relevant on the flip side).
- **Scenarios:**
  - Switzerland control game with Kobel brilliance, win 1-0: ~25%
  - Argentina win through Messi individual moment: ~35%
  - Draw → AET/pens: ~24%
- **Key indicators to watch:** How many SoT does Argentina generate in first 30 mins (if <2, Kobel/defense dominating). Whether Vargas/Ndoye can get in behind Argentina's fullbacks. Rieder's impact — if he's poor, Switzerland will sub early.

---

## Picks

### Match Result
**Switzerland to Advance (incl. AET/pens)** — ~53% → ⭐⭐⭐⭐
Model has Switzerland as slight favorites. Kobel elite, Argentina attack compressed, Switzerland xGA 0.874/game shows genuine defensive quality. Value pick against the public narrative of Argentina as firm favorites.

**Argentina to Win 90 min** — ~35% → ⭐⭐⭐
Messi's individual ceiling (G/SoT 0.47) and Argentina's through-ball volume (7.0/game) can unlock Switzerland. Real-world probability likely 40-45% given Martínez anomaly. Worth a value play on correct odds.

### Goals
**Over 1.5 Goals** — 82% → ⭐⭐⭐⭐⭐
Total λ=3.127, both teams BTTS 60% in tournament (Footystats), both attack quality teams. Highest-confidence pick in this match.

**Over 2.5 Goals** — 60% → ⭐⭐⭐⭐
Argentina's 14 GF in 5G and Switzerland's 9 GF in 5G. Both teams score; match total likely 2-3 goals. Slight lean Over.

**Under 3.5 Goals** — 62% → ⭐⭐⭐⭐
Mirrors the Over 2.5 signal — 2 or 3 goals is the most likely total band.

**BTTS Yes** — 62% → ⭐⭐⭐⭐
Switzerland P(score) 81%, Argentina P(score) 77%. Switzerland FTS 20% (scored in 4 of 5 games). Strong BTTS signal.

### Corners
**Over 7.5 Total Corners** — ~74% → ⭐⭐⭐⭐
Argentina 4.0/game + Switzerland 5.2/game = 9.2 raw. Both teams attack actively. No passive-block adjustment triggered.

**Switzerland Over 3.5 Corners** — ~77% → ⭐⭐⭐⭐
Switzerland 5.2/game — they win corners through their crossing game (R. Rodríguez 17 crosses in 3G, Vargas wide threat). Even with Argentina dominating some possession, Switzerland's width will generate corners.

**Argentina Over 2.5 Corners** — ~77% → ⭐⭐⭐⭐
Argentina 4.0/game. Lower than Switzerland but still clears 2.5 easily in most scenarios.

### Cards
**Under 5.5 Total YC** — ~88% → ⭐⭐⭐⭐⭐
λ=3.26. P(6+ YC) only ~12%. Pinheiro averages 4.71 but high totals are tail events. Strong Under pick.

**Under 4.5 Total YC** — ~77% → ⭐⭐⭐⭐⭐
Safe second Under line. Both Argentina (0.6 YC/game) and Switzerland (1.2 YC/game) are not high-card teams.

**Switzerland Over 0.5 YC** — ~89% → ⭐⭐⭐⭐⭐
Switzerland 1.2 YC/game in 5G. Pinheiro busy referee. Switzerland will almost certainly receive at least one yellow.

**Switzerland Under 3.5 YC** — ~83% → ⭐⭐⭐⭐⭐
Despite Switzerland's higher card rate, their team λ of 2.17 keeps the U3.5 well-covered.

---

## Key Risks

- **Martínez anomaly:** If Martínez performs at his actual ability level (closer to 70-72%), Argentina's λ rises meaningfully and the match balance shifts toward Argentina. The model may be overfitting to a 9-SoTA sample.
- **Messi's ceiling:** G/SoT 0.47 over 5G. If Messi generates 3+ SoT, the probability of Argentina scoring ≥2 goals rises dramatically even against Kobel. Single-player ceiling risk is higher here than any other QF fixture.
- **Switzerland xGA luck:** Conceded 1.37 fewer goals than xGA suggests. Their defence has been somewhat fortunate. Against Argentina's through-ball volume (7.0/game), that luck may not hold.
- **Argentina's goals vs xGA overperformance (+3.15):** If Argentina regress to xG-implied output, scoring 2 goals against Kobel becomes very difficult. The model's λ_xG = 2.170 may be the generous input.
