---
title: R32 — Portugal vs Croatia
type: analysis
sport: football
competition: WC2026 Round of 32
tags: [wc2026, r32, prediction, portugal, croatia]
sources: [fbref-portugal-wc2026, opta-portugal-wc2026, opta-portugal-extended, fbref-croatia-wc2026, opta-croatia-wc2026, opta-croatia-extended]
last_updated: 2026-07-02
---

# R32: Portugal vs Croatia

**Status:** COMPLETE ✓ — FBRef + Opta + Opta Extended + Footystats + Confirmed Lineups + Referee ingested.

---

## Model

### Portugal attacking vs Croatia defence
- Portugal SoT/game: **4.00** (12 in 3 games)
- Croatia SoTA-allowed: **4.33/game** (13 SoTA, 1 CS) → regress 20%: **4.56**
- Adj Portugal SoT = 4.00 × (4.56/5.5) = **3.32**
- Livaković save%: 61.5% on 13 SoTA → regress 20%: **62%**
- Base λ_Portugal = 3.32 × 0.38 = **1.26**
- **Lineup adjustment +3%:** R.Dias (+2.50), J.Félix (+2.10), N.Mendes (+1.80) all start. Drags: P.Neto (−1.50), R.Neves (−2.00 small sample), Vitinha (−0.89). Net modest positive.
- **λ_Portugal = 1.26 × 1.03 = 1.30**

### Croatia attacking vs Portugal defence
- Croatia SoT/game: **3.67** (11 in 3 games)
- Portugal SoTA-allowed: **3.33/game** (10 SoTA, 2 CS) → regress 20%: **3.76**
- Adj Croatia SoT = 3.67 × (3.76/5.5) = **2.51**
- Diogo Costa save%: 90% on 10 SoTA → regress 20%: **85%**
- Base λ_Croatia = 2.51 × 0.15 = **0.38**
- **Lineup adjustment +10%:** Baturina (+5.98), Pongračić (+3.00), Modrić (+2.49), Budimir (+2.76) all start. **Budimir starts as CF** — was a super-sub, now in XI. Drags: Gvardiol (−2.67) and Sučić (−1.72) contained by four strong positives. Net strongly positive.
- **λ_Croatia = 0.38 × 1.10 = 0.42**

> **Context on λ_Croatia = 0.42:** Croatia's 5 group goals came on 2.77 xG (+2.23 overperformance — 3rd highest in dataset). True quality is 0.92 xG/game. Against Diogo Costa at 85% save% this compresses to 0.42. Not an error — reflects Costa's elite level. Baturina starting (+5.98) is the primary upgrade vs group averages.

> **Context on λ_Portugal = 1.30:** 0 build-up goals from 62 sequences. Croatia PPDA 16.3 gifts possession but Portugal can't convert it. Goals will come from individual moments (Ronaldo), SP aerial delivery (vs Croatia's 45.4% aerial duels), or transitions.

> **Footystats validation (5-game):** Portugal BTTS% 60% over 5 games is higher than our 75% BTTS No pick — but includes weaker opposition. Portugal CS% 40% (vs WC 66.7%) — broader sample supports regression risk. Croatia corners 8.6/game (vs WC 1.33/game) — WC-specific figure preferred for tournament context.

---

## λ_Portugal = 1.30 | λ_Croatia = 0.42 | λ_total = 1.72

### Match Outcomes
| Outcome | Probability |
|---------|------------|
| **Portugal win (90')** | **55%** |
| Draw (90') | 32% |
| Croatia win (90') | 13% |
| **Portugal qualify (incl. ET/pens)** | **~73%** |
| Croatia qualify (incl. ET/pens) | ~27% |

> Draw probability remains high (32%) — this is a coin-flip for 90 minutes. ET/pens is a realistic ~18% scenario.

### Score Distributions
| Goals | Portugal (λ=1.30) | Croatia (λ=0.42) |
|-------|------------------|-----------------|
| 0 | 27.2% | 65.7% |
| 1 | 35.4% | 27.6% |
| 2 | 23.0% | 5.8% |
| 3 | 9.9% | 0.8% |
| 4+ | 4.5% | — |

**Most likely scorelines:**
- 1-0 Portugal: 35.4% × 65.7% = **23.3%**
- 0-0: 27.2% × 65.7% = **17.9%**
- 2-0 Portugal: 23.0% × 65.7% = **15.1%**
- 1-1: 35.4% × 27.6% = **9.8%**
- 0-1 Croatia: 27.2% × 27.6% = **7.5%**

---

## Market Predictions

### Result / Qualification
| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Portugal qualify (incl. ET/pens)** | **~72%** | ⭐⭐⭐⭐⭐ | ET/pens scenario favours Portugal's quality |
| **Portugal win (90')** | **54%** | ⭐⭐⭐⭐ | Modest favourite — not dominant |
| Draw (90') | 34% | — | High — low-scoring games favour draws |
| Croatia win (90') | 12% | — | Unlikely but not negligible |
| **Croatia qualify (incl. ET/pens)** | **~28%** | ⭐⭐ | Long-shot value only |

### Goals
*λ_total = 1.64*

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Under 2.5** | **75%** | ⭐⭐⭐⭐⭐ | P(≤2 total) with λ=1.72 |
| **BTTS No** | **75%** | ⭐⭐⭐⭐⭐ | P(Port≥1)×P(Cro≥1) = 72.8%×34.3% = 25.0% BTTS Yes |
| **Portugal to score** | **73%** | ⭐⭐⭐⭐⭐ | P(Portugal≥1) = 1-e^(-1.30) |
| **Over 0.5** | **82%** | ⭐⭐⭐⭐⭐ | P(≥1 goal total) = 1-e^(-1.72) |
| **Under 1.5** | **47%** | — | Coin flip — skip |
| Over 1.5 | 53% | ⭐⭐⭐ | Marginal |
| Over 2.5 | 25% | — | Skip |
| Croatia to score | 34% | — | P(Croatia≥1) = 1-e^(-0.42) |

### Shots on Target
*Adj Portugal SoT λ = 3.32 × 1.03 = 3.42 | Adj Croatia SoT λ = 2.51 × 1.10 = 2.76 | Total = 6.18*

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Croatia SoT Under 3.5** | **77%** | ⭐⭐⭐⭐⭐ | λ=2.76; P(≤3) = 77% |
| **Total SoT Under 7.5** | **73%** | ⭐⭐⭐⭐⭐ | λ=6.18 |
| **Croatia SoT Over 0.5** | **74%** | ⭐⭐⭐⭐⭐ | λ=2.76; P(≥1) = 74% |
| **Portugal SoT Over 2.5** | **68%** | ⭐⭐⭐⭐ | λ=3.42; P(≥3) = 68% |
| Total SoT Over 4.5 | 75% | ⭐⭐⭐⭐⭐ | λ=6.18 |
| Portugal SoT Over 3.5 | 53% | ⭐⭐⭐ | Marginal |

### Saves
*λ_Livaković = 3.42 × 0.62 = 2.12 | λ_Costa = 2.76 × 0.85 = 2.35*

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Livaković saves Over 0.5** | **88%** | ⭐⭐⭐⭐⭐ | λ=2.12; P(≥1) = 88% |
| **Costa saves Over 0.5** | **91%** | ⭐⭐⭐⭐⭐ | λ=2.35; P(≥1) = 91% |
| **Livaković saves Over 1.5** | **68%** | ⭐⭐⭐⭐ | λ=2.12; P(≥2) = 68% |
| **Costa saves Over 1.5** | **74%** | ⭐⭐⭐⭐⭐ | λ=2.35; P(≥2) = 74% |
| Costa saves Over 2.5 | 47% | — | Skip |
| Livaković saves Over 2.5 | 41% | — | Skip |

### Corners
*Portugal WC: 2.67/game | Footystats 5-game: 7.6/game → blended: ~5.1*
*Croatia WC: 1.33/game | Footystats 5-game: 8.6/game → blended: ~5.0*
*λ_total ≈ 9 (blended) — significant uncertainty; WC figures are anomalously low*

> ⚠️ Massive discrepancy between WC data (both teams very low) and broader sample (both around 8/game). WC data likely reflects tournament-specific low-block match styles. Using blended ~9 total but with low confidence.

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Total corners Under 10.5** | **~62%** | ⭐⭐⭐⭐ | λ=9 |
| **Total corners Under 12.5** | **~80%** | ⭐⭐⭐⭐⭐ | λ=9 |
| Total corners Over 7.5 | ~56% | ⭐⭐⭐⭐ | Marginal — skip |

### Fouls
*Portugal committed: 9.67/game | Croatia committed: 11.0/game | λ_total = 20.67/game*

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Total fouls Over 17.5** | **~72%** | ⭐⭐⭐⭐⭐ | λ=20.67 |
| **Croatia fouls Over 8.5** | **~71%** | ⭐⭐⭐⭐⭐ | λ=11.0; Croatia foul regularly |
| Total fouls Over 20.5 | ~52% | ⭐⭐⭐ | Marginal |

### Cards
*Referee: Espen Eskas (NOR) — 3.44 YC/game, 0.12 RC/game*
*Team rates: Portugal 1.33/game, Croatia 0.67/game → Total 2.0/game*
*Blended λ_YC = (2.0 + 3.44) / 2 = 2.72/game*
*Split by fouls (Croatia 53%/Portugal 47%): λ_Croatia_YC = 1.44, λ_Portugal_YC = 1.28*

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Portugal YC Over 0.5** | **72%** | ⭐⭐⭐⭐⭐ | λ=1.28; P(≥1) = 72% |
| **Croatia YC Over 0.5** | **76%** | ⭐⭐⭐⭐⭐ | λ=1.44; P(≥1) = 76% — fouls-based share gives Croatia more cards than history suggests |
| **Total YC Over 1.5** | **75%** | ⭐⭐⭐⭐⭐ | λ=2.72; P(≥2) = 75% |
| **Total YC Under 4.5** | **91%** | ⭐⭐⭐⭐⭐ | Eskas 3.44 avg — active but not extreme |
| Total YC Over 2.5 | 51% | ⭐⭐⭐ | Marginal |
| Red card Over 0.5 | ~11% | — | Eskas 0.12 RC/game — skip |

> Note: Croatia's historical 0.67 YC/game on 11.0 fouls is anomalously low. Eskas averaging 3.44 YC/game will likely give Croatia more cards than their history shows — fouls-based split (53%) is the more realistic card allocation here.

### Offsides
*Portugal: 2.33/game | Croatia: 1.33/game | Total λ = 3.67*

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Total offsides Under 5.5** | **~74%** | ⭐⭐⭐⭐⭐ | λ=3.67 |
| Total offsides Over 3.5 | ~51% | — | Marginal |

---

## Confirmed Lineups

**Portugal (4-2-3-1):** Costa; Cancelo, Veiga, R.Dias, N.Mendes; Vitinha, R.Neves; P.Neto, B.Fernandes, J.Félix; Ronaldo

| Player | On-Off | Note |
|--------|--------|------|
| R. Dias | **+2.50** (180min) | Key positive CB — starts ✓ |
| J. Félix | **+2.10** (131min) | Positive AM — starts ✓ |
| N. Mendes | **+1.80** (250min) | Positive LB — starts ✓ |
| J. Cancelo | −0.50 (180min) | Mild drag at RB |
| Vitinha | −0.89 (233min) | Persistent drag — starts unavoidably |
| P. Neto | **−1.50** (206min) | Confirmed drag at AM-R |
| R. Neves | **−2.00** (45min) | Negative DM — **small sample, start is a risk** |

→ Bruno Fernandes (full starter, 0.00 baseline) — neutral anchor in AM role.

**Croatia (4-2-3-1):** Livaković; Stanišić, Pongračić, Šutalo, Gvardiol; Sučić, Kovačić; Baturina, Modrić, Perišić; **Budimir (CF)**

| Player | On-Off | Note |
|--------|--------|------|
| M. Baturina | **+5.98** (254min) | Best player in squad — starts ✓ |
| M. Pongračić | **+3.00** (180min) | Positive CB — starts ✓ |
| L. Modrić | **+2.49** (227min) | Creative engine — starts ✓ |
| A. Budimir | **+2.76** (110min) | **Was super-sub, now STARTS** — aerial CF |
| M. Kovačić | 0.00 (181min) | Neutral baseline DM |
| J. Šutalo | 0.00 (270min) | Full starter, neutral |
| I. Perišić | 0.00 (270min) | Full starter, neutral |
| P. Sučić | **−1.72** (199min) | Drag in CM — starts |
| J. Gvardiol | **−2.67** (138min) | Biggest drag — LB, Portugal's primary attack channel |

→ **Budimir starts** as CF: aerial contest vs R.Dias is now a key battle. Budimir 100% SoT% in 1.2 90s of starts — if he gets service, he's dangerous. Directly opposes Portugal's only defensive aerial advantage.

## Referee

**Espen Eskas (Norway)**
- YC avg: **3.44/game** (moderate-to-active)
- RC avg: **0.12/game** (very low)
- Profile: Active on cards, consistent with other Scandinavian referees in this tournament (cf. Nyberg 3.29). Croatia's 11 fouls/game will attract attention.

---

## Best Picks — FINAL

| # | Market | Prob | Stars |
|---|--------|------|-------|
| 1 | Costa saves Over 0.5 | **91%** | ⭐⭐⭐⭐⭐ |
| 2 | Total YC Under 4.5 | **91%** | ⭐⭐⭐⭐⭐ |
| 3 | Livaković saves Over 0.5 | **88%** | ⭐⭐⭐⭐⭐ |
| 4 | Over 0.5 goals | **82%** | ⭐⭐⭐⭐⭐ |
| 5 | Total corners Under 12.5 | **~80%** | ⭐⭐⭐⭐⭐ |
| 6 | Croatia SoT Under 3.5 | **77%** | ⭐⭐⭐⭐⭐ |
| 7 | Under 2.5 goals | **75%** | ⭐⭐⭐⭐⭐ |
| 8 | BTTS No | **75%** | ⭐⭐⭐⭐⭐ |
| 9 | Croatia YC Over 0.5 | **76%** | ⭐⭐⭐⭐⭐ |
| 10 | Total YC Over 1.5 | **75%** | ⭐⭐⭐⭐⭐ |
| 11 | Total SoT Over 4.5 | **75%** | ⭐⭐⭐⭐⭐ |
| 12 | Costa saves Over 1.5 | **74%** | ⭐⭐⭐⭐⭐ |
| 13 | Croatia SoT Over 0.5 | **74%** | ⭐⭐⭐⭐⭐ |
| 14 | Portugal qualify | **~73%** | ⭐⭐⭐⭐⭐ |
| 15 | Portugal to score | **73%** | ⭐⭐⭐⭐⭐ |
| 16 | Total SoT Under 7.5 | **73%** | ⭐⭐⭐⭐⭐ |
| 17 | Total offsides Under 5.5 | **~74%** | ⭐⭐⭐⭐⭐ |
| 18 | Portugal YC Over 0.5 | **72%** | ⭐⭐⭐⭐⭐ |
| 19 | Total fouls Over 17.5 | **~72%** | ⭐⭐⭐⭐⭐ |
| 20 | Croatia fouls Over 8.5 | **~71%** | ⭐⭐⭐⭐⭐ |
| 21 | Livaković saves Over 1.5 | **68%** | ⭐⭐⭐⭐ |
| 22 | Portugal SoT Over 2.5 | **68%** | ⭐⭐⭐⭐ |
| 23 | Portugal win (90') | **55%** | ⭐⭐⭐⭐ |
| 24 | Total corners Under 10.5 | **~62%** | ⭐⭐⭐⭐ |
| 25 | Over 1.5 goals | **53%** | ⭐⭐⭐ |

**Predicted score: 1-0 Portugal** (primary, 23.3%) | 0-0 → Portugal ET (secondary, 17.9%) | 2-0 Portugal (third, 15.1%)

---

## SP Matchup — The Defining Contest

| Dimension | Portugal | Croatia |
|-----------|---------|---------|
| SP goals scored | 1 (from 10 shots) | 1 (from 7 shots) |
| SP xG | 1.24 | 0.59 |
| **Aerial duels won** | **59.6%** | **45.4%** |
| SP goals conceded | 1 (from 7 shots) | **2 (from 17 shots)** |
| Headers faced / goals | 5 / 1 | **8 / 1** |
| Crosses/game | 16-20 | 12 |

> **Portugal's clearest scoring route is aerial SP delivery.** Ronaldo (13 shots, aerial profile), combined with Nuno Mendes and João Cancelo's crossing and Bruno Fernandes' delivery, targets Croatia's 45.4% aerial duel record — the weakest in this dataset head-to-head. 2 of Croatia's 5 goals conceded came from SP. This is where Portugal will go when possession build-up fails (as it did all group stage).

---

## Match Flow Prediction

- **Likely opening phase:** Portugal dominate possession immediately (62.2% expected → likely 65-70% in this match). Croatia sit in 4-4-2 or 4-5-1 low-mid block (PPDA 16.3 — deepest in dataset). Portugal's press (PPDA 9.5) won't be tested much — Croatia won't hold the ball. Wide channels: Cancelo/Pedro Neto right (targeting Gvardiol −2.67), Nuno Mendes left. High crossing volume.

- **Key tactical battles:**
  - **Modrić (+2.49) vs Portugal's midfield press:** Croatia's best hope of building anything is Modrić finding pockets between the lines. If Portugal track him tightly, Croatia have nothing. If he gets time, Baturina (+5.98) makes runs behind.
  - **Ronaldo vs Croatia's CB pairing:** Ronaldo's header threat on crosses and corners. Croatia's 45.4% aerial duels = vulnerable. With 8 headers faced and 1 conceded already, another aerial delivery to Ronaldo is Croatia's biggest risk.
  - **Gvardiol (−2.67) at LB vs Portugal's right side:** Portugal's right channel (Cancelo, Pedro Neto) should attack Gvardiol relentlessly. His −2.67 On-Off in 138 min is the clearest individual weakness.
  - **Baturina (+5.98) on the counter:** Croatia's best attacking moment is a transition after winning the ball. Baturina's movement on the counter is their only genuine threat to Costa's goal.

- **Momentum triggers:**
  - Portugal early goal → Croatia must open up → Portugal's possession becomes dangerous open space
  - 0-0 at 60 min → Croatia back 5 becomes an option → even harder to break
  - Budimir on (+2.76) → Croatia's only genuine aerial threat in the box
  - Ronaldo sub or injury → Portugal lose their primary aerial/goal threat

- **Scenarios:**
  - Portugal 1-0 (Ronaldo header/corner/individual moment): 24.5%
  - 0-0 at 90' → Portugal ET win: ~14%
  - Portugal 2-0: 15.4%
  - 0-0 at 90' → penalties: ~6%
  - Croatia 0-1 (Baturina or Modrić moment): 7.4%

- **Key indicators:** Portugal corners earned by 30 min (if ≥3, aerial threat building); Modrić touches in attacking third (if <5 by HT, Croatia are toothless); Ronaldo headed attempts (if 0 by HT, the aerial route isn't working — Portugal will struggle)

---

## The Core Problem for Croatia

Croatia PPDA 16.3 means they willingly give Portugal all the ball. But Portugal have 0 build-up goals from 62 sequences. Both facts are true — the question is what breaks the stalemate. The answer is almost certainly an individual moment: a Ronaldo header, a Bruno Fernandes FK, or a Baturina counter. Croatia's 45.4% aerial duels (lowest in this head-to-head) and 2 SP goals conceded suggest Portugal's route is set-piece aerial delivery, not patient possession.

**The mathematical floor:** Croatia need ~7-8 shots to expect 1 goal given xG/shot 0.12 and Costa at 85%. In 3 games they averaged 3.67 SoT — they will struggle to generate the volume needed.

---

## Model Uncertainty Flags
1. **Draw probability 34%** — this is a genuinely close match. Under 2.5 and BTTS No are more reliable than the result markets.
2. **Portugal 0 build-up goals** — λ_Portugal = 1.26 could be overstated if Croatia's deep block works as well as their PPDA suggests. A 0-0 at 90' going to ET is a genuine 20% scenario.
3. **Referee** — Croatia's 0.67 YC/game despite 11 fouls is anomalous. A card-heavy referee transforms Croatia YC from a weak market to a strong one.
4. **Lineups** — If Rúben Dias (+2.50) starts at CB and Pedro Neto (−1.50) does NOT start, Portugal's defence improves while their attack worsens slightly.

---

## Cross-links
- [[Teams/portugal]]
- [[Teams/croatia]]
- [[Models/opponent-adjusted-sot-model]]
