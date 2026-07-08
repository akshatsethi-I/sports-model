---
title: R32 — Mexico vs Ecuador
type: analysis
sport: football
competition: WC2026 Round of 32
tags: [wc2026, r32, prediction, mexico, ecuador]
sources: [fbref-mexico-wc2026, opta-mexico-wc2026, fbref-ecuador-wc2026, opta-ecuador-wc2026]
last_updated: 2026-07-01
---

# R32: Mexico vs Ecuador

## Lineups

**Mexico (4-3-3):**
Rangel — Gallardo, Vásquez, Álvarez, Reyes — Fidalgo, Lira, Alvarado — Quiñones, Jiménez, Gutiérrez

**Ecuador (4-4-2):**
Galíndez — Franco, Ordóñez, Pacho, Hincapié — Yeboah, Vite, Caicedo, Angulo — Plata, Valencia

**Referee:** Slavko Vinčić (SVN) — **4.17 YC avg/game** (above average, card-active)

### Key Lineup Notes
- **Mexico:** César Montes (CB, +1.52 On-Off) **SUSPENDED** — Vásquez (−1.50) and Álvarez (−0.55) makeshift CB pair. Structural defensive downgrade. Alvarado (+2.08) and Quiñones (+2.15) ✓ — Mexico's best On-Off players present.
- **Ecuador:** Hincapié (−4.86 On-Off) starts at LB — structural left-side weakness. Valencia (0G/10sh in tournament) starts — major regression due. Caicedo, Plata, Yeboah (+2.82) all present. 4 hit posts in tournament — historically unlucky.

---

## Model

### Mexico attacking vs Ecuador defence
- Mexico SoT/game: **4.33** (13 in 3 games)
- Ecuador SoTA-allowed: 3.33/game → regress 20% (mixed results, 3rd-place qualifier): **3.67**
- Adj Mexico SoT = 4.33 × (3.67/5.5) = **2.89**
- Galíndez save%: 80% on 10 SoTA → regress 20%: **75%**
- **λ_Mexico = 2.89 × 0.25 = 0.72 ≈ 0.71**

### Ecuador attacking vs Mexico defence
- Ecuador SoT/game: **6.33** (19 in 3 games)
- Mexico SoTA-allowed: 1.67/game (3 CS in 3 wins — strong corroboration) → light regress 15%: **1.92**
- Adj Ecuador SoT = 6.33 × (1.92/5.5) = **2.21**
- Rangel save%: 100% on 5 SoTA = noise → dataset mean **65%**
- Base Ecuador xG = 2.21 × 0.35 = 0.77
- Montes suspension (Vásquez −1.50 at CB): slight defensive downgrade → +4%: **0.80**
- **λ_Ecuador = 0.80**

---

## λ_Mexico = 0.71 | λ_Ecuador = 0.80 | λ_total = 1.51

### Match Outcomes
| Outcome | Probability |
|---------|------------|
| **Mexico win (90')** | **29%** |
| **Draw (90')** | **37%** |
| **Ecuador win (90')** | **34%** |
| Mexico qualify (incl. ET/pens) | ~46% |
| Ecuador qualify (incl. ET/pens) | ~54% |

> ⚠️ **Model-reality tension:** Mexico won ALL 3 group games, finished 1st, and conceded 0 goals. Ecuador finished 3rd in their group with 4 points. The model shows Ecuador with a marginal edge (0.80 vs 0.71) primarily because of higher SoT volume (6.33 vs 4.33/game) and Rangel's 100% save% being unsustainable. This tension is real — Mexico's results say they are the better team. The model scores their attack lower because their SoT volume (4.33) is below-average. Take model probabilities as calibration, not as certainty.

### Score Distributions
| Goals | Mexico (λ=0.71) | Ecuador (λ=0.80) |
|-------|----------------|----------------|
| 0 | 49.2% | 44.9% |
| 1 | 34.9% | 35.9% |
| 2 | 12.4% | 14.4% |
| 3+ | 3.5% | 4.8% |

---

## Market Predictions

### Result / Qualification
| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| Draw (90') | 37% | — | Most likely single outcome |
| **Ecuador qualify (incl. ET/pens)** | **54%** | ⭐⭐⭐ | Marginal edge; Ecuador's regression signal |
| Ecuador win (90') | 34% | ⭐⭐⭐ | Model slight edge vs group winner |
| Mexico win (90') | 29% | ⭐⭐ | Model understates them given 3W group stage |
| Mexico qualify (incl. ET/pens) | 46% | ⭐⭐⭐ | Tight |

### Goals
| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Under 3.5** | **93%** | ⭐⭐⭐⭐⭐ | λ=1.51; both defences among tournament's best |
| **Under 2.5** | **81%** | ⭐⭐⭐⭐⭐ | Strong even with clean model; very defensive match |
| **BTTS No** | **72%** | ⭐⭐⭐⭐⭐ | BTTS Yes only 28%; P(M≥1)×P(E≥1) = 50.8%×55.1% |
| Under 1.5 | 56% | ⭐⭐⭐⭐ | Marginal |
| Over 0.5 | 78% | ⭐⭐⭐⭐ | P(at least 1 goal) = 77.8% |
| Over 1.5 | 44% | — | Skip |
| 0-0 correct score | 22% | ⭐⭐⭐ | P(0,0) = 0.492×0.449 = 22.1% |

### Shots on Target
*Adj Mexico SoT = 2.89 | Adj Ecuador SoT = 2.21 | Total = 5.10*

| Market | Prob | Stars |
|--------|------|-------|
| **Total SoT Under 6.5** | **~79%** | ⭐⭐⭐⭐⭐ |
| **Ecuador SoT Under 3.5** | **~75%** | ⭐⭐⭐⭐⭐ |
| **Mexico SoT Under 4.5** | **~77%** | ⭐⭐⭐⭐⭐ |
| Total SoT Under 5.5 | ~65% | ⭐⭐⭐⭐ |

### Saves
*λ_Rangel_saves = 2.21 × 0.65 = 1.44 | λ_Galíndez_saves = 2.89 × 0.75 = 2.17*

| Market | Prob | Stars |
|--------|------|-------|
| **Galíndez saves Over 0.5** | **~89%** | ⭐⭐⭐⭐⭐ |
| **Galíndez saves Under 3.5** | **~83%** | ⭐⭐⭐⭐⭐ |
| **Rangel saves Over 0.5** | **~76%** | ⭐⭐⭐⭐⭐ |
| **Rangel saves Under 2.5** | **~83%** | ⭐⭐⭐⭐⭐ |
| Galíndez saves Over 1.5 | ~64% | ⭐⭐⭐⭐ |

### Corners
*Mexico own: 1.33/game | Ecuador own: 5.67/game*
*λ_Mexico corners = (1.33 + 4.50)/2 = 2.92 | λ_Ecuador corners = (5.67 + 5.27)/2 = 5.47 | λ_total = 8.39*

| Market | Prob | Stars |
|--------|------|-------|
| **Mexico corners Under 3.5** | **~67%** | ⭐⭐⭐⭐ |
| **Ecuador corners Over 4.5** | **~64%** | ⭐⭐⭐⭐ |
| Total corners Under 10.5 | ~73% | ⭐⭐⭐⭐ |
| Total corners Over 7.5 | ~55% | ⭐⭐⭐ |

### Fouls
*Mexico 11.3/game | Ecuador 11.67/game | Total ≈ 23.0*

| Market | Prob | Stars |
|--------|------|-------|
| **Total fouls Over 19.5** | **~75%** | ⭐⭐⭐⭐⭐ |
| Total fouls Over 21.5 | ~62% | ⭐⭐⭐⭐ |
| **Ecuador fouls Over 9.5** | **~65%** | ⭐⭐⭐⭐ |

### Cards (Vinčić — 4.17 YC/game)
*λ_Ecuador_YC ≈ 2.98 (71.4% share) | λ_Mexico_YC ≈ 1.19 (28.6% share)*

| Market | Prob | Stars |
|--------|------|-------|
| **Ecuador YC Over 0.5** | **95%** | ⭐⭐⭐⭐⭐ |
| **Mexico YC Under 2.5** | **~88%** | ⭐⭐⭐⭐⭐ |
| **Total YC Over 2.5** | **~79%** | ⭐⭐⭐⭐⭐ |
| **Ecuador YC Over 1.5** | **~80%** | ⭐⭐⭐⭐⭐ |
| **Total YC Under 5.5** | **~76%** | ⭐⭐⭐⭐⭐ |
| Total YC Over 3.5 | ~60% | ⭐⭐⭐⭐ |
| Mexico YC Over 0.5 | ~70% | ⭐⭐⭐⭐ |

### Offsides
*Mexico 1.33/game | Ecuador 0.33/game | λ_total = 1.67*

| Market | Prob | Stars |
|--------|------|-------|
| **Total offsides Under 2.5** | **~77%** | ⭐⭐⭐⭐ |

---

## Best Picks — Priority Order

| # | Market | Prob | Stars |
|---|--------|------|-------|
| 1 | Ecuador YC Over 0.5 | 95% | ⭐⭐⭐⭐⭐ |
| 2 | Under 3.5 goals | 93% | ⭐⭐⭐⭐⭐ |
| 3 | Mexico YC Under 2.5 | 88% | ⭐⭐⭐⭐⭐ |
| 4 | Galíndez saves Over 0.5 | 89% | ⭐⭐⭐⭐⭐ |
| 5 | Ecuador YC Over 1.5 | 80% | ⭐⭐⭐⭐⭐ |
| 6 | Under 2.5 goals | 81% | ⭐⭐⭐⭐⭐ |
| 7 | BTTS No | 72% | ⭐⭐⭐⭐⭐ |
| 8 | Total YC Over 2.5 | 79% | ⭐⭐⭐⭐⭐ |
| 9 | Total YC Under 5.5 | 76% | ⭐⭐⭐⭐⭐ |
| 10 | Rangel saves Over 0.5 | 76% | ⭐⭐⭐⭐⭐ |
| 11 | Total fouls Over 19.5 | 75% | ⭐⭐⭐⭐⭐ |
| 12 | Ecuador SoT Under 3.5 | 75% | ⭐⭐⭐⭐⭐ |
| 13 | Mexico SoT Under 4.5 | 77% | ⭐⭐⭐⭐⭐ |
| 14 | Total SoT Under 6.5 | 79% | ⭐⭐⭐⭐⭐ |
| 15 | Galíndez saves Under 3.5 | 83% | ⭐⭐⭐⭐⭐ |
| 16 | Rangel saves Under 2.5 | 83% | ⭐⭐⭐⭐⭐ |
| 17 | Total offsides Under 2.5 | 77% | ⭐⭐⭐⭐ |
| 18 | Total corners Under 10.5 | 73% | ⭐⭐⭐⭐ |
| 19 | Mexico corners Under 3.5 | 67% | ⭐⭐⭐⭐ |
| 20 | Ecuador corners Over 4.5 | 64% | ⭐⭐⭐⭐ |
| 21 | Galíndez saves Over 1.5 | 64% | ⭐⭐⭐⭐ |
| 22 | Total fouls Over 21.5 | 62% | ⭐⭐⭐⭐ |
| 23 | Total YC Over 3.5 | 60% | ⭐⭐⭐⭐ |

**Predicted score: 0-0 → ET** (22%) | **1-0 Mexico** (17%) | **0-1 Ecuador** (16%)

---

## Match Flow Prediction

- **Likely opening phase:** Mexico sit in organised mid-block (PPDA 14.4, press start 42.3m). Ecuador press high (PPDA 8.9) and attempt to force turnovers. Caicedo and Vite press aggressively from centre. Mexico look to transition via Quiñones' runs behind Ecuador's back 4.
- **Key tactical battles:**
  - **Hincapié (−4.86 On-Off) vs Quiñones/Alvarado:** Ecuador's biggest structural weakness at LB. Mexico's best performers target this side.
  - **Valencia (0G/10sh) vs Vásquez/Álvarez:** Valencia statistically overdue. Vásquez (−1.50 at CB replacing Montes) is Mexico's key vulnerability.
  - **Ecuador crosses (19.3/game) vs Mexico's aerial dominance:** Mexico win 54.2% of aerial duels vs Ecuador's 42.7%. Cross volume won't be the issue — quality conversion is.
- **Momentum triggers:**
  - Ecuador early goal → Mexico must abandon low block, open up
  - Mexico early goal → Ecuador must commit forward, Quiñones counter-attack threat
  - Valencia scores → psychological shift, Ecuador confidence surges
  - Hincapié booking early → Ecuador may sub him early to protect
- **Scenarios:** 0-0 ET (22%); Ecuador 0-1 (16%); Mexico 1-0 (17%); ET goes to pens — Ecuador slight edge on squad depth
- **Key indicators:** Ecuador SoT count by 60 min (if ≥2, Rangel's luck being tested); Hincapié foul count; Quiñones runs in behind

---

## Ecuador Regression Warning

Ecuador's −3.12 Goals vs xG is the largest negative variance in WC2026:
| Metric | Value |
|--------|-------|
| xG | 5.12 |
| Goals | 2 |
| Goals vs xG | **−3.12** |
| Hit posts | **4** |
| Headers scored from 11 attempts | **0** |
| Fast breaks converted from 3 | **0** |

The model's λ_Ecuador = 0.80 already reflects their raw SoT volume (6.33/game) against Mexico's tough defence. The regression in conversion rate is embedded in using opponent save% (Rangel at 65%) rather than their observed 0.11 G/SoT ratio. If Galíndez save% reverts toward 70%, Ecuador's effective λ climbs to ~0.90.

---

## Cross-links
- [[Teams/mexico]]
- [[Teams/ecuador]]
- [[Models/opponent-adjusted-sot-model]]
