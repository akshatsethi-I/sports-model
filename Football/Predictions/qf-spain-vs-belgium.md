---
title: QF — Spain vs Belgium
type: analysis
sport: football
competition: WC2026 QF
tags: [wc2026, qf, spain, belgium, prediction]
sources: [fbref-spain-5g, opta-spain-5g, fbref-belgium-5g, opta-belgium-5g]
last_updated: 2026-07-10
---

# Spain vs Belgium — WC2026 Quarter-Final

## Pre-Match Context
- Spain: W4 D1 L0, 9 GF, 0 GA (5 clean sheets)
- Belgium: W3 D2 L0, 13 GF, 5 GA
- Spain have not conceded a single goal in 5 games
- Belgium SP defense is a critical vulnerability: 2 goals conceded from 15 SP shots (40% conversion against)
- Round: QF — benchmarks and GK priors adjusted accordingly

---

## Model Calculations

### SoTA Regression (R8+ benchmark = 3.0)
- Spain SoTA allowed: 1.0/game → regressed: (1.0×5 + 3.0×3)/8 = **1.75/game**
- Belgium SoTA allowed: 3.0/game → regressed: (3.0×5 + 3.0×3)/8 = **3.0/game** (at benchmark, no change)

### GK Bayesian Regression (QF+ prior = 70%, n=5)
- Simón: (5×1.00 + 3×0.70)/8 = **88.75%**
- Courtois: (5×0.667 + 3×0.70)/8 = **67.9%**

### Spain λ (attacking vs Belgium defense)
- Adj SoT = 6.4 × (3.0/5.5) = 3.491 [above 2.5 floor — no uplift]
- λ_SoT = 3.491 × (1 − 0.679) = **1.121**
- λ_xG = **1.95**
- λ_SP = 0.33 × (1 − 0.679) = **0.106**
- **Spain λ = 0.6×1.121 + 0.4×1.95 + 0.106 = 1.559**

### Belgium λ (attacking vs Spain defense)
- Adj SoT = 6.4 × (1.75/5.5) = 2.036 [below 2.5 floor → 2.5 → ×1.15 KO uplift = **2.875**]
- λ_SoT = 2.875 × (1 − 0.8875) = **0.323**
- λ_xG = **2.11**
- λ_SP = 0.53 × (1 − 0.8875) = **0.060**
- **Belgium λ = 0.6×0.323 + 0.4×2.11 + 0.060 = 1.098**

### Total
- **Spain λ = 1.559 | Belgium λ = 1.098 | Total = 2.657**

### Match Probabilities (Poisson)
| Outcome | Probability |
|---------|------------|
| Spain win (90 min) | **~48%** |
| Draw (90 min) | **~25%** |
| Belgium win (90 min) | **~27%** |
| Spain advance (incl. AET/pens) | **~62%** |

### Goals Markets
| Market | Probability |
|--------|------------|
| Over 2.5 goals | **~50%** |
| Under 2.5 goals | **~50%** |
| BTTS Yes | **~53%** |
| BTTS No | **~47%** |

### Key Model Note on Belgium λ
Belgium's raw xG/game (2.11) reflects output vs a range of opponents. Against Spain's elite defensive structure (1.0 SoT/game allowed, 8.2 opponent box touches/game), Belgium's actual attacking output will be heavily suppressed. The SoT adjustment (Belgium adj SoT = 2.036 → floor 2.5) correctly captures this suppression. The xG component (2.11) likely overstates Belgium's true expected threat in this specific match — treat BTTS and Over 2.5 picks with extra caution.

---

## Tactical Overview

Spain will dominate possession (expected 62-65% in this match) and press high with PPDA 8.7 — Belgium will struggle to build from the back. Spain's press triggers quick turnovers and limits Belgium to rushed transitions. Belgium's best route to goal is through their high-turnover-to-shot conversion (36.59%) and fast breaks against Spain's high line.

The critical structural mismatch: Spain generates 3.8 SP shots/game with 0.33 SP xG/game. Belgium concedes from SP at a 40% rate (2 goals from 15 SP shots). This is the most exploitable edge in the fixture. Spain's aerial duels (66.0%) vs Belgium's 57.1% amplifies this further.

Belgium's Tielemans (On-Off -28.86) as a starter is a structural drag. If Raskin (+2.87) starts instead, Belgium's midfield balance improves significantly. KDB's availability at full fitness is uncertain (only 3.3 90s in 5 games).

---

## Match Flow Prediction

- **Likely opening phase:** Spain high press, Belgium forced into long balls or direct play. Spain win possession in Belgium's half, building patient attacking sequences.
- **Key tactical battles:** Lamine Yamal vs Belgium's LB. Spain SP situations vs Belgium's aerial defense. Belgium's high-turnover transition moments vs Spain's defensive recovery.
- **Momentum triggers:** Early Spain SP goal → Belgium forced to open up further, Spain exploit space. Belgium fast-break goal → Spain push higher, more exposed on counter.
- **Scenarios:**
  - Spain dominate and win 90 min: ~48% (most likely single outcome)
  - Draw after 90 min → AET/pens: ~25%
  - Belgium win 90 min: ~27%
- **Key indicators to watch:** Belgium SP shots faced — each is dangerous at 40% conversion. Spain's high press winning rate. Tielemans vs Raskin selection.

---

## Picks

### Match Result
**Spain Win (90 min)** — 48% → ⭐⭐⭐
Most likely single 90-min outcome. Spain's possession dominance, elite defensive suppression, and Belgium's structural midfield drag (Tielemans -28.86) give Spain a clear edge.

**Spain to Advance (incl. AET/pens)** — ~62% → ⭐⭐⭐⭐
Even if Belgium force extra time (25% chance of draw), Spain's quality advantage persists through AET and penalty shootouts favor the more disciplined side.

### Goals
**Over 2.5 Goals** — 50% → ⭐⭐⭐ ⚠️
Essentially a coin flip. Belgium's raw xG (2.11) looks high but will be suppressed by Spain's elite defense. Do not back with confidence.

**Under 2.5 Goals** — 50% → ⭐⭐⭐ ⚠️
Model flags this. Same coin flip. Not a recommended pick.

**BTTS Yes** — 53% → ⭐⭐⭐
Spain P(score)=79%, Belgium P(score)=67% → product ~53%. Belgium's transition threat is real but Spain's defense is historically suppressive. Lean Yes but slim margin.

**BTTS No** — 47% → ⭐⭐⭐ ⚠️
Caution flag required. Not recommended.

### Corners
**Over 10.5 Total Corners** — ~58% → ⭐⭐⭐⭐
Spain wins 7.8 corners/game (highest in QF bracket alongside France). Belgium's deeper block will force corner situations as Spain dominate possession. Raw match estimate 12.4, possession uplift applied.

### Cards
**Under 2.5 Total Yellow Cards** — ~56% → ⭐⭐⭐
Michael Oliver is a lenient referee (3.51 YC/game). Spain and Belgium are the two most disciplined teams in this QF bracket. λ=2.46 — lean Under.

### Set Pieces — Key Structural Edge
**Spain SP Goal (Any Time)** — structural lean only, no star rating without SP-specific market data
Belgium concedes from SP at 40%. Spain generates 3.8 SP shots/game. Spain's aerial advantage (66.0% vs 57.1%) amplifies this. If an SP/corner market is available, lean Spain strongly.

### Corners
- Spain corners/game: **7.8** (39 in 5G)
- Belgium corners/game: **4.6** (23 in 5G)
- Raw match total: 7.8 + 4.6 = **12.4**
- Footystats match avg: Spain 9, Belgium 8.4 → blended base = 8.7
- Spain's 65.6% possession will generate above-average corner volume vs Belgium's block
- Expected match total (blended + possession uplift): **~11.1**
- **Over 10.5 corners ≈ 58%** → ⭐⭐⭐⭐

### Cards (Referee: Michael Oliver, ENG)
- Oliver YC/game: **3.51** | RC/game: **0.14** (lenient referee)
- Spain YC/game: 0.6 | Belgium YC/game: 0.8
- λ_total YC = (0.6 + 0.8 + 3.51) / 2 = **2.46**
- P(Under 2.5 YC) = **~56%** → ⭐⭐⭐
- Both teams disciplined + lenient referee = lean Under cards

---

## Confirmed Lineups

**Spain (4-2-3-1):** Simón — Porro, Cubarsi, Laporte, Cucurella — Rodri, Pedri — Baena, Olmo, Yamal — Oyarzabal

**Belgium (4-3-3):** Courtois — Castagne, Mechele, Ngoy, De Cuyper — Raskin, Tielemans, Vanaken — Doku, De Ketelaere, Trossard
*Note: KDB not starting (limited to 3.3 90s in tournament — still unavailable). Tielemans starts despite On-Off -28.86. Raskin starts (+2.87) — positive for Belgium's structure.*

---

## Key Risks
- Belgium's high-turnover-to-shot conversion (36.59%) could produce dangerous moments if Spain's press is broken
- Belgium's xG/game (2.11) includes games vs weaker opponents — but the model's SoT floor mechanism limits the damage
- If KDB plays 90 min at full fitness (not observed in this tournament), Belgium's creative quality increases materially
- Spain's 0 GA in 5G includes some luck (xGA 1.49 conceded) — Simón's 100% save rate will regress
