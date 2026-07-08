---
title: Switzerland vs Algeria — WC2026 R32
type: analysis
sport: football
tags: [wc2026, r32, prediction]
sources: [switzerland-fbref, switzerland-opta, switzerland-opta-extended, algeria-fbref, algeria-opta, algeria-opta-extended, footystats, lineups, referee]
last_updated: 2026-07-02
---

# Switzerland vs Algeria — R32 Prediction

**Status: COMPLETE ✓ — FBRef + Opta + Opta Extended + Footystats + Confirmed Lineups + Referee ingested**

---

## Model Inputs

### Switzerland
| Input | Value | Note |
|-------|-------|------|
| SoT/game | **6.00** | 18 in 3 WC games |
| SoTA-allowed/game | **4.33 → regress 20% → 4.56** | 14 in 3 games, 0 CS |
| Kobel save% | **78.6% → regress 20% → 76%** | Solid GK |
| xG/game | **2.12** | Opta — 8th highest in dataset |
| Goals vs xG | **+0.63** | Essentially calibrated |
| xGA/game | **0.83** | Good defence |
| PPDA | **10.4** | Moderate press |
| Build-up goals | **1 from 14** | Moderate |
| Through balls/game | **5.33** | Elite — primary weapon |
| Crosses/game | **14.67** (Opta) | High volume, poor accuracy (11.4%) |
| Box touches/game | **30.33** | One of highest in dataset |
| SP attack | **0G from 9 SP shots** | Underperforming SP massively |
| Aerial duels | **50.7%** | Average — edge over Algeria (44.6%) |

### Algeria
| Input | Value | Note |
|-------|-------|------|
| SoT/game | **4.33** | 13 in 3 WC games |
| SoTA-allowed/game | **4.33 → regress 20% → 4.56** | 13 in 3 games, 0 CS |
| GK Zidane save% | **60% → regress 20% → 62%** | But **Benbot starts (0% on 3 SoTA → regress 40% → 26%)** |
| xG/game | **1.29** | Opta — moderate |
| Goals vs xG | **+1.12** | Slight overperformance |
| xGA/game | **1.13** | True defensive quality (+3.62 luck gap — best defensive luck flag in dataset) |
| PPDA | **12.5** | Medium block, press starts at 46.7m |
| Build-up goals | **1 from 10** | Moderate |
| SP attack | **2G from 12 SP shots (40% of goals)** | Primary scoring route |
| SP defence | **0G from 8 SP shots** | Solid SP defence |
| Aerial duels | **44.6%** | Weakest in this matchup — Switzerland's target zone |
| YC/game | **0.33** | Lowest in dataset |
| Fouls/game | **5.67** | Lowest in dataset |

---

## Clean Core Model

### Switzerland attacking vs Algeria (Benbot starts)
```
Adj SoT = 6.00 × (4.56 / 5.5) = 4.97
Benbot save% = 0% on 3 SoTA → regress 40% → 26%
λ_Switzerland (base) = 4.97 × (1 − 0.26) = 4.97 × 0.74 = 3.68
```

### Algeria attacking vs Switzerland (Kobel)
```
Adj SoT = 4.33 × (4.56 / 5.5) = 3.59
Wait — Switzerland SoTA-allowed: 14/game → regress 20%: 14/3 = 4.67 → 4.67×0.8 + 5.5×0.2 = 3.736 + 1.1 = 4.84
Adj SoT = 4.33 × (4.84 / 5.5) = 4.33 × 0.880 = 3.81
Kobel save% = 76%
λ_Algeria (base) = 3.81 × (1 − 0.76) = 3.81 × 0.24 = 0.91
```

---

## Confirmed Lineups (4-2-3-1 vs 4-2-3-1)

**Switzerland (4-2-3-1):** Kobel; Rodríguez, Akanji, Elvedi, Jaquez; Freuler, Ndoye; Vargas, Xhaka, Manzambi; Embolo

**Algeria (4-2-3-1):** Benbot; Belghali, Mandi, Bensebaini, Aït-Nouri; Bentaleb, Chaibi; Mahrez, Aouar, Maza; Gouiri

### Lineup Adjustments

**Switzerland (+/−):**
| Player | Min | On-Off | In XI? |
|--------|-----|--------|--------|
| Ruben Vargas | 177 | +3.51 | ✓ starts |
| Johan Manzambi | 129 | +1.45 | ✓ starts |
| Dan Ndoye | 146 | −1.56 | ✗ starts (drag) |
| **Breel Embolo** | **262** | **−10.22** | **✗ starts — worst in squad** |

> Net: Two positives (Vargas, Manzambi) partially offset by two drags (Embolo, Ndoye). **Dominant signal: Embolo −10.22 in near-full 262min sample — team performs significantly worse with him as CF.** One adjustment: **−5%**

**Algeria (+/−):**
| Player | Min | On-Off | In XI? |
|--------|-----|--------|--------|
| Amine Gouiri | 218 | +1.32 | ✓ starts (CF) |
| Nabil Bentaleb | 215 | +1.22 | ✓ starts |
| Riyad Mahrez | 192 | +0.69 | ✓ starts |
| Rayan Aït-Nouri | 194 | −0.93 | ✗ starts (drag) |
| Ibrahim Maza | 261 | −0.69 | ✗ starts (drag) |

> Net: Three positives vs two drags. Modestly positive. **One adjustment: +3%**

### ⚠️ Critical GK change: Benbot starts (not Zidane)
Benbot: 0 saves / 3 SoTA in 1 WC game = 0.0% save%. Tiny sample → regress 40% toward 65% = **26%** projected save%.
This is the single biggest factor in the model — Switzerland's λ jumps dramatically vs Benbot vs Zidane (62%).

---

## Referee: Yael Falcon Perez (Argentina)
- YC avg: **5.44/game** — very card-active (highest of any referee seen in this analysis)
- RC avg: **0.26/game** — quite high
- Profile: Aggressive on discipline. Switzerland already draw 6 YC + 1 RC from opponents in 3 games. Algeria are very clean (1 YC in 3 games) — this referee will test them.

**Cards blended model:**
```
Team total YC/game = Switzerland 1.0 + Algeria 0.33 = 1.33
Blended λ_YC = (1.33 + 5.44) / 2 = 3.39/game

Foul share: Switzerland 12.33/(12.33+5.67) = 68.5% | Algeria 31.5%
λ_Switzerland_YC = 3.39 × 0.685 = 2.32
λ_Algeria_YC = 3.39 × 0.315 = 1.07
```

---

## Final Model (post-lineup)

| Team | λ | Derivation |
|------|---|-----------|
| **Switzerland** | **3.32** | 3.68 × 0.95 (Embolo −5%) |
| **Algeria** | **0.94** | 0.91 × 1.03 (Algeria lineup +3%) |
| **Total** | **4.26** | — |

### Match Outcomes (90 min)
| Outcome | Probability |
|---------|------------|
| Switzerland win | **~83%** |
| Draw | **~10%** |
| Algeria win | **~7%** |

### Score Distributions (λ_SW=3.32, λ_ALG=0.94)
| Score | Probability |
|-------|------------|
| 3-0 Switzerland | 8.6% |
| 3-1 Switzerland | 8.1% |
| 2-0 Switzerland | 7.8% |
| 4-0 Switzerland | 7.1% |
| 2-1 Switzerland | 7.3% |
| 4-1 Switzerland | 6.7% |
| 1-0 Switzerland | 4.7% |

> **Most likely: 3-0 Switzerland (8.6%)** | 3-1 (8.1%) | 2-1 (7.3%) | 2-0 (7.8%)

### Adjusted SoT for GK markets
| | Adj SoT | λ_saves | Save% used |
|---|---------|---------|------------|
| Kobel (vs Algeria) | 3.92 | **2.98** | 76% |
| Benbot (vs Switzerland) | 4.72 | **1.23** | 26% |

---

## Best Picks — FINAL

| # | Market | Prob | Stars |
|---|--------|------|-------|
| 1 | Over 1.5 goals | **94%** | ⭐⭐⭐⭐⭐ |
| 2 | Switzerland to score | **96%** | ⭐⭐⭐⭐⭐ |
| 3 | Kobel saves Over 0.5 | **95%** | ⭐⭐⭐⭐⭐ |
| 4 | Total SoT Over 4.5 | **92%** | ⭐⭐⭐⭐⭐ |
| 5 | Switzerland win (90') | **83%** | ⭐⭐⭐⭐⭐ |
| 6 | Over 2.5 goals | **80%** | ⭐⭐⭐⭐⭐ |
| 7 | Kobel saves Over 1.5 | **80%** | ⭐⭐⭐⭐⭐ |
| 8 | Total YC Under 5.5 | **87%** | ⭐⭐⭐⭐⭐ |
| 9 | Total YC Over 1.5 | **85%** | ⭐⭐⭐⭐⭐ |
| 10 | Benbot saves Over 0.5 | **71%** | ⭐⭐⭐⭐⭐ |
| 11 | Switzerland -1 AH (win by ≥2) | **67%** | ⭐⭐⭐⭐ |
| 12 | Total YC Over 2.5 | **66%** | ⭐⭐⭐⭐ |
| 13 | Algeria YC Over 0.5 | **66%** | ⭐⭐⭐⭐ |
| 14 | Switzerland YC Over 1.5 | **67%** | ⭐⭐⭐⭐ |
| 15 | BTTS Yes | **59%** | ⭐⭐⭐⭐ |
| 16 | Algeria to score | **61%** | ⭐⭐⭐⭐ |
| 17 | Total corners Under 10.5 | **~67%** | ⭐⭐⭐⭐ |
| 18 | Switzerland SoT Over 3.5 | **73%** | ⭐⭐⭐⭐⭐ |
| 19 | Total YC Over 3.5 | **44%** | ⭐⭐⭐ |
| 20 | Algeria qualify | **~17%** | — (not a pick) |

**Predicted score: 3-0 Switzerland** (primary, 8.6%) | 3-1 Switzerland (8.1%) | 2-0 Switzerland (7.8%)

---

## SP Matchup

| Dimension | Switzerland | Algeria |
|-----------|------------|---------|
| SP goals scored | 0 (from 9 shots) | **2 (from 12 shots)** |
| SP xG | 0.97 | 1.24 |
| **Aerial duels won** | **50.7%** | **44.6%** |
| SP goals conceded | 1 (from 11 shots) | **0 (from 8 shots)** |
| Headers faced / goals | 5 / 0 | 4 / 1 |
| Crosses/game | 14.67 | 7.67 |

> Switzerland cross heavily but score 0 SP goals. Algeria's SP defence is solid (0 conceded). The aerial edge goes to Switzerland (50.7% vs 44.6%) but Algeria's SP clean sheet record neutralises Switzerland's cross-heavy approach. Algeria's own SP attack (2G, 40% of goals via Mahrez delivery) is actually their best scoring route — but Switzerland SP defence is 1G from 11.

---

## Key Risks & Flags

### ⚠️ Why this model gives Switzerland +3 expected goals advantage:
1. **Benbot's 26% projected save%** is the dominant driver — Zidane (62%) would have given λ_SW = 1.89 vs 3.32 with Benbot. The GK change alone explains 1.43 goals of the gap.
2. **Switzerland xG/game = 2.12** (8th in dataset) — genuine elite attacking quality.
3. **Algeria xGA/game = 1.13** (moderate defence, massively overperformed luck-wise).

### ⚠️ What could suppress Switzerland's goal output:
- Benbot's 0% in 3 SoTA is a 1-game sample — he may be better than that.
- Algeria's SP defence (0 conceded) limits Switzerland's set-piece route.
- Switzerland 0 SP goals in 3 WC games despite 0.97 xG from SP — consistent underperformance.
- PPDA Algeria 12.5 — medium block; won't give Switzerland as much space as expected.

### ⚠️ Algeria's best path to a goal:
- Mahrez delivery → Algeria SP attack (2G/12 shots, 40% of goals)
- Fast counters through Gouiri (+1.32) or Benbouali off the bench (+5.60)
- Switzerland's SP defence is moderate (1G from 11 shots)

---

## Match Flow Prediction

- **Likely opening phase:** Switzerland dominate possession immediately (61.9% expected vs 63.1% Algeria — both high; one will concede possession to the other). Algeria PPDA 12.5 → medium block, invite Switzerland forward. Switzerland's wide pair (Vargas RW, Rodríguez LB-driven crosses) delivers early set-piece situations.

- **Key tactical battles:**
  - **Benbot vs Switzerland's shot volume:** Benbot's 0% save rate in his only WC game is the match-defining individual factor. If he reproduces even league-average performance, Switzerland's λ drops significantly.
  - **Mahrez (7.60 form) vs Switzerland's RB Rodríguez:** Mahrez starts wide right. Rodríguez (LB in real life playing RB here) needs to contain Algeria's primary creator. This is Algeria's best 1v1 channel.
  - **Embolo (−10.22) as CF:** Switzerland's actual best striker is Manzambi (+1.45, 3G in 1.4 90s). Embolo starting suppresses Switzerland's finishing even with huge SoT volume.
  - **Xhaka deliveries vs Algeria's 44.6% aerial duels:** Switzerland's set-piece delivery through Xhaka (1 PK) and Rodríguez (12 crosses) should target Algeria's aerial weakness.

- **Momentum triggers:**
  - Early Switzerland goal → Algeria must open → SoT volume and λ increase further
  - Algeria SP opportunity (Mahrez delivery) → only realistic equaliser route
  - Embolo replaced by Manzambi → Switzerland become more dangerous in front of goal
  - Benbot early error → game effectively over

- **Key indicators to watch:**
  - Benbot first save (if any) — confirms or denies the model's concern
  - Algeria corners (should be < Switzerland corners given PPDA 12.5 block)
  - Mahrez touching the ball in dangerous wide right positions — Algeria's attacking barometer

## Scenarios
| Scenario | Probability | Key condition |
|----------|-------------|--------------|
| Switzerland dominant win (3+) | ~45% | Benbot struggles, Vargas/Manzambi convert crosses |
| Switzerland comfortable win (1-2 goals) | ~30% | Embolo drag limits efficiency, Benbot decent |
| Algeria hold / score (1-1 or 0-1) | ~17% | Mahrez SP, Benbot exceptional, Embolo drag nullifies Switzerland |
| Algeria qualify | ~7% | Major upset — requires Benbot elite + Switzerland off day |
