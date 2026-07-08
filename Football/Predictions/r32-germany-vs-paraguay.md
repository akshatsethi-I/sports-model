---
title: R32 Match Prediction — Germany vs Paraguay (FINAL)
type: analysis
sport: football
tags: [WC2026, R32, Germany, Paraguay, prediction, match-preview]
sources: [germany-fbref-gk, germany-fbref-shooting, germany-fbref-misc, germany-opta-initial, germany-opta-extended, paraguay-fbref-gk, paraguay-fbref-shooting, paraguay-fbref-misc, paraguay-opta-initial, paraguay-opta-extended]
last_updated: 2026-06-29
---

# Germany vs Paraguay — WC2026 Round of 32

**Date:** 29 June 2026
**Context:** Knockout — single match. Germany top of Group E (3W, 10G 2GA). Paraguay 3rd in Group C, qualified via third-place standings.

---

## Qualification Stakes

**Germany** — already advanced as group winners. No stakes pressure; playing for momentum into QF. Starters expected; rotation possible 60-75'.

**Paraguay** — first knockout game. Playing for survival. Tactical identity (5-4-1 low block, hold shape, transition) is non-negotiable.

**Critical absence:** **Almirón CONFIRMED SUSPENDED** (1YC + 1RC in group stage confirmed via FBRef Misc table). Paraguay's most experienced midfielder and primary set piece deliverer is missing. Most likely replacement: Bobadilla (-3.47 On-Off; scored an own goal vs USA) or Mauricio.

---

## Expected Goals Model

### Opponent-Adjusted SoT

**Formula:** `Adj SoT = Team SoT/game × (Opponent SoT allowed/game ÷ 5.5)`
`Expected goals = Adj SoT × (1 − Opponent GK save%)`

#### Germany attacking vs Paraguay defence
| Input | Value | Source |
|-------|-------|--------|
| Germany SoT/game | 7.33 | FBRef (22 SoT / 3 games) |
| Paraguay SoT allowed/game | **5.33** | Opta Defending (16 SoT / 3 games) |
| Adj Germany SoT | **7.10** | 7.33 × (5.33 / 5.5) |
| Gill save% | **76.5%** | FBRef primary (13 saves / 17 SoTA) |
| **Germany xG** | **1.67** | 7.10 × (1 − 0.765) |

Cross-check: Germany Opta xG = 2.25/game (open play, full output). SoT model (1.67) accounts for Paraguay's defensive compactness. **λ_Germany = 1.72** (midpoint).

#### Paraguay attacking vs Germany defence
| Input | Value | Source |
|-------|-------|--------|
| Paraguay SoT/game | 1.67 | FBRef (5 SoT / 3 games) |
| Germany SoT allowed/game | **2.33** | FBRef (7 SoTA / 3 games) |
| Adj Paraguay SoT | **0.71** | 1.67 × (2.33 / 5.5) |
| Neuer save% | **42.9%** | FBRef (3/7 SoTA) |
| **Paraguay xG** | **0.41** | 0.71 × (1 − 0.429) |

Cross-check: Paraguay Opta xG = 0.37/game — converges exactly. **λ_Paraguay = 0.40**.

### Final Lambdas
| Team | λ | Actual goals (3 games) |
|------|---|------------------------|
| **Germany** | **1.72** | 10 |
| **Paraguay** | **0.40** | 2 |
| **Total** | **2.12** | — |

**Paraguay overperformance note:** 2 goals from 1.10 xG (G/xG = +0.90). Both goals came from high-turnover transitions only. 0 goals from build-up, 0 from direct attacks, 0 from fast breaks. Scoring model entirely transition-dependent — eliminated by Germany's PPDA 8.1.

---

## Scoreline Probabilities (Poisson)

| Scoreline | Probability |
|-----------|-------------|
| **2-0 Germany** | **17.5%** ← single most likely |
| 1-0 Germany | 16.5% |
| 3-0 Germany | 10.1% |
| 2-1 Germany | 7.0% |
| 1-1 Draw | 7.5% |
| 0-0 Draw | 5.6% |
| 0-1 Paraguay | 4.1% |

### Match outcome
| Outcome | Probability |
|---------|-------------|
| **Germany win** | **~68%** |
| Draw | ~22% |
| Paraguay win | ~8% |
| Germany qualify (incl. ET) | **~85%+** |

---

## Tactical Profile Comparison

### Six Decisive Battles

**1. Possession control → complete Germany dominance**
Germany: 60%+ possession average. Paraguay: **33.4% possession** (lowest profiled) + **71.3% pass accuracy** (lowest profiled). Germany's PPDA 8.1 turns every Paraguay touch into a recovery opportunity.

**2. Germany transition attack → Paraguay's nightmare**
Germany: 27 high turnovers, 22.22% shot-ending, 13 through balls in 3 games. Paraguay concede **117 opponent box touches (39/game)**. Every Germany recovery becomes an attack into a box Paraguay are constantly clearing (105 clearances, 35/game — highest profiled).

**3. Paraguay counter-attack → neutered**
Paraguay's entire scoring model: win ball high → instant counter. 12 high turnovers in 3 games; 1 ended in a goal (Galarza 2' vs Türkiye). This requires the opponent to be sloppy. **Germany's PPDA 8.1 is the perfect antidote — Paraguay will not access the opponent half cleanly.**

**4. Paraguay crossing → statistically non-existent**
**15 crosses, 0 successful (0.0%)** in 3 games. Germany: 65 tackles + 153 recoveries (both highest profiled). Wide play will be eliminated before delivery.

**5. Set pieces — Paraguay's only credible route (diminished)**
Paraguay scored 1 SP goal (50% of all goals, 0.51 xG from 7 shots). Galarza is their main deliverer. Almirón's suspension removes their best set piece option. Germany's 0 SP goals conceded further limits this route.

**6. Box presence asymmetry**
Germany: **116 box touches / 3 games (38.7/game)** vs Paraguay: **30 box touches (10/game)**. **4:1 ratio** in Germany's favour. One stat captures the entire match.

---

## Key Player Signals

### Germany
| Player | On-Off / Signal | Impact |
|--------|-----------------|--------|
| **Wirtz** | +7.50 (best regular) | Primary creative threat; arrives late into box |
| **Goretzka** | +10.15 (best sub impact) | Expected 55-65'; press intensifier when Paraguay tires |
| **Undav** | +3.05 On-Off, 3 sub goals | Super-sub profile; capitalises on fatigued defenders 65-80' |
| **Tah** | -8.57 (worst regular) | Slight aerial vulnerability; Paraguay have no pace to exploit |
| **Musiala** | -7.33 On-Off | May be rested; 3W group stage means rotation possible |

### Paraguay
| Player | Signal | Impact |
|--------|--------|--------|
| **Almirón** | ❌ SUSPENDED | Most experienced midfielder; set piece deliverer — absent |
| **Cubas** | **11 fouls / 0 YC** | Card near-certain. Germany's press makes him foul all match |
| **Diego Gómez** | **2 YC** | Cautious play reduces his contribution |
| **Galarza** | +3.44 On-Off, scored 2' vs Türkiye | Best attacker; set piece threat (more responsibility without Almirón) |
| **Cáceres** | +3.73 On-Off (best regular) | Midfield carrier |
| **Pitta** | +3.20 On-Off | Best sub option 60-70' |
| **Bobadilla** | -3.47 On-Off | Likely replaces Almirón — significant downgrade |

---

## Discipline / Cards Model

Paraguay committed **41 fouls / 3 games (13.7/game)** — FBRef primary. Against Germany's PPDA 8.1, estimated 16-18 fouls on the day.

**Cubas:** 3.67 fouls/game, 0 YC. P(card-free through 90') < 25%.
**Diego Gómez:** 2 YC — plays cautiously.

**Paraguay card λ ≈ 1.5/match:**
| Line | Probability | Stars |
|------|-------------|-------|
| Paraguay ≥1 card | **78%** | ⭐⭐⭐⭐⭐ |
| Paraguay ≥2 cards | **44%** | ⭐⭐⭐ |

---

## GK Saves Model

| GK | Expected saves | Line | Probability | Stars |
|----|---------------|------|-------------|-------|
| **Gill** | **5.43** (7.10 adj SoT × 0.765) | O4.5 | **63%** | ⭐⭐⭐⭐ |
| **Neuer** | **0.41** (barely tested) | — | — | — |

---

## Goals / BTTS Model

| Market | Probability | Stars |
|--------|-------------|-------|
| **Under 3.5** | **83%** | ⭐⭐⭐⭐⭐ |
| **BTTS No** | **73%** | ⭐⭐⭐⭐ |
| **Under 2.5** | **63%** | ⭐⭐⭐⭐ |
| Germany win to nil | **56%** | ⭐⭐⭐⭐ |
| Germany score 2+ | **53%** | ⭐⭐⭐ |

BTTS No: P(Paraguay score 0) = e^(-0.40) = **67%**. 0 goals from build-up, direct attacks, fast breaks across 3 games. 0% crossing success.

---

## Match Flow Prediction

- **Likely opening phase (0-20'):** Germany control possession from kick-off. Paraguay drop into 5-4-1 at 37.3m press start distance. No Almirón to break lines. Germany probe; first chance expected 15-25'.

- **Key tactical battles:**
  - Wirtz floating into pockets vs Paraguay's compact mid-block
  - Cubas fouling Germany's press-trigger passes → yellow card 50-65'
  - Galarza at any within-25m free kick → only live Paraguay threat
  - Undav/Goretzka sub wave at 60-70' → xG/minute spike when Paraguay most fatigued

- **Momentum triggers:**
  - Germany 1st goal: Paraguay have no comeback record — they've trailed and never equalised. Opens the game for Germany.
  - Cubas yellow card: Forces passive defending, removes main foul-committer, creates gaps
  - Almirón absence at set pieces: Every dangerous free kick highlights the quality gap

- **Scenarios:**
  - **Germany 2-0/3-0 (50%):** Score 25-35', add second after 65' via sub. Cubas carded. Clean sheet.
  - **Germany 1-0 (18%):** Gill heroics; Paraguay hang in. Germany survive late pressure.
  - **Draw at 90' → Germany ET (12%):** Rotation reduces press intensity; Galarza delivers one set piece.
  - **Paraguay shock win (8%):** Requires Germany disorganisation + clinical Galarza moment.

- **Key indicators during match:**
  - Cubas foul count: 3+ by 35' = card imminent
  - Germany box touches: 20+ by HT = siege confirmed
  - Galarza at free kicks within 25m = genuine danger
  - Undav/Goretzka entrance timing (expected 60-70')
  - Paraguay offsides cluster = they've lost the ball-winning battle

---

## Ranked Picks

| Pick | Probability | Stars | Core reasoning |
|------|-------------|-------|----------------|
| **Paraguay ≥1 card** | **78%** | ⭐⭐⭐⭐⭐ | Cubas 11 fouls/0 YC = structural inevitability vs PPDA 8.1 press. Almirón suspension forces others into physical defending |
| **Germany win (90')** | **68%** | ⭐⭐⭐⭐⭐ | λ_G=1.72 vs λ_P=0.40; 4:1 xG ratio; Paraguay's counter model eliminated by Germany's press |
| **Under 3.5** | **83%** | ⭐⭐⭐⭐⭐ | Paraguay xG=0.37/game; even Germany scoring 3 requires Paraguay to score 1+ (73% they don't) |
| **BTTS No** | **73%** | ⭐⭐⭐⭐ | P(Paraguay 0 goals)=67%; 0 goals from non-transition sources in group stage; 0% crossing accuracy |
| **Under 2.5** | **63%** | ⭐⭐⭐⭐ | Most likely scorelines (1-0, 2-0) both fall under 2.5 |
| **Germany win to nil** | **56%** | ⭐⭐⭐⭐ | Paraguay scoring model entirely dependent on transitions Germany prevent |
| **Gill saves O4.5** | **63%** | ⭐⭐⭐⭐ | Expected 5.43 saves; Germany volume ensures Gill is busy |
| **Paraguay ≥2 cards** | **44%** | ⭐⭐⭐ | Cubas + secondary defender; λ=1.5 model |
| **Germany score 2+** | **53%** | ⭐⭐⭐ | Poisson; Undav/Goretzka amplify in 60-70' window |

### Best 3 picks
1. **Paraguay card ⭐⭐⭐⭐⭐** (78%) — structural inevitability; most reliable pick of the match
2. **Germany win ⭐⭐⭐⭐⭐** (68%) — model as one-sided as any match profiled
3. **Under 3.5 ⭐⭐⭐⭐⭐** (83%) — safe ceiling pick; Paraguay xG=0.37 makes high totals near-impossible

---

## Predicted Score

**2-0 Germany** (17.5% — single most probable scoreline)

Gill makes 5-6 saves. Cubas carded 50-65'. Wirtz or Undav most likely goalscorers. Neuer barely tested.

> **Key watch:** Galarza is Paraguay's only live threat. Any within-25m free kick without Almirón is their best — and likely only — route to goal.

---

## Cross-links
- [[Teams/germany]]
- [[Teams/paraguay]]
