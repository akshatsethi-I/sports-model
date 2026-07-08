---
title: R16 — Colombia vs Switzerland (WC2026)
type: analysis
sport: football
tags: [wc2026, r16, colombia, switzerland, prediction]
sources: [fbref-4g, opta-4g, footystats, lineups]
last_updated: 2026-07-08
---

# R16 — Colombia vs Switzerland

**Date:** 2026-07-08
**Referee:** Iván Barton (avg 4.76 YC/game)
**Lineups:** Switzerland 4-2-3-1 | Colombia 4-3-3

---

## Model Inputs

### Switzerland
| Metric | Value |
|--------|-------|
| SoT/game (4G) | 5.75 |
| SoTA-allowed/game (4G) | 4.0 → regressed 4.64 |
| Kobel save% (4G) | 81.3% → regressed 78.7% |
| xG/game (Opta) | 2.21 |
| xGA/game (Opta) | 0.82 |
| PPDA | 11.0 |
| Fouls/game | 11.75 |
| YC/game | 0.75 |
| Corners/game (4G WC) | 5.75 |
| Offsides/game | 1.25 |
| Possession | 57.5% |
| SP goals (4G) | 0/11 shots — persistent underperformance |
| Box touches conceded | 13.5/game |

**Key lineup note:** Vargas (+3.35 On-Off) and Manzambi (+1.70) NOT starting. Embolo (−4.32) and Rieder (−3.35) starting → **−5% quality adjustment applied to attack.**

### Colombia
| Metric | Value |
|--------|-------|
| SoT/game (4G) | 6.75 |
| SoTA-allowed/game (4G) | 1.25 → regressed 3.07 |
| Vargas save% (4G) | 80% → regressed 74.4% |
| xG/game (Opta) | 1.58 (underperforming xG) |
| xGA/game (Opta) | 0.68 (massively overperforming) |
| PPDA | 13.3 |
| Fouls/game | 12.25 |
| YC/game | 1.5 |
| Corners/game (4G WC) | 4.25 |
| Offsides/game | 3.75 (highest in dataset) |
| Possession | 60.1% |
| SP goals (4G) | 0/20 shots — worst in dataset |
| Box touches conceded | 9.0/game (lowest in dataset) |

---

## Goals Model

> ⚠️ **Note:** This match used the group-stage benchmark (5.5). R16 corrected benchmark is 3.5 — λ values below are ~20-30% understated. See [[Lessons/dataset-benchmark-ages-by-round]].

```
Switzerland adj SoT = 5.75 × (3.07/5.5) × 0.95 (lineup) = 3.05
λ_SUI = 3.05 × (1 − 0.744) = 0.781

Colombia adj SoT = 6.75 × (4.64/5.5) = 5.70
λ_COL = 5.70 × (1 − 0.787) = 1.214
```

**λ_total = 1.995**

---

## Match Outcome Probabilities

| Outcome | Probability |
|---------|-------------|
| Colombia win | 46.4% |
| Draw | 29.9% |
| Switzerland win | 23.8% |
| Colombia win or draw | 76.3% |
| BTTS Yes | 38.1% |
| BTTS No | 61.9% |

---

## Match Flow Prediction

- **Likely opening phase:** Colombia control possession (60%+). Switzerland sit in 4-2-3-1 mid-block (PPDA 11). Game will be patient — Colombia probe, Switzerland absorb and counter through Embolo/Ndoye.
- **Key tactical battles:** Colombia wide players (Díaz, Muñoz) vs Switzerland fullbacks. Xhaka as Switzerland's outlet in transition.
- **Momentum triggers:** First goal critical — if Colombia score, Switzerland must open up (suits Colombia counters). If Switzerland score on the counter, Colombia potentially chase desperately.
- **Scenarios:**
  - Colombia controlled win 1-0 or 2-0: 35% — most likely. Colombia's defensive elite suppression (1.25 SoTA-allowed) holds.
  - Draw / Switzerland counter-win: 30% — Switzerland's through-ball threat (4.5/game) and Embolo physicality can cause problems.
  - High-scoring open game: 15% — possible if early goal creates open spaces.
- **Key indicators:** Watch Switzerland SoT in first 30 minutes. If Kobel faces 3+ Colombia SoT before HT, under 3.5 total goals becomes very safe. If Switzerland score first, λ_COL rises sharply (desperation factor).

---

## Selected Picks (30 total evaluated)

### Goals
| Pick | Prob | Stars |
|------|------|-------|
| Total goals under 3.5 | 85.9% | ⭐⭐⭐⭐⭐ |
| Switzerland under 1.5 goals | 81.6% | ⭐⭐⭐⭐⭐ |
| Colombia under 2.5 goals | 87.6% | ⭐⭐⭐⭐⭐ |
| Colombia to score | 70.3% | ⭐⭐⭐⭐ |
| BTTS No | 61.9% | ⭐⭐⭐ |
| Colombia win or draw | 76.3% | ⭐⭐⭐⭐⭐ |

### Corners (λ_SUI=5.75, λ_COL=4.25, total=10.0)
| Pick | Prob | Stars |
|------|------|-------|
| Total corners over 6.5 | 86.9% | ⭐⭐⭐⭐⭐ |
| Total corners under 12.5 | 79.2% | ⭐⭐⭐⭐⭐ |
| Switzerland corners over 2.5 | 92.6% | ⭐⭐⭐⭐⭐ |
| Switzerland corners or draw | ~79% | ⭐⭐⭐⭐⭐ |
| Colombia corners under 5.5 | 74.5% | ⭐⭐⭐⭐ |

### Cards (referee Barton 4.76/game, λ_total=3.51)
| Pick | Prob | Stars |
|------|------|-------|
| Total YC over 1.5 | 86.5% | ⭐⭐⭐⭐⭐ |
| Total YC under 5.5 | 85.8% | ⭐⭐⭐⭐⭐ |
| Switzerland YC under 2.5 | 88.6% | ⭐⭐⭐⭐⭐ |
| Colombia YC over 0.5 | 90.4% | ⭐⭐⭐⭐⭐ |
| Colombia YC under 3.5 | 79.1% | ⭐⭐⭐⭐ |

### Fouls (λ_COL=12.875, λ_SUI=11.375, total=24.25)
| Pick | Prob | Stars |
|------|------|-------|
| Total fouls under 29.5 | 85.7% | ⭐⭐⭐⭐⭐ |
| Switzerland fouls under 14.5 | 82.3% | ⭐⭐⭐⭐⭐ |
| Colombia fouls under 15.5 | 76.8% | ⭐⭐⭐⭐ |

### Offsides (λ_COL=2.625, λ_SUI=0.875, total=3.5)
| Pick | Prob | Stars |
|------|------|-------|
| Total offsides over 1.5 | 86.4% | ⭐⭐⭐⭐⭐ |
| Colombia offsides over 1.5 | 73.7% | ⭐⭐⭐⭐ |
| Switzerland offsides under 1.5 | 78.2% | ⭐⭐⭐⭐ |

### SoT (λ_COL=5.70, λ_SUI=3.05, total=8.75)
| Pick | Prob | Stars |
|------|------|-------|
| Total SoT over 6.5 | 77.7% | ⭐⭐⭐⭐⭐ |
| Colombia more SoT | 81.5% | ⭐⭐⭐⭐⭐ |
| Colombia SoT over 4.5 | 67.3% | ⭐⭐⭐⭐ |
| Switzerland SoT under 3.5 | 63.6% | ⭐⭐⭐⭐ |

### Match flow
| Pick | Prob | Stars |
|------|------|-------|
| Goal in 2nd half | 66.6% | ⭐⭐⭐⭐ |
| Colombia more YC | 73.4% | ⭐⭐⭐⭐ |

---

## Result

**Switzerland 0-0 Colombia (Switzerland win 4-3 on penalties)**

| Stat | Switzerland | Colombia |
|------|------------|---------|
| Goals | 0 | 0 |
| Shots | 6 | 7 |
| SoT | 2 | 2 |
| Corners | 3 | 4 |
| Fouls | 13 | 15 |
| YC | 2 | 1 |

---

## Post-Match Score

### Goals
| Pick | Prob | Stars | Result |
|------|------|-------|--------|
| Total goals under 3.5 | 85.9% | ⭐⭐⭐⭐⭐ | ✅ 0 goals |
| Switzerland under 1.5 goals | 81.6% | ⭐⭐⭐⭐⭐ | ✅ 0 goals |
| Colombia under 2.5 goals | 87.6% | ⭐⭐⭐⭐⭐ | ✅ 0 goals |
| Colombia to score | 70.3% | ⭐⭐⭐⭐ | ❌ 0 goals |
| BTTS No | 61.9% | ⭐⭐⭐ | ✅ 0-0 |
| Colombia win or draw | 76.3% | ⭐⭐⭐⭐⭐ | ✅ Draw in 90 mins |

### Corners
| Pick | Prob | Stars | Result |
|------|------|-------|--------|
| Total corners over 6.5 | 86.9% | ⭐⭐⭐⭐⭐ | ✅ 7 total |
| Total corners under 12.5 | 79.2% | ⭐⭐⭐⭐⭐ | ✅ 7 total |
| Switzerland corners over 2.5 | 92.6% | ⭐⭐⭐⭐⭐ | ✅ SUI 3 |
| Switzerland corners or draw | ~79% | ⭐⭐⭐⭐⭐ | ❌ Colombia had more (4 vs 3) |
| Colombia corners under 5.5 | 74.5% | ⭐⭐⭐⭐ | ✅ COL 4 |

### Cards
| Pick | Prob | Stars | Result |
|------|------|-------|--------|
| Total YC over 1.5 | 86.5% | ⭐⭐⭐⭐⭐ | ✅ 3 total |
| Total YC under 5.5 | 85.8% | ⭐⭐⭐⭐⭐ | ✅ 3 total |
| Switzerland YC under 2.5 | 88.6% | ⭐⭐⭐⭐⭐ | ✅ SUI 2 |
| Colombia YC over 0.5 | 90.4% | ⭐⭐⭐⭐⭐ | ✅ COL 1 |
| Colombia YC under 3.5 | 79.1% | ⭐⭐⭐⭐ | ✅ COL 1 |

### Fouls
| Pick | Prob | Stars | Result |
|------|------|-------|--------|
| Total fouls under 29.5 | 85.7% | ⭐⭐⭐⭐⭐ | ✅ 28 total |
| Switzerland fouls under 14.5 | 82.3% | ⭐⭐⭐⭐⭐ | ✅ SUI 13 |
| Colombia fouls under 15.5 | 76.8% | ⭐⭐⭐⭐ | ✅ COL 15 |

### Offsides
| Pick | Result |
|------|--------|
| All 3 offside picks | N/A — data not provided |

### SoT
| Pick | Prob | Stars | Result |
|------|------|-------|--------|
| Total SoT over 6.5 | 77.7% | ⭐⭐⭐⭐⭐ | ❌ 4 total (2+2) |
| Colombia more SoT | 81.5% | ⭐⭐⭐⭐⭐ | ❌ 2-2 draw |
| Colombia SoT over 4.5 | 67.3% | ⭐⭐⭐⭐ | ❌ COL 2 |
| Switzerland SoT under 3.5 | 63.6% | ⭐⭐⭐⭐ | ✅ SUI 2 |

### Match Flow
| Pick | Prob | Stars | Result |
|------|------|-------|--------|
| Goal in 2nd half | 66.6% | ⭐⭐⭐⭐ | ❌ No goals |
| Colombia more YC | 73.4% | ⭐⭐⭐⭐ | ❌ SUI had more (2 vs 1) |

---

## Final Score: 18/27 (67%) — offsides excluded (data unavailable)

### What hit
Cards and fouls markets: 8/8 — perfect. All unders on goals: 3/3. Corners volume: 4/5.

### What missed
**SoT model collapsed** — predicted 8.75 total, actual was 4. Colombia predicted 5.70 adj SoT, got 2. Switzerland predicted 3.05, got 2. Both teams played at ultra-defensive intensity the model did not anticipate.

Colombia to score (70% pick) missed — their worst attacking performance of the tournament.

Colombia YC favourite missed — Switzerland fouled more and got carded more despite being the "defensive" team.

### Key model lesson
> ⚠️ When two defensively elite teams meet in a knockout match (Colombia SoTA-allowed 1.25/game, Switzerland xGA 0.82/game), the model's λ estimate is still too high. Ultra-defensive KO games between two quality defenses produce shot volumes 40-50% below the model's prediction. Consider a "defensive matchup discount" when both teams are in the bottom quartile of SoTA-allowed. Flag for future lesson.

## Links
- [[Teams/colombia]]
- [[Teams/switzerland]]
- [[Lessons/dataset-benchmark-ages-by-round]]
