---
title: SF2 — England vs Argentina
type: analysis
sport: football
tags: [wc2026, semi-final, england, argentina, prediction]
sources: [fbref-england-wc2026, fbref-argentina-wc2026, opta-analyst-wc2026]
last_updated: 2026-07-13
---

# England vs Argentina — WC2026 Semi-Final 2

**Referee:** TBC — KO −0.3 discount applied; no referee multiplier. Card picks may shift once referee confirmed.

## Projected Lineups

**England 4-2-3-1:** Pickford — Reece James, Konsa, Guéhi, O'Reilly — Rice, Anderson — Saka, Bellingham, Gordon — Kane

**Argentina 4-1-3-2:** E. Martínez — Molina, C. Romero, L. Martínez, Tagliafico — Paredes — De Paul, Mac Allister, Enzo Fernández — Messi, J. Álvarez

---

## Model Calculations

### GK Bayesian Regression (prior 70%, QF+ benchmark)

| GK | SoTA | Raw save% | Bayesian save% |
|----|------|-----------|----------------|
| E. Martínez (ARG) | 14 | 57.1% | (14×0.571 + 3×0.70)/17 = **59.4%** |
| Jordan Pickford (ENG) | 18 | 66.7% | (18×0.667 + 3×0.70)/21 = **67.1%** |

Both GKs have significantly lower Bayesian save% than Simón/Maignan in SF1 — this is the primary driver of higher goal expectation.

### SoTA Regression (SF benchmark 3.0/game)

| Team | Raw SoTA/g | Regressed SoTA/g |
|------|-----------|-----------------|
| England allows | 3.17 | (19+9)/9 = **3.11** |
| Argentina allows | 2.33 | (14+9)/9 = **2.56** |

### Blended Defensive Quality Adjustment

Both teams faced weaker attacks before the SF. 60/40 blend toward SF benchmark (3.0):

| Team | Blended SoTA/g |
|------|---------------|
| England allows | 0.6×3.11 + 0.4×3.0 = **3.07** |
| Argentina allows | 0.6×2.56 + 0.4×3.0 = **2.74** |

### Opponent-Adjusted SoT (dataset avg 5.5)

| | Adj SoT |
|--|---------|
| England vs Argentina | 6.67 × (2.74/5.5) = **3.32** |
| Argentina vs England | 6.50 × (3.07/5.5) = **3.63** |

### λ Components

| | λ_SoT | λ_xG | λ_SP | **Final λ** |
|--|-------|------|------|------------|
| England | 3.32×(1−0.594)=**1.348** | 1.82×(2.74/5.5)=**0.907** | 2.31/6=**0.385** | **1.557** |
| Argentina | 3.63×(1−0.671)=**1.194** | 2.13×(3.07/5.5)=**1.189** | 2.86/6=**0.477** | **1.669** |
| Total | | | | **3.226** |

λ = 0.6×λ_SoT + 0.4×λ_xG + λ_SP

### 90-min Outcome Probabilities

| Outcome | Probability |
|---------|-------------|
| England win | 34% |
| Draw | 24% |
| Argentina win | 42% |
| **Argentina to Advance** (incl. AET/pens) | **~54%** |
| **England to Advance** (incl. AET/pens) | **~46%** |

Argentina's edge: higher λ (1.669 vs 1.557) + Martínez penalty-saving reputation in shootouts (despite poor in-game save%).

### Corners Model

England 6G: 35 won (5.83/g), 29 conceded (4.83/g)
Argentina 6G: 25 won (4.17/g), 12 conceded (2.00/g)

Directional model:
- England wins vs Argentina: (5.83 + 2.00) / 2 = **3.92/g**
- Argentina wins vs England: (4.17 + 4.83) / 2 = **4.50/g**
- **Total: 8.42/g**

Corner lineup check: Reece James returning at RB (better crossing FB than Spence who covered some 6G games). Saka starting from kick-off = major byline threat. Slight upward pressure vs 6G average but within normal variance — no formal adjustment applied. Argentina 4-1-3-2 with Messi+Álvarez is consistent with their 6G formation average; low corner count (4.17/g) is structural, not lineup-driven.

### Cards Model (KO −0.3 | referee TBC — no ref multiplier applied)

| Team | Raw λ_YC | After KO discount | Final λ_YC |
|------|---------|------------------|-----------|
| England | 1.17 | 0.87 | **0.87** |
| Argentina | 1.00 | 0.70 | **0.70** |
| Total | | | **1.57** |

⚠️ Referee not yet confirmed — no referee YC/game multiplier applied. Card picks may shift once appointed.

### Fouls & Offsides

| | Per game |
|--|----------|
| England fouls committed | 10.33 |
| Argentina fouls committed | 12.17 |
| **Total fouls** | **22.50** |
| England offsides | 1.83 |
| Argentina offsides | 3.00 |
| **Total offsides** | **4.83** |

### SoT Markets (Adj SoT/g)

| Team | Adj SoT/g |
|------|----------|
| England | **3.32** |
| Argentina | **3.63** |
| Total | **6.95** |

---

## Tactical Overview

This is a **high-press vs high-press** match — both teams press aggressively (PPDA 11.4 / 10.9) and both possess the ball (57.2% / 60.1%). Unlike France vs Spain (counter vs possession), this is two similar stylistic profiles colliding.

**England's threats:** Kane (6G: 22 shots, 12 SoT, 6G — clinical) + Bellingham in late runs. Box touches (32.3/g) second-highest in tournament. Rice delivers set pieces — England SP xG (2.31 over 6G) is elite. Aerial dominance (55.3% duels) vs Argentina's 51.3% — England should win the aerial battle.

**Argentina's threats:** Messi (9.18 SofaScore rating — best in tournament) generates from deep, arriving late into pockets. Julián Álvarez runs in behind. **Fast breaks: 10 attempts, 4 goals (40% conversion)** — the most lethal counter-attack in the tournament. If England's high line is caught, Messi finds Álvarez or goes himself.

**Key structural battle:** England's PPDA dropped from 8.6 (3G) to 11.4 (6G) — they've pressed less aggressively as games got harder. Argentina's patient build-up (147 ten-pass sequences vs England's 88) will probe England's mid-block. But England's defensive record remains elite (xGA 0.81/g) — they restrict opponents to poor positions.

**Warning flag:** England are +2.07 goals vs xG across 6G — significant overperformance, some regression expected. Argentina are +2.56 goals vs xGA conceded — they have been very unlucky defensively (opponents have been clinical in their few chances).

**Defensive note:** Argentina's Martínez has a 57.1% raw save rate (Bayesian 59.4%) — legitimately below average. His shot-stopping has been poor when tested, which the model reflects. However, his penalty reputation (Dibu's record in shootouts) is a separate factor not captured in 90-min save%.

---

## Match Flow Prediction

- **Likely opening phase:** Both teams press high — expect an intense, physical first 20 minutes. Argentina will try to establish possession quickly; England look for quick transitions through Bellingham and Kane.
- **Key tactical battles:** Messi vs Rice/Anderson in the half-spaces; Kane vs L. Martínez/C. Romero in aerial duels; Saka vs Tagliafico wide right duel.
- **Momentum triggers:** Argentina goal from a fast break would be particularly deflating for England — they've converted 40% of break opportunities. England set piece goal would shift momentum given their elite SP conversion (33.33%).
- **Scenarios:**
  - Argentina control, counter-kill (42%) — Patience in possession, Messi finds space, Álvarez finishes
  - England dominate, set-piece goal (34%) — Rice delivery, Kane header, England win on home-crowd energy
  - AET/pens (24% draw at 90) — Martínez's penalty reputation gives Argentina slight edge in shootout
- **Key indicators to watch:** Argentina fast break count in first 30 min; England SoT from corners (2 goals from headers in 6G); whether Rice is disciplined (−1.24 On-Off, most negative starter over 6G)

---

## Picks

### Match Result
**Argentina to Advance (incl. AET/pens)** — ~54% → ⭐⭐⭐⭐
Model gives Argentina a consistent edge through higher λ (1.669 vs 1.557) and Martínez's shootout reputation. England's counter-threat and set piece quality keeps this within a realistic coin flip range.

### Goals
**Over 1.5 Goals** — 83% → ⭐⭐⭐⭐⭐
Both teams score in nearly every game. With total λ = 3.226, only 17% probability of 0-0 or 1-0. Strongest pick in this match.

**Over 2.5 Goals** — 63% → ⭐⭐⭐⭐
High-scoring profiles from both sides. λ=3.226 makes 3+ goals the expected scoreline range.

**BTTS Yes** — 64% → ⭐⭐⭐⭐
Argentina BTTS% = 80% (4/5 games), England BTTS% = 60%. Both teams score frequently (England 79% chance of scoring, Argentina 81%). Opposite of France vs Spain.

**Under 4.5 Goals** — 78% → ⭐⭐⭐⭐⭐
Despite high λ, P(5+) = only 22%. Most likely outcomes cluster at 2-3 goals total.

**Under 3.5 Goals** — 60% → ⭐⭐⭐⭐
Just over half; reasonable lean given elite defenses still in play.

**England score (Over 0.5 goals)** — 79% → ⭐⭐⭐⭐⭐
England λ=1.557. P(England blank) = only 21%.

**Argentina score (Over 0.5 goals)** — 81% → ⭐⭐⭐⭐⭐
Argentina λ=1.669. P(Argentina blank) = only 19%.

### Corners
**Over 7.5 Total** — 60% → ⭐⭐⭐⭐ (capped)
Total expected 8.42 corners. England 3.92 + Argentina 4.50. Both teams generate corners through wide play and set pieces.

**Argentina Over 2.5 Corners** — 83% → ⭐⭐⭐⭐ (capped)
Argentina averages 4.17 corners/game. Even against England's compact defense, clearing 2.5 is near-certain.

**Argentina Over 3.5 Corners** — 66% → ⭐⭐⭐⭐ (capped)
Argentina's λ=4.50 makes Over 3.5 a strong lean.

**England Over 2.5 Corners** — 75% → ⭐⭐⭐⭐ (capped)
England 5.83 corners/game, adjusted to 3.92 vs Argentina's compact defense. Over 2.5 remains comfortable.

### Cards
**Under 2.5 Total YC** — 79% → ⭐⭐⭐⭐⭐
Both teams disciplined (England 1.17 YC/g, Argentina 1.00 YC/g). Total λ_YC = 1.57 after KO discount. P(3+ YC) = only 21%.
⚠️ May shift once referee confirmed — if an aggressive ref is appointed, this pick weakens.

**Argentina Under 1.5 YC** — 84% → ⭐⭐⭐⭐⭐
Argentina λ_YC = 0.70. P(Argentina 2+ YC) = only 16%. Most disciplined team in model (6 YC in 6G, 0 RC).

**England Under 1.5 YC** — 78% → ⭐⭐⭐⭐⭐
England λ_YC = 0.87. P(England 2+ YC) = only 22%. Despite Rice's history (1 YC in 6G).

### Fouls
**Over 19.5 Total Fouls** — 74% → ⭐⭐⭐⭐⭐
Total expected 22.5 fouls (England 10.33 + Argentina 12.17). Physical semi-final between two pressing sides.

**Under 24.5 Total Fouls** — 66% → ⭐⭐⭐⭐
P(25+) = 34%. Reasonable lean Under given neither team is a foul-machine.

### Offsides (total λ = 4.83)
**Over 2.5 Total Offsides** — 86% → ⭐⭐⭐⭐⭐
Argentina averages 3.0 offsides/game — Messi + Álvarez constantly probing England's high defensive line. England 1.83/game adds to total.

**Over 3.5 Total Offsides** — 71% → ⭐⭐⭐⭐⭐
λ=4.83 makes 4+ offsides expected in most scenarios.

### Shots on Target
**Total Under 8.5 SoT** — 73% → ⭐⭐⭐⭐⭐
Adj total SoT = 6.95/game. P(9+ SoT) = only 27%.

**England Under 4.5 SoT** — 76% → ⭐⭐⭐⭐⭐
England adj SoT = 3.32. Martínez's poor save rate means when England DO get on target, they're likely to score — but shots on target themselves will be limited.

**Argentina Under 4.5 SoT** — 70% → ⭐⭐⭐⭐⭐
Argentina adj SoT = 3.63. Pickford restricts quality shots on target (xG/shot allowed = 0.07).

**Argentina Over 2.5 SoT** — 70% → ⭐⭐⭐⭐⭐
Argentina's attacking quality (Messi, Álvarez, Mac Allister) means 3+ SoT on Pickford in most scenarios.

**England Over 2.5 SoT** — 64% → ⭐⭐⭐⭐
England adj SoT = 3.32. Kane + Bellingham provide consistent shot quality. Over 2.5 SoT is the lean.

### Half Markets
**Goal in 2nd Half** — 83% → ⭐⭐⭐⭐⭐
λ_2H = 1.774. P(no goal in 2H) = only 17%. This game will have a second-half goal in almost every scenario.

**Goal in 1st Half** — 77% → ⭐⭐⭐⭐⭐
λ_1H = 1.452. Both teams attack from the off — high probability of first-half goal.

---

## Key Risks

- **Martínez's Bayesian save% (59.4%):** Model flags this as below-average GK. If Martínez performs at 70%+ (his historical level), England's expected goals drop significantly and Argentina's odds improve further.
- **England's +2.07 goals vs xG:** England have been scoring above their model. If conversion regresses (as expected against better opposition), their effective λ is lower than 1.557.
- **Argentina's fast break danger:** 40% conversion on counter-attacks. If England's high defensive line is caught even once, it can be decisive. Argentina's counter-attack goal could completely change match dynamics and invalidate most picks.
- **Referee unknown:** Card picks could shift materially depending on appointment. An aggressive referee could push Total YC toward 2.5+ territory.
- **Rice On-Off −1.24:** England's most negative regular starter over 6G. His structural defensive liability creates gaps that Messi specifically exploits — if Rice accumulates a YC early, England's discipline and defensive structure both suffer.
