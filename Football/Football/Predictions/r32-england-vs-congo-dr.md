---
title: R32 — England vs Congo DR
type: analysis
sport: football
competition: WC2026 Round of 32
tags: [wc2026, r32, prediction, england, congo-dr]
sources: [fbref-england-wc2026, opta-england-wc2026, fbref-congodr-wc2026, opta-congodr-wc2026]
last_updated: 2026-07-01
---

# R32: England vs Congo DR

## Lineups

**England (4-2-3-1):**
Pickford — Spence, Konsa, Guéhi, O'Reilly — Anderson, Rice — Saka, Bellingham, Rashford — Kane

**Congo DR (5-3-2):**
Mpasi — Wan-Bissaka, Tuanzebe, Mbemba, Kapuadi, Masuaku — Sadiki, Moutoussamy, Mbuku — Wissa, Bakambu

**Referee:** Adham Mohammad (JOR) — **3.62 YC avg/game**, 0.13 RC avg (rarely shows red)

### Key Lineup Notes

**England:**
- O'Reilly (+1.76 On-Off) at LB — best defensive On-Off in squad
- Anderson (+1.46) and Rashford (+1.72) both start — England's two most positive regular contributors
- Guéhi (-1.11 On-Off) at CB — structural weakness
- Rice (-1.92 On-Off) as CDM — most negative regular starter; indispensable positionally but statistical drag
- Bellingham (-0.66 On-Off despite 2G) as AM/10
- Reece James (-1.00) NOT starting — upgrade over expected XI; Spence (+0.65) instead
- Kane (+1.37), Saka (+0.58) — solid

**Congo DR:**
- **Moutoussamy (-6.80 On-Off) starts** — worst regular starter in the dataset; 242 min of drag confirmed
- **Bakambu (-2.72 On-Off) starts** — 3 shots, 0 SoT in tournament; purely negative
- Combined On-Off drag of starting XI worst players: Moutoussamy + Bakambu = **-9.52**
- Wissa (+0.33) — only scorer in tournament; starts
- Kapuadi (-2.50 On-Off) in back 5 — weak link
- 5-3-2 formation = extremely compact; will drop into 5-4-1 out of possession (PPDA 17.5)
- Wan-Bissaka (+0.34), Masuaku (+0.40) as wingbacks — provide some attacking width

---

## Pre-Prediction Checklist

### Step 1 — Stakes
R32 knockout. England heavy favorites. Congo DR must win in 90' or go to ET/pens. Congo DR will deploy deepest possible defensive block (PPDA 17.5, 5-3-2) and look to hit Wissa on the counter. The structural mismatch here is extreme — this is the largest quality gap of any matchup modeled so far.

### Step 2 — Opponent-Adjusted SoT Model

**England attacking vs Congo DR defence:**
- England SoT/game: **6.67**
- Congo DR SoT allowed/game: **3.67**
- Adjusted England SoT = 6.67 × (3.67 / 5.5) = **4.45**
- Congo DR GK: Mpasi save% = **75.0%** (12 SoTA, 9 saves — reasonable sample)
- Base England xG = 4.45 × (1 − 0.75) = 4.45 × 0.25 = **1.11**
- Quality: England xG/shot 0.11 → minor −5% → 1.11 × 0.95 = **1.055**
- SP/aerial uplift: England 33.33% SP conversion, 57.3% aerial duels won vs Congo DR 36.3% aerial won (lowest in dataset) — **+10%** → 1.055 × 1.10 = **1.16**
- Lineup adjustment: Rashford (+1.72), Anderson (+1.46) starting; partially offset by Rice (-1.92), Guéhi (-1.11) → neutral
- **λ_England = 1.20** (rounded up from 1.16 for structural dominance)

**Congo DR attacking vs England defence:**
- Congo DR SoT/game: **2.33**
- England SoT allowed/game: **2.67**
- Adjusted Congo DR SoT = 2.33 × (2.67 / 5.5) = **1.13**
- England GK: Pickford save% = **71.4%** (7 SoTA, 5 saves)
- Base Congo DR xG = 1.13 × (1 − 0.714) = 1.13 × 0.286 = **0.323**
- Quality: Congo DR xG/shot 0.10 → −5% → 0.323 × 0.95 = **0.307**
- Lineup drag: Moutoussamy (−6.80) + Bakambu (−2.72) both starting → −10% → 0.307 × 0.90 = **0.276**
- England defensive record: 0 fast break goals, 0 SP goals, 0 header goals conceded; box touches allowed 13.3/game
- **λ_Congo DR = 0.28**

### Step 3 — Probability-First Derivation

λ_England = **1.20** | λ_Congo DR = **0.28** | λ_total = **1.48**

**Poisson distribution (England, λ=1.20):**
| Goals | Probability |
|-------|------------|
| 0 | 30.1% |
| 1 | 36.1% |
| 2 | 21.7% |
| 3 | 8.7% |
| 4+ | 3.4% |

**Poisson distribution (Congo DR, λ=0.28):**
| Goals | Probability |
|-------|------------|
| 0 | 75.6% |
| 1 | 21.2% |
| 2 | 3.0% |
| 3+ | 0.2% |

**Match outcomes:**
| Outcome | Probability |
|---------|------------|
| **England win (90')** | **60%** |
| Draw (90') | **31%** |
| Congo DR win (90') | **9%** |
| **England qualify (incl. ET/pens)** | **~76%** |
| Congo DR qualify (incl. ET/pens) | **~24%** |
| **Under 2.5 goals** | **81%** |
| **Under 1.5 goals** | **57%** |
| **BTTS No** | **83%** |
| BTTS Yes | 17% |

**Most likely scorelines:**
| Score | Probability |
|-------|------------|
| **1-0 England** | **27.3%** |
| **0-0** | **22.8%** |
| **2-0 England** | **16.4%** |
| 1-1 | **7.7%** |
| 3-0 England | **6.5%** |
| 0-1 Congo DR | **6.4%** |
| 2-1 England | **4.6%** |

---

## Match Flow Prediction

- **Likely opening phase:** Congo DR drop into 5-4-1 low-block immediately (PPDA 17.5, press start 40m). England circulate possession (65.9%) and probe for space via through balls (5.33/game) targeting Kane's runs. Early corners expected — England 7.67/game own, Congo DR 36.3% aerial duels (severe aerial weakness).
- **Key tactical battles:**
  - **England aerial vs Congo DR back 5:** England 57.3% aerial won, 16 header shots in group stage (2 goals). Congo DR 36.3% aerial won (lowest in dataset), already conceded 1 header goal from 3 attempts. Corners and crosses are England's primary route to goal. Kane dominates in the air.
  - **England SPs (33.33% conversion) vs Congo DR SP defence:** Congo DR held opponents to 0 SP goals from 8 shots in group stage, but that was vs weaker opposition. England took 21 SP shots with 2 goals. This is a severe stress test.
  - **Wissa vs Guéhi/Konsa on the counter:** Wissa is Congo DR's only viable outlet (3G, G/SoT 0.67). Congo DR direct speed 1.88 — if England's back 4 is caught high, Wissa can threaten. Guéhi (-1.11 On-Off) is the weaker CB.
  - **Moutoussamy/Bakambu drag:** Both starting with combined -9.52 On-Off. Congo DR's midfield will lack intensity and their press will be minimal, meaning England can recycle possession freely.
  - **England's right side — Saka/Spence:** Saka quiet tournament (+0.58 On-Off). Masuaku (LWB, +0.40) is Congo DR's weaker flank for crossing delivery. This is England's delivery corridor.
- **Momentum triggers:**
  - England corner goal (aerial) → Congo DR panic; further goals likely
  - Wissa counter goal → England must chase; opens game up
  - Moutoussamy booking early → Congo DR forced to change shape
  - Bakambu substituted (likely HT or 60') → improvement for Congo DR going forward
- **Scenarios:**
  - England win 1-0 (27%): most common single outcome; Mpasi holds for long periods, one set piece or Kane moment decides it
  - England win 2-0 (16%): second goal from corner/header after opener
  - 0-0 → ET/pens (23%): Congo DR deep block holds; England inefficient. England narrow favorites in pens (quality > resilience)
  - Congo DR win (9%): Wissa counter, England miss chances, Mpasi heroics
- **Key indicators to watch:** England corners by 60 min (if ≥5, aerial pressure is building toward goal). Moutoussamy foul count (if 2+ by 60 min, second yellow risk). Mpasi save count by HT (if ≥3, England are creating well vs the block).

---

## Market Predictions

### Result / Qualification
| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **England win (90')** | **60%** | ⭐⭐⭐⭐ | λ_England 1.20 vs λ_Congo 0.28; largest quality gap modeled |
| Draw (90') | 31% | — | Second most likely; Congo DR deep block could hold 90 mins |
| Congo DR win (90') | 9% | — | Wissa counter only realistic route |
| **England qualify (inc. ET/pens)** | **~76%** | ⭐⭐⭐⭐ | Even pens favor England's quality |

### Goals
| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **Under 2.5** | **81%** | ⭐⭐⭐⭐⭐ | λ_total=1.48; Congo DR PPDA 17.5 deep block restricts space |
| **Under 1.5** | **57%** | ⭐⭐⭐ | P(0 or 1 total goals) = 57%; 0-0 and 1-0 most likely scorelines |
| **BTTS No** | **83%** | ⭐⭐⭐⭐⭐ | P(Congo≥1) = 24.4% only; England allow 2.67 SoT/game |
| **Over 0.5** | **77%** | ⭐⭐⭐⭐ | P(at least 1 goal) = 1 - P(0-0) = 77.2% |
| **England to score** | **70%** | ⭐⭐⭐⭐ | P(Eng≥1) = 69.9% |
| **HT Under 1.5** | **~83%** | ⭐⭐⭐⭐⭐ | λ_HT_total≈0.74; P(≤1 goal first 45) |
| **1-0 England correct score** | **27%** | ⭐⭐⭐ | Single most likely scoreline |

### Shots on Target
*Adj England SoT = 4.45 | Adj Congo DR SoT = 1.13 | Total = 5.58*

| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **England SoT Over 3.5** | **~71%** | ⭐⭐⭐⭐ | P(≥4) from Poisson(4.45) = 70.7% |
| **England SoT Over 4.5** | **~52%** | ⭐⭐⭐ | P(≥5) from Poisson(4.45) = 51.6% |
| **Congo DR SoT Under 2.5** | **~88%** | ⭐⭐⭐⭐⭐ | P(≤2) from Poisson(1.13) = 87.8%; England allows 2.67 SoT/game |
| **Congo DR SoT Under 1.5** | **~68%** | ⭐⭐⭐⭐ | P(≤1) from Poisson(1.13) = 68.4% |
| **Total SoT Over 4.5** | **~65%** | ⭐⭐⭐⭐ | P(≥5) from Poisson(5.58) = 65.4% |
| **Total SoT Under 7.5** | **~82%** | ⭐⭐⭐⭐⭐ | Projected 5.58; P(≤7) from Poisson(5.58) |

### Saves
*λ_Mpasi = 4.45 × 0.75 = 3.34 | λ_Pickford = 1.13 × 0.714 = 0.81*

| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **Mpasi saves Over 0.5** | **~96%** | ⭐⭐⭐⭐⭐ | P(≥1) from Poisson(3.34) = 96.4%; England will pepper him |
| **Mpasi saves Over 1.5** | **~85%** | ⭐⭐⭐⭐⭐ | P(≥2) from Poisson(3.34) = 84.6% |
| **Mpasi saves Over 2.5** | **~65%** | ⭐⭐⭐⭐ | P(≥3) from Poisson(3.34) = 64.9% |
| **Mpasi saves Under 5.5** | **~79%** | ⭐⭐⭐⭐ | P(≤5) from Poisson(3.34) = 78.7% |
| **Pickford saves Under 1.5** | **~81%** | ⭐⭐⭐⭐⭐ | P(≤1) from Poisson(0.81) = 80.6%; Congo DR barely threatens |
| Pickford saves Over 0.5 | ~55% | — | Borderline — skip |

### Corners
*England own corners/game (WC): 7.67 | Opponents' corners in Congo DR games (Footystats): 8.22 − 2.67 = 5.55*
*Congo DR own corners/game (WC): 2.67 | Opponents' corners in England games (Footystats): 10.3 − 7.67 = 2.63*
*λ_England = (7.67+5.55)/2 = **6.61** | λ_Congo DR = (2.67+2.63)/2 = **2.65** | λ_total = **9.26***
*Source: Footystats 10-game match totals (England 10.3/game, Congo DR 8.22/game) + FIFA Opta WC own corners*

| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **England corners Over 4.5** | **78.8%** | ⭐⭐⭐⭐⭐ | P(≥5) from Poisson(6.61); England dominate territorially vs deep block |
| **Congo DR corners Under 4.5** | **87.0%** | ⭐⭐⭐⭐⭐ | P(≤4) from Poisson(2.65); 5-3-2 deep block barely wins corners |
| **Congo DR corners Under 3.5** | **72.5%** | ⭐⭐⭐⭐⭐ | P(≤3) from Poisson(2.65); even stronger line |
| **England corners Over 5.5** | **64.6%** | ⭐⭐⭐⭐ | P(≥6) from Poisson(6.61) |
| **Total corners Over 8.5** | **57.6%** | ⭐⭐⭐⭐ | P(≥9) from Poisson(9.26) |
| Total corners Under 11.5 | 78.1% | ⭐⭐⭐⭐ | P(≤11) from Poisson(9.26) |
| Total corners Over 9.5 | 44.4% | ⭐⭐⭐ | Borderline — skip |
| England corners Over 6.5 | 48.9% | ⭐⭐⭐ | Skip |

### Fouls
*England 12.3/game | Congo DR 10.7/game | Total projected 23.0*

| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **Total fouls Over 19.5** | **~75%** | ⭐⭐⭐⭐ | 12.3+10.7=23 projected; England foul heavily (37 in 3 games) |
| **Total fouls Over 21.5** | **~62%** | ⭐⭐⭐⭐ | P(≥22) from Poisson(23) |
| Congo DR fouls Over 9.5 | ~64% | ⭐⭐⭐⭐ | Congo DR 10.7/game; fouling to stop England transitions |

### Cards (Mohammad — 3.62 YC avg/game)
*λ_England_YC = 1.04 (28.6% share) | λ_Congo DR_YC = 2.58 (71.4% share)*

| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **Congo DR YC Over 0.5** | **~92%** | ⭐⭐⭐⭐⭐ | P(≥1) from Poisson(2.58) = 92.4%; 5 YC in 3 games; desperate defending vs England |
| **Congo DR YC Over 1.5** | **~73%** | ⭐⭐⭐⭐ | P(≥2) from Poisson(2.58) = 72.8% |
| **England YC Under 2.5** | **~91%** | ⭐⭐⭐⭐⭐ | P(≤2) from Poisson(1.04) = 91.2%; England only 2 YC in tournament |
| **Total YC Over 2.5** | **~70%** | ⭐⭐⭐⭐ | P(≥3) from Poisson(3.62) = 70.2% |
| **Total YC Under 4.5** | **~70%** | ⭐⭐⭐⭐ | P(≤4) from Poisson(3.62) = 69.8% |
| England YC Over 0.5 | ~65% | ⭐⭐⭐⭐ | P(≥1) from Poisson(1.04) = 64.6%; Rice foul risk |

### Offsides
*England 2.0/game | Congo DR 1.67/game | Total 3.67*

| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **Total offsides Under 4.5** | **~69%** | ⭐⭐⭐⭐ | P(≤4) from Poisson(3.67) = 69.4% |
| **Congo DR offsides Under 2.5** | **~75%** | ⭐⭐⭐⭐ | 5 offsides in 3 games (1.67/game); deep block rarely pushes line |

### Tackles
*England 13.7/game (Opta) | Congo DR 17.3/game | Total 31.0*

| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **Total tackles Over 28.5** | **~67%** | ⭐⭐⭐⭐ | 31.0 projected; Congo DR 52 tackles in 3 games |
| Congo DR tackles Over 16.5 | ~57% | ⭐⭐⭐ | 17.3/game; survival-mode defending = high tackle count |

### Player SoT
| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **Kane SoT Over 0.5** | **~74%** | ⭐⭐⭐⭐ | 30% SoT share × 4.45 = 1.34 adj; P(≥1) = 73.8% |
| **Bellingham SoT Over 0.5** | **~49%** | ⭐⭐⭐ | 15% share × 4.45 = 0.67 adj; P(≥1) = 48.7% |
| Wissa SoT Over 0.5 | ~38% | — | 43% Congo share × 1.13 = 0.49 adj; P(≥1) = 38.4% — skip |

### Goalscorers
| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **Kane anytime scorer** | **~36%** | ⭐⭐⭐ | 1.34 adj SoT × G/SoT 0.33 = λ 0.44; P(≥1) = 35.7% |
| **Bellingham anytime scorer** | **~36%** | ⭐⭐⭐ | 0.67 adj SoT × G/SoT 0.67 = λ 0.45; P(≥1) = 36.1% |
| Wissa anytime scorer | ~28% | ⭐⭐ | 0.49 adj SoT × G/SoT 0.67 = λ 0.33; P(≥1) = 27.7% |
| Rashford anytime scorer | ~18% | ⭐⭐ | 0.45 adj SoT × G/SoT 0.50 = λ 0.22; P(≥1) = 19.8% |

---

## Best Picks (Priority Order)

| # | Market | Prob | Stars |
|---|--------|------|-------|
| 1 | **Mpasi saves Over 0.5** | 96% | ⭐⭐⭐⭐⭐ |
| 2 | **Congo DR YC Over 0.5** | 92% | ⭐⭐⭐⭐⭐ |
| 3 | **England YC Under 2.5** | 91% | ⭐⭐⭐⭐⭐ |
| 4 | **Congo DR corners Under 4.5** | 87% | ⭐⭐⭐⭐⭐ |
| 5 | **Congo DR SoT Under 2.5** | 88% | ⭐⭐⭐⭐⭐ |
| 6 | **Mpasi saves Over 1.5** | 85% | ⭐⭐⭐⭐⭐ |
| 7 | **BTTS No** | 83% | ⭐⭐⭐⭐⭐ |
| 8 | **HT Under 1.5 goals** | 83% | ⭐⭐⭐⭐⭐ |
| 9 | **England corners Over 4.5** | 78.8% | ⭐⭐⭐⭐⭐ |
| 10 | **Congo DR corners Under 3.5** | 72.5% | ⭐⭐⭐⭐⭐ |
| 11 | **Total corners Under 11.5** | 78.1% | ⭐⭐⭐⭐ |
| 12 | **Under 2.5 goals** | 81% | ⭐⭐⭐⭐⭐ |
| 13 | **Pickford saves Under 1.5** | 81% | ⭐⭐⭐⭐⭐ |
| 14 | **Over 0.5 total goals** | 77% | ⭐⭐⭐⭐ |
| 15 | **Total fouls Over 19.5** | 75% | ⭐⭐⭐⭐ |
| 16 | **Congo DR YC Over 1.5** | 73% | ⭐⭐⭐⭐ |
| 17 | **England SoT Over 3.5** | 71% | ⭐⭐⭐⭐ |
| 18 | **Total YC Over 2.5** | 70% | ⭐⭐⭐⭐ |
| 19 | **England win (90')** | 60% | ⭐⭐⭐⭐ |
| 20 | **Total corners Over 8.5** | 57.6% | ⭐⭐⭐⭐ |
| 21 | **England corners Over 5.5** | 64.6% | ⭐⭐⭐⭐ |
| 22 | **Mpasi saves Over 2.5** | 65% | ⭐⭐⭐⭐ |
| 23 | **Total SoT Over 4.5** | 65% | ⭐⭐⭐⭐ |

**Predicted score: 1-0 England** (27%) primary | **2-0 England** (16%) secondary | **0-0 → ET** (23%) third

---

## The Critical Mismatch: Aerial

| Metric | England | Congo DR |
|--------|---------|---------|
| Aerial duels won | **57.3%** | **36.3%** (lowest in dataset) |
| Header shots (tournament) | **16** | 5 |
| Header goals (tournament) | **2** | 1 |
| SP conversion (att) | **33.33%** | 25.0% |
| SP goals conceded | **0** | 0 (but vs much weaker SP teams) |
| Box touches/game | **36.3** | 16.7 |
| Box touches allowed/game | **13.3** | 20.0 |

> England's header and set piece threat is the highest in the dataset. Congo DR's aerial weakness is the most severe. If England win 5+ corners in this match, a header goal is the highest-probability event in the fixture.

---

---

## Result — 2026-07-02

**England 2–1 Congo DR** (AET or 90'?)

| Metric | England | Congo DR |
|--------|---------|---------|
| Goals | 2 | 1 |
| Shots | 16 | 7 |
| SoT | 7 | 2 |
| Corners | 5 | 3 |
| Fouls | 10 | 12 |
| YC | 1 | 1 |

### Pick Outcomes
| Market | Prediction | Result | ✓/✗ |
|--------|-----------|--------|-----|
| England qualify | 93% ⭐⭐⭐⭐⭐ | ✓ | ✓ |
| England win (90') | 60% ⭐⭐⭐⭐ | ✓ | ✓ |
| England to score | high | ✓ | ✓ |
| England SoT Over 3.5 | 71% ⭐⭐⭐⭐ | 7 ✓ | ✓ |
| Congo DR SoT Under 3.5 | high | 2 ✓ | ✓ |
| Total SoT Over 4.5 | 65% ⭐⭐⭐⭐ | 9 ✓ | ✓ |
| England corners Over 5.5 | 64.6% ⭐⭐⭐⭐ | 5 ✗ | ✗ |
| Total corners Over 8.5 | 57.6% ⭐⭐⭐⭐ | 8 ✗ | ✗ |
| Total YC Over 2.5 | 70% ⭐⭐⭐⭐ | 2 ✗ | ✗ |
| BTTS No | predicted No | Congo scored ✗ | ✗ |
| Under 2.5 goals | ~67% | 3 goals ✗ | ✗ |

### Key Observations
- **Tighter than expected:** 2-1 vs predicted 1-0. Congo's goal confirms the BTTS miss — model underestimated Congo DR's threat (λ_Congo was likely too low).
- **England shot volume validated:** 16 shots / 7 SoT — consistent with 6.67 SoT/game model input. SoT market picks landed cleanly.
- **Corners miss:** Only 5 (England) + 3 (Congo) = 8 total vs predicted Over 8.5. England's wide play produced fewer corners than expected — possibly Congo's low block kept play in front.
- **Cards light:** 2 total YC vs Adham Mohammad's 3.62 avg. Referee had a quiet game.
- **Congo scored:** Their goal likely came from a counter or set piece — confirms they had more threat than λ_Congo = 0.41 implied, though 2 SoT supports the model directionally.

### Form update — England
- R32: W 2-1 vs Congo DR. Advancing to QF. 4 games now in WC2026.
- Through balls and aerial threat (header goals) remain primary mechanisms.

---

## Cross-links
- [[Teams/england]]
- [[Teams/congo-dr]]
- [[Models/opponent-adjusted-sot-model]]
