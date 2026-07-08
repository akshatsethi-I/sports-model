---
title: R32 — Spain vs Austria
type: analysis
sport: football
competition: WC2026 Round of 32
tags: [wc2026, r32, prediction, spain, austria]
sources: [fbref-spain-wc2026, opta-spain-wc2026, fbref-austria-wc2026, opta-austria-wc2026, opta-austria-extended]
last_updated: 2026-07-02
---

# R32: Spain vs Austria

**Status:** COMPLETE ✓ — FBRef + Opta + Opta Extended + Footystats + Confirmed Lineups + Referee ingested.

---

## Model

### Spain attacking vs Austria defence
- Spain SoT/game: **5.33** (16 in 3 games)
- Austria SoTA-allowed: **4.33/game** (13 SoTA in 3 games, 0 CS) → regress 20%: **4.56**
- Adj Spain SoT = 5.33 × (4.56/5.5) = **4.42**
- Schlager save%: 53.8% on 13 SoTA → regress 20%: **56%**
- Base λ_Spain = 4.42 × 0.44 = **1.94**
- **Lineup adjustment +8%:** Baena (+3.57), Olmo (+3.03), Pedri (+2.06), Rodri (+1.69) all start; Torres (−2.13) and Fabián Ruiz (−3.04) benched. Only drag: Llorente (−3.50) at RB. Net strongly positive.
- **λ_Spain = 1.94 × 1.08 = 2.09**

### Austria attacking vs Spain defence
- Austria SoT/game: **2.67** (8 in 3 games)
- Spain SoTA-allowed: **1.33/game** (4 in 3 games, 3 CS) → regress 40%: **3.00**
- Adj Austria SoT = 2.67 × (3.00/5.5) = **1.455**
- Simón save%: 100% on 4 SoTA → regress 40%: **86%**
- **λ_Austria = 1.455 × 0.14 = 0.20** (no lineup adjustment — Posch/Lienhart positives offset by X.Schlager/Alaba drags; Kalajdžić sub option not starter)

> **Key context on λ_Austria = 0.20:** Austria's 6 group goals came on 3.71 xG (+2.29 overperformance — 2nd highest in dataset). Their true quality is ~1.24 xG/game in normal circumstances. Against Spain's defence (0.18 xGA/game, 0.04 xG/shot allowed, 6.67 box touches allowed per game), Austria's effective threat collapses to near-zero. λ_Austria = 0.20 reflects this — it is not an error.

> **Footystats validation (10-game sample):** Spain xG 2.18/game (vs 1.75 WC) — broader sample slightly higher, WC used as primary. Spain xGA 0.63/game (vs 0.18 WC — extreme WC figure validated by 70% CS rate). Austria xG 1.34/game (vs 1.24 WC — consistent). BTTS%: Spain 30%, Austria 40% — both support BTTS No. Spain CS% 70% in 10 games — historic dominance.

---

## λ_Spain = 2.09 | λ_Austria = 0.20 | λ_total = 2.29

### Match Outcomes
| Outcome | Probability |
|---------|------------|
| **Spain win (90')** | **82%** |
| Draw (90') | 15% |
| Austria win (90') | 3% |
| **Spain qualify (incl. ET/pens)** | **~93%** |

### Score Distributions
| Goals | Spain (λ=2.09) | Austria (λ=0.20) |
|-------|---------------|-----------------|
| 0 | 12.4% | 81.9% |
| 1 | 25.9% | 16.4% |
| 2 | 27.0% | 1.6% |
| 3 | 18.8% | 0.1% |
| 4+ | 15.9% | — |

---

## Market Predictions

### Result / Qualification
| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Spain qualify (incl. ET/pens)** | **92%** | ⭐⭐⭐⭐⭐ | Even in ET Spain overwhelming favourites |
| **Spain win (90')** | **80%** | ⭐⭐⭐⭐⭐ | λ=1.94 vs 0.20; dominant |
| Draw (90') | 17% | — | — |
| Austria win (90') | 3% | — | Near-impossible |

### Goals
*λ_total = 2.29*

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **BTTS No** | **84%** | ⭐⭐⭐⭐⭐ | P(Spain≥1)×P(Austria≥1) = 87.6%×18.1% = 15.9% BTTS Yes |
| **Under 3.5** | **80%** | ⭐⭐⭐⭐⭐ | λ=2.29; P(≤3 total) |
| **Spain to score** | **88%** | ⭐⭐⭐⭐⭐ | P(Spain≥1) = 1-e^(-2.09) |
| **Over 1.5** | **66%** | ⭐⭐⭐⭐ | P(≥2 total) |
| **Under 2.5** | **62%** | ⭐⭐⭐⭐ | P(total 0,1,2) |
| **Austria to score** | **18%** | — | P(Austria≥1) = 1-e^(-0.20) |
| Over 2.5 | 38% | — | Skip |
| Under 1.5 | 34% | — | Skip |

### Shots on Target
*Adj Spain SoT λ = 4.42 × 1.08 = 4.77 | Adj Austria SoT λ = 1.455 | Total = 6.23*

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Austria SoT Under 2.5** | **82%** | ⭐⭐⭐⭐⭐ | λ=1.455; P(≤2) = 82% |
| **Austria SoT Over 0.5** | **77%** | ⭐⭐⭐⭐⭐ | λ=1.455; P(≥1) = 77% |
| **Total SoT Under 7.5** | **73%** | ⭐⭐⭐⭐⭐ | λ=6.23 |
| **Spain SoT Over 3.5** | **70%** | ⭐⭐⭐⭐⭐ | λ=4.77; P(≥4) = 70% |
| Total SoT Over 4.5 | 75% | ⭐⭐⭐⭐⭐ | λ=6.23 |
| Total SoT Over 5.5 | 61% | ⭐⭐⭐⭐ | — |
| Spain SoT Over 4.5 | 53% | ⭐⭐⭐ | Marginal |

### Saves
*λ_Schlager = 4.77 × 0.56 = 2.67 | λ_Simón = 1.455 × 0.86 = 1.25*

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Schlager saves Over 0.5** | **93%** | ⭐⭐⭐⭐⭐ | λ=2.67; P(≥1) = 1-e^(-2.67) |
| **Schlager saves Over 1.5** | **75%** | ⭐⭐⭐⭐⭐ | λ=2.67; P(≥2) = 75% |
| **Simón saves Over 0.5** | **71%** | ⭐⭐⭐⭐⭐ | λ=1.25; P(≥1) = 71% |
| Schlager saves Over 2.5 | 50% | ⭐⭐⭐ | Marginal |
| Simón saves Over 1.5 | 36% | — | Skip |

### Corners
*Spain own WC: 7.67/game | Footystats 10-game: 9.1/game → use WC as primary (tournament context)*
*Austria own WC: 2.33/game | Footystats 10-game: 6.5/game → WC primary (pinned back vs Spain's press)*
*λ_total ≈ 10 (WC rates: 7.67 + 2.33)*

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Total corners Over 7.5** | **~79%** | ⭐⭐⭐⭐⭐ | λ=10 |
| **Spain corners Over 6.5** | **66%** | ⭐⭐⭐⭐ | λ=7.67; P(≥7) = 66% |
| Total corners Under 12.5 | ~72% | ⭐⭐⭐⭐⭐ | — |
| Total corners Over 9.5 | ~56% | ⭐⭐⭐⭐ | — |

### Fouls
*Spain committed: 11.33/game | Austria committed: 10.67/game | λ_total = 22.0/game*

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Total fouls Over 18.5** | **~77%** | ⭐⭐⭐⭐⭐ | Both teams foul regularly |
| Total fouls Over 21.5 | ~54% | ⭐⭐⭐ | Marginal |
| **Austria fouls Over 8.5** | **~75%** | ⭐⭐⭐⭐⭐ | λ=10.67; desperation fouls in R32 |

### Cards
*Referee: Glenn Nyberg (SWE) — 3.29 YC/game, 0.11 RC/game*
*Team rates: Spain 0.67/game, Austria 1.33/game → Total 2.0/game*
*Blended λ_YC = (2.0 + 3.29) / 2 = 2.65/game*
*Card share: Spain ~33% (0.87 YC) | Austria ~67% (1.78 YC)*

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Austria YC Over 0.5** | **83%** | ⭐⭐⭐⭐⭐ | λ=1.78; P(≥1) = 1-e^(-1.78) |
| **Total YC Over 1.5** | **74%** | ⭐⭐⭐⭐⭐ | λ=2.65; P(≥2) = 74% |
| **Spain YC Under 1.5** | **78%** | ⭐⭐⭐⭐⭐ | λ=0.87; P(0)+P(1) = 78% |
| **Total YC Under 4.5** | **91%** | ⭐⭐⭐⭐⭐ | λ=2.65; P(≤4) = 91% — Nyberg is low-card |
| Total YC Over 2.5 | 49% | ⭐⭐⭐ | Marginal — skip |
| Red card Over 0.5 | ~10% | — | Nyberg 0.11 RC/game — skip |

### Offsides
*Spain: 2.0/game | Austria: 2.0/game | Total λ = 4.0*

| Market | Prob | Stars | Notes |
|--------|------|-------|-------|
| **Total offsides Over 3.5** | **57%** | ⭐⭐⭐⭐ | λ=4.0; P(≥4) = 57% |
| Total offsides Under 5.5 | ~71% | ⭐⭐⭐⭐⭐ | — |
| **Spain offsides Over 1.5** | **59%** | ⭐⭐⭐⭐ | λ=2.0; P(≥2) = 59% |

---

## Best Picks — FINAL (all data ingested)

| # | Market | Prob | Stars |
|---|--------|------|-------|
| 1 | Schlager saves Over 0.5 | **93%** | ⭐⭐⭐⭐⭐ |
| 2 | Spain qualify (incl. ET/pens) | **93%** | ⭐⭐⭐⭐⭐ |
| 3 | Total YC Under 4.5 | **91%** | ⭐⭐⭐⭐⭐ |
| 4 | Spain to score | **88%** | ⭐⭐⭐⭐⭐ |
| 5 | Spain win (90') | **82%** | ⭐⭐⭐⭐⭐ |
| 6 | Austria SoT Under 2.5 | **82%** | ⭐⭐⭐⭐⭐ |
| 7 | Under 3.5 goals | **80%** | ⭐⭐⭐⭐⭐ |
| 8 | BTTS No | **84%** | ⭐⭐⭐⭐⭐ |
| 9 | Total corners Over 7.5 | **~79%** | ⭐⭐⭐⭐⭐ |
| 10 | Spain YC Under 1.5 | **78%** | ⭐⭐⭐⭐⭐ |
| 11 | Austria SoT Over 0.5 | **77%** | ⭐⭐⭐⭐⭐ |
| 12 | Total fouls Over 18.5 | **~77%** | ⭐⭐⭐⭐⭐ |
| 13 | Schlager saves Over 1.5 | **75%** | ⭐⭐⭐⭐⭐ |
| 14 | Austria fouls Over 8.5 | **~75%** | ⭐⭐⭐⭐⭐ |
| 15 | Total YC Over 1.5 | **74%** | ⭐⭐⭐⭐⭐ |
| 16 | Total SoT Under 7.5 | **73%** | ⭐⭐⭐⭐⭐ |
| 17 | Simón saves Over 0.5 | **71%** | ⭐⭐⭐⭐⭐ |
| 18 | Total SoT Over 4.5 | **75%** | ⭐⭐⭐⭐⭐ |
| 19 | Spain SoT Over 3.5 | **70%** | ⭐⭐⭐⭐⭐ |
| 20 | Austria YC Over 0.5 | **83%** | ⭐⭐⭐⭐⭐ |
| 21 | Total corners Under 12.5 | **~72%** | ⭐⭐⭐⭐⭐ |
| 22 | Over 1.5 goals | **66%** | ⭐⭐⭐⭐ |
| 23 | Spain corners Over 6.5 | **66%** | ⭐⭐⭐⭐ |
| 24 | Under 2.5 goals | **62%** | ⭐⭐⭐⭐ |
| 25 | Total offsides Under 5.5 | **~71%** | ⭐⭐⭐⭐⭐ |

**Predicted score: 2-0 Spain** (primary) | 1-0 Spain (secondary) | 2-1 Spain (third)

---

## Confirmed Lineups

**Spain (4-3-3):** Simón; Llorente, Cubarsí, Laporte, Cucurella; Rodri, Pedri, Olmo; Baena, Oyarzabal, Yamal

| Player | On-Off | Note |
|--------|--------|------|
| A. Baena | **+3.57** (126 min) | Best per-min in squad — RIGHT start |
| D. Olmo | **+3.03** (101 min) | Strong positive — starts ✓ |
| Pedri | **+2.06** (218 min) | Consistent positive — starts ✓ |
| Rodri | **+1.69** (266 min) | Engine — starts ✓ |
| M. Llorente | **−3.50** (180 min) | Only drag — RB |
| F. Torres | −2.13 | BENCHED ✓ |
| Fabián Ruiz | −3.04 | BENCHED ✓ |

→ Oyarzabal (CF): neutral/positive profile; M. Oyarzabal as the false 9 with Yamal + Baena wide.

**Austria (4-2-3-1):** A.Schlager; Posch, Lienhart, Alaba, Mwene; Laimer, Seiwald; X.Schlager, Schmid, Sabitzer; Arnautović

| Player | On-Off | Note |
|--------|--------|------|
| S. Posch | **+4.28** (247 min) | Best Austria defender — starts ✓ |
| P. Lienhart | **+3.00** (180 min) | Solid CB — starts ✓ |
| R. Schmid | +1.34 (144 min) | Mild positive |
| D. Alaba | −1.55 (185 min) | Drag at CB |
| X. Schlager | **−3.27** (193 min) | Structural drag in DM — STARTS (unavoidable) |
| S. Kalajdžić | **+4.72** (46 min) | Best impact sub — bench option from ~60' |

## Referee

**Glenn Nyberg (Sweden)**
- YC avg: **3.29/game** (moderate)
- RC avg: **0.11/game** (very low — virtually no red cards)
- Profile: lets the game flow, unlikely to escalate discipline

---

## Match Flow Prediction

- **Likely opening phase:** Spain dominate possession immediately from kick-off (69.4% avg). Austria sit in 4-4-2 mid-block (PPDA 13.6, press start 45.0m). Spain's press from 47.8m means they are inside Austria's half when Austria try to build. Austria cannot build their 7 successful build-up sequences — Spain press prevents it. Wide play: Yamal right, Cucurella left, overlapping fullbacks generating 7.67 corners/game.

- **Key tactical battles:**
  - **Spain's lateral recycling (69.4% poss) vs Austria's 4-4-2 block:** Austria need their two compact lines to hold shape. Spain's 77 sequences of 10+ passes will probe for gaps — but 0 build-up goals in group stage shows Spain can't unlock compact defences through possession alone.
  - **Yamal (1.88 On-Off) vs Posch (+4.28 Austria RB):** Yamal is Spain's most dangerous creator; Posch is Austria's most reliable defender. This is the key individual duel.
  - **Arnautović on the counter / fast breaks:** Austria concede 3 goals from 5 fast breaks (60% conversion) — the worst fast-break defence in the dataset. When Spain win the ball high, they transition instantly against an exposed Austria backline. Conversely, Austria themselves score 0 goals from 0 fast breaks — they cannot replicate Spain's transition game.
  - **SP matchup:** Spain SP attack (1G/10 shots) vs Austria SP defence (0G/7 shots allowed) — Austria are actually solid at SP defence (strong aerial duels at 63.6% won). Spain's corners and free kicks are unlikely to be primary scoring route. Focus on open-play transitions instead.
  - **Arnautović on the counter:** Austria's only realistic scoring hope is a turnover leading to Arnautović (100% SoT%, 2G in 1.3 90s). One fast break from a Spain high line could produce their only shot on target.
  - **Schlager (−3.27) vs Spain's midfield:** Xaver Schlager is Austria's biggest drag in midfield — Spain's press (McKennie-equivalent intensity) will target him. If he loses the ball high, Spain immediately transition.

- **Momentum triggers:**
  - Spain early goal → Austria must open up → Spain xG/shot rises from poor base of 0.04 for Austria
  - Arnautović on/off bench (starts only 1.3 90s) — if he comes on fresh, Austria's only genuine counter-attack threat appears
  - Pedri yellow card → Spain may be cautious with him → slightly reduces press intensity
  - Austria yellow card in first 30 min → Discipline crisis; one more foul = early numerical disadvantage

- **Scenarios:**
  - Spain 2-0 (efficient press, Oyarzabal + Yamal): 22%
  - Spain 1-0 (tight win against block, late goal): 18%
  - Spain 2-1 (Austria counter-attack goal): 8%
  - 0-0 (Spain's finishing crisis meets Austria's block): 12%
  - Draw with Spain ET win: most likely draw resolution

- **Key indicators:** Yamal touches in final third by 30 min (if <5, Spain struggling to unlock); Austria offsides caught (if ≥2 by HT, their high line is working for Spain); Arnautović appearance time (if early — before 60 min — Austria have conceded)

---

## The Core Problem for Austria

Spain's 77 10+-pass sequences generated 0 build-up goals in 3 group games. Spain cannot unlock a compact block through possession. Austria, however, generated their 2 build-up goals against weaker opponents who didn't press at PPDA 7.8. Spain eliminates Austria's build-up entirely.

**The mathematical reality:** Austria need ~5-6 realistic shots to generate 1 goal given their xG/shot of 0.14 against normal opposition. Against Spain's 0.04 xG/shot allowed, Austria would need 25+ attempts to expect 1 goal. With λ_Austria = 0.20, a clean sheet for Spain is 81.9% likely.

**Spain's problem:** The finishing crisis is real (G/SoT 0.25, 3 hit posts in 3 games). λ_Spain = 1.94 means they should score ~2 goals, but their conversion rate (9.09%) means they may need 10-12 SoT to actually score twice. Watch if Baena (+3.57) or Olmo (+3.03) come on early to change the tempo.

---

## Model Uncertainty Flags
1. **Simón save% 86%** (regressed from 100% on 4 SoTA) — biggest uncertainty. If he's closer to 75%, λ_Austria rises to 0.36.
2. **Spain lineup** — if Torres (−2.13) and Fabián Ruiz (−3.04) start, expect Spain to be less dynamic despite the model showing 80% win chance.
3. **Referee** — cards market not finalised; Austria's 1.33 YC/game rate under a card-active referee could produce strong card markets.
4. **Austria's +2.29 Goals vs xG** — every Austria goal in this game would be a massive positive variance event. Don't be surprised if it happens once; being surprised twice would be extreme.

---

## Cross-links
- [[Teams/spain]]
- [[Teams/austria]]
- [[Models/opponent-adjusted-sot-model]]
