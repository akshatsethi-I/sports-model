---
title: SF1 — France vs Spain
type: analysis
sport: football
tags: [wc2026, semi-final, france, spain, prediction]
sources: [fbref-france-wc2026, fbref-spain-wc2026, opta-analyst-wc2026]
last_updated: 2026-07-13
---

# France vs Spain — WC2026 Semi-Final 1

**Referee:** Iván Barton (SLV) · 4.76 YC/game · 0.34 RC/game

## Projected Lineups

**France 4-2-3-1:** Maignan — Koundé, Upamecano, Saliba, Digne — Koné, Rabiot — Olise, Mbappé, Dembélé — Doué

**Spain 4-2-3-1:** Simón — Porro, Laporte, Cubarsí, Cucurella — Rodri, Pedri — Yamal, Dani Olmo, Baena — Oyarzabal

---

## Model Calculations

### GK Bayesian Regression (prior 70%, QF+ n=3)

| GK | SoTA | Raw save% | Bayesian save% |
|----|------|-----------|----------------|
| Unai Simón (ESP) | 8 | 87.5% | (8×0.875 + 3×0.70)/11 = **82.7%** |
| Mike Maignan (FRA) | 10 | 80.0% | (10×0.80 + 3×0.70)/13 = **77.7%** |

### SoTA Regression (QF+ benchmark 3.0/game)

| Team | Raw SoTA/g | Regressed SoTA/g |
|------|-----------|-----------------|
| Spain allows | 1.17 | (7+9)/9 = **1.78** |
| France allows | 1.67 | (10+9)/9 = **2.11** |

### Blended Defensive Quality Adjustment

Both teams' raw SoTA/game were built against opponents of lower quality than each other. A 60/40 blend toward the SF benchmark (3.0) corrects for this:

| Team | Blended SoTA/g |
|------|---------------|
| Spain allows | 0.6×1.78 + 0.4×3.0 = **2.27** |
| France allows | 0.6×2.11 + 0.4×3.0 = **2.47** |

### Opponent-Adjusted SoT (dataset avg 5.5)

| | Adj SoT |
|--|---------|
| France vs Spain | 7.83 × (2.27/5.5) = **3.23** |
| Spain vs France | 6.67 × (2.47/5.5) = **3.00** |

### λ Components

| | λ_SoT | λ_xG | λ_SP | **Final λ** |
|--|-------|------|------|------------|
| France | 3.23×0.173 = 0.559 | 2.39×(2.27/5.5) = 0.986 | 1.84/6 = 0.307 | **1.037** |
| Spain | 3.00×0.223 = 0.668 | 1.95×(2.47/5.5) = 0.876 | 1.92/6 = 0.320 | **1.071** |
| Total | | | | **2.108** |

λ = 0.6×λ_SoT + 0.4×λ_xG + λ_SP

### 90-min Outcome Probabilities

| Outcome | Probability |
|---------|-------------|
| France win | 34% |
| Draw | 30% |
| Spain win | 35% |
| **Spain to Advance** (AET/pens) | **~50%** |
| **France to Advance** (AET/pens) | **~49%** |

**This is a genuine coin flip.** Spain's marginal edge comes from Simón's higher Bayesian save% (82.7% vs Maignan's 77.7%).

### Corners Model

France 6G: 41 won (6.83/g), 18 conceded (3.00/g)
Spain 6G: 44 won (7.33/g), 7 conceded (1.17/g)

Directional model:
- France wins vs Spain: (6.83 + 1.17)/2 = **4.00/g**
- Spain wins vs France: (7.33 + 3.00)/2 = **5.17/g**
- **Total: 9.17/g**

Corner lineup check: Both teams at standard lineups. Baena (left AM) has started in ~60% of Spain's games — already reflected in 6G average. No adjustment applied.

### Cards Model (Barton · KO −0.3 · ref ×1.36)

| Team | Raw λ_YC | After KO discount | After ref ×(4.76/3.5) | Final λ_YC |
|------|---------|------------------|----------------------|-----------|
| France | 0.67 | 0.37 | ×1.36 | **0.503** |
| Spain | 0.83 | 0.53 | ×1.36 | **0.721** |
| Total | | | | **1.224** |

### Fouls & Offsides

| | Per game |
|--|----------|
| France fouls committed | 9.83 |
| Spain fouls committed | 11.33 |
| Total fouls | **21.17** |
| France offsides | 1.17 |
| Spain offsides | 2.00 |
| Total offsides | **3.17** |

### SoT Markets (Adj SoT/g)

| Team | Adj SoT/g |
|------|----------|
| France | **3.23** |
| Spain | **3.00** |
| Total | **6.23** |

---

## Tactical Overview

Spain (PPDA 8.8) press high and dominate possession (66%). France (PPDA 12.9) sit in a mid-block and counter. **This is the tournament's definitive high-press vs counter matchup.**

France's 13 fast breaks in 6G (3 goals) are generated precisely against high-pressing teams — Mbappé and Dembélé's pace will test Spain's high defensive line repeatedly. Doué as a false 9 creates space for Mbappé arriving from deep.

Spain's 38 build-up sequences (vs France's 22 direct attacks) suggest they will patiently probe rather than rush. Yamal (right) and Porro (overlapping) are Spain's primary corner generators and wide threats. France's aerial dominance (67.8% aerial duels won) will be tested by Spain's crossing volume (95 crosses in 6G).

**Key tactical battle:** Whether Saliba + Upamecano can hold a high enough line to compress space for Mbappé without getting turned. If France concede the first goal, their counter game becomes more difficult as Spain will sit and absorb.

**Defensive note:** Both teams have been fortunate defensively. France conceded 1.82 fewer goals than xGA (3.82 actual xGA, only 2 GA). Spain conceded 0.84 fewer than xGA. Against each other's actual attacking quality, some regression toward xGA is expected — supporting the Under 3.5 rather than Under 2.5 as the strongest goals pick.

---

## Match Flow Prediction

- **Likely opening phase:** Spain dominate possession early, probing through Pedri and Rodri. France defensive block holds shape, looking to spring Mbappé/Dembélé on the break.
- **Key tactical battles:** Mbappé vs Laporte/Cubarsí one-on-one; Yamal vs Koundé/Digne wide duel; Pedri vs Rabiot in the middle.
- **Momentum triggers:** Early counter-goal for France would force Spain to chase → more space → more France counters. A Spain goal reinforces their possession game. Red card would be decisive given how balanced this is.
- **Scenarios:**
  - Spain control (50%) — Possession game wears France down, Oyarzabal or Olmo finds a moment
  - France counter (34%) — Mbappé/Dembélé pace exploits Spain's high line
  - AET/pens (30% chance of drawing at 90 min) — Coin flip from there
- **Key indicators to watch:** France fast break volume in first 30 min; whether Spain create box touches (they've averaged 37.7/g but France allow only 12/g to opponents); Maignan sweeping behind defensive line.

---

## Picks

### Match Result
**Spain to Advance (incl. AET/pens)** — ~50% → ⭐⭐⭐
Model gives Spain the marginal edge through Simón's higher Bayesian save% and Spain's slightly higher λ. Genuinely 50/50 — this is a value pick on a coin flip, not a high-confidence call.

### Goals
**Under 3.5 Goals** — 84% → ⭐⭐⭐⭐⭐
Both teams allow fewer than 2 SoTA/game. Even with blending correction, total λ = 2.108. P(4+ goals) = only 16%. Strongest pick in this match.

**Over 1.5 Goals** — 62% → ⭐⭐⭐⭐
Both teams score in every WC game (FTS 0%). P(France score) 65%, P(Spain score) 66%. At least 2 goals expected in most scenarios.

**Under 2.5 Goals** — 65% → ⭐⭐⭐⭐
Total λ 2.108 — a 1-0 or 1-1 scoreline covers this. Tight semi-final between elite defenses.

**France Under 1.5 Goals** — 72% → ⭐⭐⭐⭐⭐
France λ = 1.037. P(France score 0 or 1) = 72%. Simón's Bayesian save% 82.7% heavily suppresses France's scoring.

**Spain Under 1.5 Goals** — 71% → ⭐⭐⭐⭐⭐
Spain λ = 1.071. P(Spain score 0 or 1) = 71%. Maignan (77.7% Bayesian) + France's compact block.

**BTTS No** — 58% → ⭐⭐⭐⭐ ⚠️
BTTS No has been true in 80% of both teams' WC games (CS% 80% each). P(BTTS Yes) = 42% from model — lean toward No but flag with caution per model rules.

### Corners
**Over 7.5 Total** — 70% → ⭐⭐⭐⭐
Spain 5.17/g + France 4.00/g = 9.17 expected total. Both teams generate corners through wide play. Strong lean Over.

**Spain Over 2.5 Corners** — 89% → ⭐⭐⭐⭐
Spain generates 7.33 corners/game. Even in their worst game vs France they clear 2.5 easily. Near-certain.

**Spain Over 3.5 Corners** — 76% → ⭐⭐⭐⭐
Porro + Yamal's wide threat, Oyarzabal drawing saves in the box — Spain's corner machine continues.

**France Over 2.5 Corners** — 76% → ⭐⭐⭐⭐
France win 6.83 corners/game. Even with Spain's compact defense limiting France, they comfortably clear 2.5.

### Cards
**Under 2.5 Total YC** — 87% → ⭐⭐⭐⭐⭐
Despite Barton's 4.76 YC/game average, both teams are extremely disciplined (France 0.67 YC/g, Spain 0.83 YC/g). Total λ_YC = 1.224 after KO discount + ref multiplier. P(3+ YC) only 13%.

**Spain Under 2.5 YC** — 96% → ⭐⭐⭐⭐⭐
Spain λ_YC = 0.721. P(Spain 3+ YC) only 4%. Spain conceded 0 red cards in 6G.

**France Under 1.5 YC** — 87% → ⭐⭐⭐⭐⭐
France λ_YC = 0.503. P(France 2+ YC) only 13%.

### Fouls
**Under 24.5 Total Fouls** — 78% → ⭐⭐⭐⭐⭐
Total expected 21.2 fouls/game. P(25+) only 22%. Both teams foul but not excessively.

**Over 19.5 Total Fouls** — 62% → ⭐⭐⭐⭐
Spain (11.33/g) + France (9.83/g). Physical semi-final, Over 19.5 is the right lean.

### Offsides
**Under 4.5 Total Offsides** — 78% → ⭐⭐⭐⭐⭐
Total expected 3.17/game. P(5+) only 22%. Spain's high press limits offside traps.

**Over 2.5 Total Offsides** — 62% → ⭐⭐⭐⭐
Spain averaged 2.0 offsides/game, France 1.17. Total λ = 3.17. Over 2.5 is the lean.

### Shots on Target
**Total Under 8.5 SoT** — 82% → ⭐⭐⭐⭐⭐
Adjusted total SoT = 6.23/game. P(9+ SoT) only 18%. Both defenses suppress shots ruthlessly.

**France Under 4.5 SoT** — 77% → ⭐⭐⭐⭐⭐
France adj SoT = 3.23. Simón's 82.7% save% limits threatening shots on target.

**Spain Under 4.5 SoT** — 82% → ⭐⭐⭐⭐⭐
Spain adj SoT = 3.00. Maignan (77.7%) behind France's elite defensive block.

**France Over 2.5 SoT** — 63% → ⭐⭐⭐⭐
France adj SoT 3.23 — they generate quality chances. Over 2.5 SoT is a reasonable lean.

**Spain Over 2.5 SoT** — 58% → ⭐⭐⭐⭐
Spain adj SoT 3.00. Slight lean Over 2.5.

### Half Markets
**Goal in 2nd Half** — 69% → ⭐⭐⭐⭐
2H λ = 1.159 (55% of total). P(goal in 2H) = 69%. Matches at this level often open up in the second half as teams chase or tire.

**Goal in 1st Half** — 61% → ⭐⭐⭐⭐
1H λ = 0.949. P(goal in 1H) = 61%. Both teams score early (FTS 0%).

---

## Key Risks

- **France's xGA luck runs out:** France conceded 1.82 fewer goals than xGA. Against Spain's quality attack, Maignan may face a heavier shot load than the 2.11 regressed figure suggests.
- **Mbappé's pace vs Spain's high line:** If Cubarsí/Laporte are caught high even once by Mbappé or Dembélé, France can win this from a single moment. Spain's defensive line is aggressive — one mistake could be decisive.
- **Barton's volatility:** 4.76 YC/game average with 0.34 RC/game. A red card in either direction completely transforms the match dynamics and invalidates most picks.
- **Penalty shootout:** 30% chance of draw at 90 min. AET/pens is a 50/50 coin flip that the model cannot predict.
