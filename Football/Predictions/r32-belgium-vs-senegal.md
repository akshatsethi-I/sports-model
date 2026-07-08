---
title: R32 — Belgium vs Senegal
type: analysis
sport: football
tags: [wc2026, r32, belgium, senegal, prediction]
sources: [belgium.md, senegal.md, fbref-belgium-wc2026, opta-belgium-wc2026, opta-senegal-wc2026, footystats-belgium, footystats-senegal, referee-said-martinez, lineups-r32]
last_updated: 2026-07-01
---

# Belgium vs Senegal — Round of 32 (WC2026)

## Lineups

**Belgium (4-3-3):** Courtois — Castagne, Mechele, Ngoy, De Cuyper — Vanaken, De Bruyne, Tielemans — Doku, Lukaku, Trossard

**Senegal (4-2-3-1):** Mory Diaw — Diatta, Seck, Niakhaté, Jakobs — I. Gueye, L. Camara — I. Ndiaye — I. Sarr, Mané, P. Gueye

**Referee:** Said Martinez (Honduras) — 4.20 YC/game, 0.20 RC/game

### Key Lineup Notes
- **Tielemans (−29.32 On-Off)** starts for Belgium — worst regular in dataset by enormous margin
- **Koulibaly (−7.19 On-Off) does NOT start** — Seck (+3.16) replaces him; net +10.35 swing for Senegal's defence
- **Mory Diaw starts in goal** (not Mendy). Diaw's only data = 1 SoTA vs Iraq = noise. Use squad average 60%.
- **Iliman Ndiaye (+6.82 On-Off)** starts — Senegal's best reliable impact player
- **Jackson (−2.81)** does NOT start — positive change for Senegal

---

## Model

### Belgium attacking vs Senegal defence
- Belgium SoT/game: **6.67** (FBRef, 20 in 3 games)
- Senegal SoTA-allowed: 5.0/game (15 SoTA in 3 games) → regress 20%: **5.10**
- Adj Belgium SoT = 6.67 × (5.10/5.5) = **6.18**
- Diaw save%: 1 SoTA vs Iraq = noise → squad average **60%**
- Base Belgium xG = 6.18 × 0.40 = **2.47**
- Tielemans −29.32 starting drag → −8%: **2.27**
- **λ_Belgium = 2.27** *(Footystats xG cross-check: 2.27/game ✓)*

### Senegal attacking vs Belgium defence
- Senegal SoT/game: **6.0** (FBRef, 18 in 3 games; Iraq-inflated)
- Belgium SoTA-allowed: 2.67/game (8 SoTA, 1 CS in 3 wins) → regress 30%: **3.52**
- Adj Senegal SoT = 6.0 × (3.52/5.5) = **3.84**
- Courtois save%: 75% on 8 SoTA → regress 30%: **72%**
- Base Senegal xG = 3.84 × 0.28 = **1.08**
- xG/shot slightly below avg → −5%: **1.02**
- **λ_Senegal = 1.02**

---

## λ_Belgium = 2.27 | λ_Senegal = 1.02 | λ_total = 3.29

### Match Outcomes
| Outcome | Probability |
|---------|------------|
| **Belgium win (90')** | **64%** |
| Draw (90') | 20% |
| Senegal win (90') | 16% |
| **Belgium qualify (incl. ET/pens)** | **~81%** |

### Score Distributions
| Goals | Belgium (λ=2.27) | Senegal (λ=1.02) |
|-------|-----------------|-----------------|
| 0 | 10.3% | 36.1% |
| 1 | 23.5% | 36.8% |
| 2 | 26.6% | 18.8% |
| 3 | 20.1% | 6.4% |
| 4+ | 19.5% | 2.0% |

---

## Market Predictions

### Result / Qualification
| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Belgium qualify (incl. ET/pens)** | **81%** | ⭐⭐⭐⭐⭐ | Quality + Courtois edge holds in ET |
| **Belgium win (90')** | **64%** | ⭐⭐⭐⭐ | λ=2.27 vs 1.02; clear favourite |
| Draw (90') | 20% | — | — |
| Senegal win (90') | 16% | ⭐⭐ | Ndiaye/Sarr on the counter |

### Goals
| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Over 1.5** | **83%** | ⭐⭐⭐⭐⭐ | λ=3.29 near-certain to see 2+ goals |
| **Under 4.5** | **76%** | ⭐⭐⭐⭐⭐ | Both GKs limit runaway scores |
| **Over 2.5** | **63%** | ⭐⭐⭐⭐ | λ=3.29 comfortably above |
| **BTTS Yes** | **57%** | ⭐⭐⭐⭐ | λ_Senegal=1.02 — genuine scoring threat |
| Under 3.5 | 61% | ⭐⭐⭐⭐ | Marginal |
| BTTS No | 43% | ⭐⭐⭐ | — |
| Under 2.5 | 37% | — | Skip |

### Shots on Target
*Adj Belgium SoT = 6.18 | Adj Senegal SoT = 3.84 | Total = 10.02*

| Market | Prob | Stars |
|--------|------|-------|
| **Total SoT over 7.5** | **79%** | ⭐⭐⭐⭐⭐ |
| **Belgium SoT over 4.5** | **74%** | ⭐⭐⭐⭐⭐ |
| **Senegal SoT over 2.5** | **74%** | ⭐⭐⭐⭐⭐ |
| **Diaw saves over 2.5** | **72%** | ⭐⭐⭐⭐⭐ |
| Total SoT over 9.5 | 57% | ⭐⭐⭐⭐ |
| Belgium SoT over 5.5 | 58% | ⭐⭐⭐⭐ |
| Courtois saves over 2.5 | 52% | ⭐⭐⭐ |

### Corners
*Belgium λ=4.50 | Senegal λ=5.50 | Total λ=10.00*

| Market | Prob | Stars |
|--------|------|-------|
| **Total corners over 8.5** | **73%** | ⭐⭐⭐⭐⭐ |
| **Senegal corners over 4.5** | **71%** | ⭐⭐⭐⭐⭐ |
| **Total corners under 12.5** | **71%** | ⭐⭐⭐⭐⭐ |
| **Belgium corners over 3.5** | **64%** | ⭐⭐⭐⭐ |
| Total corners over 9.5 | 61% | ⭐⭐⭐⭐ |

### Cards (Said Martinez — 4.20 YC/game)
*Belgium fouls: 9.67/game | Senegal fouls: 9.33/game | Both on ~50/50 card share*
*3 Belgium players already on 1 YC (Castagne, De Cuyper, Lukaku)*

| Market | Prob | Stars |
|--------|------|-------|
| **Total YC over 2.5** | **80%** | ⭐⭐⭐⭐⭐ |
| **Total YC under 5.5** | **74%** | ⭐⭐⭐⭐⭐ |
| Total YC over 3.5 | 61% | ⭐⭐⭐⭐ |

### Fouls (λ_total = 19.0/game)
| Market | Prob | Stars |
|--------|------|-------|
| **Total fouls over 14.5** | **78%** | ⭐⭐⭐⭐⭐ |
| Total fouls over 16.5 | 61% | ⭐⭐⭐⭐ |

---

## Best Picks — Priority Order

| # | Market | Prob | Stars |
|---|--------|------|-------|
| 1 | Belgium qualify (incl. ET/pens) | 81% | ⭐⭐⭐⭐⭐ |
| 2 | Over 1.5 goals | 83% | ⭐⭐⭐⭐⭐ |
| 3 | Under 4.5 goals | 76% | ⭐⭐⭐⭐⭐ |
| 4 | Total SoT over 7.5 | 79% | ⭐⭐⭐⭐⭐ |
| 5 | Total YC over 2.5 | 80% | ⭐⭐⭐⭐⭐ |
| 6 | Total fouls over 14.5 | 78% | ⭐⭐⭐⭐⭐ |
| 7 | Belgium SoT over 4.5 | 74% | ⭐⭐⭐⭐⭐ |
| 8 | Senegal SoT over 2.5 | 74% | ⭐⭐⭐⭐⭐ |
| 9 | Total YC under 5.5 | 74% | ⭐⭐⭐⭐⭐ |
| 10 | Diaw saves over 2.5 | 72% | ⭐⭐⭐⭐⭐ |
| 11 | Total corners over 8.5 | 73% | ⭐⭐⭐⭐⭐ |
| 12 | Senegal corners over 4.5 | 71% | ⭐⭐⭐⭐⭐ |
| 13 | Total corners under 12.5 | 71% | ⭐⭐⭐⭐⭐ |
| 14 | Belgium win (90') | 64% | ⭐⭐⭐⭐ |
| 15 | Over 2.5 goals | 63% | ⭐⭐⭐⭐ |
| 16 | Belgium corners over 3.5 | 64% | ⭐⭐⭐⭐ |
| 17 | BTTS Yes | 57% | ⭐⭐⭐⭐ |
| 18 | Total corners over 9.5 | 61% | ⭐⭐⭐⭐ |
| 19 | Under 3.5 goals | 61% | ⭐⭐⭐⭐ |
| 20 | Total fouls over 16.5 | 61% | ⭐⭐⭐⭐ |
| 21 | Total YC over 3.5 | 61% | ⭐⭐⭐⭐ |

---

## Result — 2026-07-02

**Belgium 3–2 Senegal (AET)** — 2-2 after 90 minutes, Belgium scored in extra time

### 90-minute Stats
| Metric | Belgium | Senegal |
|--------|---------|---------|
| Goals (90') | 2 | 2 |
| Shots | 16 | 13 |
| SoT | 4 | 4 |
| Corners | 4 | 1 |
| Fouls | 14 | 10 |
| YC | 1 | 1 |

### Pick Audit
| Pick | Result | Note |
|------|--------|------|
| Belgium qualify ✓ | **HIT** | Won 3-2 AET |
| Over 1.5 goals ✓ | **HIT** | 4 goals at 90', 5 total |
| Under 4.5 goals | **MISS** | 5 total goals (3+2) |
| Total SoT over 7.5 | **MISS** | Only 8 SoT (4+4) — barely hit if line was 7.5, MISS if 8.5 |
| Total YC over 2.5 | **MISS** | Only 2 YC (1+1) |
| Total fouls over 14.5 | **HIT** | 24 total fouls ✓ |
| Belgium SoT over 4.5 | **MISS** | Only 4 SoT |
| Senegal SoT over 2.5 | **HIT** | 4 SoT ✓ |
| Over 2.5 goals | **HIT** | 4 goals at 90' ✓ |
| BTTS Yes | **HIT** | Both scored ✓ |
| Total corners over 8.5 | **MISS** | Only 5 corners total (4+1) |
| Senegal corners over 4.5 | **MISS** | Only 1 corner |
| Belgium win (90') | **MISS** | Drew 2-2 at 90' |

### Key Misses Analysis
- **Belgium SoT 4 (model: 6.18 adj)** — massive underperformance vs model. Belgium generated 16 shots but only 4 on target (25% SoT%) — far below their 40% WC average. Tielemans drag may have been larger than the −8% model adjustment.
- **Corners 5 total (model: λ≈10)** — one of the biggest corner underperforms seen. 4-1 split (Belgium 4, Senegal 1) vs model expecting Senegal to generate more.
- **YC 2 total (model: λ≈4.20)** — Said Martinez was far more lenient than his average suggested (24 fouls committed but only 2 YC).
- **Senegal corners 1** — extreme low. Model had λ=5.5 for Senegal corners. Belgium's defensive shape under pressure kept Senegal from winning corners.
- **Under 4.5 goals MISS** — 5 goals total (3 Belgium, 2 Senegal) was the actual outcome. Model had 76% on U4.5, so a genuine variance event.

---

## Match Flow Prediction
- **Likely opening phase:** Belgium dominate possession, probe wide via Doku and Trossard. Senegal sit in 4-2-3-1 mid-block (PPDA 15.7). Tielemans in the press structure is Belgium's weak link — Ndiaye will target that space.
- **Key tactical battles:** Sarr vs De Cuyper (Belgium's LB attacking tendency exposes space behind); Ndiaye vs Vanaken/De Bruyne (space between lines); Belgium's crossing vs Seck/Niakhaté aerial pair
- **Momentum triggers:** Tielemans substitution (likely 60-70') → Belgium typically sharper after; early Belgium goal → Senegal must open → second goal risk rises; Diaw error under pressure → could snowball
- **Scenarios:** Belgium 2-1 or 2-0 (45%); Even game, Belgium ET win (25%); Senegal upset via Ndiaye/Sarr (16%)
- **Key indicators:** Diaw save rate in first 30 min; Tielemans sub timing; Senegal corner count (if 4+ before HT, corner overs live)

**Predicted score: 2-1 Belgium** (primary) | 2-0 Belgium (secondary) | 1-1 AET Belgium pens (third)

---

## Model Uncertainty Flags
1. **Diaw save% is genuinely unknown** — if he's closer to 70%, Senegal's λ rises; if 50%, Belgium's λ rises further
2. **Tielemans −29.32** — if substituted before 60', Belgium's attack improves; watch timing
3. **Belgium's 2.67 SoTA-allowed** — even with 30% regression to 3.52, this is the most uncertain input; Senegal could generate more than projected with Ndiaye in the XI

## Links
- [[Teams/belgium]]
- [[Teams/senegal]]
- [[Models/opponent-adjusted-sot-model]]
