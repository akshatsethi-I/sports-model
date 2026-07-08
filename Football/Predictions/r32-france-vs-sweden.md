---
title: R32 — France vs Sweden
type: analysis
sport: football
competition: WC2026 Round of 32
tags: [wc2026, r32, prediction, france, sweden]
sources: [fbref-france-wc2026, opta-france-wc2026, fbref-sweden-wc2026, opta-sweden-wc2026]
last_updated: 2026-06-30
---

# R32: France vs Sweden — Jun 30, 2026

> ⚠️ **STATUS: PROVISIONAL** — predictions based on expected lineups. Refresh all player-level markets once confirmed lineups are announced.

## Lineups

**France (4-2-3-1):**
Maignan — Koundé, Upamecano, Lacroix, Digne — Tchouaméni, Rabiot — Olise, Mbappé, Barcola — Dembélé

**Sweden (3-4-1-2):**
Widell Zetterström — Lagerbielke, Lindelöf, Bernhardsson — Karlström, Stroud, Elanga, Ayari — Gudmundsson — Gyökeres, Isak

**Referee:** Danny Makkelie (NED) — **3.41 YC avg/game** (lenient — significantly below dataset range; Valenzuela was 4.83)

### Key Lineup Notes
- **France:** Gusto (+5.06 On-Off) not starting — Koundé (-5.06) at RB. Right-side delivery downgraded. Mbappé (-15.62 On-Off) plays as AM/10, not wide striker. Dembélé (G/SoT 0.80 — regression due) as lone ST.
- **Sweden:** **Widell Zetterström (66.7% save%) confirmed** — not Nordfeldt (33.3%). Model-critical. Ayari (+7.85 On-Off) as LWB — explains his 17 tournament crosses. Gudmundsson (-6.75 On-Off) starts as AM despite statistical drag.

---

## Pre-Prediction Checklist

### Step 1 — Stakes
R32 knockout. France heavy favorites. Sweden must win in 90' or take to ET/pens. No conservative play available. Sweden's PPDA 17.5 (deepest block in dataset) suggests they will sit deep and counter — not chase the game early.

### Step 2 — Opponent-Adjusted SoT Model

**France attacking vs Sweden defence:**
- France SoT/game: 7.33
- Sweden SoT allowed/game: 4.0
- Adjusted France SoT = 7.33 × (4.0 / 5.5) = **5.33**
- Sweden GK: Widell Zetterström save% = **66.7%** (confirmed starter)
- Base France xG = 5.33 × (1 − 0.667) = 5.33 × 0.333 = **1.78**
- Quality adjustment: France xG/shot 0.12 (below avg 0.15) → −10% → 1.78 × 0.90 = **1.60**
- Formation discount: Koundé (−5.06 On-Off) replacing Gusto (+5.06) weakens right-side delivery → slight downward nudge
- **λ_France = 1.55**

**Sweden attacking vs France defence:**
- Sweden SoT/game: 6.67
- France SoT allowed/game: 2.0 (best in dataset)
- Adjusted Sweden SoT = 6.67 × (2.0 / 5.5) = **2.43**
- France GK: Maignan save% = **66.7%**
- Base Sweden xG = 2.43 × (1 − 0.667) = 2.43 × 0.333 = **0.81**
- Quality adjustment: Sweden xG/shot **0.07** (lowest in entire dataset) → substantial −15% penalty → 0.81 × 0.85 = **0.69**
- Tactical context: Sweden PPDA 17.5 deep block → limited attacking possession → reinforces low volume
- **λ_Sweden = 0.70**

### Step 3 — Probability-First Derivation

λ_France = **1.55** | λ_Sweden = **0.70** | λ_total = **2.25**

**Poisson distribution (France, λ=1.55):**
| Goals | Probability |
|-------|------------|
| 0 | 21.2% |
| 1 | 32.9% |
| 2 | 25.5% |
| 3 | 13.2% |
| 4+ | 7.2% |

**Poisson distribution (Sweden, λ=0.70):**
| Goals | Probability |
|-------|------------|
| 0 | 49.7% |
| 1 | 34.8% |
| 2 | 12.2% |
| 3+ | 3.3% |

**Match outcomes:**
| Outcome | Probability |
|---------|------------|
| **France win (90')** | **58%** |
| Draw (90') | **25%** |
| Sweden win (90') | **17%** |
| France qualify (incl. ET/pens) | **~72%** |
| Sweden qualify (incl. ET/pens) | **~28%** |
| Under 2.5 goals | **61%** |
| Under 1.5 goals | 34% |
| BTTS Yes | **40%** |
| BTTS No | **60%** |

**Most likely scorelines:**
| Score | Probability |
|-------|------------|
| 1-0 France | **16.3%** |
| 2-0 France | **12.7%** |
| 1-1 | **11.4%** |
| 0-0 | **10.5%** |
| 2-1 France | **8.9%** |
| 0-1 Sweden | **7.4%** |
| 3-0 France | **6.5%** |
| 1-0 Sweden | — (inc. in 7.4% above) |

---

## Match Flow Prediction

- **Likely opening phase:** Sweden drop into compact 3-4-1-2 low-block (PPDA 17.5 — deepest in dataset). France probe with through balls (6/game — highest in dataset), trying to exploit space between Sweden's back 3 and Ayari's LWB. Sweden sit at 41.2m press start — very deep. Tempo will be slow early.
- **Key tactical battles:**
  - **Mbappé (AM/10) vs Karlström/Stroud:** Mbappé dropping into pockets, pace threat in behind. Sweden's CM pair must track his runs AND cover from wide.
  - **Gyökeres + Isak vs Upamecano + Lacroix:** Two world-class strikers against France's CB pair. Upamecano (−3.53 On-Off) is the liability. Any ball in behind is dangerous.
  - **France through balls vs Sweden's 3-man line:** Sweden's backline handles offsides well (12 caught in 3 games = 4/game). But Dembélé's movement and Mbappé's burst will test the defensive line.
  - **France aerial vs Sweden headers (0 goals from 6 attempts):** France's 61.0% aerial dominance and Sweden's 0 header goals scored/conceded suggests dead balls favour France — even though France also had 0 SP goals in the group stage.
- **Momentum triggers:**
  - France early goal → Sweden forced to open; Gyökeres/Isak suddenly have space. Dangerous moment.
  - Sweden goal on a fast break (direct speed 1.97 — highest in dataset) → France must chase; Upamecano's weakness exposed in open game.
  - Gudmundsson (−6.75 On-Off) forced off early → Sweden improve. His replacement improves them structurally.
  - Dembélé fails to convert 2+ chances (regression from 0.80 G/SoT) → France pressure but no reward; Sweden confidence builds.
- **Scenarios:**
  - France dominate, win 1-0 or 2-0: **29%** (scorelines combined)
  - France win but Sweden score: 1-1 resolve / 2-1: **20%**
  - 0-0 / 1-1 → ET/pens (France narrow fav): **22%** combined draw scenarios
  - Sweden fast-break win: **17%** — Gyökeres+Isak exploit Upamecano space
- **Key indicators to watch:** France SoT tally by 60 min (if ≥4, pressure is building toward model). Sweden fast-break count (if ≥3 attempts, Upamecano is being exposed). Makkelie YC count by 70 min (if 0-1 cards, Under 3.5 strengthens; if 3+ by 70 min, Over 4.5 is in play). Widell Zetterström positioning (deep to deal with through balls — his 66.7% save% is crucial for Sweden surviving).

---

## Market Predictions

### Result / Qualification
| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **France win (90')** | **58%** | ⭐⭐⭐⭐ | λ_France 1.55 vs λ_Sweden 0.70 = clear edge; France allow 2.0 SoT/game |
| Draw (90') | 25% | — | Second most likely single outcome; bettable for ET/pens value |
| Sweden win (90') | 17% | — | Gyökeres+Isak fast-break real threat; Upamecano weakness |
| France qualify (inc. ET/pens) | ~72% | ⭐⭐⭐⭐ | Even pens slightly favor France quality |

### Goals
| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **Under 2.5** | **61%** | ⭐⭐⭐⭐ | λ_total 2.25; Sweden's true xG is ~1.0/game, France regression due |
| **BTTS No** | **60%** | ⭐⭐⭐ | Sweden adj 2.43 SoT → 49.7% chance they score 0 |
| Under 1.5 | 34% | — | Too low — skip |
| Over 2.5 | 39% | — | Avoid |

### Shots on Target
| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **Sweden SoT Under 3.5** | **~77%** | ⭐⭐⭐⭐⭐ | France allows 2.0 SoT/game; adj Sweden = 2.43 SoT projected. P(≤3) = 77%. Sweden's xG/shot 0.07 means even their SoT are weak. |
| **France SoT Over 4.5** | **~62%** | ⭐⭐⭐⭐ | Adj France SoT = 5.33; P(≥5) = 62% |
| **Widell Zetterström saves Over 2.5** | **~69%** | ⭐⭐⭐⭐ | 5.33 adj France SoT × 66.7% save = 3.55 expected saves. P(≥3) = 69% |
| Sweden SoT Under 2.5 | ~56% | ⭐⭐⭐ | Adj 2.43 SoT; P(≤2) = 56% — borderline |
| Total SoT Over 6.5 | ~58% | ⭐⭐⭐ | France ~5.3 + Sweden ~2.4 = 7.7 projected |

### Corners
*Corner model: France own 5.0/game, Sweden own 5.67/game (FIFA Opta 3-game). Opponents in France's matches won 3.7/game (Footystats 8.7 total − 5.0). Opponents in Sweden's matches won 3.33/game (9.0 total − 5.67).*
*Blended: λ_France corners = (5.0 + 3.33)/2 = 4.17 | λ_Sweden corners = (5.67 + 3.7)/2 = 4.69 | λ_total = 8.86*
| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **Total corners Over 7.5** | **~65%** | ⭐⭐⭐⭐ | λ_total=8.86; France territorial dominance vs Sweden deep block = corner-generating setup |
| Total corners Over 8.5 | ~54% | ⭐⭐⭐ | Borderline — slight edge from France's pressure |
| Total corners Under 10.5 | ~72% | ⭐⭐⭐⭐ | P(≤10) from Poisson(8.86) |
| France corners Over 4.5 | ~40% | — | λ_France=4.17; not enough edge — skip |
| Sweden corners Under 6.5 | ~79% | ⭐⭐⭐⭐ | λ_Sweden=4.69; P(≤6)=79% — Sweden deep block concedes territory, wins fewer corners |

### Fouls
| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **Total fouls Over 17.5** | **~60%** | ⭐⭐⭐⭐ | France 8.0 + Sweden 11.0 = 19.0/game projected |
| **France fouls Under 10.5** | **~72%** | ⭐⭐⭐⭐ | France only 8.0 fouls/game; most disciplined team in dataset |
| Sweden fouls Over 9.5 | ~55% | ⭐⭐⭐ | Sweden 11.0/game avg; may drop if trailing early |

### Cards (Makkelie — 3.41 YC avg/game)
*Note: Group stage YCs are wiped clean for R32. All players start on 0 cards.*
| Market | Prob | Stars | Reasoning |
|--------|------|-------|-----------|
| **Total YC Over 2.5** | **~66%** | ⭐⭐⭐⭐ | Poisson λ=3.41: P(≥3) = 66%. Sweden foul 11/game; the base rate gives this. |
| **Total YC Under 4.5** | **~74%** | ⭐⭐⭐⭐ | Poisson λ=3.41: P(≤4) = 74%. Makkelie is lenient; France very disciplined. |
| Sweden to receive a card | ~60% | ⭐⭐⭐ | Sweden 11 fouls/game; Gudmundsson, Ayari are physical types |
| France to receive a card | ~35% | — | Only 1 YC in 3 games; Tchouaméni isolated risk |
| Total YC Under 3.5 | ~56% | — | Borderline — skip |

---

## Best Picks (Priority Order)

1. **Sweden SoT Under 3.5** ⭐⭐⭐⭐⭐ — 77% | France restricts to 2.0 SoT/game; adj 2.43 projected; P(≤3) = 77%
2. **France win (90')** ⭐⭐⭐⭐ — 58% | Clear λ advantage; only Sweden fast-break is the counter
3. **France SoT Over 4.5** ⭐⭐⭐⭐ — 62% | Sweden allows 4.0 SoT/game; adj France = 5.33
4. **Widell Zetterström saves Over 2.5** ⭐⭐⭐⭐ — 69% | 5.33 adj France SoT × 66.7% = 3.55 expected saves
5. **Total YC Under 4.5** ⭐⭐⭐⭐ — 74% | Makkelie 3.41 avg; France ultra-disciplined (1 YC total)
6. **Total YC Over 2.5** ⭐⭐⭐⭐ — 66% | Same Makkelie base rate; Sweden foul 11/game
7. **Under 2.5 goals** ⭐⭐⭐⭐ — 61% | λ_total 2.25; both teams in regression after +4.0 Goals vs xG
8. **Total fouls Over 17.5** ⭐⭐⭐⭐ — 60% | 8+11=19 projected
9. **France fouls Under 10.5** ⭐⭐⭐⭐ — 72% | Most disciplined team; 8.0/game
10. **BTTS No** ⭐⭐⭐ — 60% | Sweden projected 2.43 SoT; 49.7% they score 0

**Predicted score: 2-0 France** (12.7%) as primary | 1-0 France (16.3%) as secondary | 0-0/1-1 → ET/pens (22%) as third scenario

---

## Regression Warning (Both Teams)

This is the most xG-luck-contaminated fixture of the tournament:
| Team | Goals | xG | Overperformance | xG/shot |
|------|-------|----|-----------------|---------|
| France | 10 | 5.96 | **+4.04** | 0.12 |
| Sweden | 7 | 2.98 | **+4.02** | **0.07** |

Combined +8.06 goals of overperformance means both teams have been scoring from low-quality positions at an unsustainable rate. **The model expects regression for both.** France's true attacking threat is ~1.55 xG/game (not 3.33 goals/game). Sweden's true threat is ~0.70 xG/game (not 2.33 goals/game). This fixture will likely produce fewer goals than the group-stage records suggest — supporting the Under 2.5 and BTTS No calls.

---

## Cross-links
- [[Teams/france]]
- [[Teams/sweden]]
- [[Models/opponent-adjusted-sot-model]]
