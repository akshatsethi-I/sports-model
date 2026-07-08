---
title: R32 — Brazil vs Japan
type: analysis
sport: football
competition: WC2026 Round of 32
tags: [wc2026, r32, prediction, brazil, japan]
sources: [opta-wc2026-all-tables]
last_updated: 2026-06-28
---

# R32: Brazil vs Japan — Jun 29, 2026

## Pre-Prediction Checklist

### Step 1 — Qualification stakes
Knockout match. Both must win or it goes to extra time/penalties.
Brazil are clear statistical favourites. Japan are unbeaten but their xG overperformance (+3.08 goals above expected) is the central risk factor for them going forward.

### Step 2 — Opponent-adjusted xG model

**Brazil attacking vs Japan defence:**
- Brazil SoT/game: 19/3 = 6.33
- Japan SoT allowed/game: (12 saves + 3 GC) = 15 SoT / 3 = 5.0/game
- Adjusted Brazil SoT: 6.33 × (5.0 / 5.5) = **5.75**
- Japan GK implied save% (Suzuki): 12/(12+3) = **80.0%**
- Brazil expected goals: 5.75 × (1 − 0.80) = **1.15**

**Japan attacking vs Brazil defence:**
- Japan SoT/game: 11/3 = 3.67
- Brazil SoT allowed/game: (11 saves + 1 GC) = 12 SoT / 3 = 4.0/game
- Adjusted Japan SoT: 3.67 × (4.0 / 5.5) = **2.67**
- Brazil GK implied save% (Alisson): 11/(11+1) = **91.7%**
- Japan expected goals: 2.67 × (1 − 0.917) = **0.22**

**Total expected goals: 1.37**

### Step 3 — Probability-first derivation

Using Poisson (λ_Brazil=1.15, λ_Japan=0.22):

| Outcome | Probability |
|---------|------------|
| Brazil win (90') | **61%** |
| Draw (→ ET/pens) | **32%** |
| Japan win (90') | **7%** |
| Brazil qualify (incl. ET/pens) | **~82%** |
| Under 2.5 goals | **84%** |
| BTTS Yes | **13.5%** |
| BTTS No | **86.5%** |

---

## Team Profiles — Key Model Inputs

### Brazil
- **Style**: Patient possession (52%, 89.7% pass accuracy — highest in dataset). PPDA 12.5 mid-block. 10 through balls — Vinicius released in behind. Not cross-dominant (43 crosses, 33% accuracy).
- **Attack**: 6.33 SoT/game. xG efficiency 1.46x — slight overperformance but xG/shot 0.18 (genuine quality). 7 goals from 4.78 xG in 3 games.
- **Defence**: Alisson 91.7% implied save% — best GK in dataset by far. 4.0 SoT allowed/game. 0 in-box goals conceded from open play.
- **Physical**: 5.98 km/h, 3727 HSR. Moderate intensity but intelligent pressing (2 goal-ending high turnovers — highest in dataset).
- **Movement**: 1168 offers, 36 receptions in behind. Vinicius Jr movement drives the behind-the-line game.
- **Fouls committed**: 38/3 = 12.7/game. Casemiro on 1 yellow — risk.

### Japan
- **Style**: Mid-block (BRT 34.4s — moderate press. PPDA 12.6). Compact defensive shape. xG/shot allowed 0.06 — best defensive quality restriction in dataset. Do not press aggressively.
- **Attack**: 3.67 SoT/game. xG efficiency **2.40x — the highest overperformance in the dataset. They have scored 3.08 goals above expected. Regression is almost certain.**
- **GK**: Suzuki 80% implied save% — decent but not elite.
- **Discipline**: 1 YC in 3 games — most disciplined team in dataset. Almost no card risk.
- **Movement**: 1172 offers — rank 9/48. More movement than their passive block suggests. Itō on the right generates the attacking threat.
- **Super-sub weapon**: Shiogai +11.83 On-Off in 7 mins — every regular starter is net-negative. Japan's best football comes from the bench wave at 60-75 min.

### Key clash dynamics
- Japan's xG efficiency is 2.40x. Their true scoring rate is ~0.83 goals/game (2.5 xG / 3 games). The model gives them 0.22 expected goals against Alisson. Both corrections pull the same way: Japan unlikely to score.
- Alisson 91.7% vs Suzuki 80%: the GK gap is enormous. Brazil's shots are much more likely to convert.
- Japan's defensive shape (0.06 xG/shot allowed) will restrict Brazil's chance quality — but Brazil's volume (5.75 adj SoT) overcomes this.
- Japan's counter-attack (direct speed 1.75, Itō +3.92 On-Off) is the only realistic threat. They need to absorb for 90 minutes and steal on the break.
- Brazil aerial dominance (67.8% aerial duels won — highest in dataset) neutralises Japan's defensive set piece resilience.

---

## Match Flow Prediction

- **Likely opening phase**: Brazil on the ball, high possession, patient. Japan sit in their 4-4-2 / 4-5-1 block. Territory belongs to Brazil but Japan limit quality (0.06 xG/shot restriction).
- **Key tactical battles**: Vinicius Jr (4G, left-side pace) vs Japan's right defensive shape. Paquetá through balls vs Japan's defensive line. Itō counter-attacks vs Brazil's fullback coverage.
- **Momentum triggers**: Brazil goal → Japan forced open → Vinicius counters become lethal. Japan goal on the break → Brazil's bench (negative On-Off) becomes a concern in ET.
- **Most likely scenarios**:
  - Brazil win 1-0: **43%** (most likely single outcome)
  - Brazil win 2-0: **18%**
  - 0-0 → ET, Brazil progress: **22%**
  - Japan steal 1-0 or 0-0 → pens: **10-12%**
- **Key indicators to watch**: Japan's Shiogai entering at 60-75 min is the moment Brazil must respond. If Alisson is untested through 70 minutes, Brazil's win is secure.

---

## Market Predictions

### Result / Qualification

| Market | Model prob | Stars | Reasoning |
|--------|-----------|-------|-----------|
| Brazil win (90') | 61% | ⭐⭐⭐⭐ | Strong but 32% draw probability keeps it below ⭐⭐⭐⭐⭐ |
| **Brazil qualify (incl. ET/pens)** | **82%** | ⭐⭐⭐⭐⭐ | Even in ET Brazil are heavy favourites. Alisson in a shootout is elite |
| Japan win (90') | 7% | — | Avoid unless massive odds |

### Goals

| Market | Model prob | Stars | Reasoning |
|--------|-----------|-------|-----------|
| **Under 2.5 goals** | **84%** | ⭐⭐⭐⭐⭐ | λ=1.37 total. Japan expected 0.22 goals vs Alisson. This is the structural bedrock of the match |
| **BTTS No** | **86.5%** | ⭐⭐⭐⭐⭐ | Japan score probability only 20%. Their xG overperformance (2.40x) corrects directly against the best GK in the tournament |
| Under 1.5 goals | 61% | ⭐⭐⭐⭐ | Still high probability; aggressive version of the Under pick |
| Over 2.5 goals | 16% | — | Avoid |

### Shots on Target

| Market | Model prob | Stars | Reasoning |
|--------|-----------|-------|-----------|
| **Total SoT Over 5.5** | **84%** | ⭐⭐⭐⭐⭐ | λ_total adj SoT = 8.42. Brazil alone expected 5.75. Extremely high probability |
| Total SoT Over 6.5 | 75% | ⭐⭐⭐⭐ | Strong secondary pick |
| Total SoT Over 7.5 | 62% | ⭐⭐⭐⭐ | Viable third pick |
| Brazil SoT Over 4.5 | ~78% | ⭐⭐⭐⭐ | Brazil adj SoT = 5.75 alone |

### Total Shots

| Market | Model prob | Stars | Reasoning |
|--------|-----------|-------|-----------|
| Total shots Over 19.5 | ~80% | ⭐⭐⭐⭐ | Brazil 13.3/game; Japan allows 14+ shots/game (xG/shot 0.06 = low quality shots conceded). Expected total ~30 |
| Total shots Over 24.5 | ~65% | ⭐⭐⭐⭐ | Strong |
| Total shots Over 27.5 | ~53% | ⭐⭐⭐ | Value at right odds |

### Corners

| Market | Model prob | Stars | Reasoning |
|--------|-----------|-------|-----------|
| Total corners Over 7.5 | 62% | ⭐⭐⭐⭐ | Expected total = 8.4. Brazil 5.33 + Japan 3.07 corners expected |
| Total corners Over 8.5 | 49% | ⭐⭐⭐ | Close to 50/50; value dependent on odds |
| Brazil corners Over 4.5 | ~65% | ⭐⭐⭐⭐ | Brazil expected ~5.3 own corners |

### Fouls

| Market | Model prob | Stars | Reasoning |
|--------|-----------|-------|-----------|
| **Total fouls Over 18.5** | **75%** | ⭐⭐⭐⭐ | Brazil 12.7/game + Japan 9.0/game = 21.7 expected |
| Total fouls Over 20.5 | 60% | ⭐⭐⭐ | Viable secondary |

### Cards
**Avoid cards markets.** Japan have 1 yellow in 3 games (most disciplined team in dataset). Total expected cards only 2.0/game. No value here.

| Market | Model prob | Stars | Reasoning |
|--------|-----------|-------|-----------|
| Over 1.5 cards | 59% | — | Not enough edge |
| Over 2.5 cards | 32% | — | Avoid |

### GK Saves

| Market | Model prob | Stars | Reasoning |
|--------|-----------|-------|-----------|
| **Total GK saves Over 5.5** | **~70%** | ⭐⭐⭐⭐ | Alisson expected: 2.67 adj Japan SoT × 91.7% = 2.45 saves. Suzuki expected: 5.75 adj Brazil SoT × 80% = 4.6 saves. Total = ~7.0 |
| Alisson saves Under 3.5 | ~65% | ⭐⭐⭐⭐ | Japan only expected 2.67 adj SoT against Alisson. Most likely Alisson makes 2-3 saves |
| Suzuki saves Over 3.5 | ~70% | ⭐⭐⭐⭐ | Brazil expected 5.75 adj SoT. Suzuki saves 80% = ~4.6 expected |

---

## Best picks summary (in priority order)

1. **BTTS No** ⭐⭐⭐⭐⭐ — 86.5%. Japan's xG overperformance (2.40x) corrects against Alisson (91.7%). Near-structural certainty.
2. **Under 2.5 goals** ⭐⭐⭐⭐⭐ — 84%. λ=1.37 total. The single most robust market in this match.
3. **Total SoT Over 5.5** ⭐⭐⭐⭐⭐ — 84%. Brazil alone generate 5.75 adj SoT. Suzuki will be busy.
4. **Brazil qualify** ⭐⭐⭐⭐⭐ — 82%.
5. **Total fouls Over 18.5** ⭐⭐⭐⭐ — 75%. Brazil foul-heavy, Japan draw fouls (42/3 games).
6. **Total SoT Over 6.5** ⭐⭐⭐⭐ — 75%.
7. **Suzuki saves Over 3.5** ⭐⭐⭐⭐ — ~70%.
8. **Brazil win (90')** ⭐⭐⭐⭐ — 61%.
9. **Total corners Over 7.5** ⭐⭐⭐⭐ — 62%.
10. **Total shots Over 19.5** ⭐⭐⭐⭐ — ~80%.
11. **Under 1.5 goals** ⭐⭐⭐⭐ — 61% (aggressive Under play).
12. **Total GK saves Over 5.5** ⭐⭐⭐⭐ — ~70%.

## Cross-links
- [[Teams/brazil]]
- [[Teams/japan]]
- [[Models/wc2026-dataset-benchmarks]]
