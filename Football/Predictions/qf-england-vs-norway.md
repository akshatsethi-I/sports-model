---
title: QF — England vs Norway
type: analysis
sport: football
competition: WC2026 QF
tags: [wc2026, qf, england, norway, prediction]
sources: [fbref-england-5g, opta-england-5g, fbref-norway-5g, opta-norway-5g]
last_updated: 2026-07-11
---

# England vs Norway — WC2026 Quarter-Final

## Pre-Match Context
- England: W4 D1 L0, 11 GF 5 GA, PPG 2.60, CS 40%, BTTS 60%, FTS 20%
- Norway: W4 D0 L1, 12 GF 9 GA, PPG 2.40, CS 0%, BTTS 100%, FTS 0%
- Round: QF — benchmarks and GK priors adjusted accordingly

---

## Pre-Prediction Checklist

### Step 1 — Qualification stakes
Both teams require a win to advance. Draws lead to AET then penalties. No scenario where either team plays for a draw. Both sides will be fully attack-minded.

### Step 2 — Opponent-adjusted SoT model ✓ (below)

### Step 3 — Probability-first star ratings ✓ (stars follow numbers below)

---

## Model Calculations

### SoTA Regression (QF benchmark = 3.0, n_prior = 3)
- England SoTA allowed: 14 in 5G = 2.80/game → regressed: (2.80×5 + 3.0×3)/8 = **2.875/game**
- Norway SoTA allowed (Nyland 4 first-team games): 14/4 = 3.5/game → regressed: (3.5×4 + 3.0×3)/7 = **3.286/game**

### GK Bayesian Regression (QF+ prior = 70%)
- Pickford (5G): (5×0.643 + 3×0.70)/8 = **66.4%**
- Nyland (4G): (4×0.643 + 3×0.70)/7 = **66.7%**
- Both GKs regress to virtually identical values — no goalkeeping edge.

### England λ (attacking vs Norway defense)
| Component | Calculation | Value |
|-----------|------------|-------|
| Adj SoT | 6.40 × (3.286/5.5) | **3.824** |
| λ_SoT | 3.824 × (1−0.667) | **1.273** |
| λ_xG | England xG/game | **1.980** |
| λ_SP | 0.344 × (1−0.667) | **0.115** |
| **England λ** | 0.6×1.273 + 0.4×1.98 + 0.115 | **1.671** |

### Norway λ (attacking vs England defense)
| Component | Calculation | Value |
|-----------|------------|-------|
| Adj SoT | 5.5 × (2.875/5.5) | **2.875** (above 2.5 floor) |
| λ_SoT | 2.875 × (1−0.664) | **0.966** |
| λ_xG | Norway xG/game | **1.876** |
| λ_SP | 0.392 × (1−0.664) | **0.132** |
| **Norway λ** | 0.6×0.966 + 0.4×1.876 + 0.132 | **1.462** |

**Total λ = 3.133**

### Match Probabilities (Poisson)
| Outcome | Probability |
|---------|------------|
| England win (90 min) | **~43%** |
| Draw (90 min) | **~24%** |
| Norway win (90 min) | **~34%** |
| England advance (incl. AET/pens) | **~55%** |

### Goals Markets
| Market | Probability |
|--------|------------|
| Over 1.5 | **82%** |
| Over 2.5 | **61%** |
| Under 3.5 | **62%** |
| Under 4.5 | **79%** |
| BTTS Yes | **62%** |
| England to score | **81%** |
| Norway to score | **77%** |

### Cards (Referee: Clément Turpin, FRA — 3.38 YC/game, 0.27 RC/game)
- Team card rates: England 1.4 YC/game, Norway 0.4 YC/game
- λ_total YC = (1.4 + 0.4 + 3.38) / 2 = **2.59**

| Market | Probability |
|--------|------------|
| Over 1.5 YC | **73%** |
| Under 3.5 YC | **74%** |
| Under 4.5 YC | **87%** |
| England O0.5 YC (team λ=2.01) | **87%** |
| Norway O0.5 YC (team λ=0.58) | **44%** |
| Norway U2.5 YC | **95%** |

### Corners
- England corners/game: 6.2 (31 in 5G)
- Norway corners/game: 4.4 (22 in 5G)
- Footystats match averages: England 10.6, Norway 10.4
- Match λ = **11.0** (Norway's deep block generates additional corner situations for England)

| Market | Probability |
|--------|------------|
| Over 8.5 total | **77%** |
| Over 9.5 total | **67%** |
| Over 10.5 total | **56%** |
| Under 13.5 total | **89%** |
| England O4.5 | **75%** |
| England O5.5 | **61%** |
| Norway O2.5 | **82%** |
| Norway U5.5 | **70%** |

---

## Confirmed Lineups

**Norway (4-3-3):** Nyland — Ryerson, Ajer, Wolfe, Heggem — Ødegaard, Berge, Berg — Nusa, Haaland, Sørloth
*Key note: Sørloth starts alongside Haaland in a dual striker 4-3-3. Maximum aerial/physical threat. Nusa provides width/pace on right.*

**England (4-2-3-1):** Pickford — Spence, Konsa, Stones, O'Reilly — Rice, Anderson — Saka, Bellingham, Gordon — Kane
*Key note: Spence starts at RB (not Alexander-Arnold). Anderson alongside Rice in double pivot. Bellingham as AM. Classic Southgate/Tuchel shape.*

**Referee:** Clément Turpin (FRA) — 3.38 YC/game, 0.27 RC/game

---

## Tactical Overview

Norway's 4-3-3 with Haaland + Sørloth is the key tactical wrinkle. Two physical strikers means Norway can bypass England's midfield with direct balls, compete aerially with Konsa/Stones, and press England's defenders high. Ødegaard in midfield gives them a creative outlet if they win the ball.

England will look to dominate possession (expected 55-58%) and attack through wide channels — Saka and Gordon stretching Norway's defensive shape, with Kane and Bellingham arriving from deep. England's 32.6 box touches/game against Norway's 31.2 allowed/game is a direct collision of strength vs weakness.

**England's structural edge:** Aerial duels 56.7% won, 4 header goals in 5G, 81 crosses. Norway conceded 2 header goals in 5G from 11 attempts. England's cross-to-header machine targets Norway's most obvious vulnerability.

**Norway's structural threat:** Haaland's xG/shot of 0.18 (elite conversion), Sørloth's aerial presence, fast breaks (1 goal from 4 in 5G = 25%). England allow 17.6 opponent box touches/game — Norway will get fewer looks than against weaker defenses, but each look is dangerous.

**Set pieces — England neutralised:** Norway's SP defense is 0 goals from 17 shots (0% conversion). England's SP xG of 0.344/game is their biggest structural weapon, but Norway's block eliminates this edge almost entirely. England's SP advantage is neutralised.

**Norway's xG overperformance:** +2.62 goals vs xG in 5G. Haaland and Sørloth repeatedly outperform xG. However, xG/game of 1.876 is legitimately high driven by high-quality positions — this isn't pure luck. Regression likely but their true quality is higher than average xG teams.

---

## Match Flow Prediction

- **Likely opening phase:** England possession, Norway sit in 4-3-3 mid-block, looking to press on turnover. Haaland and Sørloth target direct balls early to test Konsa and Stones aerially.
- **Key tactical battles:** Kane + Bellingham arriving into Norway's midfield space vs Ødegaard/Berge defensive cover. Haaland/Sørloth aerial duel vs Konsa/Stones. Saka 1v1 vs Ryerson (Saka's biggest quality advantage). England crosses vs Norway's aerial block.
- **Momentum triggers:** Norway opener → England forced to open up, Norway counter-attacks become lethal (Haaland 1v1 space). England opener → Norway must abandon compact shape, England possession becomes dominant.
- **Scenarios:**
  - England control possession, score in second half: ~43% (most likely single outcome)
  - Draw after 90 min → AET/pens: ~24%
  - Norway win on Haaland/Sørloth direct play: ~34%
- **Key indicators to watch:** Haaland aerial duel success rate vs Konsa/Stones. Whether England can get behind Wolfe/Heggem with Saka/Gordon pace. Norway pressing intensity from Haaland/Sørloth — if they press high from minute 1, England build-up is under pressure early.

---

## Picks

### Match Result
**England to Advance (incl. AET/pens)** — ~55% → ⭐⭐⭐⭐
England's structural advantages (aerial, possession, box presence, GK parity) give them the edge even if the 90-min split is close. AET and penalties add roughly +12% to England's 43% 90-min probability.

**Norway to Win 90 min** — ~34% → ⭐⭐⭐
Legitimate upset probability. Haaland + Sørloth direct play, fast break conversion, and Nyland (Bayesian 66.7%) provide a credible path. Value pick only.

### Goals
**Over 1.5 Goals** — 82% → ⭐⭐⭐⭐⭐
Total λ=3.133, Norway BTTS 100% in 5G, both GKs at ~66% save rate. Goals are extremely likely. Strongest pick in this match.

**Over 2.5 Goals** — 61% → ⭐⭐⭐⭐
Norway conceded 9 goals in 5G (1.8/game, 0% clean sheets). England create 32.6 box touches/game. Even accounting for this being a QF, multiple goals expected.

**Under 3.5 Goals** — 62% → ⭐⭐⭐⭐
Confidence interval: 61% Over 2.5 and 62% Under 3.5 is a mild tension — the model says a 2-3 goal game is most likely. U3.5 and O2.5 can both be backed.

**BTTS Yes** — 62% → ⭐⭐⭐⭐
Norway have scored in every WC game (BTTS 100%, FTS 0%). England's defensive solidity (40% CS) is real, but Haaland/Sørloth represent elite aerial and counter-attack threat. 77% P(Norway score) from model.

### Corners
**Over 8.5 Total Corners** — ~77% → ⭐⭐⭐⭐⭐
England 6.2 corners/game, Norway 4.4/game. Norway's mid-block/low-block generates corner situations. Match λ=11.0. Highest-confidence corners pick.

**Over 9.5 Total Corners** — ~67% → ⭐⭐⭐⭐
Strong edge. Footystats match averages (10.6 and 10.4) both support this level.

**England Over 4.5 Corners** — ~75% → ⭐⭐⭐⭐⭐
England won 6.2 corners/game. Norway's compact shape will push England's attacks wide → more corner situations. Strong individual team pick.

**Norway Over 2.5 Corners** — ~82% → ⭐⭐⭐⭐⭐
Norway averaged 4.4 corners/game. Even with England dominating possession, Norway should comfortably clear this low bar.

### Cards
**Under 4.5 Total YC** — ~87% → ⭐⭐⭐⭐⭐
Turpin averages 3.38 YC/game (moderate). λ_total=2.59. P(≥5 YC) only ~13%. Strong high-confidence pick.

**Over 1.5 Total YC** — ~73% → ⭐⭐⭐⭐⭐
Physical match with two massive Norwegian strikers vs English defenders. England tend to give 1.4-1.8 YC/game. 73% P(2+ cards in match).

**England Over 0.5 YC** — ~87% → ⭐⭐⭐⭐⭐
England's team λ_YC=2.01. Defending against Haaland + Sørloth aerial play, England will pick up at least one card in nearly all scenarios. Very high confidence.

**Norway Under 2.5 YC** — ~95% → ⭐⭐⭐⭐⭐
Norway only 2 YC in 5G (0.4/game). Team λ_YC=0.58. Norway are extremely disciplined — they concede fouls but rarely get booked. Almost certain.

---

## Key Risks
- **Norway's xG overperformance:** If their conversion rate continues at 0.58 G/SoT (Haaland effect), Norway's expected goals understate their actual threat. England need to prevent Haaland getting into one-on-one positions.
- **Norway aerial threat vs England's CB pairing:** Konsa + Stones are solid but not elite aerially. Sørloth + Haaland as a dual target is unusual and could force errors.
- **England's SP edge eliminated by Norway's elite SP defense:** England's biggest structural weapon (0.344 SP xG/game) is neutralised by Norway conceding 0% from set pieces.
- **AET/pens randomness:** 24% chance of draw after 90 min. Penalty shootouts are coin flips (50/50) regardless of in-match quality.
